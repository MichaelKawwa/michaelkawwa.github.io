(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const b of g.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function o(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(d){if(d.ep)return;d.ep=!0;const g=o(d);fetch(d.href,g)}})();function jp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var zo={exports:{}},Di={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function iy(){if(Kh)return Di;Kh=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(c,d,g){var b=null;if(g!==void 0&&(b=""+g),d.key!==void 0&&(b=""+d.key),"key"in d){g={};for(var T in d)T!=="key"&&(g[T]=d[T])}else g=d;return d=g.ref,{$$typeof:n,type:c,key:b,ref:d!==void 0?d:null,props:g}}return Di.Fragment=r,Di.jsx=o,Di.jsxs=o,Di}var Jh;function uy(){return Jh||(Jh=1,zo.exports=iy()),zo.exports}var p=uy(),Oo={exports:{}},yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function ry(){if(Wh)return yt;Wh=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),b=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),z=Symbol.iterator;function H(m){return m===null||typeof m!="object"?null:(m=z&&m[z]||m["@@iterator"],typeof m=="function"?m:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,lt={};function W(m,k,I){this.props=m,this.context=k,this.refs=lt,this.updater=I||q}W.prototype.isReactComponent={},W.prototype.setState=function(m,k){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,k,"setState")},W.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function V(){}V.prototype=W.prototype;function Q(m,k,I){this.props=m,this.context=k,this.refs=lt,this.updater=I||q}var X=Q.prototype=new V;X.constructor=Q,J(X,W.prototype),X.isPureReactComponent=!0;var it=Array.isArray,G={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function at(m,k,I,N,$,tt){return I=tt.ref,{$$typeof:n,type:m,key:k,ref:I!==void 0?I:null,props:tt}}function jt(m,k){return at(m.type,k,void 0,void 0,void 0,m.props)}function P(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function mt(m){var k={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(I){return k[I]})}var Mt=/\/+/g;function Dt(m,k){return typeof m=="object"&&m!==null&&m.key!=null?mt(""+m.key):k.toString(36)}function Bt(){}function _t(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Bt,Bt):(m.status="pending",m.then(function(k){m.status==="pending"&&(m.status="fulfilled",m.value=k)},function(k){m.status==="pending"&&(m.status="rejected",m.reason=k)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Et(m,k,I,N,$){var tt=typeof m;(tt==="undefined"||tt==="boolean")&&(m=null);var K=!1;if(m===null)K=!0;else switch(tt){case"bigint":case"string":case"number":K=!0;break;case"object":switch(m.$$typeof){case n:case r:K=!0;break;case M:return K=m._init,Et(K(m._payload),k,I,N,$)}}if(K)return $=$(m),K=N===""?"."+Dt(m,0):N,it($)?(I="",K!=null&&(I=K.replace(Mt,"$&/")+"/"),Et($,k,I,"",function(_){return _})):$!=null&&(P($)&&($=jt($,I+($.key==null||m&&m.key===$.key?"":(""+$.key).replace(Mt,"$&/")+"/")+K)),k.push($)),1;K=0;var ft=N===""?".":N+":";if(it(m))for(var ht=0;ht<m.length;ht++)N=m[ht],tt=ft+Dt(N,ht),K+=Et(N,k,I,tt,$);else if(ht=H(m),typeof ht=="function")for(m=ht.call(m),ht=0;!(N=m.next()).done;)N=N.value,tt=ft+Dt(N,ht++),K+=Et(N,k,I,tt,$);else if(tt==="object"){if(typeof m.then=="function")return Et(_t(m),k,I,N,$);throw k=String(m),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return K}function L(m,k,I){if(m==null)return m;var N=[],$=0;return Et(m,N,"","",function(tt){return k.call(I,tt,$++)}),N}function rt(m){if(m._status===-1){var k=m._result;k=k(),k.then(function(I){(m._status===0||m._status===-1)&&(m._status=1,m._result=I)},function(I){(m._status===0||m._status===-1)&&(m._status=2,m._result=I)}),m._status===-1&&(m._status=0,m._result=k)}if(m._status===1)return m._result.default;throw m._result}var Y=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function ot(){}return yt.Children={map:L,forEach:function(m,k,I){L(m,function(){k.apply(this,arguments)},I)},count:function(m){var k=0;return L(m,function(){k++}),k},toArray:function(m){return L(m,function(k){return k})||[]},only:function(m){if(!P(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},yt.Component=W,yt.Fragment=o,yt.Profiler=d,yt.PureComponent=Q,yt.StrictMode=c,yt.Suspense=A,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,yt.act=function(){throw Error("act(...) is not supported in production builds of React.")},yt.cache=function(m){return function(){return m.apply(null,arguments)}},yt.cloneElement=function(m,k,I){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var N=J({},m.props),$=m.key,tt=void 0;if(k!=null)for(K in k.ref!==void 0&&(tt=void 0),k.key!==void 0&&($=""+k.key),k)!Z.call(k,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&k.ref===void 0||(N[K]=k[K]);var K=arguments.length-2;if(K===1)N.children=I;else if(1<K){for(var ft=Array(K),ht=0;ht<K;ht++)ft[ht]=arguments[ht+2];N.children=ft}return at(m.type,$,void 0,void 0,tt,N)},yt.createContext=function(m){return m={$$typeof:b,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:g,_context:m},m},yt.createElement=function(m,k,I){var N,$={},tt=null;if(k!=null)for(N in k.key!==void 0&&(tt=""+k.key),k)Z.call(k,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&($[N]=k[N]);var K=arguments.length-2;if(K===1)$.children=I;else if(1<K){for(var ft=Array(K),ht=0;ht<K;ht++)ft[ht]=arguments[ht+2];$.children=ft}if(m&&m.defaultProps)for(N in K=m.defaultProps,K)$[N]===void 0&&($[N]=K[N]);return at(m,tt,void 0,void 0,null,$)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(m){return{$$typeof:T,render:m}},yt.isValidElement=P,yt.lazy=function(m){return{$$typeof:M,_payload:{_status:-1,_result:m},_init:rt}},yt.memo=function(m,k){return{$$typeof:y,type:m,compare:k===void 0?null:k}},yt.startTransition=function(m){var k=G.T,I={};G.T=I;try{var N=m(),$=G.S;$!==null&&$(I,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(ot,Y)}catch(tt){Y(tt)}finally{G.T=k}},yt.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},yt.use=function(m){return G.H.use(m)},yt.useActionState=function(m,k,I){return G.H.useActionState(m,k,I)},yt.useCallback=function(m,k){return G.H.useCallback(m,k)},yt.useContext=function(m){return G.H.useContext(m)},yt.useDebugValue=function(){},yt.useDeferredValue=function(m,k){return G.H.useDeferredValue(m,k)},yt.useEffect=function(m,k){return G.H.useEffect(m,k)},yt.useId=function(){return G.H.useId()},yt.useImperativeHandle=function(m,k,I){return G.H.useImperativeHandle(m,k,I)},yt.useInsertionEffect=function(m,k){return G.H.useInsertionEffect(m,k)},yt.useLayoutEffect=function(m,k){return G.H.useLayoutEffect(m,k)},yt.useMemo=function(m,k){return G.H.useMemo(m,k)},yt.useOptimistic=function(m,k){return G.H.useOptimistic(m,k)},yt.useReducer=function(m,k,I){return G.H.useReducer(m,k,I)},yt.useRef=function(m){return G.H.useRef(m)},yt.useState=function(m){return G.H.useState(m)},yt.useSyncExternalStore=function(m,k,I){return G.H.useSyncExternalStore(m,k,I)},yt.useTransition=function(){return G.H.useTransition()},yt.version="19.0.0",yt}var Fh;function Po(){return Fh||(Fh=1,Oo.exports=ry()),Oo.exports}var O=Po();const D=jp(O);var Ro={exports:{}},zi={},jo={exports:{}},Mo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function cy(){return Ih||(Ih=1,function(n){function r(L,rt){var Y=L.length;L.push(rt);t:for(;0<Y;){var ot=Y-1>>>1,m=L[ot];if(0<d(m,rt))L[ot]=rt,L[Y]=m,Y=ot;else break t}}function o(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var rt=L[0],Y=L.pop();if(Y!==rt){L[0]=Y;t:for(var ot=0,m=L.length,k=m>>>1;ot<k;){var I=2*(ot+1)-1,N=L[I],$=I+1,tt=L[$];if(0>d(N,Y))$<m&&0>d(tt,N)?(L[ot]=tt,L[$]=Y,ot=$):(L[ot]=N,L[I]=Y,ot=I);else if($<m&&0>d(tt,Y))L[ot]=tt,L[$]=Y,ot=$;else break t}}return rt}function d(L,rt){var Y=L.sortIndex-rt.sortIndex;return Y!==0?Y:L.id-rt.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;n.unstable_now=function(){return g.now()}}else{var b=Date,T=b.now();n.unstable_now=function(){return b.now()-T}}var A=[],y=[],M=1,z=null,H=3,q=!1,J=!1,lt=!1,W=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function X(L){for(var rt=o(y);rt!==null;){if(rt.callback===null)c(y);else if(rt.startTime<=L)c(y),rt.sortIndex=rt.expirationTime,r(A,rt);else break;rt=o(y)}}function it(L){if(lt=!1,X(L),!J)if(o(A)!==null)J=!0,_t();else{var rt=o(y);rt!==null&&Et(it,rt.startTime-L)}}var G=!1,Z=-1,at=5,jt=-1;function P(){return!(n.unstable_now()-jt<at)}function mt(){if(G){var L=n.unstable_now();jt=L;var rt=!0;try{t:{J=!1,lt&&(lt=!1,V(Z),Z=-1),q=!0;var Y=H;try{e:{for(X(L),z=o(A);z!==null&&!(z.expirationTime>L&&P());){var ot=z.callback;if(typeof ot=="function"){z.callback=null,H=z.priorityLevel;var m=ot(z.expirationTime<=L);if(L=n.unstable_now(),typeof m=="function"){z.callback=m,X(L),rt=!0;break e}z===o(A)&&c(A),X(L)}else c(A);z=o(A)}if(z!==null)rt=!0;else{var k=o(y);k!==null&&Et(it,k.startTime-L),rt=!1}}break t}finally{z=null,H=Y,q=!1}rt=void 0}}finally{rt?Mt():G=!1}}}var Mt;if(typeof Q=="function")Mt=function(){Q(mt)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,Bt=Dt.port2;Dt.port1.onmessage=mt,Mt=function(){Bt.postMessage(null)}}else Mt=function(){W(mt,0)};function _t(){G||(G=!0,Mt())}function Et(L,rt){Z=W(function(){L(n.unstable_now())},rt)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){J||q||(J=!0,_t())},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):at=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return H},n.unstable_getFirstCallbackNode=function(){return o(A)},n.unstable_next=function(L){switch(H){case 1:case 2:case 3:var rt=3;break;default:rt=H}var Y=H;H=rt;try{return L()}finally{H=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,rt){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=H;H=L;try{return rt()}finally{H=Y}},n.unstable_scheduleCallback=function(L,rt,Y){var ot=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ot+Y:ot):Y=ot,L){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=Y+m,L={id:M++,callback:rt,priorityLevel:L,startTime:Y,expirationTime:m,sortIndex:-1},Y>ot?(L.sortIndex=Y,r(y,L),o(A)===null&&L===o(y)&&(lt?(V(Z),Z=-1):lt=!0,Et(it,Y-ot))):(L.sortIndex=m,r(A,L),J||q||(J=!0,_t())),L},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(L){var rt=H;return function(){var Y=H;H=rt;try{return L.apply(this,arguments)}finally{H=Y}}}}(Mo)),Mo}var Ph;function oy(){return Ph||(Ph=1,jo.exports=cy()),jo.exports}var Co={exports:{}},ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function sy(){if(tp)return ge;tp=1;var n=Po();function r(A){var y="https://react.dev/errors/"+A;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)y+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+A+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(A,y,M){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:z==null?null:""+z,children:A,containerInfo:y,implementation:M}}var b=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(A,y){if(A==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ge.createPortal=function(A,y){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return g(A,y,null,M)},ge.flushSync=function(A){var y=b.T,M=c.p;try{if(b.T=null,c.p=2,A)return A()}finally{b.T=y,c.p=M,c.d.f()}},ge.preconnect=function(A,y){typeof A=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(A,y))},ge.prefetchDNS=function(A){typeof A=="string"&&c.d.D(A)},ge.preinit=function(A,y){if(typeof A=="string"&&y&&typeof y.as=="string"){var M=y.as,z=T(M,y.crossOrigin),H=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;M==="style"?c.d.S(A,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:z,integrity:H,fetchPriority:q}):M==="script"&&c.d.X(A,{crossOrigin:z,integrity:H,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ge.preinitModule=function(A,y){if(typeof A=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var M=T(y.as,y.crossOrigin);c.d.M(A,{crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(A)},ge.preload=function(A,y){if(typeof A=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var M=y.as,z=T(M,y.crossOrigin);c.d.L(A,M,{crossOrigin:z,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ge.preloadModule=function(A,y){if(typeof A=="string")if(y){var M=T(y.as,y.crossOrigin);c.d.m(A,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:M,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(A)},ge.requestFormReset=function(A){c.d.r(A)},ge.unstable_batchedUpdates=function(A,y){return A(y)},ge.useFormState=function(A,y,M){return b.H.useFormState(A,y,M)},ge.useFormStatus=function(){return b.H.useHostTransitionStatus()},ge.version="19.0.0",ge}var ep;function Mp(){if(ep)return Co.exports;ep=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Co.exports=sy(),Co.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function fy(){if(lp)return zi;lp=1;var n=oy(),r=Po(),o=Mp();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),it=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function jt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case T:return"Portal";case M:return"Profiler";case y:return"StrictMode";case lt:return"Suspense";case W:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case J:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return e=t.displayName||null,e!==null?e:jt(t.type)||"Memo";case Q:e=t._payload,t=t._init;try{return jt(t(e))}catch{}}return null}var P=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt=Object.assign,Mt,Dt;function Bt(t){if(Mt===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Mt=e&&e[1]||"",Dt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+t+Dt}var _t=!1;function Et(t,e){if(!t||_t)return"";_t=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(R){var w=R}Reflect.construct(t,[],B)}else{try{B.call()}catch(R){w=R}t.call(B.prototype)}}else{try{throw Error()}catch(R){w=R}(B=t())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(R){if(R&&w&&typeof R.stack=="string")return[R.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),s=u[0],f=u[1];if(s&&f){var h=s.split(`
`),x=f.split(`
`);for(i=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;if(a===h.length||i===x.length)for(a=h.length-1,i=x.length-1;1<=a&&0<=i&&h[a]!==x[i];)i--;for(;1<=a&&0<=i;a--,i--)if(h[a]!==x[i]){if(a!==1||i!==1)do if(a--,i--,0>i||h[a]!==x[i]){var j=`
`+h[a].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=a&&0<=i);break}}}finally{_t=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Bt(l):""}function L(t){switch(t.tag){case 26:case 27:case 5:return Bt(t.type);case 16:return Bt("Lazy");case 13:return Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return t=Et(t.type,!1),t;case 11:return t=Et(t.type.render,!1),t;case 1:return t=Et(t.type,!0),t;default:return""}}function rt(t){try{var e="";do e+=L(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Y(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function ot(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(Y(t)!==t)throw Error(c(188))}function k(t){var e=t.alternate;if(!e){if(e=Y(t),e===null)throw Error(c(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var u=i.alternate;if(u===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===l)return m(i),t;if(u===a)return m(i),e;u=u.sibling}throw Error(c(188))}if(l.return!==a.return)l=i,a=u;else{for(var s=!1,f=i.child;f;){if(f===l){s=!0,l=i,a=u;break}if(f===a){s=!0,a=i,l=u;break}f=f.sibling}if(!s){for(f=u.child;f;){if(f===l){s=!0,l=u,a=i;break}if(f===a){s=!0,a=u,l=i;break}f=f.sibling}if(!s)throw Error(c(189))}}if(l.alternate!==a)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?t:e}function I(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=I(t),e!==null)return e;t=t.sibling}return null}var N=Array.isArray,$=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},K=[],ft=-1;function ht(t){return{current:t}}function _(t){0>ft||(t.current=K[ft],K[ft]=null,ft--)}function et(t,e){ft++,K[ft]=t.current,t.current=e}var pt=ht(null),xt=ht(null),zt=ht(null),Yt=ht(null);function Qt(t,e){switch(et(zt,e),et(xt,t),et(pt,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Eh(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Eh(t),e=wh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(pt),et(pt,e)}function ee(){_(pt),_(xt),_(zt)}function Se(t){t.memoizedState!==null&&et(Yt,t);var e=pt.current,l=wh(e,t.type);e!==l&&(et(xt,t),et(pt,l))}function Me(t){xt.current===t&&(_(pt),_(xt)),Yt.current===t&&(_(Yt),Ai._currentValue=tt)}var Ce=Object.prototype.hasOwnProperty,la=n.unstable_scheduleCallback,aa=n.unstable_cancelCallback,na=n.unstable_shouldYield,$i=n.unstable_requestPaint,Ve=n.unstable_now,N0=n.unstable_getCurrentPriorityLevel,fs=n.unstable_ImmediatePriority,ds=n.unstable_UserBlockingPriority,Bi=n.unstable_NormalPriority,L0=n.unstable_LowPriority,hs=n.unstable_IdlePriority,Q0=n.log,q0=n.unstable_setDisableYieldValue,jn=null,Ee=null;function G0(t){if(Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(jn,t,void 0,(t.current.flags&128)===128)}catch{}}function Ol(t){if(typeof Q0=="function"&&q0(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(jn,t)}catch{}}var we=Math.clz32?Math.clz32:V0,Y0=Math.log,X0=Math.LN2;function V0(t){return t>>>=0,t===0?32:31-(Y0(t)/X0|0)|0}var Hi=128,Ui=4194304;function ia(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ni(t,e){var l=t.pendingLanes;if(l===0)return 0;var a=0,i=t.suspendedLanes,u=t.pingedLanes,s=t.warmLanes;t=t.finishedLanes!==0;var f=l&134217727;return f!==0?(l=f&~i,l!==0?a=ia(l):(u&=f,u!==0?a=ia(u):t||(s=f&~s,s!==0&&(a=ia(s))))):(f=l&~i,f!==0?a=ia(f):u!==0?a=ia(u):t||(s=l&~s,s!==0&&(a=ia(s)))),a===0?0:e!==0&&e!==a&&!(e&i)&&(i=a&-a,s=e&-e,i>=s||i===32&&(s&4194176)!==0)?e:a}function Mn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Z0(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ps(){var t=Hi;return Hi<<=1,!(Hi&4194176)&&(Hi=128),t}function ms(){var t=Ui;return Ui<<=1,!(Ui&62914560)&&(Ui=4194304),t}function Ar(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Cn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function K0(t,e,l,a,i,u){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,h=t.expirationTimes,x=t.hiddenUpdates;for(l=s&~l;0<l;){var j=31-we(l),B=1<<j;f[j]=0,h[j]=-1;var w=x[j];if(w!==null)for(x[j]=null,j=0;j<w.length;j++){var R=w[j];R!==null&&(R.lane&=-536870913)}l&=~B}a!==0&&gs(t,a,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(s&~e))}function gs(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-we(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194218}function ys(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-we(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function bs(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function vs(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:qh(t.type))}function J0(t,e){var l=$.p;try{return $.p=t,e()}finally{$.p=l}}var Rl=Math.random().toString(36).slice(2),pe="__reactFiber$"+Rl,ve="__reactProps$"+Rl,Ua="__reactContainer$"+Rl,Sr="__reactEvents$"+Rl,W0="__reactListeners$"+Rl,F0="__reactHandles$"+Rl,xs="__reactResources$"+Rl,_n="__reactMarker$"+Rl;function Er(t){delete t[pe],delete t[ve],delete t[Sr],delete t[W0],delete t[F0]}function ua(t){var e=t[pe];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ua]||l[pe]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=zh(t);t!==null;){if(l=t[pe])return l;t=zh(t)}return e}t=l,l=t.parentNode}return null}function Na(t){if(t=t[pe]||t[Ua]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function kn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function La(t){var e=t[xs];return e||(e=t[xs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ne(t){t[_n]=!0}var As=new Set,Ss={};function ra(t,e){Qa(t,e),Qa(t+"Capture",e)}function Qa(t,e){for(Ss[t]=e,t=0;t<e.length;t++)As.add(e[t])}var cl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),I0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Es={},ws={};function P0(t){return Ce.call(ws,t)?!0:Ce.call(Es,t)?!1:I0.test(t)?ws[t]=!0:(Es[t]=!0,!1)}function Li(t,e,l){if(P0(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Qi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ol(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function _e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ts(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tm(t){var e=Ts(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,u.call(this,s)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qi(t){t._valueTracker||(t._valueTracker=tm(t))}function Ds(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Ts(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Gi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var em=/[\n"\\]/g;function ke(t){return t.replace(em,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function wr(t,e,l,a,i,u,s,f){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+_e(e)):t.value!==""+_e(e)&&(t.value=""+_e(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Tr(t,s,_e(e)):l!=null?Tr(t,s,_e(l)):a!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+_e(f):t.removeAttribute("name")}function zs(t,e,l,a,i,u,s,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;l=l!=null?""+_e(l):"",e=e!=null?""+_e(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function Tr(t,e,l){e==="number"&&Gi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function qa(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+_e(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Os(t,e,l){if(e!=null&&(e=""+_e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+_e(l):""}function Rs(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(c(92));if(N(a)){if(1<a.length)throw Error(c(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=_e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Ga(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var lm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function js(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||lm.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Ms(t,e,l){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&js(t,i,a)}else for(var u in e)e.hasOwnProperty(u)&&js(t,u,e[u])}function Dr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var am=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yi(t){return nm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var zr=null;function Or(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ya=null,Xa=null;function Cs(t){var e=Na(t);if(e&&(t=e.stateNode)){var l=t[ve]||null;t:switch(t=e.stateNode,e.type){case"input":if(wr(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ke(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[ve]||null;if(!i)throw Error(c(90));wr(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Ds(a)}break t;case"textarea":Os(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&qa(t,!!l.multiple,e,!1)}}}var Rr=!1;function _s(t,e,l){if(Rr)return t(e,l);Rr=!0;try{var a=t(e);return a}finally{if(Rr=!1,(Ya!==null||Xa!==null)&&(zu(),Ya&&(e=Ya,t=Xa,Xa=Ya=null,Cs(e),t)))for(e=0;e<t.length;e++)Cs(t[e])}}function $n(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ve]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(c(231,e,typeof l));return l}var jr=!1;if(cl)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){jr=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{jr=!1}var jl=null,Mr=null,Xi=null;function ks(){if(Xi)return Xi;var t,e=Mr,l=e.length,a,i="value"in jl?jl.value:jl.textContent,u=i.length;for(t=0;t<l&&e[t]===i[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===i[u-a];a++);return Xi=i.slice(t,1<a?1-a:void 0)}function Vi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zi(){return!0}function $s(){return!1}function xe(t){function e(l,a,i,u,s){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zi:$s,this.isPropagationStopped=$s,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=xe(ca),Hn=mt({},ca,{view:0,detail:0}),im=xe(Hn),Cr,_r,Un,Ji=mt({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$r,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Un&&(Un&&t.type==="mousemove"?(Cr=t.screenX-Un.screenX,_r=t.screenY-Un.screenY):_r=Cr=0,Un=t),Cr)},movementY:function(t){return"movementY"in t?t.movementY:_r}}),Bs=xe(Ji),um=mt({},Ji,{dataTransfer:0}),rm=xe(um),cm=mt({},Hn,{relatedTarget:0}),kr=xe(cm),om=mt({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=xe(om),fm=mt({},ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dm=xe(fm),hm=mt({},ca,{data:0}),Hs=xe(hm),pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ym(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gm[t])?!!e[t]:!1}function $r(){return ym}var bm=mt({},Hn,{key:function(t){if(t.key){var e=pm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$r,charCode:function(t){return t.type==="keypress"?Vi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vm=xe(bm),xm=mt({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=xe(xm),Am=mt({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$r}),Sm=xe(Am),Em=mt({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),wm=xe(Em),Tm=mt({},Ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dm=xe(Tm),zm=mt({},ca,{newState:0,oldState:0}),Om=xe(zm),Rm=[9,13,27,32],Br=cl&&"CompositionEvent"in window,Nn=null;cl&&"documentMode"in document&&(Nn=document.documentMode);var jm=cl&&"TextEvent"in window&&!Nn,Ns=cl&&(!Br||Nn&&8<Nn&&11>=Nn),Ls=" ",Qs=!1;function qs(t,e){switch(t){case"keyup":return Rm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Va=!1;function Mm(t,e){switch(t){case"compositionend":return Gs(e);case"keypress":return e.which!==32?null:(Qs=!0,Ls);case"textInput":return t=e.data,t===Ls&&Qs?null:t;default:return null}}function Cm(t,e){if(Va)return t==="compositionend"||!Br&&qs(t,e)?(t=ks(),Xi=Mr=jl=null,Va=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ns&&e.locale!=="ko"?null:e.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_m[t.type]:e==="textarea"}function Xs(t,e,l,a){Ya?Xa?Xa.push(a):Xa=[a]:Ya=a,e=Cu(e,"onChange"),0<e.length&&(l=new Ki("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Ln=null,Qn=null;function km(t){bh(t,0)}function Wi(t){var e=kn(t);if(Ds(e))return t}function Vs(t,e){if(t==="change")return e}var Zs=!1;if(cl){var Hr;if(cl){var Ur="oninput"in document;if(!Ur){var Ks=document.createElement("div");Ks.setAttribute("oninput","return;"),Ur=typeof Ks.oninput=="function"}Hr=Ur}else Hr=!1;Zs=Hr&&(!document.documentMode||9<document.documentMode)}function Js(){Ln&&(Ln.detachEvent("onpropertychange",Ws),Qn=Ln=null)}function Ws(t){if(t.propertyName==="value"&&Wi(Qn)){var e=[];Xs(e,Qn,t,Or(t)),_s(km,e)}}function $m(t,e,l){t==="focusin"?(Js(),Ln=e,Qn=l,Ln.attachEvent("onpropertychange",Ws)):t==="focusout"&&Js()}function Bm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wi(Qn)}function Hm(t,e){if(t==="click")return Wi(e)}function Um(t,e){if(t==="input"||t==="change")return Wi(e)}function Nm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Te=typeof Object.is=="function"?Object.is:Nm;function qn(t,e){if(Te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!Ce.call(e,i)||!Te(t[i],e[i]))return!1}return!0}function Fs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Is(t,e){var l=Fs(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Fs(l)}}function Ps(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ps(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Gi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Gi(t.document)}return e}function Nr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lm(t,e){var l=tf(e);e=t.focusedElem;var a=t.selectionRange;if(l!==e&&e&&e.ownerDocument&&Ps(e.ownerDocument.documentElement,e)){if(a!==null&&Nr(e)){if(t=a.start,l=a.end,l===void 0&&(l=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(l,e.value.length);else if(l=(t=e.ownerDocument||document)&&t.defaultView||window,l.getSelection){l=l.getSelection();var i=e.textContent.length,u=Math.min(a.start,i);a=a.end===void 0?u:Math.min(a.end,i),!l.extend&&u>a&&(i=a,a=u,u=i),i=Is(e,u);var s=Is(e,a);i&&s&&(l.rangeCount!==1||l.anchorNode!==i.node||l.anchorOffset!==i.offset||l.focusNode!==s.node||l.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),l.removeAllRanges(),u>a?(l.addRange(t),l.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),l.addRange(t)))}}for(t=[],l=e;l=l.parentNode;)l.nodeType===1&&t.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)l=t[e],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var Qm=cl&&"documentMode"in document&&11>=document.documentMode,Za=null,Lr=null,Gn=null,Qr=!1;function ef(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qr||Za==null||Za!==Gi(a)||(a=Za,"selectionStart"in a&&Nr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Gn&&qn(Gn,a)||(Gn=a,a=Cu(Lr,"onSelect"),0<a.length&&(e=new Ki("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Za)))}function oa(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ka={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},qr={},lf={};cl&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Ka.animationend.animation,delete Ka.animationiteration.animation,delete Ka.animationstart.animation),"TransitionEvent"in window||delete Ka.transitionend.transition);function sa(t){if(qr[t])return qr[t];if(!Ka[t])return t;var e=Ka[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in lf)return qr[t]=e[l];return t}var af=sa("animationend"),nf=sa("animationiteration"),uf=sa("animationstart"),qm=sa("transitionrun"),Gm=sa("transitionstart"),Ym=sa("transitioncancel"),rf=sa("transitionend"),cf=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ze(t,e){cf.set(t,e),ra(e,[t])}var $e=[],Ja=0,Gr=0;function Fi(){for(var t=Ja,e=Gr=Ja=0;e<t;){var l=$e[e];$e[e++]=null;var a=$e[e];$e[e++]=null;var i=$e[e];$e[e++]=null;var u=$e[e];if($e[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}u!==0&&sf(l,i,u)}}function Ii(t,e,l,a){$e[Ja++]=t,$e[Ja++]=e,$e[Ja++]=l,$e[Ja++]=a,Gr|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Yr(t,e,l,a){return Ii(t,e,l,a),Pi(t)}function Ml(t,e){return Ii(t,null,null,e),Pi(t)}function sf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;i&&e!==null&&t.tag===3&&(u=t.stateNode,i=31-we(l),u=u.hiddenUpdates,t=u[i],t===null?u[i]=[e]:t.push(e),e.lane=l|536870912)}function Pi(t){if(50<pi)throw pi=0,Wc=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Wa={},ff=new WeakMap;function Be(t,e){if(typeof t=="object"&&t!==null){var l=ff.get(t);return l!==void 0?l:(e={value:t,source:e,stack:rt(e)},ff.set(t,e),e)}return{value:t,source:e,stack:rt(e)}}var Fa=[],Ia=0,tu=null,eu=0,He=[],Ue=0,fa=null,sl=1,fl="";function da(t,e){Fa[Ia++]=eu,Fa[Ia++]=tu,tu=t,eu=e}function df(t,e,l){He[Ue++]=sl,He[Ue++]=fl,He[Ue++]=fa,fa=t;var a=sl;t=fl;var i=32-we(a)-1;a&=~(1<<i),l+=1;var u=32-we(e)+i;if(30<u){var s=i-i%5;u=(a&(1<<s)-1).toString(32),a>>=s,i-=s,sl=1<<32-we(e)+i|l<<i|a,fl=u+t}else sl=1<<u|l<<i|a,fl=t}function Xr(t){t.return!==null&&(da(t,1),df(t,1,0))}function Vr(t){for(;t===tu;)tu=Fa[--Ia],Fa[Ia]=null,eu=Fa[--Ia],Fa[Ia]=null;for(;t===fa;)fa=He[--Ue],He[Ue]=null,fl=He[--Ue],He[Ue]=null,sl=He[--Ue],He[Ue]=null}var ye=null,se=null,Ot=!1,Ke=null,tl=!1,Zr=Error(c(519));function ha(t){var e=Error(c(418,""));throw Vn(Be(e,t)),Zr}function hf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[pe]=t,e[ve]=a,l){case"dialog":wt("cancel",e),wt("close",e);break;case"iframe":case"object":case"embed":wt("load",e);break;case"video":case"audio":for(l=0;l<gi.length;l++)wt(gi[l],e);break;case"source":wt("error",e);break;case"img":case"image":case"link":wt("error",e),wt("load",e);break;case"details":wt("toggle",e);break;case"input":wt("invalid",e),zs(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),qi(e);break;case"select":wt("invalid",e);break;case"textarea":wt("invalid",e),Rs(e,a.value,a.defaultValue,a.children),qi(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Sh(e.textContent,l)?(a.popover!=null&&(wt("beforetoggle",e),wt("toggle",e)),a.onScroll!=null&&wt("scroll",e),a.onScrollEnd!=null&&wt("scrollend",e),a.onClick!=null&&(e.onclick=_u),e=!0):e=!1,e||ha(t)}function pf(t){for(ye=t.return;ye;)switch(ye.tag){case 3:case 27:tl=!0;return;case 5:case 13:tl=!1;return;default:ye=ye.return}}function Yn(t){if(t!==ye)return!1;if(!Ot)return pf(t),Ot=!0,!1;var e=!1,l;if((l=t.tag!==3&&t.tag!==27)&&((l=t.tag===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||po(t.type,t.memoizedProps)),l=!l),l&&(e=!0),e&&se&&ha(t),pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){se=We(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}se=null}}else se=ye?We(t.stateNode.nextSibling):null;return!0}function Xn(){se=ye=null,Ot=!1}function Vn(t){Ke===null?Ke=[t]:Ke.push(t)}var Zn=Error(c(460)),mf=Error(c(474)),Kr={then:function(){}};function gf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lu(){}function yf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(lu,lu),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Zn?Error(c(483)):t;default:if(typeof e.status=="string")e.then(lu,lu);else{if(t=Ut,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Zn?Error(c(483)):t}throw Kn=e,Zn}}var Kn=null;function bf(){if(Kn===null)throw Error(c(459));var t=Kn;return Kn=null,t}var Pa=null,Jn=0;function au(t){var e=Jn;return Jn+=1,Pa===null&&(Pa=[]),yf(Pa,t,e)}function Wn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function nu(t,e){throw e.$$typeof===g?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vf(t){var e=t._init;return e(t._payload)}function xf(t){function e(S,v){if(t){var E=S.deletions;E===null?(S.deletions=[v],S.flags|=16):E.push(v)}}function l(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function a(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function i(S,v){return S=Gl(S,v),S.index=0,S.sibling=null,S}function u(S,v,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<v?(S.flags|=33554434,v):E):(S.flags|=33554434,v)):(S.flags|=1048576,v)}function s(S){return t&&S.alternate===null&&(S.flags|=33554434),S}function f(S,v,E,C){return v===null||v.tag!==6?(v=qc(E,S.mode,C),v.return=S,v):(v=i(v,E),v.return=S,v)}function h(S,v,E,C){var nt=E.type;return nt===A?j(S,v,E.props.children,C,E.key):v!==null&&(v.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Q&&vf(nt)===v.type)?(v=i(v,E.props),Wn(v,E),v.return=S,v):(v=Su(E.type,E.key,E.props,null,S.mode,C),Wn(v,E),v.return=S,v)}function x(S,v,E,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Gc(E,S.mode,C),v.return=S,v):(v=i(v,E.children||[]),v.return=S,v)}function j(S,v,E,C,nt){return v===null||v.tag!==7?(v=Ea(E,S.mode,C,nt),v.return=S,v):(v=i(v,E),v.return=S,v)}function B(S,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=qc(""+v,S.mode,E),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case b:return E=Su(v.type,v.key,v.props,null,S.mode,E),Wn(E,v),E.return=S,E;case T:return v=Gc(v,S.mode,E),v.return=S,v;case Q:var C=v._init;return v=C(v._payload),B(S,v,E)}if(N(v)||Z(v))return v=Ea(v,S.mode,E,null),v.return=S,v;if(typeof v.then=="function")return B(S,au(v),E);if(v.$$typeof===q)return B(S,vu(S,v),E);nu(S,v)}return null}function w(S,v,E,C){var nt=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return nt!==null?null:f(S,v,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case b:return E.key===nt?h(S,v,E,C):null;case T:return E.key===nt?x(S,v,E,C):null;case Q:return nt=E._init,E=nt(E._payload),w(S,v,E,C)}if(N(E)||Z(E))return nt!==null?null:j(S,v,E,C,null);if(typeof E.then=="function")return w(S,v,au(E),C);if(E.$$typeof===q)return w(S,v,vu(S,E),C);nu(S,E)}return null}function R(S,v,E,C,nt){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return S=S.get(E)||null,f(v,S,""+C,nt);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case b:return S=S.get(C.key===null?E:C.key)||null,h(v,S,C,nt);case T:return S=S.get(C.key===null?E:C.key)||null,x(v,S,C,nt);case Q:var At=C._init;return C=At(C._payload),R(S,v,E,C,nt)}if(N(C)||Z(C))return S=S.get(E)||null,j(v,S,C,nt,null);if(typeof C.then=="function")return R(S,v,E,au(C),nt);if(C.$$typeof===q)return R(S,v,E,vu(v,C),nt);nu(v,C)}return null}function ut(S,v,E,C){for(var nt=null,At=null,ct=v,dt=v=0,re=null;ct!==null&&dt<E.length;dt++){ct.index>dt?(re=ct,ct=null):re=ct.sibling;var Rt=w(S,ct,E[dt],C);if(Rt===null){ct===null&&(ct=re);break}t&&ct&&Rt.alternate===null&&e(S,ct),v=u(Rt,v,dt),At===null?nt=Rt:At.sibling=Rt,At=Rt,ct=re}if(dt===E.length)return l(S,ct),Ot&&da(S,dt),nt;if(ct===null){for(;dt<E.length;dt++)ct=B(S,E[dt],C),ct!==null&&(v=u(ct,v,dt),At===null?nt=ct:At.sibling=ct,At=ct);return Ot&&da(S,dt),nt}for(ct=a(ct);dt<E.length;dt++)re=R(ct,S,dt,E[dt],C),re!==null&&(t&&re.alternate!==null&&ct.delete(re.key===null?dt:re.key),v=u(re,v,dt),At===null?nt=re:At.sibling=re,At=re);return t&&ct.forEach(function(Wl){return e(S,Wl)}),Ot&&da(S,dt),nt}function gt(S,v,E,C){if(E==null)throw Error(c(151));for(var nt=null,At=null,ct=v,dt=v=0,re=null,Rt=E.next();ct!==null&&!Rt.done;dt++,Rt=E.next()){ct.index>dt?(re=ct,ct=null):re=ct.sibling;var Wl=w(S,ct,Rt.value,C);if(Wl===null){ct===null&&(ct=re);break}t&&ct&&Wl.alternate===null&&e(S,ct),v=u(Wl,v,dt),At===null?nt=Wl:At.sibling=Wl,At=Wl,ct=re}if(Rt.done)return l(S,ct),Ot&&da(S,dt),nt;if(ct===null){for(;!Rt.done;dt++,Rt=E.next())Rt=B(S,Rt.value,C),Rt!==null&&(v=u(Rt,v,dt),At===null?nt=Rt:At.sibling=Rt,At=Rt);return Ot&&da(S,dt),nt}for(ct=a(ct);!Rt.done;dt++,Rt=E.next())Rt=R(ct,S,dt,Rt.value,C),Rt!==null&&(t&&Rt.alternate!==null&&ct.delete(Rt.key===null?dt:Rt.key),v=u(Rt,v,dt),At===null?nt=Rt:At.sibling=Rt,At=Rt);return t&&ct.forEach(function(ny){return e(S,ny)}),Ot&&da(S,dt),nt}function Zt(S,v,E,C){if(typeof E=="object"&&E!==null&&E.type===A&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case b:t:{for(var nt=E.key;v!==null;){if(v.key===nt){if(nt=E.type,nt===A){if(v.tag===7){l(S,v.sibling),C=i(v,E.props.children),C.return=S,S=C;break t}}else if(v.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Q&&vf(nt)===v.type){l(S,v.sibling),C=i(v,E.props),Wn(C,E),C.return=S,S=C;break t}l(S,v);break}else e(S,v);v=v.sibling}E.type===A?(C=Ea(E.props.children,S.mode,C,E.key),C.return=S,S=C):(C=Su(E.type,E.key,E.props,null,S.mode,C),Wn(C,E),C.return=S,S=C)}return s(S);case T:t:{for(nt=E.key;v!==null;){if(v.key===nt)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){l(S,v.sibling),C=i(v,E.children||[]),C.return=S,S=C;break t}else{l(S,v);break}else e(S,v);v=v.sibling}C=Gc(E,S.mode,C),C.return=S,S=C}return s(S);case Q:return nt=E._init,E=nt(E._payload),Zt(S,v,E,C)}if(N(E))return ut(S,v,E,C);if(Z(E)){if(nt=Z(E),typeof nt!="function")throw Error(c(150));return E=nt.call(E),gt(S,v,E,C)}if(typeof E.then=="function")return Zt(S,v,au(E),C);if(E.$$typeof===q)return Zt(S,v,vu(S,E),C);nu(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,v!==null&&v.tag===6?(l(S,v.sibling),C=i(v,E),C.return=S,S=C):(l(S,v),C=qc(E,S.mode,C),C.return=S,S=C),s(S)):l(S,v)}return function(S,v,E,C){try{Jn=0;var nt=Zt(S,v,E,C);return Pa=null,nt}catch(ct){if(ct===Zn)throw ct;var At=qe(29,ct,null,S.mode);return At.lanes=C,At.return=S,At}finally{}}}var pa=xf(!0),Af=xf(!1),tn=ht(null),iu=ht(0);function Sf(t,e){t=Sl,et(iu,t),et(tn,e),Sl=t|e.baseLanes}function Jr(){et(iu,Sl),et(tn,tn.current)}function Wr(){Sl=iu.current,_(tn),_(iu)}var Ne=ht(null),el=null;function Cl(t){var e=t.alternate;et(le,le.current&1),et(Ne,t),el===null&&(e===null||tn.current!==null||e.memoizedState!==null)&&(el=t)}function Ef(t){if(t.tag===22){if(et(le,le.current),et(Ne,t),el===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(el=t)}}else _l()}function _l(){et(le,le.current),et(Ne,Ne.current)}function dl(t){_(Ne),el===t&&(el=null),_(le)}var le=ht(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Vm=n.unstable_scheduleCallback,Zm=n.unstable_NormalPriority,ae={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fr(){return{controller:new Xm,data:new Map,refCount:0}}function Fn(t){t.refCount--,t.refCount===0&&Vm(Zm,function(){t.controller.abort()})}var In=null,Ir=0,en=0,ln=null;function Km(t,e){if(In===null){var l=In=[];Ir=0,en=no(),ln={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ir++,e.then(wf,wf),e}function wf(){if(--Ir===0&&In!==null){ln!==null&&(ln.status="fulfilled");var t=In;In=null,en=0,ln=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Jm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Tf=P.S;P.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Km(t,e),Tf!==null&&Tf(t,e)};var ma=ht(null);function Pr(){var t=ma.current;return t!==null?t:Ut.pooledCache}function ru(t,e){e===null?et(ma,ma.current):et(ma,e.pool)}function Df(){var t=Pr();return t===null?null:{parent:ae._currentValue,pool:t}}var kl=0,vt=null,kt=null,Wt=null,cu=!1,an=!1,ga=!1,ou=0,Pn=0,nn=null,Wm=0;function Jt(){throw Error(c(321))}function tc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Te(t[l],e[l]))return!1;return!0}function ec(t,e,l,a,i,u){return kl=u,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,P.H=t===null||t.memoizedState===null?ya:$l,ga=!1,u=l(a,i),ga=!1,an&&(u=Of(e,l,a,i)),zf(t),u}function zf(t){P.H=ll;var e=kt!==null&&kt.next!==null;if(kl=0,Wt=kt=vt=null,cu=!1,Pn=0,nn=null,e)throw Error(c(300));t===null||ie||(t=t.dependencies,t!==null&&bu(t)&&(ie=!0))}function Of(t,e,l,a){vt=t;var i=0;do{if(an&&(nn=null),Pn=0,an=!1,25<=i)throw Error(c(301));if(i+=1,Wt=kt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}P.H=ba,u=e(l,a)}while(an);return u}function Fm(){var t=P.H,e=t.useState()[0];return e=typeof e.then=="function"?ti(e):e,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(vt.flags|=1024),e}function lc(){var t=ou!==0;return ou=0,t}function ac(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function nc(t){if(cu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}cu=!1}kl=0,Wt=kt=vt=null,an=!1,Pn=ou=0,nn=null}function Ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?vt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Ft(){if(kt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Wt===null?vt.memoizedState:Wt.next;if(e!==null)Wt=e,kt=t;else{if(t===null)throw vt.alternate===null?Error(c(467)):Error(c(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Wt===null?vt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}var su;su=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ti(t){var e=Pn;return Pn+=1,nn===null&&(nn=[]),t=yf(nn,t,e),e=vt,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,P.H=e===null||e.memoizedState===null?ya:$l),t}function fu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ti(t);if(t.$$typeof===q)return me(t)}throw Error(c(438,String(t)))}function ic(t){var e=null,l=vt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=vt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=su(),vt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=it;return e.index++,l}function hl(t,e){return typeof e=="function"?e(t):e}function du(t){var e=Ft();return uc(e,kt,t)}function uc(t,e,l){var a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=l;var i=t.baseQueue,u=a.pending;if(u!==null){if(i!==null){var s=i.next;i.next=u.next,u.next=s}e.baseQueue=i=u,a.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var f=s=null,h=null,x=e,j=!1;do{var B=x.lane&-536870913;if(B!==x.lane?(Tt&B)===B:(kl&B)===B){var w=x.revertLane;if(w===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),B===en&&(j=!0);else if((kl&w)===w){x=x.next,w===en&&(j=!0);continue}else B={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},h===null?(f=h=B,s=u):h=h.next=B,vt.lanes|=w,Yl|=w;B=x.action,ga&&l(u,B),u=x.hasEagerState?x.eagerState:l(u,B)}else w={lane:B,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},h===null?(f=h=w,s=u):h=h.next=w,vt.lanes|=B,Yl|=B;x=x.next}while(x!==null&&x!==e);if(h===null?s=u:h.next=f,!Te(u,t.memoizedState)&&(ie=!0,j&&(l=ln,l!==null)))throw l;t.memoizedState=u,t.baseState=s,t.baseQueue=h,a.lastRenderedState=u}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function rc(t){var e=Ft(),l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,u=e.memoizedState;if(i!==null){l.pending=null;var s=i=i.next;do u=t(u,s.action),s=s.next;while(s!==i);Te(u,e.memoizedState)||(ie=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Rf(t,e,l){var a=vt,i=Ft(),u=Ot;if(u){if(l===void 0)throw Error(c(407));l=l()}else l=e();var s=!Te((kt||i).memoizedState,l);if(s&&(i.memoizedState=l,ie=!0),i=i.queue,sc(Cf.bind(null,a,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(a.flags|=2048,un(9,Mf.bind(null,a,i,l,e),{destroy:void 0},null),Ut===null)throw Error(c(349));u||kl&60||jf(a,e,l)}return l}function jf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=vt.updateQueue,e===null?(e=su(),vt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Mf(t,e,l,a){e.value=l,e.getSnapshot=a,_f(e)&&kf(t)}function Cf(t,e,l){return l(function(){_f(e)&&kf(t)})}function _f(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Te(t,l)}catch{return!0}}function kf(t){var e=Ml(t,2);e!==null&&be(e,t,2)}function cc(t){var e=Ae();if(typeof t=="function"){var l=t;if(t=l(),ga){Ol(!0);try{l()}finally{Ol(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:t},e}function $f(t,e,l,a){return t.baseState=l,uc(t,kt,typeof a=="function"?a:hl)}function Im(t,e,l,a,i){if(mu(t))throw Error(c(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};P.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Bf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Bf(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var u=P.T,s={};P.T=s;try{var f=l(i,a),h=P.S;h!==null&&h(s,f),Hf(t,e,f)}catch(x){oc(t,e,x)}finally{P.T=u}}else try{u=l(i,a),Hf(t,e,u)}catch(x){oc(t,e,x)}}function Hf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Uf(t,e,a)},function(a){return oc(t,e,a)}):Uf(t,e,l)}function Uf(t,e,l){e.status="fulfilled",e.value=l,Nf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Bf(t,l)))}function oc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Nf(e),e=e.next;while(e!==a)}t.action=null}function Nf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Lf(t,e){return e}function Qf(t,e){if(Ot){var l=Ut.formState;if(l!==null){t:{var a=vt;if(Ot){if(se){e:{for(var i=se,u=tl;i.nodeType!==8;){if(!u){i=null;break e}if(i=We(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){se=We(i.nextSibling),a=i.data==="F!";break t}}ha(a)}a=!1}a&&(e=l[0])}}return l=Ae(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lf,lastRenderedState:e},l.queue=a,l=id.bind(null,vt,a),a.dispatch=l,a=cc(!1),u=mc.bind(null,vt,!1,a.queue),a=Ae(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=Im.bind(null,vt,i,u,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function qf(t){var e=Ft();return Gf(e,kt,t)}function Gf(t,e,l){e=uc(t,e,Lf)[0],t=du(hl)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?ti(e):e;var a=Ft(),i=a.queue,u=i.dispatch;return l!==a.memoizedState&&(vt.flags|=2048,un(9,Pm.bind(null,i,l),{destroy:void 0},null)),[e,u,t]}function Pm(t,e){t.action=e}function Yf(t){var e=Ft(),l=kt;if(l!==null)return Gf(e,l,t);Ft(),e=e.memoizedState,l=Ft();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function un(t,e,l,a){return t={tag:t,create:e,inst:l,deps:a,next:null},e=vt.updateQueue,e===null&&(e=su(),vt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Xf(){return Ft().memoizedState}function hu(t,e,l,a){var i=Ae();vt.flags|=t,i.memoizedState=un(1|e,l,{destroy:void 0},a===void 0?null:a)}function pu(t,e,l,a){var i=Ft();a=a===void 0?null:a;var u=i.memoizedState.inst;kt!==null&&a!==null&&tc(a,kt.memoizedState.deps)?i.memoizedState=un(e,l,u,a):(vt.flags|=t,i.memoizedState=un(1|e,l,u,a))}function Vf(t,e){hu(8390656,8,t,e)}function sc(t,e){pu(2048,8,t,e)}function Zf(t,e){return pu(4,2,t,e)}function Kf(t,e){return pu(4,4,t,e)}function Jf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wf(t,e,l){l=l!=null?l.concat([t]):null,pu(4,4,Jf.bind(null,e,t),l)}function fc(){}function Ff(t,e){var l=Ft();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&tc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function If(t,e){var l=Ft();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&tc(e,a[1]))return a[0];if(a=t(),ga){Ol(!0);try{t()}finally{Ol(!1)}}return l.memoizedState=[a,e],a}function dc(t,e,l){return l===void 0||kl&1073741824?t.memoizedState=e:(t.memoizedState=l,t=th(),vt.lanes|=t,Yl|=t,l)}function Pf(t,e,l,a){return Te(l,e)?l:tn.current!==null?(t=dc(t,l,a),Te(t,e)||(ie=!0),t):kl&42?(t=th(),vt.lanes|=t,Yl|=t,e):(ie=!0,t.memoizedState=l)}function td(t,e,l,a,i){var u=$.p;$.p=u!==0&&8>u?u:8;var s=P.T,f={};P.T=f,mc(t,!1,e,l);try{var h=i(),x=P.S;if(x!==null&&x(f,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var j=Jm(h,a);ei(t,e,j,Re(t))}else ei(t,e,a,Re(t))}catch(B){ei(t,e,{then:function(){},status:"rejected",reason:B},Re())}finally{$.p=u,P.T=s}}function tg(){}function hc(t,e,l,a){if(t.tag!==5)throw Error(c(476));var i=ed(t).queue;td(t,i,e,tt,l===null?tg:function(){return ld(t),l(a)})}function ed(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:tt},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ld(t){var e=ed(t).next.queue;ei(t,e,{},Re())}function pc(){return me(Ai)}function ad(){return Ft().memoizedState}function nd(){return Ft().memoizedState}function eg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Re();t=Ul(l);var a=Nl(e,t,l);a!==null&&(be(a,e,l),ni(a,e,l)),e={cache:Fr()},t.payload=e;return}e=e.return}}function lg(t,e,l){var a=Re();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},mu(t)?ud(e,l):(l=Yr(t,e,l,a),l!==null&&(be(l,t,a),rd(l,e,a)))}function id(t,e,l){var a=Re();ei(t,e,l,a)}function ei(t,e,l,a){var i={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(mu(t))ud(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var s=e.lastRenderedState,f=u(s,l);if(i.hasEagerState=!0,i.eagerState=f,Te(f,s))return Ii(t,e,i,0),Ut===null&&Fi(),!1}catch{}finally{}if(l=Yr(t,e,i,a),l!==null)return be(l,t,a),rd(l,e,a),!0}return!1}function mc(t,e,l,a){if(a={lane:2,revertLane:no(),action:a,hasEagerState:!1,eagerState:null,next:null},mu(t)){if(e)throw Error(c(479))}else e=Yr(t,l,a,2),e!==null&&be(e,t,2)}function mu(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function ud(t,e){an=cu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function rd(t,e,l){if(l&4194176){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,ys(t,l)}}var ll={readContext:me,use:fu,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt};ll.useCacheRefresh=Jt,ll.useMemoCache=Jt,ll.useHostTransitionStatus=Jt,ll.useFormState=Jt,ll.useActionState=Jt,ll.useOptimistic=Jt;var ya={readContext:me,use:fu,useCallback:function(t,e){return Ae().memoizedState=[t,e===void 0?null:e],t},useContext:me,useEffect:Vf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,hu(4194308,4,Jf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return hu(4194308,4,t,e)},useInsertionEffect:function(t,e){hu(4,2,t,e)},useMemo:function(t,e){var l=Ae();e=e===void 0?null:e;var a=t();if(ga){Ol(!0);try{t()}finally{Ol(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ae();if(l!==void 0){var i=l(e);if(ga){Ol(!0);try{l(e)}finally{Ol(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=lg.bind(null,vt,t),[a.memoizedState,t]},useRef:function(t){var e=Ae();return t={current:t},e.memoizedState=t},useState:function(t){t=cc(t);var e=t.queue,l=id.bind(null,vt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:fc,useDeferredValue:function(t,e){var l=Ae();return dc(l,t,e)},useTransition:function(){var t=cc(!1);return t=td.bind(null,vt,t.queue,!0,!1),Ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=vt,i=Ae();if(Ot){if(l===void 0)throw Error(c(407));l=l()}else{if(l=e(),Ut===null)throw Error(c(349));Tt&60||jf(a,e,l)}i.memoizedState=l;var u={value:l,getSnapshot:e};return i.queue=u,Vf(Cf.bind(null,a,u,t),[t]),a.flags|=2048,un(9,Mf.bind(null,a,u,l,e),{destroy:void 0},null),l},useId:function(){var t=Ae(),e=Ut.identifierPrefix;if(Ot){var l=fl,a=sl;l=(a&~(1<<32-we(a)-1)).toString(32)+l,e=":"+e+"R"+l,l=ou++,0<l&&(e+="H"+l.toString(32)),e+=":"}else l=Wm++,e=":"+e+"r"+l.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Ae().memoizedState=eg.bind(null,vt)}};ya.useMemoCache=ic,ya.useHostTransitionStatus=pc,ya.useFormState=Qf,ya.useActionState=Qf,ya.useOptimistic=function(t){var e=Ae();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=mc.bind(null,vt,!0,l),l.dispatch=e,[t,e]};var $l={readContext:me,use:fu,useCallback:Ff,useContext:me,useEffect:sc,useImperativeHandle:Wf,useInsertionEffect:Zf,useLayoutEffect:Kf,useMemo:If,useReducer:du,useRef:Xf,useState:function(){return du(hl)},useDebugValue:fc,useDeferredValue:function(t,e){var l=Ft();return Pf(l,kt.memoizedState,t,e)},useTransition:function(){var t=du(hl)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:ti(t),e]},useSyncExternalStore:Rf,useId:ad};$l.useCacheRefresh=nd,$l.useMemoCache=ic,$l.useHostTransitionStatus=pc,$l.useFormState=qf,$l.useActionState=qf,$l.useOptimistic=function(t,e){var l=Ft();return $f(l,kt,t,e)};var ba={readContext:me,use:fu,useCallback:Ff,useContext:me,useEffect:sc,useImperativeHandle:Wf,useInsertionEffect:Zf,useLayoutEffect:Kf,useMemo:If,useReducer:rc,useRef:Xf,useState:function(){return rc(hl)},useDebugValue:fc,useDeferredValue:function(t,e){var l=Ft();return kt===null?dc(l,t,e):Pf(l,kt.memoizedState,t,e)},useTransition:function(){var t=rc(hl)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:ti(t),e]},useSyncExternalStore:Rf,useId:ad};ba.useCacheRefresh=nd,ba.useMemoCache=ic,ba.useHostTransitionStatus=pc,ba.useFormState=Yf,ba.useActionState=Yf,ba.useOptimistic=function(t,e){var l=Ft();return kt!==null?$f(l,kt,t,e):(l.baseState=t,[t,l.queue.dispatch])};function gc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:mt({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var yc={isMounted:function(t){return(t=t._reactInternals)?Y(t)===t:!1},enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Re(),i=Ul(a);i.payload=e,l!=null&&(i.callback=l),e=Nl(t,i,a),e!==null&&(be(e,t,a),ni(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Re(),i=Ul(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=Nl(t,i,a),e!==null&&(be(e,t,a),ni(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Re(),a=Ul(l);a.tag=2,e!=null&&(a.callback=e),e=Nl(t,a,l),e!==null&&(be(e,t,l),ni(e,t,l))}};function cd(t,e,l,a,i,u,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,s):e.prototype&&e.prototype.isPureReactComponent?!qn(l,a)||!qn(i,u):!0}function od(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&yc.enqueueReplaceState(e,e.state,null)}function va(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=mt({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}var gu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function sd(t){gu(t)}function fd(t){console.error(t)}function dd(t){gu(t)}function yu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function hd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function bc(t,e,l){return l=Ul(l),l.tag=3,l.payload={element:null},l.callback=function(){yu(t,e)},l}function pd(t){return t=Ul(t),t.tag=3,t}function md(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var u=a.value;t.payload=function(){return i(u)},t.callback=function(){hd(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){hd(e,l,a),typeof i!="function"&&(Xl===null?Xl=new Set([this]):Xl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function ag(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ai(e,l,i,!0),l=Ne.current,l!==null){switch(l.tag){case 13:return el===null?Pc():l.alternate===null&&Vt===0&&(Vt=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===Kr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),eo(t,a,i)),!1;case 22:return l.flags|=65536,a===Kr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),eo(t,a,i)),!1}throw Error(c(435,l.tag))}return eo(t,a,i),Pc(),!1}if(Ot)return e=Ne.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Zr&&(t=Error(c(422),{cause:a}),Vn(Be(t,l)))):(a!==Zr&&(e=Error(c(423),{cause:a}),Vn(Be(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Be(a,l),i=bc(t.stateNode,a,i),_c(t,i),Vt!==4&&(Vt=2)),!1;var u=Error(c(520),{cause:a});if(u=Be(u,l),di===null?di=[u]:di.push(u),Vt!==4&&(Vt=2),e===null)return!0;a=Be(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=bc(l.stateNode,a,t),_c(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Xl===null||!Xl.has(u))))return l.flags|=65536,i&=-i,l.lanes|=i,i=pd(i),md(i,t,l,a),_c(l,i),!1}l=l.return}while(l!==null);return!1}var gd=Error(c(461)),ie=!1;function fe(t,e,l,a){e.child=t===null?Af(e,null,l,a):pa(e,t.child,l,a)}function yd(t,e,l,a,i){l=l.render;var u=e.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return Aa(e),a=ec(t,e,l,s,u,i),f=lc(),t!==null&&!ie?(ac(t,e,i),pl(t,e,i)):(Ot&&f&&Xr(e),e.flags|=1,fe(t,e,a,i),e.child)}function bd(t,e,l,a,i){if(t===null){var u=l.type;return typeof u=="function"&&!Qc(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,vd(t,e,u,a,i)):(t=Su(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!zc(t,i)){var s=u.memoizedProps;if(l=l.compare,l=l!==null?l:qn,l(s,a)&&t.ref===e.ref)return pl(t,e,i)}return e.flags|=1,t=Gl(u,a),t.ref=e.ref,t.return=e,e.child=t}function vd(t,e,l,a,i){if(t!==null){var u=t.memoizedProps;if(qn(u,a)&&t.ref===e.ref)if(ie=!1,e.pendingProps=a=u,zc(t,i))t.flags&131072&&(ie=!0);else return e.lanes=t.lanes,pl(t,e,i)}return vc(t,e,l,a,i)}function xd(t,e,l){var a=e.pendingProps,i=a.children,u=(e.stateNode._pendingVisibility&2)!==0,s=t!==null?t.memoizedState:null;if(li(t,e),a.mode==="hidden"||u){if(e.flags&128){if(a=s!==null?s.baseLanes|l:l,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~a}else e.childLanes=0,e.child=null;return Ad(t,e,a,l)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ru(e,s!==null?s.cachePool:null),s!==null?Sf(e,s):Jr(),Ef(e);else return e.lanes=e.childLanes=536870912,Ad(t,e,s!==null?s.baseLanes|l:l,l)}else s!==null?(ru(e,s.cachePool),Sf(e,s),_l(),e.memoizedState=null):(t!==null&&ru(e,null),Jr(),_l());return fe(t,e,i,l),e.child}function Ad(t,e,l,a){var i=Pr();return i=i===null?null:{parent:ae._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&ru(e,null),Jr(),Ef(e),t!==null&&ai(t,e,a,!0),null}function li(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(t===null||t.ref!==l)&&(e.flags|=2097664)}}function vc(t,e,l,a,i){return Aa(e),l=ec(t,e,l,a,void 0,i),a=lc(),t!==null&&!ie?(ac(t,e,i),pl(t,e,i)):(Ot&&a&&Xr(e),e.flags|=1,fe(t,e,l,i),e.child)}function Sd(t,e,l,a,i,u){return Aa(e),e.updateQueue=null,l=Of(e,a,l,i),zf(t),a=lc(),t!==null&&!ie?(ac(t,e,u),pl(t,e,u)):(Ot&&a&&Xr(e),e.flags|=1,fe(t,e,l,u),e.child)}function Ed(t,e,l,a,i){if(Aa(e),e.stateNode===null){var u=Wa,s=l.contextType;typeof s=="object"&&s!==null&&(u=me(s)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=yc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},Mc(e),s=l.contextType,u.context=typeof s=="object"&&s!==null?me(s):Wa,u.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(gc(e,l,s,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&yc.enqueueReplaceState(u,u.state,null),ui(e,a,u,i),ii(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var f=e.memoizedProps,h=va(l,f);u.props=h;var x=u.context,j=l.contextType;s=Wa,typeof j=="object"&&j!==null&&(s=me(j));var B=l.getDerivedStateFromProps;j=typeof B=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||x!==s)&&od(e,u,a,s),Hl=!1;var w=e.memoizedState;u.state=w,ui(e,a,u,i),ii(),x=e.memoizedState,f||w!==x||Hl?(typeof B=="function"&&(gc(e,l,B,a),x=e.memoizedState),(h=Hl||cd(e,l,h,a,w,x,s))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=x),u.props=a,u.state=x,u.context=s,a=h):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,Cc(t,e),s=e.memoizedProps,j=va(l,s),u.props=j,B=e.pendingProps,w=u.context,x=l.contextType,h=Wa,typeof x=="object"&&x!==null&&(h=me(x)),f=l.getDerivedStateFromProps,(x=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==B||w!==h)&&od(e,u,a,h),Hl=!1,w=e.memoizedState,u.state=w,ui(e,a,u,i),ii();var R=e.memoizedState;s!==B||w!==R||Hl||t!==null&&t.dependencies!==null&&bu(t.dependencies)?(typeof f=="function"&&(gc(e,l,f,a),R=e.memoizedState),(j=Hl||cd(e,l,j,a,w,R,h)||t!==null&&t.dependencies!==null&&bu(t.dependencies))?(x||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,R,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,R,h)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=R),u.props=a,u.state=R,u.context=h,a=j):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,li(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=pa(e,t.child,null,i),e.child=pa(e,null,l,i)):fe(t,e,l,i),e.memoizedState=u.state,t=e.child):t=pl(t,e,i),t}function wd(t,e,l,a){return Xn(),e.flags|=256,fe(t,e,l,a),e.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function Ac(t){return{baseLanes:t,cachePool:Df()}}function Sc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ge),t}function Td(t,e,l){var a=e.pendingProps,i=!1,u=(e.flags&128)!==0,s;if((s=u)||(s=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ot){if(i?Cl(e):_l(),Ot){var f=se,h;if(h=f){t:{for(h=f,f=tl;h.nodeType!==8;){if(!f){f=null;break t}if(h=We(h.nextSibling),h===null){f=null;break t}}f=h}f!==null?(e.memoizedState={dehydrated:f,treeContext:fa!==null?{id:sl,overflow:fl}:null,retryLane:536870912},h=qe(18,null,null,0),h.stateNode=f,h.return=e,e.child=h,ye=e,se=null,h=!0):h=!1}h||ha(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return f.data==="$!"?e.lanes=16:e.lanes=536870912,null;dl(e)}return f=a.children,a=a.fallback,i?(_l(),i=e.mode,f=wc({mode:"hidden",children:f},i),a=Ea(a,i,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,i=e.child,i.memoizedState=Ac(l),i.childLanes=Sc(t,s,l),e.memoizedState=xc,a):(Cl(e),Ec(e,f))}if(h=t.memoizedState,h!==null&&(f=h.dehydrated,f!==null)){if(u)e.flags&256?(Cl(e),e.flags&=-257,e=Tc(t,e,l)):e.memoizedState!==null?(_l(),e.child=t.child,e.flags|=128,e=null):(_l(),i=a.fallback,f=e.mode,a=wc({mode:"visible",children:a.children},f),i=Ea(i,f,l,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,pa(e,t.child,null,l),a=e.child,a.memoizedState=Ac(l),a.childLanes=Sc(t,s,l),e.memoizedState=xc,e=i);else if(Cl(e),f.data==="$!"){if(s=f.nextSibling&&f.nextSibling.dataset,s)var x=s.dgst;s=x,a=Error(c(419)),a.stack="",a.digest=s,Vn({value:a,source:null,stack:null}),e=Tc(t,e,l)}else if(ie||ai(t,e,l,!1),s=(l&t.childLanes)!==0,ie||s){if(s=Ut,s!==null){if(a=l&-l,a&42)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=a&(s.suspendedLanes|l)?0:a,a!==0&&a!==h.retryLane)throw h.retryLane=a,Ml(t,a),be(s,t,a),gd}f.data==="$?"||Pc(),e=Tc(t,e,l)}else f.data==="$?"?(e.flags|=128,e.child=t.child,e=bg.bind(null,t),f._reactRetry=e,e=null):(t=h.treeContext,se=We(f.nextSibling),ye=e,Ot=!0,Ke=null,tl=!1,t!==null&&(He[Ue++]=sl,He[Ue++]=fl,He[Ue++]=fa,sl=t.id,fl=t.overflow,fa=e),e=Ec(e,a.children),e.flags|=4096);return e}return i?(_l(),i=a.fallback,f=e.mode,h=t.child,x=h.sibling,a=Gl(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&31457280,x!==null?i=Gl(x,i):(i=Ea(i,f,l,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,f=t.child.memoizedState,f===null?f=Ac(l):(h=f.cachePool,h!==null?(x=ae._currentValue,h=h.parent!==x?{parent:x,pool:x}:h):h=Df(),f={baseLanes:f.baseLanes|l,cachePool:h}),i.memoizedState=f,i.childLanes=Sc(t,s,l),e.memoizedState=xc,a):(Cl(e),l=t.child,t=l.sibling,l=Gl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function Ec(t,e){return e=wc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function wc(t,e){return Fd(t,e,0,null)}function Tc(t,e,l){return pa(e,t.child,null,l),t=Ec(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Rc(t.return,e,l)}function Dc(t,e,l,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i)}function zd(t,e,l){var a=e.pendingProps,i=a.revealOrder,u=a.tail;if(fe(t,e,a.children,l),a=le.current,a&2)a=a&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dd(t,l,e);else if(t.tag===19)Dd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(et(le,a),i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&uu(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Dc(e,!1,i,l,u);break;case"backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Dc(e,!0,l,null,u);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Yl|=e.lanes,!(l&e.childLanes))if(t!==null){if(ai(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,l=Gl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Gl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function zc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&bu(t)))}function ng(t,e,l){switch(e.tag){case 3:Qt(e,e.stateNode.containerInfo),Bl(e,ae,t.memoizedState.cache),Xn();break;case 27:case 5:Se(e);break;case 4:Qt(e,e.stateNode.containerInfo);break;case 10:Bl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Cl(e),e.flags|=128,null):l&e.child.childLanes?Td(t,e,l):(Cl(e),t=pl(t,e,l),t!==null?t.sibling:null);Cl(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ai(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return zd(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),et(le,le.current),a)break;return null;case 22:case 23:return e.lanes=0,xd(t,e,l);case 24:Bl(e,ae,t.memoizedState.cache)}return pl(t,e,l)}function Od(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ie=!0;else{if(!zc(t,l)&&!(e.flags&128))return ie=!1,ng(t,e,l);ie=!!(t.flags&131072)}else ie=!1,Ot&&e.flags&1048576&&df(e,eu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")Qc(a)?(t=va(a,t),e.tag=1,e=Ed(null,e,a,t,l)):(e.tag=0,e=vc(null,e,a,t,l));else{if(a!=null){if(i=a.$$typeof,i===J){e.tag=11,e=yd(null,e,a,t,l);break t}else if(i===V){e.tag=14,e=bd(null,e,a,t,l);break t}}throw e=jt(a)||a,Error(c(306,e,""))}}return e;case 0:return vc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=va(a,e.pendingProps),Ed(t,e,a,i,l);case 3:t:{if(Qt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));var u=e.pendingProps;i=e.memoizedState,a=i.element,Cc(t,e),ui(e,u,null,l);var s=e.memoizedState;if(u=s.cache,Bl(e,ae,u),u!==i.cache&&jc(e,[ae],l,!0),ii(),u=s.element,i.isDehydrated)if(i={element:u,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=wd(t,e,u,l);break t}else if(u!==a){a=Be(Error(c(424)),e),Vn(a),e=wd(t,e,u,l);break t}else for(se=We(e.stateNode.containerInfo.firstChild),ye=e,Ot=!0,Ke=null,tl=!0,l=Af(e,null,u,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Xn(),u===a){e=pl(t,e,l);break t}fe(t,e,u,l)}e=e.child}return e;case 26:return li(t,e),t===null?(l=Mh(e.type,null,e.pendingProps,null))?e.memoizedState=l:Ot||(l=e.type,t=e.pendingProps,a=ku(zt.current).createElement(l),a[pe]=e,a[ve]=t,de(a,l,t),ne(a),e.stateNode=a):e.memoizedState=Mh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Se(e),t===null&&Ot&&(a=e.stateNode=Oh(e.type,e.pendingProps,zt.current),ye=e,tl=!0,se=We(a.firstChild)),a=e.pendingProps.children,t!==null||Ot?fe(t,e,a,l):e.child=pa(e,null,a,l),li(t,e),e.child;case 5:return t===null&&Ot&&((i=a=se)&&(a=kg(a,e.type,e.pendingProps,tl),a!==null?(e.stateNode=a,ye=e,se=We(a.firstChild),tl=!1,i=!0):i=!1),i||ha(e)),Se(e),i=e.type,u=e.pendingProps,s=t!==null?t.memoizedProps:null,a=u.children,po(i,u)?a=null:s!==null&&po(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=ec(t,e,Fm,null,null,l),Ai._currentValue=i),li(t,e),fe(t,e,a,l),e.child;case 6:return t===null&&Ot&&((t=l=se)&&(l=$g(l,e.pendingProps,tl),l!==null?(e.stateNode=l,ye=e,se=null,t=!0):t=!1),t||ha(e)),null;case 13:return Td(t,e,l);case 4:return Qt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=pa(e,null,a,l):fe(t,e,a,l),e.child;case 11:return yd(t,e,e.type,e.pendingProps,l);case 7:return fe(t,e,e.pendingProps,l),e.child;case 8:return fe(t,e,e.pendingProps.children,l),e.child;case 12:return fe(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Bl(e,e.type,a.value),fe(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,Aa(e),i=me(i),a=a(i),e.flags|=1,fe(t,e,a,l),e.child;case 14:return bd(t,e,e.type,e.pendingProps,l);case 15:return vd(t,e,e.type,e.pendingProps,l);case 19:return zd(t,e,l);case 22:return xd(t,e,l);case 24:return Aa(e),a=me(ae),t===null?(i=Pr(),i===null&&(i=Ut,u=Fr(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=l),i=u),e.memoizedState={parent:a,cache:i},Mc(e),Bl(e,ae,i)):(t.lanes&l&&(Cc(t,e),ui(e,null,null,l),ii()),i=t.memoizedState,u=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Bl(e,ae,a)):(a=u.cache,Bl(e,ae,a),a!==i.cache&&jc(e,[ae],l,!0))),fe(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}var Oc=ht(null),xa=null,ml=null;function Bl(t,e,l){et(Oc,e._currentValue),e._currentValue=l}function gl(t){t._currentValue=Oc.current,_(Oc)}function Rc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function jc(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var s=i.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=i;for(var h=0;h<e.length;h++)if(f.context===e[h]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),Rc(u.return,l,t),a||(s=null);break t}u=f.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=l,u=s.alternate,u!==null&&(u.lanes|=l),Rc(s,l,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ai(t,e,l,a){t=null;for(var i=e,u=!1;i!==null;){if(!u){if(i.flags&524288)u=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var f=i.type;Te(i.pendingProps.value,s.value)||(t!==null?t.push(f):t=[f])}}else if(i===Yt.current){if(s=i.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ai):t=[Ai])}i=i.return}t!==null&&jc(e,t,l,a),e.flags|=262144}function bu(t){for(t=t.firstContext;t!==null;){if(!Te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Aa(t){xa=t,ml=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function me(t){return Rd(xa,t)}function vu(t,e){return xa===null&&Aa(t),Rd(t,e)}function Rd(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ml===null){if(t===null)throw Error(c(308));ml=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ml=ml.next=e;return l}var Hl=!1;function Mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ul(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,Gt&2){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Pi(t),sf(t,null,l),e}return Ii(t,a,e,l),Pi(t)}function ni(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194176)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,ys(t,l)}}function _c(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?i=u=s:u=u.next=s,l=l.next}while(l!==null);u===null?i=u=e:u=u.next=e}else i=u=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var kc=!1;function ii(){if(kc){var t=ln;if(t!==null)throw t}}function ui(t,e,l,a){kc=!1;var i=t.updateQueue;Hl=!1;var u=i.firstBaseUpdate,s=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var h=f,x=h.next;h.next=null,s===null?u=x:s.next=x,s=h;var j=t.alternate;j!==null&&(j=j.updateQueue,f=j.lastBaseUpdate,f!==s&&(f===null?j.firstBaseUpdate=x:f.next=x,j.lastBaseUpdate=h))}if(u!==null){var B=i.baseState;s=0,j=x=h=null,f=u;do{var w=f.lane&-536870913,R=w!==f.lane;if(R?(Tt&w)===w:(a&w)===w){w!==0&&w===en&&(kc=!0),j!==null&&(j=j.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var ut=t,gt=f;w=e;var Zt=l;switch(gt.tag){case 1:if(ut=gt.payload,typeof ut=="function"){B=ut.call(Zt,B,w);break t}B=ut;break t;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=gt.payload,w=typeof ut=="function"?ut.call(Zt,B,w):ut,w==null)break t;B=mt({},B,w);break t;case 2:Hl=!0}}w=f.callback,w!==null&&(t.flags|=64,R&&(t.flags|=8192),R=i.callbacks,R===null?i.callbacks=[w]:R.push(w))}else R={lane:w,tag:f.tag,payload:f.payload,callback:f.callback,next:null},j===null?(x=j=R,h=B):j=j.next=R,s|=w;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;R=f,f=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);j===null&&(h=B),i.baseState=h,i.firstBaseUpdate=x,i.lastBaseUpdate=j,u===null&&(i.shared.lanes=0),Yl|=s,t.lanes=s,t.memoizedState=B}}function jd(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function Md(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)jd(l[t],e)}function ri(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var u=l.create,s=l.inst;a=u(),s.destroy=a}l=l.next}while(l!==i)}}catch(f){Ht(e,e.return,f)}}function Ll(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&t)===t){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,i=e;var h=l;try{f()}catch(x){Ht(i,h,x)}}}a=a.next}while(a!==u)}}catch(x){Ht(e,e.return,x)}}function Cd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Md(e,l)}catch(a){Ht(t,t.return,a)}}}function _d(t,e,l){l.props=va(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ht(t,e,a)}}function Sa(t,e){try{var l=t.ref;if(l!==null){var a=t.stateNode;switch(t.tag){case 26:case 27:case 5:var i=a;break;default:i=a}typeof l=="function"?t.refCleanup=l(i):l.current=i}}catch(u){Ht(t,e,u)}}function De(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){Ht(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Ht(t,e,i)}else l.current=null}function kd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){Ht(t,t.return,i)}}function $d(t,e,l){try{var a=t.stateNode;Rg(a,t.type,l,e),a[ve]=e}catch(i){Ht(t,t.return,i)}}function Bd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function $c(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Bd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.nodeType===8?l.parentNode.insertBefore(t,e):l.insertBefore(t,e):(l.nodeType===8?(e=l.parentNode,e.insertBefore(t,l)):(e=l,e.appendChild(t)),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=_u));else if(a!==4&&a!==27&&(t=t.child,t!==null))for(Bc(t,e,l),t=t.sibling;t!==null;)Bc(t,e,l),t=t.sibling}function xu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&a!==27&&(t=t.child,t!==null))for(xu(t,e,l),t=t.sibling;t!==null;)xu(t,e,l),t=t.sibling}var yl=!1,Xt=!1,Hc=!1,Hd=typeof WeakSet=="function"?WeakSet:Set,ue=null,Ud=!1;function ig(t,e){if(t=t.containerInfo,fo=Lu,t=tf(t),Nr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var s=0,f=-1,h=-1,x=0,j=0,B=t,w=null;e:for(;;){for(var R;B!==l||i!==0&&B.nodeType!==3||(f=s+i),B!==u||a!==0&&B.nodeType!==3||(h=s+a),B.nodeType===3&&(s+=B.nodeValue.length),(R=B.firstChild)!==null;)w=B,B=R;for(;;){if(B===t)break e;if(w===l&&++x===i&&(f=s),w===u&&++j===a&&(h=s),(R=B.nextSibling)!==null)break;B=w,w=B.parentNode}B=R}l=f===-1||h===-1?null:{start:f,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(ho={focusedElem:t,selectionRange:l},Lu=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){switch(e=ue,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&u!==null){t=void 0,l=e,i=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var ut=va(l.type,i,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(ut,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(gt){Ht(l,l.return,gt)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)yo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}return ut=Ud,Ud=!1,ut}function Nd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:vl(t,l),a&4&&ri(5,l);break;case 1:if(vl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(f){Ht(l,l.return,f)}else{var i=va(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Ht(l,l.return,f)}}a&64&&Cd(l),a&512&&Sa(l,l.return);break;case 3:if(vl(t,l),a&64&&(a=l.updateQueue,a!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Md(a,t)}catch(f){Ht(l,l.return,f)}}break;case 26:vl(t,l),a&512&&Sa(l,l.return);break;case 27:case 5:vl(t,l),e===null&&a&4&&kd(l),a&512&&Sa(l,l.return);break;case 12:vl(t,l);break;case 13:vl(t,l),a&4&&qd(t,l);break;case 22:if(i=l.memoizedState!==null||yl,!i){e=e!==null&&e.memoizedState!==null||Xt;var u=yl,s=Xt;yl=i,(Xt=e)&&!s?Ql(t,l,(l.subtreeFlags&8772)!==0):vl(t,l),yl=u,Xt=s}a&512&&(l.memoizedProps.mode==="manual"?Sa(l,l.return):De(l,l.return));break;default:vl(t,l)}}function Ld(t){var e=t.alternate;e!==null&&(t.alternate=null,Ld(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Er(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var It=null,ze=!1;function bl(t,e,l){for(l=l.child;l!==null;)Qd(t,e,l),l=l.sibling}function Qd(t,e,l){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(jn,l)}catch{}switch(l.tag){case 26:Xt||De(l,e),bl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Xt||De(l,e);var a=It,i=ze;for(It=l.stateNode,bl(t,e,l),l=l.stateNode,e=l.attributes;e.length;)l.removeAttributeNode(e[0]);Er(l),It=a,ze=i;break;case 5:Xt||De(l,e);case 6:i=It;var u=ze;if(It=null,bl(t,e,l),It=i,ze=u,It!==null)if(ze)try{t=It,a=l.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)}catch(s){Ht(l,e,s)}else try{It.removeChild(l.stateNode)}catch(s){Ht(l,e,s)}break;case 18:It!==null&&(ze?(e=It,l=l.stateNode,e.nodeType===8?go(e.parentNode,l):e.nodeType===1&&go(e,l),Ti(e)):go(It,l.stateNode));break;case 4:a=It,i=ze,It=l.stateNode.containerInfo,ze=!0,bl(t,e,l),It=a,ze=i;break;case 0:case 11:case 14:case 15:Xt||Ll(2,l,e),Xt||Ll(4,l,e),bl(t,e,l);break;case 1:Xt||(De(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&_d(l,e,a)),bl(t,e,l);break;case 21:bl(t,e,l);break;case 22:Xt||De(l,e),Xt=(a=Xt)||l.memoizedState!==null,bl(t,e,l),Xt=a;break;default:bl(t,e,l)}}function qd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ti(t)}catch(l){Ht(e,e.return,l)}}function ug(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Hd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Hd),e;default:throw Error(c(435,t.tag))}}function Uc(t,e){var l=ug(t);e.forEach(function(a){var i=vg.bind(null,t,a);l.has(a)||(l.add(a),a.then(i,i))})}function Le(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],u=t,s=e,f=s;t:for(;f!==null;){switch(f.tag){case 27:case 5:It=f.stateNode,ze=!1;break t;case 3:It=f.stateNode.containerInfo,ze=!0;break t;case 4:It=f.stateNode.containerInfo,ze=!0;break t}f=f.return}if(It===null)throw Error(c(160));Qd(u,s,i),It=null,ze=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Gd(e,t),e=e.sibling}var Je=null;function Gd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Le(e,t),Qe(t),a&4&&(Ll(3,t,t.return),ri(3,t),Ll(5,t,t.return));break;case 1:Le(e,t),Qe(t),a&512&&(Xt||l===null||De(l,l.return)),a&64&&yl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Je;if(Le(e,t),Qe(t),a&512&&(Xt||l===null||De(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":u=i.getElementsByTagName("title")[0],(!u||u[_n]||u[pe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(a),i.head.insertBefore(u,i.querySelector("head > title"))),de(u,a,l),u[pe]=t,ne(u),a=u;break t;case"link":var s=kh("link","href",i).get(a+(l.href||""));if(s){for(var f=0;f<s.length;f++)if(u=s[f],u.getAttribute("href")===(l.href==null?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(f,1);break e}}u=i.createElement(a),de(u,a,l),i.head.appendChild(u);break;case"meta":if(s=kh("meta","content",i).get(a+(l.content||""))){for(f=0;f<s.length;f++)if(u=s[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(f,1);break e}}u=i.createElement(a),de(u,a,l),i.head.appendChild(u);break;default:throw Error(c(468,a))}u[pe]=t,ne(u),a=u}t.stateNode=a}else $h(i,t.type,t.stateNode);else t.stateNode=_h(i,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?$h(i,t.type,t.stateNode):_h(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&$d(t,t.memoizedProps,l.memoizedProps)}break;case 27:if(a&4&&t.alternate===null){i=t.stateNode,u=t.memoizedProps;try{for(var h=i.firstChild;h;){var x=h.nextSibling,j=h.nodeName;h[_n]||j==="HEAD"||j==="BODY"||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&h.rel.toLowerCase()==="stylesheet"||i.removeChild(h),h=x}for(var B=t.type,w=i.attributes;w.length;)i.removeAttributeNode(w[0]);de(i,B,u),i[pe]=t,i[ve]=u}catch(ut){Ht(t,t.return,ut)}}case 5:if(Le(e,t),Qe(t),a&512&&(Xt||l===null||De(l,l.return)),t.flags&32){i=t.stateNode;try{Ga(i,"")}catch(ut){Ht(t,t.return,ut)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,$d(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Hc=!0);break;case 6:if(Le(e,t),Qe(t),a&4){if(t.stateNode===null)throw Error(c(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(ut){Ht(t,t.return,ut)}}break;case 3:if(Hu=null,i=Je,Je=$u(e.containerInfo),Le(e,t),Je=i,Qe(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ti(e.containerInfo)}catch(ut){Ht(t,t.return,ut)}Hc&&(Hc=!1,Yd(t));break;case 4:a=Je,Je=$u(t.stateNode.containerInfo),Le(e,t),Qe(t),Je=a;break;case 12:Le(e,t),Qe(t);break;case 13:Le(e,t),Qe(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Zc=Ve()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Uc(t,a)));break;case 22:if(a&512&&(Xt||l===null||De(l,l.return)),h=t.memoizedState!==null,x=l!==null&&l.memoizedState!==null,j=yl,B=Xt,yl=j||h,Xt=B||x,Le(e,t),Xt=B,yl=j,Qe(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=h?e._visibility&-2:e._visibility|1,h&&(e=yl||Xt,l===null||x||e||rn(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(l=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(l===null){x=l=e;try{if(i=x.stateNode,h)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=x.stateNode,f=x.memoizedProps.style;var R=f!=null&&f.hasOwnProperty("display")?f.display:null;s.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(ut){Ht(x,x.return,ut)}}}else if(e.tag===6){if(l===null){x=e;try{x.stateNode.nodeValue=h?"":x.memoizedProps}catch(ut){Ht(x,x.return,ut)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Uc(t,l))));break;case 19:Le(e,t),Qe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Uc(t,a)));break;case 21:break;default:Le(e,t),Qe(t)}}function Qe(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var l=t.return;l!==null;){if(Bd(l)){var a=l;break t}l=l.return}throw Error(c(160))}switch(a.tag){case 27:var i=a.stateNode,u=$c(t);xu(t,u,i);break;case 5:var s=a.stateNode;a.flags&32&&(Ga(s,""),a.flags&=-33);var f=$c(t);xu(t,f,s);break;case 3:case 4:var h=a.stateNode.containerInfo,x=$c(t);Bc(t,x,h);break;default:throw Error(c(161))}}}catch(j){Ht(t,t.return,j)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Yd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function vl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Nd(t,e.alternate,e),e=e.sibling}function rn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ll(4,e,e.return),rn(e);break;case 1:De(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&_d(e,e.return,l),rn(e);break;case 26:case 27:case 5:De(e,e.return),rn(e);break;case 22:De(e,e.return),e.memoizedState===null&&rn(e);break;default:rn(e)}t=t.sibling}}function Ql(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,u=e,s=u.flags;switch(u.tag){case 0:case 11:case 15:Ql(i,u,l),ri(4,u);break;case 1:if(Ql(i,u,l),a=u,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(x){Ht(a,a.return,x)}if(a=u,i=a.updateQueue,i!==null){var f=a.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)jd(h[i],f)}catch(x){Ht(a,a.return,x)}}l&&s&64&&Cd(u),Sa(u,u.return);break;case 26:case 27:case 5:Ql(i,u,l),l&&a===null&&s&4&&kd(u),Sa(u,u.return);break;case 12:Ql(i,u,l);break;case 13:Ql(i,u,l),l&&s&4&&qd(i,u);break;case 22:u.memoizedState===null&&Ql(i,u,l),Sa(u,u.return);break;default:Ql(i,u,l)}e=e.sibling}}function Nc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Fn(l))}function Lc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fn(t))}function ql(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xd(t,e,l,a),e=e.sibling}function Xd(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ql(t,e,l,a),i&2048&&ri(9,e);break;case 3:ql(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fn(t)));break;case 12:if(i&2048){ql(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,s=u.id,f=u.onPostCommit;typeof f=="function"&&f(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ht(e,e.return,h)}}else ql(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,e.memoizedState!==null?u._visibility&4?ql(t,e,l,a):ci(t,e):u._visibility&4?ql(t,e,l,a):(u._visibility|=4,cn(t,e,l,a,(e.subtreeFlags&10256)!==0)),i&2048&&Nc(e.alternate,e);break;case 24:ql(t,e,l,a),i&2048&&Lc(e.alternate,e);break;default:ql(t,e,l,a)}}function cn(t,e,l,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,s=e,f=l,h=a,x=s.flags;switch(s.tag){case 0:case 11:case 15:cn(u,s,f,h,i),ri(8,s);break;case 23:break;case 22:var j=s.stateNode;s.memoizedState!==null?j._visibility&4?cn(u,s,f,h,i):ci(u,s):(j._visibility|=4,cn(u,s,f,h,i)),i&&x&2048&&Nc(s.alternate,s);break;case 24:cn(u,s,f,h,i),i&&x&2048&&Lc(s.alternate,s);break;default:cn(u,s,f,h,i)}e=e.sibling}}function ci(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:ci(l,a),i&2048&&Nc(a.alternate,a);break;case 24:ci(l,a),i&2048&&Lc(a.alternate,a);break;default:ci(l,a)}e=e.sibling}}var oi=8192;function on(t){if(t.subtreeFlags&oi)for(t=t.child;t!==null;)Vd(t),t=t.sibling}function Vd(t){switch(t.tag){case 26:on(t),t.flags&oi&&t.memoizedState!==null&&Kg(Je,t.memoizedState,t.memoizedProps);break;case 5:on(t);break;case 3:case 4:var e=Je;Je=$u(t.stateNode.containerInfo),on(t),Je=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=oi,oi=16777216,on(t),oi=e):on(t));break;default:on(t)}}function Zd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function si(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,Jd(a,t)}Zd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kd(t),t=t.sibling}function Kd(t){switch(t.tag){case 0:case 11:case 15:si(t),t.flags&2048&&Ll(9,t,t.return);break;case 3:si(t);break;case 12:si(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Au(t)):si(t);break;default:si(t)}}function Au(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,Jd(a,t)}Zd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ll(8,e,e.return),Au(e);break;case 22:l=e.stateNode,l._visibility&4&&(l._visibility&=-5,Au(e));break;default:Au(e)}t=t.sibling}}function Jd(t,e){for(;ue!==null;){var l=ue;switch(l.tag){case 0:case 11:case 15:Ll(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Fn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ue=a;else t:for(l=t;ue!==null;){a=ue;var i=a.sibling,u=a.return;if(Ld(a),a===l){ue=null;break t}if(i!==null){i.return=u,ue=i;break t}ue=u}}}function rg(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,l,a){return new rg(t,e,l,a)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gl(t,e){var l=t.alternate;return l===null?(l=qe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&31457280,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Wd(t,e){t.flags&=31457282;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Su(t,e,l,a,i,u){var s=0;if(a=t,typeof t=="function")Qc(t)&&(s=1);else if(typeof t=="string")s=Vg(t,l,pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return Ea(l.children,i,u,e);case y:s=8,i|=24;break;case M:return t=qe(12,l,e,i|2),t.elementType=M,t.lanes=u,t;case lt:return t=qe(13,l,e,i),t.elementType=lt,t.lanes=u,t;case W:return t=qe(19,l,e,i),t.elementType=W,t.lanes=u,t;case X:return Fd(l,i,u,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:case q:s=10;break t;case H:s=9;break t;case J:s=11;break t;case V:s=14;break t;case Q:s=16,a=null;break t}s=29,l=Error(c(130,t===null?"null":typeof t,"")),a=null}return e=qe(s,l,e,i),e.elementType=t,e.type=a,e.lanes=u,e}function Ea(t,e,l,a){return t=qe(7,t,a,e),t.lanes=l,t}function Fd(t,e,l,a){t=qe(22,t,a,e),t.elementType=X,t.lanes=l;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=i._current;if(u===null)throw Error(c(456));if(!(i._pendingVisibility&2)){var s=Ml(u,2);s!==null&&(i._pendingVisibility|=2,be(s,u,2))}},attach:function(){var u=i._current;if(u===null)throw Error(c(456));if(i._pendingVisibility&2){var s=Ml(u,2);s!==null&&(i._pendingVisibility&=-3,be(s,u,2))}}};return t.stateNode=i,t}function qc(t,e,l){return t=qe(6,t,null,e),t.lanes=l,t}function Gc(t,e,l){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xl(t){t.flags|=4}function Id(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Bh(e)){if(e=Ne.current,e!==null&&((Tt&4194176)===Tt?el!==null:(Tt&62914560)!==Tt&&!(Tt&536870912)||e!==el))throw Kn=Kr,mf;t.flags|=8192}}function Eu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ms():536870912,t.lanes|=e,fn|=e)}function fi(t,e){if(!Ot)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&31457280,a|=i.flags&31457280,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function cg(t,e,l){var a=e.pendingProps;switch(Vr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return qt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),gl(ae),ee(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Yn(e)?xl(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ke!==null&&(Fc(Ke),Ke=null))),qt(e),null;case 26:return l=e.memoizedState,t===null?(xl(e),l!==null?(qt(e),Id(e,l)):(qt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(xl(e),qt(e),Id(e,l)):(qt(e),e.flags&=-16777217):(t.memoizedProps!==a&&xl(e),qt(e),e.flags&=-16777217),null;case 27:Me(e),l=zt.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&xl(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return qt(e),null}t=pt.current,Yn(e)?hf(e):(t=Oh(i,a,l),e.stateNode=t,xl(e))}return qt(e),null;case 5:if(Me(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&xl(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return qt(e),null}if(t=pt.current,Yn(e))hf(e);else{switch(i=ku(zt.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}t[pe]=e,t[ve]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(de(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&xl(e)}}return qt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&xl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(c(166));if(t=zt.current,Yn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=ye,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[pe]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Sh(t.nodeValue,l)),t||ha(e)}else t=ku(t).createTextNode(a),t[pe]=e,e.stateNode=t}return qt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Yn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(c(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[pe]=e}else Xn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),i=!1}else Ke!==null&&(Fc(Ke),Ke=null),i=!0;if(!i)return e.flags&256?(dl(e),e):(dl(e),null)}if(dl(e),e.flags&128)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==i&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Eu(e,e.updateQueue),qt(e),null;case 4:return ee(),t===null&&co(e.stateNode.containerInfo),qt(e),null;case 10:return gl(e.type),qt(e),null;case 19:if(_(le),i=e.memoizedState,i===null)return qt(e),null;if(a=(e.flags&128)!==0,u=i.rendering,u===null)if(a)fi(i,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(u=uu(t),u!==null){for(e.flags|=128,fi(i,!1),t=u.updateQueue,e.updateQueue=t,Eu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Wd(l,t),l=l.sibling;return et(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ve()>wu&&(e.flags|=128,a=!0,fi(i,!1),e.lanes=4194304)}else{if(!a)if(t=uu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Eu(e,t),fi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Ot)return qt(e),null}else 2*Ve()-i.renderingStartTime>wu&&l!==536870912&&(e.flags|=128,a=!0,fi(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ve(),e.sibling=null,t=le.current,et(le,a?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return dl(e),Wr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?l&536870912&&!(e.flags&128)&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),l=e.updateQueue,l!==null&&Eu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&_(ma),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),gl(ae),qt(e),null;case 25:return null}throw Error(c(156,e.tag))}function og(t,e){switch(Vr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gl(ae),ee(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Me(e),null;case 13:if(dl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));Xn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _(le),null;case 4:return ee(),null;case 10:return gl(e.type),null;case 22:case 23:return dl(e),Wr(),t!==null&&_(ma),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return gl(ae),null;case 25:return null;default:return null}}function Pd(t,e){switch(Vr(e),e.tag){case 3:gl(ae),ee();break;case 26:case 27:case 5:Me(e);break;case 4:ee();break;case 13:dl(e);break;case 19:_(le);break;case 10:gl(e.type);break;case 22:case 23:dl(e),Wr(),t!==null&&_(ma);break;case 24:gl(ae)}}var sg={getCacheForType:function(t){var e=me(ae),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},fg=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Ut=null,St=null,Tt=0,Nt=0,Oe=null,Al=!1,sn=!1,Yc=!1,Sl=0,Vt=0,Yl=0,wa=0,Xc=0,Ge=0,fn=0,di=null,al=null,Vc=!1,Zc=0,wu=1/0,Tu=null,Xl=null,Du=!1,Ta=null,hi=0,Kc=0,Jc=null,pi=0,Wc=null;function Re(){if(Gt&2&&Tt!==0)return Tt&-Tt;if(P.T!==null){var t=en;return t!==0?t:no()}return vs()}function th(){Ge===0&&(Ge=!(Tt&536870912)||Ot?ps():536870912);var t=Ne.current;return t!==null&&(t.flags|=32),Ge}function be(t,e,l){(t===Ut&&Nt===2||t.cancelPendingCommit!==null)&&(dn(t,0),El(t,Tt,Ge,!1)),Cn(t,l),(!(Gt&2)||t!==Ut)&&(t===Ut&&(!(Gt&2)&&(wa|=l),Vt===4&&El(t,Tt,Ge,!1)),nl(t))}function eh(t,e,l){if(Gt&6)throw Error(c(327));var a=!l&&(e&60)===0&&(e&t.expiredLanes)===0||Mn(t,e),i=a?pg(t,e):to(t,e,!0),u=a;do{if(i===0){sn&&!a&&El(t,e,0,!1);break}else if(i===6)El(t,e,0,!Al);else{if(l=t.current.alternate,u&&!dg(l)){i=to(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var f=t;i=di;var h=f.current.memoizedState.isDehydrated;if(h&&(dn(f,s).flags|=256),s=to(f,s,!1),s!==2){if(Yc&&!h){f.errorRecoveryDisabledLanes|=u,wa|=u,i=4;break t}u=al,al=i,u!==null&&Fc(u)}i=s}if(u=!1,i!==2)continue}}if(i===1){dn(t,0),El(t,e,0,!0);break}t:{switch(a=t,i){case 0:case 1:throw Error(c(345));case 4:if((e&4194176)===e){El(a,e,Ge,!Al);break t}break;case 2:al=null;break;case 3:case 5:break;default:throw Error(c(329))}if(a.finishedWork=l,a.finishedLanes=e,(e&62914560)===e&&(u=Zc+300-Ve(),10<u)){if(El(a,e,Ge,!Al),Ni(a,0)!==0)break t;a.timeoutHandle=Th(lh.bind(null,a,l,al,Tu,Vc,e,Ge,wa,fn,Al,2,-0,0),u);break t}lh(a,l,al,Tu,Vc,e,Ge,wa,fn,Al,0,-0,0)}}break}while(!0);nl(t)}function Fc(t){al===null?al=t:al.push.apply(al,t)}function lh(t,e,l,a,i,u,s,f,h,x,j,B,w){var R=e.subtreeFlags;if((R&8192||(R&16785408)===16785408)&&(xi={stylesheets:null,count:0,unsuspend:Zg},Vd(e),e=Jg(),e!==null)){t.cancelPendingCommit=e(oh.bind(null,t,l,a,i,s,f,h,1,B,w)),El(t,u,s,!x);return}oh(t,l,a,i,s,f,h,j,B,w)}function dg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],u=i.getSnapshot;i=i.value;try{if(!Te(u(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function El(t,e,l,a){e&=~Xc,e&=~wa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var u=31-we(i),s=1<<u;a[u]=-1,i&=~s}l!==0&&gs(t,l,e)}function zu(){return Gt&6?!0:(mi(0),!1)}function Ic(){if(St!==null){if(Nt===0)var t=St.return;else t=St,ml=xa=null,nc(t),Pa=null,Jn=0,t=St;for(;t!==null;)Pd(t.alternate,t),t=t.return;St=null}}function dn(t,e){t.finishedWork=null,t.finishedLanes=0;var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Mg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ic(),Ut=t,St=l=Gl(t.current,null),Tt=e,Nt=0,Oe=null,Al=!1,sn=Mn(t,e),Yc=!1,fn=Ge=Xc=wa=Yl=Vt=0,al=di=null,Vc=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-we(a),u=1<<i;e|=t[i],a&=~u}return Sl=e,Fi(),l}function ah(t,e){vt=null,P.H=ll,e===Zn?(e=bf(),Nt=3):e===mf?(e=bf(),Nt=4):Nt=e===gd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Oe=e,St===null&&(Vt=1,yu(t,Be(e,t.current)))}function nh(){var t=P.H;return P.H=ll,t===null?ll:t}function ih(){var t=P.A;return P.A=sg,t}function Pc(){Vt=4,Al||(Tt&4194176)!==Tt&&Ne.current!==null||(sn=!0),!(Yl&134217727)&&!(wa&134217727)||Ut===null||El(Ut,Tt,Ge,!1)}function to(t,e,l){var a=Gt;Gt|=2;var i=nh(),u=ih();(Ut!==t||Tt!==e)&&(Tu=null,dn(t,e)),e=!1;var s=Vt;t:do try{if(Nt!==0&&St!==null){var f=St,h=Oe;switch(Nt){case 8:Ic(),s=6;break t;case 3:case 2:case 6:Ne.current===null&&(e=!0);var x=Nt;if(Nt=0,Oe=null,hn(t,f,h,x),l&&sn){s=0;break t}break;default:x=Nt,Nt=0,Oe=null,hn(t,f,h,x)}}hg(),s=Vt;break}catch(j){ah(t,j)}while(!0);return e&&t.shellSuspendCounter++,ml=xa=null,Gt=a,P.H=i,P.A=u,St===null&&(Ut=null,Tt=0,Fi()),s}function hg(){for(;St!==null;)uh(St)}function pg(t,e){var l=Gt;Gt|=2;var a=nh(),i=ih();Ut!==t||Tt!==e?(Tu=null,wu=Ve()+500,dn(t,e)):sn=Mn(t,e);t:do try{if(Nt!==0&&St!==null){e=St;var u=Oe;e:switch(Nt){case 1:Nt=0,Oe=null,hn(t,e,u,1);break;case 2:if(gf(u)){Nt=0,Oe=null,rh(e);break}e=function(){Nt===2&&Ut===t&&(Nt=7),nl(t)},u.then(e,e);break t;case 3:Nt=7;break t;case 4:Nt=5;break t;case 7:gf(u)?(Nt=0,Oe=null,rh(e)):(Nt=0,Oe=null,hn(t,e,u,7));break;case 5:var s=null;switch(St.tag){case 26:s=St.memoizedState;case 5:case 27:var f=St;if(!s||Bh(s)){Nt=0,Oe=null;var h=f.sibling;if(h!==null)St=h;else{var x=f.return;x!==null?(St=x,Ou(x)):St=null}break e}}Nt=0,Oe=null,hn(t,e,u,5);break;case 6:Nt=0,Oe=null,hn(t,e,u,6);break;case 8:Ic(),Vt=6;break t;default:throw Error(c(462))}}mg();break}catch(j){ah(t,j)}while(!0);return ml=xa=null,P.H=a,P.A=i,Gt=l,St!==null?0:(Ut=null,Tt=0,Fi(),Vt)}function mg(){for(;St!==null&&!na();)uh(St)}function uh(t){var e=Od(t.alternate,t,Sl);t.memoizedProps=t.pendingProps,e===null?Ou(t):St=e}function rh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Sd(l,e,e.pendingProps,e.type,void 0,Tt);break;case 11:e=Sd(l,e,e.pendingProps,e.type.render,e.ref,Tt);break;case 5:nc(e);default:Pd(l,e),e=St=Wd(e,Sl),e=Od(l,e,Sl)}t.memoizedProps=t.pendingProps,e===null?Ou(t):St=e}function hn(t,e,l,a){ml=xa=null,nc(e),Pa=null,Jn=0;var i=e.return;try{if(ag(t,i,e,l,Tt)){Vt=1,yu(t,Be(l,t.current)),St=null;return}}catch(u){if(i!==null)throw St=i,u;Vt=1,yu(t,Be(l,t.current)),St=null;return}e.flags&32768?(Ot||a===1?t=!0:sn||Tt&536870912?t=!1:(Al=t=!0,(a===2||a===3||a===6)&&(a=Ne.current,a!==null&&a.tag===13&&(a.flags|=16384))),ch(e,t)):Ou(e)}function Ou(t){var e=t;do{if(e.flags&32768){ch(e,Al);return}t=e.return;var l=cg(e.alternate,e,Sl);if(l!==null){St=l;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Vt===0&&(Vt=5)}function ch(t,e){do{var l=og(t.alternate,t);if(l!==null){l.flags&=32767,St=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){St=t;return}St=t=l}while(t!==null);Vt=6,St=null}function oh(t,e,l,a,i,u,s,f,h,x){var j=P.T,B=$.p;try{$.p=2,P.T=null,gg(t,e,l,a,B,i,u,s,f,h,x)}finally{P.T=j,$.p=B}}function gg(t,e,l,a,i,u,s,f){do pn();while(Ta!==null);if(Gt&6)throw Error(c(327));var h=t.finishedWork;if(a=t.finishedLanes,h===null)return null;if(t.finishedWork=null,t.finishedLanes=0,h===t.current)throw Error(c(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var x=h.lanes|h.childLanes;if(x|=Gr,K0(t,a,x,u,s,f),t===Ut&&(St=Ut=null,Tt=0),!(h.subtreeFlags&10256)&&!(h.flags&10256)||Du||(Du=!0,Kc=x,Jc=l,xg(Bi,function(){return pn(),null})),l=(h.flags&15990)!==0,h.subtreeFlags&15990||l?(l=P.T,P.T=null,u=$.p,$.p=2,s=Gt,Gt|=4,ig(t,h),Gd(h,t),Lm(ho,t.containerInfo),Lu=!!fo,ho=fo=null,t.current=h,Nd(t,h.alternate,h),$i(),Gt=s,$.p=u,P.T=l):t.current=h,Du?(Du=!1,Ta=t,hi=a):sh(t,x),x=t.pendingLanes,x===0&&(Xl=null),G0(h.stateNode),nl(t),e!==null)for(i=t.onRecoverableError,h=0;h<e.length;h++)x=e[h],i(x.value,{componentStack:x.stack});return hi&3&&pn(),x=t.pendingLanes,a&4194218&&x&42?t===Wc?pi++:(pi=0,Wc=t):pi=0,mi(0),null}function sh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Fn(e)))}function pn(){if(Ta!==null){var t=Ta,e=Kc;Kc=0;var l=bs(hi),a=P.T,i=$.p;try{if($.p=32>l?32:l,P.T=null,Ta===null)var u=!1;else{l=Jc,Jc=null;var s=Ta,f=hi;if(Ta=null,hi=0,Gt&6)throw Error(c(331));var h=Gt;if(Gt|=4,Kd(s.current),Xd(s,s.current,f,l),Gt=h,mi(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(jn,s)}catch{}u=!0}return u}finally{$.p=i,P.T=a,sh(t,e)}}return!1}function fh(t,e,l){e=Be(l,e),e=bc(t.stateNode,e,2),t=Nl(t,e,2),t!==null&&(Cn(t,2),nl(t))}function Ht(t,e,l){if(t.tag===3)fh(t,t,l);else for(;e!==null;){if(e.tag===3){fh(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xl===null||!Xl.has(a))){t=Be(l,t),l=pd(2),a=Nl(e,l,2),a!==null&&(md(l,a,e,t),Cn(a,2),nl(a));break}}e=e.return}}function eo(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new fg;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(Yc=!0,i.add(l),t=yg.bind(null,t,e,l),e.then(t,t))}function yg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Ut===t&&(Tt&l)===l&&(Vt===4||Vt===3&&(Tt&62914560)===Tt&&300>Ve()-Zc?!(Gt&2)&&dn(t,0):Xc|=l,fn===Tt&&(fn=0)),nl(t)}function dh(t,e){e===0&&(e=ms()),t=Ml(t,e),t!==null&&(Cn(t,e),nl(t))}function bg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),dh(t,l)}function vg(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(e),dh(t,l)}function xg(t,e){return la(t,e)}var Ru=null,mn=null,lo=!1,ju=!1,ao=!1,Da=0;function nl(t){t!==mn&&t.next===null&&(mn===null?Ru=mn=t:mn=mn.next=t),ju=!0,lo||(lo=!0,Sg(Ag))}function mi(t,e){if(!ao&&ju){ao=!0;do for(var l=!1,a=Ru;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var u=0;else{var s=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-we(42|t)+1)-1,u&=i&~(s&~f),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(l=!0,mh(a,u))}else u=Tt,u=Ni(a,a===Ut?u:0),!(u&3)||Mn(a,u)||(l=!0,mh(a,u));a=a.next}while(l);ao=!1}}function Ag(){ju=lo=!1;var t=0;Da!==0&&(jg()&&(t=Da),Da=0);for(var e=Ve(),l=null,a=Ru;a!==null;){var i=a.next,u=hh(a,e);u===0?(a.next=null,l===null?Ru=i:l.next=i,i===null&&(mn=l)):(l=a,(t!==0||u&3)&&(ju=!0)),a=i}mi(t)}function hh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var s=31-we(u),f=1<<s,h=i[s];h===-1?(!(f&l)||f&a)&&(i[s]=Z0(f,e)):h<=e&&(t.expiredLanes|=f),u&=~f}if(e=Ut,l=Tt,l=Ni(t,t===e?l:0),a=t.callbackNode,l===0||t===e&&Nt===2||t.cancelPendingCommit!==null)return a!==null&&a!==null&&aa(a),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||Mn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&aa(a),bs(l)){case 2:case 8:l=ds;break;case 32:l=Bi;break;case 268435456:l=hs;break;default:l=Bi}return a=ph.bind(null,t),l=la(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&aa(a),t.callbackPriority=2,t.callbackNode=null,2}function ph(t,e){var l=t.callbackNode;if(pn()&&t.callbackNode!==l)return null;var a=Tt;return a=Ni(t,t===Ut?a:0),a===0?null:(eh(t,a,e),hh(t,Ve()),t.callbackNode!=null&&t.callbackNode===l?ph.bind(null,t):null)}function mh(t,e){if(pn())return null;eh(t,e,!0)}function Sg(t){Cg(function(){Gt&6?la(fs,t):t()})}function no(){return Da===0&&(Da=ps()),Da}function gh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yi(""+t)}function yh(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Eg(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var u=gh((i[ve]||null).action),s=a.submitter;s&&(e=(e=s[ve]||null)?gh(e.formAction):s.getAttribute("formAction"),e!==null&&(u=e,s=null));var f=new Ki("action","action",null,a,i);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Da!==0){var h=s?yh(i,s):new FormData(i);hc(l,{pending:!0,data:h,method:i.method,action:u},null,h)}}else typeof u=="function"&&(f.preventDefault(),h=s?yh(i,s):new FormData(i),hc(l,{pending:!0,data:h,method:i.method,action:u},u,h))},currentTarget:i}]})}}for(var io=0;io<of.length;io++){var uo=of[io],wg=uo.toLowerCase(),Tg=uo[0].toUpperCase()+uo.slice(1);Ze(wg,"on"+Tg)}Ze(af,"onAnimationEnd"),Ze(nf,"onAnimationIteration"),Ze(uf,"onAnimationStart"),Ze("dblclick","onDoubleClick"),Ze("focusin","onFocus"),Ze("focusout","onBlur"),Ze(qm,"onTransitionRun"),Ze(Gm,"onTransitionStart"),Ze(Ym,"onTransitionCancel"),Ze(rf,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function bh(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var s=a.length-1;0<=s;s--){var f=a[s],h=f.instance,x=f.currentTarget;if(f=f.listener,h!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=x;try{u(i)}catch(j){gu(j)}i.currentTarget=null,u=h}else for(s=0;s<a.length;s++){if(f=a[s],h=f.instance,x=f.currentTarget,f=f.listener,h!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=x;try{u(i)}catch(j){gu(j)}i.currentTarget=null,u=h}}}}function wt(t,e){var l=e[Sr];l===void 0&&(l=e[Sr]=new Set);var a=t+"__bubble";l.has(a)||(vh(e,t,2,!1),l.add(a))}function ro(t,e,l){var a=0;e&&(a|=4),vh(l,t,a,e)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Mu]){t[Mu]=!0,As.forEach(function(l){l!=="selectionchange"&&(Dg.has(l)||ro(l,!1,t),ro(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mu]||(e[Mu]=!0,ro("selectionchange",!1,e))}}function vh(t,e,l,a){switch(qh(e)){case 2:var i=Ig;break;case 8:i=Pg;break;default:i=So}l=i.bind(null,e,l,t),i=void 0,!jr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function oo(t,e,l,a,i){var u=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var h=s.tag;if((h===3||h===4)&&(h=s.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;s=s.return}for(;f!==null;){if(s=ua(f),s===null)return;if(h=s.tag,h===5||h===6||h===26||h===27){a=u=s;continue t}f=f.parentNode}}a=a.return}_s(function(){var x=u,j=Or(l),B=[];t:{var w=cf.get(t);if(w!==void 0){var R=Ki,ut=t;switch(t){case"keypress":if(Vi(l)===0)break t;case"keydown":case"keyup":R=vm;break;case"focusin":ut="focus",R=kr;break;case"focusout":ut="blur",R=kr;break;case"beforeblur":case"afterblur":R=kr;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=rm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Sm;break;case af:case nf:case uf:R=sm;break;case rf:R=wm;break;case"scroll":case"scrollend":R=im;break;case"wheel":R=Dm;break;case"copy":case"cut":case"paste":R=dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Us;break;case"toggle":case"beforetoggle":R=Om}var gt=(e&4)!==0,Zt=!gt&&(t==="scroll"||t==="scrollend"),S=gt?w!==null?w+"Capture":null:w;gt=[];for(var v=x,E;v!==null;){var C=v;if(E=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||E===null||S===null||(C=$n(v,S),C!=null&&gt.push(yi(v,C,E))),Zt)break;v=v.return}0<gt.length&&(w=new R(w,ut,null,l,j),B.push({event:w,listeners:gt}))}}if(!(e&7)){t:{if(w=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",w&&l!==zr&&(ut=l.relatedTarget||l.fromElement)&&(ua(ut)||ut[Ua]))break t;if((R||w)&&(w=j.window===j?j:(w=j.ownerDocument)?w.defaultView||w.parentWindow:window,R?(ut=l.relatedTarget||l.toElement,R=x,ut=ut?ua(ut):null,ut!==null&&(Zt=Y(ut),gt=ut.tag,ut!==Zt||gt!==5&&gt!==27&&gt!==6)&&(ut=null)):(R=null,ut=x),R!==ut)){if(gt=Bs,C="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(gt=Us,C="onPointerLeave",S="onPointerEnter",v="pointer"),Zt=R==null?w:kn(R),E=ut==null?w:kn(ut),w=new gt(C,v+"leave",R,l,j),w.target=Zt,w.relatedTarget=E,C=null,ua(j)===x&&(gt=new gt(S,v+"enter",ut,l,j),gt.target=E,gt.relatedTarget=Zt,C=gt),Zt=C,R&&ut)e:{for(gt=R,S=ut,v=0,E=gt;E;E=gn(E))v++;for(E=0,C=S;C;C=gn(C))E++;for(;0<v-E;)gt=gn(gt),v--;for(;0<E-v;)S=gn(S),E--;for(;v--;){if(gt===S||S!==null&&gt===S.alternate)break e;gt=gn(gt),S=gn(S)}gt=null}else gt=null;R!==null&&xh(B,w,R,gt,!1),ut!==null&&Zt!==null&&xh(B,Zt,ut,gt,!0)}}t:{if(w=x?kn(x):window,R=w.nodeName&&w.nodeName.toLowerCase(),R==="select"||R==="input"&&w.type==="file")var nt=Vs;else if(Ys(w))if(Zs)nt=Um;else{nt=Bm;var At=$m}else R=w.nodeName,!R||R.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?x&&Dr(x.elementType)&&(nt=Vs):nt=Hm;if(nt&&(nt=nt(t,x))){Xs(B,nt,l,j);break t}At&&At(t,w,x),t==="focusout"&&x&&w.type==="number"&&x.memoizedProps.value!=null&&Tr(w,"number",w.value)}switch(At=x?kn(x):window,t){case"focusin":(Ys(At)||At.contentEditable==="true")&&(Za=At,Lr=x,Gn=null);break;case"focusout":Gn=Lr=Za=null;break;case"mousedown":Qr=!0;break;case"contextmenu":case"mouseup":case"dragend":Qr=!1,ef(B,l,j);break;case"selectionchange":if(Qm)break;case"keydown":case"keyup":ef(B,l,j)}var ct;if(Br)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Va?qs(t,l)&&(dt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(dt="onCompositionStart");dt&&(Ns&&l.locale!=="ko"&&(Va||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Va&&(ct=ks()):(jl=j,Mr="value"in jl?jl.value:jl.textContent,Va=!0)),At=Cu(x,dt),0<At.length&&(dt=new Hs(dt,t,null,l,j),B.push({event:dt,listeners:At}),ct?dt.data=ct:(ct=Gs(l),ct!==null&&(dt.data=ct)))),(ct=jm?Mm(t,l):Cm(t,l))&&(dt=Cu(x,"onBeforeInput"),0<dt.length&&(At=new Hs("onBeforeInput","beforeinput",null,l,j),B.push({event:At,listeners:dt}),At.data=ct)),Eg(B,t,x,l,j)}bh(B,e)})}function yi(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Cu(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,u=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=$n(t,l),i!=null&&a.unshift(yi(t,i,u)),i=$n(t,e),i!=null&&a.push(yi(t,i,u))),t=t.return}return a}function gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function xh(t,e,l,a,i){for(var u=e._reactName,s=[];l!==null&&l!==a;){var f=l,h=f.alternate,x=f.stateNode;if(f=f.tag,h!==null&&h===a)break;f!==5&&f!==26&&f!==27||x===null||(h=x,i?(x=$n(l,u),x!=null&&s.unshift(yi(l,x,h))):i||(x=$n(l,u),x!=null&&s.push(yi(l,x,h)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var zg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function Ah(t){return(typeof t=="string"?t:""+t).replace(zg,`
`).replace(Og,"")}function Sh(t,e){return e=Ah(e),Ah(t)===e}function _u(){}function $t(t,e,l,a,i,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ga(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ga(t,""+a);break;case"className":Qi(t,"class",a);break;case"tabIndex":Qi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Qi(t,l,a);break;case"style":Ms(t,a,u);break;case"data":if(e!=="object"){Qi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&$t(t,e,"name",i.name,i,null),$t(t,e,"formEncType",i.formEncType,i,null),$t(t,e,"formMethod",i.formMethod,i,null),$t(t,e,"formTarget",i.formTarget,i,null)):($t(t,e,"encType",i.encType,i,null),$t(t,e,"method",i.method,i,null),$t(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Yi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=_u);break;case"onScroll":a!=null&&wt("scroll",t);break;case"onScrollEnd":a!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Yi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":wt("beforetoggle",t),wt("toggle",t),Li(t,"popover",a);break;case"xlinkActuate":ol(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ol(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ol(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ol(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ol(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ol(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ol(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ol(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ol(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Li(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=am.get(l)||l,Li(t,l,a))}}function so(t,e,l,a,i,u){switch(l){case"style":Ms(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ga(t,a):(typeof a=="number"||typeof a=="bigint")&&Ga(t,""+a);break;case"onScroll":a!=null&&wt("scroll",t);break;case"onScrollEnd":a!=null&&wt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=_u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ss.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),u=t[ve]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Li(t,l,a)}}}function de(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var a=!1,i=!1,u;for(u in l)if(l.hasOwnProperty(u)){var s=l[u];if(s!=null)switch(u){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:$t(t,e,u,s,l,null)}}i&&$t(t,e,"srcSet",l.srcSet,l,null),a&&$t(t,e,"src",l.src,l,null);return;case"input":wt("invalid",t);var f=u=s=i=null,h=null,x=null;for(a in l)if(l.hasOwnProperty(a)){var j=l[a];if(j!=null)switch(a){case"name":i=j;break;case"type":s=j;break;case"checked":h=j;break;case"defaultChecked":x=j;break;case"value":u=j;break;case"defaultValue":f=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,e));break;default:$t(t,e,a,j,l,null)}}zs(t,u,f,h,x,s,i,!1),qi(t);return;case"select":wt("invalid",t),a=s=u=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":u=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:$t(t,e,i,f,l,null)}e=u,l=s,t.multiple=!!a,e!=null?qa(t,!!a,e,!1):l!=null&&qa(t,!!a,l,!0);return;case"textarea":wt("invalid",t),u=i=a=null;for(s in l)if(l.hasOwnProperty(s)&&(f=l[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":i=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:$t(t,e,s,f,l,null)}Rs(t,a,i,u),qi(t);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:$t(t,e,h,a,l,null)}return;case"dialog":wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(a=0;a<gi.length;a++)wt(gi[a],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(a=l[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:$t(t,e,x,a,l,null)}return;default:if(Dr(e)){for(j in l)l.hasOwnProperty(j)&&(a=l[j],a!==void 0&&so(t,e,j,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&$t(t,e,f,a,l,null))}function Rg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,s=null,f=null,h=null,x=null,j=null;for(R in l){var B=l[R];if(l.hasOwnProperty(R)&&B!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":h=B;default:a.hasOwnProperty(R)||$t(t,e,R,null,a,B)}}for(var w in a){var R=a[w];if(B=l[w],a.hasOwnProperty(w)&&(R!=null||B!=null))switch(w){case"type":u=R;break;case"name":i=R;break;case"checked":x=R;break;case"defaultChecked":j=R;break;case"value":s=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,e));break;default:R!==B&&$t(t,e,w,R,a,B)}}wr(t,s,f,h,x,j,u,i);return;case"select":R=s=f=w=null;for(u in l)if(h=l[u],l.hasOwnProperty(u)&&h!=null)switch(u){case"value":break;case"multiple":R=h;default:a.hasOwnProperty(u)||$t(t,e,u,null,a,h)}for(i in a)if(u=a[i],h=l[i],a.hasOwnProperty(i)&&(u!=null||h!=null))switch(i){case"value":w=u;break;case"defaultValue":f=u;break;case"multiple":s=u;default:u!==h&&$t(t,e,i,u,a,h)}e=f,l=s,a=R,w!=null?qa(t,!!l,w,!1):!!a!=!!l&&(e!=null?qa(t,!!l,e,!0):qa(t,!!l,l?[]:"",!1));return;case"textarea":R=w=null;for(f in l)if(i=l[f],l.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:$t(t,e,f,null,a,i)}for(s in a)if(i=a[s],u=l[s],a.hasOwnProperty(s)&&(i!=null||u!=null))switch(s){case"value":w=i;break;case"defaultValue":R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==u&&$t(t,e,s,i,a,u)}Os(t,w,R);return;case"option":for(var ut in l)if(w=l[ut],l.hasOwnProperty(ut)&&w!=null&&!a.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:$t(t,e,ut,null,a,w)}for(h in a)if(w=a[h],R=l[h],a.hasOwnProperty(h)&&w!==R&&(w!=null||R!=null))switch(h){case"selected":t.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:$t(t,e,h,w,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in l)w=l[gt],l.hasOwnProperty(gt)&&w!=null&&!a.hasOwnProperty(gt)&&$t(t,e,gt,null,a,w);for(x in a)if(w=a[x],R=l[x],a.hasOwnProperty(x)&&w!==R&&(w!=null||R!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,e));break;default:$t(t,e,x,w,a,R)}return;default:if(Dr(e)){for(var Zt in l)w=l[Zt],l.hasOwnProperty(Zt)&&w!==void 0&&!a.hasOwnProperty(Zt)&&so(t,e,Zt,void 0,a,w);for(j in a)w=a[j],R=l[j],!a.hasOwnProperty(j)||w===R||w===void 0&&R===void 0||so(t,e,j,w,a,R);return}}for(var S in l)w=l[S],l.hasOwnProperty(S)&&w!=null&&!a.hasOwnProperty(S)&&$t(t,e,S,null,a,w);for(B in a)w=a[B],R=l[B],!a.hasOwnProperty(B)||w===R||w==null&&R==null||$t(t,e,B,w,a,R)}var fo=null,ho=null;function ku(t){return t.nodeType===9?t:t.ownerDocument}function Eh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function po(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mo=null;function jg(){var t=window.event;return t&&t.type==="popstate"?t===mo?!1:(mo=t,!0):(mo=null,!1)}var Th=typeof setTimeout=="function"?setTimeout:void 0,Mg=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(t){return Dh.resolve(null).then(t).catch(_g)}:Th;function _g(t){setTimeout(function(){throw t})}function go(t,e){var l=e,a=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(a===0){t.removeChild(i),Ti(e);return}a--}else l!=="$"&&l!=="$?"&&l!=="$!"||a++;l=i}while(l);Ti(e)}function yo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":yo(l),Er(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function kg(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[_n])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=We(t.nextSibling),t===null)break}return null}function $g(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=We(t.nextSibling),t===null))return null;return t}function We(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function zh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Oh(t,e,l){switch(e=ku(l),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}var Ye=new Map,Rh=new Set;function $u(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var wl=$.d;$.d={f:Bg,r:Hg,D:Ug,C:Ng,L:Lg,m:Qg,X:Gg,S:qg,M:Yg};function Bg(){var t=wl.f(),e=zu();return t||e}function Hg(t){var e=Na(t);e!==null&&e.tag===5&&e.type==="form"?ld(e):wl.r(t)}var yn=typeof document>"u"?null:document;function jh(t,e,l){var a=yn;if(a&&typeof e=="string"&&e){var i=ke(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Rh.has(i)||(Rh.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),de(e,"link",t),ne(e),a.head.appendChild(e)))}}function Ug(t){wl.D(t),jh("dns-prefetch",t,null)}function Ng(t,e){wl.C(t,e),jh("preconnect",t,e)}function Lg(t,e,l){wl.L(t,e,l);var a=yn;if(a&&t&&e){var i='link[rel="preload"][as="'+ke(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+ke(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+ke(l.imageSizes)+'"]')):i+='[href="'+ke(t)+'"]';var u=i;switch(e){case"style":u=bn(t);break;case"script":u=vn(t)}Ye.has(u)||(t=mt({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ye.set(u,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(bi(u))||e==="script"&&a.querySelector(vi(u))||(e=a.createElement("link"),de(e,"link",t),ne(e),a.head.appendChild(e)))}}function Qg(t,e){wl.m(t,e);var l=yn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ke(a)+'"][href="'+ke(t)+'"]',u=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=vn(t)}if(!Ye.has(u)&&(t=mt({rel:"modulepreload",href:t},e),Ye.set(u,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vi(u)))return}a=l.createElement("link"),de(a,"link",t),ne(a),l.head.appendChild(a)}}}function qg(t,e,l){wl.S(t,e,l);var a=yn;if(a&&t){var i=La(a).hoistableStyles,u=bn(t);e=e||"default";var s=i.get(u);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(bi(u)))f.loading=5;else{t=mt({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ye.get(u))&&bo(t,l);var h=s=a.createElement("link");ne(h),de(h,"link",t),h._p=new Promise(function(x,j){h.onload=x,h.onerror=j}),h.addEventListener("load",function(){f.loading|=1}),h.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Bu(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:f},i.set(u,s)}}}function Gg(t,e){wl.X(t,e);var l=yn;if(l&&t){var a=La(l).hoistableScripts,i=vn(t),u=a.get(i);u||(u=l.querySelector(vi(i)),u||(t=mt({src:t,async:!0},e),(e=Ye.get(i))&&vo(t,e),u=l.createElement("script"),ne(u),de(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Yg(t,e){wl.M(t,e);var l=yn;if(l&&t){var a=La(l).hoistableScripts,i=vn(t),u=a.get(i);u||(u=l.querySelector(vi(i)),u||(t=mt({src:t,async:!0,type:"module"},e),(e=Ye.get(i))&&vo(t,e),u=l.createElement("script"),ne(u),de(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Mh(t,e,l,a){var i=(i=zt.current)?$u(i):null;if(!i)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=bn(l.href),l=La(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=bn(l.href);var u=La(i).hoistableStyles,s=u.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,s),(u=i.querySelector(bi(t)))&&!u._p&&(s.instance=u,s.state.loading=5),Ye.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ye.set(t,l),u||Xg(i,t,l,s.state))),e&&a===null)throw Error(c(528,""));return s}if(e&&a!==null)throw Error(c(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=vn(l),l=La(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function bn(t){return'href="'+ke(t)+'"'}function bi(t){return'link[rel="stylesheet"]['+t+"]"}function Ch(t){return mt({},t,{"data-precedence":t.precedence,precedence:null})}function Xg(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),de(e,"link",l),ne(e),t.head.appendChild(e))}function vn(t){return'[src="'+ke(t)+'"]'}function vi(t){return"script[async]"+t}function _h(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ke(l.href)+'"]');if(a)return e.instance=a,ne(a),a;var i=mt({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ne(a),de(a,"style",i),Bu(a,l.precedence,t),e.instance=a;case"stylesheet":i=bn(l.href);var u=t.querySelector(bi(i));if(u)return e.state.loading|=4,e.instance=u,ne(u),u;a=Ch(l),(i=Ye.get(i))&&bo(a,i),u=(t.ownerDocument||t).createElement("link"),ne(u);var s=u;return s._p=new Promise(function(f,h){s.onload=f,s.onerror=h}),de(u,"link",a),e.state.loading|=4,Bu(u,l.precedence,t),e.instance=u;case"script":return u=vn(l.src),(i=t.querySelector(vi(u)))?(e.instance=i,ne(i),i):(a=l,(i=Ye.get(u))&&(a=mt({},l),vo(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),ne(i),de(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,Bu(a,l.precedence,t));return e.instance}function Bu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,u=i,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===e)u=f;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function bo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function vo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Hu=null;function kh(t,e,l){if(Hu===null){var a=new Map,i=Hu=new Map;i.set(l,a)}else i=Hu,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var u=l[i];if(!(u[_n]||u[pe]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(e)||"";s=t+s;var f=a.get(s);f?f.push(u):a.set(s,[u])}}return a}function $h(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Vg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Bh(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var xi=null;function Zg(){}function Kg(t,e,l){if(xi===null)throw Error(c(475));var a=xi;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var i=bn(l.href),u=t.querySelector(bi(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Uu.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=u,ne(u);return}u=t.ownerDocument||t,l=Ch(l),(i=Ye.get(i))&&bo(l,i),u=u.createElement("link"),ne(u);var s=u;s._p=new Promise(function(f,h){s.onload=f,s.onerror=h}),de(u,"link",l),e.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(a.count++,e=Uu.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Jg(){if(xi===null)throw Error(c(475));var t=xi;return t.stylesheets&&t.count===0&&xo(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&xo(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Uu(){if(this.count--,this.count===0){if(this.stylesheets)xo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nu=null;function xo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nu=new Map,e.forEach(Wg,t),Nu=null,Uu.call(t))}function Wg(t,e){if(!(e.state.loading&4)){var l=Nu.get(t);if(l)var a=l.get(null);else{l=new Map,Nu.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var s=i[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),u=l.get(s)||a,u===a&&l.set(null,i),l.set(s,i),this.count++,a=Uu.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ai={$$typeof:q,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Fg(t,e,l,a,i,u,s,f){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ar(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ar(0),this.hiddenUpdates=Ar(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Hh(t,e,l,a,i,u,s,f,h,x,j,B){return t=new Fg(t,e,l,s,f,h,x,B),e=1,u===!0&&(e|=24),u=qe(3,null,null,e),t.current=u,u.stateNode=t,e=Fr(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},Mc(u),t}function Uh(t){return t?(t=Wa,t):Wa}function Nh(t,e,l,a,i,u){i=Uh(i),a.context===null?a.context=i:a.pendingContext=i,a=Ul(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=Nl(t,a,e),l!==null&&(be(l,t,e),ni(l,t,e))}function Lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Ao(t,e){Lh(t,e),(t=t.alternate)&&Lh(t,e)}function Qh(t){if(t.tag===13){var e=Ml(t,67108864);e!==null&&be(e,t,67108864),Ao(t,67108864)}}var Lu=!0;function Ig(t,e,l,a){var i=P.T;P.T=null;var u=$.p;try{$.p=2,So(t,e,l,a)}finally{$.p=u,P.T=i}}function Pg(t,e,l,a){var i=P.T;P.T=null;var u=$.p;try{$.p=8,So(t,e,l,a)}finally{$.p=u,P.T=i}}function So(t,e,l,a){if(Lu){var i=Eo(a);if(i===null)oo(t,e,a,Qu,l),Gh(t,a);else if(ey(i,t,e,l,a))a.stopPropagation();else if(Gh(t,a),e&4&&-1<ty.indexOf(t)){for(;i!==null;){var u=Na(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=ia(u.pendingLanes);if(s!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var h=1<<31-we(s);f.entanglements[1]|=h,s&=~h}nl(u),!(Gt&6)&&(wu=Ve()+500,mi(0))}}break;case 13:f=Ml(u,2),f!==null&&be(f,u,2),zu(),Ao(u,2)}if(u=Eo(a),u===null&&oo(t,e,a,Qu,l),u===i)break;i=u}i!==null&&a.stopPropagation()}else oo(t,e,a,null,l)}}function Eo(t){return t=Or(t),wo(t)}var Qu=null;function wo(t){if(Qu=null,t=ua(t),t!==null){var e=Y(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=ot(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Qu=t,null}function qh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(N0()){case fs:return 2;case ds:return 8;case Bi:case L0:return 32;case hs:return 268435456;default:return 32}default:return 32}}var To=!1,Vl=null,Zl=null,Kl=null,Si=new Map,Ei=new Map,Jl=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gh(t,e){switch(t){case"focusin":case"focusout":Vl=null;break;case"dragenter":case"dragleave":Zl=null;break;case"mouseover":case"mouseout":Kl=null;break;case"pointerover":case"pointerout":Si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(e.pointerId)}}function wi(t,e,l,a,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[i]},e!==null&&(e=Na(e),e!==null&&Qh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ey(t,e,l,a,i){switch(e){case"focusin":return Vl=wi(Vl,t,e,l,a,i),!0;case"dragenter":return Zl=wi(Zl,t,e,l,a,i),!0;case"mouseover":return Kl=wi(Kl,t,e,l,a,i),!0;case"pointerover":var u=i.pointerId;return Si.set(u,wi(Si.get(u)||null,t,e,l,a,i)),!0;case"gotpointercapture":return u=i.pointerId,Ei.set(u,wi(Ei.get(u)||null,t,e,l,a,i)),!0}return!1}function Yh(t){var e=ua(t.target);if(e!==null){var l=Y(e);if(l!==null){if(e=l.tag,e===13){if(e=ot(l),e!==null){t.blockedOn=e,J0(t.priority,function(){if(l.tag===13){var a=Re(),i=Ml(l,a);i!==null&&be(i,l,a),Ao(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Eo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);zr=a,l.target.dispatchEvent(a),zr=null}else return e=Na(l),e!==null&&Qh(e),t.blockedOn=l,!1;e.shift()}return!0}function Xh(t,e,l){qu(t)&&l.delete(e)}function ly(){To=!1,Vl!==null&&qu(Vl)&&(Vl=null),Zl!==null&&qu(Zl)&&(Zl=null),Kl!==null&&qu(Kl)&&(Kl=null),Si.forEach(Xh),Ei.forEach(Xh)}function Gu(t,e){t.blockedOn===e&&(t.blockedOn=null,To||(To=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ly)))}var Yu=null;function Vh(t){Yu!==t&&(Yu=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Yu===t&&(Yu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(wo(a||l)===null)continue;break}var u=Na(l);u!==null&&(t.splice(e,3),e-=3,hc(u,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Ti(t){function e(h){return Gu(h,t)}Vl!==null&&Gu(Vl,t),Zl!==null&&Gu(Zl,t),Kl!==null&&Gu(Kl,t),Si.forEach(e),Ei.forEach(e);for(var l=0;l<Jl.length;l++){var a=Jl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Jl.length&&(l=Jl[0],l.blockedOn===null);)Yh(l),l.blockedOn===null&&Jl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],u=l[a+1],s=i[ve]||null;if(typeof u=="function")s||Vh(l);else if(s){var f=null;if(u&&u.hasAttribute("formAction")){if(i=u,s=u[ve]||null)f=s.formAction;else if(wo(i)!==null)continue}else f=s.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),Vh(l)}}}function Do(t){this._internalRoot=t}Xu.prototype.render=Do.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var l=e.current,a=Re();Nh(l,a,t,e,null,null)},Xu.prototype.unmount=Do.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&pn(),Nh(t.current,2,null,t,null,null),zu(),e[Ua]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=vs();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Jl.length&&e!==0&&e<Jl[l].priority;l++);Jl.splice(l,0,t),l===0&&Yh(t)}};var Zh=r.version;if(Zh!=="19.0.0")throw Error(c(527,Zh,"19.0.0"));$.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=k(e),t=t!==null?I(t):null,t=t===null?null:t.stateNode,t};var ay={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:P,findFiberByHostInstance:ua,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{jn=Vu.inject(ay),Ee=Vu}catch{}}return zi.createRoot=function(t,e){if(!d(t))throw Error(c(299));var l=!1,a="",i=sd,u=fd,s=dd,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=Hh(t,1,!1,null,null,l,a,i,u,s,f,null),t[Ua]=e.current,co(t.nodeType===8?t.parentNode:t),new Do(e)},zi.hydrateRoot=function(t,e,l){if(!d(t))throw Error(c(299));var a=!1,i="",u=sd,s=fd,f=dd,h=null,x=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(x=l.formState)),e=Hh(t,1,!0,e,l??null,a,i,u,s,f,h,x),e.context=Uh(null),l=e.current,a=Re(),i=Ul(a),i.callback=null,Nl(l,i,a),e.current.lanes=a,Cn(e,a),nl(e),t[Ua]=e.current,co(t),new Xu(e)},zi.version="19.0.0",zi}var ap;function dy(){if(ap)return Ro.exports;ap=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Ro.exports=fy(),Ro.exports}var hy=dy(),Cp=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,oe=function(){return oe=Object.assign||function(r){for(var o,c=1,d=arguments.length;c<d;c++){o=arguments[c];for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(r[g]=o[g])}return r},oe.apply(this,arguments)};function ji(n,r,o){if(o||arguments.length===2)for(var c=0,d=r.length,g;c<d;c++)(g||!(c in r))&&(g||(g=Array.prototype.slice.call(r,0,c)),g[c]=r[c]);return n.concat(g||Array.prototype.slice.call(r))}var Lt="-ms-",Ri="-moz-",Ct="-webkit-",_p="comm",hr="rule",ts="decl",py="@import",kp="@keyframes",my="@layer",$p=Math.abs,es=String.fromCharCode,No=Object.assign;function gy(n,r){return ce(n,0)^45?(((r<<2^ce(n,0))<<2^ce(n,1))<<2^ce(n,2))<<2^ce(n,3):0}function Bp(n){return n.trim()}function Dl(n,r){return(n=r.exec(n))?n[0]:n}function bt(n,r,o){return n.replace(r,o)}function Iu(n,r,o){return n.indexOf(r,o)}function ce(n,r){return n.charCodeAt(r)|0}function En(n,r,o){return n.slice(r,o)}function il(n){return n.length}function Hp(n){return n.length}function Oi(n,r){return r.push(n),n}function yy(n,r){return n.map(r).join("")}function np(n,r){return n.filter(function(o){return!Dl(o,r)})}var pr=1,wn=1,Up=0,Xe=0,te=0,On="";function mr(n,r,o,c,d,g,b,T){return{value:n,root:r,parent:o,type:c,props:d,children:g,line:pr,column:wn,length:b,return:"",siblings:T}}function Fl(n,r){return No(mr("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function xn(n){for(;n.root;)n=Fl(n.root,{children:[n]});Oi(n,n.siblings)}function by(){return te}function vy(){return te=Xe>0?ce(On,--Xe):0,wn--,te===10&&(wn=1,pr--),te}function Fe(){return te=Xe<Up?ce(On,Xe++):0,wn++,te===10&&(wn=1,pr++),te}function ja(){return ce(On,Xe)}function Pu(){return Xe}function gr(n,r){return En(On,n,r)}function Lo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xy(n){return pr=wn=1,Up=il(On=n),Xe=0,[]}function Ay(n){return On="",n}function _o(n){return Bp(gr(Xe-1,Qo(n===91?n+2:n===40?n+1:n)))}function Sy(n){for(;(te=ja())&&te<33;)Fe();return Lo(n)>2||Lo(te)>3?"":" "}function Ey(n,r){for(;--r&&Fe()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return gr(n,Pu()+(r<6&&ja()==32&&Fe()==32))}function Qo(n){for(;Fe();)switch(te){case n:return Xe;case 34:case 39:n!==34&&n!==39&&Qo(te);break;case 40:n===41&&Qo(n);break;case 92:Fe();break}return Xe}function wy(n,r){for(;Fe()&&n+te!==57;)if(n+te===84&&ja()===47)break;return"/*"+gr(r,Xe-1)+"*"+es(n===47?n:Fe())}function Ty(n){for(;!Lo(ja());)Fe();return gr(n,Xe)}function Dy(n){return Ay(tr("",null,null,null,[""],n=xy(n),0,[0],n))}function tr(n,r,o,c,d,g,b,T,A){for(var y=0,M=0,z=b,H=0,q=0,J=0,lt=1,W=1,V=1,Q=0,X="",it=d,G=g,Z=c,at=X;W;)switch(J=Q,Q=Fe()){case 40:if(J!=108&&ce(at,z-1)==58){Iu(at+=bt(_o(Q),"&","&\f"),"&\f",$p(y?T[y-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:at+=_o(Q);break;case 9:case 10:case 13:case 32:at+=Sy(J);break;case 92:at+=Ey(Pu()-1,7);continue;case 47:switch(ja()){case 42:case 47:Oi(zy(wy(Fe(),Pu()),r,o,A),A);break;default:at+="/"}break;case 123*lt:T[y++]=il(at)*V;case 125*lt:case 59:case 0:switch(Q){case 0:case 125:W=0;case 59+M:V==-1&&(at=bt(at,/\f/g,"")),q>0&&il(at)-z&&Oi(q>32?up(at+";",c,o,z-1,A):up(bt(at," ","")+";",c,o,z-2,A),A);break;case 59:at+=";";default:if(Oi(Z=ip(at,r,o,y,M,d,T,X,it=[],G=[],z,g),g),Q===123)if(M===0)tr(at,r,Z,Z,it,g,z,T,G);else switch(H===99&&ce(at,3)===110?100:H){case 100:case 108:case 109:case 115:tr(n,Z,Z,c&&Oi(ip(n,Z,Z,0,0,d,T,X,d,it=[],z,G),G),d,G,z,T,c?it:G);break;default:tr(at,Z,Z,Z,[""],G,0,T,G)}}y=M=q=0,lt=V=1,X=at="",z=b;break;case 58:z=1+il(at),q=J;default:if(lt<1){if(Q==123)--lt;else if(Q==125&&lt++==0&&vy()==125)continue}switch(at+=es(Q),Q*lt){case 38:V=M>0?1:(at+="\f",-1);break;case 44:T[y++]=(il(at)-1)*V,V=1;break;case 64:ja()===45&&(at+=_o(Fe())),H=ja(),M=z=il(X=at+=Ty(Pu())),Q++;break;case 45:J===45&&il(at)==2&&(lt=0)}}return g}function ip(n,r,o,c,d,g,b,T,A,y,M,z){for(var H=d-1,q=d===0?g:[""],J=Hp(q),lt=0,W=0,V=0;lt<c;++lt)for(var Q=0,X=En(n,H+1,H=$p(W=b[lt])),it=n;Q<J;++Q)(it=Bp(W>0?q[Q]+" "+X:bt(X,/&\f/g,q[Q])))&&(A[V++]=it);return mr(n,r,o,d===0?hr:T,A,y,M,z)}function zy(n,r,o,c){return mr(n,r,o,_p,es(by()),En(n,2,-2),0,c)}function up(n,r,o,c,d){return mr(n,r,o,ts,En(n,0,c),En(n,c+1,-1),c,d)}function Np(n,r,o){switch(gy(n,r)){case 5103:return Ct+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ct+n+n;case 4789:return Ri+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ct+n+Ri+n+Lt+n+n;case 5936:switch(ce(n,r+11)){case 114:return Ct+n+Lt+bt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ct+n+Lt+bt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ct+n+Lt+bt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ct+n+Lt+n+n;case 6165:return Ct+n+Lt+"flex-"+n+n;case 5187:return Ct+n+bt(n,/(\w+).+(:[^]+)/,Ct+"box-$1$2"+Lt+"flex-$1$2")+n;case 5443:return Ct+n+Lt+"flex-item-"+bt(n,/flex-|-self/g,"")+(Dl(n,/flex-|baseline/)?"":Lt+"grid-row-"+bt(n,/flex-|-self/g,""))+n;case 4675:return Ct+n+Lt+"flex-line-pack"+bt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ct+n+Lt+bt(n,"shrink","negative")+n;case 5292:return Ct+n+Lt+bt(n,"basis","preferred-size")+n;case 6060:return Ct+"box-"+bt(n,"-grow","")+Ct+n+Lt+bt(n,"grow","positive")+n;case 4554:return Ct+bt(n,/([^-])(transform)/g,"$1"+Ct+"$2")+n;case 6187:return bt(bt(bt(n,/(zoom-|grab)/,Ct+"$1"),/(image-set)/,Ct+"$1"),n,"")+n;case 5495:case 3959:return bt(n,/(image-set\([^]*)/,Ct+"$1$`$1");case 4968:return bt(bt(n,/(.+:)(flex-)?(.*)/,Ct+"box-pack:$3"+Lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ct+n+n;case 4200:if(!Dl(n,/flex-|baseline/))return Lt+"grid-column-align"+En(n,r)+n;break;case 2592:case 3360:return Lt+bt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(c,d){return r=d,Dl(c.props,/grid-\w+-end/)})?~Iu(n+(o=o[r].value),"span",0)?n:Lt+bt(n,"-start","")+n+Lt+"grid-row-span:"+(~Iu(o,"span",0)?Dl(o,/\d+/):+Dl(o,/\d+/)-+Dl(n,/\d+/))+";":Lt+bt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(c){return Dl(c.props,/grid-\w+-start/)})?n:Lt+bt(bt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return bt(n,/(.+)-inline(.+)/,Ct+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(il(n)-1-r>6)switch(ce(n,r+1)){case 109:if(ce(n,r+4)!==45)break;case 102:return bt(n,/(.+:)(.+)-([^]+)/,"$1"+Ct+"$2-$3$1"+Ri+(ce(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Iu(n,"stretch",0)?Np(bt(n,"stretch","fill-available"),r,o)+n:n}break;case 5152:case 5920:return bt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,g,b,T,A,y){return Lt+d+":"+g+y+(b?Lt+d+"-span:"+(T?A:+A-+g)+y:"")+n});case 4949:if(ce(n,r+6)===121)return bt(n,":",":"+Ct)+n;break;case 6444:switch(ce(n,ce(n,14)===45?18:11)){case 120:return bt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ct+(ce(n,14)===45?"inline-":"")+"box$3$1"+Ct+"$2$3$1"+Lt+"$2box$3")+n;case 100:return bt(n,":",":"+Lt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(n,"scroll-","scroll-snap-")+n}return n}function ir(n,r){for(var o="",c=0;c<n.length;c++)o+=r(n[c],c,n,r)||"";return o}function Oy(n,r,o,c){switch(n.type){case my:if(n.children.length)break;case py:case ts:return n.return=n.return||n.value;case _p:return"";case kp:return n.return=n.value+"{"+ir(n.children,c)+"}";case hr:if(!il(n.value=n.props.join(",")))return""}return il(o=ir(n.children,c))?n.return=n.value+"{"+o+"}":""}function Ry(n){var r=Hp(n);return function(o,c,d,g){for(var b="",T=0;T<r;T++)b+=n[T](o,c,d,g)||"";return b}}function jy(n){return function(r){r.root||(r=r.return)&&n(r)}}function My(n,r,o,c){if(n.length>-1&&!n.return)switch(n.type){case ts:n.return=Np(n.value,n.length,o);return;case kp:return ir([Fl(n,{value:bt(n.value,"@","@"+Ct)})],c);case hr:if(n.length)return yy(o=n.props,function(d){switch(Dl(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(Fl(n,{props:[bt(d,/:(read-\w+)/,":"+Ri+"$1")]})),xn(Fl(n,{props:[d]})),No(n,{props:np(o,c)});break;case"::placeholder":xn(Fl(n,{props:[bt(d,/:(plac\w+)/,":"+Ct+"input-$1")]})),xn(Fl(n,{props:[bt(d,/:(plac\w+)/,":"+Ri+"$1")]})),xn(Fl(n,{props:[bt(d,/:(plac\w+)/,Lt+"input-$1")]})),xn(Fl(n,{props:[d]})),No(n,{props:np(o,c)});break}return""})}}var Cy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},Tn=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",Lp="active",Qp="data-styled-version",yr="6.1.15",ls=`/*!sc*/
`,ur=typeof window<"u"&&"HTMLElement"in window,_y=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),ky={},br=Object.freeze([]),Dn=Object.freeze({});function qp(n,r,o){return o===void 0&&(o=Dn),n.theme!==o.theme&&n.theme||r||o.theme}var Gp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$y=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,By=/(^-|-$)/g;function rp(n){return n.replace($y,"-").replace(By,"")}var Hy=/(a)(d)/gi,Zu=52,cp=function(n){return String.fromCharCode(n+(n>25?39:97))};function qo(n){var r,o="";for(r=Math.abs(n);r>Zu;r=r/Zu|0)o=cp(r%Zu)+o;return(cp(r%Zu)+o).replace(Hy,"$1-$2")}var ko,Yp=5381,Sn=function(n,r){for(var o=r.length;o;)n=33*n^r.charCodeAt(--o);return n},Xp=function(n){return Sn(Yp,n)};function Vp(n){return qo(Xp(n)>>>0)}function Uy(n){return n.displayName||n.name||"Component"}function $o(n){return typeof n=="string"&&!0}var Zp=typeof Symbol=="function"&&Symbol.for,Kp=Zp?Symbol.for("react.memo"):60115,Ny=Zp?Symbol.for("react.forward_ref"):60112,Ly={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qy=((ko={})[Ny]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ko[Kp]=Jp,ko);function op(n){return("type"in(r=n)&&r.type.$$typeof)===Kp?Jp:"$$typeof"in n?qy[n.$$typeof]:Ly;var r}var Gy=Object.defineProperty,Yy=Object.getOwnPropertyNames,sp=Object.getOwnPropertySymbols,Xy=Object.getOwnPropertyDescriptor,Vy=Object.getPrototypeOf,fp=Object.prototype;function Wp(n,r,o){if(typeof r!="string"){if(fp){var c=Vy(r);c&&c!==fp&&Wp(n,c,o)}var d=Yy(r);sp&&(d=d.concat(sp(r)));for(var g=op(n),b=op(r),T=0;T<d.length;++T){var A=d[T];if(!(A in Qy||o&&o[A]||b&&A in b||g&&A in g)){var y=Xy(r,A);try{Gy(n,A,y)}catch{}}}}return n}function Ma(n){return typeof n=="function"}function as(n){return typeof n=="object"&&"styledComponentId"in n}function Oa(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function Go(n,r){if(n.length===0)return"";for(var o=n[0],c=1;c<n.length;c++)o+=n[c];return o}function Mi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Yo(n,r,o){if(o===void 0&&(o=!1),!o&&!Mi(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var c=0;c<r.length;c++)n[c]=Yo(n[c],r[c]);else if(Mi(r))for(var c in r)n[c]=Yo(n[c],r[c]);return n}function ns(n,r){Object.defineProperty(n,"toString",{value:r})}function Ca(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Zy=function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var o=0,c=0;c<r;c++)o+=this.groupSizes[c];return o},n.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,g=d;r>=g;)if((g<<=1)<0)throw Ca(16,"".concat(r));this.groupSizes=new Uint32Array(g),this.groupSizes.set(c),this.length=g;for(var b=d;b<g;b++)this.groupSizes[b]=0}for(var T=this.indexOfGroup(r+1),A=(b=0,o.length);b<A;b++)this.tag.insertRule(T,o[b])&&(this.groupSizes[r]++,T++)},n.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],c=this.indexOfGroup(r),d=c+o;this.groupSizes[r]=0;for(var g=c;g<d;g++)this.tag.deleteRule(c)}},n.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var c=this.groupSizes[r],d=this.indexOfGroup(r),g=d+c,b=d;b<g;b++)o+="".concat(this.tag.getRule(b)).concat(ls);return o},n}(),er=new Map,rr=new Map,lr=1,Ku=function(n){if(er.has(n))return er.get(n);for(;rr.has(lr);)lr++;var r=lr++;return er.set(n,r),rr.set(r,n),r},Ky=function(n,r){lr=r+1,er.set(n,r),rr.set(r,n)},Jy="style[".concat(Tn,"][").concat(Qp,'="').concat(yr,'"]'),Wy=new RegExp("^".concat(Tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fy=function(n,r,o){for(var c,d=o.split(","),g=0,b=d.length;g<b;g++)(c=d[g])&&n.registerName(r,c)},Iy=function(n,r){for(var o,c=((o=r.textContent)!==null&&o!==void 0?o:"").split(ls),d=[],g=0,b=c.length;g<b;g++){var T=c[g].trim();if(T){var A=T.match(Wy);if(A){var y=0|parseInt(A[1],10),M=A[2];y!==0&&(Ky(M,y),Fy(n,M,A[3]),n.getTag().insertRules(y,d)),d.length=0}else d.push(T)}}},dp=function(n){for(var r=document.querySelectorAll(Jy),o=0,c=r.length;o<c;o++){var d=r[o];d&&d.getAttribute(Tn)!==Lp&&(Iy(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Py(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fp=function(n){var r=document.head,o=n||r,c=document.createElement("style"),d=function(T){var A=Array.from(T.querySelectorAll("style[".concat(Tn,"]")));return A[A.length-1]}(o),g=d!==void 0?d.nextSibling:null;c.setAttribute(Tn,Lp),c.setAttribute(Qp,yr);var b=Py();return b&&c.setAttribute("nonce",b),o.insertBefore(c,g),c},tb=function(){function n(r){this.element=Fp(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,d=0,g=c.length;d<g;d++){var b=c[d];if(b.ownerNode===o)return b}throw Ca(17)}(this.element),this.length=0}return n.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},n}(),eb=function(){function n(r){this.element=Fp(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n}(),lb=function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n}(),hp=ur,ab={isServer:!ur,useCSSOMInjection:!_y},cr=function(){function n(r,o,c){r===void 0&&(r=Dn),o===void 0&&(o={});var d=this;this.options=oe(oe({},ab),r),this.gs=o,this.names=new Map(c),this.server=!!r.isServer,!this.server&&ur&&hp&&(hp=!1,dp(this)),ns(this,function(){return function(g){for(var b=g.getTag(),T=b.length,A="",y=function(z){var H=function(V){return rr.get(V)}(z);if(H===void 0)return"continue";var q=g.names.get(H),J=b.getGroup(z);if(q===void 0||!q.size||J.length===0)return"continue";var lt="".concat(Tn,".g").concat(z,'[id="').concat(H,'"]'),W="";q!==void 0&&q.forEach(function(V){V.length>0&&(W+="".concat(V,","))}),A+="".concat(J).concat(lt,'{content:"').concat(W,'"}').concat(ls)},M=0;M<T;M++)y(M);return A}(d)})}return n.registerId=function(r){return Ku(r)},n.prototype.rehydrate=function(){!this.server&&ur&&dp(this)},n.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new n(oe(oe({},this.options),r),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var c=o.useCSSOMInjection,d=o.target;return o.isServer?new lb(d):c?new tb(d):new eb(d)}(this.options),new Zy(r)));var r},n.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},n.prototype.registerName=function(r,o){if(Ku(r),this.names.has(r))this.names.get(r).add(o);else{var c=new Set;c.add(o),this.names.set(r,c)}},n.prototype.insertRules=function(r,o,c){this.registerName(r,o),this.getTag().insertRules(Ku(r),c)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup(Ku(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n}(),nb=/&/g,ib=/^\s*\/\/.*$/gm;function Ip(n,r){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(c){return"".concat(r," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Ip(o.children,r)),o})}function ub(n){var r,o,c,d=Dn,g=d.options,b=g===void 0?Dn:g,T=d.plugins,A=T===void 0?br:T,y=function(H,q,J){return J.startsWith(o)&&J.endsWith(o)&&J.replaceAll(o,"").length>0?".".concat(r):H},M=A.slice();M.push(function(H){H.type===hr&&H.value.includes("&")&&(H.props[0]=H.props[0].replace(nb,o).replace(c,y))}),b.prefix&&M.push(My),M.push(Oy);var z=function(H,q,J,lt){q===void 0&&(q=""),J===void 0&&(J=""),lt===void 0&&(lt="&"),r=lt,o=q,c=new RegExp("\\".concat(o,"\\b"),"g");var W=H.replace(ib,""),V=Dy(J||q?"".concat(J," ").concat(q," { ").concat(W," }"):W);b.namespace&&(V=Ip(V,b.namespace));var Q=[];return ir(V,Ry(M.concat(jy(function(X){return Q.push(X)})))),Q};return z.hash=A.length?A.reduce(function(H,q){return q.name||Ca(15),Sn(H,q.name)},Yp).toString():"",z}var rb=new cr,Xo=ub(),Pp=D.createContext({shouldForwardProp:void 0,styleSheet:rb,stylis:Xo});Pp.Consumer;D.createContext(void 0);function Vo(){return O.useContext(Pp)}var cb=function(){function n(r,o){var c=this;this.inject=function(d,g){g===void 0&&(g=Xo);var b=c.name+g.hash;d.hasNameForId(c.id,b)||d.insertRules(c.id,b,g(c.rules,b,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,ns(this,function(){throw Ca(12,String(c.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=Xo),this.name+r.hash},n}(),ob=function(n){return n>="A"&&n<="Z"};function pp(n){for(var r="",o=0;o<n.length;o++){var c=n[o];if(o===1&&c==="-"&&n[0]==="-")return n;ob(c)?r+="-"+c.toLowerCase():r+=c}return r.startsWith("ms-")?"-"+r:r}var t0=function(n){return n==null||n===!1||n===""},e0=function(n){var r,o,c=[];for(var d in n){var g=n[d];n.hasOwnProperty(d)&&!t0(g)&&(Array.isArray(g)&&g.isCss||Ma(g)?c.push("".concat(pp(d),":"),g,";"):Mi(g)?c.push.apply(c,ji(ji(["".concat(d," {")],e0(g),!1),["}"],!1)):c.push("".concat(pp(d),": ").concat((r=d,(o=g)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in Cy||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function Pl(n,r,o,c){if(t0(n))return[];if(as(n))return[".".concat(n.styledComponentId)];if(Ma(n)){if(!Ma(g=n)||g.prototype&&g.prototype.isReactComponent||!r)return[n];var d=n(r);return Pl(d,r,o,c)}var g;return n instanceof cb?o?(n.inject(o,c),[n.getName(c)]):[n]:Mi(n)?e0(n):Array.isArray(n)?Array.prototype.concat.apply(br,n.map(function(b){return Pl(b,r,o,c)})):[n.toString()]}function l0(n){for(var r=0;r<n.length;r+=1){var o=n[r];if(Ma(o)&&!as(o))return!1}return!0}var sb=Xp(yr),fb=function(){function n(r,o,c){this.rules=r,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&l0(r),this.componentId=o,this.baseHash=Sn(sb,o),this.baseStyle=c,cr.registerId(o)}return n.prototype.generateAndInjectStyles=function(r,o,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=Oa(d,this.staticRulesId);else{var g=Go(Pl(this.rules,r,o,c)),b=qo(Sn(this.baseHash,g)>>>0);if(!o.hasNameForId(this.componentId,b)){var T=c(g,".".concat(b),void 0,this.componentId);o.insertRules(this.componentId,b,T)}d=Oa(d,b),this.staticRulesId=b}else{for(var A=Sn(this.baseHash,c.hash),y="",M=0;M<this.rules.length;M++){var z=this.rules[M];if(typeof z=="string")y+=z;else if(z){var H=Go(Pl(z,r,o,c));A=Sn(A,H+M),y+=H}}if(y){var q=qo(A>>>0);o.hasNameForId(this.componentId,q)||o.insertRules(this.componentId,q,c(y,".".concat(q),void 0,this.componentId)),d=Oa(d,q)}}return d},n}(),Ci=D.createContext(void 0);Ci.Consumer;function a0(n){var r=D.useContext(Ci),o=O.useMemo(function(){return function(c,d){if(!c)throw Ca(14);if(Ma(c)){var g=c(d);return g}if(Array.isArray(c)||typeof c!="object")throw Ca(8);return d?oe(oe({},d),c):c}(n.theme,r)},[n.theme,r]);return n.children?D.createElement(Ci.Provider,{value:o},n.children):null}var Bo={};function db(n,r,o){var c=as(n),d=n,g=!$o(n),b=r.attrs,T=b===void 0?br:b,A=r.componentId,y=A===void 0?function(it,G){var Z=typeof it!="string"?"sc":rp(it);Bo[Z]=(Bo[Z]||0)+1;var at="".concat(Z,"-").concat(Vp(yr+Z+Bo[Z]));return G?"".concat(G,"-").concat(at):at}(r.displayName,r.parentComponentId):A,M=r.displayName,z=M===void 0?function(it){return $o(it)?"styled.".concat(it):"Styled(".concat(Uy(it),")")}(n):M,H=r.displayName&&r.componentId?"".concat(rp(r.displayName),"-").concat(r.componentId):r.componentId||y,q=c&&d.attrs?d.attrs.concat(T).filter(Boolean):T,J=r.shouldForwardProp;if(c&&d.shouldForwardProp){var lt=d.shouldForwardProp;if(r.shouldForwardProp){var W=r.shouldForwardProp;J=function(it,G){return lt(it,G)&&W(it,G)}}else J=lt}var V=new fb(o,H,c?d.componentStyle:void 0);function Q(it,G){return function(Z,at,jt){var P=Z.attrs,mt=Z.componentStyle,Mt=Z.defaultProps,Dt=Z.foldedComponentIds,Bt=Z.styledComponentId,_t=Z.target,Et=D.useContext(Ci),L=Vo(),rt=Z.shouldForwardProp||L.shouldForwardProp,Y=qp(at,Et,Mt)||Dn,ot=function(tt,K,ft){for(var ht,_=oe(oe({},K),{className:void 0,theme:ft}),et=0;et<tt.length;et+=1){var pt=Ma(ht=tt[et])?ht(_):ht;for(var xt in pt)_[xt]=xt==="className"?Oa(_[xt],pt[xt]):xt==="style"?oe(oe({},_[xt]),pt[xt]):pt[xt]}return K.className&&(_.className=Oa(_.className,K.className)),_}(P,at,Y),m=ot.as||_t,k={};for(var I in ot)ot[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&ot.theme===Y||(I==="forwardedAs"?k.as=ot.forwardedAs:rt&&!rt(I,m)||(k[I]=ot[I]));var N=function(tt,K){var ft=Vo(),ht=tt.generateAndInjectStyles(K,ft.styleSheet,ft.stylis);return ht}(mt,ot),$=Oa(Dt,Bt);return N&&($+=" "+N),ot.className&&($+=" "+ot.className),k[$o(m)&&!Gp.has(m)?"class":"className"]=$,jt&&(k.ref=jt),O.createElement(m,k)}(X,it,G)}Q.displayName=z;var X=D.forwardRef(Q);return X.attrs=q,X.componentStyle=V,X.displayName=z,X.shouldForwardProp=J,X.foldedComponentIds=c?Oa(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=H,X.target=c?d.target:n,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(it){this._foldedDefaultProps=c?function(G){for(var Z=[],at=1;at<arguments.length;at++)Z[at-1]=arguments[at];for(var jt=0,P=Z;jt<P.length;jt++)Yo(G,P[jt],!0);return G}({},d.defaultProps,it):it}}),ns(X,function(){return".".concat(X.styledComponentId)}),g&&Wp(X,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function mp(n,r){for(var o=[n[0]],c=0,d=r.length;c<d;c+=1)o.push(r[c],n[c+1]);return o}var gp=function(n){return Object.assign(n,{isCss:!0})};function F(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(Ma(n)||Mi(n))return gp(Pl(mp(br,ji([n],r,!0))));var c=n;return r.length===0&&c.length===1&&typeof c[0]=="string"?Pl(c):gp(Pl(mp(c,r)))}function Zo(n,r,o){if(o===void 0&&(o=Dn),!r)throw Ca(1,r);var c=function(d){for(var g=[],b=1;b<arguments.length;b++)g[b-1]=arguments[b];return n(r,o,F.apply(void 0,ji([d],g,!1)))};return c.attrs=function(d){return Zo(n,r,oe(oe({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return Zo(n,r,oe(oe({},o),d))},c}var n0=function(n){return Zo(db,n)},U=n0;Gp.forEach(function(n){U[n]=n0(n)});var hb=function(){function n(r,o){this.rules=r,this.componentId=o,this.isStatic=l0(r),cr.registerId(this.componentId+1)}return n.prototype.createStyles=function(r,o,c,d){var g=d(Go(Pl(this.rules,o,c,d)),""),b=this.componentId+r;c.insertRules(b,b,g)},n.prototype.removeStyles=function(r,o){o.clearRules(this.componentId+r)},n.prototype.renderStyles=function(r,o,c,d){r>2&&cr.registerId(this.componentId+r),this.removeStyles(r,c),this.createStyles(r,o,c,d)},n}();function i0(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var c=F.apply(void 0,ji([n],r,!1)),d="sc-global-".concat(Vp(JSON.stringify(c))),g=new hb(c,d),b=function(A){var y=Vo(),M=D.useContext(Ci),z=D.useRef(y.styleSheet.allocateGSInstance(d)).current;return y.styleSheet.server&&T(z,A,y.styleSheet,M,y.stylis),D.useLayoutEffect(function(){if(!y.styleSheet.server)return T(z,A,y.styleSheet,M,y.stylis),function(){return g.removeStyles(z,y.styleSheet)}},[z,A,y.styleSheet,M,y.stylis]),null};function T(A,y,M,z,H){if(g.isStatic)g.renderStyles(A,ky,M,H);else{var q=oe(oe({},y),{theme:qp(y,z,b.defaultProps)});g.renderStyles(A,q,M,H)}}return D.memo(b)}const is="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",us="inset 2px 2px 3px rgba(0,0,0,0.2)",Ie=()=>F`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Pe=({background:n="material",color:r="materialText"}={})=>F`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[n]};
  color: ${({theme:o})=>o[r]};
`,ki=({mainColor:n="black",secondaryColor:r="transparent",pixelSize:o=2})=>F`
  background-image: ${[`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`,`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`].join(",")};
  background-color: ${r};
  background-size: ${`${o*2}px ${o*2}px`};
  background-position: 0 0, ${`${o}px ${o}px`};
`,_a=()=>F`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,An={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},pb=({theme:n,topLeftInner:r,bottomRightInner:o,hasShadow:c=!1,hasInsetShadow:d=!1})=>[c?is:!1,d?us:!1,r!==null?`inset 1px 1px 0px 1px ${n[r]}`:!1,o!==null?`inset -1px -1px 0 1px ${n[o]}`:!1].filter(Boolean).join(", "),Kt=({invert:n=!1,style:r="button"}={})=>{const o={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return F`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:c})=>c[An[r][o.topLeftOuter]]};
    border-top-color: ${({theme:c})=>c[An[r][o.topLeftOuter]]};
    border-right-color: ${({theme:c})=>c[An[r][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:c})=>c[An[r][o.bottomRightOuter]]};
    box-shadow: ${({theme:c,shadow:d})=>pb({theme:c,topLeftInner:An[r][o.topLeftInner],bottomRightInner:An[r][o.bottomRightInner],hasShadow:d})};
  `},zn=()=>F`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,mb=n=>Buffer.from(n).toString("base64"),gb=typeof btoa<"u"?btoa:mb,Ju=(n,r=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${gb(o)})`},rs=(n="default")=>F`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>ki({mainColor:n==="flat"?r.flatLight:r.material,secondaryColor:n==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Pe()}
    ${n==="flat"?_a():Kt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${Pe()}
    ${n==="flat"?_a():Kt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${n==="default"?Kt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:r})=>Ju(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>Ju(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>Ju(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>Ju(r.materialText,0)};
  }
`,yb=U.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,bb=O.forwardRef(({children:n,underline:r=!0,...o},c)=>D.createElement(yb,{ref:c,underline:r,...o},n));bb.displayName="Anchor";const vb=U.header`
  ${Kt()};
  ${Pe()};

  position: ${n=>{var r;return(r=n.position)!==null&&r!==void 0?r:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,u0=O.forwardRef(({children:n,fixed:r=!0,position:o="fixed",...c},d)=>D.createElement(vb,{fixed:r,position:r!==!1?o:void 0,ref:d,...c},n));u0.displayName="AppBar";const ka=()=>{};function Ra(n,r,o){return o!==null&&n>o?o:r!==null&&n<r?r:n}function xb(n){if(Math.abs(n)<1){const o=n.toExponential().split("e-"),c=o[0].split(".")[1];return(c?c.length:0)+parseInt(o[1],10)}const r=n.toString().split(".")[1];return r?r.length:0}function yp(n,r,o){const c=Math.round((n-o)/r)*r+o;return Number(c.toFixed(xb(r)))}function ta(n){return typeof n=="number"?`${n}px`:n}const Ab=U.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:r})=>!n&&`
    border-top: 2px solid ${r.borderDark};
    border-left: 2px solid ${r.borderDark};
    border-bottom: 2px solid ${r.borderLightest};
    border-right: 2px solid ${r.borderLightest};
    background: ${r.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Sb=U.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,r0=O.forwardRef(({alt:n="",children:r,noBorder:o=!1,size:c=35,square:d=!1,src:g,...b},T)=>D.createElement(Ab,{noBorder:o,ref:T,size:ta(c),square:d,src:g,...b},g?D.createElement(Sb,{src:g,alt:n}):r));r0.displayName="Avatar";const he={sm:"28px",md:"36px",lg:"44px"},Eb=F`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>he[n]};
  width: ${({fullWidth:n,size:r="md",square:o})=>n?"100%":o?he[r]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:r})=>n&&!r&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,vr=U.button`
  ${({active:n,disabled:r,primary:o,theme:c,variant:d})=>d==="flat"?F`
          ${_a()}
          ${o?`
          border: 2px solid ${c.checkmark};
            outline: 2px solid ${c.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${c.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!r&&zn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?F`
          ${Pe()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!n&&Kt({style:"buttonThin"})}
          }
          &:active {
            ${!r&&Kt({style:"buttonThinPressed"})}
          }
          ${n&&Kt({style:"buttonThinPressed"})}
          ${r&&Ie()}
        `:F`
          ${Pe()};
          border: none;
          ${r&&Ie()}
          ${n?ki({mainColor:c.material,secondaryColor:c.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${o?F`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${c.borderDarkest};
                `:F`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Kt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!r&&Kt({style:d==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!r&&zn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Eb}
`,_i=O.forwardRef(({onClick:n,disabled:r=!1,children:o,type:c="button",fullWidth:d=!1,size:g="md",square:b=!1,active:T=!1,onTouchStart:A=ka,primary:y=!1,variant:M="default",...z},H)=>D.createElement(vr,{active:T,disabled:r,$disabled:r,fullWidth:d,onClick:r?void 0:n,onTouchStart:A,primary:y,ref:H,size:g,square:b,type:c,variant:M,...z},o));_i.displayName="Button";function ea({defaultValue:n,onChange:r,onChangePropName:o="onChange",readOnly:c,value:d,valuePropName:g="value"}){const b=d!==void 0,[T,A]=O.useState(n),y=O.useCallback(M=>{b||A(M)},[b]);if(b&&typeof r!="function"&&!c){const M=`Warning: You provided a \`${g}\` prop to a component without an \`${o}\` handler.${g==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${g}\`.`}`;console.warn(M)}return[b?d:T,y]}const Ko=U.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>he[n.size]};
  width: ${n=>n.square?he[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>he[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:r})=>!r&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&Ie()}
`,Il=O.forwardRef(({size:n="lg",disabled:r,square:o,children:c,onClick:d,primary:g,...b},T)=>D.createElement(Ko,{$disabled:r,size:n,square:o,onClick:r?void 0:d,primary:g,role:"menuitem",ref:T,"aria-disabled":r,...b},c));Il.displayName="MenuListItem";const Jo=U.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Kt({style:"window"})}
  ${Pe()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Jo.displayName="MenuList";const ul=20,or=U.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ul}px;
  height: ${ul}px;
  opacity: 0;
  z-index: -1;
`,cs=U.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&Ie()}

  ${Ko} & {
    margin: 0;
    height: 100%;
  }
  ${Ko}:hover & {
    ${({$disabled:n,theme:r})=>!n&&F`
        color: ${r.materialTextInvert};
      `};
  }
`,os=U.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${or}:focus ~ & {
    ${zn}
  }
  ${or}:not(:disabled) ~ &:active {
    ${zn}
  }
`,rl=U.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:n})=>n.borderDark};
  border-top-color: ${({theme:n})=>n.borderDark};
  border-right-color: ${({theme:n})=>n.borderLightest};
  border-bottom-color: ${({theme:n})=>n.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:n})=>n.borderDarkest};
    border-top-color: ${({theme:n})=>n.borderDarkest};
    border-right-color: ${({theme:n})=>n.borderLight};
    border-bottom-color: ${({theme:n})=>n.borderLight};

    pointer-events: none;
    ${n=>n.shadow&&`box-shadow:${us};`}
  }
`,wb=U.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${rs()}
`,Rn=O.forwardRef(({children:n,shadow:r=!0,...o},c)=>D.createElement(rl,{ref:c,shadow:r,...o},D.createElement(wb,null,n)));Rn.displayName="ScrollView";const c0=F`
  width: ${ul}px;
  height: ${ul}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Tb=U(rl)`
  ${c0}
  width: ${ul}px;
  height: ${ul}px;
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,Db=U.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  ${c0}
  width: ${ul-4}px;
  height: ${ul-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
`,zb=U.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:n,theme:r})=>n?r.checkmarkDisabled:r.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,Ob=U.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:r})=>ki({mainColor:n?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Rb={flat:Db,default:Tb},jb=O.forwardRef(({checked:n,className:r="",defaultChecked:o=!1,disabled:c=!1,indeterminate:d=!1,label:g="",onChange:b=ka,style:T={},value:A,variant:y="default",...M},z)=>{var H;const[q,J]=ea({defaultValue:o,onChange:b,readOnly:(H=M.readOnly)!==null&&H!==void 0?H:c,value:n}),lt=O.useCallback(Q=>{const X=Q.target.checked;J(X),b(Q)},[b,J]),W=Rb[y];let V=null;return d?V=Ob:q&&(V=zb),D.createElement(cs,{$disabled:c,className:r,style:T},D.createElement(or,{disabled:c,onChange:c?void 0:lt,readOnly:c,type:"checkbox",value:A,checked:q,"data-indeterminate":d,ref:z,...M}),D.createElement(W,{$disabled:c,role:"presentation"},V&&D.createElement(V,{$disabled:c,variant:y})),g&&D.createElement(os,null,g))});jb.displayName="Checkbox";const zl=U.div`
  ${({orientation:n,theme:r,size:o="100%"})=>n==="vertical"?`
    height: ${ta(o)};
    border-left: 2px solid ${r.borderDark};
    border-right: 2px solid ${r.borderLightest};
    margin: 0;
    `:`
    width: ${ta(o)};
    border-bottom: 2px solid ${r.borderLightest};
    border-top: 2px solid ${r.borderDark};
    margin: 0;
    `}
`;zl.displayName="Separator";const Mb=U(vr)`
  padding-left: 8px;
`,Cb=U(zl)`
  height: 21px;
  position: relative;
  top: 0;
`,o0=U.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,_b=U.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?F`
          border: 2px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:F`
          border: 2px solid ${({theme:r})=>r.materialText};
        `}
  ${o0}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${zn}
    outline-offset: -8px;
  }
`,kb=U.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?F`
          border-top: 6px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:F`
          border-top: 6px solid ${({theme:r})=>r.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:n})=>n==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,$b=O.forwardRef(({value:n,defaultValue:r,onChange:o=ka,disabled:c=!1,variant:d="default",...g},b)=>{var T;const[A,y]=ea({defaultValue:r,onChange:o,readOnly:(T=g.readOnly)!==null&&T!==void 0?T:c,value:n}),M=z=>{const H=z.target.value;y(H),o(z)};return D.createElement(Mb,{disabled:c,as:"div",variant:d,size:"md"},D.createElement(o0,{onChange:M,readOnly:c,disabled:c,value:A??"#008080",type:"color",ref:b,...g}),D.createElement(_b,{$disabled:c,color:A??"#008080",role:"presentation"}),d==="default"&&D.createElement(Cb,{orientation:"vertical"}),D.createElement(kb,{$disabled:c,variant:d}))});$b.displayName="ColorInput";const Bb=U.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>F`
    width: ${11*n}px;
    height: ${21*n}px;
    margin: ${n}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${ki({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${n}px;
      width: ${9*n}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${n}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${n*2}px);
      top: ${2*n}px;
      left: ${n}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${n}px;
      width: ${9*n}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${n}px;
    }
    span.center:after {
      bottom: ${n}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${n}px;
      border-top: ${n}px solid var(--react95-digit-bg-color);
      border-bottom: ${n}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*n}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${n}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${n*2}px);
      top: ${n}px;
      left: ${n*2}px;
    }
  `}
`,bp=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Hb=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Ub({digit:n=0,pixelSize:r=2,...o}){const c=Hb[Number(n)].map((d,g)=>d?`${bp[g]} active`:bp[g]);return D.createElement(Bb,{pixelSize:r,...o},c.map((d,g)=>D.createElement("span",{className:d,key:g})))}const Nb=U.div`
  ${Kt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Lb={sm:1,md:2,lg:3,xl:4},Qb=O.forwardRef(({value:n=0,minLength:r=3,size:o="md",...c},d)=>{const g=O.useMemo(()=>n.toString().padStart(r,"0").split(""),[r,n]);return D.createElement(Nb,{ref:d,...c},g.map((b,T)=>D.createElement(Ub,{digit:b,pixelSize:Lb[o],key:T})))});Qb.displayName="Counter";const s0=F`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${he.md};
`,qb=U(rl).attrs({"data-testid":"variant-default"})`
  ${s0}
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
`,Gb=U.div.attrs({"data-testid":"variant-flat"})`
  ${_a()}
  ${s0}
  position: relative;
`,f0=F`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:n})=>n.canvasText};
  ${({disabled:n,variant:r})=>r!=="flat"&&n&&Ie()}
`,Yb=U.input`
  ${f0}
  padding: 0 8px;
`,Xb=U.textarea`
  ${f0}
  padding: 8px;
  resize: none;
  ${({variant:n})=>rs(n)}
`,d0=O.forwardRef(({className:n,disabled:r=!1,fullWidth:o,onChange:c=ka,shadow:d=!0,style:g,variant:b="default",...T},A)=>{const y=b==="flat"?Gb:qb,M=O.useMemo(()=>{var z;return T.multiline?D.createElement(Xb,{disabled:r,onChange:r?void 0:c,readOnly:r,ref:A,variant:b,...T}):D.createElement(Yb,{disabled:r,onChange:r?void 0:c,readOnly:r,ref:A,type:(z=T.type)!==null&&z!==void 0?z:"text",variant:b,...T})},[r,c,T,A,b]);return D.createElement(y,{className:n,fullWidth:o,$disabled:r,shadow:d,style:g},M)});d0.displayName="TextInput";const Vb=U.div`
  display: inline-flex;
  align-items: center;
`,Wo=U(_i)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?F`
          height: calc(50% - 1px);
        `:F`
          height: 50%;
        `}
`,Zb=U.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?F`
          height: calc(${he.md} - 4px);
        `:F`
          height: ${he.md};
          margin-left: 2px;
        `}
`,vp=U.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?F`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:r})=>r.materialText};
        `:F`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:r})=>r.materialText};
        `}
  ${Wo}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?F`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:F`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,h0=O.forwardRef(({className:n,defaultValue:r,disabled:o=!1,max:c,min:d,onChange:g,readOnly:b,step:T=1,style:A,value:y,variant:M="default",width:z,...H},q)=>{const[J,lt]=ea({defaultValue:r,onChange:g,readOnly:b,value:y}),W=O.useCallback(Z=>{const at=parseFloat(Z.target.value);lt(at)},[lt]),V=O.useCallback(Z=>{const at=Ra(parseFloat(((J??0)+Z).toFixed(2)),d??null,c??null);lt(at),g==null||g(at)},[c,d,g,lt,J]),Q=O.useCallback(()=>{J!==void 0&&(g==null||g(J))},[g,J]),X=O.useCallback(()=>{V(T)},[V,T]),it=O.useCallback(()=>{V(-T)},[V,T]),G=M==="flat"?"flat":"raised";return D.createElement(Vb,{className:n,style:{...A,width:z!==void 0?ta(z):"auto"},...H},D.createElement(d0,{value:J,variant:M,onChange:W,disabled:o,type:"number",readOnly:b,ref:q,fullWidth:!0,onBlur:Q}),D.createElement(Zb,{variant:M},D.createElement(Wo,{"data-testid":"increment",variant:G,disabled:o||b,onClick:X},D.createElement(vp,{invert:!0})),D.createElement(Wo,{"data-testid":"decrement",variant:G,disabled:o||b,onClick:it},D.createElement(vp,null))))});h0.displayName="NumberInput";function Kb(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let o=0;o<10;o+=1)r+=n[Math.floor(Math.random()*n.length)];return r}const p0=n=>O.useMemo(()=>Kb(),[n]),m0=F`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,g0=F`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,ss=U.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Jb=U.div`
  ${m0}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${ss}:focus & {
    ${g0}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,y0=F`
  height: ${he.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:r})=>n?Ie():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Wb=U(rl)`
  ${y0}
  background: ${({$disabled:n=!1,theme:r})=>n?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,Fb=U.div`
  ${_a()}
  ${y0}
  background: ${({$disabled:n=!1,theme:r})=>n?r.flatLight:r.canvas};
`,Ib=U.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${m0}
  cursor: pointer;
  &:disabled {
    ${Ie()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,b0=U(vr).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?F`
          height: 100%;
          margin-right: 0;
        `:F`
          height: 100%;
        `}
  ${({native:n=!1,variant:r="default"})=>n&&(r==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:r=!1})=>n||r?"none":"auto"}
`,Pb=U.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:n=!1,theme:r})=>n?r.materialTextDisabled:r.materialText};
  ${({$disabled:n=!1,theme:r})=>n&&`
    filter: drop-shadow(1px 1px 0px ${r.materialTextDisabledShadow});
    border-top-color: ${r.materialTextDisabled};
    `}
  ${b0}:active & {
    margin-top: 2px;
  }
`,tv=U.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:n})=>n.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${is};
  ${({variant:n="default"})=>n==="flat"?F`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:F`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:n="default"})=>rs(n)}
`,ev=U.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${he.md} - 4px);
  line-height: calc(${he.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?g0:""}
  user-select: none;
`,lv=[],v0=({className:n,defaultValue:r,disabled:o,native:c,onChange:d,options:g=lv,readOnly:b,style:T,value:A,variant:y,width:M})=>{var z;const H=O.useMemo(()=>g.filter(Boolean),[g]),[q,J]=ea({defaultValue:r??((z=H==null?void 0:H[0])===null||z===void 0?void 0:z.value),onChange:d,readOnly:b,value:A}),lt=!(o||b),W=O.useMemo(()=>({className:n,style:{...T,width:M}}),[n,T,M]),V=O.useMemo(()=>D.createElement(b0,{as:"div","data-testid":"select-button",$disabled:o,native:c,tabIndex:-1,variant:y==="flat"?"flat":"raised"},D.createElement(Pb,{"data-testid":"select-icon",$disabled:o})),[o,c,y]),Q=O.useMemo(()=>y==="flat"?Fb:Wb,[y]);return O.useMemo(()=>({isEnabled:lt,options:H,value:q,setValue:J,wrapperProps:W,DropdownButton:V,Wrapper:Q}),[V,Q,lt,H,J,q,W])},av={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},nv=1e3,iv=({onBlur:n,onChange:r,onClose:o,onFocus:c,onKeyDown:d,onMouseDown:g,onOpen:b,open:T,options:A,readOnly:y,value:M,selectRef:z,setValue:H,wrapperRef:q})=>{const J=O.useRef(null),lt=O.useRef([]),W=O.useRef(0),V=O.useRef(0),Q=O.useRef(),X=O.useRef("search"),it=O.useRef(""),G=O.useRef(),[Z,at]=ea({defaultValue:!1,onChange:b,onChangePropName:"onOpen",readOnly:y,value:T,valuePropName:"open"}),jt=O.useMemo(()=>{const _=A.findIndex(et=>et.value===M);return W.current=Ra(_,0,null),A[_]},[A,M]),[P,mt]=O.useState(A[0]),Mt=O.useCallback(_=>{const et=J.current,pt=lt.current[_];if(!pt||!et){Q.current=_;return}Q.current=void 0;const xt=et.clientHeight,zt=et.scrollTop,Yt=et.scrollTop+xt,Qt=pt.offsetTop,ee=pt.offsetHeight,Se=pt.offsetTop+pt.offsetHeight;Qt<zt&&et.scrollTo(0,Qt),Se>Yt&&et.scrollTo(0,Qt-xt+ee),pt.focus({preventScroll:!0})},[J]),Dt=O.useCallback((_,{scroll:et}={})=>{var pt;const xt=A.length-1;let zt;switch(_){case"first":{zt=0;break}case"last":{zt=xt;break}case"next":{zt=Ra(V.current+1,0,xt);break}case"previous":{zt=Ra(V.current-1,0,xt);break}case"selected":{zt=Ra((pt=W.current)!==null&&pt!==void 0?pt:0,0,xt);break}default:zt=_}V.current=zt,mt(A[zt]),et&&Mt(zt)},[V,A,Mt]),Bt=O.useCallback(({fromEvent:_})=>{at(!0),Dt("selected",{scroll:!0}),b==null||b({fromEvent:_})},[Dt,b,at]),_t=O.useCallback(()=>{X.current="search",it.current="",clearTimeout(G.current)},[]),Et=O.useCallback(({focusSelect:_,fromEvent:et})=>{var pt;o==null||o({fromEvent:et}),at(!1),mt(A[0]),_t(),Q.current=void 0,_&&((pt=z.current)===null||pt===void 0||pt.focus())},[_t,o,A,z,at]),L=O.useCallback(({fromEvent:_})=>{Z?Et({focusSelect:!1,fromEvent:_}):Bt({fromEvent:_})},[Et,Bt,Z]),rt=O.useCallback((_,{fromEvent:et})=>{W.current!==_&&(W.current=_,H(A[_].value),r==null||r(A[_],{fromEvent:et}))},[r,A,H]),Y=O.useCallback(({focusSelect:_,fromEvent:et})=>{rt(V.current,{fromEvent:et}),Et({focusSelect:_,fromEvent:et})},[Et,rt]),ot=O.useCallback((_,{fromEvent:et,select:pt})=>{var xt;switch(X.current==="cycleFirstLetter"&&_!==it.current&&(X.current="search"),_===it.current?X.current="cycleFirstLetter":it.current+=_,X.current){case"search":{let zt=A.findIndex(Yt=>{var Qt;return((Qt=Yt.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(it.current))===0});zt<0&&(zt=A.findIndex(Yt=>{var Qt;return((Qt=Yt.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(_))===0}),it.current=_),zt>=0&&(pt?rt(zt,{fromEvent:et}):Dt(zt,{scroll:!0}));break}case"cycleFirstLetter":{const zt=pt?(xt=W.current)!==null&&xt!==void 0?xt:-1:V.current;let Yt=A.findIndex((Qt,ee)=>{var Se;return ee>zt&&((Se=Qt.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(_))===0});Yt<0&&(Yt=A.findIndex(Qt=>{var ee;return((ee=Qt.label)===null||ee===void 0?void 0:ee.toLocaleUpperCase().indexOf(_))===0})),Yt>=0&&(pt?rt(Yt,{fromEvent:et}):Dt(Yt,{scroll:!0}));break}}clearTimeout(G.current),G.current=setTimeout(()=>{X.current==="search"&&(it.current="")},nv)},[Dt,A,rt]),m=O.useCallback(_=>{var et;_.button===0&&(_.preventDefault(),(et=z.current)===null||et===void 0||et.focus(),L({fromEvent:_}),g==null||g(_))},[g,z,L]),k=O.useCallback(_=>{Y({focusSelect:!0,fromEvent:_})},[Y]),I=O.useCallback(_=>{const{altKey:et,code:pt,ctrlKey:xt,metaKey:zt,shiftKey:Yt}=_,{ARROW_DOWN:Qt,ARROW_UP:ee,END:Se,ENTER:Me,ESC:Ce,HOME:la,SPACE:aa,TAB:na}=av,$i=et||xt||zt||Yt;if(!(pt===na&&(et||xt||zt)||pt!==na&&$i))switch(pt){case Qt:{if(_.preventDefault(),!Z){Bt({fromEvent:_});return}Dt("next",{scroll:!0});break}case ee:{if(_.preventDefault(),!Z){Bt({fromEvent:_});return}Dt("previous",{scroll:!0});break}case Se:{if(_.preventDefault(),!Z){Bt({fromEvent:_});return}Dt("last",{scroll:!0});break}case Me:{if(!Z)return;_.preventDefault(),Y({focusSelect:!0,fromEvent:_});break}case Ce:{if(!Z)return;_.preventDefault(),Et({focusSelect:!0,fromEvent:_});break}case la:{if(_.preventDefault(),!Z){Bt({fromEvent:_});return}Dt("first",{scroll:!0});break}case aa:{_.preventDefault(),Z?Y({focusSelect:!0,fromEvent:_}):Bt({fromEvent:_});break}case na:{if(!Z)return;Yt||_.preventDefault(),Y({focusSelect:!Yt,fromEvent:_});break}default:!$i&&pt.match(/^Key/)&&(_.preventDefault(),_.stopPropagation(),ot(pt.replace(/^Key/,""),{select:!Z,fromEvent:_}))}},[Dt,Et,Z,Bt,ot,Y]),N=O.useCallback(_=>{I(_),d==null||d(_)},[I,d]),$=O.useCallback(_=>{Dt(_)},[Dt]),tt=O.useCallback(_=>{Z||(_t(),n==null||n(_))},[_t,n,Z]),K=O.useCallback(_=>{_t(),c==null||c(_)},[_t,c]),ft=O.useCallback(_=>{J.current=_,Q.current!==void 0&&Mt(Q.current)},[Mt]),ht=O.useCallback((_,et)=>{lt.current[et]=_,Q.current===et&&Mt(Q.current)},[Mt]);return O.useEffect(()=>{if(!Z)return()=>{};const _=et=>{var pt;const xt=et.target;!((pt=q.current)===null||pt===void 0)&&pt.contains(xt)||(et.preventDefault(),Et({focusSelect:!1,fromEvent:et}))};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[Et,Z,q]),O.useMemo(()=>({activeOption:P,handleActivateOptionIndex:$,handleBlur:tt,handleButtonKeyDown:N,handleDropdownKeyDown:I,handleFocus:K,handleMouseDown:m,handleOptionClick:k,handleSetDropdownRef:ft,handleSetOptionRef:ht,open:Z,selectedOption:jt}),[P,$,tt,N,K,I,m,k,ft,ht,Z,jt])},uv=O.forwardRef(({className:n,defaultValue:r,disabled:o,onChange:c,options:d,readOnly:g,style:b,value:T,variant:A,width:y,...M},z)=>{const{isEnabled:H,options:q,setValue:J,value:lt,DropdownButton:W,Wrapper:V}=v0({defaultValue:r,disabled:o,native:!0,onChange:c,options:d,readOnly:g,value:T,variant:A}),Q=O.useCallback(X=>{const it=q.find(G=>G.value===X.target.value);it&&(J(it.value),c==null||c(it,{fromEvent:X}))},[c,q,J]);return D.createElement(V,{className:n,style:{...b,width:y}},D.createElement(ss,null,D.createElement(Ib,{...M,disabled:o,onChange:H?Q:ka,ref:z,value:lt},q.map((X,it)=>{var G;return D.createElement("option",{key:`${X.value}-${it}`,value:X.value},(G=X.label)!==null&&G!==void 0?G:X.value)})),W))});uv.displayName="SelectNative";function rv({activateOptionIndex:n,active:r,index:o,onClick:c,option:d,selected:g,setRef:b}){const T=O.useCallback(()=>{n(o)},[n,o]),A=O.useCallback(M=>{b(M,o)},[o,b]),y=p0();return D.createElement(ev,{active:r,"aria-selected":g?"true":void 0,"data-value":d.value,id:y,onClick:c,onMouseEnter:T,ref:A,role:"option",tabIndex:0},d.label)}function cv({"aria-label":n,"aria-labelledby":r,className:o,defaultValue:c,disabled:d=!1,formatDisplay:g,inputProps:b,labelId:T,menuMaxHeight:A,name:y,onBlur:M,onChange:z,onClose:H,onFocus:q,onKeyDown:J,onMouseDown:lt,onOpen:W,open:V,options:Q,readOnly:X,shadow:it=!0,style:G,variant:Z="default",value:at,width:jt="auto",...P},mt){const{isEnabled:Mt,options:Dt,setValue:Bt,value:_t,wrapperProps:Et,DropdownButton:L,Wrapper:rt}=v0({className:o,defaultValue:c,disabled:d,native:!1,onChange:z,options:Q,style:G,readOnly:X,value:at,variant:Z,width:jt}),Y=O.useRef(null),ot=O.useRef(null),m=O.useRef(null),{activeOption:k,handleActivateOptionIndex:I,handleBlur:N,handleButtonKeyDown:$,handleDropdownKeyDown:tt,handleFocus:K,handleMouseDown:ft,handleOptionClick:ht,handleSetDropdownRef:_,handleSetOptionRef:et,open:pt,selectedOption:xt}=iv({onBlur:M,onChange:z,onClose:H,onFocus:q,onKeyDown:J,onMouseDown:lt,onOpen:W,open:V,options:Dt,value:_t,selectRef:ot,setValue:Bt,wrapperRef:m});O.useImperativeHandle(mt,()=>({focus:Me=>{var Ce;(Ce=ot.current)===null||Ce===void 0||Ce.focus(Me)},node:Y.current,value:String(_t)}),[_t]);const zt=O.useMemo(()=>xt?typeof g=="function"?g(xt):xt.label:"",[g,xt]),Yt=Mt?1:void 0,Qt=O.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),ee=p0(),Se=O.useMemo(()=>Dt.map((Me,Ce)=>{const la=`${_t}-${Ce}`,aa=Me===k,na=Me===xt;return D.createElement(rv,{activateOptionIndex:I,active:aa,index:Ce,key:la,onClick:ht,option:Me,selected:na,setRef:et})}),[k,I,ht,et,Dt,xt,_t]);return D.createElement(rt,{...Et,$disabled:d,ref:m,shadow:it,style:{...G,width:jt}},D.createElement("input",{name:y,ref:Y,type:"hidden",value:String(_t),...b}),D.createElement(ss,{"aria-disabled":d,"aria-expanded":pt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":r??T,"aria-owns":Mt&&pt?ee:void 0,onBlur:N,onFocus:K,onKeyDown:$,onMouseDown:Mt?ft:lt,ref:ot,role:"button",tabIndex:Yt,...P},D.createElement(Jb,null,zt),L),Mt&&pt&&D.createElement(tv,{id:ee,onKeyDown:tt,ref:_,role:"listbox",style:Qt,tabIndex:0,variant:Z},Se))}const x0=O.forwardRef(cv);x0.displayName="Select";const ov=U.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,sr=O.forwardRef(function({children:r,noPadding:o=!1,...c},d){return D.createElement(ov,{noPadding:o,ref:d,...c},r)});sr.displayName="Toolbar";const sv=U.div`
  padding: 16px;
`,$a=O.forwardRef(function({children:r,...o},c){return D.createElement(sv,{ref:c,...o},r)});$a.displayName="WindowContent";const fv=U.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?F`
          background: ${({theme:r})=>r.headerNotActiveBackground};
          color: ${({theme:r})=>r.headerNotActiveText};
        `:F`
          background: ${({theme:r})=>r.headerBackground};
          color: ${({theme:r})=>r.headerText};
        `}

  ${vr} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Ba=O.forwardRef(function({active:r=!0,children:o,...c},d){return D.createElement(fv,{active:r,ref:d,...c},o)});Ba.displayName="WindowHeader";const dv=U.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Kt({style:"window"})}
  ${Pe()}
`,hv=U.span`
  ${({theme:n})=>F`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${n.borderLightest} 16.67%,
      ${n.material} 16.67%,
      ${n.material} 33.33%,
      ${n.borderDark} 33.33%,
      ${n.borderDark} 50%,
      ${n.borderLightest} 50%,
      ${n.borderLightest} 66.67%,
      ${n.material} 66.67%,
      ${n.material} 83.33%,
      ${n.borderDark} 83.33%,
      ${n.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Ha=O.forwardRef(({children:n,resizable:r=!1,resizeRef:o,shadow:c=!0,...d},g)=>D.createElement(dv,{ref:g,shadow:c,...d},n,r&&D.createElement(hv,{"data-testid":"resizeHandle",ref:o})));Ha.displayName="Window";const pv=U(Rn)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,mv=U.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,gv=U.div`
  display: flex;
  flex-wrap: wrap;
`,Tl=U.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,yv=U.span`
  cursor: pointer;

  background: ${({active:n,theme:r})=>n?r.hoverBackground:"transparent"};
  color: ${({active:n,theme:r})=>n?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:r})=>r?"none":n.materialDark};
  }
`,bv=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function vv(n,r){return new Date(n,r+1,0).getDate()}function xv(n,r,o){return new Date(n,r,o).getDay()}function Av(n){const r=new Date(Date.parse(n)),o=r.getUTCDate(),c=r.getUTCMonth(),d=r.getUTCFullYear();return{day:o,month:c,year:d}}const Sv=O.forwardRef(({className:n,date:r=new Date().toISOString(),onAccept:o,onCancel:c,shadow:d=!0},g)=>{const[b,T]=O.useState(()=>Av(r)),{year:A,month:y,day:M}=b,z=O.useCallback(({value:W})=>{T(V=>({...V,month:W}))},[]),H=O.useCallback(W=>{T(V=>({...V,year:W}))},[]),q=O.useCallback(W=>{T(V=>({...V,day:W}))},[]),J=O.useCallback(()=>{const W=[b.year,b.month+1,b.day].map(V=>String(V).padStart(2,"0")).join("-");o==null||o(W)},[b.day,b.month,b.year,o]),lt=O.useMemo(()=>{const W=Array.from({length:42}),V=xv(A,y,1);let Q=M;const X=vv(A,y);return Q=Q<X?Q:X,W.forEach((it,G)=>{if(G>=V&&G<X+V){const Z=G-V+1;W[G]=D.createElement(Tl,{key:G,onClick:()=>{q(Z)}},D.createElement(yv,{active:Z===Q},Z))}else W[G]=D.createElement(Tl,{key:G})}),W},[M,q,y,A]);return D.createElement(Ha,{className:n,ref:g,shadow:d,style:{margin:20}},D.createElement(Ba,null,D.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),D.createElement($a,null,D.createElement(sr,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(x0,{options:bv,value:y,onChange:z,width:128,menuMaxHeight:200}),D.createElement(h0,{value:A,onChange:H,width:100})),D.createElement(pv,null,D.createElement(mv,null,D.createElement(Tl,null,"S"),D.createElement(Tl,null,"M"),D.createElement(Tl,null,"T"),D.createElement(Tl,null,"W"),D.createElement(Tl,null,"T"),D.createElement(Tl,null,"F"),D.createElement(Tl,null,"S")),D.createElement(gv,null,lt)),D.createElement(sr,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(_i,{fullWidth:!0,onClick:c,disabled:!c},"Cancel"),D.createElement(_i,{fullWidth:!0,onClick:o?J:void 0,disabled:!o},"OK"))))});Sv.displayName="DatePicker";const Ev=n=>{switch(n){case"status":case"well":return F`
        ${Kt({style:"status"})}
      `;case"window":case"outside":return F`
        ${Kt({style:"window"})}
      `;case"field":return F`
        ${Kt({style:"field"})}
      `;default:return F`
        ${Kt()}
      `}},wv=U.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Ev(n)}
  ${({variant:n})=>Pe(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,A0=O.forwardRef(({children:n,shadow:r=!1,variant:o="window",...c},d)=>D.createElement(wv,{ref:d,shadow:r,variant:o,...c},n));A0.displayName="Frame";const Tv=U.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:r})=>r==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&F`
      box-shadow: -1px -1px 0 1px ${({theme:r})=>r.borderDark},
        inset -1px -1px 0 1px ${({theme:r})=>r.borderDark};
    `}
  ${n=>n.$disabled&&Ie()}
`,Dv=U.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:r})=>r==="flat"?n.canvas:n.material};
`,zv=O.forwardRef(({label:n,disabled:r=!1,variant:o="default",children:c,...d},g)=>D.createElement(Tv,{"aria-disabled":r,$disabled:r,variant:o,ref:g,...d},n&&D.createElement(Dv,{variant:o},n),c));zv.displayName="GroupBox";const Ov=U.div`
  ${({theme:n,size:r="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${ta(r)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Ov.displayName="Handle";const Rv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",jv=U.div`
  display: inline-block;
  height: ${({size:n})=>ta(n)};
  width: ${({size:n})=>ta(n)};
`,Mv=U.span`
  display: block;
  background: ${Rv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Cv=O.forwardRef(({size:n=30,...r},o)=>D.createElement(jv,{size:n,ref:o,...r},D.createElement(Mv,null)));Cv.displayName="Hourglass";const _v=U.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,kv=U.div`
  position: relative;
`,$v=U.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:n})=>n.material};
  border-top: 4px solid ${({theme:n})=>n.borderLightest};
  border-left: 4px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 4px solid ${({theme:n})=>n.borderDark};
  border-right: 4px solid ${({theme:n})=>n.borderDark};

  outline: 1px dotted ${({theme:n})=>n.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:n})=>n.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:n})=>n.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Bv=U(rl).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Hv=U.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:n})=>n.material};
  border-left: 2px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 2px solid ${({theme:n})=>n.borderDarkest};
  border-right: 2px solid ${({theme:n})=>n.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:n})=>n.material};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:n})=>n.material};
    border: 2px solid ${({theme:n})=>n.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:n})=>n.borderLightest},
      1px 1px 0 1px ${({theme:n})=>n.borderDarkest};
  }
`,Uv=O.forwardRef(({backgroundStyles:n,children:r,...o},c)=>D.createElement(_v,{ref:c,...o},D.createElement(kv,null,D.createElement($v,null,D.createElement(Bv,{style:n},r)),D.createElement(Hv,null))));Uv.displayName="Monitor";const Nv=U.div`
  display: inline-block;
  height: ${he.md};
  width: 100%;
`,Lv=U(rl)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,S0=F`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Qv=U.div`
  position: relative;
  top: 4px;
  ${S0}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,qv=U.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${S0}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Gv=U.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,E0=17,Yv=U.span`
  display: inline-block;
  width: ${E0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,w0=O.forwardRef(({hideValue:n=!1,shadow:r=!0,value:o,variant:c="default",...d},g)=>{const b=n?null:`${o}%`,T=O.useRef(null),[A,y]=O.useState([]),M=O.useCallback(()=>{if(!T.current||o===void 0)return;const z=T.current.getBoundingClientRect().width,H=Math.round(o/100*z/E0);y(Array.from({length:H}))},[o]);return O.useEffect(()=>(M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)),[M]),D.createElement(Nv,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:g,role:"progressbar",variant:c,...d},D.createElement(Lv,{variant:c,shadow:r},c==="default"?D.createElement(D.Fragment,null,D.createElement(Qv,{"data-testid":"defaultProgress1"},b),D.createElement(qv,{"data-testid":"defaultProgress2",value:o},b)):D.createElement(Gv,{ref:T,"data-testid":"tileProgress"},A.map((z,H)=>D.createElement(Yv,{key:H})))))});w0.displayName="ProgressBar";const T0=F`
  width: ${ul}px;
  height: ${ul}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Xv=U(rl)`
  ${T0}
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Vv=U.div`
  ${_a()}
  ${T0}
  outline: none;
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:n})=>n.flatDark};
    border-radius: 50%;
  }
`,Zv=U.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
`,Kv={flat:Vv,default:Xv},Jv=O.forwardRef(({checked:n,className:r="",disabled:o=!1,label:c="",onChange:d,style:g={},variant:b="default",...T},A)=>{const y=Kv[b];return D.createElement(cs,{$disabled:o,className:r,style:g},D.createElement(y,{$disabled:o,role:"presentation"},n&&D.createElement(Zv,{$disabled:o,variant:b})),D.createElement(or,{disabled:o,onChange:o?void 0:d,readOnly:o,type:"radio",checked:n,ref:A,...T}),c&&D.createElement(os,null,c))});Jv.displayName="Radio";const Wv=typeof window<"u"?O.useLayoutEffect:O.useEffect;function za(n){const r=O.useRef(n);return Wv(()=>{r.current=n}),O.useCallback((...o)=>(0,r.current)(...o),[])}function xp(n,r){typeof n=="function"?n(r):n&&(n.current=r)}function Ap(n,r){return O.useMemo(()=>n==null&&r==null?null:o=>{xp(n,o),xp(r,o)},[n,r])}var Fv=Mp();let xr=!0,Fo=!1,Sp;const Iv={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Pv(n){if("type"in n){const{type:r,tagName:o}=n;if(o==="INPUT"&&Iv[r]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function t1(n){n.metaKey||n.altKey||n.ctrlKey||(xr=!0)}function Ho(){xr=!1}function e1(){this.visibilityState==="hidden"&&Fo&&(xr=!0)}function l1(n){n.addEventListener("keydown",t1,!0),n.addEventListener("mousedown",Ho,!0),n.addEventListener("pointerdown",Ho,!0),n.addEventListener("touchstart",Ho,!0),n.addEventListener("visibilitychange",e1,!0)}function a1(n){const{target:r}=n;try{return r.matches(":focus-visible")}catch{}return xr||Pv(r)}function n1(){Fo=!0,window.clearTimeout(Sp),Sp=window.setTimeout(()=>{Fo=!1},100)}function i1(){const n=O.useCallback(r=>{const o=Fv.findDOMNode(r);o!=null&&l1(o.ownerDocument)},[]);return{isFocusVisible:a1,onBlurVisible:n1,ref:n}}function u1(n,r,o){return(o-r)*n+r}function Wu(n,r){if(r!==void 0&&"changedTouches"in n){for(let o=0;o<n.changedTouches.length;o+=1){const c=n.changedTouches[o];if(c.identifier===r)return{x:c.clientX,y:c.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Fu(n){return n&&n.ownerDocument||document}function r1(n,r){var o;const{index:c}=(o=n.reduce((d,g,b)=>{const T=Math.abs(r-g);return d===null||T<d.distance||T===d.distance?{distance:T,index:b}:d},null))!==null&&o!==void 0?o:{};return c??-1}const c1=U.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:n})=>n?"41px":"39px"};
    ${({isFocused:n,theme:r})=>n&&`
        outline: 2px dotted ${r.materialText};
        `}
  }

  ${({orientation:n,size:r})=>n==="vertical"?F`
          height: ${r};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `:F`
          width: ${r};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,D0=()=>F`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?F`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:F`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,o1=U(rl)`
  ${D0()}
`,s1=U(rl)`
  ${D0()}

  border-left-color: ${({theme:n})=>n.flatLight};
  border-top-color: ${({theme:n})=>n.flatLight};
  border-right-color: ${({theme:n})=>n.canvas};
  border-bottom-color: ${({theme:n})=>n.canvas};
  &:before {
    border-left-color: ${({theme:n})=>n.flatDark};
    border-top-color: ${({theme:n})=>n.flatDark};
    border-right-color: ${({theme:n})=>n.flatLight};
    border-bottom-color: ${({theme:n})=>n.flatLight};
  }
`,f1=U.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?F`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:F`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?F`
          ${_a()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:F`
          ${Pe()}
          ${Kt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:r})=>n&&ki({mainColor:r.material,secondaryColor:r.borderLightest})}
`,fr=6,d1=U.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?F`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${fr}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:F`
          bottom: ${-6}px;
          height: ${fr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:r})=>r.materialText};
          border-right: 1px solid ${({theme:r})=>r.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:r})=>n&&F`
      ${Ie()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,h1=U.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?F`
          transform: translate(${fr+2}px, ${fr+1}px);
        `:F`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,p1=O.forwardRef(({defaultValue:n,disabled:r=!1,marks:o=!1,max:c=100,min:d=0,name:g,onChange:b,onChangeCommitted:T,onMouseDown:A,orientation:y="horizontal",size:M="100%",step:z=1,value:H,variant:q="default",...J},lt)=>{const W=q==="flat"?s1:o1,V=y==="vertical",[Q=d,X]=ea({defaultValue:n,onChange:b??T,value:H}),{isFocusVisible:it,onBlurVisible:G,ref:Z}=i1(),[at,jt]=O.useState(!1),P=O.useRef(),mt=O.useRef(null),Mt=Ap(Z,P),Dt=Ap(lt,Mt),Bt=za(N=>{it(N)&&jt(!0)}),_t=za(()=>{at!==!1&&(jt(!1),G())}),Et=O.useRef(),L=O.useMemo(()=>o===!0&&Number.isFinite(z)?[...Array(Math.round((c-d)/z)+1)].map((N,$)=>({label:void 0,value:d+z*$})):Array.isArray(o)?o:[],[o,c,d,z]),rt=za(N=>{const $=(c-d)/10,tt=L.map(ht=>ht.value),K=tt.indexOf(Q);let ft=0;switch(N.key){case"Home":ft=d;break;case"End":ft=c;break;case"PageUp":z&&(ft=Q+$);break;case"PageDown":z&&(ft=Q-$);break;case"ArrowRight":case"ArrowUp":z?ft=Q+z:ft=tt[K+1]||tt[tt.length-1];break;case"ArrowLeft":case"ArrowDown":z?ft=Q-z:ft=tt[K-1]||tt[0];break;default:return}N.preventDefault(),z&&(ft=yp(ft,z,d)),ft=Ra(ft,d,c),X(ft),jt(!0),b==null||b(ft),T==null||T(ft)}),Y=O.useCallback(N=>{if(!P.current)return 0;const $=P.current.getBoundingClientRect();let tt;V?tt=($.bottom-N.y)/$.height:tt=(N.x-$.left)/$.width;let K;if(K=u1(tt,d,c),z)K=yp(K,z,d);else{const ft=L.map(_=>_.value),ht=r1(ft,K);K=ft[ht]}return K=Ra(K,d,c),K},[L,c,d,z,V]),ot=za(N=>{var $;const tt=Wu(N,Et.current);if(!tt)return;const K=Y(tt);($=mt.current)===null||$===void 0||$.focus(),X(K),jt(!0),b==null||b(K)}),m=za(N=>{const $=Wu(N,Et.current);if(!$)return;const tt=Y($);T==null||T(tt),Et.current=void 0;const K=Fu(P.current);K.removeEventListener("mousemove",ot),K.removeEventListener("mouseup",m),K.removeEventListener("touchmove",ot),K.removeEventListener("touchend",m)}),k=za(N=>{var $;A==null||A(N),N.preventDefault(),($=mt.current)===null||$===void 0||$.focus(),jt(!0);const tt=Wu(N,Et.current);if(tt){const ft=Y(tt);X(ft),b==null||b(ft)}const K=Fu(P.current);K.addEventListener("mousemove",ot),K.addEventListener("mouseup",m)}),I=za(N=>{var $;N.preventDefault();const tt=N.changedTouches[0];tt!=null&&(Et.current=tt.identifier),($=mt.current)===null||$===void 0||$.focus(),jt(!0);const K=Wu(N,Et.current);if(K){const ht=Y(K);X(ht),b==null||b(ht)}const ft=Fu(P.current);ft.addEventListener("touchmove",ot),ft.addEventListener("touchend",m)});return O.useEffect(()=>{const{current:N}=P;N==null||N.addEventListener("touchstart",I);const $=Fu(N);return()=>{N==null||N.removeEventListener("touchstart",I),$.removeEventListener("mousemove",ot),$.removeEventListener("mouseup",m),$.removeEventListener("touchmove",ot),$.removeEventListener("touchend",m)}},[m,ot,I]),D.createElement(c1,{$disabled:r,hasMarks:!!L.length,isFocused:at,onMouseDown:k,orientation:y,ref:Dt,size:ta(M),...J},D.createElement("input",{disabled:r,name:g,type:"hidden",value:Q??0}),L&&L.map(N=>D.createElement(d1,{$disabled:r,"data-testid":"tick",key:N.value/(c-d)*100,orientation:y,style:{[V?"bottom":"left"]:`${(N.value-d)/(c-d)*100}%`}},N.label&&D.createElement(h1,{"aria-hidden":!0,"data-testid":"mark",orientation:y},N.label))),D.createElement(W,{orientation:y,variant:q}),D.createElement(f1,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":y,"aria-valuemax":c,"aria-valuemin":d,"aria-valuenow":Q,onBlur:_t,onFocus:Bt,onKeyDown:rt,orientation:y,ref:mt,role:"slider",style:{[V?"bottom":"left"]:`${(V?-100:0)+100*(Q-d)/(c-d)}%`},tabIndex:r?void 0:0,variant:q}))});p1.displayName="Slider";const m1=U.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${us};
  overflow-y: auto;
`,z0=O.forwardRef(function({children:r,...o},c){return D.createElement(m1,{ref:c,...o},r)});z0.displayName="TableBody";const g1=U.td`
  padding: 0 8px;
`,st=O.forwardRef(function({children:r,...o},c){return D.createElement(g1,{ref:c,...o},r)});st.displayName="TableDataCell";const y1=U.thead`
  display: table-header-group;
`,O0=O.forwardRef(function({children:r,...o},c){return D.createElement(y1,{ref:c,...o},r)});O0.displayName="TableHead";const b1=U.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:n})=>n.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Kt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&F`
      &:active {
        &:before {
          ${Kt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:n})=>n.materialText};
  ${({$disabled:n})=>n&&Ie()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&Ie()}
  }
`,ar=O.forwardRef(function({disabled:r=!1,children:o,onClick:c,onTouchStart:d=ka,sort:g,...b},T){const A=g==="asc"?"ascending":g==="desc"?"descending":void 0;return D.createElement(b1,{$disabled:r,"aria-disabled":r,"aria-sort":A,onClick:r?void 0:c,onTouchStart:r?void 0:d,ref:T,...b},D.createElement("div",null,o))});ar.displayName="TableHeadCell";const v1=U.tr`
  color: inherit;
  display: table-row;
  height: calc(${he.md} - 2px);
  line-height: calc(${he.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,Pt=O.forwardRef(function({children:r,...o},c){return D.createElement(v1,{ref:c,...o},r)});Pt.displayName="TableRow";const x1=U.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,A1=U(rl)`
  &:before {
    box-shadow: none;
  }
`,R0=O.forwardRef(({children:n,...r},o)=>D.createElement(A1,null,D.createElement(x1,{ref:o,...r},n)));R0.displayName="Table";const S1=U.button`
  ${Pe()}
  ${Kt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${he.md};
  line-height: ${he.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${zn}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${he.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,nr=O.forwardRef(({value:n,onClick:r,selected:o=!1,children:c,...d},g)=>D.createElement(S1,{"aria-selected":o,selected:o,onClick:b=>r==null?void 0:r(n,b),ref:g,role:"tab",...d},c));nr.displayName="Tab";const E1=U.div`
  ${Pe()}
  ${Kt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,j0=O.forwardRef(({children:n,...r},o)=>D.createElement(E1,{ref:o,...r},n));j0.displayName="TabBody";const w1=U.div`
  position: relative;
  ${({isMultiRow:n,theme:r})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,T1=U.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
  }
`;function D1(n,r){const o=[];for(let c=r;c>0;c-=1)o.push(n.splice(0,Math.ceil(n.length/c)));return o}const M0=O.forwardRef(({value:n,onChange:r=ka,children:o,rows:c=1,...d},g)=>{const b=O.useMemo(()=>{var T;const A=(T=D.Children.map(o,z=>{if(!D.isValidElement(z))return null;const H={selected:z.props.value===n,onClick:r};return D.cloneElement(z,H)}))!==null&&T!==void 0?T:[],y=D1(A,c).map((z,H)=>({key:H,tabs:z})),M=y.findIndex(z=>z.tabs.some(H=>H.props.selected));return y.push(y.splice(M,1)[0]),y},[o,r,c,n]);return D.createElement(w1,{...d,isMultiRow:c>1,role:"tablist",ref:g},b.map(T=>D.createElement(T1,{key:T.key},T.tabs)))});M0.displayName="Tabs";const z1=["blur","focus"],O1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Ep(n){return"nativeEvent"in n&&z1.includes(n.type)}function wp(n){return"nativeEvent"in n&&O1.includes(n.type)}const R1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},j1=U.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${is};
  text-align: center;
  font-size: 1rem;
  ${n=>R1[n.position]}
`,M1=U.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,C1=O.forwardRef(({className:n,children:r,disableFocusListener:o=!1,disableMouseListener:c=!1,enterDelay:d=1e3,leaveDelay:g=0,onBlur:b,onClose:T,onFocus:A,onMouseEnter:y,onMouseLeave:M,onOpen:z,style:H,text:q,position:J="top",...lt},W)=>{const[V,Q]=O.useState(!1),[X,it]=O.useState(),[G,Z]=O.useState(),at=!o,jt=!c,P=Y=>{window.clearTimeout(X),window.clearTimeout(G);const ot=window.setTimeout(()=>{Q(!0),z==null||z(Y)},d);it(ot)},mt=Y=>{Y.persist(),Ep(Y)?A==null||A(Y):wp(Y)&&(y==null||y(Y)),P(Y)},Mt=Y=>{window.clearTimeout(X),window.clearTimeout(G);const ot=window.setTimeout(()=>{Q(!1),T==null||T(Y)},g);Z(ot)},Dt=Y=>{Y.persist(),Ep(Y)?b==null||b(Y):wp(Y)&&(M==null||M(Y)),Mt(Y)},Bt=at?Dt:void 0,_t=at?mt:void 0,Et=jt?mt:void 0,L=jt?Dt:void 0,rt=at?0:void 0;return D.createElement(M1,{"data-testid":"tooltip-wrapper",onBlur:Bt,onFocus:_t,onMouseEnter:Et,onMouseLeave:L,tabIndex:rt},D.createElement(j1,{className:n,"data-testid":"tooltip",position:J,ref:W,show:V,style:H,...lt},q),r)});C1.displayName="Tooltip";const Io=U(os)`
  white-space: nowrap;
`,C0=F`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":F`
          cursor: pointer;

          :focus {
            ${Io} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,_1=U.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&F`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:r})=>r.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:n})=>n.borderDark};
      font-size: 12px;
    }
  }
`,k1=U.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?F`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:r})=>r.material};
            }
          }
        `:F`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:r})=>r.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:n})=>n.borderDark};
    }
  }
`,$1=U.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,B1=U.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${C0};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Tp=U(cs)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${C0};
`,H1=U.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Dp(n,r){return n.includes(r)?n.filter(o=>o!==r):[...n,r]}function zp(n){n.preventDefault()}function _0({className:n,disabled:r,expanded:o,innerRef:c,level:d,select:g,selected:b,style:T,tree:A=[]}){const y=d===0,M=O.useCallback(z=>{var H,q;const J=!!(z.items&&z.items.length>0),lt=o.includes(z.id),W=(H=r||z.disabled)!==null&&H!==void 0?H:!1,V=W?zp:G=>g(G,z),Q=W?zp:G=>g(G,z),X=b===z.id,it=D.createElement(H1,{"aria-hidden":!0},z.icon);return D.createElement(k1,{key:z.label,isRootLevel:y,role:"treeitem","aria-expanded":lt,"aria-selected":X,hasItems:J},J?D.createElement($1,{open:lt},D.createElement(B1,{onClick:V,$disabled:W},D.createElement(Tp,{$disabled:W},it,D.createElement(Io,null,z.label))),lt&&D.createElement(_0,{className:n,disabled:W,expanded:o,level:d+1,select:g,selected:b,style:T,tree:(q=z.items)!==null&&q!==void 0?q:[]})):D.createElement(Tp,{as:"button",$disabled:W,onClick:Q},it,D.createElement(Io,null,z.label)))},[n,r,o,y,d,g,b,T]);return D.createElement(_1,{className:y?n:void 0,style:y?T:void 0,ref:y?c:void 0,role:y?"tree":"group",isRootLevel:y},A.map(M))}function U1({className:n,defaultExpanded:r=[],defaultSelected:o,disabled:c=!1,expanded:d,onNodeSelect:g,onNodeToggle:b,selected:T,style:A,tree:y=[]},M){const[z,H]=ea({defaultValue:r,onChange:b,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[q,J]=ea({defaultValue:o,onChange:g,onChangePropName:"onNodeSelect",value:T,valuePropName:"selected"}),lt=O.useCallback((Q,X)=>{if(b){const it=Dp(z,X);b(Q,it)}H(it=>Dp(it,X))},[z,b,H]),W=O.useCallback((Q,X)=>{J(X),g&&g(Q,X)},[g,J]),V=O.useCallback((Q,X)=>{Q.preventDefault(),W(Q,X.id),X.items&&X.items.length&&lt(Q,X.id)},[W,lt]);return D.createElement(_0,{className:n,disabled:c,expanded:z,level:0,innerRef:M,select:V,selected:q,style:A,tree:y})}const N1=O.forwardRef(U1);N1.displayName="TreeView";function L1(){const[n,r]=O.useState(new Date);O.useEffect(()=>{const d=setInterval(()=>r(new Date),1e3);return()=>clearInterval(d)},[]);const o=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0}).format(n);return p.jsx(A0,{variant:"field",shadow:!0,style:{padding:"0.3rem",lineHeight:"1",width:100},children:p.jsx("center",{children:o})})}function Q1(){return p.jsxs(Rn,{style:{width:"100%",height:"400px"},children:[p.jsx("h1",{style:{margin:"20px",fontWeight:"bold",fontSize:"30px"},children:p.jsx("strong",{children:"Hey, I'm Michael 👋"})}),p.jsx(zl,{}),p.jsx("center",{children:p.jsx("img",{src:"/me3.png",width:500,height:350,alt:"picture of me"})}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"Growing up I have always had a fascination with technology. Some of my earliest memories include taking apart old tv remotes, completely in awe of how a thin circuit board with funky looking metal pins and etchings on it can tell a tv what channel I want from across the room. It must have been magic, I thought."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"As I grew a little older so did my curiosity. I would learn it isn’t really magic but light emitting diodes that enabled a tv remote to instantly communicate with a TV (and why these old tv remote were such a pain to use)!  Watching hours of youtube videos explaining science and technology filled my younger mind with all these little revelations of how the world around me worked. Like many other kids my age I spent much of my time getting lost in video games with my friends. Eventually I had my own ideas. No longer satisfied just playing video games I set out to make my own. This introduced me to the world of programming. Starting out with the game engine Unity and C# I spent much of my time in middle school learning and developing my own 2D and 3D games with unity for me and my friends to play. Eventually my passion for game development would develop into a greater fervor for software development in general."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"This would come following getting gifted my first personal IMac in my freshman year of high school. Being obsessed with all things apple at this point in my life, this gift would be a turning point in my life. I finally had the hardware to explore all my software interests. Entrenched in the apple ecosystem as I was, I naturally started getting into IOS development. Again, I found myself spending the majority of my time in freshman year learning, this time Swift  and Xcode, the main language and software development environment used for native IOS development. Having so many app ideas of my own I knew I had to learn everything there was to know about IOS development. This led to the release of my first app in sophomore year of highschool: InsomniChat. Struggling with insomnia at the time I decided to code away the long nights to make a chat app only for others awake past a certain hour. This project was one of my most ambitious and required backend knowledge which at the time was a mystery to me. After many sleepless nights and revisions my first app was finally accepted onto the app store. All my hard work paid off and I was ecstatic, sharing the app with all my friends and family."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"As time passed, I dipped into other areas of software development. I learned frontend web development with React JS. So when my cousin needed a website for his cafe I was able to step up to the occasion. Seeing how valuable my skill set was to our modern digital world, I started to offer my services to any friends and family who would benefit from them. I saw software as the ultimate tool to solve not only my day to day problems with things like automation programs using python but also helping those around me with their digital needs."}),p.jsxs("p",{style:{margin:"20px",fontSize:"20px"},children:["This background helped me immensely once I started College. As a current undergraduate student at Stony Brook University studying Computer Science, I can say that my background helped me not only to get ahead but also allowed me to learn more in my few years at college than I have in the many years before that. ",p.jsx("span",{style:{fontWeight:"bold"},children:"Go to the Education tab to learn more about my learning journey here at Stony Brook."})]})]})}function q1(){return p.jsxs(Rn,{style:{width:"100%",height:"400px"},children:[p.jsx("h1",{style:{margin:"20px",fontWeight:"bold",fontSize:"30px"},children:p.jsx("strong",{children:"Computer Science At Stony Brook University 💻⚙️"})}),p.jsx(zl,{}),p.jsx("center",{children:p.jsx("img",{src:"/Stony_Brook_University_seal.svg",alt:"Stony Brook University"})}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"It became clear to me before I started College that I wanted to study Computer Science. My earlier years had set a strong foundation already but I was ready for the next step in my career. This all started at Stony Brook University."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"Currently I am in my third year here studying Computer Science. The program is known for being quite rigorous and competitive, a fact that might have concerned me in freshman year but now drives me to take pride in my learning journey! The challenges I faced and overcame helped make me a more competent and confident software developer. I now feel more equipped than ever in my abilities. I have fostered not only technical skills but soft skills which made me a better team player, collaborator, and communicator."}),p.jsx("h1",{style:{margin:"20px",fontWeight:"bold",fontSize:"30px"},children:"Course Work 📝👨‍🏫 "}),p.jsx(zl,{}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"I took a wide array of courses which have expanded my computer science knowledge."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"Classes like CSE 114 and CSE 214 gave me an exceptionally strong foundation for working with java and extended this foundation to the understanding of data structures and algorithms. This helped me not only write code that works but code that works efficiently. We had to write, debug, and test our code for the homeworks which made me a more diligent programmer."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"I got to learn about different programming concepts and paradigms in CSE 216 which helped me see under the hood of how some of my favorite programming languages work and why they were designed that way. This also helped me develop a greater understanding of object oriented programming. Knowing the limitations and design rules of many programming languages like python and java was essential for me to efficiently create programs in regards to a certain language. Similarly in CSE 371, we delved deeper into some of the most useful algorithms to explore not only how they work but why they work. Having this understanding was crucial for my foundational knowledge and made it possible for me to know when and why I should use certain algorithms."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"I got to see under the hood of how computers work at a lower level in CSE 220 and CSE 320, where we explored System Fundamentals through Java, C, and Assembly programming. Learning along the concepts like bitwise operations, memory management, concurrency, performance analysis, and other lower level operations that revealed to me how assemblers, linkers, and compilers work to take a program in C all the way to an executable. Having an understanding of what's really going on when you write a program, helped me not only appreciate the ease with which higher level languages simplify these topics but also gave me the ability to write better performing code both in low level and high level programming."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"Courses like CSE 337 helped equip me with practical knowledge on web development in which we go in depth through the MERN stack, eventually creating a reddit clone called ‘phreddit’ as a final project with my teammate. Working with a teammate on this project using github helped me simulate a real workflow collaborating on a large software project. I learned efficient ways to divide tasks and resolve merge conflicts when they arise. Similarly I learned many practical skills in courses like CSE 337 in which we learned a wide array of scripting languages including, python, ruby, and bash. These skills are valuable and helped me easily and quickly create scripts for all kinds of different tasks."}),p.jsx("h1",{style:{margin:"20px",fontWeight:"bold",fontSize:"30px"},children:"Extracurriculars 🚀💯"}),p.jsx(zl,{}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"A good amount of my growth here at SBU took place outside the classroom."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"In my first semester of Sophomore year I joined a program called VIP which consists of student groups headed by professors working on a project. My team was working on a project called LOQI, which is a student learning platform using AI for students to learn and collaborate with other classmates. Working on LOQI I developed a greater proficiency using react for frontend development and learned to work as part of a team efficiently using github to collaborate."}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"Currently I have recently started an internship which will turn into a part time job next semester, for the department of IT. My role will be that of a student software developer working on and creating the many applications that help the school function in its day to day. I am extremely excited for what this opportunity will bring!"})]})}function G1(){return p.jsxs(Rn,{style:{width:"100%",height:"400px"},children:[p.jsx("h1",{style:{margin:"20px",fontWeight:"bold",fontSize:"30px"},children:p.jsx("strong",{children:"Work Experience 👨‍💻🏢"})}),p.jsx(zl,{}),p.jsx("p",{style:{margin:"20px",fontSize:"20px"},children:"All my education and background ultimately set the stage for establishing my career out in the real world. However my work experiences have been just as crucial to my learning journey as all my schooling was."}),p.jsxs("p",{style:{margin:"20px",fontSize:"20px"},children:["Currently I am working as a student software engineer at the ",p.jsx("span",{style:{fontWeight:"bold"},children:"Stony Brook University TLT Media Lab"}),", The programs we create in this lab are a suite of applications that help both faculty and students enhance their teaching and learning experiences. Already I have helped optimize our LAMP stack build environment using ddev and Dockerfiles to automatically allow for admin authorization in the build environment to work with our IDP. This will transform how me and my team push our local changes to production."]}),p.jsxs("p",{style:{margin:"20px",fontSize:"20px"},children:["During my internship at ",p.jsx("span",{style:{fontWeight:"bold"},children:"Pulp Chat"}),", a startup, dedicated to revolutionizing how we conversate and communicate using AI, I was given many large responsibilities and my first taste of professional software development. I solely led the development of a web application to be used by the other members of the company to preprocess and collect data. I learned to use flask and SQLite in the process. I had to ensure the reliability and security of the application due to how crucial it was to all the other operations happening at the company. This also introduced me to the importance of documenting my work and making sure my work meets the requirements of the team. Following this, I also got to work on the frontend of the application using React and Tailwind CSS, and database management using Prisma. I got to experience full stack web development in a professional environment."]}),p.jsxs("p",{style:{margin:"20px",fontSize:"20px"},children:["As a Web Development intern at ",p.jsx("span",{style:{fontWeight:"bold"},children:"Black to Business"}),", a platform for African American Entrepreneurs, I helped work on their podcasting platform site. I utilized Wordpress along with Custom CSS and Javascript to create and beautifully redesign many of the pages in the site, working closely with a graphic designer. I learned to pay close attention to visual details to make websites aesthetically pleasing and create a pleasant user experience. I also used my scripting skills to automate collecting and storing podcast analytics data, an idea which I proposed as I had figured their process can and should easily be automated. This helped garner confidence in initiating and implementing my own ideas."]}),p.jsxs("p",{style:{margin:"20px",fontSize:"20px"},children:["Working as a software engineer in my VIP team, ",p.jsx("span",{style:{fontWeight:"bold"},children:"LOQI"}),", my primary focus was on the frontend which was implemented in React JS. Working on the interface and design throughout my time here has made me a seasoned frontend developer and teamplayer, having to efficiently communicate my work to other members of the team to ensure we were reaching progress on our goals."]})]})}function Y1(){const[n,r]=O.useState({activeTab:0}),o=(d,g)=>{console.log({value:d,event:g}),r({activeTab:d})},{activeTab:c}=n;return p.jsxs(Ha,{resizable:!0,className:"window",style:{width:"70%",height:"100%"},children:[p.jsx(Ba,{className:"window-title",children:p.jsx("span",{children:"All_About_Me.exe"})}),p.jsxs($a,{children:[p.jsxs(M0,{value:c,onChange:o,children:[p.jsx(nr,{value:0,children:"Who Is Michael?"}),p.jsx(nr,{value:1,children:"Education"}),p.jsx(nr,{value:2,children:"Experience"})]}),p.jsxs(j0,{style:{display:"flex",flexDirection:"column",flexGrow:1,height:"100%",background:"white"},children:[c===0&&p.jsx(Q1,{}),c===1&&p.jsx(q1,{}),c===2&&p.jsx(G1,{})]})]})]})}function X1(){return p.jsxs(Ha,{className:"window",children:[p.jsx(Ba,{active:!0,className:"window-title",children:p.jsx("span",{children:"Me.jpeg"})}),p.jsxs($a,{children:[p.jsx("img",{src:"/me3.png",width:500,height:350,alt:"picture of me"}),p.jsx("h1",{style:{fontSize:"20px"},children:"Thats Me!"})]})]})}function V1(){return p.jsxs(Ha,{style:{width:320,height:"100%"},children:[p.jsx(Ba,{children:"Skills_Pokedex.exe"}),p.jsx($a,{children:p.jsx(R0,{children:p.jsxs(Rn,{style:{width:"100%",height:"60vh"},children:[p.jsx(O0,{children:p.jsxs(Pt,{children:[p.jsx(ar,{children:"rank"}),p.jsx(ar,{children:"skill"}),p.jsx(ar,{children:"Mastery"})]})}),p.jsxs(z0,{children:[p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"fire",children:"🤔"})}),p.jsx(st,{children:"Problem-Solving"}),p.jsx(st,{children:"100%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"fire",children:"🤝"})}),p.jsx(st,{children:"Teamwork"}),p.jsx(st,{children:"100%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"fire",children:"😺"})}),p.jsx(st,{children:"Git/GitHub"}),p.jsx(st,{children:"95%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"fire",children:"⚛️"})}),p.jsx(st,{children:"React JS"}),p.jsx(st,{children:"90%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"fire",children:"✅"})}),p.jsx(st,{children:"Javascript"}),p.jsx(st,{children:"90%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"fire",children:"♨️"})}),p.jsx(st,{children:"Java"}),p.jsx(st,{children:"90%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"⚡"})}),p.jsx(st,{children:"Swift/Xcode"}),p.jsx(st,{children:"85%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"🤖"})}),p.jsx(st,{children:"C programming"}),p.jsx(st,{children:"80%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"🐍"})}),p.jsx(st,{children:"Python"}),p.jsx(st,{children:"90%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"🟢"})}),p.jsx(st,{children:"Node JS"}),p.jsx(st,{children:"95%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"🌐"})}),p.jsx(st,{children:"MERN Stack"}),p.jsx(st,{children:"90%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"💎"})}),p.jsx(st,{children:"Ruby"}),p.jsx(st,{children:"75%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"🦾"})}),p.jsx(st,{children:"X86 Assembly"}),p.jsx(st,{children:"75%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"🚀"})}),p.jsx(st,{children:"MIPS Assembly"}),p.jsx(st,{children:"75%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"📟"})}),p.jsx(st,{children:"Bash"}),p.jsx(st,{children:"70%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"🆆"})}),p.jsx(st,{children:"Wordpress"}),p.jsx(st,{children:"80%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"☁️"})}),p.jsx(st,{children:"AWS"}),p.jsx(st,{children:"60%"})]}),p.jsxs(Pt,{children:[p.jsx(st,{style:{textAlign:"center"},children:p.jsx("span",{role:"img","aria-label":"lightning",children:"📡"})}),p.jsx(st,{children:"GCP"}),p.jsx(st,{children:"60%"})]})]})]})})})]})}function Z1({onClick:n}){return p.jsx("div",{onClick:n,style:{cursor:"pointer"},children:p.jsx(r0,{size:50,src:"/personalIMG.jpg"})})}function K1(){return p.jsxs(Ha,{style:{width:"60vw",height:"60vh"},children:[p.jsx(Ba,{children:"Resume.pdf"}),p.jsx($a,{style:{width:"90%",height:"80%"},children:p.jsx("iframe",{src:"/Newest Michael Kawwa Resume copy.docx.pdf",style:{width:"100%",height:"100%"}})})]})}const k0="/github-mark.png",$0="/LI-In-Bug.png";function J1(){return p.jsxs(Ha,{style:{width:"40%",height:"50%",background:"white"},children:[p.jsx(Ba,{children:"Contact.exe"}),p.jsxs($a,{style:{background:"white"},children:[p.jsx("h1",{style:{fontSize:"20px",fontWeight:"bold",textDecoration:"underline",marginBottom:"20px"},children:"Lets Get In Touch:"}),p.jsxs("p",{style:{marginBottom:"10px"},children:["You can email me here:",p.jsx("a",{href:"mailto:kawwamichael@gmail.com",style:{color:"blue"},children:"    kawwamichael@gmail.com"})]}),p.jsxs("p",{style:{marginBottom:"10px"},children:["you can also find me at Github:",p.jsx("a",{href:"https://github.com/MichaelKawwa",style:{textDecoration:"none",color:"inherit",display:"inline-flex",gap:"10px",alignItems:"center"},children:p.jsx("img",{src:k0,alt:"github"})})]}),p.jsxs("p",{style:{marginBottom:"10px"},children:["And Linkedin:",p.jsx("a",{href:"https://www.linkedin.com/in/michael-kawwa-6734b7255/",style:{textDecoration:"none",color:"inherit",display:"inline-flex",gap:"10px",alignItems:"center"},children:p.jsx("img",{src:$0,alt:"linkedin"})})]})]})]})}var Uo,Op;function W1(){if(Op)return Uo;Op=1;var n={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return Uo=n,Uo}var F1=W1();const dr=jp(F1),I1="/assets/logo-Ut8b8d2c.png",B0="/assets/ms_sans_serif-Du8rjN1q.woff2",H0="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",Rp={small:400,medium:900,large:1140},U0=Object.keys(Rp).reduce((n,r)=>(n[r]=(...o)=>F`
      @media (max-width: ${Rp[r]}px) {
          ${F(...o)}
      }
  `,n),{}),P1=U.div`

  height: 80vh;
  width: 100%;

  padding: 7rem;
  padding-left: 5rem;

  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: stretch;
  margin-bottom: 40px;

  ${U0.medium`
      grid-template-columns: 1fr;
      grid-gap: 40px;
      padding: 10px;
      width: 95%;
  `}   


  background: ${({theme:n})=>n.desktopBackground};
  
  .window-title {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({theme:n})=>n.materialText};
    }

    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .window {
    min-height: 60%;
    background: white;
  }


  .window:nth-child(2) {
    margin: 1rem;
  }

  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`,tx=i0`
  ${Cp}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${B0}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${H0}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;U.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: stretch;
  margin-bottom: 40px;

  ${U0.medium`
      grid-template-columns: 1fr;
      grid-gap: 40px;
      padding: 10px;
      width: 95%;
  `} 
`;function ex(){const[n,r]=O.useState(!1),[o,c]=O.useState(!1),[d,g]=O.useState({activeWindow:0}),b=A=>{console.log({value:A}),g({activeWindow:A})},{activeWindow:T}=d;return p.jsxs("div",{className:"desktop",style:{background:dr.desktopBackground},children:[p.jsx(tx,{}),p.jsxs(a0,{theme:dr,children:[p.jsx("nav",{children:p.jsx(u0,{style:{zIndex:3,padding:"2.5px"},children:p.jsxs(sr,{style:{justifyContent:"space-between"},children:[p.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",gap:10},children:[p.jsx(Z1,{onClick:()=>b(1)}),p.jsxs("div",{style:{position:"relative"},children:[p.jsxs(_i,{onClick:()=>r(!n),active:n,style:{fontWeight:"bold"},children:[p.jsx("img",{src:I1,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"Start"]}),n&&p.jsxs(Jo,{style:{position:"absolute",left:"0",top:"100%"},children:[p.jsxs(Il,{onClick:()=>{b(0),r(!1)},children:[p.jsx("span",{role:"img","aria-label":"👨‍💻",children:"👨‍💻"}),"Michael"]}),p.jsxs(Il,{onClick:()=>{b(3),r(!1)},children:[p.jsx("span",{role:"img","aria-label":"📁",children:"📁"}),"Resume"]}),p.jsxs(Il,{onClick:()=>{b(2),r(!1)},children:[p.jsx("span",{role:"img","aria-label":"📁",children:"🔥"}),"Skills"]}),p.jsx(zl,{}),p.jsxs(Il,{onClick:()=>c(!o),children:[p.jsx("span",{role:"img","aria-label":"📱",children:"📱"}),"Socials"]}),p.jsx(zl,{}),p.jsxs(Il,{onClick:()=>{b(4),r(!1)},children:[p.jsx("span",{role:"img","aria-label":"📧",children:"📧"}),"Email"]})]}),n&&o&&p.jsxs(Jo,{style:{position:"absolute",left:"125%",top:"400%"},children:[p.jsx(Il,{onClick:()=>c(!1),children:p.jsxs("a",{href:"https://github.com/MichaelKawwa",style:{textDecoration:"none",color:"inherit",display:"inline-flex",gap:"10px",alignItems:"center"},children:[p.jsx("img",{src:k0,alt:"github"}),"Github"]})}),p.jsx(Il,{onClick:()=>c(!1),children:p.jsxs("a",{href:"https://www.linkedin.com/in/michael-kawwa-6734b7255/",style:{textDecoration:"none",color:"inherit",display:"inline-flex",gap:"10px",alignItems:"center"},children:[p.jsx("img",{src:$0,alt:"linkedin"}),"Linkedin"]})})]}),";"]})]}),p.jsx(L1,{})]})})}),p.jsxs(P1,{children:[T==0&&p.jsx(Y1,{}),T==1&&p.jsx(X1,{}),T==2&&p.jsx(V1,{}),T==3&&p.jsx(K1,{}),T==4&&p.jsx(J1,{})]})]})]})}const lx=i0`
  ${Cp}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${B0}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${H0}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;function ax(){const[n,r]=O.useState(!0),[o,c]=O.useState(0);return O.useEffect(()=>{const d=setInterval(()=>{c(g=>{if(g===100)return r(!1),0;const b=Math.random()*50;return Math.min(g+b,100)})},500);return()=>{clearInterval(d)}},[]),p.jsxs("div",{className:"desktop",style:{background:dr.desktopBackground},children:[p.jsx(lx,{}),p.jsx(a0,{theme:dr,children:n?p.jsx(w0,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},value:Math.floor(o)}):p.jsx(ex,{})})]})}hy.createRoot(document.getElementById("root")).render(p.jsx(O.StrictMode,{children:p.jsx(ax,{})}));
