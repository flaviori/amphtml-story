(self.AMP=self.AMP||[]).push({n:"amp-story",v:"1504634204476",f:(function(AMP){var e,m=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a}(this),aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function n(){n=function(){};m.Symbol||(m.Symbol=ba)}var ca=0;function ba(a){return"jscomp_symbol_"+(a||"")+ca++}
function p(){n();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return q(this)}});p=function(){}}function q(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function da(a){p();var b={next:a};b[m.Symbol.iterator]=function(){return this};return b}function r(a){p();var b=a[Symbol.iterator];return b?b.call(a):q(a)}
function t(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,d);f&&Object.defineProperty(a,d,f)}else a[d]=b[d]};function ea(a){return"number"===typeof a&&isFinite(a)};Date.now();self.log=self.log||{user:null,dev:null};var u=self.log;function v(){if(u.user)return u.user;throw Error("failed to call initLogConstructor");}function w(){if(u.dev)return u.dev;throw Error("failed to call initLogConstructor");};var fa=Object.prototype.hasOwnProperty;function x(){var a,b=Object.create(null);a&&Object.assign(b,a);return b};function y(a,b){if(a.nodeType){var c=(a.ownerDocument||a).defaultView;if(c=c!=(c.__AMP_TOP||c)&&z(c,b)?A(c,b):null)return c}c=B(a);c=C(c);return A(c,b)}function ha(a,b){var c,d=a=a.__AMP_TOP||a,f=a,g=b,h=D(d),k=h["story-variable"];k||(k=h["story-variable"]={obj:null,promise:null,resolve:null,context:null,ctor:null});k.ctor||k.obj||(k.ctor=g,k.context=f,k.resolve&&A(d,"story-variable"));c&&A(a,"story-variable")}function E(a,b){a=a.__AMP_TOP||a;return A(a,b)}
function B(a){return a.nodeType?E((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function C(a){a=B(a);return a.isSingleDoc()?a.win:a}function A(a,b){z(a,b);var c=D(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ia(a){var b=ja(a);if(b)return b;var c,d=new Promise(function(a){c=a});D(a)["amp-analytics-instrumentation"]={obj:null,promise:d,resolve:c,context:null,ctor:null};return d}
function ja(a){var b=D(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;A(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function D(a){var b=a.services;b||(b=a.services={});return b}function z(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};var ka={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},la=/(&|<|>|"|'|`)/g;function ma(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a}function na(a,b,c){for(var d=a;d&&d!==c;d=d.parentElement)if(b(d))return d;return null}function oa(a){return ka[a]};function pa(a){return a.ampExtendedElements?!!a.ampExtendedElements["amp-analytics"]:!1}function qa(a){var b=B(a),c=ja(C(a));return c?c:Promise.resolve().then(function(){return pa(b.win)?ia(C(a)):b.whenBodyAvailable().then(function(){return pa(b.win)?ia(C(a)):null})})};Promise.resolve();var F,ra="Webkit webkit Moz moz ms O o".split(" ");function sa(a,b){for(var c in b){var d=a,f=b[c],g;g=d.style;var h=c;if(2>h.length?0:0==h.lastIndexOf("--",0))g=h;else{F||(F=x());var k=F[h];if(!k){k=h;if(void 0===g[h]){var l;l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var I=0;I<ra.length;I++){var ga=ra[I]+l;if(void 0!==g[ga]){l=ga;break b}}l=""}void 0!==g[l]&&(k=l)}F[h]=k}g=k}g&&(d.style[g]=f)}};function ta(a,b,c){function d(a){try{return g(a)}catch(l){throw self.reportError(l),l;}}var f=a,g=b,h=c||!1;f.addEventListener("ended",d,h);return function(){f&&f.removeEventListener("ended",d,h);d=f=g=null}};function ua(a,b,c){var d=b,f=ta(a,function(a){try{d(a)}finally{d=null,f()}},c);return f};function va(){this.g=null}e=va.prototype;e.add=function(a){var b=this;this.g||(this.g=[]);this.g.push(a);return function(){b.remove(a)}};e.remove=function(a){this.g&&(a=this.g.indexOf(a),-1<a&&this.g.splice(a,1))};e.removeAll=function(){this.g&&(this.g.length=0)};e.fire=function(a){if(this.g)for(var b=this.g,c=0;c<b.length;c++)(0,b[c])(a)};e.getHandlerCount=function(){return this.g?this.g.length:0};function wa(a){var b=!1,c=null;return function(){b||(c=a(),b=!0);return c}};var xa={"align-content":"alignContent","align-items":"alignItems","align-self":"alignSelf","grid-area":"gridArea","justify-content":"justifyContent","justify-items":"justifyItems","justify-self":"justifySelf"},ya=Object.keys(xa).map(function(a){return"["+a+"]"}).join(","),za={fill:"i-amp-story-grid-template-fill",vertical:"i-amp-story-grid-template-vertical",horizontal:"i-amp-story-grid-template-horizontal",thirds:"i-amp-story-grid-template-thirds"};
function G(a){AMP.BaseElement.apply(this,arguments)}t(G,AMP.BaseElement);G.prototype.buildCallback=function(){if(this.element.hasAttribute("template")){var a=this.element.getAttribute("template");this.element.classList.add(za[a])}Aa(this.element);for(var a=this.element.querySelectorAll(ya),a=r(a),b=a.next();!b.done;b=a.next())Aa(b.value)};G.prototype.prerenderAllowed=function(){return!0};
function Aa(a){for(var b=a.attributes.length-1;0<=b;b--){var c=a.attributes[b],d=c.name.toLowerCase(),f=xa[d];f&&(a.style[f]=c.value,a.removeAttribute(d))}}G.prototype.isLayoutSupported=function(a){return"container"==a};AMP.registerElement("amp-story-grid-layer",G);function Ba(a,b,c){var d=new Event(b,{bubbles:!!c});d.initEvent&&d.initEvent(b,!!c);a.dispatchEvent(d)};function Ca(a){return a}function Da(a){if(a.hasAttribute("background-audio")){var b=a.ownerDocument.createElement("audio"),c=a.getAttribute("background-audio");b.setAttribute("src",c);b.setAttribute("preload","auto");b.setAttribute("loop","");b.setAttribute("autoplay","");b.classList.add("i-amp-story-background-audio");a.appendChild(b)}}function Ea(a,b){this.D={};this.i=[];this.$=0;this.H=!0;this.b=a;this.ba=b}e=Ea.prototype;
e.load=function(a){var b;(b=this.D[a.id])||(a instanceof Element||w().error("amp-story","Played item must be element."),b=a instanceof HTMLMediaElement&&!a.muted?new H(this.b,a):void 0);var c=b;if(!c)return Promise.resolve();a.id||(a.id="i-amphtml-playable-"+this.$++);this.D[a.id]=c;return c.load()};e.ea=function(a){return a.querySelectorAll("audio, video")};
e.play=function(a){var b=this;this.load(a).then(function(){return b.D[a.id]}).then(function(a){!a||0<=b.i.indexOf(a)||(a.setVolume(1,0,Ca),b.H&&a.mute(),b.i.push(a),Fa(b))})};e.stop=function(a){if(a=this.D[a.id])a=this.i.indexOf(a),0>a||(this.i.splice(a,1),Fa(this))};e.muteAll=function(){this.i.forEach(function(a){a.mute()});this.H=!0};e.unmuteAll=function(){this.i.forEach(function(a){a.unmute()});this.H=!1};
function Fa(a){var b=0<a.i.length;Ba(a.ba,b?"ampstory:audioplaying":"ampstory:audiostopped",!1);var c=[],d=0;a.i.forEach(function(a){a=a.getDepth();void 0===c[a]&&(c[a]=0,d++)});var f=0;c.forEach(function(a,b){f++;c[b]=d-f});a.i.forEach(function(a){var b=a.getDepth(),d=Math.pow(.5,c[b]);a.setVolume(d,500,Ca)})}function J(a,b){this.win=a;this.da=b;a=0;for(var c=b;c;c=c.parentElement)a++;b.classList.contains("i-amp-story-background-audio")&&a--;this.V=a}e=J.prototype;e.getSourceElement=function(){return this.da};
e.getDepth=function(){return this.V};e.load=function(){return Promise.resolve()};e.isLoaded=function(){return!1};e.play=function(){};e.setVolume=function(){};e.stop=function(){};e.unload=function(){};e.mute=function(){};e.unmute=function(){};e.isMuted=function(){};function H(a,b){J.call(this,a,b);this.c=b}t(H,J);e=H.prototype;e.isLoaded=function(){return!!this.c};e.isPlaying=function(){return!this.c.paused};e.play=function(){this.c.play()};
e.setVolume=function(a){a!==this.c.volume&&(this.c.volume=a)};e.stop=function(){this.c.pause();this.c.currentTime=0};e.mute=function(){this.c.muted=!0};e.unmute=function(){this.c.muted=!1};e.isMuted=function(){return this.c.muted};var Ga={"amp-audio, amp-video, .i-amp-story-background-audio":function(a){return new K(a)},"amp-img, amp-anim":function(a){return new L(a)},".i-amphtml-video-interface":function(a){return new M(a)}};function N(a){AMP.BaseElement.call(this,a);this.aa=[]}t(N,AMP.BaseElement);e=N.prototype;e.buildCallback=function(){Da(this.element);for(var a=this.element.querySelectorAll("amp-audio, amp-video"),a=r(a),b=a.next();!b.done;b=a.next())b.value.setAttribute("preload","auto");Ha(this)};
function Ha(a){var b=a.win.document.createElement("div");b.classList.add("i-amp-story-page-loading-screen");b.innerHTML='<ul class="i-amp-story-page-loading-dots">\n      <li class="i-amp-story-page-loading-dot"></li>\n      <li class="i-amp-story-page-loading-dot"></li>\n      <li class="i-amp-story-page-loading-dot"></li>\n    </ul>\n    <p class="i-amp-story-page-loading-text">Loading</p>';a.element.appendChild(b);var c=[];Object.keys(Ga).forEach(function(b){var d=a.element.querySelectorAll(b),
g=Ga[b];Array.prototype.forEach.call(d,function(b){var d=g(b);c.push(d.loadPromise);a.aa.push(d)})});Promise.all(c).then(function(){a.element.classList.add("i-amp-story-page-loaded")})}e.isLayoutSupported=function(a){return"container"==a};e.pauseCallback=function(){for(var a=this.element.querySelectorAll("audio, video"),a=r(a),b=a.next();!b.done;b=a.next())b=b.value,b.pause(),b.currentTime=0};
e.resumeCallback=function(){for(var a=this.element.querySelectorAll("audio, video"),a=r(a),b=a.next();!b.done;b=a.next())b.value.play()};e.prerenderAllowed=function(){return!0};
function O(a,b,c){var d=this;this.element=a;this.element.classList.add("i-amp-story-page-element");this.X=b;this.ca=c||b;this.loadPromise=Ia(this).then(function(){d.element.classList.add("i-amp-story-page-element-loaded")});this.showPromise=Ja(this).then(function(){d.element.classList.add("i-amp-story-page-element-shown")})}function Ja(a){return a.canBeShown()?Promise.resolve():new Promise(function(b){a.element.addEventListener(a.ca,function(){a.canBeShown()&&b()},!0)})}
function Ia(a){return a.isLoaded()?Promise.resolve():new Promise(function(b){a.element.addEventListener(a.X,function(){var c=a.isLoaded();console.log("element is "+(c?"":"not ")+"loaded",a.element);a.isLoaded()&&b()},!0)})}O.prototype.canBeShown=function(){return this.isLoaded()};O.prototype.isLoaded=function(){return!1};function K(a){O.call(this,a,"loadeddata");this.C=null}t(K,O);
K.prototype.w=function(){this.element instanceof HTMLMediaElement?this.C=this.element:this.C||(this.C=this.element.querySelector("audio, video"));return this.C};K.prototype.canBeShown=function(){var a=this.w();a&&console.log("canBeShown: element ready state is "+a.readyState,a);return!!(a&&2<=a.readyState)};K.prototype.isLoaded=function(){var a=this.w();a&&console.log("isLoaded: element ready state is "+a.readyState,a);return!!(a&&3<=a.readyState)};
function L(a){O.call(this,a,"load");this.A=null}t(L,O);L.prototype.isLoaded=function(){this.element instanceof HTMLImageElement?this.A=this.element:this.A||(this.A=this.element.querySelector("img"));var a=this.A;return!!(a&&a.complete&&a.naturalWidth&&a.naturalHeight)};function M(a){O.call(this,a,"load")}t(M,O);M.prototype.isLoaded=function(){return this.element.hasAttribute("i-amphtml-layout")};AMP.registerElement("amp-story-page",N);function P(){this.J=new va}P.prototype.installConsumer=function(a){this.J.add(function(b){return a.onStateChange(b)})};P.prototype.updateActivePage=function(a,b){var c={pageIndex:a};b&&(c.pageId=b);this.J.fire({type:0,value:c})};function Ka(a,b){qa(a).then(function(c){c&&c.triggerEventForTarget(a,"story-page-visible",b)})}function La(a){this.c=a;this.O=x()}La.prototype.onStateChange=function(a){switch(a.type){case 0:var b=a.value.pageIndex,c=a.value.pageId;fa.call(this.O,b)||(Ka(this.c,{pageIndex:b.toString(),pageId:c}),this.O[b]=!0)}};function Q(a){this.b=a;this.s=!1;this.a=null}
Q.prototype.build=function(){if(this.s)return this.getRoot();this.s=!0;this.a=this.b.document.createElement("section");this.a.classList.add("i-amp-story-bookend");this.a.innerHTML='<h3 class="i-amp-story-bookend-heading">Share the story</h3>\n    <ul class="i-amp-story-bookend-share">\n      <li>\n        <div class="i-amp-story-bookend-share-icon">\n          <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">\n        <path fill="none" d="M0 0h24v24H0V0z"/>\n        <path d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2zM8 11v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42S5.61 7.58 8 7.58c1.36 0 2.27.58 2.79 1.08l1.9-1.83C11.47 5.69 9.89 5 8 5c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H8z"/>\n        <path fill="none" d="M1 5h14v14H1z"/>\n      </svg>\n        </div>\n      </li>\n      <li>\n        <div class="i-amp-story-bookend-share-icon">\n          <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">\n        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>\n        <path d="M0 0h24v24H0z" fill="none"/>\n      </svg>\n        </div>\n      </li>\n      <li>\n        <div class="i-amp-story-bookend-share-icon">\n          <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="#000000">\n        <path d="M0 0h24v24H0z" fill="none"/>\n        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>\n      </svg>\n        </div>\n      </li>\n    </ul>';return this.getRoot()};
Q.prototype.isBuilt=function(){return this.s};Q.prototype.setRelatedArticles=function(a){var b=this;this.isBuilt();var c=this.b.document.createDocumentFragment();a.forEach(function(a){return c.appendChild(Ma(b,a))});this.getRoot().appendChild(c)};function Ma(a,b){var c=a.b.document.createDocumentFragment();b.heading&&c.appendChild(Na(a,b.heading));c.appendChild(Oa(a,b.articles));return c}
function Oa(a,b){var c=ma(a.b.document,"div",{"class":"i-amp-story-bookend-article-set"});b.forEach(function(b){return c.appendChild(Pa(a,b))});return c}function Na(a,b){var c=ma(a.b.document,"h3",{"class":"i-amp-story-bookend-heading"});a=(a=b)?a.replace(la,oa):a;c.innerText=a;return c}
function Pa(a,b){a=a.b.document.createElement("article");a.innerHTML=(b.image?'<div class="i-amp-story-bookend-article-image">\n        <img src="'+b.image+'"\n            width="116"\n            height="116">\n        </img>\n      </div>':"")+'\n      <h2 class="i-amp-story-bookend-article-heading">\n        '+b.title+'\n      </h2>\n      <div class="i-amp-story-bookend-article-meta">\n        example.com - 10 mins\n      </div>';return a}Q.prototype.getRoot=function(){this.isBuilt();return this.a};function Qa(a,b){b?a.setAttribute("hidden","hidden"):a.removeAttribute("hidden")}function Ra(a){this.b=a;this.s=!1;this.a=null;this.W=!1;this.P=this.S=this.L=this.F=this.G=null}e=Ra.prototype;
e.build=function(){if(this.s)return this.getRoot();this.s=!0;this.a=this.b.document.createElement("aside");this.a.classList.add("i-amp-story-system-layer");this.a.innerHTML='<div class="i-amp-story-progress">\n      <div class="i-amp-story-progress-bar"></div>\n      <div class="i-amp-story-progress-value"></div>\n    </div>\n    <div class="i-amp-story-ui-right">\n      <div role="button" class="i-amp-story-unmute-audio-control i-amp-story-button">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#FFFFFF">\n          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>\n          <path d="M0 0h24v24H0z" fill="none"/>\n        </svg>\n      </div>\n      <div role="button" class="i-amp-story-mute-audio-control i-amp-story-button">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#FFFFFF">\n          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>\n          <path d="M0 0h24v24H0z" fill="none"/>\n        </svg>\n      </div>\n      <div role="button" class="i-amp-story-exit-fullscreen i-amp-story-button" hidden>\n        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n          <path d="M0 0h24v24H0z" fill="none"/>\n          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>\n        </svg>\n      </div>\n      <div div role="button" class="i-amp-story-bookend-close i-amp-story-button" hidden>\n        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n          <path d="M0 0h24v24H0z" fill="none"/>\n        </svg>\n      </div role="button">\n    </nav>';this.G=
this.a.querySelector(".i-amp-story-exit-fullscreen");this.F=this.a.querySelector(".i-amp-story-bookend-close");this.L=this.a.querySelector(".i-amp-story-mute-audio-control");this.S=this.a.querySelector(".i-amp-story-unmute-audio-control");this.P=this.a.querySelector(".i-amp-story-progress-value");Sa(this);return this.getRoot()};
function Sa(a){a.G.addEventListener("click",function(b){R(a,"ampstory:exitfullscreen",b)});a.F.addEventListener("click",function(b){R(a,"ampstory:closebookend",b)});a.L.addEventListener("click",function(b){R(a,"ampstory:mute",b)});a.S.addEventListener("click",function(b){R(a,"ampstory:unmute",b)})}e.getRoot=function(){return this.a};e.setInFullScreen=function(a){this.W=a;Ta(this,a)};function Ta(a,b){E(a.b,"vsync").mutate(function(){Qa(a.G,!b)})}
e.toggleCloseBookendButton=function(a){var b=this;E(this.b,"vsync").mutate(function(){Qa(b.F,!a)})};function R(a,b,c){c&&c.stopPropagation();Ba(a.getRoot(),b,!0)}e.updateProgressBar=function(a,b){var c=this,d=a/b;E(this.b,"vsync").mutate(function(){sa(c.P,{transform:"scale("+(d+",1")+")"})})};function S(){this.M=this.N=null}S.prototype.onStateChange=function(a){switch(a.type){case 0:this.N=a.value.pageIndex,this.M=a.value.pageId}};m.Object.defineProperties(S.prototype,{pageIndex:{configurable:!0,enumerable:!0,get:function(){return this.N}},pageId:{configurable:!0,enumerable:!0,get:function(){return this.M}}});function Ua(a){var b={title:v().assert(a.title),url:v().assert(a.url)};a.image&&(b.image=a.image);return b}function Va(a){return Object.keys(a).map(function(b){var c={articles:a[b].map(Ua)};b.trim().length&&(c.heading=b);return c})};function Wa(a){a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullScreen?a.webkitRequestFullScreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.msRequestFullscreen?a.msRequestFullscreen():w().warn("Ignored fullscreen request.")};var Xa=/^(\d+)ms$/,Ya=/^(\d+)s$/;function T(a){var b=this;AMP.BaseElement.call(this,a);this.I=new P;this.K=!0;this.U=this.getVsync();this.j=new Q(this.win);this.m=new Ra(this.win);this.B=!1;this.l=[];this.T=new S;this.u=new Ea(this.win,this.element);this.Y=wa(function(){return Za(b)});this.h=null;this.R=E(this.win,"timer");this.o=null}t(T,AMP.BaseElement);e=T.prototype;
e.buildCallback=function(){var a=this;this.element.appendChild(this.m.build());this.element.addEventListener("click",this.Z.bind(this),!0);this.element.addEventListener("ampstory:exitfullscreen",function(){$a(a,!0)});this.element.addEventListener("ampstory:closebookend",function(){ab(a)});this.element.addEventListener("ampstory:mute",function(){a.u.muteAll();a.element.classList.remove("unmuted")});this.element.addEventListener("ampstory:unmute",function(){a.u.unmuteAll();a.element.classList.add("unmuted")});
this.element.addEventListener("ampstory:audioplaying",function(){a.element.classList.add("audio-playing")});this.element.addEventListener("ampstory:audiostopped",function(){a.element.classList.remove("audio-playing")});this.element.addEventListener("play",function(b){a.u.play(b.target)},!0);this.element.addEventListener("pause",function(b){a.u.stop(b.target)},!0);this.win.document.addEventListener("keydown",function(b){switch(b.keyCode){case 37:bb(a);break;case 39:U(a)}},!0);this.win.document.addEventListener("fullscreenchange",
function(){V(a)});this.win.document.addEventListener("webkitfullscreenchange",function(){V(a)});this.win.document.addEventListener("mozfullscreenchange",function(){V(a)});this.I.installConsumer(new La(this.element));this.I.installConsumer(this.T);Da(this.element);ha(this.win,function(){return a.T})};
e.layoutCallback=function(){var a=this,b=v().assertElement(this.element.querySelector("amp-story-page"),"Story must have at least one page.");return W(this,b).then(function(){return X(a)}).then(function(){Array.prototype.forEach.call(a.getPages(),function(b){a.schedulePause(b)});a.scheduleResume(a.h)})};e.isLayoutSupported=function(a){return"container"==a};e.prerenderAllowed=function(){return!0};
function cb(a,b){if(b===a.h)return a.l[a.l.length-1];var c=a.l.lastIndexOf(b);return 0>=c?b.previousElementSibling:a.l[c-1]}function Y(a,b,c){var d=c&&b.hasAttribute("auto-advance-to")?b.getAttribute("auto-advance-to"):b.getAttribute("advance-to");return d?Z(a,d):b.nextElementSibling===a.m.getRoot()||db(a,b.nextElementSibling)?null:b.nextElementSibling}function eb(a,b){var c=[],d=Y(a,b,!0),f=Y(a,b,!1),g=cb(a,b);d&&c.push(d.id);f&&f!=d&&c.push(f.id);g&&c.push(g.id);return c}
function U(a,b){var c=a.h,d=Y(a,c,b);d?d===a.j?fb(a):W(a,d).then(function(){return a.l.push(c)}).then(function(){return X(a)}):fb(a)}function bb(a){var b=cb(a,a.h);if(b){var c=a.l.lastIndexOf(b);a.l.splice(c,1);W(a,b).then(function(){return X(a)})}}
function W(a,b){if(!a.B){var c=a.getPageIndex(b);gb(a)&&Wa(a.element);a.m.updateProgressBar(c,a.getPageCount()-1);a.I.updateActivePage(c,b.id);var d=a.h;a.o&&(a.o(),a.o=null);return a.mutateElement(function(){b.setAttribute("active","");d&&d.removeAttribute("active");a.h=b;y(a.element,"action").trigger(a.h,"active",null)},b).then(function(){d&&a.schedulePause(d);a.scheduleResume(b)}).then(function(){return hb(a)}).then(function(){return ib(a)})}}
function hb(a){var b=E(a.win,"platform");(b.isSafari()||b.isIos())&&a.mutateElement(function(){a.element.style.display="none";0<=a.element.offsetHeight&&(a.element.style.display="")})}e.w=function(a){var b=a.tagName.toLowerCase();return a instanceof HTMLMediaElement?a:!a.hasAttribute("background-audio")||"amp-story"!==b&&"amp-story-page"!==b?"amp-audio"===b?a.querySelector("audio"):null:a.querySelector(".i-amp-story-background-audio")};
function jb(a,b,c){v().assertElement(b,"ID specified for automatic advance "+("does not refer to any element on page '"+a.h.id+"'."));var d=a.w(b);d?a.o=ua(d,c):(d=b.tagName.toLowerCase(),"amp-video"===d||"amp-youtube"===d||"amp-3q-player"===d||"amp-ima-video"===d||"amp-ooyala-player"===d||"amp-nexxtv-player"===d||"amp-brid-player"===d||"amp-dailymotion"===d?a.o=ua(b,c,!0):v().error("amp-story","Element with ID "+b.id+" is not a media element supported for automatic advancement."))}
function ib(a){var b=a.h,c=b.getAttribute("auto-advance-after");if(c){var d;Xa.test(c)?d=Number(Xa.exec(c)[1]):Ya.test(c)&&(d=1E3*Number(Ya.exec(c)[1]));if(d){v().assert(ea(d)&&0<d,"Invalid automatic advance delay '"+c+"' "+("for page '"+b.id+"'."));var f=a.R.delay(function(){return U(a,!0)},d);a.o=function(){a.R.cancel(f)}}else{var g;try{g=b.querySelector("#"+c)}catch(h){v().error("amp-story","Malformed ID '"+c+"' for automatic "+("advance on page '"+b.id+"'."));return}jb(a,g,function(){U(a,!0)})}}}
function gb(a){var b=a.getViewport().getSize(),c=b.height,d=1024>=b.width&&1024>=c;if(b=d)b=a.element,b=!!(b.requestFullscreen||b.webkitRequestFullScreen||b.mozRequestFullScreen||b.msRequestFullscreen);return b&&a.K}e.setAutoFullScreen=function(a){this.K=a};
function $a(a,b){b&&a.setAutoFullScreen(!1);a=a.element.ownerDocument;a.exitFullscreen?a.exitFullscreen():a.webkitExitFullscreen?a.webkitExitFullscreen():a.mozCancelFullScreen?a.mozCancelFullScreen():a.msExitFullscreen?a.msExitFullscreen():w().warn("Ignored fullscreen request.")}function V(a){var b=a.win.document;a.m.setInFullScreen(!!(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.msFullscreenElement))}
function fb(a){a.B||(a.j.isBuilt(),$a(a),a.m.toggleCloseBookendButton(!0),a.B=!0,a.U.mutate(function(){a.element.classList.add("i-amp-story-bookend-active");a.j.getRoot().scrollTop=0}))}function ab(a){a.m.toggleCloseBookendButton(!1);a.B=!1;a.U.mutate(function(){a.element.classList.remove("i-amp-story-bookend-active")})}
e.Z=function(a){if(kb(this,a)){var b=this.element.offsetLeft+.25*this.element.offsetWidth,c=this.element.offsetLeft+this.element.offsetWidth;a.pageX>=b&&a.pageX<c?U(this):a.pageX>=this.element.offsetLeft&&a.pageX<b&&bb(this);a.stopPropagation()}};function lb(a){var b=mb(a,0,{},a.h.id),c=[];Object.keys(b).forEach(function(a){var d=b[a];c[d]||(c[d]=[]);c[d].push(a)});return c}
function mb(a,b,c,d){if(void 0!==c[d]&&c[d]<=b)return c;c[d]=b;d=Z(a,d);eb(a,d).forEach(function(d){void 0!==c[d]&&c[d]<=b||(c=mb(a,b+1,c,d))});return c}function X(a){var b=lb(a);a.mutateElement(function(){b.forEach(function(b,d){b.forEach(function(b){b=Z(a,b);sa(b,{transform:"translateY("+100*d+"%)"})})});Y(a,a.h)||nb(a)})}function nb(a){a.j.isBuilt()||(a.element.appendChild(a.j.build()),a.Y().then(function(b){null!==b&&a.j.setRelatedArticles(b)}))}
function Za(a){var b=ob(a);return null===b?Promise.resolve(null):y(a.getAmpDoc(),"url-replace").expandAsync(v().assertString(b)).then(function(b){return E(a.win,"xhr").fetchJson(b)}).then(function(a){v().assert(a.ok,"Invalid HTTP response");return a.json()}).then(Va)}function ob(a){return a.element.hasAttribute("related-articles")?a.element.getAttribute("related-articles"):null}
function kb(a,b){return!na(b.target,function(b){var c;(c=b===a.m.getRoot()||db(a,b))||(c=b.hasAttribute("on")&&b.getAttribute("on").match(/(^|;)\s*tap\s*:/));return c},a.element)}function db(a,b){return a.j.isBuilt()&&b===a.j.getRoot()}function Z(a,b){return v().assert(a.element.querySelector("amp-story-page#"+b),'Story refers to page "'+b+'", but no such page exists.')}e.getPages=function(){return this.element.querySelectorAll("amp-story-page")};e.getPageCount=function(){return this.getPages().length};
e.getPageIndex=function(a){return Array.prototype.indexOf.call(this.getPages(),a)};AMP.registerElement("amp-story",T,'amp-story,amp-story-grid-layer,amp-story-page{contain:strict!important;overflow:hidden!important}amp-story{height:100%!important;position:relative!important;text-rendering:geometricPrecision!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;width:100%!important}html[amp-story],html[amp-story] body,html[\ud83d\udcd6],html[\ud83d\udcd6] body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}html[amp-story] body,html[\ud83d\udcd6] body{display:-ms-grid!important;display:grid!important}html[amp-story] body>amp-story,html[\ud83d\udcd6] body>amp-story{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;box-shadow:2px 2px 20px rgba(0,0,0,.5);height:100%!important;justify-self:center;max-height:736px;max-width:414px}html[amp-story] body>amp-story:-webkit-full-screen,html[\ud83d\udcd6] body>amp-story:-webkit-full-screen{height:100vh!important;max-height:none;max-width:none}html[amp-story] body>amp-story:-moz-full-screen,html[\ud83d\udcd6] body>amp-story:-moz-full-screen{height:100vh!important;max-height:none;max-width:none}html[amp-story] body>amp-story:-ms-fullscreen,html[\ud83d\udcd6] body>amp-story:-ms-fullscreen{height:100vh!important;max-height:none;max-width:none}html[amp-story] body>amp-story:fullscreen,html[\ud83d\udcd6] body>amp-story:fullscreen{height:100vh!important;max-height:none;max-width:none}.i-amp-story-system-layer{background:-webkit-linear-gradient(top,rgba(0,0,0,.35),transparent);background:linear-gradient(to bottom,rgba(0,0,0,.35),transparent);position:absolute;top:0;left:0;right:0;height:44px;z-index:100000;padding:4px 0 0;box-sizing:border-box}.i-amp-story-ui-right{float:right;margin:4px 8px}.i-amp-story-button{float:left;height:40px;width:40px;cursor:pointer;border-radius:40px;box-sizing:border-box;padding:8px}.i-amp-story-button:active{background:rgba(0,0,0,.2)}.i-amp-story-progress-bar,.i-amp-story-progress-value{position:absolute;left:0;right:0;top:0;height:4px}.i-amp-story-progress-bar{background:hsla(0,0%,100%,.25)}.i-amp-story-progress-value{background:#fff;width:100%;-webkit-transform:translateZ(0) scaleX(0);transform:translateZ(0) scaleX(0);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease,-webkit-transform 0.3s ease;-webkit-transform-origin:left;transform-origin:left;will-change:transform}[dir=rtl] .i-amp-story-progress-value{-webkit-transform-origin:right;transform-origin:right}.i-amp-story-mute-audio-control,.i-amp-story-unmute-audio-control{display:none}.audio-playing.unmuted .i-amp-story-mute-audio-control,.audio-playing:not(.unmuted) .i-amp-story-unmute-audio-control{display:block}amp-story-page,amp-story .amp-video-eq{display:none!important}amp-story-page{bottom:0!important;height:auto;left:0!important;position:absolute!important;right:0!important;top:0!important}amp-story-page.i-amphtml-layout-container{display:block!important;-webkit-transform:translateY(1000%);transform:translateY(1000%)}amp-story-page[active]{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}.i-amp-story-page-loading-screen{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#000;bottom:0!important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;left:0!important;opacity:1;position:absolute!important;right:0!important;top:0!important;z-index:9999!important}amp-story-page[active] .i-amp-story-page-element,amp-story-page[active] .i-amp-story-page-loading-screen{-webkit-transition:opacity 0.2s ease!important;transition:opacity 0.2s ease!important}.i-amp-story-page-element{opacity:0.01}.i-amp-story-page-element-shown{opacity:1}.i-amp-story-page-loading-dots{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0}.i-amp-story-page-loading-dot{background-color:#fff;border-radius:50%;height:8px;list-style-type:none;margin:0 8px;width:8px;-webkit-animation:1s linear infinite alternate grow;animation:1s linear infinite alternate grow}.i-amp-story-page-loading-dot:first-child{-webkit-animation-delay:0.0s;animation-delay:0.0s}.i-amp-story-page-loading-dot:nth-child(2){-webkit-animation-delay:0.5s;animation-delay:0.5s}.i-amp-story-page-loading-dot:nth-child(3){-webkit-animation-delay:1.0s;animation-delay:1.0s}@-webkit-keyframes grow{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(2);transform:scale(2)}}@keyframes grow{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(2);transform:scale(2)}}.i-amp-story-page-loading-text{margin:38px 0 0;font-size:14px}amp-story-page.i-amp-story-page-loaded>.i-amp-story-page-loading-screen{opacity:0}amp-story-grid-layer{bottom:0!important;display:-ms-grid!important;display:grid!important;left:0!important;position:absolute!important;right:0!important;top:0!important;padding:68px 32px 32px;z-index:2!important}amp-story-grid-layer *{box-sizing:border-box!important;margin:0!important}.i-amp-story-grid-template-fill>:not(:first-child){display:none!important}.i-amp-story-grid-template-fill>:first-child{bottom:0!important;display:block!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important}.i-amp-story-grid-template-fill>amp-anim img,.i-amp-story-grid-template-fill>amp-img img,.i-amp-story-grid-template-fill>amp-video video{-o-object-fit:cover!important;object-fit:cover!important}.i-amp-story-grid-template-vertical{-webkit-align-content:start;-ms-flex-line-pack:start;align-content:start;grid-auto-flow:row!important;grid-gap:16px;-ms-grid-columns:100%!important;grid-template-columns:100%!important;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-ms-grid-column-align:start;justify-items:start;padding:32px}.i-amp-story-grid-template-vertical>*{width:100%}.i-amp-story-grid-template-horizontal{-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:start;-webkit-align-items:start;-ms-flex-align:start;align-items:start;grid-auto-flow:column!important;grid-gap:16px;-ms-grid-rows:100%!important;grid-template-rows:100%!important;-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;padding:32px}.i-amp-story-grid-template-thirds{-ms-grid-rows:(1fr)[3]!important;grid-template-rows:repeat(3,1fr)!important;grid-template-areas:"upper-third" "middle-third" "lower-third"!important;padding:32px}.i-amp-story-bookend{background:rgba(0,0,0,.85)!important;color:#fff;bottom:0!important;display:none!important;left:0!important;position:absolute;right:0!important;top:0!important;padding:44px 32px 32px;overflow:auto}.i-amp-story-bookend-active .i-amp-story-bookend{display:block!important}.i-amp-story-bookend-heading{text-transform:uppercase;padding:0 0 8px;margin:16px 0 8px;border-bottom:1px solid hsla(0,0%,100%,.25);font-weight:700;letter-spacing:0.83px}.i-amp-story-bookend-article-meta,.i-amp-story-bookend-heading{font-size:10px;color:hsla(0,0%,100%,.54);font-family:Roboto,sans-serif;line-height:1}.i-amp-story-bookend-article-meta{font-weight:300}.i-amp-story-bookend-article-set>article{margin:24px 0;overflow:hidden}.i-amp-story-bookend-article-set:last-child>article:last-child{margin-bottom:0}.i-amp-story-bookend-article-heading{font-family:Roboto,sans-serif;font-weight:300;font-size:16px;color:#ffff;line-height:1.4;margin:0 0 8px}.i-amp-story-bookend-article-image{width:116px;height:116px;float:right;margin-left:16px}.i-amp-story-bookend-heading+.i-amp-story-bookend-article-set{border-top:none}.i-amp-story-bookend-article-set{border-top:1px solid hsla(0,0%,100%,.25)}.i-amp-story-bookend-share-icon>svg{fill:#fff}.i-amp-story-bookend-share{margin:0;padding:0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.i-amp-story-bookend-share-icon{box-sizing:border-box;padding:6px;margin:-6px;width:44px;height:44px}.i-amp-story-bookend-share>li{margin:16px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:33.333%;-ms-flex-preferred-size:33.333%;flex-basis:33.333%}.i-amp-story-bookend-share>li:nth-child(3n+2){-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.i-amp-story-bookend-share>li:nth-child(3n+3){-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story.css*/');
})});
//# sourceMappingURL=amp-story-0.1.js.map

