import React, { Component } from "react";
// import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Picture.css";
import { parse } from "mathjs";
// import { text } from "@fortawesome/fontawesome-svg-core";
// import { randomInt } from "mathjs";

const truncate = (input) => {
  return (input.length > 10) ? input.substr(0, 9) + '...' : input;
}

let fileData = [];

let URLReader;
let fileReader;

class Picture extends Component {
  state = {
    selectedFile: undefined,
    steganoSrc: "",
    pictureSrc: "",
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
    this.readDataSize(fileData);

    // const encryptedBuffer = new Uint8Array(encrypted);
    
    // this.downloadExtended(encryptedBuffer);
    // this.setState({ soundSrc: content })
  }

  constructBitMap = (ctx, width, height) => {
    let bitMap = []
    //let chunks = Math.ceil((width*height*24)/64)
    for (let i = 0; i < 24; i++){
      bitMap.push([])
    }
    
    let x = 0

    for (let i = 0; i < height; i++){
      for (let j = 0; j < width; j++){
        let imgData = ctx.getImageData(j,i,1,1)
        let bitR = imgData.data[0].toString(2)
        bitR = "00000000".substr(bitR.length) + bitR;

        let bitG = imgData.data[1].toString(2)
        bitG = "00000000".substr(bitG.length) + bitG;

        let bitB = imgData.data[2].toString(2)
        bitB = "00000000".substr(bitB.length) + bitB; 
        
        let bitTot = bitR+bitG+bitB
        if (bitMap[x*24].length == 64){
          for (let i = 0; i < 24; i++){
            bitMap.push([])
          }
          x += 1
        }
        for (let k = 0; k < 24; k++){
          bitMap[(x*24)+k].push(bitTot[k])
        }
      }
    }
    for (let i = 0; i < bitMap.length; i++){
      if (bitMap[i].length < 64){
        for (let j = 0; j < 64-bitMap[i].length; j++){
          bitMap[i].push("0")
        }
      }
    }
    // for (let i = 0; i < bitMap.length; i++){
    //   for (let j = 63; j > 0; j--){
    //     bitMap[i][j] ^= bitMap[i][j-1]
    //   }
    // }
    return bitMap
  }


  analyzeAndHide = (bitMap, message) => {
    let threshold = 0.3
    let j = 0
    let s = 0
    let chunk = 0 
    for (let i = 0; i < message.length; i += 8){
      console.log("HELP")
      
      while (j < bitMap.length) {
        let Mat = []
        for (let k = 0; k < 8; k++){
          Mat.push([])
        }

        let x = 0
        for (let l = 0; l < bitMap[j].length; l++){
          if (Mat[x].length == 8){
            x += 1
          }
          Mat[x].push(bitMap[j][l])
        }

        let sum1 = 0 
        let sum2 = 0
        for (let k = 0; k < 7; k++){
          for (let l = 0; l < 7; l++){
            if (Mat[k][l] != Mat[k][l+1]){
              sum1 += 1
            }

            if (Mat[l][k] != Mat[l+1][k]){
              sum2 += 1
            }

          }
        }
        let sumTot = sum1*2 + sum2*2
        s += sumTot
        if (sumTot / 112 > 0.3){
          
          let limit = 8 > (message.length-(chunk*8)) ? (message.length-(chunk*8)) : 8
          for (let p = 0; p < limit; p++){
            let bits = message[chunk*8+p].toString(2)
            bits = "00000000".substr(bits.length) + bits;
            console.log(bits)
            for (let q = 0; q < 8; q++){
              console.log(j)
              bitMap[j][(8*p)+q] = bits[q]
            }
          }
          console.log(bitMap[j])
          console.log(j)
          j += 1
          chunk += 1
          break          
        }
        j += 1

      }
    }
    console.log(s)
    // for (let i = 0; i < bitMap.length; i++){
    //   for (let j = 0; j > 64; j--){
    //     bitMap[i][j] ^= bitMap[i][j+1]
    //   }
    // }
    return bitMap
  }

  assembleResult = (c, bitMap, width, height) => {
    console.log(bitMap)
    const {fileType} = this.state
    let iters = bitMap.length/24
    console.log(iters)
    let count = 0
    console.log(bitMap.length)
    let x = 0 
    let y = 0
    let ctx = c.getContext("2d")
    for (let i = 0; i < iters; i++){
      
      for (let j = 0; j < bitMap[i].length; j++){
        let r = ""
        let g = ""
        let b = ""
        
        for (let k = 0; k < 24; k++){

          if (r.length !== 8){
            r += bitMap[i*24+k][j]
          } else {

            if (g.length !== 8){
              g += bitMap[i*24+k][j]
            } else {

              if (b.length !== 8){
                b += bitMap[i*24+k][j]
              }
            }
          } 
          
        }
        
        r = parseInt(r,2)
        g = parseInt(g,2)
        b = parseInt(b,2)
        if (r === g && g === b){
          count++
        }

  
        let imgData = ctx.getImageData(x,y,1,1)
        imgData.data[0] = r
        imgData.data[1] = g
        imgData.data[2] = b
        
        ctx.putImageData(imgData, x, y)
        if (x >= width){
          x = 0
          y += 1
        }
        x += 1
      }
      
    }  

    console.log(width*height)
    console.log(count)
    let dest = document.getElementById('stegano-picture')
    let img = document.getElementById('src-picture')
    let c2 = document.createElement('canvas')
    let ctx3 = c2.getContext("2d")
    ctx3.drawImage(img,0,0)
    console.log(ctx3.getImageData(0,0,c.width,c.height))
    dest.src = c.toDataURL(fileType)
    let ctx2 = c.getContext("2d")
    console.log(ctx2.getImageData(0,0,c.width,c.height)) 
  }


