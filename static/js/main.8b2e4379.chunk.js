(this["webpackJsonpstegano-helper"]=this["webpackJsonpstegano-helper"]||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/logo.2fc24170.png"},108:function(e,t,a){e.exports=a(347)},113:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},331:function(e,t,a){},334:function(e,t,a){},342:function(e,t){},343:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(101),l=a.n(o),c=(a(113),a(42)),i=a(102),s=a.n(i),u=a(8),d=a(16),m=a(17),f=a(19),h=a(18),p=(a(325),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bottombar"},r.a.createElement("div",{className:"bottombar-wrapper"},r.a.createElement("footer",null,"Copyright \xa9 2020 -\xa0",r.a.createElement("a",{className:"bottombar-a",href:"https://github.com/xio84"},"xio84"),"\xa0&\xa0",r.a.createElement("a",{className:"bottombar-a",href:"https://github.com/vincentbudianto"},"vincent VB"))))}}]),a}(n.Component)),g=a(28),v=(a(326),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement(g.b,{className:"navbar-a",to:"/title"},r.a.createElement("div",{className:"navbar-button"},r.a.createElement("font",{color:"white"},"Home"))),r.a.createElement(g.b,{className:"navbar-a",to:"/sound"},r.a.createElement("div",{className:"navbar-button"},r.a.createElement("font",{color:"white"},"Audio Encryption"))),r.a.createElement(g.b,{className:"navbar-a",to:"/sound-dec"},r.a.createElement("div",{className:"navbar-button"},r.a.createElement("font",{color:"white"},"Audio Decryption"))),r.a.createElement(g.b,{className:"navbar-a",to:"/video"},r.a.createElement("div",{className:"navbar-button"},r.a.createElement("font",{color:"white"},"Video Encryption")))))}}]),a}(n.Component)),b=a(103),y=a.n(b),E=(a(331),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper-title"},r.a.createElement("div",null,r.a.createElement("img",{src:y.a,className:"logo",alt:"logo",width:"40%"})),r.a.createElement("div",{className:"text-title1"},"Crypto Helper"),r.a.createElement("div",{className:"text-title2"},"Encryption and Decryption Tools")))}}]),a}(n.Component)),N=a(3),S=a.n(N),x=a(30),w=a(11),C=a(20),k=(a(334),a(100)),j=a(63),A=a(64),F=function(e){return e.length>10?e.substr(0,9)+"...":e};function O(e,t){for(var a,n,r=e.length,o=new k(t),l=0;l<e.length;l++)a=e[(n=Math.abs(o.int32()))%r],e[n%r]=e[l],e[l]=a;return e}var R,z,I=[],U=[],T=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={key:"",steganoName:"",selectedFile:void 0,steganoSrc:"",soundSrc:"",fileType:"",fileName:"",injectedFile:void 0,injectedFileName:"",text:"",off:0,dataSize:0,randomize:!1},e.onKeyChange=function(t){e.setState({key:t.target.value})},e.onNameChange=function(t){e.setState({steganoName:t.target.value})},e.onTextChange=function(t){e.setState({text:t.target.value})},e.onRandChange=function(t){e.setState({randomize:!e.state.randomize})},e.onTargetChange=function(t){void 0!==t.target.files[0]&&(e.setState({injectedFile:t.target.files[0]}),e.setState({injectedFileName:t.target.files[0].name}),void 0!==t.target.files[0]&&((z=new FileReader).onloadend=e.handleTargetRead,z.readAsArrayBuffer(t.target.files[0])))},e.onFileChange=function(t){void 0!==t.target.files[0]&&(e.setState({selectedFile:t.target.files[0]}),e.setState({fileName:t.target.files[0].name}),e.setState({fileType:t.target.files[0].type}),void 0!==t.target.files[0]&&((z=new FileReader).onloadend=e.handleFileRead,z.readAsArrayBuffer(t.target.files[0]),(R=new FileReader).onloadend=e.handleURLRead,R.readAsDataURL(t.target.files[0])))},e.handleFileRead=function(){var t=Object(w.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new Uint8Array(z.result),I=Object(x.a)(n),e.readDataSize(I);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleTargetRead=function(){var e=Object(w.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=new Uint8Array(z.result),U=Object(x.a)(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.handleEncrypt=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o,l,c,i,s,u,d,m,f,h,p,g,v,b,y,E,N,x;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),void 0===e.state.injectedFile||void 0===e.state.selectedFile){t.next=33;break}if(!((n=e.state.injectedFileName).length+U.length>Math.floor(e.state.dataSize/8-10))){t.next=6;break}return alert("File too long!"),t.abrupt("return");case 6:for(r=U,o=0,l=1,c=e.state.off,e.state.randomize&&(o=1,r=O(r,e.state.key)),r=j.encrypt(r,e.state.key),m=0,u=[0,0,0,0],i=n.length;i>0&&m<4;)console.log("nLen: "+i),u[m]+=i%256,m++,i=Math.floor(i/256);for(console.log(u),m=0,d=[0,0,0,0],s=r.length;s>0&&m<4;)console.log("fLen: "+i),d[m]+=s%256,m++,s=Math.floor(s/256);for(console.log(d),f=A.toASCII(n),r=u.concat(f).concat(d).concat(r),console.log(r),r.push(o),r=[l].concat(r),m=0;m<r.length;m++)for(h=r[m].toString(2),h="00000000".substr(h.length)+h,p=0;p<8;p++)I[c+8*m+p]&=254,I[c+8*m+p]+=parseInt(h.charAt(p));g=new Uint8Array(I),console.log(g),e.downloadExtended(g),t.next=52;break;case 33:if(""===e.state.text||void 0===e.state.selectedFile){t.next=51;break}if(!(e.state.text.length>Math.floor(e.state.dataSize/8-2))){t.next=37;break}return alert("Message too long!"),t.abrupt("return");case 37:for(v=A.toASCII(e.state.text),b=0,y=0,E=e.state.off,e.state.randomize&&(b=1,v=O(v,e.state.key)),(v=j.encrypt(v,e.state.key)).push(b),v=[y].concat(v),console.log(I),m=0;m<v.length;m++)for(N=v[m].toString(2),N="00000000".substr(N.length)+N,p=0;p<8;p++)I[E+8*m+p]&=254,I[E+8*m+p]+=parseInt(N.charAt(p));x=new Uint8Array(I),e.downloadExtended(x),t.next=52;break;case 51:alert("Text is empty or no sound file!");case 52:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleURLRead=function(t){e.setState({soundSrc:z.result})},e.downloadExtended=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("a"),r=new Blob([a],{type:e.state.fileType}),n.className="download-file",o=URL.createObjectURL(r),e.setState({steganoSrc:o}),n.href=o,n.download=e.state.steganoName,document.body.appendChild(n),n.click(),n.remove();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.readDataSize=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(0,r=0,o=!1;r<a.length&&!o;)100===a[r]&&97===a[r+1]&&116===a[r+2]&&97===a[r+3]&&(o=!0),r++;n=r+8,console.log(n),e.setState({off:n}),e.setState({dataSize:a.length-n});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"closeModal",value:function(){document.getElementById("modal-result").style.display="none"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper-encrypt"},r.a.createElement("div",{className:"container-encrypt"},r.a.createElement("form",{className:"encrypt-form",onSubmit:this.handleEncrypt},r.a.createElement("label",null,"Text"),r.a.createElement("textarea",{id:"text-input",placeholder:"Max character: "+Math.floor(this.state.dataSize/8-2),disabled:0===this.state.dataSize,type:"text",name:"text",rows:"6",onChange:this.onTextChange,value:this.state.text}),r.a.createElement("input",{id:"target-input",type:"file",name:"target",className:"target-button",onChange:this.onTargetChange}),r.a.createElement("label",{htmlFor:"target-input"},r.a.createElement(C.a,{icon:""===this.state.injectedFileName?"file-upload":"file"})," \xa0 ",""===this.state.injectedFileName?"Target":F(this.state.injectedFileName)),r.a.createElement("label",null,"Key"),r.a.createElement("input",{id:"key-input",placeholder:"Insert vigenere key here",type:"text",name:"key",onChange:this.onKeyChange,value:this.state.key}),r.a.createElement("label",null,"Save As..."),r.a.createElement("input",{id:"key-input",placeholder:"something.wav",type:"text",name:"key",onChange:this.onNameChange,value:this.state.steganoName}),r.a.createElement("label",null,"Randomize?"),r.a.createElement("input",{type:"checkbox",id:"rand-input",name:"rand-input",checked:this.state.randomize,onChange:this.onRandChange}),r.a.createElement("div",{className:"button-container"},r.a.createElement("input",{id:"file-input",type:"file",accept:"audio/wav",name:"file",className:"upload-button",onChange:this.onFileChange}),r.a.createElement("label",{htmlFor:"file-input"},r.a.createElement(C.a,{icon:""===this.state.fileName?"file-upload":"file"})," \xa0 ",""===this.state.fileName?"Upload":F(this.state.fileName)),r.a.createElement("audio",{id:"src-sound",src:this.state.soundSrc,controls:""!==this.state.soundSrc}),r.a.createElement("button",{className:"encrypt-button",type:"submit"},r.a.createElement(C.a,{icon:"lock"})," \xa0 Encrypt"),r.a.createElement("audio",{id:"stegano-sound",src:this.state.steganoSrc,controls:""!==this.state.steganoSrc}))))))}}]),a}(n.Component),D=(a(343),a(100)),M=a(63);function B(e,t){for(var a,n,r=e.length,o=new D(t),l=[],c=0;c<e.length;c++)l.push(Math.abs(o.int32()));for(console.log(l),c=e.length-1;c>=0;c--)n=e[(a=l.pop())%r],e[a%r]=e[c],e[c]=n;return e}var L,K,H,X,Z=[],J=[],V=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={key:"",selectedFile:void 0,steganoSrc:"",soundSrc:"",fileType:"",fileName:"",text:"",injectedFile:void 0,injectedFileName:"",off:0,dataSize:0},e.onKeyChange=function(t){e.setState({key:t.target.value})},e.onTextChange=function(t){e.setState({text:t.target.value})},e.onInjectedFileNameChange=function(t){e.setState({injectedFileName:t.target.value})},e.onFileChange=function(t){void 0!==t.target.files[0]&&(e.setState({selectedFile:t.target.files[0]}),e.setState({fileName:t.target.files[0].name}),e.setState({fileType:t.target.files[0].type}),void 0!==t.target.files[0]&&((K=new FileReader).onloadend=e.handleFileRead,K.readAsArrayBuffer(t.target.files[0]),(L=new FileReader).onloadend=e.handleURLRead,L.readAsDataURL(t.target.files[0])))},e.handleFileRead=function(){var t=Object(w.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new Uint8Array(K.result),Z=Object(x.a)(n),e.readDataSize(Z);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleDecrypt=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o,l,c,i,s,u,d,m,f,h,p;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state.off,Z!==[]){for(r=[],o=0;o<e.state.dataSize;o++){for(l="",c=0;c<8;c++)l+=1&Z[n+8*o+c];r.push(parseInt(l,2))}if(i=r[o=0],o++,s="",d=[],0===i){for(d=[];o<r.length&&r[o]>1;)d.push(r[o]),o++;for(u=r[o],console.log(u),r=d,console.log(r),r=M.decrypt(r,e.state.key),1===u&&(r=B(r,e.state.key),console.log(r)),o=0;o<r.length&&0!==r[o];)s+=String.fromCharCode(r[o]),o++;e.setState({text:s})}else{for(console.log("first byte === 1"),console.log(r),0,0,h="",m=r[o]+256*r[o+1]+256*r[o+2]*256+256*r[o+3]*256*256,p=(o+=4)+m;o<p;)h+=String.fromCharCode(r[o]),o++;for(f=r[o]+256*r[o+1]+256*r[o+2]*256+256*r[o+3]*256*256,d=[],p=(o+=4)+f;o<p;)d.push(r[o]),o++;u=r[o],console.log(u),r=d,console.log(r),r=M.decrypt(r,e.state.key),1===u&&(r=B(r,e.state.key),console.log(r)),J=r,e.setState({injectedFileName:h}),console.log(h),document.getElementById("modal-result").style.display="block"}}else alert("No sound file!");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleURLRead=function(t){e.setState({soundSrc:K.result})},e.downloadExtended=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o,l;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new Uint8Array(J),r=document.createElement("a"),o=new Blob([n],{}),r.className="download-file",l=URL.createObjectURL(o),e.setState({steganoSrc:l}),r.href=l,r.download=e.state.injectedFileName,document.body.appendChild(r),r.click(),r.remove();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.readDataSize=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(0,r=0,o=!1;r<a.length&&!o;)100===a[r]&&97===a[r+1]&&116===a[r+2]&&97===a[r+3]&&(o=!0),r++;n=r+8,console.log(n),e.setState({off:n}),e.setState({dataSize:a.length-n});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"closeModal",value:function(){document.getElementById("modal-result").style.display="none"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper-decrypt"},r.a.createElement("div",{className:"container-decrypt"},r.a.createElement("form",{className:"decrypt-form",onSubmit:this.handleDecrypt},r.a.createElement("label",null,"Text"),r.a.createElement("textarea",{id:"text-input",placeholder:"Max character: "+this.state.dataSize/8,disabled:0===this.state.dataSize,readOnly:!0,type:"text",name:"text",rows:"6",value:this.state.text}),r.a.createElement("label",null,"Key"),r.a.createElement("input",{id:"key-input",placeholder:"Insert vigenere key here",type:"text",name:"key",onChange:this.onKeyChange,value:this.state.key}),r.a.createElement("div",{className:"button-container"},r.a.createElement("input",{id:"file-input",type:"file",accept:"audio/wav",name:"file",className:"upload-button",onChange:this.onFileChange}),r.a.createElement("label",{htmlFor:"file-input"},r.a.createElement(C.a,{icon:""===this.state.fileName?"file-upload":"file"})," \xa0 ",""===this.state.fileName?"Upload":(e=this.state.fileName).length>10?e.substr(0,9)+"...":e),r.a.createElement("audio",{id:"src-sound",src:this.state.soundSrc,controls:""!==this.state.soundSrc}),r.a.createElement("button",{className:"decrypt-button",type:"submit"},r.a.createElement(C.a,{icon:"lock-open"})," \xa0 Decrypt"))),r.a.createElement("form",{hidden:""===this.state.injectedFileName,onSubmit:this.downloadExtended}))),r.a.createElement("div",{id:"modal-result",className:"modal-decrypt"},r.a.createElement("div",{className:"modal-content-container"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("p",{id:"message"},r.a.createElement("span",{id:"methodResult"})," Result"),r.a.createElement("label",null,"Save extracted file as..."),r.a.createElement("input",{id:"iFN-input",placeholder:"Name of injected file",type:"text",name:"injectedFN",onChange:this.onInjectedFileNameChange,value:this.state.injectedFileName}),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"download-button",onClick:this.downloadExtended},r.a.createElement(C.a,{icon:"download"})," \xa0 Download"),r.a.createElement("button",{className:"close-button",onClick:this.closeModal},r.a.createElement(C.a,{icon:"times-circle"})," \xa0 Close"))))));var e}}]),a}(n.Component),W=(a(344),a(63)),$=a(64),_=[],q=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={key:"",selectedFile:void 0,steganoSrc:"",videoSrc:"",fileType:"",fileName:"",text:"",dataSize:0,randomize:!1},e.onKeyChange=function(t){e.setState({key:t.target.value})},e.onTextChange=function(t){e.setState({text:t.target.value})},e.onRandChange=function(t){e.setState({randomize:!e.state.randomize})},e.onFileChange=function(t){if(void 0!==t.target.files[0]&&(e.setState({selectedFile:t.target.files[0]}),e.setState({fileName:t.target.files[0].name}),e.setState({fileType:t.target.files[0].type}),void 0!==t.target.files[0])){var a=URL.createObjectURL(t.target.files[0]);e.setState({videoSrc:a}),console.log(e.state.selectedFile),(X=new FileReader).onloadend=e.handleFileRead,X.readAsArrayBuffer(t.target.files[0]),(H=new FileReader).onloadend=e.handleURLRead,H.readAsDataURL(t.target.files[0])}},e.handleFileRead=function(){var t=Object(w.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new Uint8Array(X.result),console.log(n),_=Object(x.a)(n),console.log(_),e.readDataSize(_);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleEncrypt=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o,l,c,i;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(e.state.text.length>e.state.dataSize)){t.next=4;break}return alert("Message too long!"),t.abrupt("return");case 4:if(""!==e.state.text&&_!==[]){for(n=$.toASCII(e.state.text),0,(n=W.encrypt(n,e.state.key)).push(0),r=0,o=0;o<_.length;o++)109===_[o]&&111===_[o+1]&&118===_[o+2]&&105===_[o+3]&&(r=o);for(console.log(r),o=0;o<n.length;o++)for(l=n[o].toString(2),l="00000000".substr(l.length)+l,c=0;c<8;c++)_[r+4+8*o+c]&=254,_[r+4+8*o+c]+=parseInt(l.charAt(c));console.log(_),i=new Uint8Array(_),e.downloadExtended(i)}else alert("Text is empty or no sound file!");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleURLRead=function(t){e.setState({videoSrc:X.result})},e.downloadExtended=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("a"),r=new Blob([a],{type:e.state.fileType}),n.className="download-file",o=URL.createObjectURL(r),e.setState({steganoSrc:o}),n.href=o,n.download="Altered-"+e.state.fileName,document.body.appendChild(n),n.click(),n.remove();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.readDataSize=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=0,r="",o=7;o>=4;o--)n=parseInt(a[o]),r+=n.toString(16);n=parseInt(r,16)+8,e.setState({dataSize:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"closeModal",value:function(){document.getElementById("modal-result").style.display="none"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper-encrypt"},r.a.createElement("div",{className:"container-encrypt"},r.a.createElement("form",{className:"encrypt-form",onSubmit:this.handleEncrypt},r.a.createElement("label",null,"Text"),r.a.createElement("textarea",{id:"text-input",placeholder:"Max character: "+this.state.dataSize,disabled:0===this.state.dataSize,type:"text",name:"text",rows:"6",onChange:this.onTextChange,value:this.state.text}),r.a.createElement("label",null,"Key"),r.a.createElement("input",{id:"key-input",placeholder:"Insert vigenere key here",type:"text",name:"key",onChange:this.onKeyChange,value:this.state.key}),r.a.createElement("label",null,"Randomize?"),r.a.createElement("input",{type:"checkbox",id:"rand-input",name:"rand-input",checked:this.state.randomize,onChange:this.onRandChange}),r.a.createElement("div",{className:"button-container"},r.a.createElement("input",{id:"file-input",type:"file",accept:"video/avi",name:"file",className:"upload-button",onChange:this.onFileChange}),r.a.createElement("label",{htmlFor:"file-input"},r.a.createElement(C.a,{icon:""===this.state.fileName?"file-upload":"file"})," \xa0 ",""===this.state.fileName?"Upload":(e=this.state.fileName).length>10?e.substr(0,9)+"...":e),r.a.createElement("button",{className:"encrypt-button",type:"submit"},r.a.createElement(C.a,{icon:"lock"})," \xa0 Encrypt"))))));var e}}]),a}(n.Component);var G=function(){return r.a.createElement("main",null,r.a.createElement(v,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(u.a,{to:"/title"})}}),r.a.createElement(u.b,{exact:!0,path:"/title",component:E}),r.a.createElement(u.b,{exact:!0,path:"/sound",component:T}),r.a.createElement(u.b,{exact:!0,path:"/sound-dec",component:V}),r.a.createElement(u.b,{exact:!0,path:"/video",component:q})),r.a.createElement(p,null))},P=a(51),Q=a(104);function Y(){var e=Object(Q.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    transition: all 0.25s linear;\n  }\n\n  .logo {\n    filter: ",";\n  }\n  "]);return Y=function(){return e},e}var ee=Object(P.b)(Y(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.filter})),te={body:"#C2F2F2",text:"#361517",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)",filter:"invert(20%)"},ae={body:"#361537",text:"#EAFAEA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",filter:"invert(90%)"},ne=a(41),re=a(29),oe=(a(345),function(e){var t=e.theme,a=e.toggleTheme,n="light"===t;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("input",{readOnly:!0,onClick:a,type:"checkbox",id:"hide-checkbox",checked:!!n}),r.a.createElement("label",{htmlFor:"hide-checkbox",className:"toggle"},r.a.createElement("span",{className:"toggle-button"},r.a.createElement("span",{className:"crater crater-1"}),r.a.createElement("span",{className:"crater crater-2"}),r.a.createElement("span",{className:"crater crater-3"}),r.a.createElement("span",{className:"crater crater-4"}),r.a.createElement("span",{className:"crater crater-5"}),r.a.createElement("span",{className:"crater crater-6"}),r.a.createElement("span",{className:"crater crater-7"})),r.a.createElement("span",{className:"star star-1"}),r.a.createElement("span",{className:"star star-2"}),r.a.createElement("span",{className:"star star-3"}),r.a.createElement("span",{className:"star star-4"}),r.a.createElement("span",{className:"star star-5"}),r.a.createElement("span",{className:"star star-6"}),r.a.createElement("span",{className:"star star-7"}),r.a.createElement("span",{className:"star star-8"})))});a(346);ne.b.add(re.d,re.e,re.g,re.b,re.c,re.a,re.f);var le=function(){var e=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),l=Object(c.a)(o,2),i=l[0],s=l[1],u=function(e){window.localStorage.setItem("theme",e),r(e)};return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?u("dark"):e?r(e):u("light"),s(!0)}),[]),[a,function(){u("light"===a?"dark":"light")},i]}(),t=Object(c.a)(e,3),a=t[0],o=t[1],l=t[2],i="light"===a?te:ae,u="light"===a?"#7B1DCA":"#2CB9E1";return l?r.a.createElement(P.a,{theme:i},r.a.createElement(s.a,{className:"particles",params:{particles:{number:{value:150},line_linked:{shadow:{enable:!0,color:u,blur:3}}},interactivity:{events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"}}}}}),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(oe,{theme:a,toggleTheme:o}),r.a.createElement("div",null,r.a.createElement(g.a,{basename:"/Stegano-Helper"},r.a.createElement(G,null))))):r.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){var n=a(64);e.exports={encrypt:function(e,t){var a=e,r=t;if(""===r||void 0===r)return a;"string"==typeof e&&(a=n.toASCII(e)),"string"==typeof t&&(r=n.toASCII(t));for(var o=0;o<a.length;o++)a[o]=n.mod(a[o]+r[n.mod(o,r.length)],256);return a},decrypt:function(e,t){var a=e,r=t;if(""===r||void 0===r)return a;"string"==typeof e&&(a=n.toASCII(e)),"string"==typeof t&&(r=n.toASCII(t));for(var o=0;o<a.length;o++)a[o]=n.mod(a[o]-r[n.mod(o,r.length)],256);return a}}},64:function(e,t){var a="A";e.exports={isString:function(e){return"string"==typeof e},removeNonAlphabet:function(e){return e.replace(/[^a-zA-Z]/gi,"").toUpperCase()},removeNonAlphabetException:function(e){return e.replace(/[^a-zA-Z?]/gi,"").toUpperCase()},removeNonAlphabetHill:function(e){return e.replace(/[^a-zA-Z?#]/gi,"").toUpperCase()},removeDuplicates:function(e){return e.split("").filter((function(e,t,a){return a.indexOf(e)===t})).join("")},replaceCharacters:function(e,t,a){var n=new RegExp(t,"gi");return e.replace(n,a.toUpperCase())},toNumbers:function(e){e=this.removeNonAlphabet(e);for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n)-a.charCodeAt(0));return t},toNumbersException:function(e){e=this.removeNonAlphabetException(e);for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n)-a.charCodeAt(0));return t},toNumbersHill:function(e){e=this.removeNonAlphabetHill(e);for(var t=[],n=0;n<e.length;n++)"?"===e[n]?t.push(26):"#"===e[n]?t.push(27):t.push(e.charCodeAt(n)-a.charCodeAt(0));return t},toASCII:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.charCodeAt(a));return t},toAlphabet:function(e){for(var t="",n=0;n<e.length;n++)63===e[n]?t+=String.fromCharCode(e[n]):t+=String.fromCharCode(e[n]+a.charCodeAt(0));return t},toAlphabetHill:function(e){for(var t="",n=0;n<e.length;n++)26===e[n]?t+="?":27===e[n]?t+="#":t+=String.fromCharCode(e[n]+a.charCodeAt(0));return t},mod:function(e,t){var a=e%t;return Math.floor(a>=0?a:this.mod(e+t,t))},modInverse:function(e,t){for(var a=[],n=t;e<0;)e+=t;for(;n;){var r=[n,e%n];e=r[0],n=r[1],a.push({m:e,b:n})}if(1!==e)return NaN;for(var o=1,l=0,c=a.length-2;c>=0;--c){var i=[l,o-l*Math.floor(a[c].m/a[c].b)];o=i[0],l=i[1]}return(l%t+t)%t},bigram:function(e){e=this.removeNonAlphabet(e);for(var t=0,a="",n=[];t<e.length;)0===a.length?a+=e.charAt(t):1===a.length?a.charAt(0)===e.charAt(t)?(a+="X",t--):(a+=e.charAt(t),n.push(a),a=""):(n.push(a),a="",a+=e.charAt(t)),e.length%2!==0&&t===e.length-1&&a.length%2!==0?(a+="X",n.push(a)):t===e.length-1&&0!==a.length&&(a=e.charAt(t)+"X",n.push(a)),t++;return n},formatOutput:function(e,t){for(var a="",n=0;n<e.length;n+=t)a+=e.substr(n,t)+" ";return a}}}},[[108,1,2]]]);
//# sourceMappingURL=main.8b2e4379.chunk.js.map