/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=t=>new s("string"==typeof t?t:t+"",e),o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)})(t):t;var r;const l=window.reactiveElementPolyfillSupport,a={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:h};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=c){var s,n;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:a.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var i,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:a.fromAttribute;this._$Ei=r,this[r]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var u;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:d}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.0.1");const p=globalThis.trustedTypes,m=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,g="?"+v,f=`<${g}>`,y=document,$=(t="")=>y.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,b=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,x=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,C=/"/g,k=/^(?:script|style|textarea)$/i,P=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),U=P(1),H=(P(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),N=new WeakMap,R=y.createTreeWalker(y,129,null,!1),M=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=A;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===A?"!--"===a[1]?r=w:void 0!==a[1]?r=x:void 0!==a[2]?(k.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=E):void 0!==a[3]&&(r=E):r===E?">"===a[0]?(r=null!=n?n:A,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?E:'"'===a[3]?C:S):r===C||r===S?r=E:r===w||r===x?r=A:(r=E,n=void 0);const d=r===E&&t[e+1].startsWith("/>")?" ":"";o+=r===A?i+f:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+v+d):i+v+(-2===h?(s.push(void 0),e):d)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(l):l,s]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[a,h]=M(t,e);if(this.el=O.createElement(a,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(v)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(v),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?L:"?"===e[1]?D:"@"===e[1]?V:B})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(k.test(s.tagName)){const t=s.textContent.split(v),e=t.length-1;if(e>0){s.textContent=p?p.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],$()),R.nextNode(),l.push({type:2,index:++n});s.append(t[e],$())}}}else if(8===s.nodeType)if(s.data===g)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(v,t+1));)l.push({type:7,index:n}),t+=v.length-1}n++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,s){var n,o,r,l;if(e===H)return e;let a=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=_(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=j(t,a._$AS(t,e.values),a,s)),e}class z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(i,!0);R.currentNode=n;let o=R.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new I(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new F(o,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(o=R.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,s){var n;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),_(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return b(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==T&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=O.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new z(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new O(t)),e}M(t){b(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new I(this.A($()),this.A($()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,s,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=j(this,t,e,0),o=!_(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=j(this,s[i+r],e,r),l===H&&(l=this._$AH[r]),o||(o=!_(l)||l!==this._$AH[r]),l===T?t=T:t!==T&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.k(t)}k(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===T?void 0:t}}class D extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==T?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends B{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:T)===H)return;const s=this._$AH,n=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==T&&(s===T||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const W=window.litHtmlPolyfillSupport;var q,Y;null==W||W(O,I),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.0.1");class K extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new I(e.insertBefore($(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}K.finalized=!0,K._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:K});const J=globalThis.litElementPolyfillSupport;null==J||J({LitElement:K}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.0.1");const Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};var X=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};window.location.pathname;let G=class extends K{constructor(){super(...arguments),this.open=!1,this.url=window.location.pathname,this.path="Home"}render(){const t=U`
      <div class="my21">
        <div class="my22">
          <h1>A galactic design with me</h1>
          <button>newest CV</button>
        </div>
        <img src="image/face-2.png" title="Profile" />
      </div>
      <div class="my23">
        <div class="my24">
          <p><span>10</span> Years Experience</p>
        </div>
        <div class="my24">
          <p><span>10</span> Years Experience</p>
        </div>
        <div class="my24">
          <p><span>10</span> Years Experience</p>
        </div>
        <div class="my24">
          <p><span>10</span> Years Experience</p>
        </div>
      </div>
    `,e=U`
      <div class="my31">
        <h1>About</h1>
        <img src="image/face-2.png" alt="Face" />
        <p>
          Full stack developer and Node.js Programming ,IT Manager at skivank ,
          Senior Programmer Tav Ertebat , I like the Visual Studio Code and the
          ECMAScript Family.
        </p>
      </div>
    `;return U`
      <div class="my1">
        <div class="my2">
          <div class="my6">
            <img src="image/face-1.jpg" alt="Face" />
            <h2>Mohammad Mahdi Moodi</h2>
            <p>
              Full Stack developer<br />
              Ui/UX Designer,
            </p>
          </div>
          <div class="my7"></div>
          <div class="my8">
            <a href="#"> <box-icon name="github" type="logo"></box-icon> </a>
            <a href="#"> <box-icon name="linkedin" type="logo"></box-icon> </a>
            <a href="#"> <box-icon name="youtube" type="logo"></box-icon> </a>
            <a href="#"> <box-icon name="behance" type="logo"></box-icon> </a>
            <a href="#"> <box-icon name="twitter" type="logo"></box-icon> </a>
          </div>
        </div>
        <div class="my3">
          <div class="my5">
            ${"Home"===this.path?t:""}
            ${"About"===this.path?e:""}
            ${this.path,""}
          </div>
        </div>
        <div class="my4 ${this.open?"menu_open":""}">
          <div class="my11">
            <box-icon
              name="${this.open?"x":"menu"}"
              @click=${()=>{this.aaa()}}
            ></box-icon>
          </div>
          <h5>${this.path}</h5>
          <div class="my9 ${this.open?"menu_open2":""}">
            <a
              class="animate__animated animate__backInRight"
              id="${"Home"===this.path?"active":""}"
              @click=${()=>{this.changPage("Home")}}
              >Home</a
            >
            <a
              class="animate__animated animate__backInRight "
              id="${"About"===this.path?"active":""}"
              @click=${()=>{this.changPage("About")}}
              >About</a
            >
            <a
              class="animate__animated animate__backInRight"
              id=" ${"Blog"===this.path?"active":""}"
              @click=${()=>{this.changPage("Blog")}}
              >Blog</a
            >
          </div>
          <div class="my10">
            <button>FE</button>
            <button>EN</button>
            <button>PE</button>
          </div>
        </div>
      </div>
    `}aaa(){this.open=!this.open}changPage(t){this.path=t,this.requestUpdate(),this.aaa()}};G.styles=((t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(n,e)})`
    #active {
      color: #fff;
    }
    .my1 {
      width: 98%;
      max-width: 87em;
      height: 95%;
      border-radius: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
    }
    .my2 {
      background-color: #20202a;
      width: 20%;
      max-width: 20em;
      height: 100%;
      position: relative;
    }
    .my3 {
      background-image: url(image/bg.jpg);
      background-position: top;
      background-repeat: no-repeat;
      background-color: rgba(30, 30, 40, 0.926);
      background-size: 100% 60%;
      background-attachment: fixed;
      width: 75%;
      height: 100%;
      position: relative;
    }
    .my4 {
      width: 5%;
      height: 100%;
      background-color: #20202a;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      transition: 300ms linear width;
    }
    .my5 {
      width: 100%;
      height: 100%;
      min-width: 52em;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(30, 30, 40, 0.926);
      overflow: hidden;
    }
    .my6 {
      width: 100%;
      height: 15em;
      background: linear-gradient(
        159deg,
        rgba(37, 37, 50, 0.98) 0%,
        rgba(35, 35, 45, 0.98) 100%
      );
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .my6 > img {
      width: 7em;
      height: 7em;
      border-radius: 50%;
      box-shadow: 0 0 5px 0px white;
    }
    .my6 > h2 {
      font-size: 90%;
      margin-top: 1em;
      color: white;
      text-align: center;
      transition: color 300ms linear;
    }
    .my6 > p {
      margin-top: 0.2em;
      font-size: 10px;
      color: rgb(121, 121, 121);
      text-align: center;
      transition: color 300ms linear;
      line-height: 1.5;
    }
    .my6 > p:hover,
    .my6 > h2:hover {
      color: #ffc107;
    }
    .my8 {
      width: 100%;
      height: 3em;
      background: linear-gradient(
        159deg,
        rgba(37, 37, 50, 0.98) 0%,
        rgba(35, 35, 45, 0.98) 100%
      );
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .my4 > h5 {
      color: dimgray;
      width: 100%;
      transform: rotate(90deg);
      font-size: 15px;
      text-align: center;
      margin: 2em 0;
      cursor: context-menu;
    }
    .my10 {
      width: 100%;
      height: 8em;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #242430;
    }
    .my10 > button {
      background-color: #1e1e28;
      border: none;
      width: 2.2em;
      height: 2.2em;
      border-radius: 50%;
      color: #8c8c8e;
      font-size: 9px;
      padding: 0.2em;
      margin: 0.5em;
      cursor: pointer;
      text-align: center;
    }
    .my10 > button:hover {
      color: white;
    }
    .my11 {
      width: 100%;
      height: 4em;
      background-color: #242430;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .my11 > box-icon {
      fill: #a5a5a5;
      transition: 300ms linear fill;
    }
    .my11 > box-icon:hover {
      fill: white;
    }
    .my9 {
      width: 100%;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .my9 > a {
      text-decoration: none;
      color: #a5a5a5;
      transition: 200ms linear color;
      margin: 1em;
      cursor: pointer;
    }
    .my9 > a:hover {
      color: white;
    }
    .my8 > a > box-icon {
      fill: #8c8c8e;
      transition: 300ms linear fill;
    }
    .my8 > a > box-icon:hover {
      fill: #ffc107;
    }
    .menu_open {
      width: 20%;
    }
    .menu_open > h5 {
      display: none;
    }
    .menu_open2 {
      display: flex;
    }
    .my21 {
      width: 95%;
      height: 20em;
      background-color: #ffffff2a;
      margin: 2em auto 0 auto;
      position: relative;
    }
    .my21 > img {
      max-width: 30em;
      height: 19em;
      position: absolute;
      bottom: 0;
      right: 1em;
    }
    .my22 {
      width: 20em;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      margin: 2em;
    }
    .my22 > h1 {
      font-size: 40px;
      font-weight: 800;
      color: #fff;
    }
    .my22 > button {
      width: 10em;
      height: 3em;
      margin-top: 2em;
      background-color: #eda50a;
      border: none;
      cursor: pointer;
    }
    .my23 {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .my24 > p {
      color: #bfbfbf;
    }
    .my24 > p > span {
      color: #fceb00;
      font-size: 30px;
    }
    .my31 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .my31 > h1 {
      color: #fff;
      text-align: center;
    }
    .my31 > img {
      width: 10em;
      height: 10em;
      border-radius: 50%;
      margin: 2em auto;
      box-shadow: 0 0 5px 0 #fff;
    }
    .my31 > p {
      width: 80%;
      color: #8a8a8a;
      margin: 0 auto;
    }
  `,X([function(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}({attribute:!1})],G.prototype,"open",void 0),G=X([t=>"function"==typeof t?((t,e)=>(window.customElements.define("my-site",e),e))(0,t):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(t){window.customElements.define("my-site",t)}}})(0,t)],G)})();