const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${n}`);class i{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],a=document.createTreeWalker(t.content,133,null,!1);let c=0,h=-1,p=0;const{strings:u,values:{length:m}}=e;for(;p<m;){const e=a.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)r(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=u[p],s=d.exec(t)[2],n=s.toLowerCase()+"$lit$",i=e.getAttribute(n);e.removeAttribute(n);const r=i.split(o);this.parts.push({type:"attribute",index:h,name:s,strings:r}),p+=r.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,i=t.split(o),a=i.length-1;for(let t=0;t<a;t++){let n,o=i[t];if(""===o)n=l();else{const e=d.exec(o);null!==e&&r(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(o)}s.insertBefore(n,e),this.parts.push({type:"node",index:++h})}""===i[a]?(s.insertBefore(l(),e),n.push(e)):e.data=i[a],p+=a}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&h!==c||(h++,t.insertBefore(l(),e)),c=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(n.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const r=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},a=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(e,t){const{element:{content:s},parts:n}=e,o=document.createTreeWalker(s,133,null,!1);let i=p(n),r=n[i],a=-1,l=0;const d=[];let c=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-l,i=p(n,i),r=n[i]}d.forEach((e=>e.parentNode.removeChild(e)))}const h=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},p=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(a(t))return s}return-1};const u=new WeakMap,m=e=>"function"==typeof e&&u.has(e),f={},y={};class _{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],n=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let i,r=0,l=0,d=o.nextNode();for(;r<n.length;)if(i=n[r],a(i)){for(;l<i.index;)l++,"TEMPLATE"===d.nodeName&&(s.push(d),o.currentNode=d.content),null===(d=o.nextNode())&&(o.currentNode=s.pop(),d=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const g=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),v=` ${s} `;class w{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let i=0;i<e;i++){const e=this.strings[i],r=e.lastIndexOf("\x3c!--");o=(r>-1||o)&&-1===e.indexOf("--\x3e",r+1);const a=d.exec(e);t+=null===a?e+(o?v:n):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==g&&(t=g.createHTML(t)),e.innerHTML=t,e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class E{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=s[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!b(e))return e}let n="";for(let o=0;o<t;o++){n+=e[o];const t=s[o];if(void 0!==t){const e=t.value;if(S(e)||!b(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||S(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class N{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const s=new _(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const o of e)s=t[n],void 0===s&&(s=new N(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(o),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class x extends E{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends C{}let A=!1;(()=>{try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class O{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=R(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const R=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function U(e){let t=$.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},$.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(s);return n=t.keyString.get(o),void 0===n&&(n=new i(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}const $=new Map,V=new WeakMap;const k=new class{handleAttributeExpressions(e,t,s,n){const o=t[0];if("."===o){return new x(e,t.slice(1),s).parts}if("@"===o)return[new O(e,t.slice(1),n.eventContext)];if("?"===o)return[new P(e,t.slice(1),s)];return new E(e,t,s).parts}handleTextExpression(e){return new N(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const M=(e,...t)=>new w(e,t,"html",k),q=(e,t)=>`${e}--${t}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const L=e=>t=>{const n=q(t.type,e);let o=$.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},$.set(n,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(s);if(r=o.keyString.get(a),void 0===r){const s=t.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(s,e),r=new i(t,s),o.keyString.set(a,r)}return o.stringsArray.set(t.strings,r),r},I=["html","svg"],j=new Set,z=(e,t,s)=>{j.add(e);const n=s?s.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,e);const r=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{I.forEach((t=>{const s=$.get(q(t,e));void 0!==s&&s.keyString.forEach((e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{s.add(e)})),c(e,s)}))}))})(e);const a=n.content;s?function(e,t,s=null){const{element:{content:n},parts:o}=e;if(null==s)return void n.appendChild(t);const i=document.createTreeWalker(n,133,null,!1);let r=p(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===s&&(a=h(t),s.parentNode.insertBefore(t,s));-1!==r&&o[r].index===l;){if(a>0){for(;-1!==r;)o[r].index+=a,r=p(o,r);return}r=p(o,r)}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),c(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const H={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),F={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:J};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=F){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,s,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdateInternal(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||F}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=J){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||H,o="function"==typeof n?n:n.fromAttribute;return o?o(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||H.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=F){const n=this.constructor,o=n._attributeNameForProperty(e,s);if(void 0!==o){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,s){let n=!0;if(void 0!==e){const o=this.constructor;s=s||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}B.finalized=!0;const W=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(e,t){if(t!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Q={};class X extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight(((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e)),s),s=t(e,new Set),n=[];s.forEach((e=>n.unshift(e))),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!Y){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new K(String(t),G)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Q&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return Q}}function Z(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}X.finalized=!0,X.render=(e,s,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const o=n.scopeName,i=V.has(s),r=D&&11===s.nodeType&&!!s.host,a=r&&!j.has(o),l=a?document.createDocumentFragment():s;if(((e,s,n)=>{let o=V.get(s);void 0===o&&(t(s,s.firstChild),V.set(s,o=new N(Object.assign({templateFactory:U},n))),o.appendInto(s)),o.setValue(e),o.commit()})(e,l,Object.assign({templateFactory:L(o)},n)),a){const e=V.get(l);V.delete(l);const n=e.value instanceof _?e.value.template:void 0;z(o,l,n),t(s,s.firstChild),s.appendChild(l),V.set(s,e)}!i&&r&&window.ShadyCSS.styleElement(s.host)};const ee="lovelace-player-device-id";function te(){if(!localStorage[ee]){const e=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);window.fully&&"function"==typeof fully.getDeviceId?localStorage[ee]=fully.getDeviceId():localStorage[ee]=`${e()}${e()}-${e()}${e()}`}return localStorage[ee]}let se=te();const ne=new URLSearchParams(window.location.search);var oe;ne.get("deviceID")&&null!==(oe=ne.get("deviceID"))&&("clear"===oe?localStorage.removeItem(ee):localStorage[ee]=oe,se=te()),window.cardMod_template_cache=window.cardMod_template_cache||{};const ie=window.cardMod_template_cache;async function re(e,t,s){const n=Z().connection,o=JSON.stringify([t,s]);let i=ie[o];i?(e(i.value),i.callbacks.add(e)):(e(""),s=Object.assign({user:Z().user.name,browser:se,hash:location.hash.substr(1)||""},s),ie[o]=i={template:t,variables:s,value:"",callbacks:new Set([e]),unsubscribe:n.subscribeMessage((e=>function(e,t){const s=ie[e];s&&(s.value=t.result,s.callbacks.forEach((e=>e(t.result))))}(o,e)),{type:"render_template",template:t,variables:s})})}var ae="3.0.1";async function le(e,t,s=!1){let n=e;"string"==typeof t&&(t=t.split(/(\$| )/)),""===t[t.length-1]&&t.pop();for(const[e,o]of t.entries())if(o.trim().length){if(!n)return null;n.localName&&n.localName.includes("-")&&await customElements.whenDefined(n.localName),n.updateComplete&&await n.updateComplete,n="$"===o?s&&e==t.length-1?[n.shadowRoot]:n.shadowRoot:s&&e==t.length-1?n.querySelectorAll(o):n.querySelector(o)}return n}async function de(e,t,s=!1,n=1e4){return Promise.race([le(e,t,s),new Promise(((e,t)=>setTimeout((()=>t(new Error("timeout"))),n)))]).catch((e=>{if(!e.message||"timeout"!==e.message)throw e;return null}))}const ce=async e=>{await(async()=>{if(customElements.get("developer-tools-event"))return;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");e.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("developer-tools-router");const t=document.createElement("developer-tools-router");await t.routerOptions.routes.event.load()})();return document.createElement("developer-tools-event")._computeParsedEventData(e)};async function he(e,t,s="",n={},o=null,i=!0){var r;(null===(r=e.localName)||void 0===r?void 0:r.includes("-"))&&await customElements.whenDefined(e.localName),e.updateComplete&&await e.updateComplete;const a=e._cardMod=e._cardMod||document.createElement("card-mod");return(e.modElement?e.modElement:i&&e.shadowRoot||e).appendChild(a),e.updateComplete&&await e.updateComplete,a.type=t,a.variables=n,a.styles=s,a}function pe(e,t){const s=e=>e&&"object"==typeof e&&!Array.isArray(e);if(s(e)&&s(t))for(const n in t)s(t[n])?(e[n]||Object.assign(e,{[n]:{}}),"string"==typeof e[n]&&(e[n]={".":e[n]}),pe(e[n],t[n])):e[n]?e[n]=t[n]+e[n]:e[n]=t[n];return e}function ue(e){return e.config?e.config:e._config?e._config:e.host?ue(e.host):e.parentElement?ue(e.parentElement):e.parentNode?ue(e.parentNode):null}function me(e,t){for(const s of t)e.add(s)}async function fe(e,t=0){let s=new Set;return 10==t?s:e?(e._cardMod&&e._cardMod.style&&s.add(e._cardMod),e.updateComplete&&await e.updateComplete,e.parentElement&&me(s,await fe(e.parentElement,t+1)),e.parentNode&&me(s,await fe(e.parentNode,t+1)),e.host&&me(s,await fe(e.host,t+1)),s):s}class ye extends X{constructor(){super(),this._rendered_styles="",this._styleChildren=new Set,this._observer=new MutationObserver((e=>{e.some((e=>"card-mod"!==e.target.localName))&&this.refresh()})),document.querySelector("home-assistant").addEventListener("settheme",(()=>this.refresh()))}static get applyToElement(){return he}connectedCallback(){super.connectedCallback(),this.refresh(),this.setAttribute("slot","none")}disconnectedCallback(){super.disconnectedCallback(),this._disconnect()}set styles(e){this._input_styles=e,this.refresh()}async refresh(){await this._disconnect(),this._connect(this._input_styles)}async _connect(e){let t=JSON.parse(JSON.stringify(e||{}));"string"==typeof t&&(t={".":t});pe(t,await async function(e){if(!e.type)return null;const t=e.parentElement?e.parentElement:e,s=window.getComputedStyle(t).getPropertyValue("--card-mod-theme"),n=Z().themes.themes;return n[s]?n[s][`card-mod-${e.type}-yaml`]?ce(n[s][`card-mod-${e.type}-yaml`]):n[s][`card-mod-${e.type}`]?{".":n[s][`card-mod-${e.type}`]}:{}:{}}(this));const s=this.parentElement||this.parentNode;for(const[e,n]of Object.entries(t))if("."===e)this._styles=n;else for(const t of await de(s,e,!0))this._styleChildren.add(await he(t,void 0,n,this.variables,null,!1));var n;this._styles&&(n=this._styles,String(n).includes("{%")||String(n).includes("{{"))?(this._renderer=this._renderer||this._style_rendered.bind(this),re(this._renderer,this._styles,this.variables)):this._style_rendered(this._styles||""),this._observer.observe(s.host?s.host:s,{childList:!0})}async _disconnect(){this._observer.disconnect(),await async function(e){let t;for(const[s,n]of Object.entries(ie))if(n.callbacks.has(e)){n.callbacks.delete(e),0==n.callbacks.size&&(t=n.unsubscribe,delete ie[s]);break}t&&await(await t)()}(this._renderer),this._rendered_styles="";for(const e of this._styleChildren)e&&(e.styles=""),this._styleChildren.delete(e)}_style_rendered(e){this._rendered_styles=e,this.dispatchEvent(new Event("card-mod-update"))}createRenderRoot(){return this}render(){return M`
      <style>
        ${this._rendered_styles}
      </style>
    `}}var _e;function ge(e,t,s=null){if((e=new Event(e,{bubbles:!0,cancelable:!1,composed:!0})).detail=t||{},s)s.dispatchEvent(e);else{var n=function(){var e=document.querySelector("hc-main");return e?(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("hc-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-view")||e.querySelector("hui-panel-view"):(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=document.querySelector("home-assistant"))&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root"))&&e.shadowRoot)&&e.querySelector("ha-app-layout"))&&e.querySelector("#view"))&&e.firstElementChild}();n&&n.dispatchEvent(e)}}!function(e,t,s,n){var o,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,s,r):o(t,s))||r);i>3&&r&&Object.defineProperty(t,s,r)}([(e,t)=>void 0!==t?((e,t,s)=>{t.constructor.createProperty(s,e)})(_e,e,t):W(_e,e)],ye.prototype,"_rendered_styles",void 0),customElements.get("card-mod")||(customElements.define("card-mod",ye),console.info(`%cCARD-MOD ${ae} IS INSTALLED`,"color: green; font-weight: bold","")),customElements.whenDefined("ha-card").then((()=>{const e=customElements.get("ha-card");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.firstUpdated;e.prototype.firstUpdated=function(e){var s,n;null==t||t.bind(this)(e);const o=this.shadowRoot.querySelector(".card-header");o&&this.insertBefore(o,this.children[0]);const i=ue(this);(null===(s=null==i?void 0:i.card_mod)||void 0===s?void 0:s.class)&&this.classList.add(i.card_mod.class),(null==i?void 0:i.type)&&this.classList.add(`type-${i.type.replace(":","-")}`),he(this,"card",(null===(n=null==i?void 0:i.card_mod)||void 0===n?void 0:n.style)||(null==i?void 0:i.style)||"",{config:i},null,!1).then((e=>{var t,s;if(null===(s=null===(t=this.parentNode)||void 0===t?void 0:t.host)||void 0===s?void 0:s.setConfig){const t=this.parentNode.host.setConfig;this.parentNode.host.setConfig=function(s){t.bind(this)(s),s.card_mod&&(e.variables={config:s},e.styles=s.card_mod)}}}))},ge("ll-rebuild",{})})),customElements.whenDefined("hui-entities-card").then((()=>{const e=customElements.get("hui-entities-card");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.renderEntity;e.prototype.renderEntity=function(e){var s;const n=t.bind(this)(e);if(!n||!n.values)return n;const o=n.values[0];if(!o)return n;(null===(s=null==e?void 0:e.card_mod)||void 0===s?void 0:s.class)&&o.classList.add(e.card_mod.class),(null==e?void 0:e.type)&&o.classList.add(`type-${e.type.replace(":","-")}`);const i=()=>{var t;return he(o,"row",(null===(t=null==e?void 0:e.card_mod)||void 0===t?void 0:t.style)||(null==e?void 0:e.style)||"",{config:e})};return i(),n.values[0]&&n.values[0].addEventListener("ll-rebuild",i),n},ge("ll-rebuild",{})}));customElements.whenDefined("hui-glance-card").then((()=>{const e=customElements.get("hui-glance-card");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.updated;e.prototype.updated=function(e){var s,n;null==t||t.bind(this)(e);for(const e of this.shadowRoot.querySelectorAll("ha-card div.entity")){if(!e.cardmod_patched){e.cardmod_patched=!0;const t=e.attachShadow({mode:"open"});for(;e.firstChild;)t.append(e.firstChild);const s=document.createElement("style");t.appendChild(s),s.innerHTML="\ndiv {\n  width: 100%;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.name {\n  min-height: var(--paper-font-body1_-_line-height, 20px);\n}\nstate-badge {\n  margin: 8px 0;\n}\n"}const t=e.config||e.entityConf;(null===(s=null==t?void 0:t.card_mod)||void 0===s?void 0:s.class)&&e.classList.add(t.card_mod.class),he(e,"glance",(null===(n=null==t?void 0:t.card_mod)||void 0===n?void 0:n.style)||(null==t?void 0:t.style)||"",{config:t})}},ge("ll-rebuild",{})})),customElements.whenDefined("hui-state-label-badge").then((()=>{const e=customElements.get("hui-state-label-badge");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.firstUpdated;e.prototype.firstUpdated=function(e){var s,n;null==t||t.bind(this)(e);const o=this._config;(null===(s=null==o?void 0:o.card_mod)||void 0===s?void 0:s.class)&&this.classList.add(o.card_mod.class),he(this,"badge",(null===(n=null==o?void 0:o.card_mod)||void 0===n?void 0:n.style)||(null==o?void 0:o.style)||"",{config:o})},ge("ll-rebuild",{})})),customElements.whenDefined("hui-view").then((()=>{const e=customElements.get("hui-view");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.firstUpdated;e.prototype.firstUpdated=function(e){null==t||t.bind(this)(e),he(this,"view")},ge("ll-rebuild",{})})),customElements.whenDefined("hui-root").then((()=>{const e=customElements.get("hui-root");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.firstUpdated;e.prototype.firstUpdated=async function(e){null==t||t.bind(this)(e),he(this,"root")},ge("ll-rebuild",{}),de(document,"home-assistant$home-assistant-main$app-drawer-layout partial-panel-resolver ha-panel-lovelace$hui-root",!1).then((e=>{null==e||e.firstUpdated()}))})),customElements.whenDefined("ha-more-info-dialog").then((()=>{const e=customElements.get("ha-more-info-dialog");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.showDialog;e.prototype.showDialog=function(e){null==t||t.bind(this)(e),this.requestUpdate().then((async()=>{he(this.shadowRoot.querySelector("ha-dialog"),"more-info","",{config:e},null,!1)}))},de(document,"home-assistant$ha-more-info-dialog",!1).then((t=>{t&&(t.showDialog=e.prototype.showDialog.bind(t),t.showDialog({entityId:t.entityId}))}))})),customElements.whenDefined("ha-sidebar").then((()=>{const e=customElements.get("ha-sidebar");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.firstUpdated;e.prototype.firstUpdated=async function(e){null==t||t.bind(this)(e),he(this,"sidebar")},ge("ll-rebuild",{}),de(document,"home-assistant$home-assistant-main$app-drawer-layout app-drawer ha-sidebar",!1).then((e=>null==e?void 0:e.firstUpdated()))})),customElements.whenDefined("hui-card-element-editor").then((()=>{const e=customElements.get("hui-card-element-editor");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.getConfigElement;e.prototype.getConfigElement=async function(){const e=await t.bind(this)();if(e){const t=e.setConfig;e.setConfig=function(e){var s,n;const o=JSON.parse(JSON.stringify(e)),i={card:o.card_mod,entities:[]};if(delete o.card_mod,o.entities)for(const[e,t]of null===(s=o.entities)||void 0===s?void 0:s.entries())i.entities[e]=t.card_mod,delete t.card_mod;if(t.bind(this)(o),i.card&&(o.card_mod=i.card),o.entities)for(const[e,t]of null===(n=o.entities)||void 0===n?void 0:n.entries())i.entities[e]&&(t.card_mod=i.entities[e])}}return e}})),customElements.whenDefined("hui-dialog-edit-card").then((()=>{const e=customElements.get("hui-dialog-edit-card");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.updated;e.prototype.updated=function(e){null==t||t.bind(this)(e),this.updateComplete.then((async()=>{var e,t,s;this._cardModIcon||(this._cardModIcon=document.createElement("ha-icon"),this._cardModIcon.icon="mdi:brush");const n=this.shadowRoot.querySelector("mwc-button[slot=secondaryAction]");n&&(n.appendChild(this._cardModIcon),(null===(e=this._cardConfig)||void 0===e?void 0:e.card_mod)||(null===(s=null===(t=this._cardConfig)||void 0===t?void 0:t.entities)||void 0===s?void 0:s.some((e=>e.card_mod)))?this._cardModIcon.style.visibility="visible":this._cardModIcon.style.visibility="hidden")}))}})),customElements.whenDefined("hui-picture-elements-card").then((()=>{const e=customElements.get("hui-picture-elements-card");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.setConfig;e.prototype.setConfig=function(e){var s,n;null==t||t.bind(this)(e);for(const[e,t]of this._elements.entries()){const o=this._config.elements[e];(null===(s=null==o?void 0:o.card_mod)||void 0===s?void 0:s.class)&&t.clasList.add(o.card_mod.class),(null==o?void 0:o.type)&&t.classList.add(`type-${o.type.replace(":","-")}`),he(t,"element",null===(n=null==o?void 0:o.card_mod)||void 0===n?void 0:n.style,{config:o})}},ge("ll-rebuild",{})})),customElements.whenDefined("ha-icon").then((()=>{const e=customElements.get("ha-icon");if(e.prototype.cardmod_patched)return;e.prototype.cardmod_patched=!0;const t=e.prototype.firstUpdated;e.prototype.firstUpdated=function(){null==t||t.bind(this)();const e=()=>{const e=window.getComputedStyle(this).getPropertyValue("--icon");e&&(this.icon=e.trim());const t=window.getComputedStyle(this).getPropertyValue("--icon-color");t&&(this.style.color=t)};(async()=>{const t=await fe(this);for(const s of t)s.addEventListener("card-mod-update",(async()=>{await s.updateComplete,e()}));e()})()}}));let ve=window.cardHelpers;const we=new Promise((async(e,t)=>{ve&&e();const s=async()=>{ve=await window.loadCardHelpers(),window.cardHelpers=ve,e()};window.loadCardHelpers?s():window.addEventListener("load",(async()=>{!async function(){if(customElements.get("hui-view"))return!0;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");if(e.hass={panels:[{url_path:"tmp",component_name:"lovelace"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),!customElements.get("ha-panel-lovelace"))return!1;const t=document.createElement("ha-panel-lovelace");t.hass=Z(),void 0===t.hass&&(await new Promise((e=>{window.addEventListener("connection-status",(t=>{console.log(t),e()}),{once:!0})})),t.hass=Z()),t.panel={config:{mode:null}},t._fetchConfig()}(),window.loadCardHelpers&&s()}))}));function Se(e,t){const s={type:"error",error:e,origConfig:t},n=document.createElement("hui-error-card");return customElements.whenDefined("hui-error-card").then((()=>{const e=document.createElement("hui-error-card");e.setConfig(s),n.parentElement&&n.parentElement.replaceChild(e,n)})),we.then((()=>{ge("ll-rebuild",{},n)})),n}function be(e,t){if(!t||"object"!=typeof t||!t.type)return Se(`No ${e} type configured`,t);let s=t.type;if(s=s.startsWith("custom:")?s.substr("custom:".length):`hui-${s}-${e}`,customElements.get(s))return function(e,t){let s=document.createElement(e);try{s.setConfig(JSON.parse(JSON.stringify(t)))}catch(e){s=Se(e,t)}return we.then((()=>{ge("ll-rebuild",{},s)})),s}(s,t);const n=Se(`Custom element doesn't exist: ${s}.`,t);n.style.display="None";const o=setTimeout((()=>{n.style.display=""}),2e3);return customElements.whenDefined(s).then((()=>{clearTimeout(o),ge("ll-rebuild",{},n)})),n}const Ee="\nha-card {\n  background: none;\n  box-shadow: none;\n}";customElements.define("mod-card",class extends X{static get properties(){return{hass:{}}}setConfig(e){this._config=JSON.parse(JSON.stringify(e));let t=this._config.card_mod||this._config.style;void 0===t?t=Ee:"string"==typeof t?t=Ee+t:t["."]?t["."]=Ee+t["."]:t["."]=Ee,this._config.card_mod=t,this.card=function(e){return ve?ve.createCardElement(e):be("card",e)}(e.card),this.card.hass=Z()}firstUpdated(){window.setTimeout((()=>{var e,t;if(null===(t=null===(e=this.card)||void 0===e?void 0:e.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card")){console.info("%cYou are doing it wrong!","color: red; font-weight: bold","");let e=this.card.localName.replace(/hui-(.*)-card/,"$1");console.info(`mod-card should NEVER be used with a card that already has a ha-card element, such as ${e}`)}}),3e3)}render(){return M` <ha-card modcard> ${this.card} </ha-card> `}set hass(e){this.card&&(this.card.hass=e)}getCardSize(){if(this._config.report_size)return this._config.report_size;let e=this.shadowRoot;return e&&(e=e.querySelector("ha-card card-maker")),e&&(e=e.getCardSize),e&&(e=e()),e||1}});
