import React, { Component } from "react";
// import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SoundDec.css";
var seedrandom = require('seedrandom');
// import { text } from "@fortawesome/fontawesome-svg-core";

let ExtVigenere = require("../../backend/extendedVigenere");

const truncate = (input) => {
  return (input.length > 10) ? input.substr(0, 9) + '...' : input;
}

// http://stackoverflow.com/questions/962802#962890
function deshuffle(array, seed) {
  var num, tmp, l = array.length;
  var myrng = new seedrandom(seed);
  let seedNum = [];
  for (var i=0; i<array.length; i++) {
    seedNum.push(Math.abs(myrng.int32()));
  }
  console.log(seedNum);
  for (i=array.length-1; i>=0; i--) {
    num = seedNum.pop();
    tmp = array[num % l];
    array[num % l] = array[i];
    array[i] = tmp;
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
    off: 0,
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

    var offset = this.state.off

    if (fileData !== []) {
      // Gets each last bit from audio
      let array = [];
      for (var i = 0; i < this.state.dataSize; i++) {
        let bits = "";
        for (var j = 0; j < 8; j++) {
          bits += fileData[offset+(i*8)+j] & 1;
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
    let offset1 = 0, offset2 = 0, offset = 0;
    for (var i = 19; i >= 16; i--) {
      console.log(offset1);
      offset1 = offset1 * 256;
      offset1 += dataArray[i];
    }
    for (i = 43; i >= 40; i--) {
      offset2 = offset2 * 256;
      offset2 += dataArray[i];
    }
    offset = offset1 + offset2;
    console.log(offset);
    this.setState({ off: (offset + 45) });
    this.setState({ dataSize: (dataArray.length - (offset + 45)) })

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