  handleEncrypt = async (e) => {
    e.preventDefault();
    const {fileType} = this.state

    if (this.state.text !== "" && fileData !== []) {
      let array = [];
      for (var i = 0; i < this.state.text.length; i++) {
        array.push(this.state.text.charCodeAt(i));
      }
      console.log(array);
      let img = document.getElementById('src-picture')
      let c = document.createElement('canvas')
      c.width = img.width
      c.height = img.height
      console.log(img.width)
      console.log(img.height)
      let ctx = c.getContext("2d")
      ctx.drawImage(img,0,0)
      let bitMap = this.constructBitMap(ctx, c.width, c.height)
      bitMap = this.analyzeAndHide(bitMap, array)
      this.assembleResult(c, bitMap, c.width, c.height)



      // Stegano LSB
      // console.log(ctx.getImageData(0,0,c.width,c.height))
      // let x = 0
      // let y = 0
      // for (let i = 0; i < array.length; i++){
      //   let bits = array[i].toString(2)
      //   bits = "00000000".substr(bits.length) + bits;
      //   for (let j = 0; j < 8; j+=3){
      //     if (x == img.width){
      //       y += 1
      //       x = 0
      //     }
      //     let imgData = ctx.getImageData(x,y,1,1)
      //     imgData.data[0] &= 254
      //     imgData.data[1] &= 254
      //     if (bits[j+2] !== undefined){
      //       imgData.data[2] &= 254
      //       imgData.data[2] += parseInt(bits.charAt(j+2))
      //     }
      //     imgData.data[1] += parseInt(bits.charAt(j+1))
      //     imgData.data[0] += parseInt(bits.charAt(j))
      //     ctx.putImageData(imgData, x, y)
      //     x += 1
      //   }

  
      // }
      // let dest = document.getElementById('stegano-picture')
      // dest.src = c.toDataURL(fileType)
      // let ctx2 = c.getContext("2d")
      // console.log(ctx2.getImageData(0,0,c.width,c.height)) 

      
    } else {
      alert("Text is empty or no picture file!");
    }
  }

  handleDecrypt = async (e) => {
    if (fileData !== []) {
      let array = [];
      let img = document.getElementById('src-picture')
      let c = document.createElement('canvas')
      c.width = img.width
      c.height = img.height
      let ctx = c.getContext("2d")
      ctx.drawImage(img,0,0)

      // Decrypt BPCS
      let bitMap = this.constructBitMap(ctx, c.width, c.height)
      let temp = ""
      let result = ""
      for (let i = 0; i < bitMap.length; i++){
        if (i == 495){
          console.log(bitMap[i])
        }
      }
      for (let i = 0; i < bitMap.length; i++){
        for (let j = 0; j < bitMap[i].length; j++){
          if (temp.length == 8){
            let res = parseInt(temp,2)
            result += String.fromCharCode(res)
            temp = ""
          }
          temp += bitMap[i][j]
        }
      }
      let plain = ""
      for (let i = 0; i < result.length; i++){
        if (result[i].match(/^[0-9a-zA-Z]+$/)){
          plain += result[i]
        }
      }
      console.log(plain)

      

      // Decrypt LSB
      // let im = ctx.getImageData(0,0,c.width,c.height)
      // console.log(im)
      // let bits = "";
      // for (let i = 0; i < img.height; i++){
      //   for (let j = 0; j < img.width; j++){
          
      //       let imgData = ctx.getImageData(j,i,1,1)
            
      //       bits += imgData.data[0] & 1;
      //       bits += imgData.data[1] & 1;

      //       if (bits.length + 1 < 8){
      //         bits += imgData.data[2] & 1;
      //       }
      //       if (bits.length >= 8){
      //         array.push(parseInt(bits,2))
      //         bits = ""
      //       }
          
          
      //   }
      // }
      // let text = "";
      // for (let i = 0; i < array.length; i++) {
      //   text += String.fromCharCode(array[i]);
      // }
      // console.log(text)
    } else {
      alert("No paint file!");
    }
  }
  
  handleURLRead = (e) => {
    const {fileType} = this.state
    const typedArray = new Uint8Array(fileReader.result);
    const blob = new Blob([typedArray],{ type:fileType})
    const urlCreator = window.URL || window.webkitURL
    const imageUrl = urlCreator.createObjectURL(blob)
    this.setState({ pictureSrc: imageUrl })
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
                <input id="file-input" type="file" accept="image/bmp,image/png" name="file" className="upload-button" onChange={this.onFileChange} />
                <label htmlFor="file-input">
                  <FontAwesomeIcon icon={this.state.fileName === "" ? "file-upload" : "file"} /> &nbsp; {this.state.fileName === "" ? "Upload" : truncate(this.state.fileName)}
                </label>
                <img id="src-picture" src={this.state.pictureSrc}></img>
                <button className="encrypt-button" type="submit">
                  <FontAwesomeIcon icon="lock" /> &nbsp; Encrypt
                </button>
                <img id="stegano-picture" src={this.state.steganoSrc}></img>
              </div>
              <button onClick={this.handleDecrypt}>HELP</button>
            </form>
            <form className="encrypt-form" onSubmit={this.handleDecrypt}>
              <div className="button-container">
                <input id="file-input" type="file" accept="image/bmp,image/png" name="file" className="upload-button" onChange={this.onFileChange} />
                <label htmlFor="file-input">
                  <FontAwesomeIcon icon={this.state.fileName === "" ? "file-upload" : "file"} /> &nbsp; {this.state.fileName === "" ? "Upload" : truncate(this.state.fileName)}
                </label>
                <img id="src-picture" src={this.state.pictureSrc}></img>
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

export default Picture;
