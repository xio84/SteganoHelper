import React, { Component } from "react";
// import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sound.css";
// import { text } from "@fortawesome/fontawesome-svg-core";
// import { randomInt } from "mathjs";

const truncate = (input) => {
  return (input.length > 10) ? input.substr(0, 9) + '...' : input;
}

let fileData = [];

let URLReader;
let fileReader;

class Sound extends Component {
  state = {
    selectedFile: undefined,
    steganoSrc: "",
    soundSrc: "",
    fileType: "",
    fileName: "",
    text: "",
    dataSize: 0
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
    // console.log(this.state.fileType)
    // console.log(content)
    const typedArray = new Uint8Array(fileReader.result);
    console.log(typedArray)

    fileData = [...typedArray];
    // console.log(fileData);
    
    this.readDataSize(fileData);
    
    // const encryptedBuffer = new Uint8Array(encrypted);
    
    // this.downloadExtended(encryptedBuffer);
    // this.setState({ soundSrc: content })
  }

  handleEncrypt = async (e) => {
    e.preventDefault();

    if (this.state.text !== "" && fileData !== []) {
      let array = [];
      for (var i = 0; i < this.state.text.length; i++) {
        array.push(this.state.text.charCodeAt(i));
      }
      console.log(array);
      for (i = 0; i < array.length; i++) {
        let bits = array[i].toString(2);
        bits = "00000000".substr(bits.length) + bits;
        for (var j = 0; j < 8; j++) {
          fileData[44+(i*8)+j] &= 254;
          fileData[44+(i*8)+j] += parseInt(bits.charAt(j));
        }
      }
      const typedArray = new Uint8Array(fileData);
      console.log(typedArray);

      this.downloadExtended(typedArray);
    } else {
      alert("Text is empty or no sound file!");
    }
  }

  handleDecrypt = async (e) => {
    if (fileData !== []) {
      let array = [];
      for (var i = 0; i < this.state.dataSize; i++) {
        let bits = "";
        for (var j = 0; j < 8; j++) {
          bits += fileData[44+(i*8)+j] & 1;
        }
        array.push(parseInt(bits, 2));
      }
      console.log(array);
      let text = "";
      for (i = 0; i < array.length; i++) {
        text += String.fromCharCode(array[i]);
      }
      alert(text);
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
        <div className="wrapper-encrypt">
          <div className="container-encrypt">
            <form className="encrypt-form" onSubmit={this.handleEncrypt}>
              <label>Text</label>
              <textarea id="text-input" placeholder={"Max character: " + (this.state.dataSize/8)} disabled={this.state.dataSize === 0}
                type="text" name="text" rows="6" onChange={this.onTextChange} value={this.state.text}/>

              <div className="button-container">
                <input id="file-input" type="file" accept="audio/wav" name="file" className="upload-button" onChange={this.onFileChange} />
                <label htmlFor="file-input">
                  <FontAwesomeIcon icon={this.state.fileName === "" ? "file-upload" : "file"} /> &nbsp; {this.state.fileName === "" ? "Upload" : truncate(this.state.fileName)}
                </label>
                <audio id="src-sound" src={this.state.soundSrc} controls={this.state.soundSrc!==""}></audio>
                <button className="encrypt-button" type="submit">
                  <FontAwesomeIcon icon="lock" /> &nbsp; Encrypt
                </button>
                <audio id="stegano-sound" src={this.state.steganoSrc} controls={this.state.steganoSrc!==""}></audio>

              </div>
            </form>
            <form className="encrypt-form" onSubmit={this.handleDecrypt}>
              <div className="button-container">
                <input id="file-input" type="file" accept="audio/wav" name="file" className="upload-button" onChange={this.onFileChange} />
                <label htmlFor="file-input">
                  <FontAwesomeIcon icon={this.state.fileName === "" ? "file-upload" : "file"} /> &nbsp; {this.state.fileName === "" ? "Upload" : truncate(this.state.fileName)}
                </label>
                <audio id="src-sound" src={this.state.soundSrc} controls={this.state.soundSrc!==""}></audio>
                <button className="encrypt-button" type="submit">
                  <FontAwesomeIcon icon="lock" /> &nbsp; Decrypt
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="modal-result" className="modal-encrypt">
          <div className="modal-content-container">
            <div className="modal-content">
              <p id="message"><span id="methodResult"></span> Result</p>

              <label className="messageResult">Plaintext</label>
              <textarea id="plaintextResult" className="encryptedResult" type="text" readOnly rows="6"></textarea>

              <label className="messageResult">Ciphertext</label>
              <textarea id="encryptedResult" className="encryptedResult" type="text" readOnly rows="6"></textarea>

              <div className="button-container">
                <button className="close-button" onClick={this.closeModal}>
                  <FontAwesomeIcon icon="times-circle" /> &nbsp; Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sound;
