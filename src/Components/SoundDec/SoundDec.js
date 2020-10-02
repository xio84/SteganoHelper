import React, { Component } from "react";
// import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SoundDec.css";
// import { text } from "@fortawesome/fontawesome-svg-core";
// import { randomInt } from "mathjs";

let ExtVigenere = require("../../backend/extendedVigenere");

const truncate = (input) => {
  return (input.length > 10) ? input.substr(0, 9) + '...' : input;
}

// http://stackoverflow.com/questions/962802#962890
function deshuffle(array, seed) {
  var tmp, l = array.length;
  let seedNum;
  for (var i=seed.length-1; i>=0; i--) {
    seedNum = seed.charCodeAt(i);
    tmp = array[seedNum % l];
    array[seedNum % l] = array[i % l];
    array[i % l] = tmp;
  }
  return array;
}

let fileData = [];

let URLReader;
let fileReader;

class SoundDec extends Component {
  state = {
    key: "",
    selectedFile: undefined,
    steganoSrc: "",
    soundSrc: "",
    fileType: "",
    fileName: "",
    text: "",
    dataSize: 0
  }

  onKeyChange = (e) => {
    this.setState({ key: e.target.value })
  }

  onTextChange = event => {
    this.setState({ text: event.target.value });
  }

  // On file select (from the pop up)
  onFileChange = event => {
    if (event.target.files[0] !== undefined) {
      this.setState({ selectedFile: event.target.files[0]});
      this.setState({ fileName: event.target.files[0].name });
      this.setState({ fileType: event.target.files[0].type });
      if (event.target.files[0] !== undefined) {
        fileReader = new FileReader();
        fileReader.onloadend = this.handleFileRead;
        fileReader.readAsArrayBuffer(event.target.files[0]);
        URLReader = new FileReader();
        URLReader.onloadend = this.handleURLRead;
        URLReader.readAsDataURL(event.target.files[0]);
      }
    }
  }

  handleFileRead = async (e) => {
    const typedArray = new Uint8Array(fileReader.result);

    fileData = [...typedArray];
    
    this.readDataSize(fileData);
  }

  handleDecrypt = async (e) => {
    e.preventDefault();

    if (fileData !== []) {
      // Gets each last bit from audio
      let array = [];
      for (var i = 0; i < this.state.dataSize; i++) {
        let bits = "";
        for (var j = 0; j < 8; j++) {
          bits += fileData[44+(i*8)+j] & 1;
        }
        array.push(parseInt(bits, 2));
      }

      // Extract only the text part
      i = 0;
      var tmp = [];
      while (i < array.length && array[i] > 1) {
        tmp.push(array[i]);
        i++;
      }
      var randomize = array[i];
      console.log(randomize);
      array = tmp;
      console.log(array);

      // Decrypts it
      array = ExtVigenere.decrypt(array, this.state.key);
      let res = "";

      // Derandomizes array
      if (randomize === 1) {
        array = deshuffle(array, this.state.key);
        console.log(array);
      }

      i = 0;
      while (i < array.length && array[i] !== 0) {
        res += String.fromCharCode(array[i]);
        i++;
      }
      this.setState({ text: res })
    } else {
      alert("No sound file!");
    }
  }
  
  handleURLRead = (e) => {
    this.setState({ soundSrc: fileReader.result })
  }

  downloadExtended = async (content) => {
    const element = document.createElement("a");
    const file = new Blob([content], {
      type: this.state.fileType,
    });

    element.className = "download-file";
    let url = URL.createObjectURL(file);
    this.setState({ steganoSrc: url })
    element.href = url; 
    element.download = "Altered-" + this.state.fileName;
    document.body.appendChild(element);
    element.click();
    element.remove();
  }

  readDataSize = async (dataArray) => {
    let max = 0;
    for (var i = 43; i >= 40; i--) {
      max = max * 256;
      max += dataArray[i];
      console.log(max)
    }
    this.setState({ dataSize: max });

  }

  closeModal() {
    document.getElementById("modal-result").style.display = "none";
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper-decrypt">
          <div className="container-decrypt">
            <form className="decrypt-form" onSubmit={this.handleDecrypt}>
              <label>Text</label>
              <textarea id="text-input" placeholder={"Max character: " + (this.state.dataSize/8)} disabled={this.state.dataSize === 0} readOnly
                  type="text" name="text" rows="6" value={this.state.text}/>

              <label>Key</label>
              <input id="key-input" placeholder="Insert vigenere key here" type="text" name="key" onChange={this.onKeyChange} value={this.state.key}/>

              <div className="button-container">
                <input id="file-input" type="file" accept="audio/wav" name="file" className="upload-button" onChange={this.onFileChange} />
                <label htmlFor="file-input">
                  <FontAwesomeIcon icon={this.state.fileName === "" ? "file-upload" : "file"} /> &nbsp; {this.state.fileName === "" ? "Upload" : truncate(this.state.fileName)}
                </label>
                <audio id="src-sound" src={this.state.soundSrc} controls={this.state.soundSrc!==""}></audio>
                <button className="decrypt-button" type="submit">
                  <FontAwesomeIcon icon="lock-open" /> &nbsp; Decrypt
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SoundDec;
