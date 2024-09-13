function _e(e,t){return function(){return e.apply(t,arguments)}}const{toString:ot}=Object.prototype,{getPrototypeOf:fe}=Object,X=(e=>t=>{const n=ot.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),B=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:I}=Array,j=G("undefined");function st(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ke=B("ArrayBuffer");function it(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ke(e.buffer),t}const at=G("string"),C=G("function"),De=G("number"),Q=e=>e!==null&&typeof e=="object",ct=e=>e===!0||e===!1,J=e=>{if(X(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lt=B("Date"),ut=B("File"),ft=B("Blob"),dt=B("FileList"),pt=e=>Q(e)&&C(e.pipe),ht=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=X(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},mt=B("URLSearchParams"),[yt,gt,wt,bt]=["ReadableStream","Request","Response","Headers"].map(B),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),I(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const _=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ie=e=>!j(e)&&e!==_;function oe(){const{caseless:e}=Ie(this)&&this||{},t={},n=(r,o)=>{const s=e&&Ue(t,o)||o;J(t[s])&&J(r)?t[s]=oe(t[s],r):J(r)?t[s]=oe({},r):I(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&H(arguments[r],n);return t}const St=(e,t,n,{allOwnKeys:r}={})=>(H(t,(o,s)=>{n&&C(o)?e[s]=_e(o,n):e[s]=o},{allOwnKeys:r}),e),Rt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},xt=e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!De(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),Bt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ft=B("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=B("RegExp"),ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},_t=e=>{ve(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return I(e)?r(e):r(String(e).split(t)),n},Dt=()=>{},Ut=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ee="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",qe={DIGIT:Ee,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Ee},It=(e=16,t=qe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function vt(e){return!!(e&&C(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qt=e=>{const t=new Array(10),n=(r,o)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=I(r)?[]:{};return H(r,(i,c)=>{const f=n(i,o+1);!j(f)&&(s[c]=f)}),t[o]=void 0,s}}return r};return n(e,0)},jt=B("AsyncFunction"),Ht=e=>e&&(Q(e)||C(e))&&C(e.then)&&C(e.catch),je=((e,t)=>e?setImmediate:t?((n,r)=>(_.addEventListener("message",({source:o,data:s})=>{o===_&&s===n&&r.length&&r.shift()()},!1),o=>{r.push(o),_.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",C(_.postMessage)),Mt=typeof queueMicrotask<"u"?queueMicrotask.bind(_):typeof process<"u"&&process.nextTick||je,a={isArray:I,isArrayBuffer:ke,isBuffer:st,isFormData:ht,isArrayBufferView:it,isString:at,isNumber:De,isBoolean:ct,isObject:Q,isPlainObject:J,isReadableStream:yt,isRequest:gt,isResponse:wt,isHeaders:bt,isUndefined:j,isDate:lt,isFile:ut,isBlob:ft,isRegExp:Lt,isFunction:C,isStream:pt,isURLSearchParams:mt,isTypedArray:Ct,isFileList:dt,forEach:H,merge:oe,extend:St,trim:Et,stripBOM:Rt,inherits:Tt,toFlatObject:At,kindOf:X,kindOfTest:B,endsWith:Ot,toArray:xt,forEachEntry:Bt,matchAll:Nt,isHTMLForm:Ft,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:ve,freezeMethods:_t,toObjectSet:kt,toCamelCase:Pt,noop:Dt,toFiniteNumber:Ut,findKey:Ue,global:_,isContextDefined:Ie,ALPHABET:qe,generateString:It,isSpecCompliantForm:vt,toJSONObject:qt,isAsyncFn:jt,isThenable:Ht,setImmediate:je,asap:Mt};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const He=m.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(m,Me);Object.defineProperty(He,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(He);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const $t=null;function se(e){return a.isPlainObject(e)||a.isArray(e)}function $e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(o,s){return o=$e(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(se)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,h){let b=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&zt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(b=a.toArray(p)))return y=$e(y),b.forEach(function(T,N){!(a.isUndefined(T)||T===null)&&t.append(i===!0?Se([y],N,s):i===null?y:y+"[]",l(T))}),!1}return se(p)?!0:(t.append(Se(h,y,s),l(p)),!1)}const d=[],w=Object.assign(Jt,{defaultVisitor:u,convertValue:l,isVisitable:se});function S(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(b,R){(!(a.isUndefined(b)||b===null)&&o.call(t,b,a.isString(R)?R.trim():R,y,w))===!0&&S(b,y?y.concat(R):[R])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Z(e,this,t)}const ze=de.prototype;ze.append=function(t,n){this._pairs.push([t,n])};ze.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Wt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Je(e,t,n){if(!t)return e;const r=n&&n.encode||Wt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Te{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:de,Kt=typeof FormData<"u"?FormData:null,Xt=typeof Blob<"u"?Blob:null,Gt={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Kt,Blob:Xt},protocols:["http","https","file","blob","url","data"]},pe=typeof window<"u"&&typeof document<"u",ie=typeof navigator=="object"&&navigator||void 0,Qt=pe&&(!ie||["ReactNative","NativeScript","NS"].indexOf(ie.product)<0),Zt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yt=pe&&window.location.href||"http://localhost",en=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserEnv:Qt,hasStandardBrowserWebWorkerEnv:Zt,navigator:ie,origin:Yt},Symbol.toStringTag,{value:"Module"})),O={...en,...Gt};function tn(e,t){return Z(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ve(e){function t(n,r,o,s){let i=n[s++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,f?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=rn(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(nn(r),o,n,0)}),n}return null}function on(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const M={transitional:We,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o?JSON.stringify(Ve(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),on(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const sn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),an=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&sn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function W(e){return e===!1||e==null?e:a.isArray(e)?e.map(W):String(e)}function cn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ln=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function un(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class x{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,f,l){const u=q(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(o,u);(!d||o[d]===void 0||l===!0||l===void 0&&o[d]!==!1)&&(o[d||f]=W(c))}const i=(c,f)=>a.forEach(c,(l,u)=>s(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!ln(t))i(an(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())s(f,c,r);else t!=null&&s(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return cn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||te(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||te(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=W(o),delete n[s];return}const c=t?un(s):String(s).trim();c!==s&&delete n[s],n[c]=W(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=q(i);r[c]||(fn(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}x.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(x.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(x);function ne(e,t){const n=this||M,r=t||n,o=x.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Ke(e){return!!(e&&e.__CANCEL__)}function v(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(v,m,{__CANCEL__:!0});function Xe(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function dn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[s];i||(i=l),n[o]=f,r[o]=l;let d=s,w=0;for(;d!==o;)w+=n[d++],d=d%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-i<t)return;const S=u&&l-u;return S?Math.round(w*1e3/S):void 0}}function hn(e,t){let n=0,r=1e3/t,o,s;const i=(l,u=Date.now())=>{n=u,o=null,s&&(clearTimeout(s),s=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(o=l,s||(s=setTimeout(()=>{s=null,i(o)},r-d)))},()=>o&&i(o)]}const V=(e,t,n=3)=>{let r=0;const o=pn(50,250);return hn(s=>{const i=s.loaded,c=s.lengthComputable?s.total:void 0,f=i-r,l=o(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:s,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Oe=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},xe=e=>(...t)=>a.asap(()=>e(...t)),mn=O.hasStandardBrowserEnv?function(){const t=O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),yn=O.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!gn(t)?wn(e,t):t}const Ce=e=>e instanceof x?{...e}:e;function D(e,t){t=t||{};const n={};function r(l,u,d){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:d},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(l,u,d){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function s(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>o(Ce(l),Ce(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||o,w=d(e[u],t[u],u);a.isUndefined(w)&&d!==c||(n[u]=w)}),n}const Qe=e=>{const t=D({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:s,headers:i,auth:c}=t;t.headers=i=x.from(i),t.url=Je(Ge(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&mn(t.url))){const l=o&&s&&yn.read(s);l&&i.set(o,l)}return t},bn=typeof XMLHttpRequest<"u",En=bn&&function(e){return new Promise(function(n,r){const o=Qe(e);let s=o.data;const i=x.from(o.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=o,u,d,w,S,p;function y(){S&&S(),p&&p(),o.cancelToken&&o.cancelToken.unsubscribe(u),o.signal&&o.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(o.method.toUpperCase(),o.url,!0),h.timeout=o.timeout;function b(){if(!h)return;const T=x.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),A={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:T,config:e,request:h};Xe(function(L){n(L),y()},function(L){r(L),y()},A),h=null}"onloadend"in h?h.onloadend=b:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(b)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let N=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const A=o.transitional||We;o.timeoutErrorMessage&&(N=o.timeoutErrorMessage),r(new m(N,A.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},s===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(N,A){h.setRequestHeader(A,N)}),a.isUndefined(o.withCredentials)||(h.withCredentials=!!o.withCredentials),c&&c!=="json"&&(h.responseType=o.responseType),l&&([w,p]=V(l,!0),h.addEventListener("progress",w)),f&&h.upload&&([d,S]=V(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(u=T=>{h&&(r(!T||T.type?new v(null,e,h):T),h.abort(),h=null)},o.cancelToken&&o.cancelToken.subscribe(u),o.signal&&(o.signal.aborted?u():o.signal.addEventListener("abort",u)));const R=dn(o.url);if(R&&O.protocols.indexOf(R)===-1){r(new m("Unsupported protocol "+R+":",m.ERR_BAD_REQUEST,e));return}h.send(s||null)})},Sn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const s=function(l){if(!o){o=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof m?u:new v(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,s(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),e=null)};e.forEach(l=>l.addEventListener("abort",s));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},Rn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Tn=async function*(e,t){for await(const n of An(e))yield*Rn(n,t)},An=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Be=(e,t,n,r)=>{const o=Tn(e,t);let s=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await o.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let w=s+=d;n(w)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),o.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ze=Y&&typeof ReadableStream=="function",On=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ye=(e,...t)=>{try{return!!e(...t)}catch{return!1}},xn=Ze&&Ye(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ne=64*1024,ae=Ze&&Ye(()=>a.isReadableStream(new Response("").body)),K={stream:ae&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!K[t]&&(K[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Cn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await On(e)).byteLength},Bn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Cn(t)},Nn=Y&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:w}=Qe(e);l=l?(l+"").toLowerCase():"text";let S=Sn([o,s&&s.toAbortSignal()],i),p;const y=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let h;try{if(f&&xn&&n!=="get"&&n!=="head"&&(h=await Bn(u,r))!==0){let A=new Request(t,{method:"POST",body:r,duplex:"half"}),F;if(a.isFormData(r)&&(F=A.headers.get("content-type"))&&u.setContentType(F),A.body){const[L,z]=Oe(h,V(xe(f)));r=Be(A.body,Ne,L,z)}}a.isString(d)||(d=d?"include":"omit");const b="credentials"in Request.prototype;p=new Request(t,{...w,signal:S,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:b?d:void 0});let R=await fetch(p);const T=ae&&(l==="stream"||l==="response");if(ae&&(c||T&&y)){const A={};["status","statusText","headers"].forEach(we=>{A[we]=R[we]});const F=a.toFiniteNumber(R.headers.get("content-length")),[L,z]=c&&Oe(F,V(xe(c),!0))||[];R=new Response(Be(R.body,Ne,L,()=>{z&&z(),y&&y()}),A)}l=l||"text";let N=await K[a.findKey(K,l)||"text"](R,e);return!T&&y&&y(),await new Promise((A,F)=>{Xe(A,F,{data:N,headers:x.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:p})})}catch(b){throw y&&y(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:b.cause||b}):m.from(b,b&&b.code,e,p)}}),ce={http:$t,xhr:En,fetch:Nn};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fe=e=>`- ${e}`,Fn=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!Fn(n)&&(r=ce[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(Fe).join(`
`):" "+Fe(s[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ce};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new v(null,e)}function Pe(e){return re(e),e.headers=x.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||M.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=x.from(r.headers),r},function(r){return Ke(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=x.from(r.response.headers))),Promise.reject(r)})}const tt="1.7.7",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Le={};he.transitional=function(t,n,r){function o(s,i){return"[Axios v"+tt+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Le[i]&&(Le[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function Pn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],f=c===void 0||i(c,s,e);if(f!==!0)throw new m("option "+s+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const le={assertOptions:Pn,validators:he},P=le.validators;class k{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:le.assertOptions(o,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=x.concat(i,s);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,d=0,w;if(!f){const p=[Pe.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),w=p.length,u=Promise.resolve(n);d<w;)u=u.then(p[d++],p[d++]);return u}w=c.length;let S=n;for(d=0;d<w;){const p=c[d++],y=c[d++];try{S=p(S)}catch(h){y.call(this,h);break}}try{u=Pe.call(this,S)}catch(p){return Promise.reject(p)}for(d=0,w=l.length;d<w;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=D(this.defaults,t);const n=Ge(t.baseURL,t.url);return Je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){k.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}k.prototype[t]=n(),k.prototype[t+"Form"]=n(!0)});class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new v(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new me(function(o){t=o}),cancel:t}}}function Ln(e){return function(n){return e.apply(null,n)}}function _n(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});function nt(e){const t=new k(e),n=_e(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return nt(D(e,o))},n}const E=nt(M);E.Axios=k;E.CanceledError=v;E.CancelToken=me;E.isCancel=Ke;E.VERSION=tt;E.toFormData=Z;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Ln;E.isAxiosError=_n;E.mergeConfig=D;E.AxiosHeaders=x;E.formToJSON=e=>Ve(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=et.getAdapter;E.HttpStatusCode=ue;E.default=E;window.axios=E;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const kn=window.location.protocol+"//"+window.location.host,g=new fabric.Canvas("printCanvas",{width:document.getElementById("canvas").offsetWidth-10,height:document.getElementById("canvas").offsetHeight-10});document.getElementById("deleteButton").addEventListener("click",Dn);document.getElementById("downloadButton").addEventListener("click",Un);function ye(e,t=!1){const n=new FileReader;n.onload=function(r){fabric.Image.fromURL(r.target.result,function(o){const s=o.width,i=o.height,c=t?.35:Math.min(g.width/s,g.height/i);o.scale(c-.02),o.set({left:g.width/2,top:g.height/2,cornerStyle:"circle",cornerSize:10,padding:10,hasBorders:!0,hasControls:!0,lockScalingFlip:!0,originX:"center",originY:"center"}),g.add(o),g.setActiveObject(o),g.renderAll()})},n.readAsDataURL(e.target.files[0])}function Dn(){const e=g.getActiveObject();e&&(g.remove(e),g.renderAll())}function Un(){const e=g.toDataURL({format:"png",quality:1}),t=document.createElement("a");t.href=e,t.download="canvas-image.png",t.click()}const U=document.getElementById("dropzone"),rt=document.getElementById("imageUpload");U.addEventListener("dragover",e=>{e.preventDefault(),U.classList.add("dragover")});U.addEventListener("dragleave",()=>{U.classList.remove("dragover")});U.addEventListener("drop",e=>{e.preventDefault(),U.classList.remove("dragover"),ye({target:{files:e.dataTransfer.files}},!0)});U.addEventListener("click",()=>{rt.click()});rt.addEventListener("change",e=>{ye(e)});async function In(e){const t=document.getElementById("textInput").value;if(!t.trim())return;let r=await{...{left:g.width/2-15,top:g.height/3,fontSize:30,fill:"black",editable:!0,cornerStyle:"circle",cornerSize:10,padding:10,hasBorders:!0,hasControls:!0},...e};const o=new fabric.Text(t,r);g.add(o),g.setActiveObject(o),g.renderAll()}async function vn(){let e={},t=await $(".editor").find("input,select").filter(function(n,r){return $(r).attr("id")!="textInput"});for(const[n,r]of Object.entries(t))switch(r.name){case"fontWeight":e[r.name]=$(`[name="${r.name}"]`).attr("data-value")??"normal";break;case"fontStyle":e[r.name]=$(`[name="${r.name}"]`).attr("data-value")??"normal";break;default:r.name!==void 0&&(e[r.name]=r.value)}return e}function qn(e){const t=document.getElementById("textInput");e&&e.type==="text"?t.value=e.text:t.value=""}function jn(e){const t=document.getElementById("font-size");e&&e.type==="text"&&(t.value=e.fontSize)}function Hn(e){const t=document.getElementById("font-family");e&&e.type==="text"&&(t.value=e.fontFamily)}function Mn(e){const t=document.getElementById("text-bold");e&&e.type==="text"&&(t.checked=e.fontWeight==="bold"?"checked":"")}function $n(e){const t=document.getElementById("text-italic");e&&e.type==="text"&&(t.checked=e.fontStyle==="italic"?"checked":"")}function zn(e){const t=document.getElementById("text-color");e&&e.type==="text"&&(t.value=e.fill)}function ge(e){qn(e),jn(e),Hn(e),Mn(e),$n(e),zn(e)}g.on("selection:created",function(e){const t=g.getActiveObject();ge(t)});g.on("selection:updated",function(e){const t=g.getActiveObject();ge(t)});g.on("object:selected",function(e){const t=e.target;ge(t)});g.on("selection:cleared",function(){Jn()});function Jn(){document.getElementById("textInput").value="",document.getElementById("font-family").value=document.getElementById("font-family").children[0].value,document.getElementById("font-size").value=30,document.getElementById("text-color").value="#000000",document.getElementById("text-bold").checked="",document.getElementById("text-italic").checked=""}function Wn(){g.clear(),g.renderAll()}function Vn(){g.discardActiveObject(),g.renderAll()}function Kn(e){const t=e.src;fetch(t).then(n=>n.blob()).then(n=>{const r=new File([n],"image.png",{type:n.type});ye({target:{files:[r]}})}).catch(n=>console.error("Error fetching the image:",n))}function Xn(){let e={};e.image=g.toDataURL({format:"png",quality:1}),e.name=$("#name").val(),e.phone=$("#phone").val(),e.address=$("#address").val();const t=kn+"/api/new-order";axios.post(t,e).then(n=>{$("#modalForm").hide(),$("#successModal").modal()}).catch(n=>console.log(n.message))}$(function(){$("#addText").on("click",async function(e){e.preventDefault();const t=await vn();await In(t)}),$(".tshirt-image").on("click",function(e){Wn(),$(this).parent().find("img").removeClass("active"),$(this).addClass("active"),Kn(this)}),$(document).on("click",function(e){$(e.target).is("input, select")||g.wrapperEl.contains(e.target)||Vn()}),$("a[data-modal]").click(function(e){e.preventDefault(),$("#modal").modal()}),$("#modalForm").on("submit",function(e){e.preventDefault(),Xn()}),$("#okButton").on("click",async function(e){e.preventDefault(),window.location.reload()})});
