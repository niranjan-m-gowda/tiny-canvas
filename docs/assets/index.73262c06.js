var Xd=Object.defineProperty;var Kd=(e,t,r)=>t in e?Xd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ft=(e,t,r)=>(Kd(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=window,Ss=ui.ShadowRoot&&(ui.ShadyCSS===void 0||ui.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,As=Symbol(),oa=new WeakMap;class Ic{constructor(t,r,i){if(this._$cssResult$=!0,i!==As)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ss&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=oa.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&oa.set(r,t))}return t}toString(){return this.cssText}}const Gd=e=>new Ic(typeof e=="string"?e:e+"",void 0,As),Le=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,s)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new Ic(r,e,As)},Yd=(e,t)=>{Ss?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),n=ui.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)})},sa=Ss?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Gd(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pn;const fi=window,aa=fi.trustedTypes,Zd=aa?aa.emptyScript:"",la=fi.reactiveElementPolyfillSupport,ls={toAttribute(e,t){switch(t){case Boolean:e=e?Zd:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Lc=(e,t)=>t!==e&&(t==t||e==e),fn={attribute:!0,type:String,converter:ls,reflect:!1,hasChanged:Lc};class Qe extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,i)=>{const n=this._$Ep(i,r);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,r=fn){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(n){const s=this[t];this[r]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||fn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const n of i)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(sa(n))}else t!==void 0&&r.push(sa(t));return r}static _$Ep(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Yd(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r,i=fn){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const c=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ls).toAttribute(r,i.type);this._$El=t,c==null?this.removeAttribute(s):this.setAttribute(s,c),this._$El=null}}_$AK(t,r){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const c=n.getPropertyOptions(s),d=typeof c.converter=="function"?{fromAttribute:c.converter}:((i=c.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?c.converter:ls;this._$El=s,this[s]=d.fromAttribute(r,c.type),this._$El=null}}requestUpdate(t,r,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Lc)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(i)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,i)=>this._$EO(i,this[i],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Qe.finalized=!0,Qe.elementProperties=new Map,Qe.elementStyles=[],Qe.shadowRootOptions={mode:"open"},la==null||la({ReactiveElement:Qe}),((pn=fi.reactiveElementVersions)!==null&&pn!==void 0?pn:fi.reactiveElementVersions=[]).push("1.4.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gn;const gi=window,ir=gi.trustedTypes,ca=ir?ir.createPolicy("lit-html",{createHTML:e=>e}):void 0,$e=`lit$${(Math.random()+"").slice(9)}$`,Rc="?"+$e,Qd=`<${Rc}>`,nr=document,Mr=(e="")=>nr.createComment(e),zr=e=>e===null||typeof e!="object"&&typeof e!="function",Oc=Array.isArray,Jd=e=>Oc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,da=/-->/g,ua=/>/g,qe=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ha=/'/g,pa=/"/g,Mc=/^(?:script|style|textarea|title)$/i,tu=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ne=tu(1),Ve=Symbol.for("lit-noChange"),$t=Symbol.for("lit-nothing"),fa=new WeakMap,er=nr.createTreeWalker(nr,129,null,!1),eu=(e,t)=>{const r=e.length-1,i=[];let n,s=t===2?"<svg>":"",c=wr;for(let h=0;h<r;h++){const a=e[h];let l,o,u=-1,p=0;for(;p<a.length&&(c.lastIndex=p,o=c.exec(a),o!==null);)p=c.lastIndex,c===wr?o[1]==="!--"?c=da:o[1]!==void 0?c=ua:o[2]!==void 0?(Mc.test(o[2])&&(n=RegExp("</"+o[2],"g")),c=qe):o[3]!==void 0&&(c=qe):c===qe?o[0]===">"?(c=n!=null?n:wr,u=-1):o[1]===void 0?u=-2:(u=c.lastIndex-o[2].length,l=o[1],c=o[3]===void 0?qe:o[3]==='"'?pa:ha):c===pa||c===ha?c=qe:c===da||c===ua?c=wr:(c=qe,n=void 0);const f=c===qe&&e[h+1].startsWith("/>")?" ":"";s+=c===wr?a+Qd:u>=0?(i.push(l),a.slice(0,u)+"$lit$"+a.slice(u)+$e+f):a+$e+(u===-2?(i.push(void 0),h):f)}const d=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ca!==void 0?ca.createHTML(d):d,i]};class Nr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let s=0,c=0;const d=t.length-1,h=this.parts,[a,l]=eu(t,r);if(this.el=Nr.createElement(a,i),er.currentNode=this.el.content,r===2){const o=this.el.content,u=o.firstChild;u.remove(),o.append(...u.childNodes)}for(;(n=er.nextNode())!==null&&h.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const o=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith($e)){const p=l[c++];if(o.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+"$lit$").split($e),g=/([.?@])?(.*)/.exec(p);h.push({type:1,index:s,name:g[2],strings:f,ctor:g[1]==="."?iu:g[1]==="?"?ou:g[1]==="@"?su:Ii})}else h.push({type:6,index:s})}for(const u of o)n.removeAttribute(u)}if(Mc.test(n.tagName)){const o=n.textContent.split($e),u=o.length-1;if(u>0){n.textContent=ir?ir.emptyScript:"";for(let p=0;p<u;p++)n.append(o[p],Mr()),er.nextNode(),h.push({type:2,index:++s});n.append(o[u],Mr())}}}else if(n.nodeType===8)if(n.data===Rc)h.push({type:2,index:s});else{let o=-1;for(;(o=n.data.indexOf($e,o+1))!==-1;)h.push({type:7,index:s}),o+=$e.length-1}s++}}static createElement(t,r){const i=nr.createElement("template");return i.innerHTML=t,i}}function or(e,t,r=e,i){var n,s,c,d;if(t===Ve)return t;let h=i!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[i]:r._$Cl;const a=zr(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==a&&((s=h==null?void 0:h._$AO)===null||s===void 0||s.call(h,!1),a===void 0?h=void 0:(h=new a(e),h._$AT(e,r,i)),i!==void 0?((c=(d=r)._$Co)!==null&&c!==void 0?c:d._$Co=[])[i]=h:r._$Cl=h),h!==void 0&&(t=or(e,h._$AS(e,t.values),h,i)),t}class ru{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:i},parts:n}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:nr).importNode(i,!0);er.currentNode=s;let c=er.nextNode(),d=0,h=0,a=n[0];for(;a!==void 0;){if(d===a.index){let l;a.type===2?l=new Vr(c,c.nextSibling,this,t):a.type===1?l=new a.ctor(c,a.name,a.strings,this,t):a.type===6&&(l=new au(c,this,t)),this.u.push(l),a=n[++h]}d!==(a==null?void 0:a.index)&&(c=er.nextNode(),d++)}return s}p(t){let r=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Vr{constructor(t,r,i,n){var s;this.type=2,this._$AH=$t,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cm=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=or(this,t,r),zr(t)?t===$t||t==null||t===""?(this._$AH!==$t&&this._$AR(),this._$AH=$t):t!==this._$AH&&t!==Ve&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jd(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==$t&&zr(this._$AH)?this._$AA.nextSibling.data=t:this.T(nr.createTextNode(t)),this._$AH=t}$(t){var r;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Nr.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.p(i);else{const c=new ru(s,this),d=c.v(this.options);c.p(i),this.T(d),this._$AH=c}}_$AC(t){let r=fa.get(t.strings);return r===void 0&&fa.set(t.strings,r=new Nr(t)),r}k(t){Oc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of t)n===r.length?r.push(i=new Vr(this.O(Mr()),this.O(Mr()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Ii{constructor(t,r,i,n,s){this.type=1,this._$AH=$t,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$t}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,i,n){const s=this.strings;let c=!1;if(s===void 0)t=or(this,t,r,0),c=!zr(t)||t!==this._$AH&&t!==Ve,c&&(this._$AH=t);else{const d=t;let h,a;for(t=s[0],h=0;h<s.length-1;h++)a=or(this,d[i+h],r,h),a===Ve&&(a=this._$AH[h]),c||(c=!zr(a)||a!==this._$AH[h]),a===$t?t=$t:t!==$t&&(t+=(a!=null?a:"")+s[h+1]),this._$AH[h]=a}c&&!n&&this.j(t)}j(t){t===$t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class iu extends Ii{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$t?void 0:t}}const nu=ir?ir.emptyScript:"";class ou extends Ii{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$t?this.element.setAttribute(this.name,nu):this.element.removeAttribute(this.name)}}class su extends Ii{constructor(t,r,i,n,s){super(t,r,i,n,s),this.type=5}_$AI(t,r=this){var i;if((t=(i=or(this,t,r,0))!==null&&i!==void 0?i:$t)===Ve)return;const n=this._$AH,s=t===$t&&n!==$t||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,c=t!==$t&&(n===$t||s);s&&this.element.removeEventListener(this.name,this,n),c&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class au{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){or(this,t)}}const ga=gi.litHtmlPolyfillSupport;ga==null||ga(Nr,Vr),((gn=gi.litHtmlVersions)!==null&&gn!==void 0?gn:gi.litHtmlVersions=[]).push("2.4.0");const lu=(e,t,r)=>{var i,n;const s=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let c=s._$litPart$;if(c===void 0){const d=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=c=new Vr(t.insertBefore(Mr(),d),d,void 0,r!=null?r:{})}return c._$AI(e),c};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn,vn;class Qt extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const i=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild),i}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=lu(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ve}}Qt.finalized=!0,Qt._$litElement$=!0,(mn=globalThis.litElementHydrateSupport)===null||mn===void 0||mn.call(globalThis,{LitElement:Qt});const ma=globalThis.litElementPolyfillSupport;ma==null||ma({LitElement:Qt});((vn=globalThis.litElementVersions)!==null&&vn!==void 0?vn:globalThis.litElementVersions=[]).push("3.2.2");try{self["workbox:window:6.5.3"]&&_()}catch{}function cs(e,t){return new Promise(function(r){var i=new MessageChannel;i.port1.onmessage=function(n){r(n.data)},e.postMessage(t,[i.port2])})}function cu(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function va(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function du(e,t){var r;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=function(n,s){if(n){if(typeof n=="string")return va(n,s);var c=Object.prototype.toString.call(n).slice(8,-1);return c==="Object"&&n.constructor&&(c=n.constructor.name),c==="Map"||c==="Set"?Array.from(n):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?va(n,s):void 0}}(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.3"]&&_()}catch{}var bn=function(){var e=this;this.promise=new Promise(function(t,r){e.resolve=t,e.reject=r})};function yn(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var xr=function(e,t){this.type=e,Object.assign(this,t)};function ni(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function uu(){}var hu={type:"SKIP_WAITING"};function ba(e,t){if(!t)return e&&e.then?e.then(uu):Promise.resolve()}var pu=function(e){var t,r;function i(d,h){var a,l;return h===void 0&&(h={}),(a=e.call(this)||this).nn={},a.tn=0,a.rn=new bn,a.en=new bn,a.on=new bn,a.un=0,a.an=new Set,a.cn=function(){var o=a.fn,u=o.installing;a.tn>0||!yn(u.scriptURL,a.sn.toString())||performance.now()>a.un+6e4?(a.vn=u,o.removeEventListener("updatefound",a.cn)):(a.hn=u,a.an.add(u),a.rn.resolve(u)),++a.tn,u.addEventListener("statechange",a.ln)},a.ln=function(o){var u=a.fn,p=o.target,f=p.state,g=p===a.vn,b={sw:p,isExternal:g,originalEvent:o};!g&&a.mn&&(b.isUpdate=!0),a.dispatchEvent(new xr(f,b)),f==="installed"?a.wn=self.setTimeout(function(){f==="installed"&&u.waiting===p&&a.dispatchEvent(new xr("waiting",b))},200):f==="activating"&&(clearTimeout(a.wn),g||a.en.resolve(p))},a.dn=function(o){var u=a.hn,p=u!==navigator.serviceWorker.controller;a.dispatchEvent(new xr("controlling",{isExternal:p,originalEvent:o,sw:u,isUpdate:a.mn})),p||a.on.resolve(u)},a.gn=(l=function(o){var u=o.data,p=o.ports,f=o.source;return ni(a.getSW(),function(){a.an.has(f)&&a.dispatchEvent(new xr("message",{data:u,originalEvent:o,ports:p,sw:f}))})},function(){for(var o=[],u=0;u<arguments.length;u++)o[u]=arguments[u];try{return Promise.resolve(l.apply(this,o))}catch(p){return Promise.reject(p)}}),a.sn=d,a.nn=h,navigator.serviceWorker.addEventListener("message",a.gn),a}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var n,s,c=i.prototype;return c.register=function(d){var h=(d===void 0?{}:d).immediate,a=h!==void 0&&h;try{var l=this;return function(o,u){var p=o();return p&&p.then?p.then(u):u(p)}(function(){if(!a&&document.readyState!=="complete")return ba(new Promise(function(o){return window.addEventListener("load",o)}))},function(){return l.mn=Boolean(navigator.serviceWorker.controller),l.yn=l.pn(),ni(l.bn(),function(o){l.fn=o,l.yn&&(l.hn=l.yn,l.en.resolve(l.yn),l.on.resolve(l.yn),l.yn.addEventListener("statechange",l.ln,{once:!0}));var u=l.fn.waiting;return u&&yn(u.scriptURL,l.sn.toString())&&(l.hn=u,Promise.resolve().then(function(){l.dispatchEvent(new xr("waiting",{sw:u,wasWaitingBeforeRegister:!0}))}).then(function(){})),l.hn&&(l.rn.resolve(l.hn),l.an.add(l.hn)),l.fn.addEventListener("updatefound",l.cn),navigator.serviceWorker.addEventListener("controllerchange",l.dn),l.fn})})}catch(o){return Promise.reject(o)}},c.update=function(){try{return this.fn?ba(this.fn.update()):void 0}catch(d){return Promise.reject(d)}},c.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},c.messageSW=function(d){try{return ni(this.getSW(),function(h){return cs(h,d)})}catch(h){return Promise.reject(h)}},c.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&cs(this.fn.waiting,hu)},c.pn=function(){var d=navigator.serviceWorker.controller;return d&&yn(d.scriptURL,this.sn.toString())?d:void 0},c.bn=function(){try{var d=this;return function(h,a){try{var l=h()}catch(o){return a(o)}return l&&l.then?l.then(void 0,a):l}(function(){return ni(navigator.serviceWorker.register(d.sn,d.nn),function(h){return d.un=performance.now(),h})},function(h){throw h})}catch(h){return Promise.reject(h)}},n=i,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&cu(n.prototype,s),i}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(r,i){this.Sn(r).add(i)},t.removeEventListener=function(r,i){this.Sn(r).delete(i)},t.dispatchEvent=function(r){r.target=this;for(var i,n=du(this.Sn(r.type));!(i=n()).done;)(0,i.value)(r)},t.Sn=function(r){return this.Pn.has(r)||this.Pn.set(r,new Set),this.Pn.get(r)},e}());var hi=window,Cs=hi.ShadowRoot&&(hi.ShadyCSS===void 0||hi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ks=Symbol(),ya=new WeakMap,zc=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ks)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Cs&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ya.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ya.set(t,e))}return e}toString(){return this.cssText}},fu=e=>new zc(typeof e=="string"?e:e+"",void 0,ks),lt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,s)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new zc(r,e,ks)},gu=(e,t)=>{Cs?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),n=hi.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)})},_a=Cs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return fu(r)})(e):e,_n,mi=window,wa=mi.trustedTypes,mu=wa?wa.emptyScript:"",xa=mi.reactiveElementPolyfillSupport,Dr={toAttribute(e,t){switch(t){case Boolean:e=e?mu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Nc=(e,t)=>t!==e&&(t==t||e==e),wn={attribute:!0,type:String,converter:Dr,reflect:!1,hasChanged:Nc},Je=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=wn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||wn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(_a(i))}else e!==void 0&&t.push(_a(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=wn){var i;const n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){const s=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Dr).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){const s=i.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:Dr;this._$El=n,this[n]=c.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Nc)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Je.finalized=!0,Je.elementProperties=new Map,Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},xa==null||xa({ReactiveElement:Je}),((_n=mi.reactiveElementVersions)!==null&&_n!==void 0?_n:mi.reactiveElementVersions=[]).push("1.4.2");var xn,vi=window,sr=vi.trustedTypes,Ea=sr?sr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pe=`lit$${(Math.random()+"").slice(9)}$`,Dc="?"+Pe,vu=`<${Dc}>`,ar=document,Ur=(e="")=>ar.createComment(e),qr=e=>e===null||typeof e!="object"&&typeof e!="function",Uc=Array.isArray,bu=e=>Uc(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sa=/-->/g,Aa=/>/g,We=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ca=/'/g,ka=/"/g,qc=/^(?:script|style|textarea|title)$/i,yu=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),j=yu(1),Ht=Symbol.for("lit-noChange"),xt=Symbol.for("lit-nothing"),$a=new WeakMap,rr=ar.createTreeWalker(ar,129,null,!1),_u=(e,t)=>{const r=e.length-1,i=[];let n,s=t===2?"<svg>":"",c=Er;for(let h=0;h<r;h++){const a=e[h];let l,o,u=-1,p=0;for(;p<a.length&&(c.lastIndex=p,o=c.exec(a),o!==null);)p=c.lastIndex,c===Er?o[1]==="!--"?c=Sa:o[1]!==void 0?c=Aa:o[2]!==void 0?(qc.test(o[2])&&(n=RegExp("</"+o[2],"g")),c=We):o[3]!==void 0&&(c=We):c===We?o[0]===">"?(c=n!=null?n:Er,u=-1):o[1]===void 0?u=-2:(u=c.lastIndex-o[2].length,l=o[1],c=o[3]===void 0?We:o[3]==='"'?ka:Ca):c===ka||c===Ca?c=We:c===Sa||c===Aa?c=Er:(c=We,n=void 0);const f=c===We&&e[h+1].startsWith("/>")?" ":"";s+=c===Er?a+vu:u>=0?(i.push(l),a.slice(0,u)+"$lit$"+a.slice(u)+Pe+f):a+Pe+(u===-2?(i.push(void 0),h):f)}const d=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ea!==void 0?Ea.createHTML(d):d,i]},bi=class{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,s=0;const c=e.length-1,d=this.parts,[h,a]=_u(e,t);if(this.el=bi.createElement(h,r),rr.currentNode=this.el.content,t===2){const l=this.el.content,o=l.firstChild;o.remove(),l.append(...o.childNodes)}for(;(i=rr.nextNode())!==null&&d.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const l=[];for(const o of i.getAttributeNames())if(o.endsWith("$lit$")||o.startsWith(Pe)){const u=a[s++];if(l.push(o),u!==void 0){const p=i.getAttribute(u.toLowerCase()+"$lit$").split(Pe),f=/([.?@])?(.*)/.exec(u);d.push({type:1,index:n,name:f[2],strings:p,ctor:f[1]==="."?xu:f[1]==="?"?Su:f[1]==="@"?Au:Ri})}else d.push({type:6,index:n})}for(const o of l)i.removeAttribute(o)}if(qc.test(i.tagName)){const l=i.textContent.split(Pe),o=l.length-1;if(o>0){i.textContent=sr?sr.emptyScript:"";for(let u=0;u<o;u++)i.append(l[u],Ur()),rr.nextNode(),d.push({type:2,index:++n});i.append(l[o],Ur())}}}else if(i.nodeType===8)if(i.data===Dc)d.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(Pe,l+1))!==-1;)d.push({type:7,index:n}),l+=Pe.length-1}n++}}static createElement(e,t){const r=ar.createElement("template");return r.innerHTML=e,r}};function lr(e,t,r=e,i){var n,s,c,d;if(t===Ht)return t;let h=i!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[i]:r._$Cl;const a=qr(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==a&&((s=h==null?void 0:h._$AO)===null||s===void 0||s.call(h,!1),a===void 0?h=void 0:(h=new a(e),h._$AT(e,r,i)),i!==void 0?((c=(d=r)._$Co)!==null&&c!==void 0?c:d._$Co=[])[i]=h:r._$Cl=h),h!==void 0&&(t=lr(e,h._$AS(e,t.values),h,i)),t}var wu=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:i}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ar).importNode(r,!0);rr.currentNode=n;let s=rr.nextNode(),c=0,d=0,h=i[0];for(;h!==void 0;){if(c===h.index){let a;h.type===2?a=new Li(s,s.nextSibling,this,e):h.type===1?a=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(a=new Cu(s,this,e)),this.u.push(a),h=i[++d]}c!==(h==null?void 0:h.index)&&(s=rr.nextNode(),c++)}return n}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Li=class{constructor(e,t,r,i){var n;this.type=2,this._$AH=xt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lr(this,e,t),qr(e)?e===xt||e==null||e===""?(this._$AH!==xt&&this._$AR(),this._$AH=xt):e!==this._$AH&&e!==Ht&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bu(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==xt&&qr(this._$AH)?this._$AA.nextSibling.data=e:this.T(ar.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=bi.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.p(r);else{const s=new wu(n,this),c=s.v(this.options);s.p(r),this.T(c),this._$AH=s}}_$AC(e){let t=$a.get(e.strings);return t===void 0&&$a.set(e.strings,t=new bi(e)),t}k(e){Uc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new Li(this.O(Ur()),this.O(Ur()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ri=class{constructor(e,t,r,i,n){this.type=1,this._$AH=xt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=xt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const n=this.strings;let s=!1;if(n===void 0)e=lr(this,e,t,0),s=!qr(e)||e!==this._$AH&&e!==Ht,s&&(this._$AH=e);else{const c=e;let d,h;for(e=n[0],d=0;d<n.length-1;d++)h=lr(this,c[r+d],t,d),h===Ht&&(h=this._$AH[d]),s||(s=!qr(h)||h!==this._$AH[d]),h===xt?e=xt:e!==xt&&(e+=(h!=null?h:"")+n[d+1]),this._$AH[d]=h}s&&!i&&this.j(e)}j(e){e===xt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},xu=class extends Ri{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===xt?void 0:e}},Eu=sr?sr.emptyScript:"",Su=class extends Ri{constructor(){super(...arguments),this.type=4}j(e){e&&e!==xt?this.element.setAttribute(this.name,Eu):this.element.removeAttribute(this.name)}},Au=class extends Ri{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=lr(this,e,t,0))!==null&&r!==void 0?r:xt)===Ht)return;const i=this._$AH,n=e===xt&&i!==xt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==xt&&(i===xt||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Cu=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){lr(this,e)}},Pa=vi.litHtmlPolyfillSupport;Pa==null||Pa(bi,Li),((xn=vi.litHtmlVersions)!==null&&xn!==void 0?xn:vi.litHtmlVersions=[]).push("2.4.0");var ku=(e,t,r)=>{var i,n;const s=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let c=s._$litPart$;if(c===void 0){const d=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=c=new Li(t.insertBefore(Ur(),d),d,void 0,r!=null?r:{})}return c._$AI(e),c},En,Sn,Tr=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=ku(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return Ht}};Tr.finalized=!0,Tr._$litElement$=!0,(En=globalThis.litElementHydrateSupport)===null||En===void 0||En.call(globalThis,{LitElement:Tr});var Ta=globalThis.litElementPolyfillSupport;Ta==null||Ta({LitElement:Tr});((Sn=globalThis.litElementVersions)!==null&&Sn!==void 0?Sn:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt=lt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,$u=lt`
  ${mt}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    transition: var(--sl-transition-medium) transform;
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .drawer__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    position: absolute;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Ia(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Wc(e){var t,r;const i=[];function n(d){d instanceof HTMLElement&&(i.push(d),d.shadowRoot!==null&&d.shadowRoot.mode==="open"&&n(d.shadowRoot)),[...d.children].forEach(h=>n(h))}n(e);const s=(t=i.find(d=>Ia(d)))!=null?t:null,c=(r=i.reverse().find(d=>Ia(d)))!=null?r:null;return{start:s,end:c}}var Sr=[],Fc=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Sr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Sr=Sr.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Sr[Sr.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=Wc(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}};function Pu(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var ds=new Set;function yi(e){ds.add(e),document.body.classList.add("sl-scroll-lock")}function _i(e){ds.delete(e),ds.size===0&&document.body.classList.remove("sl-scroll-lock")}function us(e,t,r="vertical",i="smooth"){const n=Pu(e,t),s=n.top+t.scrollTop,c=n.left+t.scrollLeft,d=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,a=t.scrollTop,l=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(c<d?t.scrollTo({left:c,behavior:i}):c+e.clientWidth>h&&t.scrollTo({left:c-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(s<a?t.scrollTo({top:s,behavior:i}):s+e.clientHeight>l&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:i}))}function oe(e,t){return new Promise(r=>{function i(n){n.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}var Tu=Object.create,Oi=Object.defineProperty,Iu=Object.defineProperties,Vc=Object.getOwnPropertyDescriptor,Lu=Object.getOwnPropertyDescriptors,Bc=Object.getOwnPropertyNames,wi=Object.getOwnPropertySymbols,Ru=Object.getPrototypeOf,$s=Object.prototype.hasOwnProperty,Hc=Object.prototype.propertyIsEnumerable,La=(e,t,r)=>t in e?Oi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Et=(e,t)=>{for(var r in t||(t={}))$s.call(t,r)&&La(e,r,t[r]);if(wi)for(var r of wi(t))Hc.call(t,r)&&La(e,r,t[r]);return e},se=(e,t)=>Iu(e,Lu(t)),Ps=(e,t)=>{var r={};for(var i in e)$s.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&wi)for(var i of wi(e))t.indexOf(i)<0&&Hc.call(e,i)&&(r[i]=e[i]);return r},Re=(e,t)=>function(){return t||(0,e[Bc(e)[0]])((t={exports:{}}).exports,t),t.exports},Ou=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Bc(t))!$s.call(e,n)&&n!==r&&Oi(e,n,{get:()=>t[n],enumerable:!(i=Vc(t,n))||i.enumerable});return e},Mu=(e,t,r)=>(r=e!=null?Tu(Ru(e)):{},Ou(t||!e||!e.__esModule?Oi(r,"default",{value:e,enumerable:!0}):r,e)),x=(e,t,r,i)=>{for(var n=i>1?void 0:i?Vc(t,r):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Oi(t,r,n),n};function It(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,se(Et({},r),{duration:zu()?0:r.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function Ra(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function zu(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Wt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}var jc=new Map,Nu=new WeakMap;function Du(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function Oa(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function At(e,t){jc.set(e,Du(t))}function Lt(e,t,r){const i=Nu.get(e);if(i!=null&&i[t])return Oa(i[t],r.dir);const n=jc.get(t);return n?Oa(n,r.dir):{keyframes:[],options:{duration:0}}}var xe=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function Xc(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var X=e=>e!=null?e:xt;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hs=new Set,Uu=new MutationObserver(Yc),tr=new Map,Kc=document.documentElement.dir||"ltr",Gc=document.documentElement.lang||navigator.language,Ir;Uu.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function qu(...e){e.map(t=>{const r=t.$code.toLowerCase();tr.has(r)?tr.set(r,Object.assign(Object.assign({},tr.get(r)),t)):tr.set(r,t),Ir||(Ir=t)}),Yc()}function Yc(){Kc=document.documentElement.dir||"ltr",Gc=document.documentElement.lang||navigator.language,[...hs.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Wu=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){hs.add(this.host)}hostDisconnected(){hs.delete(this.host)}dir(){return`${this.host.dir||Kc}`.toLowerCase()}lang(){return`${this.host.lang||Gc}`.toLowerCase()}term(e,...t){var r,i;const n=new Intl.Locale(this.lang()),s=n==null?void 0:n.language.toLowerCase(),c=(i=(r=n==null?void 0:n.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",d=tr.get(`${s}-${c}`),h=tr.get(s);let a;if(d&&d[e])a=d[e];else if(h&&h[e])a=h[e];else if(Ir&&Ir[e])a=Ir[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof a=="function"?a(...t):a}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Vt=class extends Wu{},Fu={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};qu(Fu);function K(e,t){const r=Et({waitUntilFirstUpdate:!1},t);return(i,n)=>{const{update:s}=i;if(e in i){const c=e;i.update=function(d){if(d.has(c)){const h=d.get(c),a=this[c];h!==a&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,a)}s.call(this,d)}}}}var ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mi=e=>(...t)=>({_$litDirective$:e,values:t}),zi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t=Mi(class extends zi{constructor(e){var t;if(super(e),e.type!==ve.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((r=this.st)===null||r===void 0)&&r.has(s))&&this.nt.add(s);return this.render(t)}const n=e.element.classList;this.nt.forEach(s=>{s in t||(n.remove(s),this.nt.delete(s))});for(const s in t){const c=!!t[s];c===this.nt.has(s)||((i=this.st)===null||i===void 0?void 0:i.has(s))||(c?(n.add(s),this.nt.add(s)):(n.remove(s),this.nt.delete(s)))}return Ht}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(c){customElements.define(r,c)}}})(e,t),Vu=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?se(Et({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function k(e){return(t,r)=>r!==void 0?((i,n,s)=>{n.constructor.createProperty(s,i)})(e,t,r):Vu(e,t)}function et(e){return k(se(Et({},e),{state:!0}))}var Bu=({finisher:e,descriptor:t})=>(r,i)=>{var n;if(i===void 0){const s=(n=r.originalKey)!==null&&n!==void 0?n:r.key,c=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(r.key)}:se(Et({},r),{key:s});return e!=null&&(c.finisher=function(d){e(d,s)}),c}{const s=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(s,i)}};function Z(e,t){return Bu({descriptor:r=>{const i={get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var s,c;return this[n]===void 0&&(this[n]=(c=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&c!==void 0?c:null),this[n]}}return i}})}var An;((An=window.HTMLSlotElement)===null||An===void 0?void 0:An.prototype.assignedElements)!=null;var ct=class extends Tr{emit(e,t){const r=new CustomEvent(e,Et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};x([k()],ct.prototype,"dir",2);x([k()],ct.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ma(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Jt=class extends ct{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer"),this.localize=new Vt(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Fc(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&!this.contained&&(this.addOpenListeners(),this.modal.activate(),yi(this))}disconnectedCallback(){super.disconnectedCallback(),_i(this)}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,oe(this,"sl-after-hide")}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Lt(this,"drawer.denyClose",{dir:this.localize.dir()});It(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),yi(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Wt(this.drawer),Wt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Lt(this,`drawer.show${Ma(this.placement)}`,{dir:this.localize.dir()}),r=Lt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([It(this.panel,t.keyframes,t.options),It(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),_i(this),await Promise.all([Wt(this.drawer),Wt(this.overlay)]);const e=Lt(this,`drawer.hide${Ma(this.placement)}`,{dir:this.localize.dir()}),t=Lt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([It(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),It(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}render(){return j`
      <div
        part="base"
        class=${_t({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${X(this.noHeader?this.label:void 0)}
          aria-labelledby=${X(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":j`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="drawer__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click=${()=>this.requestClose("close-button")}
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Jt.styles=$u;x([Z(".drawer")],Jt.prototype,"drawer",2);x([Z(".drawer__panel")],Jt.prototype,"panel",2);x([Z(".drawer__overlay")],Jt.prototype,"overlay",2);x([k({type:Boolean,reflect:!0})],Jt.prototype,"open",2);x([k({reflect:!0})],Jt.prototype,"label",2);x([k({reflect:!0})],Jt.prototype,"placement",2);x([k({type:Boolean,reflect:!0})],Jt.prototype,"contained",2);x([k({attribute:"no-header",type:Boolean,reflect:!0})],Jt.prototype,"noHeader",2);x([K("open",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleOpenChange",1);Jt=x([vt("sl-drawer")],Jt);At("drawer.showTop",{keyframes:[{opacity:0,transform:"translateY(-100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});At("drawer.hideTop",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-100%)"}],options:{duration:250,easing:"ease"}});At("drawer.showEnd",{keyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});At("drawer.hideEnd",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],options:{duration:250,easing:"ease"}});At("drawer.showBottom",{keyframes:[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});At("drawer.hideBottom",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(100%)"}],options:{duration:250,easing:"ease"}});At("drawer.showStart",{keyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});At("drawer.hideStart",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],options:{duration:250,easing:"ease"}});At("drawer.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.01)"},{transform:"scale(1)"}],options:{duration:250}});At("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});At("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Hu=lt`
  ${mt}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Zc=Symbol.for(""),ju=e=>{if((e==null?void 0:e.r)===Zc)return e==null?void 0:e._$litStatic$},xi=(e,...t)=>({_$litStatic$:t.reduce((r,i,n)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[n+1],e[0]),r:Zc}),za=new Map,Xu=e=>(t,...r)=>{const i=r.length;let n,s;const c=[],d=[];let h,a=0,l=!1;for(;a<i;){for(h=t[a];a<i&&(s=r[a],(n=ju(s))!==void 0);)h+=n+t[++a],l=!0;d.push(s),c.push(h),a++}if(a===i&&c.push(t[i]),l){const o=c.join("$$lit$$");(t=za.get(o))===void 0&&(c.raw=c,za.set(o,t=c)),r=d}return e(t,...r)},pi=Xu(j);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jt=class extends ct{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}render(){const e=!!this.href,t=e?xi`a`:xi`button`;return pi`
      <${t}
        part="base"
        class=${_t({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${X(e?void 0:this.disabled)}
        type=${X(e?void 0:"button")}
        href=${X(e?this.href:void 0)}
        target=${X(e?this.target:void 0)}
        download=${X(e?this.download:void 0)}
        rel=${X(e&&this.target?"noreferrer noopener":void 0)}
        role=${X(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${X(this.name)}
          library=${X(this.library)}
          src=${X(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};jt.styles=Hu;x([et()],jt.prototype,"hasFocus",2);x([Z(".icon-button")],jt.prototype,"button",2);x([k()],jt.prototype,"name",2);x([k()],jt.prototype,"library",2);x([k()],jt.prototype,"src",2);x([k()],jt.prototype,"href",2);x([k()],jt.prototype,"target",2);x([k()],jt.prototype,"download",2);x([k()],jt.prototype,"label",2);x([k({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);jt=x([vt("sl-icon-button")],jt);var ps="";function fs(e){ps=e}function Ku(){if(!ps){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)fs(t.getAttribute("data-shoelace"));else{const r=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src));let i="";r&&(i=r.getAttribute("src")),fs(i.split("/").slice(0,-1).join("/"))}}return ps.replace(/\/$/,"")}var Gu={name:"default",resolver:e=>`${Ku()}/assets/icons/${e}.svg`},Yu=Gu,Na={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Zu={name:"system",resolver:e=>e in Na?`data:image/svg+xml,${encodeURIComponent(Na[e])}`:""},Qu=Zu,Ei=[Yu,Qu],Si=[];function Ju(e){Si.push(e)}function th(e){Si=Si.filter(t=>t!==e)}function Da(e){return Ei.find(t=>t.name===e)}function eh(e,t){rh(e),Ei.push({name:e,resolver:t.resolver,mutator:t.mutator}),Si.forEach(r=>{r.library===e&&r.redraw()})}function rh(e){Ei=Ei.filter(t=>t.name!==e)}var Cn=new Map;function ih(e,t="cors"){if(Cn.has(e))return Cn.get(e);const r=fetch(e,{mode:t}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return Cn.set(e,r),r}var kn=new Map;async function nh(e){if(kn.has(e))return kn.get(e);const t=await ih(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const i=document.createElement("div");i.innerHTML=t.html;const n=i.firstElementChild;r.svg=(n==null?void 0:n.tagName.toLowerCase())==="svg"?n.outerHTML:""}return kn.set(e,r),r}var oh=lt`
  ${mt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,gs=class extends zi{constructor(e){if(super(e),this.it=xt,e.type!==ve.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===xt||e==null)return this._t=void 0,this.it=e;if(e===Ht)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};gs.directiveName="unsafeHTML",gs.resultType=1;var ms=class extends gs{};ms.directiveName="unsafeSVG",ms.resultType=2;var sh=Mi(ms),$n,ae=class extends ct{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Ju(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),th(this)}getUrl(){const e=Da(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Da(this.library),r=this.getUrl();if($n||($n=new DOMParser),r)try{const i=await nh(r);if(r!==this.getUrl())return;if(i.ok){const s=$n.parseFromString(i.svg,"text/html").body.querySelector("svg");s!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,s),this.svg=s.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){return j` ${sh(this.svg)} `}};ae.styles=oh;x([et()],ae.prototype,"svg",2);x([k({reflect:!0})],ae.prototype,"name",2);x([k()],ae.prototype,"src",2);x([k()],ae.prototype,"label",2);x([k({reflect:!0})],ae.prototype,"library",2);x([K("label")],ae.prototype,"handleLabelChange",1);x([K("name"),K("src"),K("library")],ae.prototype,"setIcon",1);ae=x([vt("sl-icon")],ae);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ah=lt`
  ${mt}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`,Pt=class extends ct{constructor(){super(...arguments),this.localize=new Vt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,oe(this,"sl-after-hide")}getTarget(){const e=[...this.children].find(t=>t.tagName.toLowerCase()!=="style"&&t.getAttribute("slot")!=="content");if(!e)throw new Error("Invalid tooltip target: no child element was found.");return e}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const e=Ra(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}}handleMouseOut(){if(this.hasTrigger("hover")){const e=Ra(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Wt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Lt(this,"tooltip.show",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Wt(this.body);const{keyframes:e,options:t}=Lt(this,"tooltip.hide",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(e){return this.trigger.split(" ").includes(e)}render(){return j`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${_t({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-hidden=${this.open?"false":"true"}>
          <slot name="content" aria-live=${this.open?"polite":"off"}> ${this.content} </slot>
        </div>
      </sl-popup>
    `}};Pt.styles=ah;x([Z("slot:not([name])")],Pt.prototype,"defaultSlot",2);x([Z(".tooltip__body")],Pt.prototype,"body",2);x([Z("sl-popup")],Pt.prototype,"popup",2);x([k()],Pt.prototype,"content",2);x([k()],Pt.prototype,"placement",2);x([k({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);x([k({type:Number})],Pt.prototype,"distance",2);x([k({type:Boolean,reflect:!0})],Pt.prototype,"open",2);x([k({type:Number})],Pt.prototype,"skidding",2);x([k()],Pt.prototype,"trigger",2);x([k({type:Boolean})],Pt.prototype,"hoist",2);x([K("open",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleOpenChange",1);x([K("content"),K("distance"),K("hoist"),K("placement"),K("skidding")],Pt.prototype,"handleOptionsChange",1);x([K("disabled")],Pt.prototype,"handleDisabledChange",1);Pt=x([vt("sl-tooltip")],Pt);At("tooltip.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}});At("tooltip.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:150,easing:"ease"}});var lh=lt`
  ${mt}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    transform: rotate(45deg);
    background: var(--arrow-color);
    z-index: -1;
  }
`;function hr(e){return e.split("-")[0]}function Br(e){return e.split("-")[1]}function Hr(e){return["top","bottom"].includes(hr(e))?"x":"y"}function Ts(e){return e==="y"?"height":"width"}function Ua(e,t,r){let{reference:i,floating:n}=e;const s=i.x+i.width/2-n.width/2,c=i.y+i.height/2-n.height/2,d=Hr(t),h=Ts(d),a=i[h]/2-n[h]/2,l=d==="x";let o;switch(hr(t)){case"top":o={x:s,y:i.y-n.height};break;case"bottom":o={x:s,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:c};break;case"left":o={x:i.x-n.width,y:c};break;default:o={x:i.x,y:i.y}}switch(Br(t)){case"start":o[d]-=a*(r&&l?-1:1);break;case"end":o[d]+=a*(r&&l?-1:1)}return o}var ch=async(e,t,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:c}=r,d=s.filter(Boolean),h=await(c.isRTL==null?void 0:c.isRTL(t));let a=await c.getElementRects({reference:e,floating:t,strategy:n}),{x:l,y:o}=Ua(a,i,h),u=i,p={},f=0;for(let g=0;g<d.length;g++){const{name:b,fn:E}=d[g],{x:w,y:A,data:$,reset:P}=await E({x:l,y:o,initialPlacement:i,placement:u,strategy:n,middlewareData:p,rects:a,platform:c,elements:{reference:e,floating:t}});l=w!=null?w:l,o=A!=null?A:o,p=se(Et({},p),{[b]:Et(Et({},p[b]),$)}),P&&f<=50&&(f++,typeof P=="object"&&(P.placement&&(u=P.placement),P.rects&&(a=P.rects===!0?await c.getElementRects({reference:e,floating:t,strategy:n}):P.rects),{x:l,y:o}=Ua(a,u,h)),g=-1)}return{x:l,y:o,placement:u,strategy:n,middlewareData:p}};function Qc(e){return typeof e!="number"?function(t){return Et({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Ai(e){return se(Et({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function Is(e,t){var r;t===void 0&&(t={});const{x:i,y:n,platform:s,rects:c,elements:d,strategy:h}=e,{boundary:a="clippingAncestors",rootBoundary:l="viewport",elementContext:o="floating",altBoundary:u=!1,padding:p=0}=t,f=Qc(p),g=d[u?o==="floating"?"reference":"floating":o],b=Ai(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(g)))==null||r?g:g.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(d.floating)),boundary:a,rootBoundary:l,strategy:h})),E=Ai(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:o==="floating"?se(Et({},c.floating),{x:i,y:n}):c.reference,offsetParent:await(s.getOffsetParent==null?void 0:s.getOffsetParent(d.floating)),strategy:h}):c[o]);return{top:b.top-E.top+f.top,bottom:E.bottom-b.bottom+f.bottom,left:b.left-E.left+f.left,right:E.right-b.right+f.right}}var dh=Math.min,Fe=Math.max;function vs(e,t,r){return Fe(e,dh(t,r))}var uh=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:i=0}=e!=null?e:{},{x:n,y:s,placement:c,rects:d,platform:h}=t;if(r==null)return{};const a=Qc(i),l={x:n,y:s},o=Hr(c),u=Br(c),p=Ts(o),f=await h.getDimensions(r),g=o==="y"?"top":"left",b=o==="y"?"bottom":"right",E=d.reference[p]+d.reference[o]-l[o]-d.floating[p],w=l[o]-d.reference[o],A=await(h.getOffsetParent==null?void 0:h.getOffsetParent(r));let $=A?o==="y"?A.clientHeight||0:A.clientWidth||0:0;$===0&&($=d.floating[p]);const P=E/2-w/2,L=a[g],M=$-f[p]-a[b],z=$/2-f[p]/2+P,q=vs(L,z,M),N=(u==="start"?a[g]:a[b])>0&&z!==q&&d.reference[p]<=d.floating[p];return{[o]:l[o]-(N?z<L?L-z:M-z:0),data:{[o]:q,centerOffset:z-q}}}}),hh={left:"right",right:"left",bottom:"top",top:"bottom"};function Ci(e){return e.replace(/left|right|bottom|top/g,t=>hh[t])}function ph(e,t,r){r===void 0&&(r=!1);const i=Br(e),n=Hr(e),s=Ts(n);let c=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(c=Ci(c)),{main:c,cross:Ci(c)}}var fh={start:"end",end:"start"};function qa(e){return e.replace(/start|end/g,t=>fh[t])}var gh=["top","right","bottom","left"];gh.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var mh=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:i,middlewareData:n,rects:s,initialPlacement:c,platform:d,elements:h}=t,a=e,{mainAxis:l=!0,crossAxis:o=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",flipAlignment:f=!0}=a,g=Ps(a,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),b=hr(i),E=u||(b===c||!f?[Ci(c)]:function(q){const N=Ci(q);return[qa(q),N,qa(N)]}(c)),w=[c,...E],A=await Is(t,g),$=[];let P=((r=n.flip)==null?void 0:r.overflows)||[];if(l&&$.push(A[b]),o){const{main:q,cross:N}=ph(i,s,await(d.isRTL==null?void 0:d.isRTL(h.floating)));$.push(A[q],A[N])}if(P=[...P,{placement:i,overflows:$}],!$.every(q=>q<=0)){var L,M;const q=((L=(M=n.flip)==null?void 0:M.index)!=null?L:0)+1,N=w[q];if(N)return{data:{index:q,overflows:P},reset:{placement:N}};let W="bottom";switch(p){case"bestFit":{var z;const B=(z=P.map(V=>[V,V.overflows.filter(Q=>Q>0).reduce((Q,J)=>Q+J,0)]).sort((V,Q)=>V[1]-Q[1])[0])==null?void 0:z[0].placement;B&&(W=B);break}case"initialPlacement":W=c}if(i!==W)return{reset:{placement:W}}}return{}}}},vh=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:i}=t,n=await async function(s,c){const{placement:d,platform:h,elements:a}=s,l=await(h.isRTL==null?void 0:h.isRTL(a.floating)),o=hr(d),u=Br(d),p=Hr(d)==="x",f=["left","top"].includes(o)?-1:1,g=l&&p?-1:1,b=typeof c=="function"?c(s):c;let{mainAxis:E,crossAxis:w,alignmentAxis:A}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:Et({mainAxis:0,crossAxis:0,alignmentAxis:null},b);return u&&typeof A=="number"&&(w=u==="end"?-1*A:A),p?{x:w*g,y:E*f}:{x:E*f,y:w*g}}(t,e);return{x:r+n.x,y:i+n.y,data:n}}}};function bh(e){return e==="x"?"y":"x"}var yh=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:n}=t,s=e,{mainAxis:c=!0,crossAxis:d=!1,limiter:h={fn:E=>{let{x:w,y:A}=E;return{x:w,y:A}}}}=s,a=Ps(s,["mainAxis","crossAxis","limiter"]),l={x:r,y:i},o=await Is(t,a),u=Hr(hr(n)),p=bh(u);let f=l[u],g=l[p];if(c){const E=u==="y"?"bottom":"right";f=vs(f+o[u==="y"?"top":"left"],f,f-o[E])}if(d){const E=p==="y"?"bottom":"right";g=vs(g+o[p==="y"?"top":"left"],g,g-o[E])}const b=h.fn(se(Et({},t),{[u]:f,[p]:g}));return se(Et({},b),{data:{x:b.x-r,y:b.y-i}})}}},Wa=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:n,elements:s}=t,c=e,{apply:d=()=>{}}=c,h=Ps(c,["apply"]),a=await Is(t,h),l=hr(r),o=Br(r);let u,p;l==="top"||l==="bottom"?(u=l,p=o===(await(n.isRTL==null?void 0:n.isRTL(s.floating))?"start":"end")?"left":"right"):(p=l,u=o==="end"?"top":"bottom");const f=Fe(a.left,0),g=Fe(a.right,0),b=Fe(a.top,0),E=Fe(a.bottom,0),w={availableHeight:i.floating.height-(["left","right"].includes(r)?2*(b!==0||E!==0?b+E:Fe(a.top,a.bottom)):a[u]),availableWidth:i.floating.width-(["top","bottom"].includes(r)?2*(f!==0||g!==0?f+g:Fe(a.left,a.right)):a[p])};await d(Et(Et({},t),w));const A=await n.getDimensions(s.floating);return i.floating.width!==A.width||i.floating.height!==A.height?{reset:{rects:!0}}:{}}}};function Jc(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function Ee(e){if(e==null)return window;if(!Jc(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function be(e){return Ee(e).getComputedStyle(e)}function Ie(e){return Jc(e)?"":e?(e.nodeName||"").toLowerCase():""}function td(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function ye(e){return e instanceof Ee(e).HTMLElement}function _e(e){return e instanceof Ee(e).Element}function Fa(e){return typeof ShadowRoot>"u"?!1:e instanceof Ee(e).ShadowRoot||e instanceof ShadowRoot}function Ni(e){const{overflow:t,overflowX:r,overflowY:i,display:n}=be(e);return/auto|scroll|overlay|hidden/.test(t+i+r)&&!["inline","contents"].includes(n)}function _h(e){return["table","td","th"].includes(Ie(e))}function bs(e){const t=/firefox/i.test(td()),r=be(e),i=r.backdropFilter||r.WebkitBackdropFilter;return r.transform!=="none"||r.perspective!=="none"||!!i&&i!=="none"||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"||["transform","perspective"].some(n=>r.willChange.includes(n))||["paint","layout","strict","content"].some(n=>{const s=r.contain;return s!=null&&s.includes(n)})}function ed(){return!/^((?!chrome|android).)*safari/i.test(td())}function Ls(e){return["html","body","#document"].includes(Ie(e))}var Va=Math.min,Lr=Math.max,ki=Math.round;function we(e,t,r){var i,n,s,c;t===void 0&&(t=!1),r===void 0&&(r=!1);const d=e.getBoundingClientRect();let h=1,a=1;t&&ye(e)&&(h=e.offsetWidth>0&&ki(d.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ki(d.height)/e.offsetHeight||1);const l=_e(e)?Ee(e):window,o=!ed()&&r,u=(d.left+(o&&(i=(n=l.visualViewport)==null?void 0:n.offsetLeft)!=null?i:0))/h,p=(d.top+(o&&(s=(c=l.visualViewport)==null?void 0:c.offsetTop)!=null?s:0))/a,f=d.width/h,g=d.height/a;return{width:f,height:g,top:p,right:u+f,bottom:p+g,left:u,x:u,y:p}}function Te(e){return(t=e,(t instanceof Ee(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function Di(e){return _e(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function rd(e){return we(Te(e)).left+Di(e).scrollLeft}function wh(e,t,r){const i=ye(t),n=Te(t),s=we(e,i&&function(h){const a=we(h);return ki(a.width)!==h.offsetWidth||ki(a.height)!==h.offsetHeight}(t),r==="fixed");let c={scrollLeft:0,scrollTop:0};const d={x:0,y:0};if(i||!i&&r!=="fixed")if((Ie(t)!=="body"||Ni(n))&&(c=Di(t)),ye(t)){const h=we(t,!0);d.x=h.x+t.clientLeft,d.y=h.y+t.clientTop}else n&&(d.x=rd(n));return{x:s.left+c.scrollLeft-d.x,y:s.top+c.scrollTop-d.y,width:s.width,height:s.height}}function Wr(e){if(Ie(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(Fa(e)?e.host:null)||Te(e);return Fa(t)?t.host:t}function Ba(e){return ye(e)&&be(e).position!=="fixed"?e.offsetParent:null}function Ha(e){const t=Ee(e);let r=Ba(e);for(;r&&_h(r)&&be(r).position==="static";)r=Ba(r);return r&&(Ie(r)==="html"||Ie(r)==="body"&&be(r).position==="static"&&!bs(r))?t:r||function(i){let n=Wr(i);for(;ye(n)&&!Ls(n);){if(bs(n))return n;n=Wr(n)}return null}(e)||t}function id(e){const t=Wr(e);return Ls(t)?e.ownerDocument.body:ye(t)&&Ni(t)?t:id(t)}function Rr(e,t){var r;t===void 0&&(t=[]);const i=id(e),n=i===((r=e.ownerDocument)==null?void 0:r.body),s=Ee(i),c=n?[s].concat(s.visualViewport||[],Ni(i)?i:[]):i,d=t.concat(c);return n?d:d.concat(Rr(c))}function ja(e,t,r){return t==="viewport"?Ai(function(i,n){const s=Ee(i),c=Te(i),d=s.visualViewport;let h=c.clientWidth,a=c.clientHeight,l=0,o=0;if(d){h=d.width,a=d.height;const u=ed();(u||!u&&n==="fixed")&&(l=d.offsetLeft,o=d.offsetTop)}return{width:h,height:a,x:l,y:o}}(e,r)):_e(t)?function(i,n){const s=we(i,!1,n==="fixed"),c=s.top+i.clientTop,d=s.left+i.clientLeft;return{top:c,left:d,x:d,y:c,right:d+i.clientWidth,bottom:c+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(t,r):Ai(function(i){var n;const s=Te(i),c=Di(i),d=(n=i.ownerDocument)==null?void 0:n.body,h=Lr(s.scrollWidth,s.clientWidth,d?d.scrollWidth:0,d?d.clientWidth:0),a=Lr(s.scrollHeight,s.clientHeight,d?d.scrollHeight:0,d?d.clientHeight:0);let l=-c.scrollLeft+rd(i);const o=-c.scrollTop;return be(d||s).direction==="rtl"&&(l+=Lr(s.clientWidth,d?d.clientWidth:0)-h),{width:h,height:a,x:l,y:o}}(Te(e)))}var xh={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:i,strategy:n}=e;const s=r==="clippingAncestors"?function(a){let l=Rr(a).filter(f=>_e(f)&&Ie(f)!=="body"),o=null;const u=be(a).position==="fixed";let p=u?Wr(a):a;for(;_e(p)&&!Ls(p);){const f=be(p),g=bs(p);(u?g||o:g||f.position!=="static"||!o||!["absolute","fixed"].includes(o.position))?o=f:l=l.filter(b=>b!==p),p=Wr(p)}return l}(t):[].concat(r),c=[...s,i],d=c[0],h=c.reduce((a,l)=>{const o=ja(t,l,n);return a.top=Lr(o.top,a.top),a.right=Va(o.right,a.right),a.bottom=Va(o.bottom,a.bottom),a.left=Lr(o.left,a.left),a},ja(t,d,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:i}=e;const n=ye(r),s=Te(r);if(r===s)return t;let c={scrollLeft:0,scrollTop:0};const d={x:0,y:0};if((n||!n&&i!=="fixed")&&((Ie(r)!=="body"||Ni(s))&&(c=Di(r)),ye(r))){const h=we(r,!0);d.x=h.x+r.clientLeft,d.y=h.y+r.clientTop}return se(Et({},t),{x:t.x-c.scrollLeft+d.x,y:t.y-c.scrollTop+d.y})},isElement:_e,getDimensions:function(e){if(ye(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=we(e);return{width:t.width,height:t.height}},getOffsetParent:Ha,getDocumentElement:Te,async getElementRects(e){let{reference:t,floating:r,strategy:i}=e;const n=this.getOffsetParent||Ha,s=this.getDimensions;return{reference:wh(t,await n(r),i),floating:Et({x:0,y:0},await s(r))}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>be(e).direction==="rtl"};function Eh(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:c=!0,animationFrame:d=!1}=i,h=n&&!d,a=h||s?[..._e(e)?Rr(e):e.contextElement?Rr(e.contextElement):[],...Rr(t)]:[];a.forEach(p=>{h&&p.addEventListener("scroll",r,{passive:!0}),s&&p.addEventListener("resize",r)});let l,o=null;if(c){let p=!0;o=new ResizeObserver(()=>{p||r(),p=!1}),_e(e)&&!d&&o.observe(e),_e(e)||!e.contextElement||d||o.observe(e.contextElement),o.observe(t)}let u=d?we(e):null;return d&&function p(){const f=we(e);!u||f.x===u.x&&f.y===u.y&&f.width===u.width&&f.height===u.height||r(),u=f,l=requestAnimationFrame(p)}(),r(),()=>{var p;a.forEach(f=>{h&&f.removeEventListener("scroll",r),s&&f.removeEventListener("resize",r)}),(p=o)==null||p.disconnect(),o=null,d&&cancelAnimationFrame(l)}}var Sh=(e,t,r)=>ch(e,t,Et({platform:xh},r)),wt=class extends ct{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="initial",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=Eh(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const e=[vh({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Wa({apply:({rects:t})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(mh({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(yh({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Wa({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(uh({element:this.arrowEl,padding:this.arrowPadding})),Sh(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy}).then(({x:t,y:r,middlewareData:i,placement:n})=>{const s=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${t}px`,top:`${r}px`}),this.arrow){const d=i.arrow.x,h=i.arrow.y;let a="",l="",o="",u="";if(this.arrowPlacement==="start"){const p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=s?p:"",u=s?"":p}else if(this.arrowPlacement==="end"){const p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=s?"":p,u=s?p:"",o=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",a=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof d=="number"?`${d}px`:"",a=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:a,right:l,bottom:o,left:u,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return j`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${_t({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?j`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};wt.styles=lh;x([Z(".popup")],wt.prototype,"popup",2);x([Z(".popup__arrow")],wt.prototype,"arrowEl",2);x([k()],wt.prototype,"anchor",2);x([k({type:Boolean,reflect:!0})],wt.prototype,"active",2);x([k({reflect:!0})],wt.prototype,"placement",2);x([k({reflect:!0})],wt.prototype,"strategy",2);x([k({type:Number})],wt.prototype,"distance",2);x([k({type:Number})],wt.prototype,"skidding",2);x([k({type:Boolean})],wt.prototype,"arrow",2);x([k({attribute:"arrow-placement"})],wt.prototype,"arrowPlacement",2);x([k({attribute:"arrow-padding",type:Number})],wt.prototype,"arrowPadding",2);x([k({type:Boolean})],wt.prototype,"flip",2);x([k({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],wt.prototype,"flipFallbackPlacements",2);x([k({attribute:"flip-fallback-strategy"})],wt.prototype,"flipFallbackStrategy",2);x([k({type:Object})],wt.prototype,"flipBoundary",2);x([k({attribute:"flip-padding",type:Number})],wt.prototype,"flipPadding",2);x([k({type:Boolean})],wt.prototype,"shift",2);x([k({type:Object})],wt.prototype,"shiftBoundary",2);x([k({attribute:"shift-padding",type:Number})],wt.prototype,"shiftPadding",2);x([k({attribute:"auto-size"})],wt.prototype,"autoSize",2);x([k()],wt.prototype,"sync",2);x([k({type:Object})],wt.prototype,"autoSizeBoundary",2);x([k({attribute:"auto-size-padding",type:Number})],wt.prototype,"autoSizePadding",2);wt=x([vt("sl-popup")],wt);var Ah=lt`
  ${mt}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ch=class extends Event{constructor(e){super("formdata"),this.formData=e}},kh=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new Ch(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const i=this.getAll(e),n=i.indexOf(r.value);n!==-1&&i.splice(n,1),i.push(t),this.set(e,i)}else super.append(e,t);r.value=t}};function $h(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function Xa(){!window.FormData||$h()||(window.FormData=kh,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?Xa():window.addEventListener("DOMContentLoaded",()=>Xa());var Ar=new WeakMap,Ka=new WeakMap,Cr=new WeakMap,He=class{constructor(e,t){(this.host=e).addController(this),this.options=Et({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,i)=>r.value=i},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(Ar.has(this.form)?Ar.get(this.form).add(this.host):Ar.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Cr.has(this.form)||(Cr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var e;this.form&&((e=Ar.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Cr.has(this.form)&&(this.form.reportValidity=Cr.get(this.form),Cr.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var e;const t=this.host,r=Boolean(Ka.get(t)),i=Boolean(t.invalid),n=Boolean(t.required);(e=this.form)!=null&&e.noValidate?(t.removeAttribute("data-required"),t.removeAttribute("data-optional"),t.removeAttribute("data-invalid"),t.removeAttribute("data-valid"),t.removeAttribute("data-user-invalid"),t.removeAttribute("data-user-valid")):(t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",i),t.toggleAttribute("data-valid",!i),t.toggleAttribute("data-user-invalid",i&&r),t.toggleAttribute("data-user-valid",!i&&r))}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host);!t&&typeof r=="string"&&typeof i<"u"&&(Array.isArray(i)?i.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,i.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Ar.get(this.form))==null||t.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Ka.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},gt=class extends ct{constructor(){super(...arguments),this.formSubmitController=new He(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new xe(this,"[default]","prefix","suffix"),this.localize=new Vt(this),this.hasFocus=!1,this.invalid=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}isButton(){return!this.href}isLink(){return!!this.href}render(){const e=this.isLink(),t=e?xi`a`:xi`button`;return pi`
      <${t}
        part="base"
        class=${_t({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${X(e?void 0:this.disabled)}
        type=${X(e?void 0:this.type)}
        name=${X(e?void 0:this.name)}
        value=${X(e?void 0:this.value)}
        href=${X(e?this.href:void 0)}
        target=${X(e?this.target:void 0)}
        download=${X(e?this.download:void 0)}
        rel=${X(e&&this.target?"noreferrer noopener":void 0)}
        role=${X(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?pi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?pi`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};gt.styles=Ah;x([Z(".button")],gt.prototype,"button",2);x([et()],gt.prototype,"hasFocus",2);x([et()],gt.prototype,"invalid",2);x([k({reflect:!0})],gt.prototype,"variant",2);x([k({reflect:!0})],gt.prototype,"size",2);x([k({type:Boolean,reflect:!0})],gt.prototype,"caret",2);x([k({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);x([k({type:Boolean,reflect:!0})],gt.prototype,"loading",2);x([k({type:Boolean,reflect:!0})],gt.prototype,"outline",2);x([k({type:Boolean,reflect:!0})],gt.prototype,"pill",2);x([k({type:Boolean,reflect:!0})],gt.prototype,"circle",2);x([k()],gt.prototype,"type",2);x([k()],gt.prototype,"name",2);x([k()],gt.prototype,"value",2);x([k()],gt.prototype,"href",2);x([k()],gt.prototype,"target",2);x([k()],gt.prototype,"download",2);x([k()],gt.prototype,"form",2);x([k({attribute:"formaction"})],gt.prototype,"formAction",2);x([k({attribute:"formenctype"})],gt.prototype,"formEnctype",2);x([k({attribute:"formmethod"})],gt.prototype,"formMethod",2);x([k({attribute:"formnovalidate",type:Boolean})],gt.prototype,"formNoValidate",2);x([k({attribute:"formtarget"})],gt.prototype,"formTarget",2);x([K("disabled",{waitUntilFirstUpdate:!0})],gt.prototype,"handleDisabledChange",1);gt=x([vt("sl-button")],gt);var Ph=lt`
  ${mt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,ys=class extends ct{constructor(){super(...arguments),this.localize=new Vt(this)}render(){return j`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ys.styles=Ph;ys=x([vt("sl-spinner")],ys);var Th=lt`
  ${mt}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,cr=class extends ct{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=kr(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=kr(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=kr(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=kr(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),i=kr(t);i!==null&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",r===0),i.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),i.classList.toggle("sl-button-group__button--last",r===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return j`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange} role="none"></slot>
      </div>
    `}};cr.styles=Th;x([Z("slot")],cr.prototype,"defaultSlot",2);x([et()],cr.prototype,"disableRole",2);x([k()],cr.prototype,"label",2);cr=x([vt("sl-button-group")],cr);function kr(e){const t=["sl-button","sl-radio-button"];return t.includes(e.tagName.toLowerCase())?e:e.querySelector(t.join(","))}var Ih=lt`
  ${mt}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Ze=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),le=class extends ct{constructor(){super(...arguments),this.hasSlotController=new xe(this,"icon","suffix"),this.localize=new Vt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,oe(this,"sl-after-hide")}async toast(){return new Promise(e=>{Ze.parentElement===null&&document.body.append(Ze),Ze.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ze.removeChild(this),e(),Ze.querySelector("sl-alert")===null&&Ze.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Wt(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Lt(this,"alert.show",{dir:this.localize.dir()});await It(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Wt(this.base);const{keyframes:e,options:t}=Lt(this,"alert.hide",{dir:this.localize.dir()});await It(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return j`
      <div
        part="base"
        class=${_t({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable?j`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};le.styles=Ih;x([Z('[part~="base"]')],le.prototype,"base",2);x([k({type:Boolean,reflect:!0})],le.prototype,"open",2);x([k({type:Boolean,reflect:!0})],le.prototype,"closable",2);x([k({reflect:!0})],le.prototype,"variant",2);x([k({type:Number})],le.prototype,"duration",2);x([K("open",{waitUntilFirstUpdate:!0})],le.prototype,"handleOpenChange",1);x([K("duration")],le.prototype,"handleDurationChange",1);le=x([vt("sl-alert")],le);At("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});At("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});var Lh=lt`
  ${mt}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,_s=class extends ct{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer","header","image")}render(){return j`
      <div
        part="base"
        class=${_t({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};_s.styles=Lh;_s=x([vt("sl-card")],_s);class nd extends Qt{static get properties(){return{eventType:{type:String,reflectToAttribute:!0,attribute:!0},pointerType:{type:String,reflectToAttribute:!0,attribute:!0},pointerId:{type:Number,reflectToAttribute:!0,attribute:!0},isPrimary:{type:Boolean,reflectToAttribute:!0,attribute:!0},width:{type:Number,reflectToAttribute:!0,attribute:!0},height:{type:Number,reflectToAttribute:!0,attribute:!0},positionX:{type:Number,reflectToAttribute:!0,attribute:!0},positionY:{type:Number,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredStyle:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},pressure:{type:Number,reflectToAttribute:!0,attribute:!0},tangentialPressure:{type:Number,reflectToAttribute:!0,attribute:!0},tiltX:{type:Number,reflectToAttribute:!0,attribute:!0},tiltY:{type:Number,reflectToAttribute:!0,attribute:!0},twist:{type:Number,reflectToAttribute:!0,attribute:!0},avgLatency:{type:Number,reflectToAttribute:!0,attribute:!0}}}set eventType(t){let r=this._eventType;this._eventType=t,this.requestUpdate("eventType",r)}get eventType(){return this._eventType}set pointerType(t){let r=this._pointerType;this._pointerType=t,this.requestUpdate("pointerType",r)}get pointerType(){return this._pointerType}set pointerId(t){let r=this._pointerId;this._pointerId=t,this.requestUpdate("pointerId",r)}get pointerId(){return this._pointerId}set isPrimary(t){let r=this._isPrimary;this._isPrimary=t,this.requestUpdate("isPrimary",r)}get isPrimary(){return this._isPrimary}set width(t){let r=this._pointerId;this._width=t,this.requestUpdate("width",r)}get width(){return this._width}set height(t){let r=this._height;this._height=t,this.requestUpdate("height",r)}get height(){return this._height}set positionX(t){let r=this._positionX;this._positionX=t,this.requestUpdate("positionX",r)}get positionX(){return this._positionX}set positionY(t){let r=this._positionY;this._positionY=t,this.requestUpdate("positionY",r)}get positionY(){return this._positionY}set preferredColor(t){let r=this._preferredColor;this._preferredColor=t,this.requestUpdate("preferredColor",r)}get preferredColor(){return this._preferredColor}set preferredStyle(t){let r=this._preferredStyle;this._preferredStyle=t,this.requestUpdate("preferredStyle",r)}get preferredStyle(){return this._preferredStyle}set preferredWidth(t){let r=this._preferredWidth;this._preferredWidth=t,this.requestUpdate("preferredWidth",r)}get preferredWidth(){return this._preferredWidth}set pressure(t){let r=this._pressure;this._pressure=t,this.requestUpdate("pressure",r)}get pressure(){return this._pressure}set tangentialPressure(t){let r=this._tangentialPressure;this._tangentialPressure=t,this.requestUpdate("tangentialPressure",r)}get tangentialPressure(){return this._tangentialPressure}set tiltX(t){let r=this._tiltX;this._tiltX=t,this.requestUpdate("tiltX",r)}get tiltX(){return this._tiltX}set tiltY(t){let r=this._tiltY;this._tiltY=t,this.requestUpdate("tiltY",r)}get tiltY(){return this._tiltY}set twist(t){let r=this._twist;this._twist=t,this.requestUpdate("twist",r)}get twist(){return this._twist}set avgLatency(t){let r=this._avgLatency;this._avgLatency=t,this.requestUpdate("avgLatency",r)}get avgLatency(){return this._avgLatency}constructor(){super()}_closedClicked(){this.shadowRoot.host.style.visibility="hidden"}render(){return ne`
      <sl-card class="card-header">
        <div slot="header">
          Pointer Events Debug
          <sl-tooltip content="Close">
              <sl-button class="button" @click="${this._closedClicked}">
                <sl-icon name="x-circle" label="Clear Canvas"></sl-icon>
              </sl-button>
          </sl-tooltip>
        </div>
        <div class="content">
          <div class="name">Event type</div><div class="value">${String(this._eventType)}</div>
          <div class="name">Pointer type</div><div class="value">${String(this._pointerType)}</div>
          <div class="name">Pointer id</div><div class="value">${String(this._pointerId)}</div>
          <div class="name">IsPrimary</div><div class="value">${String(this._isPrimary)}</div>
          <div class="name">Width</div><div class="value">${String(this._width)}</div>
          <div class="name">Height</div><div class="value">${String(this._height)}</div>
          <div class="name">Position x</div><div class="value">${String(this._positionX)}</div>
          <div class="name">Position y</div><div class="value">${String(this._positionY)}</div>
          <div class="name">Preferred color</div><div class="value">${String(this._preferredColor)}</div>
          <div class="name">Preferred style</div><div class="value">${String(this._preferredStyle)}</div>
          <div class="name">Preferred width</div><div class="value">${String(this._preferredWidth)}</div>
          <div class="name">Pressure</div><div class="value">${String(this._pressure)}</div>
          <div class="name">Tangential pressure</div><div class="value">${String(this._tangentialPressure)}</div>
          <div class="name">Tilt x</div><div class="value">${String(this._tiltX)}</div>
          <div class="name">Tilt y</div><div class="value">${String(this._tiltY)}</div>
          <div class="name">Twist</div><div class="value">${String(this._twist)}</div>
          <div class="name">Avg latency</div><div class="value">${String(this._avgLatency)}ms</div>
        </div>
      </sl-card>
    `}}ft(nd,"styles",Le`
    :host {
      font-size: 12px;
      z-index: 3;
      user-select: none;
      touch-action: none;
    }

    .card-header {
      width: 300px;
    }

    .card-header [slot='header'] {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    sl-card::part(header) {
      background-color: #313030;
      color: white;
    }

    .card-header sl-icon-button {
      font-size: var(--sl-font-size-medium);
    }

    sl-button.button::part(base) {
      background-color: #525151;
      border-color: #000000;
      color: #a2a2a2;
    }

    sl-button:not([disabled]).button::part(base):hover {
      color: #ececec;
      border-color:#ececec;
    }

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
    }

    .name {
      padding: 5px;
    }

    .value {
      padding: 5px;
      font-weight: bold;
    }
  `);customElements.define("info-panel",nd);var Pn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rh(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}),r}var je=function(e){const t=[];for(let r=0;r<e;r++){const i=[];for(let n=0;n<e;n++)r===n?i.push(1):i.push(0);t.push(i)}return t};const Ga=je;var Oh=function(e,t){let{dimension:r}=e;const i=t.dimension,{observedProjection:n}=t,{stateProjection:s}=t;let{covariance:c}=e;e.dimension||(i?r=i:n?r=n[0].length:s&&(r=s[0].length));const d=Ga(r);return c=c||Ga(r),Object.assign({},e,{dimension:r,transition:d,covariance:c})};const Mh=je;var zh=function(e,t){const r=e.timeStep||1,{observedProjection:i}=t,{stateProjection:n}=t,s=t.dimension;let c;if(n&&Number.isInteger(n[0].length/2))c=t.stateProjection[0].length;else if(i)c=i[0].length*2;else if(s)c=s*2;else throw new Error("observedProjection or stateProjection should be defined in observation in order to use constant-speed filter");const d=c/2,h=Mh(c);for(let o=0;o<d;o++)h[o][o+d]=r;const a=new Array(d).fill(1).concat(new Array(d).fill(r*r)),l=e.covariance||a;return Object.assign({},e,{dimension:c,transition:h,covariance:l})};const Nh=je;var Dh=function(e,t){const r=e.timeStep||1,{observedProjection:i}=t,{stateProjection:n}=t,s=t.dimension;let c;if(n&&Number.isInteger(n[0].length/3))c=t.stateProjection[0].length;else if(i)c=i[0].length*3;else if(s)c=s*3;else throw new Error("observedProjection or stateProjection should be defined in observation in order to use constant-speed filter");const d=c/3,h=Nh(c);for(let o=0;o<d;o++)h[o][o+d]=r,h[o][o+2*d]=.5*r**2,h[o+d][o+2*d]=r;const a=new Array(d).fill(1).concat(new Array(d).fill(r*r)).concat(new Array(d).fill(r**4)),l=e.covariance||a;return Object.assign({},e,{dimension:c,transition:h,covariance:l})},od=function(e,t){return new Array(e).fill(1).map(()=>new Array(t).fill(0))};const Uh=od;var Rs=function(e){const t=Uh(e.length,e.length);for(const[r,i]of e.entries())t[r][r]=i;return t};const sd=function(e,t,r="checkShape"){if(e.length!==t[0])throw new Error(`[${r}] expected size (${t[0]}) and length (${e.length}) does not match`);if(t.length>1)return e.forEach(i=>sd(i,t.slice(1),r))};var qh=sd;const Wh=qh;var jr=function(e,t,r="checkMatrix"){if(e.reduce((i,n)=>i.concat(n)).filter(i=>Number.isNaN(i)).length>0)throw new Error(`[${r}] Matrix should not have a NaN
In : 
`+e.join(`
`));t&&Wh(e,t,r)};const Ya=Rs,Fh=jr;var ad=function(e,{dimension:t,title:r="polymorph"}={}){if(typeof e=="number"||Array.isArray(e)){if(typeof e=="number"&&typeof t=="number")return Ya(new Array(t).fill(e));if(Array.isArray(e)&&Array.isArray(e[0])){let i;return typeof t=="number"&&(i=[t,t]),Fh(e,i,r),e}if(Array.isArray(e)&&typeof e[0]=="number")return Ya(e)}return e};const Za=je,Vh=ad,Bh=jr,Hh=e=>e.map(t=>t.concat());var jh=function(e){const{sensorDimension:t=1,sensorCovariance:r=1,nSensors:i=1}=e,n=Vh(r,{dimension:t});Bh(n,[t,t],"observation.sensorCovariance");const s=Za(t);let c=[];const d=t*i,h=Za(d);for(let a=0;a<i;a++)c=c.concat(Hh(s)),n.forEach((l,o)=>l.forEach((u,p)=>{h[o+a*t][p+a*t]=u}));return Object.assign({},e,{dimension:d,observedProjection:c,covariance:h})};const Tn={"constant-position":Oh,"constant-speed":zh,"constant-acceleration":Dh},In={sensor:jh};var ld={registerObservation:(e,t)=>{In[e]=t},registerDynamic:(e,t)=>{Tn[e]=t},buildObservation:e=>{if(!In[e.name])throw new Error(`The provided observation model name (${e.name}) is not registered`);return In[e.name](e)},buildDynamic:(e,t)=>{if(!Tn[e.name])throw new Error(`The provided dynamic model (${e.name}) name is not registered`);return Tn[e.name](e,t)}},cd=function({observation:e,dimension:t}){if(!Array.isArray(e)){if(t===1&&typeof e=="number")return[[e]];throw new TypeError(`The observation (${e}) should be an array (dimension: ${t})`)}if(e.length!==t)throw new TypeError(`Observation (${e.length}) and dimension (${t}) not matching`);return typeof e[0]=="number"||e[0]===null?e.map(r=>[r]):e},Xh=function({observation:e,dynamic:t}){const{stateProjection:r}=e,{transition:i}=t,n=t.dimension,s=e.dimension;if(n&&s&&Array.isArray(r)&&(n!==r[0].length||s!==r.length))throw new TypeError("stateProjection dimensions not matching with observation and dynamic dimensions");if(n&&Array.isArray(i)&&n!==i.length)throw new TypeError("transition dimension not matching with dynamic dimension");return Array.isArray(r)?{observation:Object.assign({},e,{dimension:r.length}),dynamic:Object.assign({},t,{dimension:r[0].length})}:Array.isArray(i)?{observation:e,dynamic:Object.assign({},t,{dimension:i.length})}:{observation:e,dynamic:t}},Kh=function({observation:e,dynamic:t}){const r=t.dimension,i=e.dimension;if(!r||!i)throw new TypeError("Dimension is not set");return{observation:e,dynamic:t}},dd=function(e,{dimension:t}){const r=e.length,i=e[0].length,n=e.map(s=>s.concat());if(t<i)throw new TypeError(`Dynamic dimension ${t} does not match with observedProjection ${i}`);for(let s=0;s<r;s++)for(let c=0;c<t-i;c++)n[s].push(0);return n};const Qa=dd,Gh=je;var Yh=function({observation:e,dynamic:t}){const{observedProjection:r,stateProjection:i}=e,n=e.dimension,s=t.dimension;if(r&&i)throw new TypeError("You cannot use both observedProjection and stateProjection");if(r){const c=Qa(r,{dimension:s});return{observation:Object.assign({},e,{stateProjection:c}),dynamic:t}}if(n&&s&&!i){const c=Gh(n);return{observation:Object.assign({},e,{stateProjection:Qa(c,{dimension:s})}),dynamic:t}}return{observation:e,dynamic:t}};const Zh=Rs;var Qh=function({observation:e,dynamic:t}){if(!t.init){const i=t.dimension,n=new Array(i).fill(0),s=new Array(i).fill(1e6);return{observation:e,dynamic:Object.assign({},t,{init:{mean:n.map(d=>[d]),covariance:Zh(s),index:-1}})}}return{observation:e,dynamic:t}},Jh=function(e){if(typeof e=="function"||Array.isArray(e))return e;throw new Error("Only arrays and functions are authorized")},tp=function(e){return e.filter((t,r)=>e.indexOf(t)===r)};const ep=tp,Ja=100,ud=function(e,t){if(t>Ja)throw new Error(`In deepAssign, number of recursive call (${t}) reached limit (${Ja}), deepAssign is not working on  self-referencing objects`);const r=e.filter(h=>typeof h<"u"&&h!==null),i=r[r.length-1];if(r.length===1)return r[0];if(typeof i!="object"||Array.isArray(i))return i;if(r.length===0)return null;const n=r.filter(h=>typeof h=="object");let s=[];n.forEach(h=>{s=s.concat(Object.keys(h))});const c=ep(s),d={};return c.forEach(h=>{const a=n.map(l=>l[h]);d[h]=ud(a,t+1)}),d};var rp=(...e)=>ud(e,0),hd=function(e){let t=0;for(const[r,i]of e.entries())t+=i[r];return t},Ui=function(e){return e[0].map((t,r)=>e.map(i=>i[r]))},qi=function(e,t){return e[0].map((r,i)=>r.map((n,s)=>{const c=e.map(d=>d[i][s]);return t(c,i,s)}))};const ip=qi;var Wi=function(...e){return ip(e,([t,r])=>t-r)},Fi=function(e,t){const r=[];for(let i=0;i<e.length;i++){r[i]=[];for(let n=0;n<t[0].length;n++){let s=0,c=!1;for(let d=0;d<e[0].length;d++)(e[i][d]===null&&t[d][n]!==0||t[d][n]===null&&e[i][d]!==0)&&(c=!0),s+=e[i][d]*t[d][n];r[i][n]=c?null:s}}return r},pd=function(e){let t=0;for(let r=0;r<e.length;r++)for(let i=0;i<e.length;i++)t+=e[r][i];return t};const np=hd,op=Ui,sp=Wi,ap=Fi,tl=pd;var fd=function(e,t){if(typeof e>"u")return tl(t);if(typeof t>"u")return tl(e);const r=sp(e,t),i=ap(op(r),r);return Math.sqrt(np(i))},Zt={};Zt.Matrix=function(){};Zt.Matrix.create=function(e){var t=new Zt.Matrix;return t.setElements(e)};Zt.Matrix.I=function(e){for(var t=[],r=e,i;r--;)for(i=e,t[r]=[];i--;)t[r][i]=r===i?1:0;return Zt.Matrix.create(t)};Zt.Matrix.prototype={dup:function(){return Zt.Matrix.create(this.elements)},isSquare:function(){var e=this.elements.length===0?0:this.elements[0].length;return this.elements.length===e},toRightTriangular:function(){if(this.elements.length===0)return Zt.Matrix.create([]);var e=this.dup(),t,r=this.elements.length,i,n,s=this.elements[0].length,c;for(i=0;i<r;i++){if(e.elements[i][i]===0){for(n=i+1;n<r;n++)if(e.elements[n][i]!==0){for(t=[],c=0;c<s;c++)t.push(e.elements[i][c]+e.elements[n][c]);e.elements[i]=t;break}}if(e.elements[i][i]!==0)for(n=i+1;n<r;n++){var d=e.elements[n][i]/e.elements[i][i];for(t=[],c=0;c<s;c++)t.push(c<=i?0:e.elements[n][c]-e.elements[i][c]*d);e.elements[n]=t}}return e},determinant:function(){if(this.elements.length===0)return 1;if(!this.isSquare())return null;for(var e=this.toRightTriangular(),t=e.elements[0][0],r=e.elements.length,i=1;i<r;i++)t=t*e.elements[i][i];return t},isSingular:function(){return this.isSquare()&&this.determinant()===0},augment:function(e){if(this.elements.length===0)return this.dup();var t=e.elements||e;typeof t[0][0]>"u"&&(t=Zt.Matrix.create(t).elements);var r=this.dup(),i=r.elements[0].length,n=r.elements.length,s=t[0].length,c;if(n!==t.length)return null;for(;n--;)for(c=s;c--;)r.elements[n][i+c]=t[n][c];return r},inverse:function(){if(this.elements.length===0||!this.isSquare()||this.isSingular())return null;for(var e=this.elements.length,t=e,r,i=this.augment(Zt.Matrix.I(e)).toRightTriangular(),n=i.elements[0].length,s,c,d,h=[],a;t--;){for(c=[],h[t]=[],d=i.elements[t][t],s=0;s<n;s++)a=i.elements[t][s]/d,c.push(a),s>=e&&h[t].push(a);for(i.elements[t]=c,r=t;r--;){for(c=[],s=0;s<n;s++)c.push(i.elements[r][s]-i.elements[t][s]*i.elements[r][t]);i.elements[r]=c}}return Zt.Matrix.create(h)},setElements:function(e){var t,r,i=e.elements||e;if(i[0]&&typeof i[0][0]<"u"){for(t=i.length,this.elements=[];t--;)for(r=i[t].length,this.elements[t]=[];r--;)this.elements[t][r]=i[t][r];return this}var n=i.length;for(this.elements=[],t=0;t<n;t++)this.elements.push([i[t]]);return this}};var lp=function(e){const t=Zt.Matrix.create(e).inverse();return t!==null?t.elements:null};const cp=lp;var Os=function(e){return cp(e)},gd=(e,t)=>t.map(r=>t.map(i=>e[r][i])),md=function(t){return Number.isFinite(t)},dp=md,up=function(t){if(!Array.isArray(t))return!1;var r=t.length;if(r===0)return!0;var i=t[0];if(!Array.isArray(i))return!1;var n=i.length;if(n===0)return!1;for(var s=0;s<r;s++){var c=t[s];if(!Array.isArray(c)||c.length!==n)return!1;for(var d=0;d<n;d++)if(!dp(c[d]))return!1}return!0},dt={INVALID_ARRAY:"Invalid argument: Received a non-array argument",INVALID_MATRIX:"Invalid argument: Received an invalid matrix",INVALID_SQUARE_MATRIX:"Invalid argument: Received a non-square matrix",INVALID_UPPER_TRIANGULAR_MATRIX:"Invalid argument: Received a non upper-triangular matrix",INVALID_LOWER_TRIANGULAR_MATRIX:"Invalid argument: Received a non lower-triangular matrix",INVALID_EXPONENT:"Invalid argument: Expected a non-negative integer exponent",INVALID_ROW_COL:"Invalid argument: Expected non-negative integer row and column",INVALID_ROW:"Invalid argument: Expected non-negative integer row",INVALID_COLUMN:"Invalid argument: Expected non-negative integer column",INVALID_ROWS_EXPRESSION:"Invalid argument: Received invalid rows expression",INVALID_COLUMNS_EXPRESSION:"Invalid argument: Received invalid columns expression",INVALID_P_NORM:"Invalid argument: Received invalid p-norm",OVERFLOW_INDEX:"Invalid argument: Matrix index overflow",OVERFLOW_COLUMN:"Invalid argument: Column index overflow",OVERFLOW_ROW:"Invalid argument: Row index overflow",NO_UNIQUE_SOLUTION:"Arithmetic Exception: The system has no unique solution",SIZE_INCOMPATIBLE:"Invalid argument: Matrix size-incompatible",SINGULAR_MATRIX:"Arithmetic Exception: The matrix is not invertible",EXPECTED_STRING_NUMBER_AT_POS_1_2:"Invalid argument: Expected a string or a number at arguments[1] and arguments[2]",EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES:"Invalid argument: Expected either an array of numbers or an array of square matrices"},Ln,el;function hp(){if(el)return Ln;el=1;function e(d,h){return s(d)||n(d,h)||r(d,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,h){if(!!d){if(typeof d=="string")return i(d,h);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(d,h)}}function i(d,h){(h==null||h>d.length)&&(h=d.length);for(var a=0,l=new Array(h);a<h;a++)l[a]=d[a];return l}function n(d,h){var a=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var l=[],o=!0,u=!1,p,f;try{for(a=a.call(d);!(o=(p=a.next()).done)&&(l.push(p.value),!(h&&l.length===h));o=!0);}catch(g){u=!0,f=g}finally{try{!o&&a.return!=null&&a.return()}finally{if(u)throw f}}return l}}function s(d){if(Array.isArray(d))return d}function c(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isDiagonal!==void 0)return this._isDiagonal;var h=1/(Math.pow(10,d)*2),a=this._matrix,l=this.size(),o=e(l,2),u=o[0],p=o[1];if(u===0)return this._isDiagonal=!0,!0;for(var f=0;f<u;f++)for(var g=0;g<p;g++)if(f!==g&&Math.abs(a[f][g])>=h)return this.isDiagonal=!1,!1;return this._isDiagonal=!0,!0}return Ln=c,Ln}var Rn,rl;function pp(){if(rl)return Rn;rl=1;function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isSkewSymmetric!==void 0)return this._isSkewSymmetric;if(!this.isSquare())return this._isSkewSymmetric=!1,!1;var r=this._matrix,i=1/(Math.pow(10,t)*2),n=r.length;if(n===0)return this._isSkewSymmetric=!0,!0;for(var s=0;s<n;s++)for(var c=0;c<s;c++)if(Math.abs(r[s][c]+r[c][s])>=i)return this._isSkewSymmetric=!1,!1;return this._isSkewSymmetric=!0,!0}return Rn=e,Rn}var On,il;function fp(){if(il)return On;il=1;function e(){if(this._isSquare!==void 0)return this._isSquare;var t=this._matrix;return t.length===0?(this._isSquare=!0,!0):(this._isSquare=t.length===t[0].length,this._isSquare)}return On=e,On}var Mn,nl;function gp(){if(nl)return Mn;nl=1;function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isSymmetric!==void 0)return this._isSymmetric;if(!this.isSquare())return!1;for(var r=this._matrix,i=1/(Math.pow(10,t)*2),n=r.length,s=0;s<n;s++)for(var c=0;c<=s;c++)if(Math.abs(r[s][c]-r[c][s])>=i)return this._isSymmetric=!1,!1;return this._isSymmetric=!0,!0}return Mn=e,Mn}var zn,ol;function mp(){if(ol)return zn;ol=1;function e(d,h){return s(d)||n(d,h)||r(d,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,h){if(!!d){if(typeof d=="string")return i(d,h);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(d,h)}}function i(d,h){(h==null||h>d.length)&&(h=d.length);for(var a=0,l=new Array(h);a<h;a++)l[a]=d[a];return l}function n(d,h){var a=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var l=[],o=!0,u=!1,p,f;try{for(a=a.call(d);!(o=(p=a.next()).done)&&(l.push(p.value),!(h&&l.length===h));o=!0);}catch(g){u=!0,f=g}finally{try{!o&&a.return!=null&&a.return()}finally{if(u)throw f}}return l}}function s(d){if(Array.isArray(d))return d}function c(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isLowerTriangular!==void 0)return this._isLowerTriangular;var h=1/(Math.pow(10,d)*2),a=this._matrix,l=this.size(),o=e(l,2),u=o[0],p=o[1];if(u===0)return this._isLowerTriangular=!0,!0;for(var f=0;f<u;f++)for(var g=f+1;g<p;g++)if(Math.abs(a[f][g])>=h)return this._isLowerTriangular=!1,!1;return this._isLowerTriangular=!0,!0}return zn=c,zn}var Nn,sl;function vp(){if(sl)return Nn;sl=1;function e(d,h){return s(d)||n(d,h)||r(d,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,h){if(!!d){if(typeof d=="string")return i(d,h);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(d,h)}}function i(d,h){(h==null||h>d.length)&&(h=d.length);for(var a=0,l=new Array(h);a<h;a++)l[a]=d[a];return l}function n(d,h){var a=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var l=[],o=!0,u=!1,p,f;try{for(a=a.call(d);!(o=(p=a.next()).done)&&(l.push(p.value),!(h&&l.length===h));o=!0);}catch(g){u=!0,f=g}finally{try{!o&&a.return!=null&&a.return()}finally{if(u)throw f}}return l}}function s(d){if(Array.isArray(d))return d}function c(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isUpperTriangular!==void 0)return this._isUpperTriangular;var h=1/(Math.pow(10,d)*2),a=this._matrix,l=this.size(),o=e(l,2),u=o[0],p=o[1];if(u===0)return this._isUpperTriangular=!0,!0;for(var f=0;f<u;f++)for(var g=0;g<p;g++)if(!(f<=g)&&Math.abs(a[f][g])>=h)return this._isUpperTriangular=!1,!1;return this._isUpperTriangular=!0,!0}return Nn=c,Nn}var Dn,al;function bp(){if(al)return Dn;al=1;function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._digit;if(this._isOrthogonal!==void 0)return this._isOrthogonal;if(!this.isSquare())return this._isOrthogonal=!1,!1;for(var r=this._matrix,i=1/(Math.pow(10,t)*2),n=r.length,s=0;s<n;s++)for(var c=s;c<n;c++){for(var d=0,h=0;h<n;h++)d+=r[s][h]*r[c][h];if(s===c&&Math.abs(d-1)>=i)return this._isOrthogonal=!1,!1;if(s!==c&&Math.abs(d)>=i)return this._isOrthogonal=!1,!1}return this._isOrthogonal=!0,!0}return Dn=e,Dn}var Un,ll;function yp(){if(ll)return Un;ll=1;var e=Oe(),t=dt,r=t.INVALID_P_NORM,i=t.SINGULAR_MATRIX,n=t.INVALID_SQUARE_MATRIX;function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2;if(c!==1&&c!==2&&c!==1/0&&c!=="F")throw new Error(r);if(!this.isSquare())throw new Error(n);try{var d=e.inverse(this);return d.norm(c)*this.norm(c)}catch(h){if(h.message===i)return 1/0;throw h}}return Un=s,Un}var qn,cl;function _p(){if(cl)return qn;cl=1;function e(l,o){return s(l)||n(l,o)||r(l,o)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,o){if(!!l){if(typeof l=="string")return i(l,o);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(l,o)}}function i(l,o){(o==null||o>l.length)&&(o=l.length);for(var u=0,p=new Array(o);u<o;u++)p[u]=l[u];return p}function n(l,o){var u=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(u!=null){var p=[],f=!0,g=!1,b,E;try{for(u=u.call(l);!(f=(b=u.next()).done)&&(p.push(b.value),!(o&&p.length===o));f=!0);}catch(w){g=!0,E=w}finally{try{!f&&u.return!=null&&u.return()}finally{if(g)throw E}}return p}}function s(l){if(Array.isArray(l))return l}var c=Oe(),d=dt,h=d.INVALID_SQUARE_MATRIX;function a(){if(!this.isSquare())throw new Error(h);if(this._det!==void 0)return this._det;var l=this._matrix,o=l.length;if(o===0)return this._det=1,1;if(o===1)return this._det=l[0][0],this._det;if(o===2)return this._det=l[0][0]*l[1][1]-l[0][1]*l[1][0],this._det;if(o===3)return this._det=l[0][0]*l[1][1]*l[2][2]+l[0][1]*l[1][2]*l[2][0]+l[0][2]*l[1][0]*l[2][1]-l[0][2]*l[1][1]*l[2][0]-l[0][1]*l[1][0]*l[2][2]-l[0][0]*l[1][2]*l[2][1],this._det;for(var u=c.LU(this,!0),p=e(u,2),f=p[0],g=p[1],b=g._matrix,E=0,w=0;w<o;w++)if(f[w]!==w)for(;f[w]!==w;){var A=f[w];f[w]=f[A],f[A]=A,E++}for(var $=1,P=0;P<o;P++)$*=b[P][P];return E%2===1?(this._det=$*-1,this._det):(this._det=$,$)}return qn=a,qn}var Wn,dl;function wp(){if(dl)return Wn;dl=1;function e(){return this.re}return Wn=e,Wn}var Fn,ul;function xp(){if(ul)return Fn;ul=1;function e(){return this.im}return Fn=e,Fn}var Vn,hl;function Ep(){if(hl)return Vn;hl=1;function e(){return Math.sqrt(Math.pow(this.re,2)+Math.pow(this.im,2))}return Vn=e,Vn}var Bn,pl;function Sp(){if(pl)return Bn;pl=1;function e(){var t=this.re,r=this.im,i=1/(Math.pow(10,15)*2);if(!(Math.abs(t)<i&&Math.abs(r)<i))return t===0?r>0?Math.PI*.5:Math.PI*1.5:r===0?t>0?0:Math.PI:t>0&&r>0?Math.atan(r/t):t<0&&r>0?Math.PI-Math.atan(r/(t*-1)):t<0&&r<0?Math.PI+Math.atan(r*-1/(t*-1)):Math.PI*2-Math.atan(r*-1/t)}return Bn=e,Bn}var Hn,fl;function Ap(){if(fl)return Hn;fl=1;function e(){var t=this.re,r=this.im;return Number.isNaN(t)||Number.isNaN(r)?"NaN":t===0&&r===0?"0":t===0?r===1?"i":r===-1?"-i":"".concat(r,"i"):r===0?"".concat(t):r>0?r===1?"".concat(t," + i"):"".concat(t," + ").concat(r,"i"):r===-1?"".concat(t," - i"):"".concat(t," - ").concat(Math.abs(r),"i")}return Hn=e,Hn}var jn,gl;function Cp(){if(gl)return jn;gl=1;function e(t){if(!(t instanceof this))return!1;var r=t.getReal(),i=t.getImaginary();return!!(Number.isNaN(r)||Number.isNaN(i))}return jn=e,jn}var Xn,ml;function kp(){if(ml)return Xn;ml=1;function e(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:15;if(!(t instanceof this)||!(r instanceof this))return!1;if(!Number.isInteger(i)||i<0)throw new Error("Invalid argument: Expected a non-negative integer digit");var n=1/(Math.pow(10,i)*2),s=t.getReal(),c=t.getImaginary(),d=r.getReal(),h=r.getImaginary();return Number.isNaN(s)&&Number.isNaN(c)&&Number.isNaN(d)&&Number.isNaN(h)?!0:Math.abs(s-d)<n&&Math.abs(c-h)<n}return Xn=e,Xn}var Kn,vl;function $p(){if(vl)return Kn;vl=1;function e(t){return t instanceof this?new this(t.getReal(),t.getImaginary()*-1):this.NaN}return Kn=e,Kn}var Gn,bl;function Pp(){if(bl)return Gn;bl=1;function e(t){return t instanceof this?this.divide(this.ONE,t):this.NaN}return Gn=e,Gn}var Yn,yl;function Tp(){if(yl)return Yn;yl=1;function e(t,r){return!(t instanceof this)||!(r instanceof this)?this.NaN:new this(t.re+r.re,t.im+r.im)}return Yn=e,Yn}var Zn,_l;function Ip(){if(_l)return Zn;_l=1;function e(t,r){return!(t instanceof this)||!(r instanceof this)?this.NaN:new this(t.re-r.re,t.im-r.im)}return Zn=e,Zn}var Qn,wl;function Lp(){if(wl)return Qn;wl=1;function e(t,r){if(!(t instanceof this)||!(r instanceof this))return this.NaN;var i=t.re,n=t.im,s=r.re,c=r.im;return new this(i*s-n*c,i*c+n*s)}return Qn=e,Qn}var Jn,xl;function Rp(){if(xl)return Jn;xl=1;function e(t,r){if(!(t instanceof this)||!(r instanceof this))return this.NaN;var i=t.re,n=t.im,s=r.re,c=r.im;if(Math.abs(s)<this.EPSILON&&Math.abs(c)<this.EPSILON)return this.NaN;var d=Math.pow(s,2)+Math.pow(c,2);return new this((i*s+n*c)/d,(n*s-i*c)/d)}return Jn=e,Jn}var to,El;function Op(){if(El)return to;El=1;function e(t){if(!(t instanceof this))return this.NaN;var r=t.getReal(),i=t.getImaginary(),n=Math.exp(r);return new this(n*Math.cos(i),n*Math.sin(i))}return to=e,to}var eo,Sl;function Mp(){if(Sl)return eo;Sl=1;function e(t){if(!(t instanceof this))return this.NaN;var r=t.getModulus(),i=t.getArgument();return r<this.EPSILON||i===void 0?this.NaN:new this(Math.log(r),i)}return eo=e,eo}var ro,Al;function zp(){if(Al)return ro;Al=1;function e(t,r){return!(t instanceof this)||typeof r!="number"&&!(r instanceof this)?this.NaN:typeof r=="number"?!Number.isFinite(r)||Number.isNaN(r)?this.NaN:r===0?this.ONE:this.isEqual(t,this.ZERO)?this.ZERO:this.exp(this.multiply(new this(r,0),this.log(t))):r instanceof this?this.exp(this.multiply(r,this.log(t))):this.NaN}return ro=e,ro}var io,Cl;function Np(){if(Cl)return io;Cl=1;function e(t){if(!(t instanceof this))return this.NaN;var r=t.getReal(),i=t.getImaginary();return new this(Math.sin(r)*Math.cosh(i),Math.cos(r)*Math.sinh(i))}return io=e,io}var no,kl;function Dp(){if(kl)return no;kl=1;function e(t){if(!(t instanceof this))return this.NaN;var r=t.getReal(),i=t.getImaginary();return new this(Math.cos(r)*Math.cosh(i),Math.sin(r)*Math.sinh(i)*-1)}return no=e,no}var oo,$l;function Up(){if($l)return oo;$l=1;function e(t){return this.divide(this.sin(t),this.cos(t))}return oo=e,oo}var so,Pl;function qp(){if(Pl)return so;Pl=1;function e(t){return this.divide(this.ONE,this.sin(t))}return so=e,so}var ao,Tl;function Wp(){if(Tl)return ao;Tl=1;function e(t){return this.divide(this.ONE,this.cos(t))}return ao=e,ao}var lo,Il;function Fp(){if(Il)return lo;Il=1;function e(t){return this.divide(this.ONE,this.tan(t))}return lo=e,lo}var co,Ll;function Vp(){if(Ll)return co;Ll=1;function e(t){return this.multiply(new this(0,-1),this.log(this.add(this.multiply(new this(0,1),t),this.pow(this.subtract(this.ONE,this.pow(t,2)),.5))))}return co=e,co}var uo,Rl;function Bp(){if(Rl)return uo;Rl=1;function e(t){return this.subtract(new this(Math.PI/2),this.asin(t))}return uo=e,uo}var ho,Ol;function Hp(){if(Ol)return ho;Ol=1;function e(t){return this.multiply(new this(0,1/2),this.subtract(this.log(this.subtract(this.ONE,this.multiply(new this(0,1),t))),this.log(this.add(this.ONE,this.multiply(new this(0,1),t)))))}return ho=e,ho}var po,Ml;function jp(){if(Ml)return po;Ml=1;function e(t){return this.asin(this.inverse(t))}return po=e,po}var fo,zl;function Xp(){if(zl)return fo;zl=1;function e(t){return this.acos(this.inverse(t))}return fo=e,fo}var go,Nl;function Kp(){if(Nl)return go;Nl=1;function e(t){return this.atan(this.inverse(t))}return go=e,go}var mo,Dl;function Gp(){if(Dl)return mo;Dl=1;function e(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(n){return typeof n}:e=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(r)}function t(r,i){var n=e(r),s=e(i);return n==="number"&&s==="undefined"?Number.isNaN(r)||!Number.isFinite(r)?(this.re=NaN,this.im=NaN,this):(this.re=r,this.im=0,this):n==="number"&&s==="number"?Number.isNaN(r)||Number.isNaN(i)||!Number.isFinite(r)||!Number.isFinite(i)?(this.re=NaN,this.im=NaN,this):(this.re=r,this.im=i,this):(this.re=NaN,this.im=NaN,this)}return t.prototype.getReal=wp(),t.prototype.getImaginary=xp(),t.prototype.getModulus=Ep(),t.prototype.getArgument=Sp(),t.prototype.toString=Ap(),t.isNaN=Cp(),t.isEqual=kp(),t.conjugate=$p(),t.inverse=Pp(),t.add=Tp(),t.subtract=Ip(),t.multiply=Lp(),t.divide=Rp(),t.exp=Op(),t.log=Mp(),t.pow=zp(),t.sin=Np(),t.cos=Dp(),t.tan=Up(),t.csc=qp(),t.sec=Wp(),t.cot=Fp(),t.asin=Vp(),t.acos=Bp(),t.atan=Hp(),t.acsc=jp(),t.asec=Xp(),t.acot=Kp(),t.NaN=new t(NaN),t.ONE=new t(1),t.ZERO=new t(0),t.PI=new t(Math.PI),t.E=new t(Math.E),t.EPSILON=1/(Math.pow(10,15)*2),mo=t,mo}var vo,Ul;function Yp(){if(Ul)return vo;Ul=1;function e(f,g){return s(f)||n(f,g)||r(f,g)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(f,g){if(!!f){if(typeof f=="string")return i(f,g);var b=Object.prototype.toString.call(f).slice(8,-1);if(b==="Object"&&f.constructor&&(b=f.constructor.name),b==="Map"||b==="Set")return Array.from(f);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return i(f,g)}}function i(f,g){(g==null||g>f.length)&&(g=f.length);for(var b=0,E=new Array(g);b<g;b++)E[b]=f[b];return E}function n(f,g){var b=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(b!=null){var E=[],w=!0,A=!1,$,P;try{for(b=b.call(f);!(w=($=b.next()).done)&&(E.push($.value),!(g&&E.length===g));w=!0);}catch(L){A=!0,P=L}finally{try{!w&&b.return!=null&&b.return()}finally{if(A)throw P}}return E}}function s(f){if(Array.isArray(f))return f}var c=Gp(),d=Oe(),h=dt,a=h.INVALID_SQUARE_MATRIX;function l(){if(!this.isSquare())throw new Error(a);if(this._eigenvalues!==void 0)return this._eigenvalues;var f=this.size()[0],g=[],b=this._digit,E=1/(Math.pow(10,b)*2),w=d.clone(this)._matrix,A=!0,$=!1;o(w,b);for(var P=f-1;P>0;P--){var L=0,M=void 0;if($){$=!1;continue}for(var z=w[f-1][f-1];;){A?M=Math.abs(w[P][P-1]):M=p(w[P-1][P-1],w[P-1][P],w[P][P-1],w[P][P]).metric;for(var q=0;q<f;q++)w[q][q]-=z;u(w,b);for(var N=0;N<f;N++)w[N][N]+=z;if(A&&M<Math.abs(w[P][P-1])&&L++,A&&Math.abs(w[P][P-1])<E){g[P]=new c(w[P][P]);break}var W=p(w[P-1][P-1],w[P-1][P],w[P][P-1],w[P][P]),B=W.metric,V=W.eigen1,Q=W.eigen2;if(!A&&Math.abs(M-B)<E){A=!0,$=!0;var J=V.re,ut=V.im,st=Q.re,ht=Q.im;g[P]=new c(J,ut),g[P-1]=new c(st,ht);break}L>3&&(A=!1)}}return $||(g[0]=new c(w[0][0])),this._eigenvalues=g,g}function o(f,g){for(var b=f.length,E=1/(Math.pow(10,g)*2),w=0;w<b-2;w++){for(var A=0,$=new Array(b-w-1),P=w+1;P<b;P++){var L=f[P][w];A+=Math.pow(L,2),$[P-w-1]=L}if(A=Math.sqrt(A),!(Math.abs(A)<E)){$[0]>=0?$[0]+=A:$[0]-=A;for(var M=0,z=0;z<$.length;z++)M+=Math.pow($[z],2);M=Math.sqrt(M);for(var q=0;q<$.length;q++)$[q]/=M;for(var N=w;N<b;N++){for(var W=new Array(b-w-1),B=w+1;B<b;B++)W[B-w-1]=f[B][N];for(var V=0,Q=0;Q<W.length;Q++)V+=W[Q]*$[Q];V*=2;for(var J=w+1;J<b;J++)N===w&&J!==w+1?f[J][N]=0:f[J][N]=W[J-w-1]-V*$[J-w-1]}for(var ut=0;ut<b;ut++){for(var st=new Array(b-w-1),ht=w+1;ht<b;ht++)st[ht-w-1]=f[ut][ht];for(var G=0,H=0;H<st.length;H++)G+=st[H]*$[H];G*=2;for(var bt=w+1;bt<b;bt++)f[ut][bt]=st[bt-w-1]-G*$[bt-w-1]}}}}function u(f,g){for(var b=f.length,E=1/(Math.pow(10,g)*2),w=new Array(b-1),A=0;A<b-1;A++){var $=f[A][A],P=f[A+1][A],L=Math.sqrt(Math.pow($,2)+Math.pow(P,2));if(!(L<E)){var M=$/L,z=P*-1/L;w[A]=[z,M];for(var q=new Array(b-A),N=new Array(b-A),W=A;W<b;W++)q[W-A]=f[A][W],N[W-A]=f[A+1][W];for(var B=A;B<b;B++)f[A][B]=M*q[B-A]+z*-1*N[B-A],A===B?f[A+1][B]=0:f[A+1][B]=z*q[B-A]+M*N[B-A]}}for(var V=0;V<b-1;V++)if(!!w[V]){for(var Q=e(w[V],2),J=Q[0],ut=Q[1],st=new Array(V+2),ht=new Array(V+2),G=0;G<=V+1;G++)st[G]=f[G][V],ht[G]=f[G][V+1];for(var H=0;H<=V+1;H++)f[H][V]=st[H]*ut-ht[H]*J,f[H][V+1]=st[H]*J+ht[H]*ut}}function p(f,g,b,E){var w=(f+E)*-1,A=f*E-b*g,$=Math.pow(w,2)-4*A,P,L,M,z;return $>=0?(L=0,z=0,w>=0?P=(w*-1-Math.sqrt($))/2:P=(w*-1+Math.sqrt($))/2,M=A/P):(P=-w/2,M=P,L=Math.sqrt($*-1)/2,z=L*-1),{metric:Math.sqrt(Math.pow(P,2)+Math.pow(L,2)),eigen1:{re:P,im:L},eigen2:{re:M,im:z}}}return vo=l,vo}var bo,ql;function Zp(){if(ql)return bo;ql=1;function e(){if(this._nullity!==void 0)return this._nullity;var t=this.size()[1],r=this.rank();return this._nullity=t-r,this._nullity}return bo=e,bo}var yo,Wl;function Qp(){if(Wl)return yo;Wl=1;function e(l,o){return s(l)||n(l,o)||r(l,o)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,o){if(!!l){if(typeof l=="string")return i(l,o);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(l,o)}}function i(l,o){(o==null||o>l.length)&&(o=l.length);for(var u=0,p=new Array(o);u<o;u++)p[u]=l[u];return p}function n(l,o){var u=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(u!=null){var p=[],f=!0,g=!1,b,E;try{for(u=u.call(l);!(f=(b=u.next()).done)&&(p.push(b.value),!(o&&p.length===o));f=!0);}catch(w){g=!0,E=w}finally{try{!f&&u.return!=null&&u.return()}finally{if(g)throw E}}return p}}function s(l){if(Array.isArray(l))return l}var c=Oe(),d=dt,h=d.INVALID_P_NORM;function a(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:2,o=this.size(),u=e(o,2),p=u[0],f=u[1];if(l!==1&&l!==2&&l!==1/0&&l!=="F")throw new Error(h);var g=this._matrix,b=0;if(l===1){for(var E=0;E<f;E++){for(var w=0,A=0;A<p;A++)w+=Math.abs(g[A][E]);w>b&&(b=w)}return b}if(l===2){for(var $=c.transpose(this),P=c.multiply($,this),L=P.eigenvalues(),M=0;M<L.length;M++){var z=L[M].getModulus();z>b&&(b=z)}return Math.sqrt(b)}if(l===1/0){for(var q=0;q<p;q++){for(var N=0,W=0;W<f;W++)N+=Math.abs(g[q][W]);N>b&&(b=N)}return b}for(var B=0;B<p;B++)for(var V=0;V<f;V++)b+=Math.pow(g[B][V],2);return Math.sqrt(b)}return yo=a,yo}var _o,Fl;function Jp(){if(Fl)return _o;Fl=1;function e(h,a){return s(h)||n(h,a)||r(h,a)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(h,a){if(!!h){if(typeof h=="string")return i(h,a);var l=Object.prototype.toString.call(h).slice(8,-1);if(l==="Object"&&h.constructor&&(l=h.constructor.name),l==="Map"||l==="Set")return Array.from(h);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return i(h,a)}}function i(h,a){(a==null||a>h.length)&&(a=h.length);for(var l=0,o=new Array(a);l<a;l++)o[l]=h[l];return o}function n(h,a){var l=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(l!=null){var o=[],u=!0,p=!1,f,g;try{for(l=l.call(h);!(u=(f=l.next()).done)&&(o.push(f.value),!(a&&o.length===a));u=!0);}catch(b){p=!0,g=b}finally{try{!u&&l.return!=null&&l.return()}finally{if(p)throw g}}return o}}function s(h){if(Array.isArray(h))return h}var c=Oe();function d(){if(this._rank!==void 0)return this._rank;var h=1/(Math.pow(10,this._digit)*2),a=c.QR(this)[1],l=a._matrix,o=a.size(),u=e(o,2),p=u[0],f=u[1];if(p===0)return this._rank=1,1;for(var g=0,b=0;b<p;b++)for(var E=b;E<f;E++)if(Math.abs(l[b][E])>=h){g++;break}return this._rank=g,g}return _o=d,_o}var wo,Vl;function tf(){if(Vl)return wo;Vl=1;function e(){if(this._size!==void 0)return this._size;var t=this._matrix;return t.length===0?(this._size=[0,0],this._size):(this._size=[t.length,t[0].length],this._size)}return wo=e,wo}var xo,Bl;function ef(){if(Bl)return xo;Bl=1;var e=dt,t=e.INVALID_SQUARE_MATRIX;function r(){var i=this._isSquare!==void 0?this._isSquare:this.isSquare();if(!i)throw new Error(t);if(this._trace!==void 0)return this._trace;for(var n=this._matrix,s=n.length,c=0,d=0;d<s;d++)c+=n[d][d];return this._trace=c,c}return xo=r,xo}var Eo,Hl;function rf(){if(Hl)return Eo;Hl=1;function e(l,o){return s(l)||n(l,o)||r(l,o)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,o){if(!!l){if(typeof l=="string")return i(l,o);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(l,o)}}function i(l,o){(o==null||o>l.length)&&(o=l.length);for(var u=0,p=new Array(o);u<o;u++)p[u]=l[u];return p}function n(l,o){var u=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(u!=null){var p=[],f=!0,g=!1,b,E;try{for(u=u.call(l);!(f=(b=u.next()).done)&&(p.push(b.value),!(o&&p.length===o));f=!0);}catch(w){g=!0,E=w}finally{try{!f&&u.return!=null&&u.return()}finally{if(g)throw E}}return p}}function s(l){if(Array.isArray(l))return l}var c=dt,d=c.INVALID_MATRIX,h=c.SIZE_INCOMPATIBLE;function a(l,o){if(!(l instanceof this)||!(o instanceof this))throw new Error(d);var u=l.size(),p=e(u,2),f=p[0],g=p[1],b=o.size(),E=e(b,2),w=E[0],A=E[1];if(f!==w||g!==A)throw new Error(h);var $=l._matrix,P=o._matrix;return this.generate(f,g,function(L,M){return $[L][M]+P[L][M]})}return Eo=a,Eo}var So,jl;function nf(){if(jl)return So;jl=1;var e=dt,t=e.INVALID_MATRIX,r=e.INVALID_SQUARE_MATRIX,i=e.SINGULAR_MATRIX,n=Oe();function s(d){if(!(d instanceof this))throw new Error(t);if(!d.isSquare())throw new Error(r);var h=d.size()[0];if(h===0)return new n([]);for(var a=1/(Math.pow(10,d._digit)*2),l=this.identity(h)._matrix,o=this.clone(d)._matrix,u=c(h),p=0;p<h;p++){for(var f=p,g=o[u[p]][p];Math.abs(g)<a&&f<h-1;)f++,g=o[u[f]][p];if(Math.abs(g)<a)throw new Error(i);if(p!==f){var b=u[p];u[p]=u[f],u[f]=b}for(var E=u[p],w=0;w<h;w++){var A=u[w];if(w===p){for(var $=0;$<h;$++)$===p&&(o[A][$]=1),$>p&&(o[A][$]/=g),l[A][$]/=g;g=1}if(w!==p&&Math.abs(o[A][p])>=a)for(var P=o[A][p]/g,L=0;L<h;L++)L===p&&(o[A][L]=0),L>p&&(o[A][L]-=P*o[E][L]),l[A][L]-=P*l[E][L]}}for(var M=0;M<h;M++)o[M]=l[u[M]];return new this(o)}function c(d){for(var h=new Array(d),a=0;a<d;a++)h[a]=a;return h}return So=s,So}var Ao,Xl;function Vi(){if(Xl)return Ao;Xl=1;var e=dt,t=e.INVALID_ROW_COL;return Ao=function(i,n){if(!Number.isInteger(i)||i<0||!Number.isInteger(n)||n<0)throw new Error(t);if(i===0||n===0)return[];for(var s=new Array(i),c=0;c<i;c++)s[c]=new Array(n);return s},Ao}var Co,Kl;function of(){if(Kl)return Co;Kl=1;function e(o,u){return s(o)||n(o,u)||r(o,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(o,u){if(!!o){if(typeof o=="string")return i(o,u);var p=Object.prototype.toString.call(o).slice(8,-1);if(p==="Object"&&o.constructor&&(p=o.constructor.name),p==="Map"||p==="Set")return Array.from(o);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return i(o,u)}}function i(o,u){(u==null||u>o.length)&&(u=o.length);for(var p=0,f=new Array(u);p<u;p++)f[p]=o[p];return f}function n(o,u){var p=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(p!=null){var f=[],g=!0,b=!1,E,w;try{for(p=p.call(o);!(g=(E=p.next()).done)&&(f.push(E.value),!(u&&f.length===u));g=!0);}catch(A){b=!0,w=A}finally{try{!g&&p.return!=null&&p.return()}finally{if(b)throw w}}return f}}function s(o){if(Array.isArray(o))return o}var c=Vi(),d=dt,h=d.INVALID_MATRIX,a=d.SIZE_INCOMPATIBLE;function l(o,u){if(!(o instanceof this)||!(u instanceof this))throw new Error(h);var p=o.size(),f=e(p,2),g=f[0],b=f[1],E=u.size(),w=e(E,2),A=w[0],$=w[1];if(b!==A)throw new Error(a);for(var P=o._matrix,L=u._matrix,M=c(g,$),z=0;z<g;z++)for(var q=0;q<$;q++){M[z][q]=0;for(var N=0;N<A;N++)M[z][q]+=P[z][N]*L[N][q]}return new this(M)}return Co=l,Co}var ko,Gl;function sf(){if(Gl)return ko;Gl=1;var e=dt,t=e.INVALID_MATRIX,r=e.INVALID_SQUARE_MATRIX,i=e.INVALID_EXPONENT;function n(s,c){if(!(s instanceof this))throw new Error(t);if(!s.isSquare())throw new Error(r);if(!Number.isInteger(c)||c<0)throw new Error(i);var d=s.size()[0];if(c===0)return this.identity(d);if(c===1)return this.clone(s);if(c%2===0){var h=this.pow(s,c/2);return this.multiply(h,h)}var a=this.pow(s,(c-1)/2);return this.multiply(this.multiply(a,a),s)}return ko=n,ko}var $o,Yl;function af(){if(Yl)return $o;Yl=1;function e(a,l){return s(a)||n(a,l)||r(a,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,l){if(!!a){if(typeof a=="string")return i(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(a,l)}}function i(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,u=new Array(l);o<l;o++)u[o]=a[o];return u}function n(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var u=[],p=!0,f=!1,g,b;try{for(o=o.call(a);!(p=(g=o.next()).done)&&(u.push(g.value),!(l&&u.length===l));p=!0);}catch(E){f=!0,b=E}finally{try{!p&&o.return!=null&&o.return()}finally{if(f)throw b}}return u}}function s(a){if(Array.isArray(a))return a}var c=dt,d=c.SIZE_INCOMPATIBLE,h=c.INVALID_MATRIX;return $o=function(l,o){if(!(l instanceof this)||!(o instanceof this))throw new Error(h);var u=l.size(),p=e(u,2),f=p[0],g=p[1],b=o.size(),E=e(b,2),w=E[0],A=E[1];if(f!==w||g!==A)throw new Error(d);var $=l._matrix,P=o._matrix;return this.generate(f,g,function(L,M){return $[L][M]-P[L][M]})},$o}var Po,Zl;function lf(){if(Zl)return Po;Zl=1;function e(a,l){return s(a)||n(a,l)||r(a,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,l){if(!!a){if(typeof a=="string")return i(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(a,l)}}function i(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,u=new Array(l);o<l;o++)u[o]=a[o];return u}function n(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var u=[],p=!0,f=!1,g,b;try{for(o=o.call(a);!(p=(g=o.next()).done)&&(u.push(g.value),!(l&&u.length===l));p=!0);}catch(E){f=!0,b=E}finally{try{!p&&o.return!=null&&o.return()}finally{if(f)throw b}}return u}}function s(a){if(Array.isArray(a))return a}var c=dt,d=c.INVALID_MATRIX;function h(a){if(!(a instanceof this))throw new Error(d);var l=a.size(),o=e(l,2),u=o[0],p=o[1],f=a._matrix;return this.generate(p,u,function(g,b){return f[b][g]})}return Po=h,Po}var To,Ql;function cf(){if(Ql)return To;Ql=1;function e(f,g){return s(f)||n(f,g)||r(f,g)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(f,g){if(!!f){if(typeof f=="string")return i(f,g);var b=Object.prototype.toString.call(f).slice(8,-1);if(b==="Object"&&f.constructor&&(b=f.constructor.name),b==="Map"||b==="Set")return Array.from(f);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return i(f,g)}}function i(f,g){(g==null||g>f.length)&&(g=f.length);for(var b=0,E=new Array(g);b<g;b++)E[b]=f[b];return E}function n(f,g){var b=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(b!=null){var E=[],w=!0,A=!1,$,P;try{for(b=b.call(f);!(w=($=b.next()).done)&&(E.push($.value),!(g&&E.length===g));w=!0);}catch(L){A=!0,P=L}finally{try{!w&&b.return!=null&&b.return()}finally{if(A)throw P}}return E}}function s(f){if(Array.isArray(f))return f}var c=Vi(),d=dt,h=d.INVALID_MATRIX,a=d.INVALID_UPPER_TRIANGULAR_MATRIX,l=d.INVALID_SQUARE_MATRIX,o=d.SIZE_INCOMPATIBLE,u=d.NO_UNIQUE_SOLUTION;function p(f,g){if(!(f instanceof this)||!(g instanceof this))throw new Error(h);if(!f.isUpperTriangular())throw new Error(a);if(!f.isSquare())throw new Error(l);var b=f.size()[0],E=g.size(),w=e(E,2),A=w[0],$=w[1],P=f._matrix,L=g._matrix;if(A!==b||$!==1)throw new Error(o);for(var M=1/(Math.pow(10,f._digit)*2),z=0;z<b;z++)if(Math.abs(P[z][z])<M)throw new Error(u);for(var q=c(b,1),N=b-1;N>=0;N--){for(var W=0,B=N+1;B<b;B++)W+=q[B][0]*P[N][B];q[N][0]=(L[N][0]-W)/P[N][N]}return new this(q)}return To=p,To}var Io,Jl;function df(){if(Jl)return Io;Jl=1;function e(f,g){return s(f)||n(f,g)||r(f,g)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(f,g){if(!!f){if(typeof f=="string")return i(f,g);var b=Object.prototype.toString.call(f).slice(8,-1);if(b==="Object"&&f.constructor&&(b=f.constructor.name),b==="Map"||b==="Set")return Array.from(f);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return i(f,g)}}function i(f,g){(g==null||g>f.length)&&(g=f.length);for(var b=0,E=new Array(g);b<g;b++)E[b]=f[b];return E}function n(f,g){var b=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(b!=null){var E=[],w=!0,A=!1,$,P;try{for(b=b.call(f);!(w=($=b.next()).done)&&(E.push($.value),!(g&&E.length===g));w=!0);}catch(L){A=!0,P=L}finally{try{!w&&b.return!=null&&b.return()}finally{if(A)throw P}}return E}}function s(f){if(Array.isArray(f))return f}var c=Vi(),d=dt,h=d.INVALID_MATRIX,a=d.INVALID_LOWER_TRIANGULAR_MATRIX,l=d.INVALID_SQUARE_MATRIX,o=d.SIZE_INCOMPATIBLE,u=d.NO_UNIQUE_SOLUTION;function p(f,g){if(!(f instanceof this)||!(g instanceof this))throw new Error(h);if(!f.isLowerTriangular())throw new Error(a);if(!f.isSquare())throw new Error(l);var b=f.size()[0],E=g.size(),w=e(E,2),A=w[0],$=w[1],P=f._matrix,L=g._matrix;if(b!==A||$!==1)throw new Error(o);for(var M=1/(Math.pow(10,f._digit)*2),z=0;z<b;z++)if(Math.abs(P[z][z])<M)throw new Error(u);for(var q=c(b,1),N=0;N<b;N++){for(var W=0,B=0;B<N;B++)W+=q[B][0]*P[N][B];q[N][0]=(L[N][0]-W)/P[N][N]}return new this(q)}return Io=p,Io}var Lo,tc;function uf(){if(tc)return Lo;tc=1;function e(u,p){return s(u)||n(u,p)||r(u,p)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(u,p){if(!!u){if(typeof u=="string")return i(u,p);var f=Object.prototype.toString.call(u).slice(8,-1);if(f==="Object"&&u.constructor&&(f=u.constructor.name),f==="Map"||f==="Set")return Array.from(u);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return i(u,p)}}function i(u,p){(p==null||p>u.length)&&(p=u.length);for(var f=0,g=new Array(p);f<p;f++)g[f]=u[f];return g}function n(u,p){var f=u==null?null:typeof Symbol<"u"&&u[Symbol.iterator]||u["@@iterator"];if(f!=null){var g=[],b=!0,E=!1,w,A;try{for(f=f.call(u);!(b=(w=f.next()).done)&&(g.push(w.value),!(p&&g.length===p));b=!0);}catch($){E=!0,A=$}finally{try{!b&&f.return!=null&&f.return()}finally{if(E)throw A}}return g}}function s(u){if(Array.isArray(u))return u}var c=dt,d=c.INVALID_MATRIX,h=c.NO_UNIQUE_SOLUTION,a=c.INVALID_SQUARE_MATRIX,l=c.SIZE_INCOMPATIBLE;function o(u,p){if(!(u instanceof this)||!(p instanceof this))throw new Error(d);if(!u.isSquare())throw new Error(a);var f=u.size(),g=e(f,2),b=g[0],E=g[1],w=p.size(),A=e(w,2),$=A[0],P=A[1];if(E!==$||P!==1)throw new Error(l);for(var L=1/(Math.pow(10,u._digit)*2),M=this.LU(u,!0),z=e(M,2),q=z[0],N=z[1],W=N._matrix,B=p._matrix,V=b-1;V>=0;V--)if(Math.abs(W[V][V])<L)throw new Error(h);for(var Q=new Array($),J=new Array($),ut=0;ut<$;ut++)Q[ut]=B[q[ut]][0];for(var st=0;st<b;st++){for(var ht=0,G=0;G<st;G++)ht+=J[G]*W[st][G];J[st]=Q[st]-ht}for(var H=b-1;H>=0;H--){for(var bt=0,Tt=H+1;Tt<b;Tt++)bt+=W[H][Tt]*Q[Tt];Q[H]=(J[H]-bt)/W[H][H]}for(var yt=0;yt<$;yt++)J[yt]=[Q[yt]];return new this(J)}return Lo=o,Lo}var Ro,ec;function hf(){if(ec)return Ro;ec=1;function e(o,u){return s(o)||n(o,u)||r(o,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(o,u){if(!!o){if(typeof o=="string")return i(o,u);var p=Object.prototype.toString.call(o).slice(8,-1);if(p==="Object"&&o.constructor&&(p=o.constructor.name),p==="Map"||p==="Set")return Array.from(o);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return i(o,u)}}function i(o,u){(u==null||u>o.length)&&(u=o.length);for(var p=0,f=new Array(u);p<u;p++)f[p]=o[p];return f}function n(o,u){var p=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(p!=null){var f=[],g=!0,b=!1,E,w;try{for(p=p.call(o);!(g=(E=p.next()).done)&&(f.push(E.value),!(u&&f.length===u));g=!0);}catch(A){b=!0,w=A}finally{try{!g&&p.return!=null&&p.return()}finally{if(b)throw w}}return f}}function s(o){if(Array.isArray(o))return o}var c=dt,d=c.INVALID_MATRIX;function h(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!(o instanceof this))throw new Error(d);for(var p=o.size(),f=e(p,2),g=f[0],b=f[1],E=Math.min(g,b),w=1/(Math.pow(10,o._digit)*2),A=a(g),$=this.clone(o)._matrix,P=0;P<g-1;P++){var L=Math.min(P,b);l($,A,L,g,b);var M=A[P],z=$[M][L];if(!(Math.abs(z)<w))for(var q=P+1;q<g;q++){var N=A[q],W=$[N][L];if(Math.abs(W)>=w){for(var B=W/z,V=L;V<b;V++)$[N][V]-=B*$[M][V];$[N][L]=B}}}for(var Q=new Array(g),J=0;J<g;J++)Q[J]=$[A[J]];if(u)return[A,new this(Q)];var ut=this.generate(g,g,function(G,H){var bt=A[G];return H===bt?1:0}),st=this.generate(g,E,function(G,H){return G===H?1:G<H?0:Q[G][H]}),ht=this.generate(E,b,function(G,H){return G>H?0:Q[G][H]});return[ut,st,ht]}function a(o){for(var u=new Array(o),p=0;p<o;p++)u[p]=p;return u}function l(o,u,p,f,g){for(var b=Math.min(p,g),E=p,w=Math.abs(o[u[p]][b]),A=p+1;A<f;A++){var $=Math.abs(o[u[A]][b]);$>w&&(E=A,w=$)}var P=u[p];u[p]=u[E],u[E]=P}return Ro=h,Ro}var Oo,rc;function pf(){if(rc)return Oo;rc=1;function e(a,l){return s(a)||n(a,l)||r(a,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,l){if(!!a){if(typeof a=="string")return i(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(a,l)}}function i(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,u=new Array(l);o<l;o++)u[o]=a[o];return u}function n(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var u=[],p=!0,f=!1,g,b;try{for(o=o.call(a);!(p=(g=o.next()).done)&&(u.push(g.value),!(l&&u.length===l));p=!0);}catch(E){f=!0,b=E}finally{try{!p&&o.return!=null&&o.return()}finally{if(f)throw b}}return u}}function s(a){if(Array.isArray(a))return a}var c=dt,d=c.INVALID_MATRIX;function h(a){if(!(a instanceof this))throw new Error(d);for(var l=a.size(),o=e(l,2),u=o[0],p=o[1],f=Math.min(u,p),g=1/(Math.pow(10,a._digit)*2),b=this.clone(a)._matrix,E=this.identity(u)._matrix,w=0;w<f;w++){for(var A=!0,$=w+1;$<u;$++)if(Math.abs(b[$][w])>=g){A=!1;break}if(!A){for(var P=0,L=w;L<u;L++)P+=Math.pow(b[L][w],2);P=Math.sqrt(P);var M=-1;b[w][w]<0&&(M=1);for(var z=b[w][w]-M*P,q=new Array(u-w),N=0;N<u-w;N++)q[N]=b[N+w][w]/z;q[0]=1;for(var W=-1*M*z/P,B=new Array(u-w),V=0;V<u-w;V++){for(var Q=new Array(p),J=0;J<p;J++)Q[J]=b[w+V][J];B[V]=Q}for(var ut=w;ut<u;ut++)for(var st=0;st<p;st++){for(var ht=0,G=0;G<u-w;G++)ht+=B[G][st]*q[G];b[ut][st]=B[ut-w][st]-W*q[ut-w]*ht}for(var H=new Array(u),bt=0;bt<u;bt++){for(var Tt=new Array(u-w),yt=0;yt<u-w;yt++)Tt[yt]=E[bt][w+yt];H[bt]=Tt}for(var Ct=0;Ct<u;Ct++)for(var Bt=w;Bt<u;Bt++){for(var Me=0,he=0;he<u-w;he++)Me+=H[Ct][he]*q[he];E[Ct][Bt]=H[Ct][Bt-w]-W*q[Bt-w]*Me}}}for(var Kt=0;Kt<u;Kt++)for(var re=0;re<p;re++)Kt>re&&(b[Kt][re]=0);return[new this(E),new this(b)]}return Oo=h,Oo}var Mo,ic;function ff(){if(ic)return Mo;ic=1;function e(a,l){return s(a)||n(a,l)||r(a,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,l){if(!!a){if(typeof a=="string")return i(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(a,l)}}function i(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,u=new Array(l);o<l;o++)u[o]=a[o];return u}function n(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var u=[],p=!0,f=!1,g,b;try{for(o=o.call(a);!(p=(g=o.next()).done)&&(u.push(g.value),!(l&&u.length===l));p=!0);}catch(E){f=!0,b=E}finally{try{!p&&o.return!=null&&o.return()}finally{if(f)throw b}}return u}}function s(a){if(Array.isArray(a))return a}var c=dt,d=c.INVALID_MATRIX;function h(a){if(!(a instanceof this))throw new Error(d);var l=a.size(),o=e(l,2),u=o[0],p=o[1],f=a._matrix;return this.generate(u,p,function(g,b){return f[g][b]})}return Mo=h,Mo}var zo,nc;function gf(){if(nc)return zo;nc=1;function e(o,u){return s(o)||n(o,u)||r(o,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(o,u){if(!!o){if(typeof o=="string")return i(o,u);var p=Object.prototype.toString.call(o).slice(8,-1);if(p==="Object"&&o.constructor&&(p=o.constructor.name),p==="Map"||p==="Set")return Array.from(o);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return i(o,u)}}function i(o,u){(u==null||u>o.length)&&(u=o.length);for(var p=0,f=new Array(u);p<u;p++)f[p]=o[p];return f}function n(o,u){var p=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(p!=null){var f=[],g=!0,b=!1,E,w;try{for(p=p.call(o);!(g=(E=p.next()).done)&&(f.push(E.value),!(u&&f.length===u));g=!0);}catch(A){b=!0,w=A}finally{try{!g&&p.return!=null&&p.return()}finally{if(b)throw w}}return f}}function s(o){if(Array.isArray(o))return o}var c=dt,d=c.INVALID_ROW_COL,h=c.OVERFLOW_COLUMN,a=c.INVALID_MATRIX;function l(o,u){if(!(o instanceof this))throw new Error(a);if(!Number.isInteger(u)||u<0)throw new Error(d);var p=o.size(),f=e(p,2),g=f[0],b=f[1];if(u>=b)throw new Error(h);var E=o._matrix;return this.generate(g,1,function(w){return E[w][u]})}return zo=l,zo}var No,oc;function mf(){if(oc)return No;oc=1;var e=Oe(),t=md,r=dt,i=r.INVALID_ARRAY,n=r.EXPECTED_ARRAY_OF_NUMBERS_OR_MATRICES,s=r.INVALID_SQUARE_MATRIX;function c(d){if(!Array.isArray(d))throw new Error(i);for(var h=d.length,a,l=0;l<h;l++){var o=d[l];if(!t(o)&&!(o instanceof e))throw new Error(n);if(t(o)){if(!a){a="number";continue}if(a!=="number")throw new Error(n)}else{if(!o.isSquare())throw new Error(s);if(!a){a="square";continue}if(a!=="square")throw new Error(n)}}if(a==="number")return e.generate(h,h,function(A,$){return A===$?d[A]:0});for(var u=0,p=new Array(h),f=0;f<h;f++){var g=d[f].size()[0];u+=g,p[f]=g}var b=0,E=0,w=p[b];return e.generate(u,u,function(A,$){A-E===w&&$-E===w&&(E+=w,b++);var P=A-E,L=$-E;for(w=p[b];w===0;)b++,w=p[b];return P<w&&P>=0&&L<w&&L>=0?d[b]._matrix[P][L]:0})}return No=c,No}var Do,sc;function vf(){if(sc)return Do;sc=1;function e(a,l){return s(a)||n(a,l)||r(a,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,l){if(!!a){if(typeof a=="string")return i(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(a,l)}}function i(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,u=new Array(l);o<l;o++)u[o]=a[o];return u}function n(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var u=[],p=!0,f=!1,g,b;try{for(o=o.call(a);!(p=(g=o.next()).done)&&(u.push(g.value),!(l&&u.length===l));p=!0);}catch(E){f=!0,b=E}finally{try{!p&&o.return!=null&&o.return()}finally{if(f)throw b}}return u}}function s(a){if(Array.isArray(a))return a}var c=dt,d=c.INVALID_MATRIX;function h(a,l){if(!(a instanceof this))throw new Error(d);var o=a.size(),u=e(o,2),p=u[0],f=u[1],g=a._matrix;return this.generate(p,f,function(b,E){return l(g[b][E])})}return Do=h,Do}var Uo,ac;function bf(){if(ac)return Uo;ac=1;var e=Vi();function t(r,i,n){var s=e(r,i);if(r===0||i===0)return new this([]);for(var c=0;c<r;c++)for(var d=0;d<i;d++)s[c][d]=n(c,d);return new this(s)}return Uo=t,Uo}var qo,lc;function yf(){if(lc)return qo;lc=1;function e(a,l){return s(a)||n(a,l)||r(a,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,l){if(!!a){if(typeof a=="string")return i(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(a,l)}}function i(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,u=new Array(l);o<l;o++)u[o]=a[o];return u}function n(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var u=[],p=!0,f=!1,g,b;try{for(o=o.call(a);!(p=(g=o.next()).done)&&(u.push(g.value),!(l&&u.length===l));p=!0);}catch(E){f=!0,b=E}finally{try{!p&&o.return!=null&&o.return()}finally{if(f)throw b}}return u}}function s(a){if(Array.isArray(a))return a}var c=dt,d=c.INVALID_MATRIX;function h(a){if(!(a instanceof this))throw new Error(d);for(var l=a.size(),o=e(l,2),u=o[0],p=o[1],f=Math.min(u,p),g=a._matrix,b=new Array(f),E=0;E<f;E++)b[E]=g[E][E];return b}return qo=h,qo}var Wo,cc;function _f(){if(cc)return Wo;cc=1;function e(t,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;return this.generate(t,r,function(){return Number.parseFloat((Math.random()*(n-i)+i).toFixed(s))})}return Wo=e,Wo}var Fo,dc;function wf(){if(dc)return Fo;dc=1;function e(t){return this.generate(t,t,function(r,i){return r===i?1:0})}return Fo=e,Fo}var Vo,uc;function xf(){if(uc)return Vo;uc=1;function e(a,l){return s(a)||n(a,l)||r(a,l)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(a,l){if(!!a){if(typeof a=="string")return i(a,l);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(a,l)}}function i(a,l){(l==null||l>a.length)&&(l=a.length);for(var o=0,u=new Array(l);o<l;o++)u[o]=a[o];return u}function n(a,l){var o=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var u=[],p=!0,f=!1,g,b;try{for(o=o.call(a);!(p=(g=o.next()).done)&&(u.push(g.value),!(l&&u.length===l));p=!0);}catch(E){f=!0,b=E}finally{try{!p&&o.return!=null&&o.return()}finally{if(f)throw b}}return u}}function s(a){if(Array.isArray(a))return a}var c=dt,d=c.INVALID_MATRIX;function h(a,l){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;if(!(a instanceof this)||!(l instanceof this))throw new Error(d);var u=a.size(),p=e(u,2),f=p[0],g=p[1],b=l.size(),E=e(b,2),w=E[0],A=E[1];if(f!==w||g!==A)return!1;for(var $=1/(Math.pow(10,o)*2),P=a._matrix,L=l._matrix,M=0;M<f;M++)for(var z=0;z<g;z++)if(Math.abs(P[M][z]-L[M][z])>=$)return!1;return!0}return Vo=h,Vo}var Bo,hc;function Ef(){if(hc)return Bo;hc=1;function e(o,u){return s(o)||n(o,u)||r(o,u)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(o,u){if(!!o){if(typeof o=="string")return i(o,u);var p=Object.prototype.toString.call(o).slice(8,-1);if(p==="Object"&&o.constructor&&(p=o.constructor.name),p==="Map"||p==="Set")return Array.from(o);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return i(o,u)}}function i(o,u){(u==null||u>o.length)&&(u=o.length);for(var p=0,f=new Array(u);p<u;p++)f[p]=o[p];return f}function n(o,u){var p=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(p!=null){var f=[],g=!0,b=!1,E,w;try{for(p=p.call(o);!(g=(E=p.next()).done)&&(f.push(E.value),!(u&&f.length===u));g=!0);}catch(A){b=!0,w=A}finally{try{!g&&p.return!=null&&p.return()}finally{if(b)throw w}}return f}}function s(o){if(Array.isArray(o))return o}var c=dt,d=c.INVALID_ROW_COL,h=c.OVERFLOW_ROW,a=c.INVALID_MATRIX;function l(o,u){if(!(o instanceof this))throw new Error(a);if(!Number.isInteger(u)||u<0)throw new Error(d);var p=o.size(),f=e(p,2),g=f[0],b=f[1];if(u>=g)throw new Error(h);var E=o._matrix;return this.generate(1,b,function(w,A){return E[u][A]})}return Bo=l,Bo}var Ho,pc;function Sf(){if(pc)return Ho;pc=1;function e(E,w){return s(E)||n(E,w)||r(E,w)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(E,w){if(!!E){if(typeof E=="string")return i(E,w);var A=Object.prototype.toString.call(E).slice(8,-1);if(A==="Object"&&E.constructor&&(A=E.constructor.name),A==="Map"||A==="Set")return Array.from(E);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return i(E,w)}}function i(E,w){(w==null||w>E.length)&&(w=E.length);for(var A=0,$=new Array(w);A<w;A++)$[A]=E[A];return $}function n(E,w){var A=E==null?null:typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"];if(A!=null){var $=[],P=!0,L=!1,M,z;try{for(A=A.call(E);!(P=(M=A.next()).done)&&($.push(M.value),!(w&&$.length===w));P=!0);}catch(q){L=!0,z=q}finally{try{!P&&A.return!=null&&A.return()}finally{if(L)throw z}}return $}}function s(E){if(Array.isArray(E))return E}function c(E){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?c=function(A){return typeof A}:c=function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},c(E)}var d=dt,h=d.INVALID_MATRIX,a=d.EXPECTED_STRING_NUMBER_AT_POS_1_2,l=d.INVALID_ROW,o=d.INVALID_COLUMN,u=d.OVERFLOW_ROW,p=d.INVALID_ROWS_EXPRESSION,f=d.INVALID_COLUMNS_EXPRESSION,g=d.OVERFLOW_COLUMN;function b(E,w,A){if(!(E instanceof this))throw new Error(h);var $=c(w),P=c(A);if($!=="string"&&$!=="number"||P!=="string"&&P!=="number")throw new Error(a);var L=E.size(),M=e(L,2),z=M[0],q=M[1],N,W,B,V;if($==="number"){if(!Number.isInteger(w)||w<0)throw new Error(l);if(w>=z)throw new Error(u);N=w,W=w}else{var Q=w.split(":");if(Q.length!==2)throw new Error(p);var J=e(Q,2),ut=J[0],st=J[1];if(ut==="")N=0;else{var ht=Number(ut);if(!Number.isInteger(ht)||ht<0)throw new Error(l);if(ht>=z)throw new Error(u);N=ht}if(st==="")W=z-1;else{var G=Number(st);if(!Number.isInteger(G)||G<0)throw new Error(l);if(G>=z)throw new Error(u);W=G}if(N>W)throw new Error(p)}if(P==="number"){if(!Number.isInteger(A)||A<0)throw new Error(o);if(A>=q)throw new Error(g);B=A,V=A}else{var H=A.split(":");if(H.length!==2)throw new Error(f);var bt=e(H,2),Tt=bt[0],yt=bt[1];if(Tt==="")B=0;else{var Ct=Number(Tt);if(!Number.isInteger(Ct)||Ct<0)throw new Error(o);if(Ct>=q)throw new Error(g);B=Ct}if(yt==="")V=q-1;else{var Bt=Number(yt);if(!Number.isInteger(Bt)||Bt<0)throw new Error(o);if(Bt>=q)throw new Error(g);V=Bt}if(B>V)throw new Error(f)}for(var Me=E._matrix,he=W-N+1,Kt=V-B+1,re=new Array(he),ze=N;ze<=W;ze++){for(var fr=new Array(Kt),Xe=B;Xe<=V;Xe++)fr[Xe-B]=Me[ze][Xe];re[ze-N]=fr}return new this(re)}return Ho=b,Ho}var jo,fc;function Af(){if(fc)return jo;fc=1;function e(t,r){return r===void 0?this.generate(t,t,function(){return 0}):this.generate(t,r,function(){return 0})}return jo=e,jo}var Xo,gc;function Cf(){if(gc)return Xo;gc=1;var e=dt,t=e.SIZE_INCOMPATIBLE;function r(i,n,s){if(n*s!==i.length)throw new Error(t);return this.generate(n,s,function(c,d){return i[c*s+d]})}return Xo=r,Xo}var Ko,mc;function kf(){if(mc)return Ko;mc=1;function e(d,h){return s(d)||n(d,h)||r(d,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,h){if(!!d){if(typeof d=="string")return i(d,h);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(d,h)}}function i(d,h){(h==null||h>d.length)&&(h=d.length);for(var a=0,l=new Array(h);a<h;a++)l[a]=d[a];return l}function n(d,h){var a=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var l=[],o=!0,u=!1,p,f;try{for(a=a.call(d);!(o=(p=a.next()).done)&&(l.push(p.value),!(h&&l.length===h));o=!0);}catch(g){u=!0,f=g}finally{try{!o&&a.return!=null&&a.return()}finally{if(u)throw f}}return l}}function s(d){if(Array.isArray(d))return d}function c(){for(var d=this.size(),h=e(d,2),a=h[0],l=h[1],o=a*l,u=new Array(o),p=0;p<a;p++)for(var f=0;f<l;f++)u[p*l+f]=this._matrix[p][f];return u}return Ko=c,Ko}var Go,vc;function $f(){if(vc)return Go;vc=1;function e(l,o){return s(l)||n(l,o)||r(l,o)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(l,o){if(!!l){if(typeof l=="string")return i(l,o);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return i(l,o)}}function i(l,o){(o==null||o>l.length)&&(o=l.length);for(var u=0,p=new Array(o);u<o;u++)p[u]=l[u];return p}function n(l,o){var u=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(u!=null){var p=[],f=!0,g=!1,b,E;try{for(u=u.call(l);!(f=(b=u.next()).done)&&(p.push(b.value),!(o&&p.length===o));f=!0);}catch(w){g=!0,E=w}finally{try{!f&&u.return!=null&&u.return()}finally{if(g)throw E}}return p}}function s(l){if(Array.isArray(l))return l}var c=dt,d=c.INVALID_ROW_COL,h=c.OVERFLOW_INDEX;function a(l,o){if(!Number.isInteger(l)||l<0||!Number.isInteger(o)||o<0)throw new Error(d);var u=this._matrix,p=this.size(),f=e(p,2),g=f[0],b=f[1];if(l>=g||o>=b)throw new Error(h);return u[l][o]}return Go=a,Go}var Yo,bc;function Pf(){if(bc)return Yo;bc=1;function e(d,h){return s(d)||n(d,h)||r(d,h)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(d,h){if(!!d){if(typeof d=="string")return i(d,h);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(d,h)}}function i(d,h){(h==null||h>d.length)&&(h=d.length);for(var a=0,l=new Array(h);a<h;a++)l[a]=d[a];return l}function n(d,h){var a=d==null?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var l=[],o=!0,u=!1,p,f;try{for(a=a.call(d);!(o=(p=a.next()).done)&&(l.push(p.value),!(h&&l.length===h));o=!0);}catch(g){u=!0,f=g}finally{try{!o&&a.return!=null&&a.return()}finally{if(u)throw f}}return l}}function s(d){if(Array.isArray(d))return d}function c(){for(var d=this._matrix,h=this.size(),a=e(h,2),l=a[0],o=a[1],u="",p=0;p<l;p++){for(var f=0;f<o;f++)u+=d[p][f].toString(),f!==o-1&&(u+=" ");p!==l-1&&(u+=`
`)}return u}return Yo=c,Yo}var Zo,yc;function Oe(){if(yc)return Zo;yc=1;var e=up,t=dt,r=t.INVALID_MATRIX;function i(n){if(!e(n))throw new Error(r);this._matrix=n,this._digit=8}return Zo=i,i.prototype.isDiagonal=hp(),i.prototype.isSkewSymmetric=pp(),i.prototype.isSquare=fp(),i.prototype.isSymmetric=gp(),i.prototype.isLowerTriangular=mp(),i.prototype.isUpperTriangular=vp(),i.prototype.isOrthogonal=bp(),i.prototype.cond=yp(),i.prototype.det=_p(),i.prototype.eigenvalues=Yp(),i.prototype.nullity=Zp(),i.prototype.norm=Qp(),i.prototype.rank=Jp(),i.prototype.size=tf(),i.prototype.trace=ef(),i.add=rf(),i.inverse=nf(),i.multiply=of(),i.pow=sf(),i.subtract=af(),i.transpose=lf(),i.backward=cf(),i.forward=df(),i.solve=uf(),i.LU=hf(),i.QR=pf(),i.clone=ff(),i.column=gf(),i.diag=mf(),i.elementwise=vf(),i.generate=bf(),i.getDiag=yf(),i.getRandomMatrix=_f(),i.identity=wf(),i.isEqual=xf(),i.row=Ef(),i.submatrix=Sf(),i.zero=Af(),i.fromArray=Cf(),i.prototype.flatten=kf(),i.prototype.entry=$f(),i.prototype.toString=Pf(),Zo}const Tf=.1,If=Oe(),Lf=jr,Rf=function(e,t=1e-10){new If(e).eigenvalues().forEach(n=>{if(n<=-t)throw console.log(e,n),new Error(`Eigenvalue should be positive (actual: ${n})`)}),console.log("is definite positive",e)},Of=function(e,t="checkSymetric"){e.forEach((r,i)=>r.forEach((n,s)=>{if(i===s&&n<0)throw new Error(`[${t}] Variance[${s}] should be positive (actual: ${n})`);if(Math.abs(n)>Math.sqrt(e[i][i]*e[s][s]))throw console.log(e),new Error(`[${t}] Covariance[${i}][${s}] should verify Cauchy Schwarz Inequality (expected: |x| <= sqrt(${e[i][i]} * ${e[s][s]}) actual: ${n})`);if(Math.abs(n-e[s][i])>Tf)throw new Error(`[${t}] Covariance[${i}][${s}] should equal Covariance[${s}][${i}]  (actual diff: ${Math.abs(n-e[s][i])})  = ${n} - ${e[s][i]}
${e.join(`
`)} is invalid`)}))};var Bi=function({covariance:e,eigen:t=!1}){Lf(e),Of(e),t&&Rf(e)};const _c=Wi,Qo=Ui,me=Fi,wc=Os,Mf=qi,zf=gd,Nf=cd,xc=jr,Df=Bi;class Or{constructor({mean:t,covariance:r,index:i}){this.mean=t,this.covariance=r,this.index=i}check(t){this.constructor.check(this,t)}static check(t,{dimension:r=null,title:i=null,eigen:n}={}){if(!(t instanceof Or))throw new TypeError(`The argument is not a state 
Tips: maybe you are using 2 different version of kalman-filter in your npm deps tree`);const{mean:s,covariance:c}=t,d=s.length;if(typeof r=="number"&&d!==r)throw new Error(`[${i}] State.mean ${s} with dimension ${d} does not match expected dimension (${r})`);xc(s,[d,1],i?i+"-mean":"mean"),xc(c,[d,d],i?i+"-covariance":"covariance"),Df({covariance:c,eigen:n})}static matMul({state:t,matrix:r}){const i=me(me(r,t.covariance),Qo(r)),n=me(r,t.mean);return new Or({mean:n,covariance:i,index:t.index})}subState(t){return new Or({mean:t.map(i=>this.mean[i]),covariance:zf(this.covariance,t),index:this.index})}rawDetailedMahalanobis(t){const r=_c(this.mean,t);this.check();const i=wc(this.covariance);if(i===null)throw this.check({eigen:!0}),new Error(`Cannot invert covariance ${JSON.stringify(this.covariance)}`);const n=Qo(r),s=Math.sqrt(me(me(n,i),r));if(Number.isNaN(s))throw console.log({diff:r,covarianceInvert:i,this:this,point:t},me(me(n,i),r)),new Error("mahalanobis is NaN");return{diff:r,covarianceInvert:i,value:s}}detailedMahalanobis({kf:t,observation:r,obsIndexes:i}){if(r.length!==t.observation.dimension)throw new Error(`Mahalanobis observation ${r} (dimension: ${r.length}) does not match with kf observation dimension (${t.observation.dimension})`);let n=Nf({observation:r,dimension:r.length});const s=t.getValue(t.observation.stateProjection,{});let c=this.constructor.matMul({state:this,matrix:s});return Array.isArray(i)&&(c=c.subState(i),n=i.map(d=>n[d])),c.rawDetailedMahalanobis(n)}mahalanobis(t){const r=this.detailedMahalanobis(t).value;if(Number.isNaN(r))throw new TypeError("mahalanobis is NaN");return r}obsBhattacharyya({kf:t,state:r,obsIndexes:i}){const n=t.getValue(t.observation.stateProjection,{});let s=this.constructor.matMul({state:this,matrix:n}),c=this.constructor.matMul({state:r,matrix:n});return Array.isArray(i)&&(s=s.subState(i),c=c.subState(i)),s.bhattacharyya(c)}bhattacharyya(t){const r=this,i=Mf([r.covariance,t.covariance],([c,d])=>(c+d)/2);let n;try{n=wc(i)}catch(c){throw console.log("Cannot invert",i),c}const s=_c(r.mean,t.mean);return me(Qo(s),me(n,s))[0][0]}}var Ms=Or;const Uf=qi;var vd=function(...e){return Uf(e,t=>t.reduce((r,i)=>r===null||i===null?null:r+i,0))};const ee=Fi,Ec=Ui,Jo=vd,qf=Os,Sc=Wi,Wf=je,$r=Ms,ts=jr,Ff={info:(...e)=>console.log(...e),debug:()=>{},warn:(...e)=>console.log(...e),error:(...e)=>console.log(...e)};class Vf{constructor({dynamic:t,observation:r,logger:i=Ff}){this.dynamic=t,this.observation=r,this.logger=i}getValue(t,r){return typeof t=="function"?t(r):t}getInitState(){const{mean:t,covariance:r,index:i}=this.dynamic.init;return new $r({mean:t,covariance:r,index:i})}getPredictedCovariance(t={}){let{previousCorrected:r,index:i}=t;r=r||this.getInitState();const n=Object.assign({},{previousCorrected:r,index:i},t),s=this.getValue(this.dynamic.transition,n),c=Ec(s),d=ee(s,r.covariance),h=ee(d,c),a=this.getValue(this.dynamic.covariance,n),l=Jo(a,h);return ts(l,[this.dynamic.dimension,this.dynamic.dimension],"predicted.covariance"),l}predict(t={}){let{previousCorrected:r,index:i}=t;r=r||this.getInitState(),typeof i!="number"&&typeof r.index=="number"&&(i=r.index+1),$r.check(r,{dimension:this.dynamic.dimension});const n=Object.assign({},{previousCorrected:r,index:i},t),s=this.getValue(this.dynamic.transition,n);ts(s,[this.dynamic.dimension,this.dynamic.dimension],"dynamic.transition");const c=ee(s,r.mean),d=this.getPredictedCovariance(n),h=new $r({mean:c,covariance:d,index:i});return this.logger.debug("Prediction done",h),h}getGain(t){let{predicted:r,stateProjection:i}=t;const n=Object.assign({},{index:r.index},t);i=i||this.getValue(this.observation.stateProjection,n);const s=this.getValue(this.observation.covariance,n);ts(s,[this.observation.dimension,this.observation.dimension],"observation.covariance");const c=Ec(i),d=ee(ee(i,r.covariance),c),h=Jo(d,s);return ee(ee(r.covariance,c),qf(h))}getCorrectedCovariance(t){let{predicted:r,optimalKalmanGain:i,stateProjection:n}=t;const s=Wf(r.covariance.length);if(!n){const c=Object.assign({},{index:r.index},t);n=this.getValue(this.observation.stateProjection,c)}return i||(i=this.getGain(Object.assign({stateProjection:n},t))),ee(Sc(s,ee(i,n)),r.covariance)}correct(t){const{predicted:r,observation:i}=t;if($r.check(r,{dimension:this.dynamic.dimension}),!i)throw new Error("no measure available");const n=Object.assign({},{observation:i,predicted:r,index:r.index},t),s=this.getValue(this.observation.stateProjection,n),c=this.getGain(Object.assign({predicted:r,stateProjection:s},t)),d=Sc(i,ee(s,r.mean)),h=Jo(r.mean,ee(c,d));if(Number.isNaN(h[0][0]))throw console.log({optimalKalmanGain:c,innovation:d,predicted:r}),new TypeError("Mean is NaN after correction");const a=this.getCorrectedCovariance(Object.assign({predicted:r,optimalKalmanGain:c,stateProjection:s},t)),l=new $r({mean:h,covariance:a,index:r.index});return this.logger.debug("Correction done",l),l}}var Bf=Vf;const Hf=cd,jf=Xh,Xf=Kh,Kf=Yh,Gf=Qh,oi=Jh,Yf=rp,si=ad,Zf=fd,ai=Ms,Ac=ld,Qf=Bf,Jf=function(e){return typeof e=="string"?{name:e}:{name:"constant-position"}},tg=function(e){return typeof e=="number"?{name:"sensor",sensorDimension:e}:typeof e=="string"?{name:e}:{name:"sensor"}},eg=function({observation:e,dynamic:t}){(typeof e!="object"||e===null)&&(e=tg(e)),(typeof t!="object"||t===null)&&(t=Jf(t)),typeof e.name=="string"&&(e=Ac.buildObservation(e)),typeof t.name=="string"&&(t=Ac.buildDynamic(t,e));const r=jf({observation:e,dynamic:t}),i=Xf(r),n=Kf(i);return Gf(n)},rg=function(e){const{observation:t,dynamic:r}=e;return Yf(e,{observation:{stateProjection:oi(si(t.stateProjection)),covariance:oi(si(t.covariance,{dimension:t.dimension}))},dynamic:{transition:oi(si(r.transition)),covariance:oi(si(r.covariance,{dimension:r.dimension}))}})};class ig extends Qf{constructor(t={}){const r=eg(t),i=rg(r);super(Object.assign({},t,i))}correct(t){const r=Hf({observation:t.observation,dimension:this.observation.dimension});return super.correct(Object.assign({},t,{observation:r}))}filter(t){const r=super.predict(t);return this.correct(Object.assign({},t,{predicted:r}))}filterAll(t){const{mean:r,covariance:i,index:n}=this.dynamic.init;let s=new ai({mean:r,covariance:i,index:n});const c=[];for(const d of t){const h=this.predict({previousCorrected:s});s=this.correct({predicted:h,observation:d}),c.push(s.mean.map(a=>a[0]))}return c}asymptoticStateCovariance(t=100,r=1e-6){let i=super.getInitState(),n;const s=[];for(let c=0;c<t;c++)if(n=new ai({mean:null,covariance:super.getPredictedCovariance({previousCorrected:i})}),i=new ai({mean:null,covariance:super.getCorrectedCovariance({predicted:n})}),s.push(i.covariance),Zf(i.covariance,s[c-1])<r)return s[c];throw new Error("The state covariance does not converge asymptotically")}asymptoticGain(t=1e-6){const r=this.asymptoticStateCovariance(t),i=new ai({mean:new Array(r.length).fill(0).map(()=>[0]),covariance:r});return super.getGain({previousCorrected:i})}}var ng=ig,og=function({measures:e,averages:t}){const r=e.length,i=e[0].length;if(r===0)throw new Error("Cannot find covariance for empty sample");return new Array(i).fill(1).map((n,s)=>new Array(i).fill(1).map((c,d)=>{const a=e.map((l,o)=>(l[s]-t[o][s])*(l[d]-t[o][d])).reduce((l,o)=>l+o)/r;if(Number.isNaN(a))throw new TypeError("result is NaN");return a}))};const sg=Bi;var ag=function({correlation:e,variance:t}){return sg({covariance:e}),e.map((r,i)=>r.map((n,s)=>n*Math.sqrt(t[s]*t[i])))};const lg=Bi;var cg=function(e){lg({covariance:e});const t=e.map((r,i)=>e[i][i]);return{variance:t,correlation:e.map((r,i)=>r.map((n,s)=>n/Math.sqrt(t[s]*t[i])))}},dg={add:vd,diag:Rs,"distance-mat":fd,"elem-wise":qi,identity:je,invert:Os,"mat-mul":Fi,"pad-with-zeros":dd,sub:Wi,"sub-square-matrix":gd,sum:pd,trace:hd,transpose:Ui,zeros:od};const li=ld;var Cc={registerDynamic:li.registerDynamic,KalmanFilter:ng,registerObservation:li.registerObservation,buildObservation:li.buildObservation,buildDynamic:li.buildDynamic,getCovariance:og,State:Ms,checkCovariance:Bi,correlationToCovariance:ag,covarianceToCorrelation:cg,linalgebra:dg};class ug{constructor(t){this._elements=[],this._maxSize=t}clear(){this._elements=[]}push(t){this._elements.length>=this._maxSize&&this._elements.shift(),this._elements.push(t)}avg(){return this._elements.length===0?0:this._elements.reduce(function(r,i){return r+i},0)/this._elements.length}}function bd(){return typeof new PointerEvent("pointerdown").penCustomizationsDetails<"u"}class zs extends Qt{constructor(){super();ft(this,"_fetchPenCustomizations",async r=>{if(this.drawWithCustomizations&&bd()){let i=await r.penCustomizationsDetails.getPreferredInkingColor(),n=await r.penCustomizationsDetails.getPreferredInkingStyle(),s=await r.penCustomizationsDetails.getPreferredInkingWidth();if(n=n.toLowerCase(),i!=this.currentPreferredColor||s!=this.currentPreferredWidth||n!=this.currentPreferredStyle){let c=new CustomEvent("customizations-changed",{detail:{currentPreferredColor:i,currentPreferredWidth:s,currentPreferredStyle:n},bubbles:!0,composed:!0});this.dispatchEvent(c)}this.currentPreferredColor=i,this.currentPreferredWidth=s,this.currentPreferredStyle=n}return Promise.resolve()});ft(this,"_onPointerDown",async r=>{if(this._pointerDown&&r.pointerId!==this._pointerId)return;this._app.currentEvent=r,this._pointerDown=!0,this._pointerId=r.pointerId,await this._fetchPenCustomizations(r);let i=this._getPoint(r);this._renderer.beginPath(i),this._draw()});ft(this,"_onPointerMove",async r=>{if(r.clientY<0||r.clientX<0||r.clientX>window.innerWidth||r.clientY>window.innerHeight){this._pointerDown=!1;return}if(this._pointerDown&&r.pointerId===this._pointerId){let i=[],n=[];if(r.getCoalescedEvents&&this._drawCoalescedEvents)if(r.getCoalescedEvents().length>0)for(let s of r.getCoalescedEvents()){let c=this._getPoint(s);c.coalesced=!0,i.push(c)}else i.push(this._getPoint(r));else i.push(this._getPoint(r));if(i[i.length-1].coalesced=!1,this._drawPredictedEvents){for(let s of this._getPrediction(r))n.push(s);this._numOfPredictionPoints>0&&this._numOfPredictionPoints<=10&&(n=n.slice(0,this._numOfPredictionPoints))}this._renderer.addToPath(i,n),this._draw(),r.preventDefault()}this._app.currentEvent=r});ft(this,"_onPointerUp",async r=>{if(this._app.currentEvent=r,this._pointerDown){if(r.pointerId!==this._pointerId)return;this._renderer.endPath(this._getPoint(r)),this.paths=this._renderer.paths,this._pointerDown=!1,this._pointerId=null,this._currentPreferredColor=null,this._currentPreferredWidth=null,this._currentPreferredStyle=null,this._resetPrediction()}});ft(this,"_onResize",async r=>{const i=window.getComputedStyle(this),n=parseInt(i.width,10),s=parseInt(i.height,10);n>0&&s>0&&(this._canvas.width=this._predictionCanvas.width=n,this._canvas.height=this._predictionCanvas.height=s,this._renderer.resize(n,s))});this._app=null,this._canvas=null,this._predictionCanvas=null,this._desynchronized=!1,this._renderer=null,this._pointerRawUpdate=!1,this._pointerDown=!1,this._currentLineColor="#000000",this._currentLineStyle="INK",this._currentLineWidth=1,this._drawCoalescedEvents=!1,this._drawPointsOnly=!1,this._drawPredictedEvents=!1,this._drawWithCustomizations=!1,this._drawWithPressure=!1,this._highlightPredictedEvents=!1,this._predictionType="custom",this._numOfPredictionPoints=1,this._kalmanFilterDataSize=6,this._kalmanFilter=new Cc.KalmanFilter({observation:this._kalmanFilterDataSize}),this._correctedPrediction=null}static get properties(){return{app:{type:Object,reflectToAttribute:!0,attribute:!0},canvas:{type:Object,reflectToAttribute:!0,attribute:!0},predictionCanvas:{type:Object,reflectToAttribute:!0,attribute:!0},desynchronized:{type:Boolean,reflectToAttribute:!0,attribute:!0},renderer:{type:Object,reflectToAttribute:!0,attribute:!0},pointerRawUpdate:{type:Boolean,reflectToAttribute:!0,attribute:!0},currentLineColor:{type:String,reflectToAttribute:!0,attribute:!0},currentLineStyle:{type:String,reflectToAttribute:!0,attribute:!0},currentLineWidth:{type:String,reflectToAttribute:!0,attribute:!0},drawCoalescedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPointsOnly:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPredictedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawWithCustomizations:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawWithPressure:{type:Boolean,reflectToAttribute:!0,attribute:!0},highlightPredictedEvents:{type:Boolean,reflectToAttribute:!0,attribute:!0},numOfPredictionPoints:{type:Number,reflectToAttribute:!0,attribute:!0}}}set app(r){let i=this._app;this._app=r,this.requestUpdate("app",i)}get app(){return this._app}set canvas(r){let i=this._canvas;this._canvas=r,this.requestUpdate("canvas",i)}get canvas(){return this._canvas}set predictionCanvas(r){let i=this._predictionCanvas;this._predictionCanvas=r,this.requestUpdate("predictionCanvas",i)}get predictionCanvas(){return this._predictionCanvas}set desynchronized(r){let i=this._desynchronized;this._desynchronized=r,this.requestUpdate("desynchronized",i)}get desynchronized(){return this._desynchronized}set renderer(r){let i=this._renderer;this._renderer=r,this.requestUpdate("renderer",i),this._renderer&&(this._renderer.currentLineColor=this._currentLineColor,this._renderer.currentLineStyle=this._currentLineStyle,this._renderer.currentLineWidth=this._currentLineWidth,this._renderer.drawCoalescedEvents=this._drawCoalescedEvents,this._renderer.drawPointsOnly=this._drawPointsOnly,this._renderer.drawPredictedEvents=this._drawPredictedEvents,this._renderer.drawWithCustomizations=this._drawWithCustomizations,this._renderer.drawWithPressure=this._drawWithPressure,this._renderer.highlightPredictedEvents=this._highlightPredictedEvents,this._renderer.predictionType=this._predictionType,this._renderer.numOfPredictionPoints=this._numOfPredictionPoints)}get renderer(){return this._renderer}set pointerRawUpdate(r){let i=this._pointerRawUpdate;this._pointerRawUpdate=r,this.requestUpdate("pointerRawUpdate",i),i!==r&&this._canvas&&(r?(this._canvas.onpointermove=null,this._canvas.onpointerrawupdate=this._onPointerMove.bind(this)):(this._canvas.onpointerrawupdate=null,this._canvas.onpointermove=this._onPointerMove.bind(this)))}get pointerRawUpdate(){return this._pointerRawUpdate}set currentLineColor(r){let i=this._currentLineColor;this._currentLineColor=r,this._renderer&&(this._renderer.currentLineColor=r),this.requestUpdate("currentLineColor",i)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(r){let i=this._currentLineStyle;this._currentLineStyle=r,this._renderer&&(this._renderer.currentLineStyle=r),this.requestUpdate("currentLineStyle",i)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(r){let i=this._currentLineWidth;this._currentLineWidth=r,this._renderer&&(this._renderer.currentLineWidth=r),this.requestUpdate("currentLineWidth",i)}get currentLineWidth(){return this._currentLineWidth}set drawCoalescedEvents(r){let i=this._drawCoalescedEvents;this._drawCoalescedEvents=r,this._renderer&&(this._renderer.drawCoalescedEvents=r),this.requestUpdate("drawCoalescedEvents",i)}get drawCoalescedEvents(){return this._drawCoalescedEvents}set drawPointsOnly(r){let i=this._drawPointsOnly;this._drawPointsOnly=r,this._renderer&&(this._renderer.drawPointsOnly=r),this.requestUpdate("drawPointsOnly",i)}get drawPointsOnly(){return this._drawPointsOnly}set drawPredictedEvents(r){let i=this._drawPredictedEvents;this._drawPredictedEvents=r,this._renderer&&(this._renderer.drawPredictedEvents=r),this.requestUpdate("drawPredictedEvents",i)}get drawPredictedEvents(){return this._drawPredictedEvents}set drawWithCustomizations(r){let i=this._drawWithCustomizations;this._drawWithCustomizations=r,this._renderer&&(this._renderer.drawWithCustomizations=r),this.requestUpdate("drawWithCustomizations",i)}get drawWithCustomizations(){return this._drawWithCustomizations}set drawWithPressure(r){let i=this._drawWithPressure;this._drawWithPressure=r,this._renderer&&(this._renderer.drawWithPressure=r),this.requestUpdate("drawWithPressure",i)}get drawWithPressure(){return this._drawWithPressure}set highlightPredictedEvents(r){let i=this._highlightPredictedEvents;this._highlightPredictedEvents=r,this._renderer&&(this._renderer.highlightPredictedEvents=r),this.requestUpdate("highlightPredictedEvents",i)}get highlightPredictedEvents(){return this._highlightPredictedEvents}set predictionType(r){let i=this._predictionType;this._predictionType=r,this._renderer&&(this._renderer.predictionType=r),this.requestUpdate("predictionType",i)}get predictionType(){return this._predictionType}set numOfPredictionPoints(r){let i=this._numOfPredictionPoints;this._numOfPredictionPoints=r,this._renderer&&(this._renderer.numOfPredictionPoints=r),this.requestUpdate("numOfPredictionPoints",i)}get numOfPredictionPoints(){return this._numOfPredictionPoints}set paths(r){let i=this._paths;this._paths=r;let n=new CustomEvent("paths-changed",{detail:{paths:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("paths",i)}get paths(){return this._paths}firstUpdated(){const r=window.getComputedStyle(this);this._canvas=this.shadowRoot.querySelector("#canvas"),this._predictionCanvas=this.shadowRoot.querySelector("#prediction-canvas"),this._canvas.width=this._predictionCanvas.width=parseInt(r.width,10),this._canvas.height=this._predictionCanvas.height=parseInt(r.height,10),this._canvas.style.left=this._predictionCanvas.style.left=r.left+"px",this._canvas.style.top=this._predictionCanvas.style.top=r.top+"px",this._canvas.onpointerdown=this._onPointerDown.bind(this),this._pointerRawUpdate?this._canvas.onpointerrawupdate=this._onPointerMove.bind(this):this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this),window.addEventListener("resize",this._onResize)}undoPath(){this._renderer.undoPath(),this.paths=this._renderer.paths,this._draw()}redoPath(){this._renderer.redoPath(),this.paths=this._renderer.paths,this._draw()}deleteAllPaths(){this._renderer.deleteAllPaths(),this.paths=this._renderer.paths,this._draw()}_getPrediction(r){let i=[];if(this._predictionType==="browser"&&r.getPredictedEvents){for(let n of r.getPredictedEvents())i.push(this._getPoint(n));return i}else return this._getCustomPrediction(r)}_getCustomPrediction(r){let i=r.getCoalescedEvents();if(i.length<1)return[];let n=[],s=this._getPoint(this._app.currentEvent),c=0,d=0,h=0,a=0,l=0,o=0,u=0,p=0,f=null;for(let g of i){if(f=this._getPoint(g),f.timeStamp===s.timeStamp)break;let b=f.timeStamp-s.timeStamp;h=f.x-s.x,a=f.y-s.y,l=h/b,o=a/b,u=l/b,p=o/b,h<5&&a<5?c=0:h<10&&a<10?c=1:h<20&&a<20?c=8:c=10;let E=this._correctedPrediction,w=this._kalmanFilter.predict({previousCorrected:E});this._correctedPrediction=this._kalmanFilter.correct({predicted:w,observation:[c,b,l,o,u,p]}),E=this._correctedPrediction,s=f}c=Math.ceil(this._correctedPrediction.mean[0][0]),d=this._correctedPrediction.mean[1][0],l=this._correctedPrediction.mean[2][0],o=this._correctedPrediction.mean[3][0],u=this._correctedPrediction.mean[4][0],p=this._correctedPrediction.mean[5][0];for(let g=1;g<=c;g++){let b={type:r.type,timeStamp:r.timeStamp+d*g,x:f.x+l*d*g,y:f.y+o*d*g,pressure:r.pressure,lineColor:this._currentLineColor,lineStyle:this._currentLineStyle,lineWidth:this._currentLineWidth};n.push(b)}return n}_resetPrediction(){this._kalmanFilter=new Cc.KalmanFilter({observation:this._kalmanFilterDataSize}),this._correctedPrediction=null}_draw(){this._renderer.render()}_getPoint(r){const i=this._canvas.getBoundingClientRect();return{timeStamp:r.timeStamp,type:r.type,x:r.clientX-i.left,y:r.clientY-i.top,pressure:r.pressure,preferredColor:this._currentPreferredColor,preferredStyle:this._currentPreferredStyle,preferredWidth:this._currentPreferredWidth,lineColor:this._currentLineColor,lineStyle:this._currentLineStyle,lineWidth:this._currentLineWidth}}render(){return ne`
    <canvas id="canvas"></canvas>
    <canvas id="prediction-canvas"></canvas>`}}ft(zs,"styles",Le`
    :host {
    }

    #canvas {
      position: absolute;
      user-select: none;
      touch-action: none;
      z-index: 1;
    }

    #prediction-canvas {
      position: absolute;
      pointer-events: none;
      user-select: none;
      touch-action: none;
      z-index: 2;
    }
  `);class yd{set paths(t){this._paths=t,this.updateProperty("paths",t)}get paths(){return this._paths}set currentLineColor(t){this._currentLineColor=t,this.updateProperty("currentLineColor",t)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(t){this._currentLineStyle=t,this.updateProperty("currentLineStyle",t)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(t){this._currentLineWidth=t,this.updateProperty("currentLineWidth",t)}get currentLineWidth(){return this._currentLineWidth}set drawCoalescedEvents(t){this._drawCoalescedEvents=t,this.updateProperty("drawCoalescedEvents",t)}get drawCoalescedEvents(){return this._drawCoalescedEvents}set drawPointsOnly(t){this._drawPointsOnly=t,this.updateProperty("drawPointsOnly",t)}get drawPointsOnly(){return this._drawPointsOnly}set drawPredictedEvents(t){this._drawPredictedEvents=t,this.updateProperty("drawPredictedEvents",t)}get drawPredictedEvents(){return this._drawPredictedEvents}set drawWithCustomizations(t){this._drawWithCustomizations=t,this.updateProperty("drawWithCustomizations",t)}get drawWithCustomizations(){return this._drawWithCustomizations}set drawWithPressure(t){this._drawWithPressure=t,this.updateProperty("drawWithPressure",t)}get drawWithPressure(){return this._drawWithPressure}set highlightPredictedEvents(t){this._highlightPredictedEvents=t,this.updateProperty("highlightPredictedEvents",t)}get highlightPredictedEvents(){return this._highlightPredictedEvents}set predictionType(t){this._predictionType=t,this.updateProperty("predictionType",t)}get predictionType(){return this._predictionType}set numOfPredictionPoints(t){this._numOfPredictionPoints=t,this.updateProperty("numOfPredictionPoints",t)}get numOfPredictionPoints(){return this._numOfPredictionPoints}constructor(t,r){this._canvas=t,this._predictionCanvas=r,this._paths=[],this._currentPath=null,this._currentLineColor="#000000",this._currentLineStyle="INK",this._currentLineWidth=1,this._drawCoalescedEvents=!1,this._drawPointsOnly=!1,this._drawPredictedEvents=!1,this._drawWithCustomizations=!1,this._drawWithPressure=!1,this._highlightPredictedEvents=!1,this._predictionType="custom",this._numOfPredictionPoints=1}getCurrentLineColor(t){return t.preferredColor&&this._drawWithCustomizations?t.preferredColor:t.lineColor}getCurrentLineStyle(t){return t.preferredStyle&&this._drawWithCustomizations?t.preferredStyle:t.lineStyle}getCurrentLineWidth(t){return t.preferredWidth&&this._drawWithCustomizations?t.preferredWidth:t.lineWidth}updateProperty(t,r){console.log("renderer property",t,"set to",r)}resize(t,r){this._canvas.width=this._predictionCanvas.width=t,this._canvas.height=this._predictionCanvas.height=r}undoPath(){this.clearCanvas(),this.clearPredictionCanvas();let t=!1;for(let r=this._paths.length-1;r>=0;r--)this._paths[r].rendered=!1,!t&&this._paths[r].display&&(this._paths[r].display=!1,t=!0)}redoPath(){this.clearCanvas(),this.clearPredictionCanvas();let t=!1;for(let r=0;r<this._paths.length;r++)this._paths[r].rendered=!1,!t&&!this._paths[r].display&&(this._paths[r].display=!0,t=!0)}beginPath(t){this._currentPath||(this._currentPath=new hg),this._currentPath.points.push(t);let r=-1;for(let i=this._paths.length-1;i>=0;i--)this._paths[i].display||(r=i);r>=0&&this._paths.splice(r,this._paths.length)}addToPath(t,r){!t||!this._currentPath||(this._currentPath.points.push(...t),this._currentPath.predictedPoints=r)}endPath(t){this._drawPredictedEvents&&this.clearPredictionCanvas(),this._currentPath&&(this._currentPath.predictedPoints=[],this._currentPath.display=!0,this._currentPath.rendered=!0,this._paths.push(this._currentPath)),this._currentPath=null}deleteAllPaths(){this.clearCanvas(),this.clearPredictionCanvas(),this._paths=[],this._currentPath=null,this._points=[],this._predictedPoints=[]}clearCanvas(){console.error("base implementation not provided, must overwrite")}clearPredictionCanvas(){console.error("base implementation not provided, must overwrite")}render(){console.error("base implementation not provided, must overwrite")}}class hg{set points(t){this._points=t}get points(){return this._points}set predictedPoints(t){this._predictedPoints=t}get predictedPoints(){return this._predictedPoints}set display(t){this._display=t}get display(){return this._display}set rendered(t){this._rendered=t}get rendered(){return this._rendered}constructor(){this._points=[],this._predictedPoints=[],this._display=!1,this._rendered=!1}}class pg extends yd{constructor(t,r,i){if(super(t,r),this._context=this._canvas.getContext("2d",{desynchronized:i}),this._predictionContext=this._predictionCanvas.getContext("2d",{desynchronized:i}),!this._context||!this._predictionContext){console.error("Your browser doesn't support canvas, this demo won't work");return}console.log("Canvas2D loaded, desynchronized:",i)}clearCanvas(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}clearPredictionCanvas(){this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height)}render(){if(this._paths.forEach(t=>{t.display&&!t.rendered&&(this._drawPointsOnly?this._drawPoints(this._context,t.points):this.getCurrentLineStyle(t.points[0])==="highlighter"?this._drawLine(this._context,t.points):this._drawStroke(this._context,t.points),t.rendered=!0)}),this._currentPath&&this._currentPath.points.length>0&&!this._currentPath.points[this._currentPath.points.length-1].rendered){let t=[...this._currentPath.points];for(let r=t.length-1;r>=0;r--)if(t[r].rendered){t.splice(0,r);break}this._drawPointsOnly?this._drawPoints(this._context,t):this.getCurrentLineStyle(t[0])==="highlighter"?this._drawLine(this._context,t):this._drawStroke(this._context,t),this._drawPredictedEvents&&(this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height),this._currentPath.predictedPoints.length>0&&(this._drawPointsOnly?this._strokePredictedPoints(this._predictionContext,this._currentPath.predictedPoints):this.getCurrentLineStyle(this._currentPath.points[0])!=="brush"&&this.getCurrentLineStyle(this._currentPath.points[0])!=="highlighter"&&this._strokePredictedEvents(this._predictionContext,this._currentPath.predictedPoints))),this._currentPath.points.forEach(r=>{r.rendered=!0}),this._currentPath.predictedPoints=[]}}_hexToRgbColor(t){return{r:"0x"+t[1]+t[2]|0,g:"0x"+t[3]+t[4]|0,b:"0x"+t[5]+t[6]|0}}_drawStroke(t,r){let i=this.getCurrentLineColor(r[0]),n=this.getCurrentLineStyle(r[0]),s=this.getCurrentLineWidth(r[0]),c,d,h;for(r[0].type==="pointerdown"&&(c=this.getCurrentLineWidth(r[0]),d=this.getCurrentLineWidth(r[0]),t.fillStyle=i,t.strokeStyle="none"),h=0;h<r.length-1;h++){this._drawWithPressure&&r[h].type!=="pointerdown"?(c=this.getCurrentLineWidth(r[h])*r[h].pressure*2,d=this.getCurrentLineWidth(r[h])*r[h+1].pressure*2):c=d=this.getCurrentLineWidth(r[h]);let a=this._createPath(r[h].x,r[h].y,r[h+1].x,r[h+1].y,c,d);switch(n){case"brush":t.filter="blur("+s+"px)";break;default:t.filter="none";break}t.fill(a)}}_drawLine(t,r){if(r.length<2)return;let i=this.getCurrentLineColor(r[0]),n=this._hexToRgbColor(i);r[0].type==="pointerdown"&&(t.beginPath(),t.lineCap="round",t.lineJoin="round",t.fillStyle="none",t.strokeStyle="rgba("+n.r+","+n.g+","+n.b+",0.01)",t.filter="none"),t.lineWidth=this.getCurrentLineWidth(r[0]),t.moveTo(r[0].x,r[0].y),t.lineTo(r[1].x,r[1].y);let s;for(s=1;s<r.length-2;s++){const c=(r[s].x+r[s+1].x)/2,d=(r[s].y+r[s+1].y)/2;t.quadraticCurveTo(r[s].x,r[s].y,Math.round(c),Math.round(d))}r.length>2&&t.quadraticCurveTo(r[s].x,r[s].y,r[s+1].x,r[s+1].y),t.stroke()}_drawPoints(t,r){for(let i=0;i<r.length;i++)t.beginPath(),t.fillStyle=this.getCurrentLineColor(r[i]),r[i].coalesced?(t.arc(r[i].x,r[i].y,this.getCurrentLineWidth(r[i])/2,0,Math.PI*2,!0),t.stroke()):(t.arc(r[i].x,r[i].y,this.getCurrentLineWidth(r[i]),0,Math.PI*2,!0),t.fill())}_createPath(t,r,i,n,s,c){const d=i-t,h=n-r,a=Math.atan2(h,d)+Math.PI/2,l=new Path2D;return l.arc(t,r,s/2,a,a+Math.PI,!1),l.arc(i,n,c/2,a+Math.PI,a,!1),l.closePath(),l}_strokePredictedEvents(t,r,i){if(r.length>0&&this._currentPath.points.length>0){let n=this._currentPath.points[this._currentPath.points.length-1],s,c;this._drawWithPressure?s=c=this.getCurrentLineWidth(n)*n.pressure*2:s=c=this.getCurrentLineWidth(n);let d=this._createPath(n.x,n.y,r[0].x,r[0].y,s,c);this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.fill(d);let h;for(h=0;h<r.length-1;h++){let a=this._createPath(r[h].x,r[h].y,r[h+1].x,r[h+1].y,s,c);t.fill(a)}}}_strokePredictedPoints(t,r){let i,n=this._currentPath.points[this._currentPath.points.length-1];for(i=0;i<r.length;i++)t.beginPath(),this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.arc(r[i].x,r[i].y,3,0,Math.PI*2,!0),t.fill()}}class fg extends zs{firstUpdated(){super.firstUpdated(),this.renderer=new pg(this.canvas,this.predictionCanvas,this.desynchronized)}constructor(){super()}}customElements.define("js-canvas",fg);var _d={exports:{}};const gg={},mg=Object.freeze(Object.defineProperty({__proto__:null,default:gg},Symbol.toStringTag,{value:"Module"})),es=Rh(mg);(function(e,t){var r=(()=>{var i=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(i=i||__filename),function(n){n=n||{};var s;s||(s=typeof n<"u"?n:{});var c=Object.assign,d,h;s.ready=new Promise(function(v,m){d=v,h=m}),function(v){var m={};v.loadCmdsTypedArray=function(I){for(var O=0,D=0;D<I.length;D++)O+=I[D].length;if(m[O])var U=m[O];else U=new Float32Array(O),m[O]=U;var F=0;for(D=0;D<I.length;D++)for(var rt=0;rt<I[D].length;rt++){var pt=I[D][rt];typeof pt=="string"&&(pt=v.SkBits2FloatUnsigned(parseInt(pt))),U[F]=pt,F++}return I=v._malloc(U.length*U.BYTES_PER_ELEMENT),v.HEAPF32.set(U,I/U.BYTES_PER_ELEMENT),[I,O]},v.FromCmds=function(I){I=v.loadCmdsTypedArray(I);var O=v._FromCmds(I[0],I[1]);return v._free(I[0]),O};var y,S,C,T,R;v.cubicYFromX=function(I,O,D,U,F){return y&&S===I&&C===O&&T===D&&R===U||(y&&y.delete(),y=new v._SkCubicMap([I,O],[D,U]),S=I,C=O,T=D,R=U),y.computeYFromX(F)},v.cubicPtFromT=function(I,O,D,U,F){return y&&S===I&&C===O&&T===D&&R===U||(y&&y.delete(),y=new v._SkCubicMap([I,O],[D,U]),S=I,C=O,T=D,R=U),y.computePtFromT(F)}}(s),function(v){v.onRuntimeInitialized=function(){v.SkPath.prototype.addPath=function(){var m=arguments[0];if(arguments.length===1)this._addPath(m,1,0,0,0,1,0,0,0,1);else if(arguments.length===2){var y=arguments[1];this._addPath(m,y.a,y.c,y.e,y.b,y.d,y.f,0,0,1)}else if(arguments.length===7)y=arguments,this._addPath(m,y[1],y[3],y[5],y[2],y[4],y[6],0,0,1);else if(arguments.length===10)y=arguments,this._addPath(m,y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9]);else return console.Ma("addPath expected to take 1, 2, 7, or 10 args. Got "+arguments.length),null;return this},v.SkPath.prototype.arc=function(m,y,S,C,T,R){return this._arc(m,y,S,C,T,!!R),this},v.SkPath.prototype.arcTo=function(m,y,S,C,T){return this._arcTo(m,y,S,C,T),this},v.SkPath.prototype.bezierCurveTo=function(m,y,S,C,T,R){return this._cubicTo(m,y,S,C,T,R),this},v.SkPath.prototype.close=function(){return this._close(),this},v.SkPath.prototype.closePath=function(){return this._close(),this},v.SkPath.prototype.conicTo=function(m,y,S,C,T){return this._conicTo(m,y,S,C,T),this},v.SkPath.prototype.cubicTo=function(m,y,S,C,T,R){return this._cubicTo(m,y,S,C,T,R),this},v.SkPath.prototype.dash=function(m,y,S){return this._dash(m,y,S)?this:null},v.SkPath.prototype.ellipse=function(m,y,S,C,T,R,I,O){return this._ellipse(m,y,S,C,T,R,I,!!O),this},v.SkPath.prototype.lineTo=function(m,y){return this._lineTo(m,y),this},v.SkPath.prototype.moveTo=function(m,y){return this._moveTo(m,y),this},v.SkPath.prototype.op=function(m,y){return this._op(m,y)?this:null},v.SkPath.prototype.quadraticCurveTo=function(m,y,S,C){return this._quadTo(m,y,S,C),this},v.SkPath.prototype.quadTo=function(m,y,S,C){return this._quadTo(m,y,S,C),this},v.SkPath.prototype.rect=function(m,y,S,C){return this._rect(m,y,S,C),this},v.SkPath.prototype.simplify=function(){return this._simplify()?this:null},v.SkPath.prototype.stroke=function(m){return m=m||{},m.width=m.width||1,m.miter_limit=m.miter_limit||4,m.cap=m.cap||v.StrokeCap.BUTT,m.join=m.join||v.StrokeJoin.MITER,this._stroke(m)?this:null},v.SkPath.prototype.transform=function(){if(arguments.length===1)this._transform(arguments[0]);else if(arguments.length===9){var m=arguments;this._transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8])}else return console.Ma("transform expected to take 1 or 9 arguments. Got "+arguments.length),null;return this},v.SkPath.prototype.trim=function(m,y,S){return this._trim(m,y,!!S)?this:null}}}(s);var a=c({},s),l=typeof window=="object",o=typeof importScripts=="function",u="",p,f,g,b,E,w;typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"?(u=o?es.dirname(u)+"/":__dirname+"/",w=()=>{E||(b=es,E=es)},p=function(v,m){return w(),v=E.normalize(v),b.readFileSync(v,m?null:"utf8")},g=v=>(v=p(v,!0),v.buffer||(v=new Uint8Array(v)),v),f=(v,m,y)=>{w(),v=E.normalize(v),b.readFile(v,function(S,C){S?y(S):m(C.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(v){throw v}),process.on("unhandledRejection",function(v){throw v}),s.inspect=function(){return"[Emscripten Module object]"}):(l||o)&&(o?u=self.location.href:typeof document<"u"&&document.currentScript&&(u=document.currentScript.src),i&&(u=i),u.indexOf("blob:")!==0?u=u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1):u="",p=v=>{var m=new XMLHttpRequest;return m.open("GET",v,!1),m.send(null),m.responseText},o&&(g=v=>{var m=new XMLHttpRequest;return m.open("GET",v,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),f=(v,m,y)=>{var S=new XMLHttpRequest;S.open("GET",v,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?m(S.response):y()},S.onerror=y,S.send(null)});var A=s.print||console.log.bind(console),$=s.printErr||console.warn.bind(console);c(s,a),a=null;var P;s.wasmBinary&&(P=s.wasmBinary),s.noExitRuntime,typeof WebAssembly!="object"&&mr("no native wasm support detected");var L,M=!1,z=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function q(v,m,y){var S=m+y;for(y=m;v[y]&&!(y>=S);)++y;if(16<y-m&&v.subarray&&z)return z.decode(v.subarray(m,y));for(S="";m<y;){var C=v[m++];if(C&128){var T=v[m++]&63;if((C&224)==192)S+=String.fromCharCode((C&31)<<6|T);else{var R=v[m++]&63;C=(C&240)==224?(C&15)<<12|T<<6|R:(C&7)<<18|T<<12|R<<6|v[m++]&63,65536>C?S+=String.fromCharCode(C):(C-=65536,S+=String.fromCharCode(55296|C>>10,56320|C&1023))}}else S+=String.fromCharCode(C)}return S}function N(v,m,y){var S=H;if(0<y){y=m+y-1;for(var C=0;C<v.length;++C){var T=v.charCodeAt(C);if(55296<=T&&57343>=T){var R=v.charCodeAt(++C);T=65536+((T&1023)<<10)|R&1023}if(127>=T){if(m>=y)break;S[m++]=T}else{if(2047>=T){if(m+1>=y)break;S[m++]=192|T>>6}else{if(65535>=T){if(m+2>=y)break;S[m++]=224|T>>12}else{if(m+3>=y)break;S[m++]=240|T>>18,S[m++]=128|T>>12&63}S[m++]=128|T>>6&63}S[m++]=128|T&63}}S[m]=0}}var W=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function B(v,m){for(var y=v>>1,S=y+m/2;!(y>=S)&&Tt[y];)++y;if(y<<=1,32<y-v&&W)return W.decode(H.subarray(v,y));for(y="",S=0;!(S>=m/2);++S){var C=bt[v+2*S>>1];if(C==0)break;y+=String.fromCharCode(C)}return y}function V(v,m,y){if(y===void 0&&(y=2147483647),2>y)return 0;y-=2;var S=m;y=y<2*v.length?y/2:v.length;for(var C=0;C<y;++C)bt[m>>1]=v.charCodeAt(C),m+=2;return bt[m>>1]=0,m-S}function Q(v){return 2*v.length}function J(v,m){for(var y=0,S="";!(y>=m/4);){var C=yt[v+4*y>>2];if(C==0)break;++y,65536<=C?(C-=65536,S+=String.fromCharCode(55296|C>>10,56320|C&1023)):S+=String.fromCharCode(C)}return S}function ut(v,m,y){if(y===void 0&&(y=2147483647),4>y)return 0;var S=m;y=S+y-4;for(var C=0;C<v.length;++C){var T=v.charCodeAt(C);if(55296<=T&&57343>=T){var R=v.charCodeAt(++C);T=65536+((T&1023)<<10)|R&1023}if(yt[m>>2]=T,m+=4,m+4>y)break}return yt[m>>2]=0,m-S}function st(v){for(var m=0,y=0;y<v.length;++y){var S=v.charCodeAt(y);55296<=S&&57343>=S&&++y,m+=4}return m}var ht,G,H,bt,Tt,yt,Ct,Bt,Me;function he(){var v=L.buffer;ht=v,s.HEAP8=G=new Int8Array(v),s.HEAP16=bt=new Int16Array(v),s.HEAP32=yt=new Int32Array(v),s.HEAPU8=H=new Uint8Array(v),s.HEAPU16=Tt=new Uint16Array(v),s.HEAPU32=Ct=new Uint32Array(v),s.HEAPF32=Bt=new Float32Array(v),s.HEAPF64=Me=new Float64Array(v)}var Kt,re=[],ze=[],fr=[];function Xe(){var v=s.preRun.shift();re.unshift(v)}var Ne=0,gr=null;s.preloadedImages={},s.preloadedAudios={};function mr(v){throw s.onAbort&&s.onAbort(v),v="Aborted("+v+")",$(v),M=!0,v=new WebAssembly.RuntimeError(v+". Build with -s ASSERTIONS=1 for more info."),h(v),v}function Ns(){return Gt.startsWith("data:application/octet-stream;base64,")}var Gt;if(Gt="pathkit.wasm",!Ns()){var Ds=Gt;Gt=s.locateFile?s.locateFile(Ds,u):u+Ds}function Us(){var v=Gt;try{if(v==Gt&&P)return new Uint8Array(P);if(g)return g(v);throw"both async and sync fetching of the wasm failed"}catch(m){mr(m)}}function Id(){if(!P&&(l||o)){if(typeof fetch=="function"&&!Gt.startsWith("file://"))return fetch(Gt,{credentials:"same-origin"}).then(function(v){if(!v.ok)throw"failed to load wasm binary file at '"+Gt+"'";return v.arrayBuffer()}).catch(function(){return Us()});if(f)return new Promise(function(v,m){f(Gt,function(y){v(new Uint8Array(y))},m)})}return Promise.resolve().then(function(){return Us()})}function Ki(v){for(;0<v.length;){var m=v.shift();if(typeof m=="function")m(s);else{var y=m.Wa;typeof y=="number"?m.xa===void 0?Kt.get(y)():Kt.get(y)(m.xa):y(m.xa===void 0?null:m.xa)}}}var Kr={};function Gi(v){for(;v.length;){var m=v.pop();v.pop()(m)}}function Ke(v){return this.fromWireType(Ct[v>>2])}var Ge={},De={},Gr={};function qs(v){if(v===void 0)return"_unknown";v=v.replace(/[^a-zA-Z0-9_]/g,"$");var m=v.charCodeAt(0);return 48<=m&&57>=m?"_"+v:v}function Yi(v,m){return v=qs(v),function(){return m.apply(this,arguments)}}function Zi(v){var m=Error,y=Yi(v,function(S){this.name=v,this.message=S,S=Error(S).stack,S!==void 0&&(this.stack=this.toString()+`
`+S.replace(/^Error(:[^\n]*)?\n/,""))});return y.prototype=Object.create(m.prototype),y.prototype.constructor=y,y.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},y}var Ws=void 0;function Yr(v){throw new Ws(v)}function pe(v,m,y){function S(I){I=y(I),I.length!==v.length&&Yr("Mismatched type converter count");for(var O=0;O<v.length;++O)ie(v[O],I[O])}v.forEach(function(I){Gr[I]=m});var C=Array(m.length),T=[],R=0;m.forEach(function(I,O){De.hasOwnProperty(I)?C[O]=De[I]:(T.push(I),Ge.hasOwnProperty(I)||(Ge[I]=[]),Ge[I].push(function(){C[O]=De[I],++R,R===T.length&&S(C)}))}),T.length===0&&S(C)}var Zr={};function Qr(v){switch(v){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+v)}}var Fs=void 0;function kt(v){for(var m="";H[v];)m+=Fs[H[v++]];return m}var Ye=void 0;function tt(v){throw new Ye(v)}function ie(v,m,y={}){if(!("argPackAdvance"in m))throw new TypeError("registerType registeredInstance requires argPackAdvance");var S=m.name;if(v||tt('type "'+S+'" must have a positive integer typeid pointer'),De.hasOwnProperty(v)){if(y.Qa)return;tt("Cannot register type '"+S+"' twice")}De[v]=m,delete Gr[v],Ge.hasOwnProperty(v)&&(m=Ge[v],delete Ge[v],m.forEach(function(C){C()}))}function Qi(v){tt(v.ea.ha.fa.name+" instance already deleted")}var Ji=!1;function Vs(){}function Bs(v){--v.count.value,v.count.value===0&&(v.ka?v.ma.la(v.ka):v.ha.fa.la(v.ga))}function vr(v){return typeof FinalizationGroup>"u"?(vr=m=>m,v):(Ji=new FinalizationGroup(function(m){for(var y=m.next();!y.done;y=m.next())y=y.value,y.ga?Bs(y):console.warn("object already deleted: "+y.ga)}),vr=m=>(Ji.register(m,m.ea,m.ea),m),Vs=m=>{Ji.unregister(m.ea)},vr(v))}var br=void 0,yr=[];function tn(){for(;yr.length;){var v=yr.pop();v.ea.pa=!1,v.delete()}}function Ae(){}var Hs={};function js(v,m,y){if(v[m].ia===void 0){var S=v[m];v[m]=function(){return v[m].ia.hasOwnProperty(arguments.length)||tt("Function '"+y+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+v[m].ia+")!"),v[m].ia[arguments.length].apply(this,arguments)},v[m].ia=[],v[m].ia[S.ua]=S}}function en(v,m,y){s.hasOwnProperty(v)?((y===void 0||s[v].ia!==void 0&&s[v].ia[y]!==void 0)&&tt("Cannot register public name '"+v+"' twice"),js(s,v,v),s.hasOwnProperty(y)&&tt("Cannot register multiple overloads of a function with the same number of arguments ("+y+")!"),s[v].ia[y]=m):(s[v]=m,y!==void 0&&(s[v].Xa=y))}function Ld(v,m,y,S,C,T,R,I){this.name=v,this.constructor=m,this.qa=y,this.la=S,this.na=C,this.Oa=T,this.ta=R,this.La=I,this.Ta=[]}function rn(v,m,y){for(;m!==y;)m.ta||tt("Expected null or instance of "+y.name+", got an instance of "+m.name),v=m.ta(v),m=m.na;return v}function Rd(v,m){return m===null?(this.Ba&&tt("null is not a valid "+this.name),0):(m.ea||tt('Cannot pass "'+ln(m)+'" as a '+this.name),m.ea.ga||tt("Cannot pass deleted object as a pointer of type "+this.name),rn(m.ea.ga,m.ea.ha.fa,this.fa))}function Od(v,m){if(m===null){if(this.Ba&&tt("null is not a valid "+this.name),this.wa){var y=this.sa();return v!==null&&v.push(this.la,y),y}return 0}if(m.ea||tt('Cannot pass "'+ln(m)+'" as a '+this.name),m.ea.ga||tt("Cannot pass deleted object as a pointer of type "+this.name),!this.va&&m.ea.ha.va&&tt("Cannot convert argument of type "+(m.ea.ma?m.ea.ma.name:m.ea.ha.name)+" to parameter type "+this.name),y=rn(m.ea.ga,m.ea.ha.fa,this.fa),this.wa)switch(m.ea.ka===void 0&&tt("Passing raw pointer to smart pointer is illegal"),this.Va){case 0:m.ea.ma===this?y=m.ea.ka:tt("Cannot convert argument of type "+(m.ea.ma?m.ea.ma.name:m.ea.ha.name)+" to parameter type "+this.name);break;case 1:y=m.ea.ka;break;case 2:if(m.ea.ma===this)y=m.ea.ka;else{var S=m.clone();y=this.Ua(y,Ce(function(){S.delete()})),v!==null&&v.push(this.la,y)}break;default:tt("Unsupporting sharing policy")}return y}function Md(v,m){return m===null?(this.Ba&&tt("null is not a valid "+this.name),0):(m.ea||tt('Cannot pass "'+ln(m)+'" as a '+this.name),m.ea.ga||tt("Cannot pass deleted object as a pointer of type "+this.name),m.ea.ha.va&&tt("Cannot convert argument of type "+m.ea.ha.name+" to parameter type "+this.name),rn(m.ea.ga,m.ea.ha.fa,this.fa))}function Xs(v,m,y){return m===y?v:y.na===void 0?null:(v=Xs(v,m,y.na),v===null?null:y.La(v))}var _r={};function zd(v,m){for(m===void 0&&tt("ptr should not be undefined");v.na;)m=v.ta(m),v=v.na;return _r[m]}function Jr(v,m){return m.ha&&m.ga||Yr("makeClassHandle requires ptr and ptrType"),!!m.ma!=!!m.ka&&Yr("Both smartPtrType and smartPtr must be specified"),m.count={value:1},vr(Object.create(v,{ea:{value:m}}))}function fe(v,m,y,S){this.name=v,this.fa=m,this.Ba=y,this.va=S,this.wa=!1,this.la=this.Ua=this.sa=this.Ia=this.Va=this.Sa=void 0,m.na!==void 0?this.toWireType=Od:(this.toWireType=S?Rd:Md,this.ja=null)}function Ks(v,m,y){s.hasOwnProperty(v)||Yr("Replacing nonexistant public symbol"),s[v].ia!==void 0&&y!==void 0?s[v].ia[y]=m:(s[v]=m,s[v].ua=y)}function Nd(v,m){var y=[];return function(){y.length=arguments.length;for(var S=0;S<arguments.length;S++)y[S]=arguments[S];return v.includes("j")?(S=s["dynCall_"+v],S=y&&y.length?S.apply(null,[m].concat(y)):S.call(null,m)):S=Kt.get(m).apply(null,y),S}}function zt(v,m){v=kt(v);var y=v.includes("j")?Nd(v,m):Kt.get(m);return typeof y!="function"&&tt("unknown function pointer with signature "+v+": "+m),y}var Gs=void 0;function Ys(v){v=ra(v);var m=kt(v);return ge(v),m}function ti(v,m){function y(T){C[T]||De[T]||(Gr[T]?Gr[T].forEach(y):(S.push(T),C[T]=!0))}var S=[],C={};throw m.forEach(y),new Gs(v+": "+S.map(Ys).join([", "]))}function nn(v,m){for(var y=[],S=0;S<v;S++)y.push(yt[(m>>2)+S]);return y}function on(v,m,y,S,C){var T=m.length;2>T&&tt("argTypes array size mismatch! Must at least get return value and 'this' types!");var R=m[1]!==null&&y!==null,I=!1;for(y=1;y<m.length;++y)if(m[y]!==null&&m[y].ja===void 0){I=!0;break}var O=m[0].name!=="void",D=T-2,U=Array(D),F=[],rt=[];return function(){if(arguments.length!==D&&tt("function "+v+" called with "+arguments.length+" arguments, expected "+D+" args!"),rt.length=0,F.length=R?2:1,F[0]=C,R){var pt=m[1].toWireType(rt,this);F[1]=pt}for(var it=0;it<D;++it)U[it]=m[it+2].toWireType(rt,arguments[it]),F.push(U[it]);if(it=S.apply(null,F),I)Gi(rt);else for(var Nt=R?1:2;Nt<m.length;Nt++){var Dt=Nt===1?pt:U[Nt-2];m[Nt].ja!==null&&m[Nt].ja(Dt)}return pt=O?m[0].fromWireType(it):void 0,pt}}var sn=[],te=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Zs(v){4<v&&--te[v].Ca===0&&(te[v]=void 0,sn.push(v))}function an(v){return v||tt("Cannot use deleted val. handle = "+v),te[v].value}function Ce(v){switch(v){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var m=sn.length?sn.pop():te.length;return te[m]={Ca:1,value:v},m}}function Dd(v,m,y){switch(m){case 0:return function(S){return this.fromWireType((y?G:H)[S])};case 1:return function(S){return this.fromWireType((y?bt:Tt)[S>>1])};case 2:return function(S){return this.fromWireType((y?yt:Ct)[S>>2])};default:throw new TypeError("Unknown integer type: "+v)}}function ei(v,m){var y=De[v];return y===void 0&&tt(m+" has unknown type "+Ys(v)),y}function ln(v){if(v===null)return"null";var m=typeof v;return m==="object"||m==="array"||m==="function"?v.toString():""+v}function Ud(v,m){switch(m){case 2:return function(y){return this.fromWireType(Bt[y>>2])};case 3:return function(y){return this.fromWireType(Me[y>>3])};default:throw new TypeError("Unknown float type: "+v)}}function qd(v,m,y){switch(m){case 0:return y?function(S){return G[S]}:function(S){return H[S]};case 1:return y?function(S){return bt[S>>1]}:function(S){return Tt[S>>1]};case 2:return y?function(S){return yt[S>>2]}:function(S){return Ct[S>>2]};default:throw new TypeError("Unknown integer type: "+v)}}var Wd={};function cn(v){var m=Wd[v];return m===void 0?kt(v):m}var dn=[];function Qs(){function v(m){m.$$$embind_global$$$=m;var y=typeof $$$embind_global$$$=="object"&&m.$$$embind_global$$$===m;return y||delete m.$$$embind_global$$$,y}if(typeof globalThis=="object")return globalThis;if(typeof $$$embind_global$$$=="object"||(typeof Pn=="object"&&v(Pn)?$$$embind_global$$$=Pn:typeof self=="object"&&v(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function Fd(v){var m=dn.length;return dn.push(v),m}function Vd(v,m){for(var y=Array(v),S=0;S<v;++S)y[S]=ei(yt[(m>>2)+S],"parameter "+S);return y}var Js=[];function Bd(v){var m=Array(v+1);return function(y,S,C){m[0]=y;for(var T=0;T<v;++T){var R=ei(yt[(S>>2)+T],"parameter "+T);m[T+1]=R.readValueFromPointer(C),C+=R.argPackAdvance}return y=new(y.bind.apply(y,m)),Ce(y)}}var ta={},Hd=[null,[],[]];Ws=s.InternalError=Zi("InternalError");for(var ea=Array(256),ri=0;256>ri;++ri)ea[ri]=String.fromCharCode(ri);Fs=ea,Ye=s.BindingError=Zi("BindingError"),Ae.prototype.isAliasOf=function(v){if(!(this instanceof Ae&&v instanceof Ae))return!1;var m=this.ea.ha.fa,y=this.ea.ga,S=v.ea.ha.fa;for(v=v.ea.ga;m.na;)y=m.ta(y),m=m.na;for(;S.na;)v=S.ta(v),S=S.na;return m===S&&y===v},Ae.prototype.clone=function(){if(this.ea.ga||Qi(this),this.ea.ra)return this.ea.count.value+=1,this;var v=vr,m=Object,y=m.create,S=Object.getPrototypeOf(this),C=this.ea;return v=v(y.call(m,S,{ea:{value:{count:C.count,pa:C.pa,ra:C.ra,ga:C.ga,ha:C.ha,ka:C.ka,ma:C.ma}}})),v.ea.count.value+=1,v.ea.pa=!1,v},Ae.prototype.delete=function(){this.ea.ga||Qi(this),this.ea.pa&&!this.ea.ra&&tt("Object already scheduled for deletion"),Vs(this),Bs(this.ea),this.ea.ra||(this.ea.ka=void 0,this.ea.ga=void 0)},Ae.prototype.isDeleted=function(){return!this.ea.ga},Ae.prototype.deleteLater=function(){return this.ea.ga||Qi(this),this.ea.pa&&!this.ea.ra&&tt("Object already scheduled for deletion"),yr.push(this),yr.length===1&&br&&br(tn),this.ea.pa=!0,this},fe.prototype.Pa=function(v){return this.Ia&&(v=this.Ia(v)),v},fe.prototype.Ga=function(v){this.la&&this.la(v)},fe.prototype.argPackAdvance=8,fe.prototype.readValueFromPointer=Ke,fe.prototype.deleteObject=function(v){v!==null&&v.delete()},fe.prototype.fromWireType=function(v){function m(){return this.wa?Jr(this.fa.qa,{ha:this.Sa,ga:y,ma:this,ka:v}):Jr(this.fa.qa,{ha:this,ga:v})}var y=this.Pa(v);if(!y)return this.Ga(v),null;var S=zd(this.fa,y);if(S!==void 0)return S.ea.count.value===0?(S.ea.ga=y,S.ea.ka=v,S.clone()):(S=S.clone(),this.Ga(v),S);if(S=this.fa.Oa(y),S=Hs[S],!S)return m.call(this);S=this.va?S.Ja:S.pointerType;var C=Xs(y,this.fa,S.fa);return C===null?m.call(this):this.wa?Jr(S.fa.qa,{ha:S,ga:C,ma:this,ka:v}):Jr(S.fa.qa,{ha:S,ga:C})},s.getInheritedInstanceCount=function(){return Object.keys(_r).length},s.getLiveInheritedInstances=function(){var v=[],m;for(m in _r)_r.hasOwnProperty(m)&&v.push(_r[m]);return v},s.flushPendingDeletes=tn,s.setDelayFunction=function(v){br=v,yr.length&&br&&br(tn)},Gs=s.UnboundTypeError=Zi("UnboundTypeError"),s.count_emval_handles=function(){for(var v=0,m=5;m<te.length;++m)te[m]!==void 0&&++v;return v},s.get_first_emval=function(){for(var v=5;v<te.length;++v)if(te[v]!==void 0)return te[v];return null};var jd={r:function(v){var m=Kr[v];delete Kr[v];var y=m.elements,S=y.length,C=y.map(function(I){return I.Aa}).concat(y.map(function(I){return I.Ea})),T=m.sa,R=m.la;pe([v],C,function(I){return y.forEach(function(O,D){var U=I[D],F=O.ya,rt=O.za,pt=I[D+S],it=O.Da,Nt=O.Fa;O.read=Dt=>U.fromWireType(F(rt,Dt)),O.write=(Dt,Ue)=>{var Yt=[];it(Nt,Dt,pt.toWireType(Yt,Ue)),Gi(Yt)}}),[{name:m.name,fromWireType:function(O){for(var D=Array(S),U=0;U<S;++U)D[U]=y[U].read(O);return R(O),D},toWireType:function(O,D){if(S!==D.length)throw new TypeError("Incorrect number of tuple elements for "+m.name+": expected="+S+", actual="+D.length);for(var U=T(),F=0;F<S;++F)y[F].write(U,D[F]);return O!==null&&O.push(R,U),U},argPackAdvance:8,readValueFromPointer:Ke,ja:R}]})},u:function(v){var m=Zr[v];delete Zr[v];var y=m.sa,S=m.la,C=m.Ha,T=C.map(function(R){return R.Aa}).concat(C.map(function(R){return R.Ea}));pe([v],T,function(R){var I={};return C.forEach(function(O,D){var U=R[D],F=O.ya,rt=O.za,pt=R[D+C.length],it=O.Da,Nt=O.Fa;I[O.Na]={read:function(Dt){return U.fromWireType(F(rt,Dt))},write:function(Dt,Ue){var Yt=[];it(Nt,Dt,pt.toWireType(Yt,Ue)),Gi(Yt)}}}),[{name:m.name,fromWireType:function(O){var D={},U;for(U in I)D[U]=I[U].read(O);return S(O),D},toWireType:function(O,D){for(var U in I)if(!(U in D))throw new TypeError('Missing field:  "'+U+'"');var F=y();for(U in I)I[U].write(F,D[U]);return O!==null&&O.push(S,F),F},argPackAdvance:8,readValueFromPointer:Ke,ja:S}]})},z:function(){},F:function(v,m,y,S,C){var T=Qr(y);m=kt(m),ie(v,{name:m,fromWireType:function(R){return!!R},toWireType:function(R,I){return I?S:C},argPackAdvance:8,readValueFromPointer:function(R){if(y===1)var I=G;else if(y===2)I=bt;else if(y===4)I=yt;else throw new TypeError("Unknown boolean type size: "+m);return this.fromWireType(I[R>>T])},ja:null})},l:function(v,m,y,S,C,T,R,I,O,D,U,F,rt){U=kt(U),T=zt(C,T),I&&(I=zt(R,I)),D&&(D=zt(O,D)),rt=zt(F,rt);var pt=qs(U);en(pt,function(){ti("Cannot construct "+U+" due to unbound types",[S])}),pe([v,m,y],S?[S]:[],function(it){if(it=it[0],S)var Nt=it.fa,Dt=Nt.qa;else Dt=Ae.prototype;it=Yi(pt,function(){if(Object.getPrototypeOf(this)!==Ue)throw new Ye("Use 'new' to construct "+U);if(Yt.oa===void 0)throw new Ye(U+" has no accessible constructor");var na=Yt.oa[arguments.length];if(na===void 0)throw new Ye("Tried to invoke ctor of "+U+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(Yt.oa).toString()+") parameters instead!");return na.apply(this,arguments)});var Ue=Object.create(Dt,{constructor:{value:it}});it.prototype=Ue;var Yt=new Ld(U,it,Ue,rt,Nt,T,I,D);Nt=new fe(U,Yt,!0,!1),Dt=new fe(U+"*",Yt,!1,!1);var ia=new fe(U+" const*",Yt,!1,!0);return Hs[v]={pointerType:Dt,Ja:ia},Ks(pt,it),[Nt,Dt,ia]})},i:function(v,m,y,S,C,T){0<m||mr(void 0);var R=nn(m,y);C=zt(S,C),pe([],[v],function(I){I=I[0];var O="constructor "+I.name;if(I.fa.oa===void 0&&(I.fa.oa=[]),I.fa.oa[m-1]!==void 0)throw new Ye("Cannot register multiple constructors with identical number of parameters ("+(m-1)+") for class '"+I.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return I.fa.oa[m-1]=()=>{ti("Cannot construct "+I.name+" due to unbound types",R)},pe([],R,function(D){return D.splice(1,0,null),I.fa.oa[m-1]=on(O,D,null,C,T),[]}),[]})},a:function(v,m,y,S,C,T,R,I){var O=nn(y,S);m=kt(m),T=zt(C,T),pe([],[v],function(D){function U(){ti("Cannot call "+F+" due to unbound types",O)}D=D[0];var F=D.name+"."+m;m.startsWith("@@")&&(m=Symbol[m.substring(2)]),I&&D.fa.Ta.push(m);var rt=D.fa.qa,pt=rt[m];return pt===void 0||pt.ia===void 0&&pt.className!==D.name&&pt.ua===y-2?(U.ua=y-2,U.className=D.name,rt[m]=U):(js(rt,m,F),rt[m].ia[y-2]=U),pe([],O,function(it){return it=on(F,it,D,T,R),rt[m].ia===void 0?(it.ua=y-2,rt[m]=it):rt[m].ia[y-2]=it,[]}),[]})},I:function(v,m,y){v=kt(v),pe([],[m],function(S){return S=S[0],s[v]=S.fromWireType(y),[]})},E:function(v,m){m=kt(m),ie(v,{name:m,fromWireType:function(y){var S=an(y);return Zs(y),S},toWireType:function(y,S){return Ce(S)},argPackAdvance:8,readValueFromPointer:Ke,ja:null})},h:function(v,m,y,S){function C(){}y=Qr(y),m=kt(m),C.values={},ie(v,{name:m,constructor:C,fromWireType:function(T){return this.constructor.values[T]},toWireType:function(T,R){return R.value},argPackAdvance:8,readValueFromPointer:Dd(m,y,S),ja:null}),en(m,C)},k:function(v,m,y){var S=ei(v,"enum");m=kt(m),v=S.constructor,S=Object.create(S.constructor.prototype,{value:{value:y},constructor:{value:Yi(S.name+"_"+m,function(){})}}),v.values[y]=S,v[m]=S},q:function(v,m,y){y=Qr(y),m=kt(m),ie(v,{name:m,fromWireType:function(S){return S},toWireType:function(S,C){return C},argPackAdvance:8,readValueFromPointer:Ud(m,y),ja:null})},f:function(v,m,y,S,C,T){var R=nn(m,y);v=kt(v),C=zt(S,C),en(v,function(){ti("Cannot call "+v+" due to unbound types",R)},m-1),pe([],R,function(I){return I=[I[0],null].concat(I.slice(1)),Ks(v,on(v,I,null,C,T),m-1),[]})},e:function(v,m,y,S,C){m=kt(m),C===-1&&(C=4294967295),C=Qr(y);var T=I=>I;if(S===0){var R=32-8*y;T=I=>I<<R>>>R}y=m.includes("unsigned")?function(I,O){return O>>>0}:function(I,O){return O},ie(v,{name:m,fromWireType:T,toWireType:y,argPackAdvance:8,readValueFromPointer:qd(m,C,S!==0),ja:null})},b:function(v,m,y){function S(T){T>>=2;var R=Ct;return new C(ht,R[T+1],R[T])}var C=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][m];y=kt(y),ie(v,{name:y,fromWireType:S,argPackAdvance:8,readValueFromPointer:S},{Qa:!0})},p:function(v,m){m=kt(m);var y=m==="std::string";ie(v,{name:m,fromWireType:function(S){var C=Ct[S>>2];if(y)for(var T=S+4,R=0;R<=C;++R){var I=S+4+R;if(R==C||H[I]==0){if(T=T?q(H,T,I-T):"",O===void 0)var O=T;else O+=String.fromCharCode(0),O+=T;T=I+1}}else{for(O=Array(C),R=0;R<C;++R)O[R]=String.fromCharCode(H[S+4+R]);O=O.join("")}return ge(S),O},toWireType:function(S,C){C instanceof ArrayBuffer&&(C=new Uint8Array(C));var T=typeof C=="string";T||C instanceof Uint8Array||C instanceof Uint8ClampedArray||C instanceof Int8Array||tt("Cannot pass non-string to std::string");var R=(y&&T?()=>{for(var D=0,U=0;U<C.length;++U){var F=C.charCodeAt(U);55296<=F&&57343>=F&&(F=65536+((F&1023)<<10)|C.charCodeAt(++U)&1023),127>=F?++D:D=2047>=F?D+2:65535>=F?D+3:D+4}return D}:()=>C.length)(),I=un(4+R+1);if(Ct[I>>2]=R,y&&T)N(C,I+4,R+1);else if(T)for(T=0;T<R;++T){var O=C.charCodeAt(T);255<O&&(ge(I),tt("String has UTF-16 code units that do not fit in 8 bits")),H[I+4+T]=O}else for(T=0;T<R;++T)H[I+4+T]=C[T];return S!==null&&S.push(ge,I),I},argPackAdvance:8,readValueFromPointer:Ke,ja:function(S){ge(S)}})},m:function(v,m,y){if(y=kt(y),m===2)var S=B,C=V,T=Q,R=()=>Tt,I=1;else m===4&&(S=J,C=ut,T=st,R=()=>Ct,I=2);ie(v,{name:y,fromWireType:function(O){for(var D=Ct[O>>2],U=R(),F,rt=O+4,pt=0;pt<=D;++pt){var it=O+4+pt*m;(pt==D||U[it>>I]==0)&&(rt=S(rt,it-rt),F===void 0?F=rt:(F+=String.fromCharCode(0),F+=rt),rt=it+m)}return ge(O),F},toWireType:function(O,D){typeof D!="string"&&tt("Cannot pass non-string to C++ string type "+y);var U=T(D),F=un(4+U+m);return Ct[F>>2]=U>>I,C(D,F+4,U+m),O!==null&&O.push(ge,F),F},argPackAdvance:8,readValueFromPointer:Ke,ja:function(O){ge(O)}})},t:function(v,m,y,S,C,T){Kr[v]={name:kt(m),sa:zt(y,S),la:zt(C,T),elements:[]}},s:function(v,m,y,S,C,T,R,I,O){Kr[v].elements.push({Aa:m,ya:zt(y,S),za:C,Ea:T,Da:zt(R,I),Fa:O})},v:function(v,m,y,S,C,T){Zr[v]={name:kt(m),sa:zt(y,S),la:zt(C,T),Ha:[]}},j:function(v,m,y,S,C,T,R,I,O,D){Zr[v].Ha.push({Na:kt(m),Aa:y,ya:zt(S,C),za:T,Ea:R,Da:zt(I,O),Fa:D})},G:function(v,m){m=kt(m),ie(v,{Ra:!0,name:m,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},d:function(v,m,y,S){v=dn[v],m=an(m),y=cn(y),v(m,y,null,S)},J:Zs,x:function(v){return v===0?Ce(Qs()):(v=cn(v),Ce(Qs()[v]))},c:function(v,m){var y=Vd(v,m),S=y[0];m=S.name+"_$"+y.slice(1).map(function(R){return R.name}).join("_")+"$";var C=Js[m];if(C!==void 0)return C;var T=Array(v-1);return C=Fd((R,I,O,D)=>{for(var U=0,F=0;F<v-1;++F)T[F]=y[F+1].readValueFromPointer(D+U),U+=y[F+1].argPackAdvance;for(R=R[I].apply(R,T),F=0;F<v-1;++F)y[F+1].Ka&&y[F+1].Ka(T[F]);if(!S.Ra)return S.toWireType(O,R)}),Js[m]=C},n:function(v){4<v&&(te[v].Ca+=1)},w:function(v,m,y,S){v=an(v);var C=ta[m];return C||(C=Bd(m),ta[m]=C),C(v,y,S)},K:function(){return Ce([])},D:function(v){return Ce(cn(v))},H:function(v,m){return v=ei(v,"_emval_take_value"),v=v.readValueFromPointer(m),Ce(v)},g:function(){mr("")},B:function(v){var m=H.length;if(v>>>=0,2147483648<v)return!1;for(var y=1;4>=y;y*=2){var S=m*(1+.2/y);S=Math.min(S,v+100663296),S=Math.max(v,S),0<S%65536&&(S+=65536-S%65536);t:{try{L.grow(Math.min(2147483648,S)-ht.byteLength+65535>>>16),he();var C=1;break t}catch{}C=void 0}if(C)return!0}return!1},C:function(){return 0},y:function(){},o:function(v,m,y,S){for(var C=0,T=0;T<y;T++){var R=yt[m>>2],I=yt[m+4>>2];m+=8;for(var O=0;O<I;O++){var D=H[R+O],U=Hd[v];D===0||D===10?((v===1?A:$)(q(U,0)),U.length=0):U.push(D)}C+=I}return yt[S>>2]=C,0},A:function(){}};(function(){function v(C){s.asm=C.exports,L=s.asm.L,he(),Kt=s.asm._,ze.unshift(s.asm.M),Ne--,s.monitorRunDependencies&&s.monitorRunDependencies(Ne),Ne==0&&gr&&(C=gr,gr=null,C())}function m(C){v(C.instance)}function y(C){return Id().then(function(T){return WebAssembly.instantiate(T,S)}).then(function(T){return T}).then(C,function(T){$("failed to asynchronously prepare wasm: "+T),mr(T)})}var S={a:jd};if(Ne++,s.monitorRunDependencies&&s.monitorRunDependencies(Ne),s.instantiateWasm)try{return s.instantiateWasm(S,v)}catch(C){return $("Module.instantiateWasm callback failed with error: "+C),!1}return function(){return P||typeof WebAssembly.instantiateStreaming!="function"||Ns()||Gt.startsWith("file://")||typeof fetch!="function"?y(m):fetch(Gt,{credentials:"same-origin"}).then(function(C){return WebAssembly.instantiateStreaming(C,S).then(m,function(T){return $("wasm streaming compile failed: "+T),$("falling back to ArrayBuffer instantiation"),y(m)})})}().catch(h),{}})(),s.___wasm_call_ctors=function(){return(s.___wasm_call_ctors=s.asm.M).apply(null,arguments)},s.__Z6ToCmdsRK6SkPath=function(){return(s.__Z6ToCmdsRK6SkPath=s.asm.N).apply(null,arguments)},s.__Z8FromCmdsmi=function(){return(s.__Z8FromCmdsmi=s.asm.O).apply(null,arguments)},s.__Z7NewPathv=function(){return(s.__Z7NewPathv=s.asm.P).apply(null,arguments)},s.__Z8CopyPathRK6SkPath=function(){return(s.__Z8CopyPathRK6SkPath=s.asm.Q).apply(null,arguments)},s.__Z6EqualsRK6SkPathS1_=function(){return(s.__Z6EqualsRK6SkPathS1_=s.asm.R).apply(null,arguments)},s.__Z11ToSVGStringRK6SkPath=function(){return(s.__Z11ToSVGStringRK6SkPath=s.asm.S).apply(null,arguments)},s.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=function(){return(s.__Z13FromSVGStringNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE=s.asm.T).apply(null,arguments)},s.__Z13ApplySimplifyR6SkPath=function(){return(s.__Z13ApplySimplifyR6SkPath=s.asm.U).apply(null,arguments)},s.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=function(){return(s.__Z11ApplyPathOpR6SkPathRKS_8SkPathOp=s.asm.V).apply(null,arguments)},s.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=function(){return(s.__Z10MakeFromOpRK6SkPathS1_8SkPathOp=s.asm.W).apply(null,arguments)},s.__Z14ResolveBuilderR11SkOpBuilder=function(){return(s.__Z14ResolveBuilderR11SkOpBuilder=s.asm.X).apply(null,arguments)},s.__Z8ToCanvasRK6SkPathN10emscripten3valE=function(){return(s.__Z8ToCanvasRK6SkPathN10emscripten3valE=s.asm.Y).apply(null,arguments)},s.__Z8ToPath2DRK6SkPath=function(){return(s.__Z8ToPath2DRK6SkPath=s.asm.Z).apply(null,arguments)};var ge=s._free=function(){return(ge=s._free=s.asm.$).apply(null,arguments)},un=s._malloc=function(){return(un=s._malloc=s.asm.aa).apply(null,arguments)},ra=s.___getTypeName=function(){return(ra=s.___getTypeName=s.asm.ba).apply(null,arguments)};s.___embind_register_native_and_builtin_types=function(){return(s.___embind_register_native_and_builtin_types=s.asm.ca).apply(null,arguments)},s.dynCall_jiji=function(){return(s.dynCall_jiji=s.asm.da).apply(null,arguments)};var ii;gr=function v(){ii||hn(),ii||(gr=v)};function hn(){function v(){if(!ii&&(ii=!0,s.calledRun=!0,!M)){if(Ki(ze),d(s),s.onRuntimeInitialized&&s.onRuntimeInitialized(),s.postRun)for(typeof s.postRun=="function"&&(s.postRun=[s.postRun]);s.postRun.length;){var m=s.postRun.shift();fr.unshift(m)}Ki(fr)}}if(!(0<Ne)){if(s.preRun)for(typeof s.preRun=="function"&&(s.preRun=[s.preRun]);s.preRun.length;)Xe();Ki(re),0<Ne||(s.setStatus?(s.setStatus("Running..."),setTimeout(function(){setTimeout(function(){s.setStatus("")},1),v()},1)):v())}}if(s.run=hn,s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);0<s.preInit.length;)s.preInit.pop()();return hn(),n.ready}})();e.exports=r})(_d);const vg=_d.exports;let kc=null;class bg extends yd{constructor(t,r,i){if(super(t,r),this._context=this._canvas.getContext("2d",{desynchronized:i}),this._predictionContext=this._predictionCanvas.getContext("2d",{desynchronized:i}),!this._context||!this._predictionContext){console.error("Your browser doesn't support canvas, this demo won't work");return}this._context.lineCap=this._predictionContext.lineCap="round",this._context.lineJoin=this._predictionContext.lineJoin="round",this._context.shadowBlur=this._predictionContext.shadowBlur=2,vg({locateFile:n=>"./wasm/"+n}).then(n=>{kc=n,console.log("Canvas2D with PathKit loaded, desynchronized:",i)})}clearCanvas(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}clearPredictionCanvas(){this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height)}render(){if(this._paths.forEach(t=>{t.display&&!t.rendered&&(this._drawPointsOnly?this._drawPoints(this._context,t.points):this._drawStroke(this._context,t.points),t.rendered=!0)}),this._currentPath&&this._currentPath.points.length>0&&!this._currentPath.points[this._currentPath.points.length-1].rendered){let t=[...this._currentPath.points];for(let r=t.length-1;r>=0;r--)if(t[r].rendered){t.splice(0,r);break}this._drawPointsOnly?this._drawPoints(this._context,t):this._drawStroke(this._context,t),this._drawPredictedEvents&&(this._predictionContext.clearRect(0,0,this._predictionContext.canvas.width,this._predictionContext.canvas.height),this._currentPath.predictedPoints.length>0&&(this._drawPointsOnly?this._strokePredictedPoints(this._predictionContext,this._currentPath.predictedPoints):this.getCurrentLineStyle(this._currentPath.points[0])!=="brush"&&this.getCurrentLineStyle(this._currentPath.points[0])!=="highlighter"&&this._strokePredictedEvents(this._predictionContext,this._currentPath.predictedPoints))),this._currentPath.points.forEach(r=>{r.rendered=!0}),this._currentPath.predictedPoints=[]}}_hexToRgbColor(t){return{r:"0x"+t[1]+t[2]|0,g:"0x"+t[3]+t[4]|0,b:"0x"+t[5]+t[6]|0}}_drawStroke(t,r){let i=this.getCurrentLineColor(r[0]),n=this._hexToRgbColor(i),s=this.getCurrentLineStyle(r[0]),c=this.getCurrentLineWidth(r[0]),d;switch(r[0].type==="pointerdown"&&(t.lineCap=this._predictionContext.lineCap="round",t.lineJoin=this._predictionContext.lineJoin="round"),s){case"brush":t.filter="blur("+c+"px)",t.strokeStyle=i;break;case"highlighter":t.filter="none",t.strokeStyle="rgba("+n.r+","+n.g+","+n.b+",0.01)";break;default:t.filter="none",t.strokeStyle=i;break}for(d=0;d<r.length-1;d++){let h=this._createPath(r[d].x,r[d].y,r[d+1].x,r[d+1].y);this._drawWithPressure?t.lineWidth=this.getCurrentLineWidth(r[d])*r[d].pressure*2:t.lineWidth=this.getCurrentLineWidth(r[d]),t.stroke(h.toPath2D()),h.delete()}}_drawPoints(t,r){for(let i=0;i<r.length;i++)t.beginPath(),t.fillStyle=this.getCurrentLineColor(r[i]),r[i].coalesced?(t.arc(r[i].x,r[i].y,this.getCurrentLineWidth(r[i])/2,0,Math.PI*2,!0),t.stroke()):(t.arc(r[i].x,r[i].y,this.getCurrentLineWidth(r[i]),0,Math.PI*2,!0),t.fill())}_createPath(t,r,i,n){const s=kc.NewPath();return s.moveTo(t,r),s.lineTo(i,n),s}_strokePredictedEvents(t,r){if(r.length>0&&this._currentPath.points.length>0){let i=this._currentPath.points[this._currentPath.points.length-1];this._drawWithPressure?t.lineWidth=this.getCurrentLineWidth(i)*i.pressure*2:t.lineWidth=this.getCurrentLineWidth(i),t.lineCap="round",this._highlightPredictedEvents?t.strokeStyle="red":t.strokeStyle=this.getCurrentLineColor(i);let n=this._createPath(i.x,i.y,this._currentPath.predictedPoints[0].x,this._currentPath.predictedPoints[0].y);t.stroke(n.toPath2D()),n.delete();let s;for(s=0;s<this._currentPath.predictedPoints.length-1;s++)n=this._createPath(this._currentPath.predictedPoints[s].x,this._currentPath.predictedPoints[s].y,this._currentPath.predictedPoints[s+1].x,this._currentPath.predictedPoints[s+1].y),t.stroke(n.toPath2D()),n.delete()}}_strokePredictedPoints(t,r){let i,n=this._currentPath.points[this._currentPath.points.length-1];for(i=0;i<r.length;i++)t.beginPath(),this._highlightPredictedEvents?t.fillStyle="red":t.fillStyle=this.getCurrentLineColor(n),t.arc(r[i].x,r[i].y,3,0,Math.PI*2,!0),t.fill()}}class yg extends zs{firstUpdated(){super.firstUpdated(),this.renderer=new bg(this.canvas,this.predictionCanvas,this.desynchronized)}constructor(){super()}}customElements.define("pathkit-canvas",yg);var _g=lt`
  ${mt}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ce=class extends ct{constructor(){super(...arguments),this.hasSlotController=new xe(this,"footer"),this.localize=new Vt(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Fc(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),yi(this))}disconnectedCallback(){super.disconnectedCallback(),_i(this)}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,oe(this,"sl-after-hide")}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Lt(this,"dialog.denyClose",{dir:this.localize.dir()});It(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),yi(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Wt(this.dialog),Wt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Lt(this,"dialog.show",{dir:this.localize.dir()}),r=Lt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([It(this.panel,t.keyframes,t.options),It(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Wt(this.dialog),Wt(this.overlay)]);const e=Lt(this,"dialog.hide",{dir:this.localize.dir()}),t=Lt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([It(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),It(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,_i(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}render(){return j`
      <div
        part="base"
        class=${_t({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${X(this.noHeader?this.label:void 0)}
          aria-labelledby=${X(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":j`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ce.styles=_g;x([Z(".dialog")],ce.prototype,"dialog",2);x([Z(".dialog__panel")],ce.prototype,"panel",2);x([Z(".dialog__overlay")],ce.prototype,"overlay",2);x([k({type:Boolean,reflect:!0})],ce.prototype,"open",2);x([k({reflect:!0})],ce.prototype,"label",2);x([k({attribute:"no-header",type:Boolean,reflect:!0})],ce.prototype,"noHeader",2);x([K("open",{waitUntilFirstUpdate:!0})],ce.prototype,"handleOpenChange",1);ce=x([vt("sl-dialog")],ce);At("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});At("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});At("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});At("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});At("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var wg=lt`
  ${mt}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Fr=class extends ct{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Fr.styles=wg;x([k({type:Boolean,reflect:!0})],Fr.prototype,"vertical",2);x([K("vertical")],Fr.prototype,"handleVerticalChange",1);Fr=x([vt("sl-divider")],Fr);var xg=lt`
  ${mt}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,de=class extends ct{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return Xc(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("sl-label-change"))}render(){return j`
      <div
        part="base"
        class=${_t({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};de.styles=xg;x([Z("slot:not([name])")],de.prototype,"defaultSlot",2);x([Z(".menu-item")],de.prototype,"menuItem",2);x([k({type:Boolean,reflect:!0})],de.prototype,"checked",2);x([k()],de.prototype,"value",2);x([k({type:Boolean,reflect:!0})],de.prototype,"disabled",2);x([K("checked")],de.prototype,"handleCheckedChange",1);x([K("disabled")],de.prototype,"handleDisabledChange",1);de=x([vt("sl-menu-item")],de);var Hi=lt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Eg=lt`
  ${mt}
  ${Hi}

  :host {
    display: block;
  }

  .form-control {
    border: none;
    padding: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Rt=class extends ct{constructor(){super(...arguments),this.formSubmitController=new He(this,{defaultValue:e=>e.defaultValue}),this.hasSlotController=new xe(this,"help-text","label"),this.hasButtonGroup=!1,this.errorMessage="",this.customErrorMessage="",this.defaultValue="",this.invalid=!1,this.label="",this.helpText="",this.value="",this.name="option",this.required=!1}handleValueChange(){this.hasUpdated&&(this.emit("sl-change"),this.updateCheckedRadio())}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.invalid=!this.validity.valid}checkValidity(){return this.validity.valid}setCustomValidity(e=""){this.customErrorMessage=e,this.errorMessage=e,e?(this.invalid=!0,this.input.setCustomValidity(e)):this.invalid=!1}get validity(){const e=!(this.value&&this.required||!this.required),t=this.customErrorMessage!=="";return{badInput:!1,customError:t,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!(e||t),valueMissing:!e}}reportValidity(){const e=this.validity;return this.errorMessage=this.customErrorMessage||e.valid?"":this.input.validationMessage,this.invalid=!e.valid,e.valid||this.showNativeErrorMessage(),!this.invalid}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target;if(t.disabled)return;this.value=t.value,this.getAllRadios().forEach(i=>i.checked=i===t)}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(c=>!c.disabled),i=(t=r.find(c=>c.checked))!=null?t:r[0],n=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=r.indexOf(i)+n;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(i=>i.checked)||e[0];r&&r.focus()}handleSlotChange(){var e;const t=this.getAllRadios();if(t.forEach(r=>r.checked=r.value===this.value),this.hasButtonGroup=t.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),!t.some(r=>r.checked))if(this.hasButtonGroup){const r=t[0].shadowRoot.querySelector("button");r.tabIndex=0}else t[0].tabIndex=0;if(this.hasButtonGroup){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");r&&(r.disableRole=!0)}}showNativeErrorMessage(){this.input.hidden=!1,this.input.reportValidity(),setTimeout(()=>this.input.hidden=!0,1e4)}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.invalid=!this.validity.valid}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=j`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return j`
      <fieldset
        part="form-control"
        class=${_t({"form-control":!0,"form-control--medium":!0,"form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
              />
            </label>
          </div>

          ${this.hasButtonGroup?j`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${n}
                </sl-button-group>
              `:n}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Rt.styles=Eg;x([Z("slot:not([name])")],Rt.prototype,"defaultSlot",2);x([Z(".radio-group__validation-input")],Rt.prototype,"input",2);x([et()],Rt.prototype,"hasButtonGroup",2);x([et()],Rt.prototype,"errorMessage",2);x([et()],Rt.prototype,"customErrorMessage",2);x([et()],Rt.prototype,"defaultValue",2);x([et()],Rt.prototype,"invalid",2);x([k()],Rt.prototype,"label",2);x([k({attribute:"help-text"})],Rt.prototype,"helpText",2);x([k({reflect:!0})],Rt.prototype,"value",2);x([k()],Rt.prototype,"name",2);x([k({type:Boolean,reflect:!0})],Rt.prototype,"required",2);x([K("value")],Rt.prototype,"handleValueChange",1);Rt=x([vt("sl-radio-group")],Rt);var Sg=lt`
  ${mt}
  ${Hi}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select::part(panel) {
    overflow: hidden;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select::part(panel) {
    border-radius: var(--sl-border-radius-medium);
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,Xr=(e="value")=>(t,r)=>{const i=t.constructor,n=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(s,c,d){var h;const a=i.getPropertyOptions(e),l=typeof a.attribute=="string"?a.attribute:e;if(s===l){const o=a.converter||Dr,p=(typeof o=="function"?o:(h=o==null?void 0:o.fromAttribute)!=null?h:Dr.fromAttribute)(d,a.type);this[e]!==p&&(this[r]=p)}n.call(this,s,c,d)}},nt=class extends ct{constructor(){super(...arguments),this.formSubmitController=new He(this),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new Vt(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.invalid=!1,this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(e){this.control.focus(e)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,this.emit("sl-blur"))}handleClearClick(e){e.stopPropagation(),this.value=this.multiple?[]:"",this.emit("sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,this.emit("sl-focus"))}handleKeyDown(e){const t=e.target,r=this.menuItems[0],i=this.menuItems[this.menuItems.length-1];if(t.tagName.toLowerCase()!=="sl-tag"){if(e.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.isOpen||this.dropdown.show(),e.key==="ArrowDown"){this.menu.setCurrentItem(r),r.focus();return}if(e.key==="ArrowUp"){this.menu.setCurrentItem(i),i.focus();return}}e.ctrlKey||e.metaKey||!this.isOpen&&e.key.length===1&&(e.stopPropagation(),e.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(e))}}handleLabelClick(){this.focus()}handleMenuSelect(e){const t=e.detail.item;this.multiple?this.value=this.value.includes(t.value)?this.value.filter(r=>r!==t.value):[...this.value,t.value]:this.value=t.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){const e=this.menuItems.find(t=>t.value===this.value);this.displayLabel=e?e.getTextLabel():""}}handleMultipleChange(){var e;const t=this.getValueAsArray();this.value=this.multiple?t:(e=t[0])!=null?e:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];const e=[];this.menuItems.forEach(t=>{e.includes(t.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${t.value}'`,t),e.push(t.value)}),await Promise.all(this.menuItems.map(t=>t.render)),this.syncItemsFromValue()}handleTagInteraction(e){e.composedPath().find(i=>i instanceof HTMLElement?i.classList.contains("tag__remove"):!1)&&e.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),this.emit("sl-change"),this.emit("sl-input")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,requestAnimationFrame(()=>this.dropdown.reposition())}syncItemsFromValue(){const e=this.getValueAsArray();if(this.menuItems.forEach(t=>t.checked=e.includes(t.value)),this.multiple){const t=this.menuItems.filter(r=>e.includes(r.value));if(this.displayLabel=t.length>0?t[0].getTextLabel():"",this.displayTags=t.map(r=>j`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${i=>{i.stopPropagation(),this.disabled||(r.checked=!1,this.syncValueFromItems())}}
          >
            ${r.getTextLabel()}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const r=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(j`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${r-this.maxTagsVisible}
          </sl-tag>
        `)}}else{const t=this.menuItems.find(r=>r.value===e[0]);this.displayLabel=t?t.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){const t=this.menuItems.filter(r=>r.checked).map(r=>r.value);this.multiple?this.value=this.value.filter(r=>t.includes(r)):this.value=t.length>0?t[0]:""}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.multiple?this.value.length>0:this.value!=="",i=this.label?!0:!!e,n=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&r;return j`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement==="bottom"?"bottom-start":"top-start"}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${_t({select:!0,"select--open":this.isOpen,"select--empty":!this.value,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled?"true":"false"}
              aria-expanded=${this.isOpen?"true":"false"}
              aria-controls="menu"
              tabindex=${this.disabled?"-1":"0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?j` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${s?j`
                    <button
                      part="clear-button"
                      class="select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <span part="suffix" class="select__suffix">
                <slot name="suffix"></slot>
              </span>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${r?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @sl-label-change=${this.handleMenuItemLabelChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};nt.styles=Sg;x([Z(".select")],nt.prototype,"dropdown",2);x([Z(".select__control")],nt.prototype,"control",2);x([Z(".select__hidden-select")],nt.prototype,"input",2);x([Z(".select__menu")],nt.prototype,"menu",2);x([et()],nt.prototype,"hasFocus",2);x([et()],nt.prototype,"isOpen",2);x([et()],nt.prototype,"displayLabel",2);x([et()],nt.prototype,"displayTags",2);x([et()],nt.prototype,"invalid",2);x([k({type:Boolean,reflect:!0})],nt.prototype,"multiple",2);x([k({attribute:"max-tags-visible",type:Number})],nt.prototype,"maxTagsVisible",2);x([k({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);x([k()],nt.prototype,"name",2);x([k()],nt.prototype,"placeholder",2);x([k()],nt.prototype,"size",2);x([k({type:Boolean})],nt.prototype,"hoist",2);x([k()],nt.prototype,"value",2);x([k({type:Boolean,reflect:!0})],nt.prototype,"filled",2);x([k({type:Boolean,reflect:!0})],nt.prototype,"pill",2);x([k()],nt.prototype,"label",2);x([k()],nt.prototype,"placement",2);x([k({attribute:"help-text"})],nt.prototype,"helpText",2);x([k({type:Boolean,reflect:!0})],nt.prototype,"required",2);x([k({type:Boolean})],nt.prototype,"clearable",2);x([Xr()],nt.prototype,"defaultValue",2);x([K("disabled",{waitUntilFirstUpdate:!0})],nt.prototype,"handleDisabledChange",1);x([K("multiple")],nt.prototype,"handleMultipleChange",1);x([K("value",{waitUntilFirstUpdate:!0})],nt.prototype,"handleValueChange",1);nt=x([vt("sl-select")],nt);var Ag=lt`
  ${mt}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Be=class extends ct{constructor(){super(...arguments),this.localize=new Vt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return j`
      <span
        part="base"
        class=${_t({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?j`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};Be.styles=Ag;x([k({reflect:!0})],Be.prototype,"variant",2);x([k({reflect:!0})],Be.prototype,"size",2);x([k({type:Boolean,reflect:!0})],Be.prototype,"pill",2);x([k({type:Boolean})],Be.prototype,"removable",2);Be=x([vt("sl-tag")],Be);var Cg=lt`
  ${mt}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,$i=class extends ct{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!e.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),r=e.disabled?t[0]:e;t.forEach(i=>{i.setAttribute("tabindex",i===r?"0":"-1")})}typeToSelect(e){var t;const r=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const i of r){const n=(t=i.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");if(Xc(n).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(i),i.focus();break}}}handleClick(e){const r=e.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let i=r?t.indexOf(r):0;if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus();return}}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return j`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};$i.styles=Cg;x([Z("slot")],$i.prototype,"defaultSlot",2);$i=x([vt("sl-menu")],$i);var kg=lt`
  ${mt}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ut=class extends ct{constructor(){super(...arguments),this.localize=new Vt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,n;const s=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;us(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),i=r[0],n=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}));const s=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!s.includes(e.key)&&t.typeToSelect(e)}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const r=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(n=>Wc(n).start);let i;if(r){switch(r.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=r.button;break;default:i=r}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,oe(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Wt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Lt(this,"dropdown.show",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Wt(this);const{keyframes:e,options:t}=Lt(this,"dropdown.hide",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return j`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${_t({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <div
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        >
          <slot></slot>
        </div>
      </sl-popup>
    `}};Ut.styles=kg;x([Z(".dropdown")],Ut.prototype,"popup",2);x([Z(".dropdown__trigger")],Ut.prototype,"trigger",2);x([Z(".dropdown__panel")],Ut.prototype,"panel",2);x([k({type:Boolean,reflect:!0})],Ut.prototype,"open",2);x([k({reflect:!0})],Ut.prototype,"placement",2);x([k({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);x([k({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ut.prototype,"stayOpenOnSelect",2);x([k({attribute:!1})],Ut.prototype,"containingElement",2);x([k({type:Number})],Ut.prototype,"distance",2);x([k({type:Number})],Ut.prototype,"skidding",2);x([k({type:Boolean})],Ut.prototype,"hoist",2);x([K("open",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleOpenChange",1);Ut=x([vt("sl-dropdown")],Ut);At("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});At("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var $g=lt`
  ${mt}
  ${Hi}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translateX(calc(-1 * var(--sl-tooltip-arrow-size)));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Pg=e=>e.strings===void 0,Tg={},Ig=(e,t=Tg)=>e._$AH=t,ji=Mi(class extends zi{constructor(e){if(super(e),e.type!==ve.PROPERTY&&e.type!==ve.ATTRIBUTE&&e.type!==ve.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Pg(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ht||t===xt)return t;const r=e.element,i=e.name;if(e.type===ve.PROPERTY){if(t===r[i])return Ht}else if(e.type===ve.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return Ht}else if(e.type===ve.ATTRIBUTE&&r.getAttribute(i)===t+"")return Ht;return Ig(e),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var St=class extends ct{constructor(){super(...arguments),this.formSubmitController=new He(this),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new Vt(this),this.hasFocus=!1,this.hasTooltip=!1,this.invalid=!1,this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.defaultValue=0}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value),this.emit("sl-change"))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value),this.emit("sl-change"))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-change"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleValueChange(){this.invalid=!this.input.checkValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=this.localize.dir()==="rtl",s=t*e;if(n){const c=`${t-s}px + ${e} * ${i}`;this.output.style.transform=`translateX(calc((${c} - ${r/2}px - ${i} / 2)))`}else{const c=`${s}px - ${e} * ${i}`;this.output.style.transform=`translateX(calc(${c} - ${r/2}px + ${i} / 2))`}}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return j`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${_t({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              type="range"
              class="range__control"
              name=${X(this.name)}
              ?disabled=${this.disabled}
              min=${X(this.min)}
              max=${X(this.max)}
              step=${X(this.step)}
              .value=${ji(this.value.toString())}
              aria-describedby="help-text"
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?j`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};St.styles=$g;x([Z(".range__control")],St.prototype,"input",2);x([Z(".range__tooltip")],St.prototype,"output",2);x([et()],St.prototype,"hasFocus",2);x([et()],St.prototype,"hasTooltip",2);x([et()],St.prototype,"invalid",2);x([k()],St.prototype,"name",2);x([k({type:Number})],St.prototype,"value",2);x([k()],St.prototype,"label",2);x([k({attribute:"help-text"})],St.prototype,"helpText",2);x([k({type:Boolean,reflect:!0})],St.prototype,"disabled",2);x([k({type:Number})],St.prototype,"min",2);x([k({type:Number})],St.prototype,"max",2);x([k({type:Number})],St.prototype,"step",2);x([k()],St.prototype,"tooltip",2);x([k({attribute:!1})],St.prototype,"tooltipFormatter",2);x([Xr()],St.prototype,"defaultValue",2);x([K("value",{waitUntilFirstUpdate:!0})],St.prototype,"handleValueChange",1);x([K("disabled",{waitUntilFirstUpdate:!0})],St.prototype,"handleDisabledChange",1);x([K("hasTooltip",{waitUntilFirstUpdate:!0})],St.prototype,"syncRange",1);St=x([vt("sl-range")],St);var Lg=lt`
  ${mt}

  :host {
    --height: var(--sl-toggle-size);
    --thumb-size: calc(var(--sl-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ft=class extends ct{constructor(){super(...arguments),this.formSubmitController=new He(this,{value:e=>e.checked?e.value:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.invalid=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleCheckedChange(){this.input.checked=this.checked,this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"))}render(){return j`
      <label
        part="base"
        class=${_t({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus})}
      >
        <input
          class="switch__input"
          type="checkbox"
          name=${X(this.name)}
          value=${X(this.value)}
          .checked=${ji(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <span part="label" class="switch__label">
          <slot></slot>
        </span>
      </label>
    `}};Ft.styles=Lg;x([Z('input[type="checkbox"]')],Ft.prototype,"input",2);x([et()],Ft.prototype,"hasFocus",2);x([et()],Ft.prototype,"invalid",2);x([k()],Ft.prototype,"name",2);x([k()],Ft.prototype,"value",2);x([k({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);x([k({type:Boolean,reflect:!0})],Ft.prototype,"required",2);x([k({type:Boolean,reflect:!0})],Ft.prototype,"checked",2);x([Xr("checked")],Ft.prototype,"defaultChecked",2);x([K("checked",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleCheckedChange",1);x([K("disabled",{waitUntilFirstUpdate:!0})],Ft.prototype,"handleDisabledChange",1);Ft=x([vt("sl-switch")],Ft);var Rg=0;function wd(){return++Rg}var Og=lt`
  ${mt}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,ue=class extends ct{constructor(){super(...arguments),this.localize=new Vt(this),this.attrId=wd(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}handleCloseClick(){this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return this.id=this.id.length>0?this.id:this.componentId,j`
      <div
        part="base"
        class=${_t({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?j`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ue.styles=Og;x([Z(".tab")],ue.prototype,"tab",2);x([k({reflect:!0})],ue.prototype,"panel",2);x([k({type:Boolean,reflect:!0})],ue.prototype,"active",2);x([k({type:Boolean})],ue.prototype,"closable",2);x([k({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);x([K("active")],ue.prototype,"handleActiveChange",1);x([K("disabled")],ue.prototype,"handleDisabledChange",1);ue=x([vt("sl-tab")],ue);var Mg=lt`
  ${mt}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Xt=class extends ct{constructor(){super(...arguments),this.localize=new Vt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>t.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,r)=>{var i;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),r.unobserve(t[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const n=this.tabs.find(c=>c.matches(":focus")),s=this.localize.dir()==="rtl";if((n==null?void 0:n.tagName.toLowerCase())==="sl-tab"){let c=this.tabs.indexOf(n);e.key==="Home"?c=0:e.key==="End"?c=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?c--:(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&c++,c<0&&(c=this.tabs.length-1),c>this.tabs.length-1&&(c=0),this.tabs[c].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[c],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&us(this.tabs[c],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(e,t){if(t=Et({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.map(i=>i.active=i===this.activeTab),this.panels.map(i=>{var n;return i.active=i.name===((n=this.activeTab)==null?void 0:n.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&us(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,i=this.localize.dir()==="rtl",n=this.getAllTabs(),c=n.slice(0,n.indexOf(e)).reduce((d,h)=>({left:d.left+h.clientWidth,top:d.top+h.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.transform=i?`translateX(${-1*c.left}px)`:`translateX(${c.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.transform=`translateY(${c.top}px)`;break}}preventIndicatorTransition(){const e=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=e})}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const e=this.localize.dir()==="rtl";return j`
      <div
        part="base"
        class=${_t({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?j`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?j`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};Xt.styles=Mg;x([Z(".tab-group")],Xt.prototype,"tabGroup",2);x([Z(".tab-group__body")],Xt.prototype,"body",2);x([Z(".tab-group__nav")],Xt.prototype,"nav",2);x([Z(".tab-group__indicator")],Xt.prototype,"indicator",2);x([et()],Xt.prototype,"hasScrollControls",2);x([k()],Xt.prototype,"placement",2);x([k()],Xt.prototype,"activation",2);x([k({attribute:"no-scroll-controls",type:Boolean})],Xt.prototype,"noScrollControls",2);x([K("noScrollControls",{waitUntilFirstUpdate:!0})],Xt.prototype,"updateScrollControls",1);x([K("placement",{waitUntilFirstUpdate:!0})],Xt.prototype,"syncIndicator",1);Xt=x([vt("sl-tab-group")],Xt);var zg=lt`
  ${mt}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    padding: var(--padding);
  }

  .tab-panel:not(.tab-panel--active) {
    display: none;
  }
`,dr=class extends ct{constructor(){super(...arguments),this.attrId=wd(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return j`
      <div
        part="base"
        class=${_t({"tab-panel":!0,"tab-panel--active":this.active})}
      >
        <slot></slot>
      </div>
    `}};dr.styles=zg;x([k({reflect:!0})],dr.prototype,"name",2);x([k({type:Boolean,reflect:!0})],dr.prototype,"active",2);x([K("active")],dr.prototype,"handleActiveChange",1);dr=x([vt("sl-tab-panel")],dr);class xd extends Qt{static get properties(){return{renderingType:{type:String,reflectToAttribute:!0,attribute:!0},desynchronizedEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},pointerRawUpdateEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},pressureEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedEventsHighlightEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},predictedType:{type:String,reflectToAttribute:!0,attribute:!0},numOfPredictionPoints:{type:Number,reflectToAttribute:!0,attribute:!0},coalescedEventsEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0},drawPointsOnlyEnabled:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set renderingType(t){let r=this._renderingType;this._renderingType=t;let i=new CustomEvent("renderingType-changed",{detail:{renderingType:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("renderingType",r)}get renderingType(){return this._renderingType}set desynchronizedEnabled(t){let r=this._desynchronizedEnabled;this._desynchronizedEnabled=t;let i=new CustomEvent("desynchronizedEnabled-changed",{detail:{desynchronizedEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("desynchronizedEnabled",r)}get desynchronizedEnabled(){return this._desynchronizedEnabled}set pointerRawUpdateEnabled(t){let r=this._pointerRawUpdateEnabled;this._pointerRawUpdateEnabled=t;let i=new CustomEvent("pointerRawUpdateEnabled-changed",{detail:{pointerRawUpdateEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("pointerRawUpdateEnabled",r)}get pointerRawUpdateEnabled(){return this._pointerRawUpdateEnabled}set pressureEventsEnabled(t){let r=this._pressureEventsEnabled;this._pressureEventsEnabled=t;let i=new CustomEvent("pressureEventsEnabled-changed",{detail:{pressureEventsEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("pressureEventsEnabled",r)}get pressureEventsEnabled(){return this._pressureEventsEnabled}set predictedEventsEnabled(t){let r=this._predictedEventsEnabled;this._predictedEventsEnabled=t;let i=new CustomEvent("predictedEventsEnabled-changed",{detail:{predictedEventsEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictedEventsEnabled",r)}get predictedEventsEnabled(){return this._predictedEventsEnabled}set predictedEventsHighlightEnabled(t){let r=this._predictedEventsHighlightEnabled;this._predictedEventsHighlightEnabled=t;let i=new CustomEvent("predictedEventsHighlightEnabled-changed",{detail:{predictedEventsHighlightEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictedEventsHighlightEnabled",r)}get predictedEventsHighlightEnabled(){return this._predictedEventsHighlightEnabled}set predictionType(t){let r=this._predictionType;this._predictionType=t;let i=new CustomEvent("predictionType-changed",{detail:{predictionType:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("predictionType",r)}get predictionType(){return this._predictionType}set numOfPredictionPoints(t){let r=this._numOfPredictionPoints;this._numOfPredictionPoints=t;let i=new CustomEvent("numOfPredictionPoints-changed",{detail:{numOfPredictionPoints:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("numOfPredictionPoints",r)}get numOfPredictionPoints(){return this._numOfPredictionPoints}set coalescedEventsEnabled(t){let r=this._coalescedEventsEnabled;this._coalescedEventsEnabled=t;let i=new CustomEvent("coalescedEventsEnabled-changed",{detail:{coalescedEventsEnabled:t,bubbles:!0,composed:!0}});this.dispatchEvent(i),this.requestUpdate("coalescedEventsEnabled",r)}get coalescedEventsEnabled(){return this._coalescedEventsEnabled}set drawPointsOnlyEnabled(t){let r=this._drawPointsOnlyEnabled;this._drawPointsOnlyEnabled=t;let i=new CustomEvent("drawPointsOnlyEnabled-changed",{detail:{drawPointsOnlyEnabled:t},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate("drawPointsOnlyEnabled",r)}get drawPointsOnlyEnabled(){return this._drawPointsOnlyEnabled}show(){this._dialog.show()}_triggerPropertyUpdate(){this.desynchronizedEnabled=this.desynchronizedEnabled,this.pointerRawUpdateEnabled=this.pointerRawUpdateEnabled,this.pressureEventsEnabled=this.pressureEventsEnabled,this.predictedEventsEnabled=this.predictedEventsEnabled,this.predictedEventsHighlightEnabled=this.predictedEventsHighlightEnabled,this.predictionType=this.predictionType,this.numOfPredictionPoints=this.numOfPredictionPoints,this.coalescedEventsEnabled=this.coalescedEventsEnabled,this.drawPointsOnlyEnabled=this.drawPointsOnlyEnabled}_renderingTypeModeChanged(){this.renderingType=this._renderingModeSelect.value,this._triggerPropertyUpdate()}_desynchronizedSwitchChanged(){this.desynchronizedEnabled=this._desynchronizedSwitch.checked}_isPointerRawUpdateSupported(){return typeof this.onpointerrawupdate<"u"}_pointerRawSwitchChanged(){this.pointerRawUpdateEnabled=this._pointerRawSwitch.checked,this._pointerRawSwitch.checked&&(this.predictedEventsEnabled=this._predictionSwitch.checked=!1,this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this._predictionModeSelect.disabled=this._predictionPointsRange.disabled=!this._predictionSwitch.checked)}_drawPointsOnlyChanged(){this.drawPointsOnlyEnabled=this._drawPointsSwitch.checked}_coalescedEventsSwitchChanged(){this.coalescedEventsEnabled=this._coalescedEventsSwitch.checked}_pressureEventsSwitchChanged(){this.pressureEventsEnabled=this._penPressureSwitch.checked}_predictedEventsSwitchChanged(){this.predictedEventsEnabled=this._predictionSwitch.checked,this._predictionHighlightSwitch.disabled=!this._predictionSwitch.checked,this._predictionSwitch.checked?this.pointerRawUpdateEnabled=this._pointerRawSwitch.checked=!1:this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this._predictionModeSelect.disabled=this._predictionPointsRange.disabled=!this._predictionSwitch.checked}_predictedEventsHighlightSwitchChanged(){this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked}_predictionTypeSwitchChanged(){this.predictionType=this._predictionModeSelect.value}_predictionPointsRangeChanged(){this.numOfPredictionPoints=this._predictionPointsRange.value}firstUpdated(){this._dialog=this.shadowRoot.querySelector("#dialog"),this._dialog.querySelector('sl-button[slot="footer"]').addEventListener("click",()=>this._dialog.hide()),this._renderingModeSelect=this.shadowRoot.querySelector("#rendering-mode-select"),this._desynchronizedSwitch=this.shadowRoot.querySelector("#desynchronized-switch"),this._drawPointsSwitch=this.shadowRoot.querySelector("#draw-points-switch"),this._pointerRawSwitch=this.shadowRoot.querySelector("#pointerraw-switch"),this._coalescedEventsSwitch=this.shadowRoot.querySelector("#coalesced-switch"),this._penPressureSwitch=this.shadowRoot.querySelector("#pen-pressure-switch"),this._predictionSwitch=this.shadowRoot.querySelector("#predictions-switch"),this._predictionHighlightSwitch=this.shadowRoot.querySelector("#predictions-highlight-switch"),this._predictionModeSelect=this.shadowRoot.querySelector("#prediction-mode-select"),this._predictionPointsRange=this.shadowRoot.querySelector("#prediction-points-range"),this.desynchronizedEnabled=this._desynchronizedSwitch.checked=!0,this.predictedEventsEnabled=this._predictionSwitch.checked=!0,this.predictedEventsHighlightEnabled=this._predictionHighlightSwitch.checked=!1,this.pressureEventsEnabled=this._penPressureSwitch.checked=!0,this.coalescedEventsEnabled=this._coalescedEventsSwitch.checked=!0,this._isPointerRawUpdateSupported()||(this._pointerRawSwitch.disabled=!0),this._triggerPropertyUpdate()}constructor(){super(),this._desynchronizedEnabled=!1,this._drawingPreferencesCheckbox=!1,this._pointerRawUpdateEnabled=!1,this._pressureEventsEnabled=!1,this._predictedEventsEnabled=!1,this._predictedEventsHighlightEnabled=!1,this._predictionType="custom",this._coalescedEventsEnabled=!1,this._drawPointsOnlyEnabled=!1,this._numOfPredictionPoints=1}render(){return ne`
        <sl-dialog label="Preferences" id="dialog">
            <sl-tab-group>
                <sl-tab slot="nav" panel="general">General</sl-tab>
                <sl-tab slot="nav" panel="pointer">Pointer Events</sl-tab>
                <sl-tab slot="nav" panel="prediction">Prediction</sl-tab>

                <sl-tab-panel name="general">
                    <div class="panel">
                        <div class="switch">
                            <div class="select-title">Rendering mode</div>
                            <sl-select id="rendering-mode-select" @sl-change="${this._renderingTypeModeChanged}" value="canvas">
                                <sl-menu-item value="canvas">Canvas 2D</sl-menu-item>
                                <sl-menu-item value="pathkit">Canvas 2D + PathKit</sl-menu-item>
                            </sl-select>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Use desynchronized canvas</div>
                            <sl-switch id="desynchronized-switch" @sl-change="${this._desynchronizedSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Only draw points</div>
                            <sl-switch id="draw-points-switch" @sl-change="${this._drawPointsOnlyChanged}"></sl-switch>
                        </div>
                    </div>
                </sl-tab-panel>
                <sl-tab-panel name="pointer">
                    <div class="panel">
                        <div class="switch">
                            <div class="switch-title">Turn on pointerraw update</div>
                            <sl-switch id="pointerraw-switch" @sl-change="${this._pointerRawSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Use coalesced events</div>
                            <sl-switch id="coalesced-switch" @sl-change="${this._coalescedEventsSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Use pen pressure</div>
                            <sl-switch id="pen-pressure-switch" @sl-change="${this._pressureEventsSwitchChanged}"></sl-switch>
                        </div>
                    </div>
                </sl-tab-panel>
                <sl-tab-panel name="prediction">
                    <div class="panel">
                        <div class="switch">
                            <div class="switch-title">Turn on pointer events predictions</div>
                            <sl-switch id="predictions-switch" @sl-change="${this._predictedEventsSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="switch-title">Highlight pointer events predictions</div>
                            <sl-switch id="predictions-highlight-switch" @sl-change="${this._predictedEventsHighlightSwitchChanged}"></sl-switch>
                        </div>
                        <div class="switch">
                            <div class="select-title">Prediction mode</div>
                            <sl-select id="prediction-mode-select" @sl-change="${this._predictionTypeSwitchChanged}" value="custom">
                                <sl-menu-item value="custom">Custom (Kalman Filter)</sl-menu-item>
                                <sl-menu-item value="browser">Browser Prediction</sl-menu-item>
                            </sl-select>
                        </div>
                        <sl-range id="prediction-points-range" label="Number of predictions points" min="1" max="10" value="1" step="1" @sl-change="${this._predictionPointsRangeChanged}"></sl-range>
                    </div>
                </sl-tab-panel>
            </sl-tab-group>
        <sl-button slot="footer" variant="primary">Close</sl-button>
        </sl-dialog>
        `}}ft(xd,"styles",Le`
        *,
        *::after,
        *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        }

        sl-dialog {
            --width: 70vw;
        }

        sl-tab-group {
            height: 30vh;
        }

        .panel {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .switch {
            margin: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .switch-title {
            width: 80%;
        }

        .select-title {
            width: 50%;
            margin: auto;
        }

        sl-select {
            width: 50%;
        }

        sl-range {
            margin: 10px;
        }
    `);customElements.define("settings-dialog",xd);var Ng=lt`
  ${mt}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,ur=class extends ct{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return j`
      <span
        part="base"
        class=${_t({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ur.styles=Ng;x([k({reflect:!0})],ur.prototype,"variant",2);x([k({type:Boolean,reflect:!0})],ur.prototype,"pill",2);x([k({type:Boolean,reflect:!0})],ur.prototype,"pulse",2);ur=x([vt("sl-badge")],ur);function rs(e,t){var r;function i(s){const c=e.getBoundingClientRect(),d=e.ownerDocument.defaultView,h=c.left+d.pageXOffset,a=c.top+d.pageYOffset,l=s.pageX-h,o=s.pageY-a;t!=null&&t.onMove&&t.onMove(l,o)}function n(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",n),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",n),((r=t==null?void 0:t.initialEvent)==null?void 0:r.type)==="pointermove"&&i(t.initialEvent)}function qt(e,t,r){return e<t?t:e>r?r:e}var ke=Mi(class extends zi{constructor(e){var t;if(super(e),e.type!==ve.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?r.removeProperty(i):r[i]="")});for(const i in t){const n=t[i];n!=null&&(this.vt.add(i),i.includes("-")?r.setProperty(i,n):r[i]=n)}return Ht}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dg=lt`
  ${mt}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) transform;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    transform: scale(1.5);
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ed=Re({"node_modules/color-name/index.js"(e,t){t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),Ug=Re({"node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(e,t){t.exports=function(i){return!i||typeof i=="string"?!1:i instanceof Array||Array.isArray(i)||i.length>=0&&(i.splice instanceof Function||Object.getOwnPropertyDescriptor(i,i.length-1)&&i.constructor.name!=="String")}}}),qg=Re({"node_modules/simple-swizzle/index.js"(e,t){var r=Ug(),i=Array.prototype.concat,n=Array.prototype.slice,s=t.exports=function(d){for(var h=[],a=0,l=d.length;a<l;a++){var o=d[a];r(o)?h=i.call(h,n.call(o)):h.push(o)}return h};s.wrap=function(c){return function(){return c(s(arguments))}}}}),Wg=Re({"node_modules/color-string/index.js"(e,t){var r=Ed(),i=qg(),n=Object.hasOwnProperty,s={};for(c in r)n.call(r,c)&&(s[r[c]]=c);var c,d=t.exports={to:{},get:{}};d.get=function(l){var o=l.substring(0,3).toLowerCase(),u,p;switch(o){case"hsl":u=d.get.hsl(l),p="hsl";break;case"hwb":u=d.get.hwb(l),p="hwb";break;default:u=d.get.rgb(l),p="rgb";break}return u?{model:p,value:u}:null},d.get.rgb=function(l){if(!l)return null;var o=/^#([a-f0-9]{3,4})$/i,u=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,p=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,f=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,g=/^(\w+)$/,b=[0,0,0,1],E,w,A;if(E=l.match(u)){for(A=E[2],E=E[1],w=0;w<3;w++){var $=w*2;b[w]=parseInt(E.slice($,$+2),16)}A&&(b[3]=parseInt(A,16)/255)}else if(E=l.match(o)){for(E=E[1],A=E[3],w=0;w<3;w++)b[w]=parseInt(E[w]+E[w],16);A&&(b[3]=parseInt(A+A,16)/255)}else if(E=l.match(p)){for(w=0;w<3;w++)b[w]=parseInt(E[w+1],0);E[4]&&(E[5]?b[3]=parseFloat(E[4])*.01:b[3]=parseFloat(E[4]))}else if(E=l.match(f)){for(w=0;w<3;w++)b[w]=Math.round(parseFloat(E[w+1])*2.55);E[4]&&(E[5]?b[3]=parseFloat(E[4])*.01:b[3]=parseFloat(E[4]))}else return(E=l.match(g))?E[1]==="transparent"?[0,0,0,0]:n.call(r,E[1])?(b=r[E[1]],b[3]=1,b):null:null;for(w=0;w<3;w++)b[w]=h(b[w],0,255);return b[3]=h(b[3],0,1),b},d.get.hsl=function(l){if(!l)return null;var o=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,u=l.match(o);if(u){var p=parseFloat(u[4]),f=(parseFloat(u[1])%360+360)%360,g=h(parseFloat(u[2]),0,100),b=h(parseFloat(u[3]),0,100),E=h(isNaN(p)?1:p,0,1);return[f,g,b,E]}return null},d.get.hwb=function(l){if(!l)return null;var o=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,u=l.match(o);if(u){var p=parseFloat(u[4]),f=(parseFloat(u[1])%360+360)%360,g=h(parseFloat(u[2]),0,100),b=h(parseFloat(u[3]),0,100),E=h(isNaN(p)?1:p,0,1);return[f,g,b,E]}return null},d.to.hex=function(){var l=i(arguments);return"#"+a(l[0])+a(l[1])+a(l[2])+(l[3]<1?a(Math.round(l[3]*255)):"")},d.to.rgb=function(){var l=i(arguments);return l.length<4||l[3]===1?"rgb("+Math.round(l[0])+", "+Math.round(l[1])+", "+Math.round(l[2])+")":"rgba("+Math.round(l[0])+", "+Math.round(l[1])+", "+Math.round(l[2])+", "+l[3]+")"},d.to.rgb.percent=function(){var l=i(arguments),o=Math.round(l[0]/255*100),u=Math.round(l[1]/255*100),p=Math.round(l[2]/255*100);return l.length<4||l[3]===1?"rgb("+o+"%, "+u+"%, "+p+"%)":"rgba("+o+"%, "+u+"%, "+p+"%, "+l[3]+")"},d.to.hsl=function(){var l=i(arguments);return l.length<4||l[3]===1?"hsl("+l[0]+", "+l[1]+"%, "+l[2]+"%)":"hsla("+l[0]+", "+l[1]+"%, "+l[2]+"%, "+l[3]+")"},d.to.hwb=function(){var l=i(arguments),o="";return l.length>=4&&l[3]!==1&&(o=", "+l[3]),"hwb("+l[0]+", "+l[1]+"%, "+l[2]+"%"+o+")"},d.to.keyword=function(l){return s[l.slice(0,3)]};function h(l,o,u){return Math.min(Math.max(o,l),u)}function a(l){var o=Math.round(l).toString(16).toUpperCase();return o.length<2?"0"+o:o}}}),Sd=Re({"node_modules/color-convert/conversions.js"(e,t){var r=Ed(),i={};for(const c of Object.keys(r))i[r[c]]=c;var n={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=n;for(const c of Object.keys(n)){if(!("channels"in n[c]))throw new Error("missing channels property: "+c);if(!("labels"in n[c]))throw new Error("missing channel labels property: "+c);if(n[c].labels.length!==n[c].channels)throw new Error("channel and label counts mismatch: "+c);const{channels:d,labels:h}=n[c];delete n[c].channels,delete n[c].labels,Object.defineProperty(n[c],"channels",{value:d}),Object.defineProperty(n[c],"labels",{value:h})}n.rgb.hsl=function(c){const d=c[0]/255,h=c[1]/255,a=c[2]/255,l=Math.min(d,h,a),o=Math.max(d,h,a),u=o-l;let p,f;o===l?p=0:d===o?p=(h-a)/u:h===o?p=2+(a-d)/u:a===o&&(p=4+(d-h)/u),p=Math.min(p*60,360),p<0&&(p+=360);const g=(l+o)/2;return o===l?f=0:g<=.5?f=u/(o+l):f=u/(2-o-l),[p,f*100,g*100]},n.rgb.hsv=function(c){let d,h,a,l,o;const u=c[0]/255,p=c[1]/255,f=c[2]/255,g=Math.max(u,p,f),b=g-Math.min(u,p,f),E=function(w){return(g-w)/6/b+1/2};return b===0?(l=0,o=0):(o=b/g,d=E(u),h=E(p),a=E(f),u===g?l=a-h:p===g?l=1/3+d-a:f===g&&(l=2/3+h-d),l<0?l+=1:l>1&&(l-=1)),[l*360,o*100,g*100]},n.rgb.hwb=function(c){const d=c[0],h=c[1];let a=c[2];const l=n.rgb.hsl(c)[0],o=1/255*Math.min(d,Math.min(h,a));return a=1-1/255*Math.max(d,Math.max(h,a)),[l,o*100,a*100]},n.rgb.cmyk=function(c){const d=c[0]/255,h=c[1]/255,a=c[2]/255,l=Math.min(1-d,1-h,1-a),o=(1-d-l)/(1-l)||0,u=(1-h-l)/(1-l)||0,p=(1-a-l)/(1-l)||0;return[o*100,u*100,p*100,l*100]};function s(c,d){return(c[0]-d[0])**2+(c[1]-d[1])**2+(c[2]-d[2])**2}n.rgb.keyword=function(c){const d=i[c];if(d)return d;let h=1/0,a;for(const l of Object.keys(r)){const o=r[l],u=s(c,o);u<h&&(h=u,a=l)}return a},n.keyword.rgb=function(c){return r[c]},n.rgb.xyz=function(c){let d=c[0]/255,h=c[1]/255,a=c[2]/255;d=d>.04045?((d+.055)/1.055)**2.4:d/12.92,h=h>.04045?((h+.055)/1.055)**2.4:h/12.92,a=a>.04045?((a+.055)/1.055)**2.4:a/12.92;const l=d*.4124+h*.3576+a*.1805,o=d*.2126+h*.7152+a*.0722,u=d*.0193+h*.1192+a*.9505;return[l*100,o*100,u*100]},n.rgb.lab=function(c){const d=n.rgb.xyz(c);let h=d[0],a=d[1],l=d[2];h/=95.047,a/=100,l/=108.883,h=h>.008856?h**(1/3):7.787*h+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;const o=116*a-16,u=500*(h-a),p=200*(a-l);return[o,u,p]},n.hsl.rgb=function(c){const d=c[0]/360,h=c[1]/100,a=c[2]/100;let l,o,u;if(h===0)return u=a*255,[u,u,u];a<.5?l=a*(1+h):l=a+h-a*h;const p=2*a-l,f=[0,0,0];for(let g=0;g<3;g++)o=d+1/3*-(g-1),o<0&&o++,o>1&&o--,6*o<1?u=p+(l-p)*6*o:2*o<1?u=l:3*o<2?u=p+(l-p)*(2/3-o)*6:u=p,f[g]=u*255;return f},n.hsl.hsv=function(c){const d=c[0];let h=c[1]/100,a=c[2]/100,l=h;const o=Math.max(a,.01);a*=2,h*=a<=1?a:2-a,l*=o<=1?o:2-o;const u=(a+h)/2,p=a===0?2*l/(o+l):2*h/(a+h);return[d,p*100,u*100]},n.hsv.rgb=function(c){const d=c[0]/60,h=c[1]/100;let a=c[2]/100;const l=Math.floor(d)%6,o=d-Math.floor(d),u=255*a*(1-h),p=255*a*(1-h*o),f=255*a*(1-h*(1-o));switch(a*=255,l){case 0:return[a,f,u];case 1:return[p,a,u];case 2:return[u,a,f];case 3:return[u,p,a];case 4:return[f,u,a];case 5:return[a,u,p]}},n.hsv.hsl=function(c){const d=c[0],h=c[1]/100,a=c[2]/100,l=Math.max(a,.01);let o,u;u=(2-h)*a;const p=(2-h)*l;return o=h*l,o/=p<=1?p:2-p,o=o||0,u/=2,[d,o*100,u*100]},n.hwb.rgb=function(c){const d=c[0]/360;let h=c[1]/100,a=c[2]/100;const l=h+a;let o;l>1&&(h/=l,a/=l);const u=Math.floor(6*d),p=1-a;o=6*d-u,(u&1)!==0&&(o=1-o);const f=h+o*(p-h);let g,b,E;switch(u){default:case 6:case 0:g=p,b=f,E=h;break;case 1:g=f,b=p,E=h;break;case 2:g=h,b=p,E=f;break;case 3:g=h,b=f,E=p;break;case 4:g=f,b=h,E=p;break;case 5:g=p,b=h,E=f;break}return[g*255,b*255,E*255]},n.cmyk.rgb=function(c){const d=c[0]/100,h=c[1]/100,a=c[2]/100,l=c[3]/100,o=1-Math.min(1,d*(1-l)+l),u=1-Math.min(1,h*(1-l)+l),p=1-Math.min(1,a*(1-l)+l);return[o*255,u*255,p*255]},n.xyz.rgb=function(c){const d=c[0]/100,h=c[1]/100,a=c[2]/100;let l,o,u;return l=d*3.2406+h*-1.5372+a*-.4986,o=d*-.9689+h*1.8758+a*.0415,u=d*.0557+h*-.204+a*1.057,l=l>.0031308?1.055*l**(1/2.4)-.055:l*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,l=Math.min(Math.max(0,l),1),o=Math.min(Math.max(0,o),1),u=Math.min(Math.max(0,u),1),[l*255,o*255,u*255]},n.xyz.lab=function(c){let d=c[0],h=c[1],a=c[2];d/=95.047,h/=100,a/=108.883,d=d>.008856?d**(1/3):7.787*d+16/116,h=h>.008856?h**(1/3):7.787*h+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;const l=116*h-16,o=500*(d-h),u=200*(h-a);return[l,o,u]},n.lab.xyz=function(c){const d=c[0],h=c[1],a=c[2];let l,o,u;o=(d+16)/116,l=h/500+o,u=o-a/200;const p=o**3,f=l**3,g=u**3;return o=p>.008856?p:(o-16/116)/7.787,l=f>.008856?f:(l-16/116)/7.787,u=g>.008856?g:(u-16/116)/7.787,l*=95.047,o*=100,u*=108.883,[l,o,u]},n.lab.lch=function(c){const d=c[0],h=c[1],a=c[2];let l;l=Math.atan2(a,h)*360/2/Math.PI,l<0&&(l+=360);const u=Math.sqrt(h*h+a*a);return[d,u,l]},n.lch.lab=function(c){const d=c[0],h=c[1],l=c[2]/360*2*Math.PI,o=h*Math.cos(l),u=h*Math.sin(l);return[d,o,u]},n.rgb.ansi16=function(c,d=null){const[h,a,l]=c;let o=d===null?n.rgb.hsv(c)[2]:d;if(o=Math.round(o/50),o===0)return 30;let u=30+(Math.round(l/255)<<2|Math.round(a/255)<<1|Math.round(h/255));return o===2&&(u+=60),u},n.hsv.ansi16=function(c){return n.rgb.ansi16(n.hsv.rgb(c),c[2])},n.rgb.ansi256=function(c){const d=c[0],h=c[1],a=c[2];return d===h&&h===a?d<8?16:d>248?231:Math.round((d-8)/247*24)+232:16+36*Math.round(d/255*5)+6*Math.round(h/255*5)+Math.round(a/255*5)},n.ansi16.rgb=function(c){let d=c%10;if(d===0||d===7)return c>50&&(d+=3.5),d=d/10.5*255,[d,d,d];const h=(~~(c>50)+1)*.5,a=(d&1)*h*255,l=(d>>1&1)*h*255,o=(d>>2&1)*h*255;return[a,l,o]},n.ansi256.rgb=function(c){if(c>=232){const o=(c-232)*10+8;return[o,o,o]}c-=16;let d;const h=Math.floor(c/36)/5*255,a=Math.floor((d=c%36)/6)/5*255,l=d%6/5*255;return[h,a,l]},n.rgb.hex=function(c){const h=(((Math.round(c[0])&255)<<16)+((Math.round(c[1])&255)<<8)+(Math.round(c[2])&255)).toString(16).toUpperCase();return"000000".substring(h.length)+h},n.hex.rgb=function(c){const d=c.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!d)return[0,0,0];let h=d[0];d[0].length===3&&(h=h.split("").map(p=>p+p).join(""));const a=parseInt(h,16),l=a>>16&255,o=a>>8&255,u=a&255;return[l,o,u]},n.rgb.hcg=function(c){const d=c[0]/255,h=c[1]/255,a=c[2]/255,l=Math.max(Math.max(d,h),a),o=Math.min(Math.min(d,h),a),u=l-o;let p,f;return u<1?p=o/(1-u):p=0,u<=0?f=0:l===d?f=(h-a)/u%6:l===h?f=2+(a-d)/u:f=4+(d-h)/u,f/=6,f%=1,[f*360,u*100,p*100]},n.hsl.hcg=function(c){const d=c[1]/100,h=c[2]/100,a=h<.5?2*d*h:2*d*(1-h);let l=0;return a<1&&(l=(h-.5*a)/(1-a)),[c[0],a*100,l*100]},n.hsv.hcg=function(c){const d=c[1]/100,h=c[2]/100,a=d*h;let l=0;return a<1&&(l=(h-a)/(1-a)),[c[0],a*100,l*100]},n.hcg.rgb=function(c){const d=c[0]/360,h=c[1]/100,a=c[2]/100;if(h===0)return[a*255,a*255,a*255];const l=[0,0,0],o=d%1*6,u=o%1,p=1-u;let f=0;switch(Math.floor(o)){case 0:l[0]=1,l[1]=u,l[2]=0;break;case 1:l[0]=p,l[1]=1,l[2]=0;break;case 2:l[0]=0,l[1]=1,l[2]=u;break;case 3:l[0]=0,l[1]=p,l[2]=1;break;case 4:l[0]=u,l[1]=0,l[2]=1;break;default:l[0]=1,l[1]=0,l[2]=p}return f=(1-h)*a,[(h*l[0]+f)*255,(h*l[1]+f)*255,(h*l[2]+f)*255]},n.hcg.hsv=function(c){const d=c[1]/100,h=c[2]/100,a=d+h*(1-d);let l=0;return a>0&&(l=d/a),[c[0],l*100,a*100]},n.hcg.hsl=function(c){const d=c[1]/100,a=c[2]/100*(1-d)+.5*d;let l=0;return a>0&&a<.5?l=d/(2*a):a>=.5&&a<1&&(l=d/(2*(1-a))),[c[0],l*100,a*100]},n.hcg.hwb=function(c){const d=c[1]/100,h=c[2]/100,a=d+h*(1-d);return[c[0],(a-d)*100,(1-a)*100]},n.hwb.hcg=function(c){const d=c[1]/100,a=1-c[2]/100,l=a-d;let o=0;return l<1&&(o=(a-l)/(1-l)),[c[0],l*100,o*100]},n.apple.rgb=function(c){return[c[0]/65535*255,c[1]/65535*255,c[2]/65535*255]},n.rgb.apple=function(c){return[c[0]/255*65535,c[1]/255*65535,c[2]/255*65535]},n.gray.rgb=function(c){return[c[0]/100*255,c[0]/100*255,c[0]/100*255]},n.gray.hsl=function(c){return[0,0,c[0]]},n.gray.hsv=n.gray.hsl,n.gray.hwb=function(c){return[0,100,c[0]]},n.gray.cmyk=function(c){return[0,0,0,c[0]]},n.gray.lab=function(c){return[c[0],0,0]},n.gray.hex=function(c){const d=Math.round(c[0]/100*255)&255,a=((d<<16)+(d<<8)+d).toString(16).toUpperCase();return"000000".substring(a.length)+a},n.rgb.gray=function(c){return[(c[0]+c[1]+c[2])/3/255*100]}}}),Fg=Re({"node_modules/color-convert/route.js"(e,t){var r=Sd();function i(){const d={},h=Object.keys(r);for(let a=h.length,l=0;l<a;l++)d[h[l]]={distance:-1,parent:null};return d}function n(d){const h=i(),a=[d];for(h[d].distance=0;a.length;){const l=a.pop(),o=Object.keys(r[l]);for(let u=o.length,p=0;p<u;p++){const f=o[p],g=h[f];g.distance===-1&&(g.distance=h[l].distance+1,g.parent=l,a.unshift(f))}}return h}function s(d,h){return function(a){return h(d(a))}}function c(d,h){const a=[h[d].parent,d];let l=r[h[d].parent][d],o=h[d].parent;for(;h[o].parent;)a.unshift(h[o].parent),l=s(r[h[o].parent][o],l),o=h[o].parent;return l.conversion=a,l}t.exports=function(d){const h=n(d),a={},l=Object.keys(h);for(let o=l.length,u=0;u<o;u++){const p=l[u];h[p].parent!==null&&(a[p]=c(p,h))}return a}}}),Vg=Re({"node_modules/color-convert/index.js"(e,t){var r=Sd(),i=Fg(),n={},s=Object.keys(r);function c(h){const a=function(...l){const o=l[0];return o==null?o:(o.length>1&&(l=o),h(l))};return"conversion"in h&&(a.conversion=h.conversion),a}function d(h){const a=function(...l){const o=l[0];if(o==null)return o;o.length>1&&(l=o);const u=h(l);if(typeof u=="object")for(let p=u.length,f=0;f<p;f++)u[f]=Math.round(u[f]);return u};return"conversion"in h&&(a.conversion=h.conversion),a}s.forEach(h=>{n[h]={},Object.defineProperty(n[h],"channels",{value:r[h].channels}),Object.defineProperty(n[h],"labels",{value:r[h].labels});const a=i(h);Object.keys(a).forEach(o=>{const u=a[o];n[h][o]=d(u),n[h][o].raw=c(u)})}),t.exports=n}}),Bg=Re({"node_modules/color/index.js"(e,t){var r=Wg(),i=Vg(),n=[].slice,s=["keyword","gray","hex"],c={};for(const g of Object.keys(i))c[n.call(i[g].labels).sort().join("")]=g;var d={};function h(g,b){if(!(this instanceof h))return new h(g,b);if(b&&b in s&&(b=null),b&&!(b in i))throw new Error("Unknown model: "+b);let E,w;if(g==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(g instanceof h)this.model=g.model,this.color=g.color.slice(),this.valpha=g.valpha;else if(typeof g=="string"){const A=r.get(g);if(A===null)throw new Error("Unable to parse color from string: "+g);this.model=A.model,w=i[this.model].channels,this.color=A.value.slice(0,w),this.valpha=typeof A.value[w]=="number"?A.value[w]:1}else if(g.length>0){this.model=b||"rgb",w=i[this.model].channels;const A=n.call(g,0,w);this.color=f(A,w),this.valpha=typeof g[w]=="number"?g[w]:1}else if(typeof g=="number")this.model="rgb",this.color=[g>>16&255,g>>8&255,g&255],this.valpha=1;else{this.valpha=1;const A=Object.keys(g);"alpha"in g&&(A.splice(A.indexOf("alpha"),1),this.valpha=typeof g.alpha=="number"?g.alpha:0);const $=A.sort().join("");if(!($ in c))throw new Error("Unable to parse color from object: "+JSON.stringify(g));this.model=c[$];const P=i[this.model].labels,L=[];for(E=0;E<P.length;E++)L.push(g[P[E]]);this.color=f(L)}if(d[this.model])for(w=i[this.model].channels,E=0;E<w;E++){const A=d[this.model][E];A&&(this.color[E]=A(this.color[E]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}h.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(g){let b=this.model in r.to?this:this.rgb();b=b.round(typeof g=="number"?g:1);const E=b.valpha===1?b.color:b.color.concat(this.valpha);return r.to[b.model](E)},percentString(g){const b=this.rgb().round(typeof g=="number"?g:1),E=b.valpha===1?b.color:b.color.concat(this.valpha);return r.to.rgb.percent(E)},array(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object(){const g={},b=i[this.model].channels,E=i[this.model].labels;for(let w=0;w<b;w++)g[E[w]]=this.color[w];return this.valpha!==1&&(g.alpha=this.valpha),g},unitArray(){const g=this.rgb().color;return g[0]/=255,g[1]/=255,g[2]/=255,this.valpha!==1&&g.push(this.valpha),g},unitObject(){const g=this.rgb().object();return g.r/=255,g.g/=255,g.b/=255,this.valpha!==1&&(g.alpha=this.valpha),g},round(g){return g=Math.max(g||0,0),new h(this.color.map(l(g)).concat(this.valpha),this.model)},alpha(g){return arguments.length>0?new h(this.color.concat(Math.max(0,Math.min(1,g))),this.model):this.valpha},red:o("rgb",0,u(255)),green:o("rgb",1,u(255)),blue:o("rgb",2,u(255)),hue:o(["hsl","hsv","hsl","hwb","hcg"],0,g=>(g%360+360)%360),saturationl:o("hsl",1,u(100)),lightness:o("hsl",2,u(100)),saturationv:o("hsv",1,u(100)),value:o("hsv",2,u(100)),chroma:o("hcg",1,u(100)),gray:o("hcg",2,u(100)),white:o("hwb",1,u(100)),wblack:o("hwb",2,u(100)),cyan:o("cmyk",0,u(100)),magenta:o("cmyk",1,u(100)),yellow:o("cmyk",2,u(100)),black:o("cmyk",3,u(100)),x:o("xyz",0,u(100)),y:o("xyz",1,u(100)),z:o("xyz",2,u(100)),l:o("lab",0,u(100)),a:o("lab",1),b:o("lab",2),keyword(g){return arguments.length>0?new h(g):i[this.model].keyword(this.color)},hex(g){return arguments.length>0?new h(g):r.to.hex(this.rgb().round().color)},hexa(g){if(arguments.length>0)return new h(g);const b=this.rgb().round().color;let E=Math.round(this.valpha*255).toString(16).toUpperCase();return E.length===1&&(E="0"+E),r.to.hex(b)+E},rgbNumber(){const g=this.rgb().color;return(g[0]&255)<<16|(g[1]&255)<<8|g[2]&255},luminosity(){const g=this.rgb().color,b=[];for(const[E,w]of g.entries()){const A=w/255;b[E]=A<=.03928?A/12.92:((A+.055)/1.055)**2.4}return .2126*b[0]+.7152*b[1]+.0722*b[2]},contrast(g){const b=this.luminosity(),E=g.luminosity();return b>E?(b+.05)/(E+.05):(E+.05)/(b+.05)},level(g){const b=this.contrast(g);return b>=7.1?"AAA":b>=4.5?"AA":""},isDark(){const g=this.rgb().color;return(g[0]*299+g[1]*587+g[2]*114)/1e3<128},isLight(){return!this.isDark()},negate(){const g=this.rgb();for(let b=0;b<3;b++)g.color[b]=255-g.color[b];return g},lighten(g){const b=this.hsl();return b.color[2]+=b.color[2]*g,b},darken(g){const b=this.hsl();return b.color[2]-=b.color[2]*g,b},saturate(g){const b=this.hsl();return b.color[1]+=b.color[1]*g,b},desaturate(g){const b=this.hsl();return b.color[1]-=b.color[1]*g,b},whiten(g){const b=this.hwb();return b.color[1]+=b.color[1]*g,b},blacken(g){const b=this.hwb();return b.color[2]+=b.color[2]*g,b},grayscale(){const g=this.rgb().color,b=g[0]*.3+g[1]*.59+g[2]*.11;return h.rgb(b,b,b)},fade(g){return this.alpha(this.valpha-this.valpha*g)},opaquer(g){return this.alpha(this.valpha+this.valpha*g)},rotate(g){const b=this.hsl();let E=b.color[0];return E=(E+g)%360,E=E<0?360+E:E,b.color[0]=E,b},mix(g,b){if(!g||!g.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof g);const E=g.rgb(),w=this.rgb(),A=b===void 0?.5:b,$=2*A-1,P=E.alpha()-w.alpha(),L=(($*P===-1?$:($+P)/(1+$*P))+1)/2,M=1-L;return h.rgb(L*E.red()+M*w.red(),L*E.green()+M*w.green(),L*E.blue()+M*w.blue(),E.alpha()*A+w.alpha()*(1-A))}};for(const g of Object.keys(i)){if(s.includes(g))continue;const b=i[g].channels;h.prototype[g]=function(){if(this.model===g)return new h(this);if(arguments.length>0)return new h(arguments,g);const E=typeof arguments[b]=="number"?b:this.valpha;return new h(p(i[this.model][g].raw(this.color)).concat(E),g)},h[g]=function(E){return typeof E=="number"&&(E=f(n.call(arguments),b)),new h(E,g)}}function a(g,b){return Number(g.toFixed(b))}function l(g){return function(b){return a(b,g)}}function o(g,b,E){g=Array.isArray(g)?g:[g];for(const w of g)(d[w]||(d[w]=[]))[b]=E;return g=g[0],function(w){let A;return arguments.length>0?(E&&(w=E(w)),A=this[g](),A.color[b]=w,A):(A=this[g]().color[b],E&&(A=E(A)),A)}}function u(g){return function(b){return Math.max(0,Math.min(g,b))}}function p(g){return Array.isArray(g)?g:[g]}function f(g,b){for(let E=0;E<b;E++)typeof g[E]!="number"&&(g[E]=0);return g}t.exports=h}}),Hg=Mu(Bg(),1),$c="EyeDropper"in window,ot=class extends ct{constructor(){super(...arguments),this.formSubmitController=new He(this),this.isSafeValue=!1,this.localize=new Vt(this),this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.lightness=100,this.brightness=100,this.alpha=100,this.invalid=!1,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}connectedCallback(){super.connectedCallback(),this.value?(this.setColor(this.value),this.inputValue=this.value,this.lastValueEmitted=this.value,this.syncValues()):(this.isEmpty=!0,this.inputValue="",this.lastValueEmitted="")}getFormattedValue(e="hex"){const t=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;default:return""}}getBrightness(e){return qt(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return qt((200-this.saturation)*e/100*5/10,0,100)}checkValidity(){return this.input.checkValidity()}reportValidity(){return!this.inline&&this.input.invalid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.checkValidity()):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=this.input.invalid}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t]}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();r.focus(),e.preventDefault(),rs(t,{onMove:n=>{this.alpha=qt(n/i*100,0,100),this.syncValues()},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();r.focus(),e.preventDefault(),rs(t,{onMove:n=>{this.hue=qt(n/i*360,0,360),this.syncValues()},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:i,height:n}=t.getBoundingClientRect();r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,rs(t,{onMove:(s,c)=>{this.saturation=qt(s/i*100,0,100),this.brightness=qt(100-c/n*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=qt(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=qt(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues())}handleHueKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=qt(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=qt(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues())}handleGridKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=qt(this.saturation-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=qt(this.saturation+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=qt(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=qt(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}handleInputChange(e){const t=e.target;this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",e.stopPropagation()}handleInputKeyDown(e){e.key==="Enter"&&(this.input.value?(this.setColor(this.input.value),this.input.value=this.value,setTimeout(()=>this.input.select())):this.hue=0)}normalizeColorString(e){if(/rgba?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}if(/hsla?/i.test(e)){const t=e.replace(/[^\d.%]/g," ").split(" ").map(r=>r.trim()).filter(r=>r.length);return t.length<4&&(t[3]="1"),t[3].indexOf("%")>-1&&(t[3]=(parseFloat(t[3].replace(/%/g,""))/100).toString()),`hsla(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`}return/^[0-9a-f]+$/i.test(e)?`#${e}`:e}parseColor(e){let t;e=this.normalizeColorString(e);try{t=(0,Hg.default)(e)}catch{return null}const r=t.hsl(),i={h:r.hue(),s:r.saturationl(),l:r.lightness(),a:r.alpha()},n=t.rgb(),s={r:n.red(),g:n.green(),b:n.blue(),a:n.alpha()},c={r:ci(s.r),g:ci(s.g),b:ci(s.b),a:ci(s.a*255)};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(`#${c.r}${c.g}${c.b}`),hexa:this.setLetterCase(`#${c.r}${c.g}${c.b}${c.a}`)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsla.h,this.saturation=t.hsla.s,this.lightness=t.hsla.l,this.brightness=this.getBrightness(t.hsla.l),this.alpha=this.opacity?t.hsla.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!$c)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=100,this.brightness=100,this.lightness=this.getLightness(this.brightness),this.alpha=100),!this.isSafeValue&&e!==void 0){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsla.h,this.saturation=r.hsla.s,this.lightness=r.hsla.l,this.brightness=this.getBrightness(r.hsla.l),this.alpha=r.hsla.a*100):this.inputValue=e}this.value!==this.lastValueEmitted&&(this.emit("sl-change"),this.lastValueEmitted=this.value)}render(){const e=this.saturation,t=100-this.brightness,r=j`
      <div
        part="base"
        class=${_t({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?j`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ke({backgroundColor:`hsl(${this.hue}deg, 100%, 50%)`})}
          @mousedown=${this.handleGridDrag}
          @touchstart=${this.handleGridDrag}
        >
          <span
            part="grid-handle"
            class=${_t({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ke({top:`${t}%`,left:`${e}%`,backgroundColor:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`})}
            role="application"
            aria-label="HSL"
            tabindex=${X(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @mousedown=${this.handleHueDrag}
              @touchstart=${this.handleHueDrag}
            >
              <span
                part="slider-handle"
                class="color-picker__slider-handle"
                style=${ke({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${X(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?j`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @mousedown="${this.handleAlphaDrag}"
                    @touchstart="${this.handleAlphaDrag}"
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ke({backgroundImage:`linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${ke({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${X(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${ke({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${ji(this.isEmpty?"":this.inputValue)}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":j`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${$c?j`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${this.swatches.length>0?j`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map(i=>j`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${X(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${i}
                      @click=${()=>!this.disabled&&this.setColor(i)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(i)}
                    >
                      <div class="color-picker__swatch-color" style=${ke({backgroundColor:i})}></div>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `;return this.inline?r:j`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${_t({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-picker__transparent-bg":!0})}
          style=${ke({color:`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};ot.styles=Dg;x([Z('[part~="input"]')],ot.prototype,"input",2);x([Z('[part~="preview"]')],ot.prototype,"previewButton",2);x([Z(".color-dropdown")],ot.prototype,"dropdown",2);x([et()],ot.prototype,"isDraggingGridHandle",2);x([et()],ot.prototype,"isEmpty",2);x([et()],ot.prototype,"inputValue",2);x([et()],ot.prototype,"hue",2);x([et()],ot.prototype,"saturation",2);x([et()],ot.prototype,"lightness",2);x([et()],ot.prototype,"brightness",2);x([et()],ot.prototype,"alpha",2);x([et()],ot.prototype,"invalid",2);x([k()],ot.prototype,"value",2);x([Xr()],ot.prototype,"defaultValue",2);x([k()],ot.prototype,"label",2);x([k()],ot.prototype,"format",2);x([k({type:Boolean,reflect:!0})],ot.prototype,"inline",2);x([k()],ot.prototype,"size",2);x([k({attribute:"no-format-toggle",type:Boolean})],ot.prototype,"noFormatToggle",2);x([k()],ot.prototype,"name",2);x([k({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);x([k({type:Boolean})],ot.prototype,"hoist",2);x([k({type:Boolean})],ot.prototype,"opacity",2);x([k({type:Boolean})],ot.prototype,"uppercase",2);x([k({attribute:!1})],ot.prototype,"swatches",2);x([K("format",{waitUntilFirstUpdate:!0})],ot.prototype,"handleFormatChange",1);x([K("opacity",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpacityChange",1);x([K("value")],ot.prototype,"handleValueChange",1);ot=x([vt("sl-color-picker")],ot);function ci(e){const t=Math.round(e).toString(16);return t.length===1?`0${t}`:t}var jg=lt`
  ${mt}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,ws=class extends ct{render(){return j` <slot></slot> `}};ws.styles=jg;ws=x([vt("sl-visually-hidden")],ws);var Xg=lt`
  ${mt}
  ${Hi}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Pc,Kg=(Pc=navigator.userAgentData)==null?void 0:Pc.brands.some(e=>e.brand.includes("Chromium")),Gg=Kg?!1:navigator.userAgent.includes("Firefox"),Y=class extends ct{constructor(){super(...arguments),this.formSubmitController=new He(this),this.hasSlotController=new xe(this,"help-text","label"),this.localize=new Vt(this),this.hasFocus=!1,this.invalid=!1,this.type="text",this.size="medium",this.name="",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.placeholder="",this.disabled=!1,this.readonly=!1,this.required=!1}get valueAsDate(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsDate)!=null?t:null}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){var e,t;return(t=(e=this.input)==null?void 0:e.valueAsNumber)!=null?t:parseFloat(this.value)}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i="preserve"){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}checkValidity(){return this.input.checkValidity()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formSubmitController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.input.value=this.value,this.invalid=!this.input.checkValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return j`
      <div
        part="form-control"
        class=${_t({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${_t({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":Gg})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              name=${X(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${X(this.placeholder)}
              minlength=${X(this.minlength)}
              maxlength=${X(this.maxlength)}
              min=${X(this.min)}
              max=${X(this.max)}
              step=${X(this.step)}
              .value=${ji(this.value)}
              autocapitalize=${X(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${X(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${X(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${X(this.spellcheck)}
              pattern=${X(this.pattern)}
              enterkeyhint=${X(this.enterkeyhint)}
              inputmode=${X(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?j`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?j`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?j`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:j`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y.styles=Xg;x([Z(".input__control")],Y.prototype,"input",2);x([et()],Y.prototype,"hasFocus",2);x([et()],Y.prototype,"invalid",2);x([k({reflect:!0})],Y.prototype,"type",2);x([k({reflect:!0})],Y.prototype,"size",2);x([k()],Y.prototype,"name",2);x([k()],Y.prototype,"value",2);x([Xr()],Y.prototype,"defaultValue",2);x([k({type:Boolean,reflect:!0})],Y.prototype,"filled",2);x([k({type:Boolean,reflect:!0})],Y.prototype,"pill",2);x([k()],Y.prototype,"label",2);x([k({attribute:"help-text"})],Y.prototype,"helpText",2);x([k({type:Boolean})],Y.prototype,"clearable",2);x([k({attribute:"password-toggle",type:Boolean})],Y.prototype,"passwordToggle",2);x([k({attribute:"password-visible",type:Boolean})],Y.prototype,"passwordVisible",2);x([k({attribute:"no-spin-buttons",type:Boolean})],Y.prototype,"noSpinButtons",2);x([k()],Y.prototype,"placeholder",2);x([k({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);x([k({type:Boolean,reflect:!0})],Y.prototype,"readonly",2);x([k({type:Number})],Y.prototype,"minlength",2);x([k({type:Number})],Y.prototype,"maxlength",2);x([k()],Y.prototype,"min",2);x([k()],Y.prototype,"max",2);x([k()],Y.prototype,"step",2);x([k()],Y.prototype,"pattern",2);x([k({type:Boolean,reflect:!0})],Y.prototype,"required",2);x([k()],Y.prototype,"autocapitalize",2);x([k()],Y.prototype,"autocorrect",2);x([k()],Y.prototype,"autocomplete",2);x([k({type:Boolean})],Y.prototype,"autofocus",2);x([k()],Y.prototype,"enterkeyhint",2);x([k({type:Boolean})],Y.prototype,"spellcheck",2);x([k()],Y.prototype,"inputmode",2);x([K("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);x([K("step",{waitUntilFirstUpdate:!0})],Y.prototype,"handleStepChange",1);x([K("value",{waitUntilFirstUpdate:!0})],Y.prototype,"handleValueChange",1);Y=x([vt("sl-input")],Y);class Ad extends Qt{static get properties(){return{selected:{type:Boolean,reflectToAttribute:!0,attribute:!0},name:{type:String,reflectToAttribute:!0,attribute:!0},label:{type:String,reflectToAttribute:!0,attribute:!0},library:{type:String,reflectToAttribute:!0,attribute:!0}}}set selected(t){let r=this._selected;this._selected=t,this.requestUpdate("selected",r)}get selected(){return this._selected}set name(t){let r=this._name;this._name=t,this.requestUpdate("name",r)}get name(){return this._name}set label(t){let r=this._label;this._label=t,this.requestUpdate("label",r)}get label(){return this._label}set library(t){this._library,this._library=t,this.requestUpdate("library",this._library)}get library(){return this._library}constructor(){super(),this._selected=!1,this._label="",this._name="",this._library="default"}render(){return ne`
            <div class="${this.selected?"selected":""}">
                <sl-icon-button 
                    library="${this.library}"
                    name="${this.name}" label="${this.label}">
                </sl-icon-button>
            </div>`}}ft(Ad,"styles",Le`
        .selected sl-icon-button::part(base) {
            background-color: black;
        }

        .selected sl-icon-button::part(base):hover,
        sl-icon-button::part(base):focus {
            border: solid 1px transparent;
        }

        sl-icon-button::part(base) {
            color: #969696;
            font-size: 25px;
            border: solid 1px transparent;
        }

        sl-icon-button::part(base):hover,
        sl-icon-button::part(base):focus {
            border: solid 1px black;
        }

        sl-icon-button::part(base):active {
            color: #d4d4d4;
        }
    `);customElements.define("drawing-button",Ad);class Cd extends Qt{constructor(){super();ft(this,"_updateLineColorCustomization",async r=>{this._drawWithCustomizations&&this.preferredColor!=this.currentLineColor&&await this._writePreferredColor(r,!1)});ft(this,"_updateLineWidthCustomization",async r=>{await this._writePreferredWidth(r,!1)});ft(this,"_readAndSetPreferredColor",async r=>{try{this.preferredColor=await r.penCustomizationsDetails.getPreferredInkingColor(),this.currentLineColor=this.preferredColor}catch{this._emitErrorToast("Couldn't read the preferred color from the stylus.")}});ft(this,"_readAndSetPreferredStyle",async r=>{try{this.preferredStyle=await r.penCustomizationsDetails.getPreferredInkingStyle(),this.preferredStyle=this.preferredStyle.toLowerCase(),this.currentLineStyle=this.preferredStyle}catch{this._emitErrorToast("Couldn't read the preferred style from the stylus.")}});ft(this,"_readAndSetPreferredWidth",async r=>{try{this.preferredWidth=await r.penCustomizationsDetails.getPreferredInkingWidth(),this.currentLineWidth=this.preferredWidth}catch{this._emitErrorToast("Couldn't read the preferred width from the stylus.")}});ft(this,"_writePreferredColor",async(r,i=!0)=>{try{this.preferredColor=await r.penCustomizationsDetails.setPreferredInkingColor(this.currentLineColor),this.preferredColor!=this.currentLineColor?(i&&this._emitWarningToast("The color was written successfully but was adjusted to work with the pen."),console.log("Wrote the following color to the stylus : "+this.preferredColor+", original color was : "+this.currentLineColor)):(i&&this._emitSuccessToast("The current color was written successfully."),console.log("Wrote the following color to the stylus : "+this.preferredColor))}catch{i&&this._emitErrorToast("The current color could not be written on the stylus."),console.log("Could not write the preferred color to the stylus.")}});ft(this,"_writePreferredWidth",async(r,i=!0)=>{try{this.preferredWidth=await r.penCustomizationsDetails.setPreferredInkingWidth(this.currentLineWidth),i&&this._emitSuccessToast("The current width was written successfully."),console.log("Wrote to following preferred width to the stylus : "+this.preferredWidth)}catch{i&&this._emitErrorToast("The current width could not be written on the stylus."),console.log("Could not write the preferred width to the stylus.")}});ft(this,"_writePreferredStyle",async(r,i=!0)=>{try{let n=await r.penCustomizationsDetails.setPreferredInkingStyle(this.currentLineStyle.toUpperCase());this.preferredStyle=n.toLowerCase(),i&&this._emitSuccessToast("The current style was written successfully."),console.log("Wrote to following preferred width to the stylus : "+this.preferredStyle)}catch{i&&this._emitErrorToast("The current style could not be written on the stylus."),console.log("Could not write the preferred style to the stylus.")}});ft(this,"_readStylusCustomizations",async(r,i=!1)=>{let n=this.shadowRoot.querySelectorAll(".preferred");try{const s=await r.penCustomizationsDetails.getPreferredInkingColor(),c=await r.penCustomizationsDetails.getPreferredInkingStyle(),d=await r.penCustomizationsDetails.getPreferredInkingWidth();this.preferredColor=s,this.preferredStyle=c.toLowerCase(),this.preferredWidth=d,this._readStylusPanel.style.display="none",n.forEach(h=>{h.style.display="flex"})}catch{this._readStylusPanel.style.display="flex",n.forEach(c=>{c.style.display="none"}),i&&this._emitErrorToast("Could not read the customizations from the stylus.")}});ft(this,"_showStylusCustomizationsDrawer",async r=>{this._readStylusCustomizations(r,!1),this._drawer.show()});this._currentLineStyle="pencil",this._currentLineColor="#000000",this._currentLineWidth=1,this._preferredWidth=1,this._preferredColor="#000000",this._preferredStyle="pencil",this._drawWithCustomizations=!1,eh("my-icons",{resolver:r=>`icons/${r}.svg`,mutator:r=>r.setAttribute("fill","currentColor")})}static get properties(){return{currentLineStyle:{type:String,reflectToAttribute:!0,attribute:!0},currentLineColor:{type:String,reflectToAttribute:!0,attribute:!0},currentLineWidth:{type:Number,reflectToAttribute:!0,attribute:!0},preferredStyle:{type:String,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},drawWithCustomizations:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}firstUpdated(){this._colorPicker=this.shadowRoot.querySelector("#color-picker"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._lineWidthRange=this.shadowRoot.querySelector("#line-width-range"),this._penCustomizationsButton=this.shadowRoot.querySelector("#pen-customizations-button"),this._customizationsSwitch=this.shadowRoot.querySelector("#draw-customizations-switch"),bd()?console.log("Pen Customizations are supported."):(console.log("Pen Customizations are not supported."),this._penCustomizationsButton.style.display="none"),this._readStylusPanel=this.shadowRoot.querySelector("#read-stylus-panel")}_styleSelected(r,i){switch(this.currentLineStyle=r,r){case"ink":this.currentLineWidth=6;break;case"pencil":this.currentLineWidth=1;break;case"marker":this.currentLineWidth=12;break;case"highlighter":this.currentLineWidth=24,this.currentLineColor="#FFFF00";break;case"brush":this.currentLineWidth=14;break;default:console.log("Unsupported pen style ",r)}this._drawWithCustomizations&&(this.preferredStyle!=this.currentLineStyle&&this._writePreferredStyle(i,!1),this._updateLineColorCustomization(i,!1),this._updateLineWidthCustomization(i,!1))}_colorSelected(r){this.currentLineColor=this._colorPicker.value.toUpperCase(),this._pendingWriteEvent&&this._updateLineColorCustomization(this._pendingWriteEvent,!1)}_savePointerEventToWrite(r){this._pendingWriteEvent=r}_clearPointerEventToWrite(){this._pendingWriteEvent=null,this._drawWithCustomizations&&(this.currentLineColor=this.preferredColor)}set currentLineColor(r){let i=this._currentLineColor;this._currentLineColor=r,this._colorPicker.value!=r&&(this._colorPicker.value=r);let n=new CustomEvent("lineColor-changed",{detail:{lineColor:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineColor",i)}get currentLineColor(){return this._currentLineColor}set currentLineStyle(r){let i=this._currentLineStyle;this._currentLineStyle=r;let n=new CustomEvent("lineStyle-changed",{detail:{lineStyle:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineStyle",i)}get currentLineStyle(){return this._currentLineStyle}set currentLineWidth(r){let i=this._currentLineWidth;this._currentLineWidth=r,this._lineWidthRange.value=r;let n=new CustomEvent("lineWidth-changed",{detail:{lineWidth:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("currentLineWidth",i)}get currentLineWidth(){return this._currentLineWidth}set preferredColor(r){let i=this._preferredColor;this._preferredColor=r;let n=new CustomEvent("preferredColor-changed",{detail:{preferredColor:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredColor",i)}get preferredColor(){return this._preferredColor}set preferredStyle(r){let i=this._preferredStyle;this._preferredStyle=r;let n=new CustomEvent("preferredStyle-changed",{detail:{preferredStyle:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredStyle",i)}get preferredStyle(){return this._preferredStyle}set preferredWidth(r){let i=this._preferredWidth;this._preferredWidth=r;let n=new CustomEvent("preferredWidth-changed",{detail:{preferredWidth:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("preferredWidth",i)}get preferredWidth(){return this._preferredWidth}set drawWithCustomizations(r){let i=this._drawWithCustomizations;this._drawWithCustomizations=r;let n=new CustomEvent("drawWithCustomizations-changed",{detail:{drawWithCustomizations:r},bubbles:!0,composed:!0});this.dispatchEvent(n),this.requestUpdate("drawWithCustomizations",i)}get drawWithCustomizations(){return this._drawWithCustomizations}_lineWidthChanged(){this.currentLineWidth=this._lineWidthRange.value,this._drawWithCustomizations&&this._pendingWriteEvent&&this._updateLineWidthCustomization(this._pendingWriteEvent,!1)}_escapeHtml(r){const i=document.createElement("div");return i.textContent=r,i.innerHTML}_createToastNotification(r,i="success",n="check2-circle",s=4e3){const c=Object.assign(document.createElement("sl-alert"),{variant:i,closable:!0,duration:s,innerHTML:`
                <sl-icon name="${n}" slot="icon"></sl-icon>
                ${this._escapeHtml(r)}
            `});return this.shadowRoot.append(c),c.toast()}_emitSuccessToast(r){this._createToastNotification(r)}_emitWarningToast(r){this._createToastNotification(r,"warning","exclamation-triangle")}_emitErrorToast(r){this._createToastNotification(r,"danger","exclamation-octagon")}_drawWithCustomizationsSwitchChanged(){this.drawWithCustomizations=this._customizationsSwitch.checked,this.drawWithCustomizations&&(this.currentLineColor=this.preferredColor,this.currentLineStyle=this.preferredStyle,this.currentLineWidth=this.preferredWidth)}render(){return ne`
            <div class="content">
                <drawing-button name="pencil" label="pencil"
                    ?selected="${this.currentLineStyle==="pencil"}"
                    @pointerdown="${r=>this._styleSelected("pencil",r)}">
                </drawing-button>
                <drawing-button name="pen" label="pen"
                    ?selected="${this.currentLineStyle==="ink"}"
                    @pointerdown="${r=>this._styleSelected("ink",r)}">
                </drawing-button>
                <drawing-button name="brush" label="brush"
                    ?selected="${this.currentLineStyle==="brush"}"
                    @pointerdown="${r=>this._styleSelected("brush",r)}">
                </drawing-button>
                <drawing-button name="marker" library="my-icons"
                    ?selected="${this.currentLineStyle==="marker"}"
                    @pointerdown="${r=>this._styleSelected("marker",r)}">
                </drawing-button>
                <drawing-button library="my-icons" name="highlighter"
                    ?selected="${this.currentLineStyle==="highlighter"}"
                    @pointerdown="${r=>this._styleSelected("highlighter",r)}">
                </drawing-button>
                <sl-color-picker
                    id="color-picker"
                    format="hex" size="small" label="Select a color" value="#000000"
                    @sl-change="${()=>this._colorSelected()}"
                    @pointerdown="${r=>this._savePointerEventToWrite(r)}"
                    @pointerup="${()=>this._clearPointerEventToWrite()}">
                </sl-color-picker>
                <sl-dropdown placement="right-start" distance=10>
                    <drawing-button slot="trigger" caret class="line-width-button" 
                            name="border-width" label="drawing line width">
                    </drawing-button>
                    <div class="line-width-panel">
                        <div class="line-width-title"> Drawing Line Width</div>
                        <sl-range id="line-width-range" min="1" max="50" 
                            @sl-change="${()=>this._lineWidthChanged()}"
                            @pointerdown="${r=>this._savePointerEventToWrite(r)}"
                            @pointerup="${()=>this._clearPointerEventToWrite()}">
                        </sl-range>
                        Current width: ${this.currentLineWidth} px
                    </div>
                </sl-dropdown>
                <div class="expand"></div>
                <drawing-button id="pen-customizations-button"
                    library="my-icons" name="pen_customizations"
                    @pointerdown="${r=>this._showStylusCustomizationsDrawer(r)}">
                </drawing-button>
                <sl-drawer label="Stylus Customizations" id="drawer" placement="start">
                    <div class="drawer-content">
                        <div class="pen-customizations-actions">
                            <img src="icons/pen_customizations_visual.svg" 
                                alt="picture of a stylus with a memory" class="stylus-visual"/>
                            <div class="title border border-top">Stylus</div>
                            <div class="title"></div>
                            <div class="title border border-top">Editor</div>
                            <div id="read-stylus-panel" class="border border-bottom">
                                Read preferences from stylus
                                <sl-tooltip content="Read preferences from stylus">
                                    <sl-button class="button">
                                        <sl-icon
                                            name="arrow-clockwise" label="Read from stylus"
                                            @pointerdown="${r=>this._readStylusCustomizations(r,!0)}"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border preferred">
                                <div class="category-title">Preferred Color</div>
                                <div class="color-box" style="background-color: ${this.preferredColor}"></div>
                                <div class="color-text">${this.preferredColor}</div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred color to stylus">
                                    <sl-button class="button" @pointerdown="${this._writePreferredColor}">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred color to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred color from stylus">
                                    <sl-button class="button" @pointerdown="${this._readAndSetPreferredColor}">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred color from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border">
                                <div class="category-title">Drawing Color</div>
                                <div class="color-box" style="background-color: ${this.currentLineColor}"></div>
                                <div class="color-text">${this.currentLineColor}</div>
                            </div>
                            <div class="category border preferred">
                                <div class="category-title">Preferred Width</div>
                                <div class="value">${this._preferredWidth} px</div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred width to stylus">
                                    <sl-button class="button" @pointerdown="${this._writePreferredWidth}">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred width to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred width from stylus">
                                    <sl-button class="button" @pointerdown="${this._readAndSetPreferredWidth}">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred width from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border">
                                <div class="category-title">Drawing Width</div>
                                <div class="value">${this.currentLineWidth} px</div>
                            </div>
                            <div class="category border border-bottom preferred">
                                <div class="category-title">Preferred Style</div>
                                <div class="value">${this._preferredStyle}</div>
                            </div>
                            <div class="category">
                                <sl-tooltip content="Send preferred style to stylus">
                                    <sl-button class="button" @pointerdown="${this._writePreferredStyle}">
                                        <sl-icon library="my-icons" name="left-arrow" label="Send preferred style to stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                                <sl-tooltip content="Read preferred style from stylus">
                                    <sl-button class="button" @pointerdown="${this._readAndSetPreferredStyle}">
                                        <sl-icon library="my-icons" name="right-arrow" label="Read preferred style from stylus"></sl-icon>
                                    </sl-button>
                                </sl-tooltip>
                            </div>
                            <div class="category border border-bottom">
                                <div class="category-title">Drawing Style</div>
                                <div class="value">${this.currentLineStyle}</div>
                            </div>
                        </div>
                        <sl-divider></sl-divider>
                        <div class="draw-with-preferred">
                            <div class="draw-preferred-switch-title">Automatically load customizations from stylus and set them in the editor (when possible)</div>
                            <sl-switch id="draw-customizations-switch" @sl-change="${this._drawWithCustomizationsSwitchChanged}"></sl-switch>
                        </div>
                    </div>
                </sl-drawer>
            </div>
        `}}ft(Cd,"styles",Le`
        :host {
            border-right: solid 1px black;
            border-top: solid 1px black;
        }

        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        }

        .content {
            height: 90vh;
            display: flex;
            flex-direction: column;
            margin-left: 4px;
            margin-right: 4px;
            margin-top: 10px;
            align-items: center;
            justify-content: space-between;
        }

        sl-color-picker {
            margin-top: 10px;
        }

        sl-color-picker::part(trigger) {
            border-radius: 0px;
        }

        sl-dropdown {
            margin-top: 10px;
        }

        .line-width-panel {
            border: solid 2px black;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            background-color: white;
            text-align: center;
            padding-bottom: 10px;
        }

        .line-width-title {
            background-color: #313030;
            color: #cbcbcb;
            font-size: 20px;
            padding: 10px;
        }

        sl-range {
            height: 100%;
            margin: 10px;
        }

        .expand {
            flex-grow: 1;
        }

        .stylus-visual {
            height: 100%;
            grid-row-start: 1;
            grid-row-end: span 4;
        }

        .pen-customizations-actions {
            height: 80%;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 10% auto;
        }

        #drawer {
            --size: 60vw;
        }

        #drawer::part(close-button__base) {
            background-color: #525151;
            border: solid 1px #000000;
            color: #a2a2a2;
        }

        #drawer::part(close-button__base):hover {
            color: #ececec;
            border: solid 1px #ececec;
        }

        #drawer::part(header) {
            background-color: #313030;
            color: white;
        }

        .drawer-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        
        .color-box {
            border-radius: 4px;
            width: 50px;
            height: 50px;
            border-color: solid 2px black;
            background-color: black;
        }

        .category {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .arrows {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .title {
            font-size: 3vw;
            text-align: center;
            text-decoration: underline;
            padding-left: 10px;
            padding-right: 10px;
        }

        .value {
            font-weight: bold;
        }

        .category-title {
            text-decoration: underline;
            margin-bottom: 10px;
            height: 33%;
        }

        .color-text {
            height: 33%;
            margin-top: 10px;
        }

        sl-button {
            width: 100px;
        }

        sl-icon {
            font-size: 40px;
        }

        sl-button.button::part(base) {
            background-color: #525151;
            border-color: white;
            color: #ffffff;
            margin-top: 10px;
        }

        sl-button:not([disabled]).button::part(base):hover {
            color: #ececec;
            border-color: black;
        }

        .border {
            border-width: 0px 6px 0px 6px;
            border-color: black;
            border-style: solid;
        }

        .border-top {
            border-top: solid 6px black;
            border-radius: 4px 4px 0px 0px;
        }

        .border-bottom {
            border-bottom: solid 6px black;
            border-radius: 0px 0px 4px 4px;
        }

        .draw-with-preferred {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .arrow {
            height: 50px;
            margin-top: 10px;
        }

        #read-stylus-panel {
            display: none;
            grid-row: span 3;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    `);customElements.define("drawing-toolbar",Cd);var xs=function(e,t){return xs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n])},xs(e,t)};function Yg(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");xs(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Pi=function(){return Pi=Object.assign||function(t){for(var r,i=1,n=arguments.length;i<n;i++){r=arguments[i];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},Pi.apply(this,arguments)};function Ot(e,t,r,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var d=e.length-1;d>=0;d--)(c=e[d])&&(s=(n<3?c(s):n>3?c(t,r,s):c(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zg=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(c){customElements.define(r,c)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qg=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Se(e){return(t,r)=>r!==void 0?((i,n,s)=>{n.constructor.createProperty(s,i)})(e,t,r):Qg(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jg=({finisher:e,descriptor:t})=>(r,i)=>{var n;if(i===void 0){const s=(n=r.originalKey)!==null&&n!==void 0?n:r.key,c=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(r.key)}:{...r,key:s};return e!=null&&(c.finisher=function(d){e(d,s)}),c}{const s=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pr(e,t){return Jg({descriptor:r=>{const i={get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var s,c;return this[n]===void 0&&(this[n]=(c=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&c!==void 0?c:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var is;((is=window.HTMLSlotElement)===null||is===void 0?void 0:is.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{var e,t,r;const i=Symbol(),n=Symbol(),s=Symbol(),c=Symbol(),d=Symbol(),h=Symbol(),a=Symbol(),l=Symbol(),o=Symbol(),u=Symbol(),p=Symbol(),f=Symbol(),g=Symbol();class b{constructor(){this[e]=[],this[t]=[],this[r]=new Set}destructor(){this[o](this[s]);const w=this;w[i]=null,w[s]=null,w[n]=null}get top(){const w=this[i];return w[w.length-1]||null}push(w){!w||w===this.top||(this.remove(w),this[h](w),this[i].push(w))}remove(w){const A=this[i].indexOf(w);return A===-1?!1:(this[i].splice(A,1),A===this[i].length&&this[h](this.top),!0)}pop(){const w=this.top;return w&&this.remove(w),w}has(w){return this[i].indexOf(w)!==-1}[(e=i,t=s,r=n,h)](w){const A=this[n],$=this[s];if(!w){this[o]($),A.clear(),this[s]=[];return}const P=this[u](w);if(P[P.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=P;const L=this[p](w);if(!$.length){this[l](P,L,A);return}let M=$.length-1,z=P.length-1;for(;M>0&&z>0&&$[M]===P[z];)M--,z--;$[M]!==P[z]&&this[a]($[M],P[z]),M>0&&this[o]($.slice(0,M)),z>0&&this[l](P.slice(0,z),L,null)}[a](w,A){const $=w[c];this[f](w)&&!w.inert&&(w.inert=!0,$.add(w)),$.has(A)&&(A.inert=!1,$.delete(A)),A[d]=w[d],A[c]=$,w[d]=void 0,w[c]=void 0}[o](w){for(const A of w){A[d].disconnect(),A[d]=void 0;const P=A[c];for(const L of P)L.inert=!1;A[c]=void 0}}[l](w,A,$){for(const P of w){const L=P.parentNode,M=L.children,z=new Set;for(let B=0;B<M.length;B++){const V=M[B];V===P||!this[f](V)||A&&A.has(V)||($&&V.inert?$.add(V):(V.inert=!0,z.add(V)))}P[c]=z;const q=new MutationObserver(this[g].bind(this));P[d]=q;let N=L;const W=N;W.__shady&&W.host&&(N=W.host),q.observe(N,{childList:!0})}}[g](w){const A=this[s],$=this[n];for(const P of w){const L=P.target.host||P.target,M=L===document.body?A.length:A.indexOf(L),z=A[M-1],q=z[c];for(let N=0;N<P.removedNodes.length;N++){const W=P.removedNodes[N];if(W===z){console.info("Detected removal of the top Blocking Element."),this.pop();return}q.has(W)&&(W.inert=!1,q.delete(W))}for(let N=0;N<P.addedNodes.length;N++){const W=P.addedNodes[N];!this[f](W)||($&&W.inert?$.add(W):(W.inert=!0,q.add(W)))}}}[f](w){return/^(style|template|script)$/.test(w.localName)===!1}[u](w){const A=[];let $=w;for(;$&&$!==document.body;){if($.nodeType===Node.ELEMENT_NODE&&A.push($),$.assignedSlot){for(;$=$.assignedSlot;)A.push($);$=A.pop();continue}$=$.parentNode||$.host}return A}[p](w){const A=w.shadowRoot;if(!A)return null;const $=new Set;let P,L,M;const z=A.querySelectorAll("slot");if(z.length&&z[0].assignedNodes)for(P=0;P<z.length;P++)for(M=z[P].assignedNodes({flatten:!0}),L=0;L<M.length;L++)M[L].nodeType===Node.ELEMENT_NODE&&$.add(M[L]);return $}}document.$blockingElements=new b})();var ns=function(){function e(t,r){for(var i=0;i<r.length;i++){var n=r[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();function os(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(function(){if(typeof window>"u")return;var e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,r=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),i=function(){function a(l,o){os(this,a),this._inertManager=o,this._rootElement=l,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return ns(a,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(this._savedAriaHidden!==null?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(o){this._unmanageNode(o.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(o){var u=this;c(o,function(b){return u._visitNode(b)});var p=document.activeElement;if(!document.body.contains(o)){for(var f=o,g=void 0;f;){if(f.nodeType===Node.DOCUMENT_FRAGMENT_NODE){g=f;break}f=f.parentNode}g&&(p=g.activeElement)}o.contains(p)&&(p.blur(),p===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(o){if(o.nodeType===Node.ELEMENT_NODE){var u=o;u!==this._rootElement&&u.hasAttribute("inert")&&this._adoptInertRoot(u),(t.call(u,r)||u.hasAttribute("tabindex"))&&this._manageNode(u)}}},{key:"_manageNode",value:function(o){var u=this._inertManager.register(o,this);this._managedNodes.add(u)}},{key:"_unmanageNode",value:function(o){var u=this._inertManager.deregister(o,this);u&&this._managedNodes.delete(u)}},{key:"_unmanageSubtree",value:function(o){var u=this;c(o,function(p){return u._unmanageNode(p)})}},{key:"_adoptInertRoot",value:function(o){var u=this._inertManager.getInertRoot(o);u||(this._inertManager.setInert(o,!0),u=this._inertManager.getInertRoot(o)),u.managedNodes.forEach(function(p){this._manageNode(p.node)},this)}},{key:"_onMutation",value:function(o,u){o.forEach(function(p){var f=p.target;if(p.type==="childList")e.call(p.addedNodes).forEach(function(b){this._makeSubtreeUnfocusable(b)},this),e.call(p.removedNodes).forEach(function(b){this._unmanageSubtree(b)},this);else if(p.type==="attributes"){if(p.attributeName==="tabindex")this._manageNode(f);else if(f!==this._rootElement&&p.attributeName==="inert"&&f.hasAttribute("inert")){this._adoptInertRoot(f);var g=this._inertManager.getInertRoot(f);this._managedNodes.forEach(function(b){f.contains(b.node)&&g._manageNode(b.node)})}}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return this._savedAriaHidden!==null}},{key:"savedAriaHidden",set:function(o){this._savedAriaHidden=o},get:function(){return this._savedAriaHidden}}]),a}(),n=function(){function a(l,o){os(this,a),this._node=l,this._overrodeFocusMethod=!1,this._inertRoots=new Set([o]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return ns(a,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var o=this._node;this._savedTabIndex!==null?o.setAttribute("tabindex",this._savedTabIndex):o.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete o.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var o=this.node;if(t.call(o,r)){if(o.tabIndex===-1&&this.hasSavedTabIndex)return;o.hasAttribute("tabindex")&&(this._savedTabIndex=o.tabIndex),o.setAttribute("tabindex","-1"),o.nodeType===Node.ELEMENT_NODE&&(o.focus=function(){},this._overrodeFocusMethod=!0)}else o.hasAttribute("tabindex")&&(this._savedTabIndex=o.tabIndex,o.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(o){this._throwIfDestroyed(),this._inertRoots.add(o)}},{key:"removeInertRoot",value:function(o){this._throwIfDestroyed(),this._inertRoots.delete(o),this._inertRoots.size===0&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return this._savedTabIndex!==null}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(o){this._throwIfDestroyed(),this._savedTabIndex=o},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),a}(),s=function(){function a(l){if(os(this,a),!l)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=l,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),d(l.head||l.body||l.documentElement),l.readyState==="loading"?l.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return ns(a,[{key:"setInert",value:function(o,u){if(u){if(this._inertRoots.has(o))return;var p=new i(o,this);if(o.setAttribute("inert",""),this._inertRoots.set(o,p),!this._document.body.contains(o))for(var f=o.parentNode;f;)f.nodeType===11&&d(f),f=f.parentNode}else{if(!this._inertRoots.has(o))return;var g=this._inertRoots.get(o);g.destructor(),this._inertRoots.delete(o),o.removeAttribute("inert")}}},{key:"getInertRoot",value:function(o){return this._inertRoots.get(o)}},{key:"register",value:function(o,u){var p=this._managedNodes.get(o);return p!==void 0?p.addInertRoot(u):p=new n(o,u),this._managedNodes.set(o,p),p}},{key:"deregister",value:function(o,u){var p=this._managedNodes.get(o);return p?(p.removeInertRoot(u),p.destroyed&&this._managedNodes.delete(o),p):null}},{key:"_onDocumentLoaded",value:function(){var o=e.call(this._document.querySelectorAll("[inert]"));o.forEach(function(u){this.setInert(u,!0)},this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(o,u){var p=this;o.forEach(function(f){switch(f.type){case"childList":e.call(f.addedNodes).forEach(function(E){if(E.nodeType===Node.ELEMENT_NODE){var w=e.call(E.querySelectorAll("[inert]"));t.call(E,"[inert]")&&w.unshift(E),w.forEach(function(A){this.setInert(A,!0)},p)}},p);break;case"attributes":if(f.attributeName!=="inert")return;var g=f.target,b=g.hasAttribute("inert");p.setInert(g,b);break}},this)}}]),a}();function c(a,l,o){if(a.nodeType==Node.ELEMENT_NODE){var u=a;l&&l(u);var p=u.shadowRoot;if(p){c(p,l);return}if(u.localName=="content"){for(var f=u,g=f.getDistributedNodes?f.getDistributedNodes():[],b=0;b<g.length;b++)c(g[b],l);return}if(u.localName=="slot"){for(var E=u,w=E.assignedNodes?E.assignedNodes({flatten:!0}):[],A=0;A<w.length;A++)c(w[A],l);return}}for(var $=a.firstChild;$!=null;)c($,l),$=$.nextSibling}function d(a){if(!a.querySelector("style#inert-style, link#inert-style")){var l=document.createElement("style");l.setAttribute("id","inert-style"),l.textContent=`
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`,a.appendChild(l)}}if(!HTMLElement.prototype.hasOwnProperty("inert")){var h=new s(document);Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(l){h.setInert(this,l)}})}})();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var at={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Pr={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},ss={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var tm=function(){function e(){this.rafIDs=new Map}return e.prototype.request=function(t,r){var i=this;this.cancel(t);var n=requestAnimationFrame(function(s){i.rafIDs.delete(t),r(s)});this.rafIDs.set(t,n)},e.prototype.cancel=function(t){var r=this.rafIDs.get(t);r&&(cancelAnimationFrame(r),this.rafIDs.delete(t))},e.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach(function(r,i){t.cancel(i)})},e.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach(function(r,i){t.push(i)}),t},e}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var em=function(){function e(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ti;(function(e){e.POLL_SCROLL_POS="poll_scroll_position",e.POLL_LAYOUT_CHANGE="poll_layout_change"})(Ti||(Ti={}));var rm=function(e){Yg(t,e);function t(r){var i=e.call(this,Pi(Pi({},t.defaultAdapter),r))||this;return i.dialogOpen=!1,i.isFullscreen=!1,i.animationFrame=0,i.animationTimer=0,i.escapeKeyAction=Pr.CLOSE_ACTION,i.scrimClickAction=Pr.CLOSE_ACTION,i.autoStackButtons=!0,i.areButtonsStacked=!1,i.suppressDefaultPressSelector=Pr.SUPPRESS_DEFAULT_PRESS_SELECTOR,i.animFrame=new tm,i.contentScrollHandler=function(){i.handleScrollEvent()},i.windowResizeHandler=function(){i.layout()},i.windowOrientationChangeHandler=function(){i.layout()},i}return Object.defineProperty(t,"cssClasses",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Pr},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return ss},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.hasClass(at.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(at.FULLSCREEN)},t.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},t.prototype.open=function(r){var i=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(at.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),r&&r.isAboveFullscreenDialog&&this.adapter.addClass(at.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){i.adapter.addClass(at.OPEN),i.adapter.addBodyClass(at.SCROLL_LOCK),i.layout(),i.animationTimer=setTimeout(function(){i.handleAnimationTimerEnd(),i.adapter.trapFocus(i.adapter.getInitialFocusEl()),i.adapter.notifyOpened()},ss.DIALOG_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(r){var i=this;r===void 0&&(r=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(r),this.adapter.addClass(at.CLOSING),this.adapter.removeClass(at.OPEN),this.adapter.removeBodyClass(at.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.adapter.releaseFocus(),i.handleAnimationTimerEnd(),i.adapter.notifyClosed(r)},ss.DIALOG_ANIMATION_CLOSE_TIME_MS))},t.prototype.showSurfaceScrim=function(){var r=this;this.adapter.addClass(at.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){r.adapter.addClass(at.SURFACE_SCRIM_SHOWN)})},t.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(at.SURFACE_SCRIM_SHOWN),this.adapter.addClass(at.SURFACE_SCRIM_HIDING)},t.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(at.SURFACE_SCRIM_HIDING),this.adapter.removeClass(at.SURFACE_SCRIM_SHOWING)},t.prototype.isOpen=function(){return this.dialogOpen},t.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},t.prototype.setEscapeKeyAction=function(r){this.escapeKeyAction=r},t.prototype.getScrimClickAction=function(){return this.scrimClickAction},t.prototype.setScrimClickAction=function(r){this.scrimClickAction=r},t.prototype.getAutoStackButtons=function(){return this.autoStackButtons},t.prototype.setAutoStackButtons=function(r){this.autoStackButtons=r},t.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},t.prototype.setSuppressDefaultPressSelector=function(r){this.suppressDefaultPressSelector=r},t.prototype.layout=function(){var r=this;this.animFrame.request(Ti.POLL_LAYOUT_CHANGE,function(){r.layoutInternal()})},t.prototype.handleClick=function(r){var i=this.adapter.eventTargetMatches(r.target,Pr.SCRIM_SELECTOR);if(i&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var n=this.adapter.getActionFromEvent(r);n&&this.close(n)}},t.prototype.handleKeydown=function(r){var i=r.key==="Enter"||r.keyCode===13;if(!!i){var n=this.adapter.getActionFromEvent(r);if(!n){var s=r.composedPath?r.composedPath()[0]:r.target,c=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(s,this.suppressDefaultPressSelector):!0;i&&c&&this.adapter.clickDefaultButton()}}},t.prototype.handleDocumentKeydown=function(r){var i=r.key==="Escape"||r.keyCode===27;i&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},t.prototype.handleScrollEvent=function(){var r=this;this.animFrame.request(Ti.POLL_SCROLL_POS,function(){r.toggleScrollDividerHeader(),r.toggleScrollDividerFooter()})},t.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(at.OPENING),this.adapter.removeClass(at.CLOSING)},t.prototype.runNextAnimationFrame=function(r){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(r,0)})},t.prototype.detectStackedButtons=function(){this.adapter.removeClass(at.STACKED);var r=this.adapter.areButtonsStacked();r&&this.adapter.addClass(at.STACKED),r!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=r)},t.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(at.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(at.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},t.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(at.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(at.SCROLL_DIVIDER_HEADER):this.adapter.addClass(at.SCROLL_DIVIDER_HEADER)},t.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(at.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(at.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(at.SCROLL_DIVIDER_FOOTER)},t}(em);const im=rm;/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function di(e){return e===void 0&&(e=window),nm(e)?{passive:!0}:!1}function nm(e){e===void 0&&(e=window);var t=!1;try{var r={get passive(){return t=!0,!1}},i=function(){};e.document.addEventListener("test",i,r),e.document.removeEventListener("test",i,r)}catch{t=!1}return t}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function om(e,t){if(e.closest)return e.closest(t);for(var r=e;r;){if(kd(r,t))return r;r=r.parentElement}return null}function kd(e,t){var r=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return r.call(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function sm(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}const $d=()=>{},am={get passive(){return!1}};document.addEventListener("x",$d,am);document.removeEventListener("x",$d);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class lm extends Qt{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xi=e=>(t,r)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const i=t.constructor._observers;t.constructor._observers=new Map,i.forEach((n,s)=>t.constructor._observers.set(s,n))}}else{t.constructor._observers=new Map;const i=t.updated;t.updated=function(n){i.call(this,n),n.forEach((s,c)=>{const h=this.constructor._observers.get(c);h!==void 0&&h.call(this,this[c],s)})}}t.constructor._observers.set(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cm={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dm=e=>(...t)=>({_$litDirective$:e,values:t});class um{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tc=dm(class extends um{constructor(e){var t;if(super(e),e.type!==cm.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((r=this.st)===null||r===void 0)&&r.has(s))&&this.nt.add(s);return this.render(t)}const n=e.element.classList;this.nt.forEach(s=>{s in t||(n.remove(s),this.nt.delete(s))});for(const s in t){const c=!!t[s];c===this.nt.has(s)||((i=this.st)===null||i===void 0?void 0:i.has(s))||(c?(n.add(s),this.nt.add(s)):(n.remove(s),this.nt.delete(s)))}return Ve}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const as=document.$blockingElements;class Mt extends lm{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.initialSupressDefaultPressSelector="",this.mdcFoundationClass=im,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}set suppressDefaultPressSelector(t){this.mdcFoundation?this.mdcFoundation.setSuppressDefaultPressSelector(t):this.initialSupressDefaultPressSelector=t}get suppressDefaultPressSelector(){return this.mdcFoundation?this.mdcFoundation.getSuppressDefaultPressSelector():this.initialSupressDefaultPressSelector}get primaryButton(){let t=this.primarySlot.assignedNodes();t=t.filter(i=>i instanceof HTMLElement);const r=t[0];return r||null}emitNotification(t,r){const i={detail:r?{action:r}:{}},n=new CustomEvent(t,i);this.dispatchEvent(n)}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,r=this.querySelector(t);if(r)return r;const n=this.primarySlot.assignedNodes({flatten:!0}),s=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(s)return s;const d=this.secondarySlot.assignedNodes({flatten:!0}),h=this.searchNodeTreesForAttribute(d,this.initialFocusAttribute);if(h)return h;const l=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(l,this.initialFocusAttribute)}searchNodeTreesForAttribute(t,r){for(const i of t)if(i instanceof HTMLElement){if(i.hasAttribute(r))return i;{const n=i.querySelector(`[${r}]`);if(n)return n}}return null}createAdapter(){return Object.assign(Object.assign({},sm(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const t=this.primaryButton;t&&t.click()},eventTargetMatches:(t,r)=>t?kd(t,r):!1,getActionFromEvent:t=>{if(!t.target)return"";const r=om(t.target,`[${this.actionAttribute}]`);return r&&r.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const t=this.contentElement;return t?t.scrollHeight>t.offsetHeight:!1},notifyClosed:t=>this.emitNotification("closed",t),notifyClosing:t=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",t)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{as.remove(this)},trapFocus:t=>{!this.isConnected||(as.push(this),t&&t.focus())},registerContentEventHandler:(t,r)=>{this.contentElement.addEventListener(t,r)},deregisterContentEventHandler:(t,r)=>{this.contentElement.removeEventListener(t,r)},isScrollableContentAtTop:()=>{const t=this.contentElement;return t?t.scrollTop===0:!1},isScrollableContentAtBottom:()=>{const t=this.contentElement;return t?Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight:!1},registerWindowEventHandler:(t,r)=>{window.addEventListener(t,r,di())},deregisterWindowEventHandler:(t,r)=>{window.removeEventListener(t,r,di())}})}render(){const t={[at.STACKED]:this.stacked};let r=ne``;this.heading&&(r=this.renderHeading());const i={"mdc-dialog__actions":!this.hideActions};return ne`
    <div class="mdc-dialog ${Tc(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${r}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Tc(i)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}renderHeading(){return ne`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0),this.initialSupressDefaultPressSelector?this.suppressDefaultPressSelector=this.initialSupressDefaultPressSelector:this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,"mwc-textarea","mwc-menu mwc-list-item","mwc-select mwc-list-item"].join(", "),this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,as.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const t=this.getInitialFocusEl();t&&t.focus()}blur(){if(!this.shadowRoot)return;const t=this.shadowRoot.activeElement;if(t)t instanceof HTMLElement&&t.blur();else{const r=this.getRootNode(),i=r instanceof Document?r.activeElement:null;i instanceof HTMLElement&&i.blur()}}setEventListeners(){this.boundHandleClick&&this.mdcRoot.addEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,di()),this.boundHandleDocumentKeydown&&document.addEventListener("keydown",this.boundHandleDocumentKeydown,di())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&document.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}Ot([pr(".mdc-dialog")],Mt.prototype,"mdcRoot",void 0);Ot([pr('slot[name="primaryAction"]')],Mt.prototype,"primarySlot",void 0);Ot([pr('slot[name="secondaryAction"]')],Mt.prototype,"secondarySlot",void 0);Ot([pr("#contentSlot")],Mt.prototype,"contentSlot",void 0);Ot([pr(".mdc-dialog__content")],Mt.prototype,"contentElement",void 0);Ot([pr(".mdc-container")],Mt.prototype,"conatinerElement",void 0);Ot([Se({type:Boolean})],Mt.prototype,"hideActions",void 0);Ot([Se({type:Boolean}),Xi(function(){this.forceLayout()})],Mt.prototype,"stacked",void 0);Ot([Se({type:String})],Mt.prototype,"heading",void 0);Ot([Se({type:String}),Xi(function(e){this.mdcFoundation.setScrimClickAction(e)})],Mt.prototype,"scrimClickAction",void 0);Ot([Se({type:String}),Xi(function(e){this.mdcFoundation.setEscapeKeyAction(e)})],Mt.prototype,"escapeKeyAction",void 0);Ot([Se({type:Boolean,reflect:!0}),Xi(function(e){this.mdcFoundation&&this.isConnected&&(e?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))})],Mt.prototype,"open",void 0);Ot([Se()],Mt.prototype,"defaultAction",void 0);Ot([Se()],Mt.prototype,"actionAttribute",void 0);Ot([Se()],Mt.prototype,"initialFocusAttribute",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const hm=Le`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Es=class extends Mt{};Es.styles=[hm];Es=Ot([Zg("mwc-dialog")],Es);class Pd extends Qt{static get properties(){return{firmwareVersion:{type:String,reflectToAttribute:!0,attribute:!0},preferredColor:{type:String,reflectToAttribute:!0,attribute:!0},preferredWidth:{type:Number,reflectToAttribute:!0,attribute:!0},productId:{type:String,reflectToAttribute:!0,attribute:!0},protocolVersion:{type:String,reflectToAttribute:!0,attribute:!0},style:{type:String,reflectToAttribute:!0,attribute:!0},vendorId:{type:String,reflectToAttribute:!0,attribute:!0}}}set firmwareVersion(t){let r=this._firmwareVersion;this._firmwareVersion=t,this.requestUpdate("firmwareVersion",r)}get firmwareVersion(){return this._firmwareVersion}set preferredColor(t){let r=this.preferredColor;this._preferredColor=t,this.requestUpdate("preferredColor",r)}get preferredColor(){return this._preferredColor}set preferredWidth(t){let r=this._preferredWidth;this._preferredWidth=t,this.requestUpdate("preferredWidth",r)}get preferredWidth(){return this._preferredWidth}set productId(t){let r=this._productId;this._productId=t,this.requestUpdate("productId",r)}get productId(){return this._productId}set protocolVersion(t){let r=this._protocolVersion;this._protocolVersion=t,this.requestUpdate("protocolVersion",r)}get protocolVersion(){return this._protocolVersion}set style(t){let r=this._style;this._style=t,this.requestUpdate("style",r)}get style(){return this._style}set vendorId(t){let r=this._vendorId;this._vendorId=t,this.requestUpdate("vendorId",r)}get vendorId(){return this._vendorId}constructor(){super()}show(t){t&&(this.vendorId=t.firmware.vendorId,this.productId=t.firmware.productId,this.firmwareVersion=t.firmware.firmwareVersion,this.protocolVersion=t.protocol.protocolVersion,this.preferredColor=t.preferredColor,this.preferredWidth=t.preferredWidth,this.style=t.style,this.shadowRoot.getElementById("usi-mwc-dialog").show())}render(){return ne`
    <mwc-dialog id="usi-mwc-dialog" heading="USI Stylus Info" scrimClickAction="">
    <div class="grid">
    <div class="name">Vendor id</div><div class="value">${String(this.vendorId)}</div>
    <div class="name">Product id</div><div class="value">${String(this.productId)}</div>
    <div class="name">Firmware version</div><div class="value">${String(this.firmwareVersion)}</div>
    <div class="name">USI version</div><div class="value">${String(this.protocolVersion)}</div>
    <div class="name">Preferred Color</div><div class="value">${String(this.preferredColor)}</div>
    <div class="name">Preferred Width</div><div class="value">${String(this.preferredWidth)}</div>
    <div class="name">Style</div><div class="value">${String(this.style)}</div>
    </div>
    <mwc-button dialogAction="ok" slot="primaryAction">ok</mwc-button>
  </mwc-dialog>`}}ft(Pd,"styles",Le`
    :host {
      user-select: none;
      touch-action: none;
    }

    mwc-dialog {
      --mdc-dialog-min-width: 500px;
      --mdc-dialog-min-height: 400px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
      font-size: 12px;
      text-align: left;
      border-radius: 20px;
    }

    .name {
      padding: 5px;
    }

    .value {
      padding: 5px;
      font-weight: bold;
    }
  `);customElements.define("usi-dialog",Pd);fs("/tiny-canvas/");class Td extends Qt{constructor(){super();ft(this,"_deleteAllPaths",async r=>{this._mainCanvas.deleteAllPaths()});ft(this,"_onDragStart",async r=>{this._initialX=r.x-this._xOffset,this._initialY=r.y-this._yOffset,r.target===this._infoPanel&&(this._dragActive=!0)});ft(this,"_onDrag",async r=>{this._dragActive&&(r.preventDefault(),this._currentX=r.clientX-this._initialX,this._currentY=r.clientY-this._initialY,this._xOffset=this._currentX,this._yOffset=this._currentY,this._infoPanel.style.transform="translate3d("+this._currentX+"px, "+this._currentY+"px, 0)")});ft(this,"_onDragEnd",async r=>{this._initialX=this._currentX,this._initialY=this._currentY,this._dragActive=!1});this._renderingType=null,this._rafId=null,this._dragActive=!1,this._currentX=0,this._currentY=0,this._initialX=0,this._initialY=0,this._xOffset=0,this._yOffset=0,this._defaultIdleTimeout=50,this._currentEvent=null,this._previousEvent=null,this._pointerLatencySamples=new ug(60)}set currentEvent(r){this._previousEvent=this._currentEvent,this._currentEvent=r,this._isIdle=!1,clearTimeout(this._idleTimer),this._idleTimer=setTimeout(this._onIdle.bind(this),this._defaultIdleTimeout)}get currentEvent(){return this._currentEvent}firstUpdated(){const r=this.shadowRoot.querySelector("#settings-button"),i=this.shadowRoot.querySelector("#settings-dialog");r.addEventListener("click",()=>i.show()),this._swAlert=this.shadowRoot.querySelector("#sw-alert"),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new pu("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSWAlert()),this._wb.addEventListener("externalwaiting",()=>this._showSWAlert()),this._wbRegistration=await this._wb.register()}),this._switchRenderingType("js-canvas",!0),this._usiDialog=this.shadowRoot.querySelector("#usi-dialog"),this._infoButton=this.shadowRoot.querySelector("#info-button"),this._infoButton.onpointerdown=this._toggleInfoPanel.bind(this),this._undoButton=this.shadowRoot.querySelector("#undo-button"),this._undoButton.onpointerdown=this._undoPath.bind(this),this._redoButton=this.shadowRoot.querySelector("#redo-button"),this._redoButton.onpointerdown=this._redoPath.bind(this),this._deleteButton=this.shadowRoot.querySelector("#delete-button"),this._deleteButton.onpointerdown=this._deleteAllPaths.bind(this),this._undoButton.disabled=!0,this._redoButton.disabled=!0,this._infoPanel=this.shadowRoot.querySelector("#info-panel"),this._infoPanel.style.visibility="hidden",this._infoPanel.onpointerdown=this._onDragStart.bind(this),this._infoPanel.onpointermove=this._onDrag.bind(this),this._infoPanel.onpointerup=this._onDragEnd.bind(this),this._toolbar=this.shadowRoot.querySelector("#toolbar")}_showSWAlert(){this._swAlert.show()}_reloadSW(){this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&cs(this._wbRegistration.waiting,{type:"SKIP_WAITING"})}_toggleInfoPanel(){this._infoPanel.style.visibility==="hidden"?(this._infoPanel.style.visibility="visible",this._rafId=window.requestAnimationFrame(this._onFrame.bind(this))):(this._infoPanel.style.visibility="hidden",this._rafId&&(window.cancelAnimationFrame(this._rafId),this._rafId=null))}_undoPath(){this._mainCanvas.undoPath()}_redoPath(){this._mainCanvas.redoPath()}_onFrame(r){if(!this._isIdle&&this._currentEvent){let i=performance.now()-this._currentEvent.timeStamp;this._pointerLatencySamples.push(i),this._updateInfoPanel(this._currentEvent)}this._rafId=window.requestAnimationFrame(this._onFrame.bind(this))}_onIdle(){this._isIdle=!0,this._pointerLatencySamples.clear()}_updateInfoPanel(r){if(this._infoPanel.eventType=r.type,this._infoPanel.pointerType=r.pointerType,this._infoPanel.pointerId=r.pointerId,this._infoPanel.isPrimary=r.isPrimary,this._infoPanel.width=r.width,this._infoPanel.height=r.height,this._infoPanel.positionX=this._roundDecimal(r.x,4),this._infoPanel.positionY=this._roundDecimal(r.y,4),typeof r.penCustomizationsDetails<"u")try{r.penCustomizationsDetails.getPreferredInkingColor().then(i=>{this._infoPanel.preferredColor=i}),r.penCustomizationsDetails.getPreferredInkingStyle().then(i=>{this._infoPanel.preferredStyle=i}),r.penCustomizationsDetails.getPreferredInkingWidth().then(i=>{this._infoPanel.preferredWidth=i})}catch{this._infoPanel.preferredColor=this._infoPanel.preferredWidth=this._infoPanel.preferredWidth="unavailable"}this._infoPanel.pressure=this._roundDecimal(r.pressure,4),this._infoPanel.tangentialPressure=this._roundDecimal(r.tangentialPressure,4),this._infoPanel.tiltX=this._roundDecimal(r.tiltX,4),this._infoPanel.tiltY=this._roundDecimal(r.tiltY,4),this._infoPanel.twist=this._roundDecimal(r.twist,4),this._infoPanel.avgLatency=this._pointerLatencySamples.avg().toFixed(1)}_roundDecimal(r,i){const n=Math.pow(10,i);return Math.round(r*n)/n}_switchRenderingType(r,i){if(this._renderingType===r&&this._mainCanvas._desynchronized===i)return;let n=document.createElement(r);this._mainCanvas&&(n.currentLineColor=this._mainCanvas.currentLineColor,n.currentLineStye=this._mainCanvas.currentLineStyle,n.currentLineWidth=this._mainCanvas.currentLineWidth,n.drawCoalescedEvents=this._mainCanvas.drawCoalescedEvents,n.drawPointsOnly=this._mainCanvas.drawPointsOnly,n.drawPredictedEvents=this._mainCanvas.drawPredictedEvents,n.drawWithCustomizations=this._mainCanvas.drawWithCustomizations,n.drawWithPressure=this._mainCanvas.drawWithPressure,n.highlightPredictedEvents=this._mainCanvas.highlightPredictedEvents,n.numOfPredictionPoints=this._mainCanvas.numOfPredictionPoints,n.pointerRawUpdate=this._mainCanvas.pointerRawUpdate,this._mainCanvas.remove()),this._mainCanvas=n,this._mainCanvas.app=this,this._mainCanvas.desynchronized=i,this._renderingType=r,this.shadowRoot.getElementById("main-canvas").appendChild(n)}_renderingTypeChanged(r){this._switchRenderingType(r.detail.renderingType,this._mainCanvas._desynchronized)}_desynchronizedEnabledChanged(r){this._renderingType&&this._mainCanvas._desynchronized!==r.detail.desynchronizedEnabled&&this._switchRenderingType(this._renderingType,r.detail.desynchronizedEnabled)}_lineColorChanged(r){this._mainCanvas.currentLineColor=r.detail.lineColor}_lineStyleChanged(r){this._mainCanvas.currentLineStyle=r.detail.lineStyle}_lineWidthChanged(r){this._mainCanvas.currentLineWidth=r.detail.lineWidth}_drawWithCustomizationsChanged(r){this._mainCanvas.drawWithCustomizations=r.detail.drawWithCustomizations}_pointerRawUpdateEnabledChanged(r){this._mainCanvas.pointerRawUpdate=r.detail.pointerRawUpdateEnabled}_pressureEventsEnabledChanged(r){this._mainCanvas.drawWithPressure=r.detail.pressureEventsEnabled}_predictedEventsEnabledChanged(r){this._mainCanvas.drawPredictedEvents=r.detail.predictedEventsEnabled}_predictedEventsHighlightEnabledChanged(r){this._mainCanvas.highlightPredictedEvents=r.detail.predictedEventsHighlightEnabled}_predictionTypeChanged(r){this._mainCanvas.predictionType=r.detail.predictionType}_numOfPredictionPointsChanged(r){this._mainCanvas.numOfPredictionPoints=r.detail.numOfPredictionPoints}_coalescedEventsEnabledChanged(r){this._mainCanvas.drawCoalescedEvents=r.detail.coalescedEventsEnabled}_drawPointsOnlyEnabledChanged(r){this._mainCanvas.drawPointsOnly=r.detail.drawPointsOnlyEnabled}_usiInfoDialogPressed(r){this._usiDialog.show(r.detail.usiInfo)}_pathsChanged(r){let i=r.detail.paths;i.length===0?(this._undoButton.disabled=!0,this._redoButton.disabled=!0,this._redoButton.closest("sl-tooltip").disabled=!0,this._undoButton.closest("sl-tooltip").disabled=!0):(this._undoButton.disabled=!i[0].display,this._redoButton.disabled=!!i[i.length-1].display,this._undoButton.closest("sl-tooltip").disabled=this._undoButton.disabled,this._redoButton.closest("sl-tooltip").disabled=this._redoButton.disabled)}_customizationsChanged(r){this._toolbar.currentLineColor=r.detail.currentPreferredColor,this._toolbar.currentLineStyle=r.detail.currentPreferredStyle,this._toolbar.currentLineWidth=r.detail.currentPreferredWidth}render(){return ne`
      <div class="main-content">
        <div class="button-group-toolbar">
          <div class="title">Tiny Canvas</div>
          <sl-button-group label="History">
            <sl-tooltip content="Undo">
              <sl-button id="undo-button" class="button">
                <sl-icon name="arrow-counterclockwise" label="Undo"></sl-icon>
              </sl-button>
            </sl-tooltip>
            <sl-tooltip content="Redo">
              <sl-button id="redo-button" class="button">
                <sl-icon name="arrow-clockwise" label="Redo"></sl-icon>
              </sl-button>
            </sl-tooltip>
            <sl-tooltip content="Clear Drawing">
              <sl-button id="delete-button" class="button">
                <sl-icon name="x-circle" label="Clear Canvas"></sl-icon>
              </sl-button>
            </sl-tooltip>
          </sl-button-group>
          <sl-button-group label="Misc">
          <sl-tooltip content="Events Debug Panel">
            <sl-button id="info-button" class="button">
              <sl-icon name="info-circle" label="Pointer Events Information"></sl-icon>
            </sl-button>
          </sl-tooltip>
          <sl-tooltip content="Settings" placement="bottom">
            <sl-button id="settings-button" class="button">
              <sl-icon name="gear" label="Application Preferences"></sl-icon>
            </sl-button>
          </sl-tooltip>
          </sl-button-group>
        </div>
        <div id="background-canvas">
          <drawing-toolbar
            id="toolbar"
            @lineColor-changed=${this._lineColorChanged}
            @lineStyle-changed=${this._lineStyleChanged}
            @lineWidth-changed=${this._lineWidthChanged}
            @drawWithCustomizations-changed=${this._drawWithCustomizationsChanged}>
          </drawing-toolbar>
          <main-canvas id="main-canvas" @paths-changed="${this._pathsChanged}" @customizations-changed="${this._customizationsChanged}"></main-canvas>
        </div>
    </div>
    <settings-dialog id="settings-dialog"
      @renderingType-changed=${this._renderingTypeChanged}
      @desynchronizedEnabled-changed=${this._desynchronizedEnabledChanged}
      @pointerRawUpdateEnabled-changed=${this._pointerRawUpdateEnabledChanged}
      @pressureEventsEnabled-changed=${this._pressureEventsEnabledChanged}
      @predictedEventsEnabled-changed=${this._predictedEventsEnabledChanged}
      @predictedEventsHighlightEnabled-changed=${this._predictedEventsHighlightEnabledChanged}
      @predictionType-changed=${this._predictionTypeChanged}
      @numOfPredictionPoints-changed=${this._numOfPredictionPointsChanged}
      @coalescedEventsEnabled-changed=${this._coalescedEventsEnabledChanged}
      @drawPointsOnlyEnabled-changed=${this._drawPointsOnlyEnabledChanged}></settings-dialog>
    <info-panel id="info-panel"></info-panel>
    <usi-dialog id="usi-dialog"></usi-dialog>
    <div class="alert-sw">
      <sl-alert id="sw-alert" variant="primary" closable duration="10000">
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        <div class="text-sw">
          <strong>A newer version of the application is available</strong>
        </div>
        Please reload to update: 
        <sl-button class="reload" size="small" @click="${this._reloadSW}">Reload</sl-button>
      </sl-alert>
    </div>`}}ft(Td,"styles",Le`
    :host {
      width: 100vw;
      height: 100vh;
      font-family: var(--sl-input-font-family);
      font-size: var(--sl-input-font-size-medium);
      font-weight: var(--sl-input-font-weight);
      color: var(--sl-input-color);
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .drawer-content {
      width: 100%;
      height: 80vh;
    }

    tiny-toolbar {
      width: 20vw;
      height: 100vh;
    }

    js-canvas, pathkit-canvas {
      width: 100%;
      height: 100%;
    }

    info-panel {
      position: absolute;
      top: 5vh;
      right: 20px;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      width: 100%;
    }

    .button-group-toolbar {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5vh;
      justify-content: space-evenly;
      padding-left: 5px;
      padding-right: 5px;
      background-color: #313030;
      border: solid 1px #202020;
    }
    
    .button-group-toolbar sl-button-group:not(:last-of-type) {
      margin-right: var(--sl-spacing-x-small);
    }

    #background-canvas {
      background-color: #313030;
      width: 100vw;
      height: 95vh;
      display: flex;
    }

    #main-canvas {
      height: 95vh;
      display: flex;
      background-color: white;
      flex-grow: 1;
    }

    drawing-toolbar {
      height: 95vh;
      flex-basis: 50px;
      flex-grow: 0;
      flex-shrink: 0;
    }

    .title {
      flex-grow: 2;
      font-size: 2em;
      text-align: left;
      font-family: 'Dancing Script';
      color: #cbcbcb;
    }

    sl-button.button::part(base) {
      background-color: #525151;
      border-color: #000000;
      color: #a2a2a2;
    }

    sl-button:not([disabled]).button::part(base):hover {
      color: #ececec;
      border-color:#ececec;
    }

    .alert-sw {
      position: absolute;
      bottom: 3vh;
      left: 1vw;
      z-index: 5;
    }

    .text-sw {
      padding-bottom: 10px;
    }

    .reload {
      margin-left: 5px;
    }
  `);customElements.define("main-application",Td);
