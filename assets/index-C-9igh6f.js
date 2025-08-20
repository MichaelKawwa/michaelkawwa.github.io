(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const y of g.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function o(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(d){if(d.ep)return;d.ep=!0;const g=o(d);fetch(d.href,g)}})();function kp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Oo={exports:{}},Oi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function cb(){if(Fh)return Oi;Fh=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(c,d,g){var y=null;if(g!==void 0&&(y=""+g),d.key!==void 0&&(y=""+d.key),"key"in d){g={};for(var w in d)w!=="key"&&(g[w]=d[w])}else g=d;return d=g.ref,{$$typeof:n,type:c,key:y,ref:d!==void 0?d:null,props:g}}return Oi.Fragment=r,Oi.jsx=o,Oi.jsxs=o,Oi}var Ih;function ob(){return Ih||(Ih=1,Oo.exports=cb()),Oo.exports}var h=ob(),jo={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function sb(){if(Ph)return bt;Ph=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),y=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),z=Symbol.iterator;function H(m){return m===null||typeof m!="object"?null:(m=z&&m[z]||m["@@iterator"],typeof m=="function"?m:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,lt={};function W(m,k,I){this.props=m,this.context=k,this.refs=lt,this.updater=I||q}W.prototype.isReactComponent={},W.prototype.setState=function(m,k){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,k,"setState")},W.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function V(){}V.prototype=W.prototype;function Q(m,k,I){this.props=m,this.context=k,this.refs=lt,this.updater=I||q}var X=Q.prototype=new V;X.constructor=Q,J(X,W.prototype),X.isPureReactComponent=!0;var it=Array.isArray,G={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function at(m,k,I,N,B,tt){return I=tt.ref,{$$typeof:n,type:m,key:k,ref:I!==void 0?I:null,props:tt}}function jt(m,k){return at(m.type,k,void 0,void 0,void 0,m.props)}function P(m){return typeof m=="object"&&m!==null&&m.$$typeof===n}function mt(m){var k={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(I){return k[I]})}var Ct=/\/+/g;function Dt(m,k){return typeof m=="object"&&m!==null&&m.key!=null?mt(""+m.key):k.toString(36)}function $t(){}function _t(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then($t,$t):(m.status="pending",m.then(function(k){m.status==="pending"&&(m.status="fulfilled",m.value=k)},function(k){m.status==="pending"&&(m.status="rejected",m.reason=k)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Et(m,k,I,N,B){var tt=typeof m;(tt==="undefined"||tt==="boolean")&&(m=null);var K=!1;if(m===null)K=!0;else switch(tt){case"bigint":case"string":case"number":K=!0;break;case"object":switch(m.$$typeof){case n:case r:K=!0;break;case C:return K=m._init,Et(K(m._payload),k,I,N,B)}}if(K)return B=B(m),K=N===""?"."+Dt(m,0):N,it(B)?(I="",K!=null&&(I=K.replace(Ct,"$&/")+"/"),Et(B,k,I,"",function(_){return _})):B!=null&&(P(B)&&(B=jt(B,I+(B.key==null||m&&m.key===B.key?"":(""+B.key).replace(Ct,"$&/")+"/")+K)),k.push(B)),1;K=0;var ft=N===""?".":N+":";if(it(m))for(var ht=0;ht<m.length;ht++)N=m[ht],tt=ft+Dt(N,ht),K+=Et(N,k,I,tt,B);else if(ht=H(m),typeof ht=="function")for(m=ht.call(m),ht=0;!(N=m.next()).done;)N=N.value,tt=ft+Dt(N,ht++),K+=Et(N,k,I,tt,B);else if(tt==="object"){if(typeof m.then=="function")return Et(_t(m),k,I,N,B);throw k=String(m),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return K}function L(m,k,I){if(m==null)return m;var N=[],B=0;return Et(m,N,"","",function(tt){return k.call(I,tt,B++)}),N}function rt(m){if(m._status===-1){var k=m._result;k=k(),k.then(function(I){(m._status===0||m._status===-1)&&(m._status=1,m._result=I)},function(I){(m._status===0||m._status===-1)&&(m._status=2,m._result=I)}),m._status===-1&&(m._status=0,m._result=k)}if(m._status===1)return m._result.default;throw m._result}var Y=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function ot(){}return bt.Children={map:L,forEach:function(m,k,I){L(m,function(){k.apply(this,arguments)},I)},count:function(m){var k=0;return L(m,function(){k++}),k},toArray:function(m){return L(m,function(k){return k})||[]},only:function(m){if(!P(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},bt.Component=W,bt.Fragment=o,bt.Profiler=d,bt.PureComponent=Q,bt.StrictMode=c,bt.Suspense=A,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,bt.act=function(){throw Error("act(...) is not supported in production builds of React.")},bt.cache=function(m){return function(){return m.apply(null,arguments)}},bt.cloneElement=function(m,k,I){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var N=J({},m.props),B=m.key,tt=void 0;if(k!=null)for(K in k.ref!==void 0&&(tt=void 0),k.key!==void 0&&(B=""+k.key),k)!Z.call(k,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&k.ref===void 0||(N[K]=k[K]);var K=arguments.length-2;if(K===1)N.children=I;else if(1<K){for(var ft=Array(K),ht=0;ht<K;ht++)ft[ht]=arguments[ht+2];N.children=ft}return at(m.type,B,void 0,void 0,tt,N)},bt.createContext=function(m){return m={$$typeof:y,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:g,_context:m},m},bt.createElement=function(m,k,I){var N,B={},tt=null;if(k!=null)for(N in k.key!==void 0&&(tt=""+k.key),k)Z.call(k,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(B[N]=k[N]);var K=arguments.length-2;if(K===1)B.children=I;else if(1<K){for(var ft=Array(K),ht=0;ht<K;ht++)ft[ht]=arguments[ht+2];B.children=ft}if(m&&m.defaultProps)for(N in K=m.defaultProps,K)B[N]===void 0&&(B[N]=K[N]);return at(m,tt,void 0,void 0,null,B)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(m){return{$$typeof:w,render:m}},bt.isValidElement=P,bt.lazy=function(m){return{$$typeof:C,_payload:{_status:-1,_result:m},_init:rt}},bt.memo=function(m,k){return{$$typeof:b,type:m,compare:k===void 0?null:k}},bt.startTransition=function(m){var k=G.T,I={};G.T=I;try{var N=m(),B=G.S;B!==null&&B(I,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(ot,Y)}catch(tt){Y(tt)}finally{G.T=k}},bt.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},bt.use=function(m){return G.H.use(m)},bt.useActionState=function(m,k,I){return G.H.useActionState(m,k,I)},bt.useCallback=function(m,k){return G.H.useCallback(m,k)},bt.useContext=function(m){return G.H.useContext(m)},bt.useDebugValue=function(){},bt.useDeferredValue=function(m,k){return G.H.useDeferredValue(m,k)},bt.useEffect=function(m,k){return G.H.useEffect(m,k)},bt.useId=function(){return G.H.useId()},bt.useImperativeHandle=function(m,k,I){return G.H.useImperativeHandle(m,k,I)},bt.useInsertionEffect=function(m,k){return G.H.useInsertionEffect(m,k)},bt.useLayoutEffect=function(m,k){return G.H.useLayoutEffect(m,k)},bt.useMemo=function(m,k){return G.H.useMemo(m,k)},bt.useOptimistic=function(m,k){return G.H.useOptimistic(m,k)},bt.useReducer=function(m,k,I){return G.H.useReducer(m,k,I)},bt.useRef=function(m){return G.H.useRef(m)},bt.useState=function(m){return G.H.useState(m)},bt.useSyncExternalStore=function(m,k,I){return G.H.useSyncExternalStore(m,k,I)},bt.useTransition=function(){return G.H.useTransition()},bt.version="19.0.0",bt}var tp;function es(){return tp||(tp=1,jo.exports=sb()),jo.exports}var R=es();const D=kp(R);var Co={exports:{}},ji={},Mo={exports:{}},_o={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function fb(){return ep||(ep=1,function(n){function r(L,rt){var Y=L.length;L.push(rt);t:for(;0<Y;){var ot=Y-1>>>1,m=L[ot];if(0<d(m,rt))L[ot]=rt,L[Y]=m,Y=ot;else break t}}function o(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var rt=L[0],Y=L.pop();if(Y!==rt){L[0]=Y;t:for(var ot=0,m=L.length,k=m>>>1;ot<k;){var I=2*(ot+1)-1,N=L[I],B=I+1,tt=L[B];if(0>d(N,Y))B<m&&0>d(tt,N)?(L[ot]=tt,L[B]=Y,ot=B):(L[ot]=N,L[I]=Y,ot=I);else if(B<m&&0>d(tt,Y))L[ot]=tt,L[B]=Y,ot=B;else break t}}return rt}function d(L,rt){var Y=L.sortIndex-rt.sortIndex;return Y!==0?Y:L.id-rt.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;n.unstable_now=function(){return g.now()}}else{var y=Date,w=y.now();n.unstable_now=function(){return y.now()-w}}var A=[],b=[],C=1,z=null,H=3,q=!1,J=!1,lt=!1,W=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function X(L){for(var rt=o(b);rt!==null;){if(rt.callback===null)c(b);else if(rt.startTime<=L)c(b),rt.sortIndex=rt.expirationTime,r(A,rt);else break;rt=o(b)}}function it(L){if(lt=!1,X(L),!J)if(o(A)!==null)J=!0,_t();else{var rt=o(b);rt!==null&&Et(it,rt.startTime-L)}}var G=!1,Z=-1,at=5,jt=-1;function P(){return!(n.unstable_now()-jt<at)}function mt(){if(G){var L=n.unstable_now();jt=L;var rt=!0;try{t:{J=!1,lt&&(lt=!1,V(Z),Z=-1),q=!0;var Y=H;try{e:{for(X(L),z=o(A);z!==null&&!(z.expirationTime>L&&P());){var ot=z.callback;if(typeof ot=="function"){z.callback=null,H=z.priorityLevel;var m=ot(z.expirationTime<=L);if(L=n.unstable_now(),typeof m=="function"){z.callback=m,X(L),rt=!0;break e}z===o(A)&&c(A),X(L)}else c(A);z=o(A)}if(z!==null)rt=!0;else{var k=o(b);k!==null&&Et(it,k.startTime-L),rt=!1}}break t}finally{z=null,H=Y,q=!1}rt=void 0}}finally{rt?Ct():G=!1}}}var Ct;if(typeof Q=="function")Ct=function(){Q(mt)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,$t=Dt.port2;Dt.port1.onmessage=mt,Ct=function(){$t.postMessage(null)}}else Ct=function(){W(mt,0)};function _t(){G||(G=!0,Ct())}function Et(L,rt){Z=W(function(){L(n.unstable_now())},rt)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){J||q||(J=!0,_t())},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):at=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return H},n.unstable_getFirstCallbackNode=function(){return o(A)},n.unstable_next=function(L){switch(H){case 1:case 2:case 3:var rt=3;break;default:rt=H}var Y=H;H=rt;try{return L()}finally{H=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,rt){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=H;H=L;try{return rt()}finally{H=Y}},n.unstable_scheduleCallback=function(L,rt,Y){var ot=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ot+Y:ot):Y=ot,L){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=Y+m,L={id:C++,callback:rt,priorityLevel:L,startTime:Y,expirationTime:m,sortIndex:-1},Y>ot?(L.sortIndex=Y,r(b,L),o(A)===null&&L===o(b)&&(lt?(V(Z),Z=-1):lt=!0,Et(it,Y-ot))):(L.sortIndex=m,r(A,L),J||q||(J=!0,_t())),L},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(L){var rt=H;return function(){var Y=H;H=rt;try{return L.apply(this,arguments)}finally{H=Y}}}}(_o)),_o}var lp;function db(){return lp||(lp=1,Mo.exports=fb()),Mo.exports}var ko={exports:{}},ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function hb(){if(ap)return ge;ap=1;var n=es();function r(A){var b="https://react.dev/errors/"+A;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)b+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+A+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(A,b,C){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:z==null?null:""+z,children:A,containerInfo:b,implementation:C}}var y=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(A,b){if(A==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ge.createPortal=function(A,b){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(r(299));return g(A,b,null,C)},ge.flushSync=function(A){var b=y.T,C=c.p;try{if(y.T=null,c.p=2,A)return A()}finally{y.T=b,c.p=C,c.d.f()}},ge.preconnect=function(A,b){typeof A=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(A,b))},ge.prefetchDNS=function(A){typeof A=="string"&&c.d.D(A)},ge.preinit=function(A,b){if(typeof A=="string"&&b&&typeof b.as=="string"){var C=b.as,z=w(C,b.crossOrigin),H=typeof b.integrity=="string"?b.integrity:void 0,q=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;C==="style"?c.d.S(A,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:z,integrity:H,fetchPriority:q}):C==="script"&&c.d.X(A,{crossOrigin:z,integrity:H,fetchPriority:q,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ge.preinitModule=function(A,b){if(typeof A=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var C=w(b.as,b.crossOrigin);c.d.M(A,{crossOrigin:C,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(A)},ge.preload=function(A,b){if(typeof A=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var C=b.as,z=w(C,b.crossOrigin);c.d.L(A,C,{crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ge.preloadModule=function(A,b){if(typeof A=="string")if(b){var C=w(b.as,b.crossOrigin);c.d.m(A,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:C,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(A)},ge.requestFormReset=function(A){c.d.r(A)},ge.unstable_batchedUpdates=function(A,b){return A(b)},ge.useFormState=function(A,b,C){return y.H.useFormState(A,b,C)},ge.useFormStatus=function(){return y.H.useHostTransitionStatus()},ge.version="19.0.0",ge}var np;function Bp(){if(np)return ko.exports;np=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),ko.exports=hb(),ko.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function pb(){if(ip)return ji;ip=1;var n=db(),r=es(),o=Bp();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),it=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function jt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case w:return"Portal";case C:return"Profiler";case b:return"StrictMode";case lt:return"Suspense";case W:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case J:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return e=t.displayName||null,e!==null?e:jt(t.type)||"Memo";case Q:e=t._payload,t=t._init;try{return jt(t(e))}catch{}}return null}var P=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt=Object.assign,Ct,Dt;function $t(t){if(Ct===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Ct=e&&e[1]||"",Dt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+Dt}var _t=!1;function Et(t,e){if(!t||_t)return"";_t=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(O){var T=O}Reflect.construct(t,[],$)}else{try{$.call()}catch(O){T=O}t.call($.prototype)}}else{try{throw Error()}catch(O){T=O}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(O){if(O&&T&&typeof O.stack=="string")return[O.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),s=u[0],f=u[1];if(s&&f){var p=s.split(`
`),x=f.split(`
`);for(i=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;if(a===p.length||i===x.length)for(a=p.length-1,i=x.length-1;1<=a&&0<=i&&p[a]!==x[i];)i--;for(;1<=a&&0<=i;a--,i--)if(p[a]!==x[i]){if(a!==1||i!==1)do if(a--,i--,0>i||p[a]!==x[i]){var j=`
`+p[a].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=a&&0<=i);break}}}finally{_t=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?$t(l):""}function L(t){switch(t.tag){case 26:case 27:case 5:return $t(t.type);case 16:return $t("Lazy");case 13:return $t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return t=Et(t.type,!1),t;case 11:return t=Et(t.type.render,!1),t;case 1:return t=Et(t.type,!0),t;default:return""}}function rt(t){try{var e="";do e+=L(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Y(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function ot(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(Y(t)!==t)throw Error(c(188))}function k(t){var e=t.alternate;if(!e){if(e=Y(t),e===null)throw Error(c(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var u=i.alternate;if(u===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===l)return m(i),t;if(u===a)return m(i),e;u=u.sibling}throw Error(c(188))}if(l.return!==a.return)l=i,a=u;else{for(var s=!1,f=i.child;f;){if(f===l){s=!0,l=i,a=u;break}if(f===a){s=!0,a=i,l=u;break}f=f.sibling}if(!s){for(f=u.child;f;){if(f===l){s=!0,l=u,a=i;break}if(f===a){s=!0,a=u,l=i;break}f=f.sibling}if(!s)throw Error(c(189))}}if(l.alternate!==a)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?t:e}function I(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=I(t),e!==null)return e;t=t.sibling}return null}var N=Array.isArray,B=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},K=[],ft=-1;function ht(t){return{current:t}}function _(t){0>ft||(t.current=K[ft],K[ft]=null,ft--)}function et(t,e){ft++,K[ft]=t.current,t.current=e}var pt=ht(null),xt=ht(null),zt=ht(null),Yt=ht(null);function Qt(t,e){switch(et(zt,e),et(xt,t),et(pt,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Dh(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Dh(t),e=zh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(pt),et(pt,e)}function ee(){_(pt),_(xt),_(zt)}function Se(t){t.memoizedState!==null&&et(Yt,t);var e=pt.current,l=zh(e,t.type);e!==l&&(et(xt,t),et(pt,l))}function Ce(t){xt.current===t&&(_(pt),_(xt)),Yt.current===t&&(_(Yt),Ti._currentValue=tt)}var Me=Object.prototype.hasOwnProperty,na=n.unstable_scheduleCallback,ia=n.unstable_cancelCallback,ua=n.unstable_shouldYield,Ui=n.unstable_requestPaint,Ze=n.unstable_now,q0=n.unstable_getCurrentPriorityLevel,ps=n.unstable_ImmediatePriority,ms=n.unstable_UserBlockingPriority,Ni=n.unstable_NormalPriority,G0=n.unstable_LowPriority,gs=n.unstable_IdlePriority,Y0=n.log,X0=n.unstable_setDisableYieldValue,_n=null,Ee=null;function V0(t){if(Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(_n,t,void 0,(t.current.flags&128)===128)}catch{}}function jl(t){if(typeof Y0=="function"&&X0(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(_n,t)}catch{}}var Te=Math.clz32?Math.clz32:J0,Z0=Math.log,K0=Math.LN2;function J0(t){return t>>>=0,t===0?32:31-(Z0(t)/K0|0)|0}var Li=128,Qi=4194304;function ra(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qi(t,e){var l=t.pendingLanes;if(l===0)return 0;var a=0,i=t.suspendedLanes,u=t.pingedLanes,s=t.warmLanes;t=t.finishedLanes!==0;var f=l&134217727;return f!==0?(l=f&~i,l!==0?a=ra(l):(u&=f,u!==0?a=ra(u):t||(s=f&~s,s!==0&&(a=ra(s))))):(f=l&~i,f!==0?a=ra(f):u!==0?a=ra(u):t||(s=l&~s,s!==0&&(a=ra(s)))),a===0?0:e!==0&&e!==a&&!(e&i)&&(i=a&-a,s=e&-e,i>=s||i===32&&(s&4194176)!==0)?e:a}function kn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function W0(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bs(){var t=Li;return Li<<=1,!(Li&4194176)&&(Li=128),t}function ys(){var t=Qi;return Qi<<=1,!(Qi&62914560)&&(Qi=4194304),t}function Er(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Bn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function F0(t,e,l,a,i,u){var s=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,p=t.expirationTimes,x=t.hiddenUpdates;for(l=s&~l;0<l;){var j=31-Te(l),$=1<<j;f[j]=0,p[j]=-1;var T=x[j];if(T!==null)for(x[j]=null,j=0;j<T.length;j++){var O=T[j];O!==null&&(O.lane&=-536870913)}l&=~$}a!==0&&vs(t,a,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(s&~e))}function vs(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Te(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194218}function xs(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Te(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function As(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Ss(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:Xh(t.type))}function I0(t,e){var l=B.p;try{return B.p=t,e()}finally{B.p=l}}var Cl=Math.random().toString(36).slice(2),pe="__reactFiber$"+Cl,ve="__reactProps$"+Cl,qa="__reactContainer$"+Cl,Tr="__reactEvents$"+Cl,P0="__reactListeners$"+Cl,tm="__reactHandles$"+Cl,Es="__reactResources$"+Cl,$n="__reactMarker$"+Cl;function wr(t){delete t[pe],delete t[ve],delete t[Tr],delete t[P0],delete t[tm]}function ca(t){var e=t[pe];if(e)return e;for(var l=t.parentNode;l;){if(e=l[qa]||l[pe]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=jh(t);t!==null;){if(l=t[pe])return l;t=jh(t)}return e}t=l,l=t.parentNode}return null}function Ga(t){if(t=t[pe]||t[qa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Hn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function Ya(t){var e=t[Es];return e||(e=t[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ne(t){t[$n]=!0}var Ts=new Set,ws={};function oa(t,e){Xa(t,e),Xa(t+"Capture",e)}function Xa(t,e){for(ws[t]=e,t=0;t<e.length;t++)Ts.add(e[t])}var sl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),em=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ds={},zs={};function lm(t){return Me.call(zs,t)?!0:Me.call(Ds,t)?!1:em.test(t)?zs[t]=!0:(Ds[t]=!0,!1)}function Gi(t,e,l){if(lm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Yi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function fl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function _e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function am(t){var e=Rs(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,u.call(this,s)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xi(t){t._valueTracker||(t._valueTracker=am(t))}function Os(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Rs(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Vi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var nm=/[\n"\\]/g;function ke(t){return t.replace(nm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Dr(t,e,l,a,i,u,s,f){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+_e(e)):t.value!==""+_e(e)&&(t.value=""+_e(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?zr(t,s,_e(e)):l!=null?zr(t,s,_e(l)):a!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+_e(f):t.removeAttribute("name")}function js(t,e,l,a,i,u,s,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;l=l!=null?""+_e(l):"",e=e!=null?""+_e(e):l,f||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function zr(t,e,l){e==="number"&&Vi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Va(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+_e(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cs(t,e,l){if(e!=null&&(e=""+_e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+_e(l):""}function Ms(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(c(92));if(N(a)){if(1<a.length)throw Error(c(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=_e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Za(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var im=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _s(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||im.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ks(t,e,l){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&_s(t,i,a)}else for(var u in e)e.hasOwnProperty(u)&&_s(t,u,e[u])}function Rr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var um=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zi(t){return rm.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Or=null;function jr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ka=null,Ja=null;function Bs(t){var e=Ga(t);if(e&&(t=e.stateNode)){var l=t[ve]||null;t:switch(t=e.stateNode,e.type){case"input":if(Dr(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ke(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[ve]||null;if(!i)throw Error(c(90));Dr(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Os(a)}break t;case"textarea":Cs(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Va(t,!!l.multiple,e,!1)}}}var Cr=!1;function $s(t,e,l){if(Cr)return t(e,l);Cr=!0;try{var a=t(e);return a}finally{if(Cr=!1,(Ka!==null||Ja!==null)&&(ju(),Ka&&(e=Ka,t=Ja,Ja=Ka=null,Bs(e),t)))for(e=0;e<t.length;e++)Bs(t[e])}}function Un(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ve]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(c(231,e,typeof l));return l}var Mr=!1;if(sl)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Mr=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Mr=!1}var Ml=null,_r=null,Ki=null;function Hs(){if(Ki)return Ki;var t,e=_r,l=e.length,a,i="value"in Ml?Ml.value:Ml.textContent,u=i.length;for(t=0;t<l&&e[t]===i[t];t++);var s=l-t;for(a=1;a<=s&&e[l-a]===i[u-a];a++);return Ki=i.slice(t,1<a?1-a:void 0)}function Ji(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wi(){return!0}function Us(){return!1}function xe(t){function e(l,a,i,u,s){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=u,this.target=s,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Wi:Us,this.isPropagationStopped=Us,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=xe(sa),Ln=mt({},sa,{view:0,detail:0}),cm=xe(Ln),kr,Br,Qn,Ii=mt({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qn&&(Qn&&t.type==="mousemove"?(kr=t.screenX-Qn.screenX,Br=t.screenY-Qn.screenY):Br=kr=0,Qn=t),kr)},movementY:function(t){return"movementY"in t?t.movementY:Br}}),Ns=xe(Ii),om=mt({},Ii,{dataTransfer:0}),sm=xe(om),fm=mt({},Ln,{relatedTarget:0}),$r=xe(fm),dm=mt({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=xe(dm),pm=mt({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mm=xe(pm),gm=mt({},sa,{data:0}),Ls=xe(gm),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vm[t])?!!e[t]:!1}function Hr(){return xm}var Am=mt({},Ln,{key:function(t){if(t.key){var e=bm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ji(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ym[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(t){return t.type==="keypress"?Ji(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ji(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sm=xe(Am),Em=mt({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=xe(Em),Tm=mt({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),wm=xe(Tm),Dm=mt({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),zm=xe(Dm),Rm=mt({},Ii,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=xe(Rm),jm=mt({},sa,{newState:0,oldState:0}),Cm=xe(jm),Mm=[9,13,27,32],Ur=sl&&"CompositionEvent"in window,qn=null;sl&&"documentMode"in document&&(qn=document.documentMode);var _m=sl&&"TextEvent"in window&&!qn,qs=sl&&(!Ur||qn&&8<qn&&11>=qn),Gs=" ",Ys=!1;function Xs(t,e){switch(t){case"keyup":return Mm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wa=!1;function km(t,e){switch(t){case"compositionend":return Vs(e);case"keypress":return e.which!==32?null:(Ys=!0,Gs);case"textInput":return t=e.data,t===Gs&&Ys?null:t;default:return null}}function Bm(t,e){if(Wa)return t==="compositionend"||!Ur&&Xs(t,e)?(t=Hs(),Ki=_r=Ml=null,Wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qs&&e.locale!=="ko"?null:e.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$m[t.type]:e==="textarea"}function Ks(t,e,l,a){Ka?Ja?Ja.push(a):Ja=[a]:Ka=a,e=Bu(e,"onChange"),0<e.length&&(l=new Fi("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Gn=null,Yn=null;function Hm(t){Ah(t,0)}function Pi(t){var e=Hn(t);if(Os(e))return t}function Js(t,e){if(t==="change")return e}var Ws=!1;if(sl){var Nr;if(sl){var Lr="oninput"in document;if(!Lr){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),Lr=typeof Fs.oninput=="function"}Nr=Lr}else Nr=!1;Ws=Nr&&(!document.documentMode||9<document.documentMode)}function Is(){Gn&&(Gn.detachEvent("onpropertychange",Ps),Yn=Gn=null)}function Ps(t){if(t.propertyName==="value"&&Pi(Yn)){var e=[];Ks(e,Yn,t,jr(t)),$s(Hm,e)}}function Um(t,e,l){t==="focusin"?(Is(),Gn=e,Yn=l,Gn.attachEvent("onpropertychange",Ps)):t==="focusout"&&Is()}function Nm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pi(Yn)}function Lm(t,e){if(t==="click")return Pi(e)}function Qm(t,e){if(t==="input"||t==="change")return Pi(e)}function qm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var we=typeof Object.is=="function"?Object.is:qm;function Xn(t,e){if(we(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!Me.call(e,i)||!we(t[i],e[i]))return!1}return!0}function tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ef(t,e){var l=tf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=tf(l)}}function lf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function af(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Vi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Vi(t.document)}return e}function Qr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gm(t,e){var l=af(e);e=t.focusedElem;var a=t.selectionRange;if(l!==e&&e&&e.ownerDocument&&lf(e.ownerDocument.documentElement,e)){if(a!==null&&Qr(e)){if(t=a.start,l=a.end,l===void 0&&(l=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(l,e.value.length);else if(l=(t=e.ownerDocument||document)&&t.defaultView||window,l.getSelection){l=l.getSelection();var i=e.textContent.length,u=Math.min(a.start,i);a=a.end===void 0?u:Math.min(a.end,i),!l.extend&&u>a&&(i=a,a=u,u=i),i=ef(e,u);var s=ef(e,a);i&&s&&(l.rangeCount!==1||l.anchorNode!==i.node||l.anchorOffset!==i.offset||l.focusNode!==s.node||l.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),l.removeAllRanges(),u>a?(l.addRange(t),l.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),l.addRange(t)))}}for(t=[],l=e;l=l.parentNode;)l.nodeType===1&&t.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)l=t[e],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var Ym=sl&&"documentMode"in document&&11>=document.documentMode,Fa=null,qr=null,Vn=null,Gr=!1;function nf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Gr||Fa==null||Fa!==Vi(a)||(a=Fa,"selectionStart"in a&&Qr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Vn&&Xn(Vn,a)||(Vn=a,a=Bu(qr,"onSelect"),0<a.length&&(e=new Fi("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Fa)))}function fa(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ia={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},Yr={},uf={};sl&&(uf=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function da(t){if(Yr[t])return Yr[t];if(!Ia[t])return t;var e=Ia[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in uf)return Yr[t]=e[l];return t}var rf=da("animationend"),cf=da("animationiteration"),of=da("animationstart"),Xm=da("transitionrun"),Vm=da("transitionstart"),Zm=da("transitioncancel"),sf=da("transitionend"),ff=new Map,df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ke(t,e){ff.set(t,e),oa(e,[t])}var Be=[],Pa=0,Xr=0;function tu(){for(var t=Pa,e=Xr=Pa=0;e<t;){var l=Be[e];Be[e++]=null;var a=Be[e];Be[e++]=null;var i=Be[e];Be[e++]=null;var u=Be[e];if(Be[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}u!==0&&hf(l,i,u)}}function eu(t,e,l,a){Be[Pa++]=t,Be[Pa++]=e,Be[Pa++]=l,Be[Pa++]=a,Xr|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Vr(t,e,l,a){return eu(t,e,l,a),lu(t)}function _l(t,e){return eu(t,null,null,e),lu(t)}function hf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;i&&e!==null&&t.tag===3&&(u=t.stateNode,i=31-Te(l),u=u.hiddenUpdates,t=u[i],t===null?u[i]=[e]:t.push(e),e.lane=l|536870912)}function lu(t){if(50<bi)throw bi=0,Ic=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var tn={},pf=new WeakMap;function $e(t,e){if(typeof t=="object"&&t!==null){var l=pf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:rt(e)},pf.set(t,e),e)}return{value:t,source:e,stack:rt(e)}}var en=[],ln=0,au=null,nu=0,He=[],Ue=0,ha=null,dl=1,hl="";function pa(t,e){en[ln++]=nu,en[ln++]=au,au=t,nu=e}function mf(t,e,l){He[Ue++]=dl,He[Ue++]=hl,He[Ue++]=ha,ha=t;var a=dl;t=hl;var i=32-Te(a)-1;a&=~(1<<i),l+=1;var u=32-Te(e)+i;if(30<u){var s=i-i%5;u=(a&(1<<s)-1).toString(32),a>>=s,i-=s,dl=1<<32-Te(e)+i|l<<i|a,hl=u+t}else dl=1<<u|l<<i|a,hl=t}function Zr(t){t.return!==null&&(pa(t,1),mf(t,1,0))}function Kr(t){for(;t===au;)au=en[--ln],en[ln]=null,nu=en[--ln],en[ln]=null;for(;t===ha;)ha=He[--Ue],He[Ue]=null,hl=He[--Ue],He[Ue]=null,dl=He[--Ue],He[Ue]=null}var be=null,se=null,Rt=!1,Je=null,ll=!1,Jr=Error(c(519));function ma(t){var e=Error(c(418,""));throw Jn($e(e,t)),Jr}function gf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[pe]=t,e[ve]=a,l){case"dialog":Tt("cancel",e),Tt("close",e);break;case"iframe":case"object":case"embed":Tt("load",e);break;case"video":case"audio":for(l=0;l<vi.length;l++)Tt(vi[l],e);break;case"source":Tt("error",e);break;case"img":case"image":case"link":Tt("error",e),Tt("load",e);break;case"details":Tt("toggle",e);break;case"input":Tt("invalid",e),js(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Xi(e);break;case"select":Tt("invalid",e);break;case"textarea":Tt("invalid",e),Ms(e,a.value,a.defaultValue,a.children),Xi(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||wh(e.textContent,l)?(a.popover!=null&&(Tt("beforetoggle",e),Tt("toggle",e)),a.onScroll!=null&&Tt("scroll",e),a.onScrollEnd!=null&&Tt("scrollend",e),a.onClick!=null&&(e.onclick=$u),e=!0):e=!1,e||ma(t)}function bf(t){for(be=t.return;be;)switch(be.tag){case 3:case 27:ll=!0;return;case 5:case 13:ll=!1;return;default:be=be.return}}function Zn(t){if(t!==be)return!1;if(!Rt)return bf(t),Rt=!0,!1;var e=!1,l;if((l=t.tag!==3&&t.tag!==27)&&((l=t.tag===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||go(t.type,t.memoizedProps)),l=!l),l&&(e=!0),e&&se&&ma(t),bf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){se=Fe(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}se=null}}else se=be?Fe(t.stateNode.nextSibling):null;return!0}function Kn(){se=be=null,Rt=!1}function Jn(t){Je===null?Je=[t]:Je.push(t)}var Wn=Error(c(460)),yf=Error(c(474)),Wr={then:function(){}};function vf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function iu(){}function xf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(iu,iu),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Wn?Error(c(483)):t;default:if(typeof e.status=="string")e.then(iu,iu);else{if(t=Ut,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Wn?Error(c(483)):t}throw Fn=e,Wn}}var Fn=null;function Af(){if(Fn===null)throw Error(c(459));var t=Fn;return Fn=null,t}var an=null,In=0;function uu(t){var e=In;return In+=1,an===null&&(an=[]),xf(an,t,e)}function Pn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ru(t,e){throw e.$$typeof===g?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Sf(t){var e=t._init;return e(t._payload)}function Ef(t){function e(S,v){if(t){var E=S.deletions;E===null?(S.deletions=[v],S.flags|=16):E.push(v)}}function l(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function a(S){for(var v=new Map;S!==null;)S.key!==null?v.set(S.key,S):v.set(S.index,S),S=S.sibling;return v}function i(S,v){return S=Xl(S,v),S.index=0,S.sibling=null,S}function u(S,v,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<v?(S.flags|=33554434,v):E):(S.flags|=33554434,v)):(S.flags|=1048576,v)}function s(S){return t&&S.alternate===null&&(S.flags|=33554434),S}function f(S,v,E,M){return v===null||v.tag!==6?(v=Yc(E,S.mode,M),v.return=S,v):(v=i(v,E),v.return=S,v)}function p(S,v,E,M){var nt=E.type;return nt===A?j(S,v,E.props.children,M,E.key):v!==null&&(v.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Q&&Sf(nt)===v.type)?(v=i(v,E.props),Pn(v,E),v.return=S,v):(v=wu(E.type,E.key,E.props,null,S.mode,M),Pn(v,E),v.return=S,v)}function x(S,v,E,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Xc(E,S.mode,M),v.return=S,v):(v=i(v,E.children||[]),v.return=S,v)}function j(S,v,E,M,nt){return v===null||v.tag!==7?(v=wa(E,S.mode,M,nt),v.return=S,v):(v=i(v,E),v.return=S,v)}function $(S,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Yc(""+v,S.mode,E),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case y:return E=wu(v.type,v.key,v.props,null,S.mode,E),Pn(E,v),E.return=S,E;case w:return v=Xc(v,S.mode,E),v.return=S,v;case Q:var M=v._init;return v=M(v._payload),$(S,v,E)}if(N(v)||Z(v))return v=wa(v,S.mode,E,null),v.return=S,v;if(typeof v.then=="function")return $(S,uu(v),E);if(v.$$typeof===q)return $(S,Su(S,v),E);ru(S,v)}return null}function T(S,v,E,M){var nt=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return nt!==null?null:f(S,v,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case y:return E.key===nt?p(S,v,E,M):null;case w:return E.key===nt?x(S,v,E,M):null;case Q:return nt=E._init,E=nt(E._payload),T(S,v,E,M)}if(N(E)||Z(E))return nt!==null?null:j(S,v,E,M,null);if(typeof E.then=="function")return T(S,v,uu(E),M);if(E.$$typeof===q)return T(S,v,Su(S,E),M);ru(S,E)}return null}function O(S,v,E,M,nt){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(E)||null,f(v,S,""+M,nt);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case y:return S=S.get(M.key===null?E:M.key)||null,p(v,S,M,nt);case w:return S=S.get(M.key===null?E:M.key)||null,x(v,S,M,nt);case Q:var At=M._init;return M=At(M._payload),O(S,v,E,M,nt)}if(N(M)||Z(M))return S=S.get(E)||null,j(v,S,M,nt,null);if(typeof M.then=="function")return O(S,v,E,uu(M),nt);if(M.$$typeof===q)return O(S,v,E,Su(v,M),nt);ru(v,M)}return null}function ut(S,v,E,M){for(var nt=null,At=null,ct=v,dt=v=0,re=null;ct!==null&&dt<E.length;dt++){ct.index>dt?(re=ct,ct=null):re=ct.sibling;var Ot=T(S,ct,E[dt],M);if(Ot===null){ct===null&&(ct=re);break}t&&ct&&Ot.alternate===null&&e(S,ct),v=u(Ot,v,dt),At===null?nt=Ot:At.sibling=Ot,At=Ot,ct=re}if(dt===E.length)return l(S,ct),Rt&&pa(S,dt),nt;if(ct===null){for(;dt<E.length;dt++)ct=$(S,E[dt],M),ct!==null&&(v=u(ct,v,dt),At===null?nt=ct:At.sibling=ct,At=ct);return Rt&&pa(S,dt),nt}for(ct=a(ct);dt<E.length;dt++)re=O(ct,S,dt,E[dt],M),re!==null&&(t&&re.alternate!==null&&ct.delete(re.key===null?dt:re.key),v=u(re,v,dt),At===null?nt=re:At.sibling=re,At=re);return t&&ct.forEach(function(Il){return e(S,Il)}),Rt&&pa(S,dt),nt}function gt(S,v,E,M){if(E==null)throw Error(c(151));for(var nt=null,At=null,ct=v,dt=v=0,re=null,Ot=E.next();ct!==null&&!Ot.done;dt++,Ot=E.next()){ct.index>dt?(re=ct,ct=null):re=ct.sibling;var Il=T(S,ct,Ot.value,M);if(Il===null){ct===null&&(ct=re);break}t&&ct&&Il.alternate===null&&e(S,ct),v=u(Il,v,dt),At===null?nt=Il:At.sibling=Il,At=Il,ct=re}if(Ot.done)return l(S,ct),Rt&&pa(S,dt),nt;if(ct===null){for(;!Ot.done;dt++,Ot=E.next())Ot=$(S,Ot.value,M),Ot!==null&&(v=u(Ot,v,dt),At===null?nt=Ot:At.sibling=Ot,At=Ot);return Rt&&pa(S,dt),nt}for(ct=a(ct);!Ot.done;dt++,Ot=E.next())Ot=O(ct,S,dt,Ot.value,M),Ot!==null&&(t&&Ot.alternate!==null&&ct.delete(Ot.key===null?dt:Ot.key),v=u(Ot,v,dt),At===null?nt=Ot:At.sibling=Ot,At=Ot);return t&&ct.forEach(function(rb){return e(S,rb)}),Rt&&pa(S,dt),nt}function Zt(S,v,E,M){if(typeof E=="object"&&E!==null&&E.type===A&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case y:t:{for(var nt=E.key;v!==null;){if(v.key===nt){if(nt=E.type,nt===A){if(v.tag===7){l(S,v.sibling),M=i(v,E.props.children),M.return=S,S=M;break t}}else if(v.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Q&&Sf(nt)===v.type){l(S,v.sibling),M=i(v,E.props),Pn(M,E),M.return=S,S=M;break t}l(S,v);break}else e(S,v);v=v.sibling}E.type===A?(M=wa(E.props.children,S.mode,M,E.key),M.return=S,S=M):(M=wu(E.type,E.key,E.props,null,S.mode,M),Pn(M,E),M.return=S,S=M)}return s(S);case w:t:{for(nt=E.key;v!==null;){if(v.key===nt)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){l(S,v.sibling),M=i(v,E.children||[]),M.return=S,S=M;break t}else{l(S,v);break}else e(S,v);v=v.sibling}M=Xc(E,S.mode,M),M.return=S,S=M}return s(S);case Q:return nt=E._init,E=nt(E._payload),Zt(S,v,E,M)}if(N(E))return ut(S,v,E,M);if(Z(E)){if(nt=Z(E),typeof nt!="function")throw Error(c(150));return E=nt.call(E),gt(S,v,E,M)}if(typeof E.then=="function")return Zt(S,v,uu(E),M);if(E.$$typeof===q)return Zt(S,v,Su(S,E),M);ru(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,v!==null&&v.tag===6?(l(S,v.sibling),M=i(v,E),M.return=S,S=M):(l(S,v),M=Yc(E,S.mode,M),M.return=S,S=M),s(S)):l(S,v)}return function(S,v,E,M){try{In=0;var nt=Zt(S,v,E,M);return an=null,nt}catch(ct){if(ct===Wn)throw ct;var At=qe(29,ct,null,S.mode);return At.lanes=M,At.return=S,At}finally{}}}var ga=Ef(!0),Tf=Ef(!1),nn=ht(null),cu=ht(0);function wf(t,e){t=Tl,et(cu,t),et(nn,e),Tl=t|e.baseLanes}function Fr(){et(cu,Tl),et(nn,nn.current)}function Ir(){Tl=cu.current,_(nn),_(cu)}var Ne=ht(null),al=null;function kl(t){var e=t.alternate;et(le,le.current&1),et(Ne,t),al===null&&(e===null||nn.current!==null||e.memoizedState!==null)&&(al=t)}function Df(t){if(t.tag===22){if(et(le,le.current),et(Ne,t),al===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(al=t)}}else Bl()}function Bl(){et(le,le.current),et(Ne,Ne.current)}function pl(t){_(Ne),al===t&&(al=null),_(le)}var le=ht(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Km=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Jm=n.unstable_scheduleCallback,Wm=n.unstable_NormalPriority,ae={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pr(){return{controller:new Km,data:new Map,refCount:0}}function ti(t){t.refCount--,t.refCount===0&&Jm(Wm,function(){t.controller.abort()})}var ei=null,tc=0,un=0,rn=null;function Fm(t,e){if(ei===null){var l=ei=[];tc=0,un=uo(),rn={status:"pending",value:void 0,then:function(a){l.push(a)}}}return tc++,e.then(zf,zf),e}function zf(){if(--tc===0&&ei!==null){rn!==null&&(rn.status="fulfilled");var t=ei;ei=null,un=0,rn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Im(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Rf=P.S;P.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Fm(t,e),Rf!==null&&Rf(t,e)};var ba=ht(null);function ec(){var t=ba.current;return t!==null?t:Ut.pooledCache}function su(t,e){e===null?et(ba,ba.current):et(ba,e.pool)}function Of(){var t=ec();return t===null?null:{parent:ae._currentValue,pool:t}}var $l=0,vt=null,kt=null,Wt=null,fu=!1,cn=!1,ya=!1,du=0,li=0,on=null,Pm=0;function Jt(){throw Error(c(321))}function lc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!we(t[l],e[l]))return!1;return!0}function ac(t,e,l,a,i,u){return $l=u,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,P.H=t===null||t.memoizedState===null?va:Hl,ya=!1,u=l(a,i),ya=!1,cn&&(u=Cf(e,l,a,i)),jf(t),u}function jf(t){P.H=nl;var e=kt!==null&&kt.next!==null;if($l=0,Wt=kt=vt=null,fu=!1,li=0,on=null,e)throw Error(c(300));t===null||ie||(t=t.dependencies,t!==null&&Au(t)&&(ie=!0))}function Cf(t,e,l,a){vt=t;var i=0;do{if(cn&&(on=null),li=0,cn=!1,25<=i)throw Error(c(301));if(i+=1,Wt=kt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}P.H=xa,u=e(l,a)}while(cn);return u}function tg(){var t=P.H,e=t.useState()[0];return e=typeof e.then=="function"?ai(e):e,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(vt.flags|=1024),e}function nc(){var t=du!==0;return du=0,t}function ic(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function uc(t){if(fu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}fu=!1}$l=0,Wt=kt=vt=null,cn=!1,li=du=0,on=null}function Ae(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?vt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Ft(){if(kt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Wt===null?vt.memoizedState:Wt.next;if(e!==null)Wt=e,kt=t;else{if(t===null)throw vt.alternate===null?Error(c(467)):Error(c(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Wt===null?vt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}var hu;hu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ai(t){var e=li;return li+=1,on===null&&(on=[]),t=xf(on,t,e),e=vt,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,P.H=e===null||e.memoizedState===null?va:Hl),t}function pu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ai(t);if(t.$$typeof===q)return me(t)}throw Error(c(438,String(t)))}function rc(t){var e=null,l=vt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=vt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=hu(),vt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=it;return e.index++,l}function ml(t,e){return typeof e=="function"?e(t):e}function mu(t){var e=Ft();return cc(e,kt,t)}function cc(t,e,l){var a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=l;var i=t.baseQueue,u=a.pending;if(u!==null){if(i!==null){var s=i.next;i.next=u.next,u.next=s}e.baseQueue=i=u,a.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var f=s=null,p=null,x=e,j=!1;do{var $=x.lane&-536870913;if($!==x.lane?(wt&$)===$:($l&$)===$){var T=x.revertLane;if(T===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),$===un&&(j=!0);else if(($l&T)===T){x=x.next,T===un&&(j=!0);continue}else $={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},p===null?(f=p=$,s=u):p=p.next=$,vt.lanes|=T,Vl|=T;$=x.action,ya&&l(u,$),u=x.hasEagerState?x.eagerState:l(u,$)}else T={lane:$,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},p===null?(f=p=T,s=u):p=p.next=T,vt.lanes|=$,Vl|=$;x=x.next}while(x!==null&&x!==e);if(p===null?s=u:p.next=f,!we(u,t.memoizedState)&&(ie=!0,j&&(l=rn,l!==null)))throw l;t.memoizedState=u,t.baseState=s,t.baseQueue=p,a.lastRenderedState=u}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function oc(t){var e=Ft(),l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,u=e.memoizedState;if(i!==null){l.pending=null;var s=i=i.next;do u=t(u,s.action),s=s.next;while(s!==i);we(u,e.memoizedState)||(ie=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Mf(t,e,l){var a=vt,i=Ft(),u=Rt;if(u){if(l===void 0)throw Error(c(407));l=l()}else l=e();var s=!we((kt||i).memoizedState,l);if(s&&(i.memoizedState=l,ie=!0),i=i.queue,dc(Bf.bind(null,a,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(a.flags|=2048,sn(9,kf.bind(null,a,i,l,e),{destroy:void 0},null),Ut===null)throw Error(c(349));u||$l&60||_f(a,e,l)}return l}function _f(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=vt.updateQueue,e===null?(e=hu(),vt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function kf(t,e,l,a){e.value=l,e.getSnapshot=a,$f(e)&&Hf(t)}function Bf(t,e,l){return l(function(){$f(e)&&Hf(t)})}function $f(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!we(t,l)}catch{return!0}}function Hf(t){var e=_l(t,2);e!==null&&ye(e,t,2)}function sc(t){var e=Ae();if(typeof t=="function"){var l=t;if(t=l(),ya){jl(!0);try{l()}finally{jl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:t},e}function Uf(t,e,l,a){return t.baseState=l,cc(t,kt,typeof a=="function"?a:ml)}function eg(t,e,l,a,i){if(yu(t))throw Error(c(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){u.listeners.push(s)}};P.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Nf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Nf(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var u=P.T,s={};P.T=s;try{var f=l(i,a),p=P.S;p!==null&&p(s,f),Lf(t,e,f)}catch(x){fc(t,e,x)}finally{P.T=u}}else try{u=l(i,a),Lf(t,e,u)}catch(x){fc(t,e,x)}}function Lf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Qf(t,e,a)},function(a){return fc(t,e,a)}):Qf(t,e,l)}function Qf(t,e,l){e.status="fulfilled",e.value=l,qf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Nf(t,l)))}function fc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,qf(e),e=e.next;while(e!==a)}t.action=null}function qf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Gf(t,e){return e}function Yf(t,e){if(Rt){var l=Ut.formState;if(l!==null){t:{var a=vt;if(Rt){if(se){e:{for(var i=se,u=ll;i.nodeType!==8;){if(!u){i=null;break e}if(i=Fe(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){se=Fe(i.nextSibling),a=i.data==="F!";break t}}ma(a)}a=!1}a&&(e=l[0])}}return l=Ae(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gf,lastRenderedState:e},l.queue=a,l=cd.bind(null,vt,a),a.dispatch=l,a=sc(!1),u=bc.bind(null,vt,!1,a.queue),a=Ae(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=eg.bind(null,vt,i,u,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function Xf(t){var e=Ft();return Vf(e,kt,t)}function Vf(t,e,l){e=cc(t,e,Gf)[0],t=mu(ml)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?ai(e):e;var a=Ft(),i=a.queue,u=i.dispatch;return l!==a.memoizedState&&(vt.flags|=2048,sn(9,lg.bind(null,i,l),{destroy:void 0},null)),[e,u,t]}function lg(t,e){t.action=e}function Zf(t){var e=Ft(),l=kt;if(l!==null)return Vf(e,l,t);Ft(),e=e.memoizedState,l=Ft();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function sn(t,e,l,a){return t={tag:t,create:e,inst:l,deps:a,next:null},e=vt.updateQueue,e===null&&(e=hu(),vt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Kf(){return Ft().memoizedState}function gu(t,e,l,a){var i=Ae();vt.flags|=t,i.memoizedState=sn(1|e,l,{destroy:void 0},a===void 0?null:a)}function bu(t,e,l,a){var i=Ft();a=a===void 0?null:a;var u=i.memoizedState.inst;kt!==null&&a!==null&&lc(a,kt.memoizedState.deps)?i.memoizedState=sn(e,l,u,a):(vt.flags|=t,i.memoizedState=sn(1|e,l,u,a))}function Jf(t,e){gu(8390656,8,t,e)}function dc(t,e){bu(2048,8,t,e)}function Wf(t,e){return bu(4,2,t,e)}function Ff(t,e){return bu(4,4,t,e)}function If(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pf(t,e,l){l=l!=null?l.concat([t]):null,bu(4,4,If.bind(null,e,t),l)}function hc(){}function td(t,e){var l=Ft();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&lc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function ed(t,e){var l=Ft();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&lc(e,a[1]))return a[0];if(a=t(),ya){jl(!0);try{t()}finally{jl(!1)}}return l.memoizedState=[a,e],a}function pc(t,e,l){return l===void 0||$l&1073741824?t.memoizedState=e:(t.memoizedState=l,t=ah(),vt.lanes|=t,Vl|=t,l)}function ld(t,e,l,a){return we(l,e)?l:nn.current!==null?(t=pc(t,l,a),we(t,e)||(ie=!0),t):$l&42?(t=ah(),vt.lanes|=t,Vl|=t,e):(ie=!0,t.memoizedState=l)}function ad(t,e,l,a,i){var u=B.p;B.p=u!==0&&8>u?u:8;var s=P.T,f={};P.T=f,bc(t,!1,e,l);try{var p=i(),x=P.S;if(x!==null&&x(f,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var j=Im(p,a);ni(t,e,j,Oe(t))}else ni(t,e,a,Oe(t))}catch($){ni(t,e,{then:function(){},status:"rejected",reason:$},Oe())}finally{B.p=u,P.T=s}}function ag(){}function mc(t,e,l,a){if(t.tag!==5)throw Error(c(476));var i=nd(t).queue;ad(t,i,e,tt,l===null?ag:function(){return id(t),l(a)})}function nd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:tt},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function id(t){var e=nd(t).next.queue;ni(t,e,{},Oe())}function gc(){return me(Ti)}function ud(){return Ft().memoizedState}function rd(){return Ft().memoizedState}function ng(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Oe();t=Ll(l);var a=Ql(e,t,l);a!==null&&(ye(a,e,l),ri(a,e,l)),e={cache:Pr()},t.payload=e;return}e=e.return}}function ig(t,e,l){var a=Oe();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},yu(t)?od(e,l):(l=Vr(t,e,l,a),l!==null&&(ye(l,t,a),sd(l,e,a)))}function cd(t,e,l){var a=Oe();ni(t,e,l,a)}function ni(t,e,l,a){var i={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(yu(t))od(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var s=e.lastRenderedState,f=u(s,l);if(i.hasEagerState=!0,i.eagerState=f,we(f,s))return eu(t,e,i,0),Ut===null&&tu(),!1}catch{}finally{}if(l=Vr(t,e,i,a),l!==null)return ye(l,t,a),sd(l,e,a),!0}return!1}function bc(t,e,l,a){if(a={lane:2,revertLane:uo(),action:a,hasEagerState:!1,eagerState:null,next:null},yu(t)){if(e)throw Error(c(479))}else e=Vr(t,l,a,2),e!==null&&ye(e,t,2)}function yu(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function od(t,e){cn=fu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function sd(t,e,l){if(l&4194176){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,xs(t,l)}}var nl={readContext:me,use:pu,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt};nl.useCacheRefresh=Jt,nl.useMemoCache=Jt,nl.useHostTransitionStatus=Jt,nl.useFormState=Jt,nl.useActionState=Jt,nl.useOptimistic=Jt;var va={readContext:me,use:pu,useCallback:function(t,e){return Ae().memoizedState=[t,e===void 0?null:e],t},useContext:me,useEffect:Jf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,gu(4194308,4,If.bind(null,e,t),l)},useLayoutEffect:function(t,e){return gu(4194308,4,t,e)},useInsertionEffect:function(t,e){gu(4,2,t,e)},useMemo:function(t,e){var l=Ae();e=e===void 0?null:e;var a=t();if(ya){jl(!0);try{t()}finally{jl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ae();if(l!==void 0){var i=l(e);if(ya){jl(!0);try{l(e)}finally{jl(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=ig.bind(null,vt,t),[a.memoizedState,t]},useRef:function(t){var e=Ae();return t={current:t},e.memoizedState=t},useState:function(t){t=sc(t);var e=t.queue,l=cd.bind(null,vt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:hc,useDeferredValue:function(t,e){var l=Ae();return pc(l,t,e)},useTransition:function(){var t=sc(!1);return t=ad.bind(null,vt,t.queue,!0,!1),Ae().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=vt,i=Ae();if(Rt){if(l===void 0)throw Error(c(407));l=l()}else{if(l=e(),Ut===null)throw Error(c(349));wt&60||_f(a,e,l)}i.memoizedState=l;var u={value:l,getSnapshot:e};return i.queue=u,Jf(Bf.bind(null,a,u,t),[t]),a.flags|=2048,sn(9,kf.bind(null,a,u,l,e),{destroy:void 0},null),l},useId:function(){var t=Ae(),e=Ut.identifierPrefix;if(Rt){var l=hl,a=dl;l=(a&~(1<<32-Te(a)-1)).toString(32)+l,e=":"+e+"R"+l,l=du++,0<l&&(e+="H"+l.toString(32)),e+=":"}else l=Pm++,e=":"+e+"r"+l.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Ae().memoizedState=ng.bind(null,vt)}};va.useMemoCache=rc,va.useHostTransitionStatus=gc,va.useFormState=Yf,va.useActionState=Yf,va.useOptimistic=function(t){var e=Ae();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=bc.bind(null,vt,!0,l),l.dispatch=e,[t,e]};var Hl={readContext:me,use:pu,useCallback:td,useContext:me,useEffect:dc,useImperativeHandle:Pf,useInsertionEffect:Wf,useLayoutEffect:Ff,useMemo:ed,useReducer:mu,useRef:Kf,useState:function(){return mu(ml)},useDebugValue:hc,useDeferredValue:function(t,e){var l=Ft();return ld(l,kt.memoizedState,t,e)},useTransition:function(){var t=mu(ml)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:ai(t),e]},useSyncExternalStore:Mf,useId:ud};Hl.useCacheRefresh=rd,Hl.useMemoCache=rc,Hl.useHostTransitionStatus=gc,Hl.useFormState=Xf,Hl.useActionState=Xf,Hl.useOptimistic=function(t,e){var l=Ft();return Uf(l,kt,t,e)};var xa={readContext:me,use:pu,useCallback:td,useContext:me,useEffect:dc,useImperativeHandle:Pf,useInsertionEffect:Wf,useLayoutEffect:Ff,useMemo:ed,useReducer:oc,useRef:Kf,useState:function(){return oc(ml)},useDebugValue:hc,useDeferredValue:function(t,e){var l=Ft();return kt===null?pc(l,t,e):ld(l,kt.memoizedState,t,e)},useTransition:function(){var t=oc(ml)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:ai(t),e]},useSyncExternalStore:Mf,useId:ud};xa.useCacheRefresh=rd,xa.useMemoCache=rc,xa.useHostTransitionStatus=gc,xa.useFormState=Zf,xa.useActionState=Zf,xa.useOptimistic=function(t,e){var l=Ft();return kt!==null?Uf(l,kt,t,e):(l.baseState=t,[t,l.queue.dispatch])};function yc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:mt({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var vc={isMounted:function(t){return(t=t._reactInternals)?Y(t)===t:!1},enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Oe(),i=Ll(a);i.payload=e,l!=null&&(i.callback=l),e=Ql(t,i,a),e!==null&&(ye(e,t,a),ri(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Oe(),i=Ll(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=Ql(t,i,a),e!==null&&(ye(e,t,a),ri(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Oe(),a=Ll(l);a.tag=2,e!=null&&(a.callback=e),e=Ql(t,a,l),e!==null&&(ye(e,t,l),ri(e,t,l))}};function fd(t,e,l,a,i,u,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,s):e.prototype&&e.prototype.isPureReactComponent?!Xn(l,a)||!Xn(i,u):!0}function dd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function Aa(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=mt({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}var vu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function hd(t){vu(t)}function pd(t){console.error(t)}function md(t){vu(t)}function xu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function gd(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function xc(t,e,l){return l=Ll(l),l.tag=3,l.payload={element:null},l.callback=function(){xu(t,e)},l}function bd(t){return t=Ll(t),t.tag=3,t}function yd(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var u=a.value;t.payload=function(){return i(u)},t.callback=function(){gd(e,l,a)}}var s=l.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){gd(e,l,a),typeof i!="function"&&(Zl===null?Zl=new Set([this]):Zl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function ug(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ui(e,l,i,!0),l=Ne.current,l!==null){switch(l.tag){case 13:return al===null?eo():l.alternate===null&&Vt===0&&(Vt=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===Wr?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),ao(t,a,i)),!1;case 22:return l.flags|=65536,a===Wr?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),ao(t,a,i)),!1}throw Error(c(435,l.tag))}return ao(t,a,i),eo(),!1}if(Rt)return e=Ne.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Jr&&(t=Error(c(422),{cause:a}),Jn($e(t,l)))):(a!==Jr&&(e=Error(c(423),{cause:a}),Jn($e(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=$e(a,l),i=xc(t.stateNode,a,i),Bc(t,i),Vt!==4&&(Vt=2)),!1;var u=Error(c(520),{cause:a});if(u=$e(u,l),mi===null?mi=[u]:mi.push(u),Vt!==4&&(Vt=2),e===null)return!0;a=$e(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=xc(l.stateNode,a,t),Bc(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Zl===null||!Zl.has(u))))return l.flags|=65536,i&=-i,l.lanes|=i,i=bd(i),yd(i,t,l,a),Bc(l,i),!1}l=l.return}while(l!==null);return!1}var vd=Error(c(461)),ie=!1;function fe(t,e,l,a){e.child=t===null?Tf(e,null,l,a):ga(e,t.child,l,a)}function xd(t,e,l,a,i){l=l.render;var u=e.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return Ea(e),a=ac(t,e,l,s,u,i),f=nc(),t!==null&&!ie?(ic(t,e,i),gl(t,e,i)):(Rt&&f&&Zr(e),e.flags|=1,fe(t,e,a,i),e.child)}function Ad(t,e,l,a,i){if(t===null){var u=l.type;return typeof u=="function"&&!Gc(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Sd(t,e,u,a,i)):(t=wu(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Oc(t,i)){var s=u.memoizedProps;if(l=l.compare,l=l!==null?l:Xn,l(s,a)&&t.ref===e.ref)return gl(t,e,i)}return e.flags|=1,t=Xl(u,a),t.ref=e.ref,t.return=e,e.child=t}function Sd(t,e,l,a,i){if(t!==null){var u=t.memoizedProps;if(Xn(u,a)&&t.ref===e.ref)if(ie=!1,e.pendingProps=a=u,Oc(t,i))t.flags&131072&&(ie=!0);else return e.lanes=t.lanes,gl(t,e,i)}return Ac(t,e,l,a,i)}function Ed(t,e,l){var a=e.pendingProps,i=a.children,u=(e.stateNode._pendingVisibility&2)!==0,s=t!==null?t.memoizedState:null;if(ii(t,e),a.mode==="hidden"||u){if(e.flags&128){if(a=s!==null?s.baseLanes|l:l,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~a}else e.childLanes=0,e.child=null;return Td(t,e,a,l)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&su(e,s!==null?s.cachePool:null),s!==null?wf(e,s):Fr(),Df(e);else return e.lanes=e.childLanes=536870912,Td(t,e,s!==null?s.baseLanes|l:l,l)}else s!==null?(su(e,s.cachePool),wf(e,s),Bl(),e.memoizedState=null):(t!==null&&su(e,null),Fr(),Bl());return fe(t,e,i,l),e.child}function Td(t,e,l,a){var i=ec();return i=i===null?null:{parent:ae._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&su(e,null),Fr(),Df(e),t!==null&&ui(t,e,a,!0),null}function ii(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(t===null||t.ref!==l)&&(e.flags|=2097664)}}function Ac(t,e,l,a,i){return Ea(e),l=ac(t,e,l,a,void 0,i),a=nc(),t!==null&&!ie?(ic(t,e,i),gl(t,e,i)):(Rt&&a&&Zr(e),e.flags|=1,fe(t,e,l,i),e.child)}function wd(t,e,l,a,i,u){return Ea(e),e.updateQueue=null,l=Cf(e,a,l,i),jf(t),a=nc(),t!==null&&!ie?(ic(t,e,u),gl(t,e,u)):(Rt&&a&&Zr(e),e.flags|=1,fe(t,e,l,u),e.child)}function Dd(t,e,l,a,i){if(Ea(e),e.stateNode===null){var u=tn,s=l.contextType;typeof s=="object"&&s!==null&&(u=me(s)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=vc,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},_c(e),s=l.contextType,u.context=typeof s=="object"&&s!==null?me(s):tn,u.state=e.memoizedState,s=l.getDerivedStateFromProps,typeof s=="function"&&(yc(e,l,s,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&vc.enqueueReplaceState(u,u.state,null),oi(e,a,u,i),ci(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var f=e.memoizedProps,p=Aa(l,f);u.props=p;var x=u.context,j=l.contextType;s=tn,typeof j=="object"&&j!==null&&(s=me(j));var $=l.getDerivedStateFromProps;j=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||x!==s)&&dd(e,u,a,s),Nl=!1;var T=e.memoizedState;u.state=T,oi(e,a,u,i),ci(),x=e.memoizedState,f||T!==x||Nl?(typeof $=="function"&&(yc(e,l,$,a),x=e.memoizedState),(p=Nl||fd(e,l,p,a,T,x,s))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=x),u.props=a,u.state=x,u.context=s,a=p):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,kc(t,e),s=e.memoizedProps,j=Aa(l,s),u.props=j,$=e.pendingProps,T=u.context,x=l.contextType,p=tn,typeof x=="object"&&x!==null&&(p=me(x)),f=l.getDerivedStateFromProps,(x=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s!==$||T!==p)&&dd(e,u,a,p),Nl=!1,T=e.memoizedState,u.state=T,oi(e,a,u,i),ci();var O=e.memoizedState;s!==$||T!==O||Nl||t!==null&&t.dependencies!==null&&Au(t.dependencies)?(typeof f=="function"&&(yc(e,l,f,a),O=e.memoizedState),(j=Nl||fd(e,l,j,a,T,O,p)||t!==null&&t.dependencies!==null&&Au(t.dependencies))?(x||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,O,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,O,p)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=O),u.props=a,u.state=O,u.context=p,a=j):(typeof u.componentDidUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&T===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,ii(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=ga(e,t.child,null,i),e.child=ga(e,null,l,i)):fe(t,e,l,i),e.memoizedState=u.state,t=e.child):t=gl(t,e,i),t}function zd(t,e,l,a){return Kn(),e.flags|=256,fe(t,e,l,a),e.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function Ec(t){return{baseLanes:t,cachePool:Of()}}function Tc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ge),t}function Rd(t,e,l){var a=e.pendingProps,i=!1,u=(e.flags&128)!==0,s;if((s=u)||(s=t!==null&&t.memoizedState===null?!1:(le.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Rt){if(i?kl(e):Bl(),Rt){var f=se,p;if(p=f){t:{for(p=f,f=ll;p.nodeType!==8;){if(!f){f=null;break t}if(p=Fe(p.nextSibling),p===null){f=null;break t}}f=p}f!==null?(e.memoizedState={dehydrated:f,treeContext:ha!==null?{id:dl,overflow:hl}:null,retryLane:536870912},p=qe(18,null,null,0),p.stateNode=f,p.return=e,e.child=p,be=e,se=null,p=!0):p=!1}p||ma(e)}if(f=e.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return f.data==="$!"?e.lanes=16:e.lanes=536870912,null;pl(e)}return f=a.children,a=a.fallback,i?(Bl(),i=e.mode,f=Dc({mode:"hidden",children:f},i),a=wa(a,i,l,null),f.return=e,a.return=e,f.sibling=a,e.child=f,i=e.child,i.memoizedState=Ec(l),i.childLanes=Tc(t,s,l),e.memoizedState=Sc,a):(kl(e),wc(e,f))}if(p=t.memoizedState,p!==null&&(f=p.dehydrated,f!==null)){if(u)e.flags&256?(kl(e),e.flags&=-257,e=zc(t,e,l)):e.memoizedState!==null?(Bl(),e.child=t.child,e.flags|=128,e=null):(Bl(),i=a.fallback,f=e.mode,a=Dc({mode:"visible",children:a.children},f),i=wa(i,f,l,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,ga(e,t.child,null,l),a=e.child,a.memoizedState=Ec(l),a.childLanes=Tc(t,s,l),e.memoizedState=Sc,e=i);else if(kl(e),f.data==="$!"){if(s=f.nextSibling&&f.nextSibling.dataset,s)var x=s.dgst;s=x,a=Error(c(419)),a.stack="",a.digest=s,Jn({value:a,source:null,stack:null}),e=zc(t,e,l)}else if(ie||ui(t,e,l,!1),s=(l&t.childLanes)!==0,ie||s){if(s=Ut,s!==null){if(a=l&-l,a&42)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=a&(s.suspendedLanes|l)?0:a,a!==0&&a!==p.retryLane)throw p.retryLane=a,_l(t,a),ye(s,t,a),vd}f.data==="$?"||eo(),e=zc(t,e,l)}else f.data==="$?"?(e.flags|=128,e.child=t.child,e=Ag.bind(null,t),f._reactRetry=e,e=null):(t=p.treeContext,se=Fe(f.nextSibling),be=e,Rt=!0,Je=null,ll=!1,t!==null&&(He[Ue++]=dl,He[Ue++]=hl,He[Ue++]=ha,dl=t.id,hl=t.overflow,ha=e),e=wc(e,a.children),e.flags|=4096);return e}return i?(Bl(),i=a.fallback,f=e.mode,p=t.child,x=p.sibling,a=Xl(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&31457280,x!==null?i=Xl(x,i):(i=wa(i,f,l,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,f=t.child.memoizedState,f===null?f=Ec(l):(p=f.cachePool,p!==null?(x=ae._currentValue,p=p.parent!==x?{parent:x,pool:x}:p):p=Of(),f={baseLanes:f.baseLanes|l,cachePool:p}),i.memoizedState=f,i.childLanes=Tc(t,s,l),e.memoizedState=Sc,a):(kl(e),l=t.child,t=l.sibling,l=Xl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=l,e.memoizedState=null,l)}function wc(t,e){return e=Dc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Dc(t,e){return th(t,e,0,null)}function zc(t,e,l){return ga(e,t.child,null,l),t=wc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Od(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Cc(t.return,e,l)}function Rc(t,e,l,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i)}function jd(t,e,l){var a=e.pendingProps,i=a.revealOrder,u=a.tail;if(fe(t,e,a.children,l),a=le.current,a&2)a=a&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Od(t,l,e);else if(t.tag===19)Od(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(et(le,a),i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&ou(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Rc(e,!1,i,l,u);break;case"backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Rc(e,!0,l,null,u);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Vl|=e.lanes,!(l&e.childLanes))if(t!==null){if(ui(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,l=Xl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Xl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Oc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Au(t)))}function rg(t,e,l){switch(e.tag){case 3:Qt(e,e.stateNode.containerInfo),Ul(e,ae,t.memoizedState.cache),Kn();break;case 27:case 5:Se(e);break;case 4:Qt(e,e.stateNode.containerInfo);break;case 10:Ul(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(kl(e),e.flags|=128,null):l&e.child.childLanes?Rd(t,e,l):(kl(e),t=gl(t,e,l),t!==null?t.sibling:null);kl(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ui(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return jd(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),et(le,le.current),a)break;return null;case 22:case 23:return e.lanes=0,Ed(t,e,l);case 24:Ul(e,ae,t.memoizedState.cache)}return gl(t,e,l)}function Cd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)ie=!0;else{if(!Oc(t,l)&&!(e.flags&128))return ie=!1,rg(t,e,l);ie=!!(t.flags&131072)}else ie=!1,Rt&&e.flags&1048576&&mf(e,nu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")Gc(a)?(t=Aa(a,t),e.tag=1,e=Dd(null,e,a,t,l)):(e.tag=0,e=Ac(null,e,a,t,l));else{if(a!=null){if(i=a.$$typeof,i===J){e.tag=11,e=xd(null,e,a,t,l);break t}else if(i===V){e.tag=14,e=Ad(null,e,a,t,l);break t}}throw e=jt(a)||a,Error(c(306,e,""))}}return e;case 0:return Ac(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=Aa(a,e.pendingProps),Dd(t,e,a,i,l);case 3:t:{if(Qt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));var u=e.pendingProps;i=e.memoizedState,a=i.element,kc(t,e),oi(e,u,null,l);var s=e.memoizedState;if(u=s.cache,Ul(e,ae,u),u!==i.cache&&Mc(e,[ae],l,!0),ci(),u=s.element,i.isDehydrated)if(i={element:u,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=zd(t,e,u,l);break t}else if(u!==a){a=$e(Error(c(424)),e),Jn(a),e=zd(t,e,u,l);break t}else for(se=Fe(e.stateNode.containerInfo.firstChild),be=e,Rt=!0,Je=null,ll=!0,l=Tf(e,null,u,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Kn(),u===a){e=gl(t,e,l);break t}fe(t,e,u,l)}e=e.child}return e;case 26:return ii(t,e),t===null?(l=kh(e.type,null,e.pendingProps,null))?e.memoizedState=l:Rt||(l=e.type,t=e.pendingProps,a=Hu(zt.current).createElement(l),a[pe]=e,a[ve]=t,de(a,l,t),ne(a),e.stateNode=a):e.memoizedState=kh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Se(e),t===null&&Rt&&(a=e.stateNode=Ch(e.type,e.pendingProps,zt.current),be=e,ll=!0,se=Fe(a.firstChild)),a=e.pendingProps.children,t!==null||Rt?fe(t,e,a,l):e.child=ga(e,null,a,l),ii(t,e),e.child;case 5:return t===null&&Rt&&((i=a=se)&&(a=Hg(a,e.type,e.pendingProps,ll),a!==null?(e.stateNode=a,be=e,se=Fe(a.firstChild),ll=!1,i=!0):i=!1),i||ma(e)),Se(e),i=e.type,u=e.pendingProps,s=t!==null?t.memoizedProps:null,a=u.children,go(i,u)?a=null:s!==null&&go(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=ac(t,e,tg,null,null,l),Ti._currentValue=i),ii(t,e),fe(t,e,a,l),e.child;case 6:return t===null&&Rt&&((t=l=se)&&(l=Ug(l,e.pendingProps,ll),l!==null?(e.stateNode=l,be=e,se=null,t=!0):t=!1),t||ma(e)),null;case 13:return Rd(t,e,l);case 4:return Qt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ga(e,null,a,l):fe(t,e,a,l),e.child;case 11:return xd(t,e,e.type,e.pendingProps,l);case 7:return fe(t,e,e.pendingProps,l),e.child;case 8:return fe(t,e,e.pendingProps.children,l),e.child;case 12:return fe(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Ul(e,e.type,a.value),fe(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,Ea(e),i=me(i),a=a(i),e.flags|=1,fe(t,e,a,l),e.child;case 14:return Ad(t,e,e.type,e.pendingProps,l);case 15:return Sd(t,e,e.type,e.pendingProps,l);case 19:return jd(t,e,l);case 22:return Ed(t,e,l);case 24:return Ea(e),a=me(ae),t===null?(i=ec(),i===null&&(i=Ut,u=Pr(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=l),i=u),e.memoizedState={parent:a,cache:i},_c(e),Ul(e,ae,i)):(t.lanes&l&&(kc(t,e),oi(e,null,null,l),ci()),i=t.memoizedState,u=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ul(e,ae,a)):(a=u.cache,Ul(e,ae,a),a!==i.cache&&Mc(e,[ae],l,!0))),fe(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}var jc=ht(null),Sa=null,bl=null;function Ul(t,e,l){et(jc,e._currentValue),e._currentValue=l}function yl(t){t._currentValue=jc.current,_(jc)}function Cc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Mc(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var s=i.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=i;for(var p=0;p<e.length;p++)if(f.context===e[p]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),Cc(u.return,l,t),a||(s=null);break t}u=f.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=l,u=s.alternate,u!==null&&(u.lanes|=l),Cc(s,l,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ui(t,e,l,a){t=null;for(var i=e,u=!1;i!==null;){if(!u){if(i.flags&524288)u=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var f=i.type;we(i.pendingProps.value,s.value)||(t!==null?t.push(f):t=[f])}}else if(i===Yt.current){if(s=i.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ti):t=[Ti])}i=i.return}t!==null&&Mc(e,t,l,a),e.flags|=262144}function Au(t){for(t=t.firstContext;t!==null;){if(!we(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ea(t){Sa=t,bl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function me(t){return Md(Sa,t)}function Su(t,e){return Sa===null&&Ea(t),Md(t,e)}function Md(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},bl===null){if(t===null)throw Error(c(308));bl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else bl=bl.next=e;return l}var Nl=!1;function _c(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ll(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ql(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,Gt&2){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=lu(t),hf(t,null,l),e}return eu(t,a,e,l),lu(t)}function ri(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194176)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,xs(t,l)}}function Bc(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var s={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?i=u=s:u=u.next=s,l=l.next}while(l!==null);u===null?i=u=e:u=u.next=e}else i=u=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var $c=!1;function ci(){if($c){var t=rn;if(t!==null)throw t}}function oi(t,e,l,a){$c=!1;var i=t.updateQueue;Nl=!1;var u=i.firstBaseUpdate,s=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var p=f,x=p.next;p.next=null,s===null?u=x:s.next=x,s=p;var j=t.alternate;j!==null&&(j=j.updateQueue,f=j.lastBaseUpdate,f!==s&&(f===null?j.firstBaseUpdate=x:f.next=x,j.lastBaseUpdate=p))}if(u!==null){var $=i.baseState;s=0,j=x=p=null,f=u;do{var T=f.lane&-536870913,O=T!==f.lane;if(O?(wt&T)===T:(a&T)===T){T!==0&&T===un&&($c=!0),j!==null&&(j=j.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var ut=t,gt=f;T=e;var Zt=l;switch(gt.tag){case 1:if(ut=gt.payload,typeof ut=="function"){$=ut.call(Zt,$,T);break t}$=ut;break t;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=gt.payload,T=typeof ut=="function"?ut.call(Zt,$,T):ut,T==null)break t;$=mt({},$,T);break t;case 2:Nl=!0}}T=f.callback,T!==null&&(t.flags|=64,O&&(t.flags|=8192),O=i.callbacks,O===null?i.callbacks=[T]:O.push(T))}else O={lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},j===null?(x=j=O,p=$):j=j.next=O,s|=T;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;O=f,f=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);j===null&&(p=$),i.baseState=p,i.firstBaseUpdate=x,i.lastBaseUpdate=j,u===null&&(i.shared.lanes=0),Vl|=s,t.lanes=s,t.memoizedState=$}}function _d(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function kd(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)_d(l[t],e)}function si(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var u=l.create,s=l.inst;a=u(),s.destroy=a}l=l.next}while(l!==i)}}catch(f){Ht(e,e.return,f)}}function ql(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&t)===t){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,i=e;var p=l;try{f()}catch(x){Ht(i,p,x)}}}a=a.next}while(a!==u)}}catch(x){Ht(e,e.return,x)}}function Bd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{kd(e,l)}catch(a){Ht(t,t.return,a)}}}function $d(t,e,l){l.props=Aa(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ht(t,e,a)}}function Ta(t,e){try{var l=t.ref;if(l!==null){var a=t.stateNode;switch(t.tag){case 26:case 27:case 5:var i=a;break;default:i=a}typeof l=="function"?t.refCleanup=l(i):l.current=i}}catch(u){Ht(t,e,u)}}function De(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){Ht(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Ht(t,e,i)}else l.current=null}function Hd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){Ht(t,t.return,i)}}function Ud(t,e,l){try{var a=t.stateNode;Mg(a,t.type,l,e),a[ve]=e}catch(i){Ht(t,t.return,i)}}function Nd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Hc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Nd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.nodeType===8?l.parentNode.insertBefore(t,e):l.insertBefore(t,e):(l.nodeType===8?(e=l.parentNode,e.insertBefore(t,l)):(e=l,e.appendChild(t)),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=$u));else if(a!==4&&a!==27&&(t=t.child,t!==null))for(Uc(t,e,l),t=t.sibling;t!==null;)Uc(t,e,l),t=t.sibling}function Eu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&a!==27&&(t=t.child,t!==null))for(Eu(t,e,l),t=t.sibling;t!==null;)Eu(t,e,l),t=t.sibling}var vl=!1,Xt=!1,Nc=!1,Ld=typeof WeakSet=="function"?WeakSet:Set,ue=null,Qd=!1;function cg(t,e){if(t=t.containerInfo,po=Gu,t=af(t),Qr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var s=0,f=-1,p=-1,x=0,j=0,$=t,T=null;e:for(;;){for(var O;$!==l||i!==0&&$.nodeType!==3||(f=s+i),$!==u||a!==0&&$.nodeType!==3||(p=s+a),$.nodeType===3&&(s+=$.nodeValue.length),(O=$.firstChild)!==null;)T=$,$=O;for(;;){if($===t)break e;if(T===l&&++x===i&&(f=s),T===u&&++j===a&&(p=s),(O=$.nextSibling)!==null)break;$=T,T=$.parentNode}$=O}l=f===-1||p===-1?null:{start:f,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;for(mo={focusedElem:t,selectionRange:l},Gu=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){switch(e=ue,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&u!==null){t=void 0,l=e,i=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var ut=Aa(l.type,i,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(ut,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(gt){Ht(l,l.return,gt)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)vo(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}return ut=Qd,Qd=!1,ut}function qd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Al(t,l),a&4&&si(5,l);break;case 1:if(Al(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(f){Ht(l,l.return,f)}else{var i=Aa(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){Ht(l,l.return,f)}}a&64&&Bd(l),a&512&&Ta(l,l.return);break;case 3:if(Al(t,l),a&64&&(a=l.updateQueue,a!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{kd(a,t)}catch(f){Ht(l,l.return,f)}}break;case 26:Al(t,l),a&512&&Ta(l,l.return);break;case 27:case 5:Al(t,l),e===null&&a&4&&Hd(l),a&512&&Ta(l,l.return);break;case 12:Al(t,l);break;case 13:Al(t,l),a&4&&Xd(t,l);break;case 22:if(i=l.memoizedState!==null||vl,!i){e=e!==null&&e.memoizedState!==null||Xt;var u=vl,s=Xt;vl=i,(Xt=e)&&!s?Gl(t,l,(l.subtreeFlags&8772)!==0):Al(t,l),vl=u,Xt=s}a&512&&(l.memoizedProps.mode==="manual"?Ta(l,l.return):De(l,l.return));break;default:Al(t,l)}}function Gd(t){var e=t.alternate;e!==null&&(t.alternate=null,Gd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&wr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var It=null,ze=!1;function xl(t,e,l){for(l=l.child;l!==null;)Yd(t,e,l),l=l.sibling}function Yd(t,e,l){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(_n,l)}catch{}switch(l.tag){case 26:Xt||De(l,e),xl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Xt||De(l,e);var a=It,i=ze;for(It=l.stateNode,xl(t,e,l),l=l.stateNode,e=l.attributes;e.length;)l.removeAttributeNode(e[0]);wr(l),It=a,ze=i;break;case 5:Xt||De(l,e);case 6:i=It;var u=ze;if(It=null,xl(t,e,l),It=i,ze=u,It!==null)if(ze)try{t=It,a=l.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)}catch(s){Ht(l,e,s)}else try{It.removeChild(l.stateNode)}catch(s){Ht(l,e,s)}break;case 18:It!==null&&(ze?(e=It,l=l.stateNode,e.nodeType===8?yo(e.parentNode,l):e.nodeType===1&&yo(e,l),Ri(e)):yo(It,l.stateNode));break;case 4:a=It,i=ze,It=l.stateNode.containerInfo,ze=!0,xl(t,e,l),It=a,ze=i;break;case 0:case 11:case 14:case 15:Xt||ql(2,l,e),Xt||ql(4,l,e),xl(t,e,l);break;case 1:Xt||(De(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&$d(l,e,a)),xl(t,e,l);break;case 21:xl(t,e,l);break;case 22:Xt||De(l,e),Xt=(a=Xt)||l.memoizedState!==null,xl(t,e,l),Xt=a;break;default:xl(t,e,l)}}function Xd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ri(t)}catch(l){Ht(e,e.return,l)}}function og(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ld),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ld),e;default:throw Error(c(435,t.tag))}}function Lc(t,e){var l=og(t);e.forEach(function(a){var i=Sg.bind(null,t,a);l.has(a)||(l.add(a),a.then(i,i))})}function Le(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],u=t,s=e,f=s;t:for(;f!==null;){switch(f.tag){case 27:case 5:It=f.stateNode,ze=!1;break t;case 3:It=f.stateNode.containerInfo,ze=!0;break t;case 4:It=f.stateNode.containerInfo,ze=!0;break t}f=f.return}if(It===null)throw Error(c(160));Yd(u,s,i),It=null,ze=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Vd(e,t),e=e.sibling}var We=null;function Vd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Le(e,t),Qe(t),a&4&&(ql(3,t,t.return),si(3,t),ql(5,t,t.return));break;case 1:Le(e,t),Qe(t),a&512&&(Xt||l===null||De(l,l.return)),a&64&&vl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=We;if(Le(e,t),Qe(t),a&512&&(Xt||l===null||De(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":u=i.getElementsByTagName("title")[0],(!u||u[$n]||u[pe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(a),i.head.insertBefore(u,i.querySelector("head > title"))),de(u,a,l),u[pe]=t,ne(u),a=u;break t;case"link":var s=Hh("link","href",i).get(a+(l.href||""));if(s){for(var f=0;f<s.length;f++)if(u=s[f],u.getAttribute("href")===(l.href==null?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){s.splice(f,1);break e}}u=i.createElement(a),de(u,a,l),i.head.appendChild(u);break;case"meta":if(s=Hh("meta","content",i).get(a+(l.content||""))){for(f=0;f<s.length;f++)if(u=s[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){s.splice(f,1);break e}}u=i.createElement(a),de(u,a,l),i.head.appendChild(u);break;default:throw Error(c(468,a))}u[pe]=t,ne(u),a=u}t.stateNode=a}else Uh(i,t.type,t.stateNode);else t.stateNode=$h(i,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?Uh(i,t.type,t.stateNode):$h(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ud(t,t.memoizedProps,l.memoizedProps)}break;case 27:if(a&4&&t.alternate===null){i=t.stateNode,u=t.memoizedProps;try{for(var p=i.firstChild;p;){var x=p.nextSibling,j=p.nodeName;p[$n]||j==="HEAD"||j==="BODY"||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&p.rel.toLowerCase()==="stylesheet"||i.removeChild(p),p=x}for(var $=t.type,T=i.attributes;T.length;)i.removeAttributeNode(T[0]);de(i,$,u),i[pe]=t,i[ve]=u}catch(ut){Ht(t,t.return,ut)}}case 5:if(Le(e,t),Qe(t),a&512&&(Xt||l===null||De(l,l.return)),t.flags&32){i=t.stateNode;try{Za(i,"")}catch(ut){Ht(t,t.return,ut)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Ud(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Nc=!0);break;case 6:if(Le(e,t),Qe(t),a&4){if(t.stateNode===null)throw Error(c(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(ut){Ht(t,t.return,ut)}}break;case 3:if(Lu=null,i=We,We=Uu(e.containerInfo),Le(e,t),We=i,Qe(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ri(e.containerInfo)}catch(ut){Ht(t,t.return,ut)}Nc&&(Nc=!1,Zd(t));break;case 4:a=We,We=Uu(t.stateNode.containerInfo),Le(e,t),Qe(t),We=a;break;case 12:Le(e,t),Qe(t);break;case 13:Le(e,t),Qe(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Jc=Ze()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Lc(t,a)));break;case 22:if(a&512&&(Xt||l===null||De(l,l.return)),p=t.memoizedState!==null,x=l!==null&&l.memoizedState!==null,j=vl,$=Xt,vl=j||p,Xt=$||x,Le(e,t),Xt=$,vl=j,Qe(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=p?e._visibility&-2:e._visibility|1,p&&(e=vl||Xt,l===null||x||e||fn(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(l=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(l===null){x=l=e;try{if(i=x.stateNode,p)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=x.stateNode,f=x.memoizedProps.style;var O=f!=null&&f.hasOwnProperty("display")?f.display:null;s.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ut){Ht(x,x.return,ut)}}}else if(e.tag===6){if(l===null){x=e;try{x.stateNode.nodeValue=p?"":x.memoizedProps}catch(ut){Ht(x,x.return,ut)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Lc(t,l))));break;case 19:Le(e,t),Qe(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Lc(t,a)));break;case 21:break;default:Le(e,t),Qe(t)}}function Qe(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var l=t.return;l!==null;){if(Nd(l)){var a=l;break t}l=l.return}throw Error(c(160))}switch(a.tag){case 27:var i=a.stateNode,u=Hc(t);Eu(t,u,i);break;case 5:var s=a.stateNode;a.flags&32&&(Za(s,""),a.flags&=-33);var f=Hc(t);Eu(t,f,s);break;case 3:case 4:var p=a.stateNode.containerInfo,x=Hc(t);Uc(t,x,p);break;default:throw Error(c(161))}}}catch(j){Ht(t,t.return,j)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Zd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Al(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)qd(t,e.alternate,e),e=e.sibling}function fn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ql(4,e,e.return),fn(e);break;case 1:De(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&$d(e,e.return,l),fn(e);break;case 26:case 27:case 5:De(e,e.return),fn(e);break;case 22:De(e,e.return),e.memoizedState===null&&fn(e);break;default:fn(e)}t=t.sibling}}function Gl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,u=e,s=u.flags;switch(u.tag){case 0:case 11:case 15:Gl(i,u,l),si(4,u);break;case 1:if(Gl(i,u,l),a=u,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(x){Ht(a,a.return,x)}if(a=u,i=a.updateQueue,i!==null){var f=a.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)_d(p[i],f)}catch(x){Ht(a,a.return,x)}}l&&s&64&&Bd(u),Ta(u,u.return);break;case 26:case 27:case 5:Gl(i,u,l),l&&a===null&&s&4&&Hd(u),Ta(u,u.return);break;case 12:Gl(i,u,l);break;case 13:Gl(i,u,l),l&&s&4&&Xd(i,u);break;case 22:u.memoizedState===null&&Gl(i,u,l),Ta(u,u.return);break;default:Gl(i,u,l)}e=e.sibling}}function Qc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&ti(l))}function qc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ti(t))}function Yl(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kd(t,e,l,a),e=e.sibling}function Kd(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Yl(t,e,l,a),i&2048&&si(9,e);break;case 3:Yl(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ti(t)));break;case 12:if(i&2048){Yl(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,s=u.id,f=u.onPostCommit;typeof f=="function"&&f(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){Ht(e,e.return,p)}}else Yl(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,e.memoizedState!==null?u._visibility&4?Yl(t,e,l,a):fi(t,e):u._visibility&4?Yl(t,e,l,a):(u._visibility|=4,dn(t,e,l,a,(e.subtreeFlags&10256)!==0)),i&2048&&Qc(e.alternate,e);break;case 24:Yl(t,e,l,a),i&2048&&qc(e.alternate,e);break;default:Yl(t,e,l,a)}}function dn(t,e,l,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,s=e,f=l,p=a,x=s.flags;switch(s.tag){case 0:case 11:case 15:dn(u,s,f,p,i),si(8,s);break;case 23:break;case 22:var j=s.stateNode;s.memoizedState!==null?j._visibility&4?dn(u,s,f,p,i):fi(u,s):(j._visibility|=4,dn(u,s,f,p,i)),i&&x&2048&&Qc(s.alternate,s);break;case 24:dn(u,s,f,p,i),i&&x&2048&&qc(s.alternate,s);break;default:dn(u,s,f,p,i)}e=e.sibling}}function fi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:fi(l,a),i&2048&&Qc(a.alternate,a);break;case 24:fi(l,a),i&2048&&qc(a.alternate,a);break;default:fi(l,a)}e=e.sibling}}var di=8192;function hn(t){if(t.subtreeFlags&di)for(t=t.child;t!==null;)Jd(t),t=t.sibling}function Jd(t){switch(t.tag){case 26:hn(t),t.flags&di&&t.memoizedState!==null&&Fg(We,t.memoizedState,t.memoizedProps);break;case 5:hn(t);break;case 3:case 4:var e=We;We=Uu(t.stateNode.containerInfo),hn(t),We=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=di,di=16777216,hn(t),di=e):hn(t));break;default:hn(t)}}function Wd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function hi(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,Id(a,t)}Wd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fd(t),t=t.sibling}function Fd(t){switch(t.tag){case 0:case 11:case 15:hi(t),t.flags&2048&&ql(9,t,t.return);break;case 3:hi(t);break;case 12:hi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Tu(t)):hi(t);break;default:hi(t)}}function Tu(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,Id(a,t)}Wd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ql(8,e,e.return),Tu(e);break;case 22:l=e.stateNode,l._visibility&4&&(l._visibility&=-5,Tu(e));break;default:Tu(e)}t=t.sibling}}function Id(t,e){for(;ue!==null;){var l=ue;switch(l.tag){case 0:case 11:case 15:ql(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ti(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ue=a;else t:for(l=t;ue!==null;){a=ue;var i=a.sibling,u=a.return;if(Gd(a),a===l){ue=null;break t}if(i!==null){i.return=u,ue=i;break t}ue=u}}}function sg(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,l,a){return new sg(t,e,l,a)}function Gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xl(t,e){var l=t.alternate;return l===null?(l=qe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&31457280,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Pd(t,e){t.flags&=31457282;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function wu(t,e,l,a,i,u){var s=0;if(a=t,typeof t=="function")Gc(t)&&(s=1);else if(typeof t=="string")s=Jg(t,l,pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return wa(l.children,i,u,e);case b:s=8,i|=24;break;case C:return t=qe(12,l,e,i|2),t.elementType=C,t.lanes=u,t;case lt:return t=qe(13,l,e,i),t.elementType=lt,t.lanes=u,t;case W:return t=qe(19,l,e,i),t.elementType=W,t.lanes=u,t;case X:return th(l,i,u,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:case q:s=10;break t;case H:s=9;break t;case J:s=11;break t;case V:s=14;break t;case Q:s=16,a=null;break t}s=29,l=Error(c(130,t===null?"null":typeof t,"")),a=null}return e=qe(s,l,e,i),e.elementType=t,e.type=a,e.lanes=u,e}function wa(t,e,l,a){return t=qe(7,t,a,e),t.lanes=l,t}function th(t,e,l,a){t=qe(22,t,a,e),t.elementType=X,t.lanes=l;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=i._current;if(u===null)throw Error(c(456));if(!(i._pendingVisibility&2)){var s=_l(u,2);s!==null&&(i._pendingVisibility|=2,ye(s,u,2))}},attach:function(){var u=i._current;if(u===null)throw Error(c(456));if(i._pendingVisibility&2){var s=_l(u,2);s!==null&&(i._pendingVisibility&=-3,ye(s,u,2))}}};return t.stateNode=i,t}function Yc(t,e,l){return t=qe(6,t,null,e),t.lanes=l,t}function Xc(t,e,l){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sl(t){t.flags|=4}function eh(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Nh(e)){if(e=Ne.current,e!==null&&((wt&4194176)===wt?al!==null:(wt&62914560)!==wt&&!(wt&536870912)||e!==al))throw Fn=Wr,yf;t.flags|=8192}}function Du(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ys():536870912,t.lanes|=e,mn|=e)}function pi(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&31457280,a|=i.flags&31457280,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function fg(t,e,l){var a=e.pendingProps;switch(Kr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return qt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),yl(ae),ee(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Zn(e)?Sl(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Je!==null&&(Pc(Je),Je=null))),qt(e),null;case 26:return l=e.memoizedState,t===null?(Sl(e),l!==null?(qt(e),eh(e,l)):(qt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(Sl(e),qt(e),eh(e,l)):(qt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Sl(e),qt(e),e.flags&=-16777217),null;case 27:Ce(e),l=zt.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Sl(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return qt(e),null}t=pt.current,Zn(e)?gf(e):(t=Ch(i,a,l),e.stateNode=t,Sl(e))}return qt(e),null;case 5:if(Ce(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Sl(e);else{if(!a){if(e.stateNode===null)throw Error(c(166));return qt(e),null}if(t=pt.current,Zn(e))gf(e);else{switch(i=Hu(zt.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}t[pe]=e,t[ve]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(de(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Sl(e)}}return qt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Sl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(c(166));if(t=zt.current,Zn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=be,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[pe]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||wh(t.nodeValue,l)),t||ma(e)}else t=Hu(t).createTextNode(a),t[pe]=e,e.stateNode=t}return qt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Zn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(c(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[pe]=e}else Kn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),i=!1}else Je!==null&&(Pc(Je),Je=null),i=!0;if(!i)return e.flags&256?(pl(e),e):(pl(e),null)}if(pl(e),e.flags&128)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==i&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Du(e,e.updateQueue),qt(e),null;case 4:return ee(),t===null&&so(e.stateNode.containerInfo),qt(e),null;case 10:return yl(e.type),qt(e),null;case 19:if(_(le),i=e.memoizedState,i===null)return qt(e),null;if(a=(e.flags&128)!==0,u=i.rendering,u===null)if(a)pi(i,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(u=ou(t),u!==null){for(e.flags|=128,pi(i,!1),t=u.updateQueue,e.updateQueue=t,Du(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Pd(l,t),l=l.sibling;return et(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ze()>zu&&(e.flags|=128,a=!0,pi(i,!1),e.lanes=4194304)}else{if(!a)if(t=ou(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Du(e,t),pi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Rt)return qt(e),null}else 2*Ze()-i.renderingStartTime>zu&&l!==536870912&&(e.flags|=128,a=!0,pi(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ze(),e.sibling=null,t=le.current,et(le,a?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return pl(e),Ir(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?l&536870912&&!(e.flags&128)&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),l=e.updateQueue,l!==null&&Du(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&_(ba),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),yl(ae),qt(e),null;case 25:return null}throw Error(c(156,e.tag))}function dg(t,e){switch(Kr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yl(ae),ee(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ce(e),null;case 13:if(pl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));Kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _(le),null;case 4:return ee(),null;case 10:return yl(e.type),null;case 22:case 23:return pl(e),Ir(),t!==null&&_(ba),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return yl(ae),null;case 25:return null;default:return null}}function lh(t,e){switch(Kr(e),e.tag){case 3:yl(ae),ee();break;case 26:case 27:case 5:Ce(e);break;case 4:ee();break;case 13:pl(e);break;case 19:_(le);break;case 10:yl(e.type);break;case 22:case 23:pl(e),Ir(),t!==null&&_(ba);break;case 24:yl(ae)}}var hg={getCacheForType:function(t){var e=me(ae),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},pg=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Ut=null,St=null,wt=0,Nt=0,Re=null,El=!1,pn=!1,Vc=!1,Tl=0,Vt=0,Vl=0,Da=0,Zc=0,Ge=0,mn=0,mi=null,il=null,Kc=!1,Jc=0,zu=1/0,Ru=null,Zl=null,Ou=!1,za=null,gi=0,Wc=0,Fc=null,bi=0,Ic=null;function Oe(){if(Gt&2&&wt!==0)return wt&-wt;if(P.T!==null){var t=un;return t!==0?t:uo()}return Ss()}function ah(){Ge===0&&(Ge=!(wt&536870912)||Rt?bs():536870912);var t=Ne.current;return t!==null&&(t.flags|=32),Ge}function ye(t,e,l){(t===Ut&&Nt===2||t.cancelPendingCommit!==null)&&(gn(t,0),wl(t,wt,Ge,!1)),Bn(t,l),(!(Gt&2)||t!==Ut)&&(t===Ut&&(!(Gt&2)&&(Da|=l),Vt===4&&wl(t,wt,Ge,!1)),ul(t))}function nh(t,e,l){if(Gt&6)throw Error(c(327));var a=!l&&(e&60)===0&&(e&t.expiredLanes)===0||kn(t,e),i=a?bg(t,e):lo(t,e,!0),u=a;do{if(i===0){pn&&!a&&wl(t,e,0,!1);break}else if(i===6)wl(t,e,0,!El);else{if(l=t.current.alternate,u&&!mg(l)){i=lo(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var f=t;i=mi;var p=f.current.memoizedState.isDehydrated;if(p&&(gn(f,s).flags|=256),s=lo(f,s,!1),s!==2){if(Vc&&!p){f.errorRecoveryDisabledLanes|=u,Da|=u,i=4;break t}u=il,il=i,u!==null&&Pc(u)}i=s}if(u=!1,i!==2)continue}}if(i===1){gn(t,0),wl(t,e,0,!0);break}t:{switch(a=t,i){case 0:case 1:throw Error(c(345));case 4:if((e&4194176)===e){wl(a,e,Ge,!El);break t}break;case 2:il=null;break;case 3:case 5:break;default:throw Error(c(329))}if(a.finishedWork=l,a.finishedLanes=e,(e&62914560)===e&&(u=Jc+300-Ze(),10<u)){if(wl(a,e,Ge,!El),qi(a,0)!==0)break t;a.timeoutHandle=Rh(ih.bind(null,a,l,il,Ru,Kc,e,Ge,Da,mn,El,2,-0,0),u);break t}ih(a,l,il,Ru,Kc,e,Ge,Da,mn,El,0,-0,0)}}break}while(!0);ul(t)}function Pc(t){il===null?il=t:il.push.apply(il,t)}function ih(t,e,l,a,i,u,s,f,p,x,j,$,T){var O=e.subtreeFlags;if((O&8192||(O&16785408)===16785408)&&(Ei={stylesheets:null,count:0,unsuspend:Wg},Jd(e),e=Ig(),e!==null)){t.cancelPendingCommit=e(dh.bind(null,t,l,a,i,s,f,p,1,$,T)),wl(t,u,s,!x);return}dh(t,l,a,i,s,f,p,j,$,T)}function mg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],u=i.getSnapshot;i=i.value;try{if(!we(u(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wl(t,e,l,a){e&=~Zc,e&=~Da,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var u=31-Te(i),s=1<<u;a[u]=-1,i&=~s}l!==0&&vs(t,l,e)}function ju(){return Gt&6?!0:(yi(0),!1)}function to(){if(St!==null){if(Nt===0)var t=St.return;else t=St,bl=Sa=null,uc(t),an=null,In=0,t=St;for(;t!==null;)lh(t.alternate,t),t=t.return;St=null}}function gn(t,e){t.finishedWork=null,t.finishedLanes=0;var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,kg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),to(),Ut=t,St=l=Xl(t.current,null),wt=e,Nt=0,Re=null,El=!1,pn=kn(t,e),Vc=!1,mn=Ge=Zc=Da=Vl=Vt=0,il=mi=null,Kc=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-Te(a),u=1<<i;e|=t[i],a&=~u}return Tl=e,tu(),l}function uh(t,e){vt=null,P.H=nl,e===Wn?(e=Af(),Nt=3):e===yf?(e=Af(),Nt=4):Nt=e===vd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Re=e,St===null&&(Vt=1,xu(t,$e(e,t.current)))}function rh(){var t=P.H;return P.H=nl,t===null?nl:t}function ch(){var t=P.A;return P.A=hg,t}function eo(){Vt=4,El||(wt&4194176)!==wt&&Ne.current!==null||(pn=!0),!(Vl&134217727)&&!(Da&134217727)||Ut===null||wl(Ut,wt,Ge,!1)}function lo(t,e,l){var a=Gt;Gt|=2;var i=rh(),u=ch();(Ut!==t||wt!==e)&&(Ru=null,gn(t,e)),e=!1;var s=Vt;t:do try{if(Nt!==0&&St!==null){var f=St,p=Re;switch(Nt){case 8:to(),s=6;break t;case 3:case 2:case 6:Ne.current===null&&(e=!0);var x=Nt;if(Nt=0,Re=null,bn(t,f,p,x),l&&pn){s=0;break t}break;default:x=Nt,Nt=0,Re=null,bn(t,f,p,x)}}gg(),s=Vt;break}catch(j){uh(t,j)}while(!0);return e&&t.shellSuspendCounter++,bl=Sa=null,Gt=a,P.H=i,P.A=u,St===null&&(Ut=null,wt=0,tu()),s}function gg(){for(;St!==null;)oh(St)}function bg(t,e){var l=Gt;Gt|=2;var a=rh(),i=ch();Ut!==t||wt!==e?(Ru=null,zu=Ze()+500,gn(t,e)):pn=kn(t,e);t:do try{if(Nt!==0&&St!==null){e=St;var u=Re;e:switch(Nt){case 1:Nt=0,Re=null,bn(t,e,u,1);break;case 2:if(vf(u)){Nt=0,Re=null,sh(e);break}e=function(){Nt===2&&Ut===t&&(Nt=7),ul(t)},u.then(e,e);break t;case 3:Nt=7;break t;case 4:Nt=5;break t;case 7:vf(u)?(Nt=0,Re=null,sh(e)):(Nt=0,Re=null,bn(t,e,u,7));break;case 5:var s=null;switch(St.tag){case 26:s=St.memoizedState;case 5:case 27:var f=St;if(!s||Nh(s)){Nt=0,Re=null;var p=f.sibling;if(p!==null)St=p;else{var x=f.return;x!==null?(St=x,Cu(x)):St=null}break e}}Nt=0,Re=null,bn(t,e,u,5);break;case 6:Nt=0,Re=null,bn(t,e,u,6);break;case 8:to(),Vt=6;break t;default:throw Error(c(462))}}yg();break}catch(j){uh(t,j)}while(!0);return bl=Sa=null,P.H=a,P.A=i,Gt=l,St!==null?0:(Ut=null,wt=0,tu(),Vt)}function yg(){for(;St!==null&&!ua();)oh(St)}function oh(t){var e=Cd(t.alternate,t,Tl);t.memoizedProps=t.pendingProps,e===null?Cu(t):St=e}function sh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=wd(l,e,e.pendingProps,e.type,void 0,wt);break;case 11:e=wd(l,e,e.pendingProps,e.type.render,e.ref,wt);break;case 5:uc(e);default:lh(l,e),e=St=Pd(e,Tl),e=Cd(l,e,Tl)}t.memoizedProps=t.pendingProps,e===null?Cu(t):St=e}function bn(t,e,l,a){bl=Sa=null,uc(e),an=null,In=0;var i=e.return;try{if(ug(t,i,e,l,wt)){Vt=1,xu(t,$e(l,t.current)),St=null;return}}catch(u){if(i!==null)throw St=i,u;Vt=1,xu(t,$e(l,t.current)),St=null;return}e.flags&32768?(Rt||a===1?t=!0:pn||wt&536870912?t=!1:(El=t=!0,(a===2||a===3||a===6)&&(a=Ne.current,a!==null&&a.tag===13&&(a.flags|=16384))),fh(e,t)):Cu(e)}function Cu(t){var e=t;do{if(e.flags&32768){fh(e,El);return}t=e.return;var l=fg(e.alternate,e,Tl);if(l!==null){St=l;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Vt===0&&(Vt=5)}function fh(t,e){do{var l=dg(t.alternate,t);if(l!==null){l.flags&=32767,St=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){St=t;return}St=t=l}while(t!==null);Vt=6,St=null}function dh(t,e,l,a,i,u,s,f,p,x){var j=P.T,$=B.p;try{B.p=2,P.T=null,vg(t,e,l,a,$,i,u,s,f,p,x)}finally{P.T=j,B.p=$}}function vg(t,e,l,a,i,u,s,f){do yn();while(za!==null);if(Gt&6)throw Error(c(327));var p=t.finishedWork;if(a=t.finishedLanes,p===null)return null;if(t.finishedWork=null,t.finishedLanes=0,p===t.current)throw Error(c(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var x=p.lanes|p.childLanes;if(x|=Xr,F0(t,a,x,u,s,f),t===Ut&&(St=Ut=null,wt=0),!(p.subtreeFlags&10256)&&!(p.flags&10256)||Ou||(Ou=!0,Wc=x,Fc=l,Eg(Ni,function(){return yn(),null})),l=(p.flags&15990)!==0,p.subtreeFlags&15990||l?(l=P.T,P.T=null,u=B.p,B.p=2,s=Gt,Gt|=4,cg(t,p),Vd(p,t),Gm(mo,t.containerInfo),Gu=!!po,mo=po=null,t.current=p,qd(t,p.alternate,p),Ui(),Gt=s,B.p=u,P.T=l):t.current=p,Ou?(Ou=!1,za=t,gi=a):hh(t,x),x=t.pendingLanes,x===0&&(Zl=null),V0(p.stateNode),ul(t),e!==null)for(i=t.onRecoverableError,p=0;p<e.length;p++)x=e[p],i(x.value,{componentStack:x.stack});return gi&3&&yn(),x=t.pendingLanes,a&4194218&&x&42?t===Ic?bi++:(bi=0,Ic=t):bi=0,yi(0),null}function hh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ti(e)))}function yn(){if(za!==null){var t=za,e=Wc;Wc=0;var l=As(gi),a=P.T,i=B.p;try{if(B.p=32>l?32:l,P.T=null,za===null)var u=!1;else{l=Fc,Fc=null;var s=za,f=gi;if(za=null,gi=0,Gt&6)throw Error(c(331));var p=Gt;if(Gt|=4,Fd(s.current),Kd(s,s.current,f,l),Gt=p,yi(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(_n,s)}catch{}u=!0}return u}finally{B.p=i,P.T=a,hh(t,e)}}return!1}function ph(t,e,l){e=$e(l,e),e=xc(t.stateNode,e,2),t=Ql(t,e,2),t!==null&&(Bn(t,2),ul(t))}function Ht(t,e,l){if(t.tag===3)ph(t,t,l);else for(;e!==null;){if(e.tag===3){ph(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Zl===null||!Zl.has(a))){t=$e(l,t),l=bd(2),a=Ql(e,l,2),a!==null&&(yd(l,a,e,t),Bn(a,2),ul(a));break}}e=e.return}}function ao(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new pg;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(Vc=!0,i.add(l),t=xg.bind(null,t,e,l),e.then(t,t))}function xg(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Ut===t&&(wt&l)===l&&(Vt===4||Vt===3&&(wt&62914560)===wt&&300>Ze()-Jc?!(Gt&2)&&gn(t,0):Zc|=l,mn===wt&&(mn=0)),ul(t)}function mh(t,e){e===0&&(e=ys()),t=_l(t,e),t!==null&&(Bn(t,e),ul(t))}function Ag(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),mh(t,l)}function Sg(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(e),mh(t,l)}function Eg(t,e){return na(t,e)}var Mu=null,vn=null,no=!1,_u=!1,io=!1,Ra=0;function ul(t){t!==vn&&t.next===null&&(vn===null?Mu=vn=t:vn=vn.next=t),_u=!0,no||(no=!0,wg(Tg))}function yi(t,e){if(!io&&_u){io=!0;do for(var l=!1,a=Mu;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var u=0;else{var s=a.suspendedLanes,f=a.pingedLanes;u=(1<<31-Te(42|t)+1)-1,u&=i&~(s&~f),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(l=!0,yh(a,u))}else u=wt,u=qi(a,a===Ut?u:0),!(u&3)||kn(a,u)||(l=!0,yh(a,u));a=a.next}while(l);io=!1}}function Tg(){_u=no=!1;var t=0;Ra!==0&&(_g()&&(t=Ra),Ra=0);for(var e=Ze(),l=null,a=Mu;a!==null;){var i=a.next,u=gh(a,e);u===0?(a.next=null,l===null?Mu=i:l.next=i,i===null&&(vn=l)):(l=a,(t!==0||u&3)&&(_u=!0)),a=i}yi(t)}function gh(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var s=31-Te(u),f=1<<s,p=i[s];p===-1?(!(f&l)||f&a)&&(i[s]=W0(f,e)):p<=e&&(t.expiredLanes|=f),u&=~f}if(e=Ut,l=wt,l=qi(t,t===e?l:0),a=t.callbackNode,l===0||t===e&&Nt===2||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ia(a),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||kn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ia(a),As(l)){case 2:case 8:l=ms;break;case 32:l=Ni;break;case 268435456:l=gs;break;default:l=Ni}return a=bh.bind(null,t),l=na(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ia(a),t.callbackPriority=2,t.callbackNode=null,2}function bh(t,e){var l=t.callbackNode;if(yn()&&t.callbackNode!==l)return null;var a=wt;return a=qi(t,t===Ut?a:0),a===0?null:(nh(t,a,e),gh(t,Ze()),t.callbackNode!=null&&t.callbackNode===l?bh.bind(null,t):null)}function yh(t,e){if(yn())return null;nh(t,e,!0)}function wg(t){Bg(function(){Gt&6?na(ps,t):t()})}function uo(){return Ra===0&&(Ra=bs()),Ra}function vh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zi(""+t)}function xh(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Dg(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var u=vh((i[ve]||null).action),s=a.submitter;s&&(e=(e=s[ve]||null)?vh(e.formAction):s.getAttribute("formAction"),e!==null&&(u=e,s=null));var f=new Fi("action","action",null,a,i);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ra!==0){var p=s?xh(i,s):new FormData(i);mc(l,{pending:!0,data:p,method:i.method,action:u},null,p)}}else typeof u=="function"&&(f.preventDefault(),p=s?xh(i,s):new FormData(i),mc(l,{pending:!0,data:p,method:i.method,action:u},u,p))},currentTarget:i}]})}}for(var ro=0;ro<df.length;ro++){var co=df[ro],zg=co.toLowerCase(),Rg=co[0].toUpperCase()+co.slice(1);Ke(zg,"on"+Rg)}Ke(rf,"onAnimationEnd"),Ke(cf,"onAnimationIteration"),Ke(of,"onAnimationStart"),Ke("dblclick","onDoubleClick"),Ke("focusin","onFocus"),Ke("focusout","onBlur"),Ke(Xm,"onTransitionRun"),Ke(Vm,"onTransitionStart"),Ke(Zm,"onTransitionCancel"),Ke(sf,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function Ah(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var s=a.length-1;0<=s;s--){var f=a[s],p=f.instance,x=f.currentTarget;if(f=f.listener,p!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=x;try{u(i)}catch(j){vu(j)}i.currentTarget=null,u=p}else for(s=0;s<a.length;s++){if(f=a[s],p=f.instance,x=f.currentTarget,f=f.listener,p!==u&&i.isPropagationStopped())break t;u=f,i.currentTarget=x;try{u(i)}catch(j){vu(j)}i.currentTarget=null,u=p}}}}function Tt(t,e){var l=e[Tr];l===void 0&&(l=e[Tr]=new Set);var a=t+"__bubble";l.has(a)||(Sh(e,t,2,!1),l.add(a))}function oo(t,e,l){var a=0;e&&(a|=4),Sh(l,t,a,e)}var ku="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[ku]){t[ku]=!0,Ts.forEach(function(l){l!=="selectionchange"&&(Og.has(l)||oo(l,!1,t),oo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ku]||(e[ku]=!0,oo("selectionchange",!1,e))}}function Sh(t,e,l,a){switch(Xh(e)){case 2:var i=eb;break;case 8:i=lb;break;default:i=To}l=i.bind(null,e,l,t),i=void 0,!Mr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function fo(t,e,l,a,i){var u=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var p=s.tag;if((p===3||p===4)&&(p=s.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;s=s.return}for(;f!==null;){if(s=ca(f),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){a=u=s;continue t}f=f.parentNode}}a=a.return}$s(function(){var x=u,j=jr(l),$=[];t:{var T=ff.get(t);if(T!==void 0){var O=Fi,ut=t;switch(t){case"keypress":if(Ji(l)===0)break t;case"keydown":case"keyup":O=Sm;break;case"focusin":ut="focus",O=$r;break;case"focusout":ut="blur",O=$r;break;case"beforeblur":case"afterblur":O=$r;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=wm;break;case rf:case cf:case of:O=hm;break;case sf:O=zm;break;case"scroll":case"scrollend":O=cm;break;case"wheel":O=Om;break;case"copy":case"cut":case"paste":O=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Qs;break;case"toggle":case"beforetoggle":O=Cm}var gt=(e&4)!==0,Zt=!gt&&(t==="scroll"||t==="scrollend"),S=gt?T!==null?T+"Capture":null:T;gt=[];for(var v=x,E;v!==null;){var M=v;if(E=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||E===null||S===null||(M=Un(v,S),M!=null&&gt.push(xi(v,M,E))),Zt)break;v=v.return}0<gt.length&&(T=new O(T,ut,null,l,j),$.push({event:T,listeners:gt}))}}if(!(e&7)){t:{if(T=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",T&&l!==Or&&(ut=l.relatedTarget||l.fromElement)&&(ca(ut)||ut[qa]))break t;if((O||T)&&(T=j.window===j?j:(T=j.ownerDocument)?T.defaultView||T.parentWindow:window,O?(ut=l.relatedTarget||l.toElement,O=x,ut=ut?ca(ut):null,ut!==null&&(Zt=Y(ut),gt=ut.tag,ut!==Zt||gt!==5&&gt!==27&&gt!==6)&&(ut=null)):(O=null,ut=x),O!==ut)){if(gt=Ns,M="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(gt=Qs,M="onPointerLeave",S="onPointerEnter",v="pointer"),Zt=O==null?T:Hn(O),E=ut==null?T:Hn(ut),T=new gt(M,v+"leave",O,l,j),T.target=Zt,T.relatedTarget=E,M=null,ca(j)===x&&(gt=new gt(S,v+"enter",ut,l,j),gt.target=E,gt.relatedTarget=Zt,M=gt),Zt=M,O&&ut)e:{for(gt=O,S=ut,v=0,E=gt;E;E=xn(E))v++;for(E=0,M=S;M;M=xn(M))E++;for(;0<v-E;)gt=xn(gt),v--;for(;0<E-v;)S=xn(S),E--;for(;v--;){if(gt===S||S!==null&&gt===S.alternate)break e;gt=xn(gt),S=xn(S)}gt=null}else gt=null;O!==null&&Eh($,T,O,gt,!1),ut!==null&&Zt!==null&&Eh($,Zt,ut,gt,!0)}}t:{if(T=x?Hn(x):window,O=T.nodeName&&T.nodeName.toLowerCase(),O==="select"||O==="input"&&T.type==="file")var nt=Js;else if(Zs(T))if(Ws)nt=Qm;else{nt=Nm;var At=Um}else O=T.nodeName,!O||O.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?x&&Rr(x.elementType)&&(nt=Js):nt=Lm;if(nt&&(nt=nt(t,x))){Ks($,nt,l,j);break t}At&&At(t,T,x),t==="focusout"&&x&&T.type==="number"&&x.memoizedProps.value!=null&&zr(T,"number",T.value)}switch(At=x?Hn(x):window,t){case"focusin":(Zs(At)||At.contentEditable==="true")&&(Fa=At,qr=x,Vn=null);break;case"focusout":Vn=qr=Fa=null;break;case"mousedown":Gr=!0;break;case"contextmenu":case"mouseup":case"dragend":Gr=!1,nf($,l,j);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":nf($,l,j)}var ct;if(Ur)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Wa?Xs(t,l)&&(dt="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(dt="onCompositionStart");dt&&(qs&&l.locale!=="ko"&&(Wa||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Wa&&(ct=Hs()):(Ml=j,_r="value"in Ml?Ml.value:Ml.textContent,Wa=!0)),At=Bu(x,dt),0<At.length&&(dt=new Ls(dt,t,null,l,j),$.push({event:dt,listeners:At}),ct?dt.data=ct:(ct=Vs(l),ct!==null&&(dt.data=ct)))),(ct=_m?km(t,l):Bm(t,l))&&(dt=Bu(x,"onBeforeInput"),0<dt.length&&(At=new Ls("onBeforeInput","beforeinput",null,l,j),$.push({event:At,listeners:dt}),At.data=ct)),Dg($,t,x,l,j)}Ah($,e)})}function xi(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Bu(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,u=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=Un(t,l),i!=null&&a.unshift(xi(t,i,u)),i=Un(t,e),i!=null&&a.push(xi(t,i,u))),t=t.return}return a}function xn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Eh(t,e,l,a,i){for(var u=e._reactName,s=[];l!==null&&l!==a;){var f=l,p=f.alternate,x=f.stateNode;if(f=f.tag,p!==null&&p===a)break;f!==5&&f!==26&&f!==27||x===null||(p=x,i?(x=Un(l,u),x!=null&&s.unshift(xi(l,x,p))):i||(x=Un(l,u),x!=null&&s.push(xi(l,x,p)))),l=l.return}s.length!==0&&t.push({event:e,listeners:s})}var jg=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function Th(t){return(typeof t=="string"?t:""+t).replace(jg,`
`).replace(Cg,"")}function wh(t,e){return e=Th(e),Th(t)===e}function $u(){}function Bt(t,e,l,a,i,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Za(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Za(t,""+a);break;case"className":Yi(t,"class",a);break;case"tabIndex":Yi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(t,l,a);break;case"style":ks(t,a,u);break;case"data":if(e!=="object"){Yi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Zi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&Bt(t,e,"name",i.name,i,null),Bt(t,e,"formEncType",i.formEncType,i,null),Bt(t,e,"formMethod",i.formMethod,i,null),Bt(t,e,"formTarget",i.formTarget,i,null)):(Bt(t,e,"encType",i.encType,i,null),Bt(t,e,"method",i.method,i,null),Bt(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Zi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=$u);break;case"onScroll":a!=null&&Tt("scroll",t);break;case"onScrollEnd":a!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Zi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Gi(t,"popover",a);break;case"xlinkActuate":fl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":fl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":fl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":fl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":fl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":fl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":fl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":fl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":fl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Gi(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=um.get(l)||l,Gi(t,l,a))}}function ho(t,e,l,a,i,u){switch(l){case"style":ks(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Za(t,a):(typeof a=="number"||typeof a=="bigint")&&Za(t,""+a);break;case"onScroll":a!=null&&Tt("scroll",t);break;case"onScrollEnd":a!=null&&Tt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=$u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ws.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),u=t[ve]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Gi(t,l,a)}}}function de(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var a=!1,i=!1,u;for(u in l)if(l.hasOwnProperty(u)){var s=l[u];if(s!=null)switch(u){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:Bt(t,e,u,s,l,null)}}i&&Bt(t,e,"srcSet",l.srcSet,l,null),a&&Bt(t,e,"src",l.src,l,null);return;case"input":Tt("invalid",t);var f=u=s=i=null,p=null,x=null;for(a in l)if(l.hasOwnProperty(a)){var j=l[a];if(j!=null)switch(a){case"name":i=j;break;case"type":s=j;break;case"checked":p=j;break;case"defaultChecked":x=j;break;case"value":u=j;break;case"defaultValue":f=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,e));break;default:Bt(t,e,a,j,l,null)}}js(t,u,f,p,x,s,i,!1),Xi(t);return;case"select":Tt("invalid",t),a=s=u=null;for(i in l)if(l.hasOwnProperty(i)&&(f=l[i],f!=null))switch(i){case"value":u=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:Bt(t,e,i,f,l,null)}e=u,l=s,t.multiple=!!a,e!=null?Va(t,!!a,e,!1):l!=null&&Va(t,!!a,l,!0);return;case"textarea":Tt("invalid",t),u=i=a=null;for(s in l)if(l.hasOwnProperty(s)&&(f=l[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":i=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:Bt(t,e,s,f,l,null)}Ms(t,a,i,u),Xi(t);return;case"option":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Bt(t,e,p,a,l,null)}return;case"dialog":Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(a=0;a<vi.length;a++)Tt(vi[a],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(a=l[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:Bt(t,e,x,a,l,null)}return;default:if(Rr(e)){for(j in l)l.hasOwnProperty(j)&&(a=l[j],a!==void 0&&ho(t,e,j,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&Bt(t,e,f,a,l,null))}function Mg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,s=null,f=null,p=null,x=null,j=null;for(O in l){var $=l[O];if(l.hasOwnProperty(O)&&$!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":p=$;default:a.hasOwnProperty(O)||Bt(t,e,O,null,a,$)}}for(var T in a){var O=a[T];if($=l[T],a.hasOwnProperty(T)&&(O!=null||$!=null))switch(T){case"type":u=O;break;case"name":i=O;break;case"checked":x=O;break;case"defaultChecked":j=O;break;case"value":s=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,e));break;default:O!==$&&Bt(t,e,T,O,a,$)}}Dr(t,s,f,p,x,j,u,i);return;case"select":O=s=f=T=null;for(u in l)if(p=l[u],l.hasOwnProperty(u)&&p!=null)switch(u){case"value":break;case"multiple":O=p;default:a.hasOwnProperty(u)||Bt(t,e,u,null,a,p)}for(i in a)if(u=a[i],p=l[i],a.hasOwnProperty(i)&&(u!=null||p!=null))switch(i){case"value":T=u;break;case"defaultValue":f=u;break;case"multiple":s=u;default:u!==p&&Bt(t,e,i,u,a,p)}e=f,l=s,a=O,T!=null?Va(t,!!l,T,!1):!!a!=!!l&&(e!=null?Va(t,!!l,e,!0):Va(t,!!l,l?[]:"",!1));return;case"textarea":O=T=null;for(f in l)if(i=l[f],l.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Bt(t,e,f,null,a,i)}for(s in a)if(i=a[s],u=l[s],a.hasOwnProperty(s)&&(i!=null||u!=null))switch(s){case"value":T=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==u&&Bt(t,e,s,i,a,u)}Cs(t,T,O);return;case"option":for(var ut in l)if(T=l[ut],l.hasOwnProperty(ut)&&T!=null&&!a.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:Bt(t,e,ut,null,a,T)}for(p in a)if(T=a[p],O=l[p],a.hasOwnProperty(p)&&T!==O&&(T!=null||O!=null))switch(p){case"selected":t.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Bt(t,e,p,T,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in l)T=l[gt],l.hasOwnProperty(gt)&&T!=null&&!a.hasOwnProperty(gt)&&Bt(t,e,gt,null,a,T);for(x in a)if(T=a[x],O=l[x],a.hasOwnProperty(x)&&T!==O&&(T!=null||O!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,e));break;default:Bt(t,e,x,T,a,O)}return;default:if(Rr(e)){for(var Zt in l)T=l[Zt],l.hasOwnProperty(Zt)&&T!==void 0&&!a.hasOwnProperty(Zt)&&ho(t,e,Zt,void 0,a,T);for(j in a)T=a[j],O=l[j],!a.hasOwnProperty(j)||T===O||T===void 0&&O===void 0||ho(t,e,j,T,a,O);return}}for(var S in l)T=l[S],l.hasOwnProperty(S)&&T!=null&&!a.hasOwnProperty(S)&&Bt(t,e,S,null,a,T);for($ in a)T=a[$],O=l[$],!a.hasOwnProperty($)||T===O||T==null&&O==null||Bt(t,e,$,T,a,O)}var po=null,mo=null;function Hu(t){return t.nodeType===9?t:t.ownerDocument}function Dh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function go(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bo=null;function _g(){var t=window.event;return t&&t.type==="popstate"?t===bo?!1:(bo=t,!0):(bo=null,!1)}var Rh=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(t){return Oh.resolve(null).then(t).catch($g)}:Rh;function $g(t){setTimeout(function(){throw t})}function yo(t,e){var l=e,a=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(a===0){t.removeChild(i),Ri(e);return}a--}else l!=="$"&&l!=="$?"&&l!=="$!"||a++;l=i}while(l);Ri(e)}function vo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":vo(l),wr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Hg(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[$n])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Fe(t.nextSibling),t===null)break}return null}function Ug(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Fe(t.nextSibling),t===null))return null;return t}function Fe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Ch(t,e,l){switch(e=Hu(l),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}var Ye=new Map,Mh=new Set;function Uu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Dl=B.d;B.d={f:Ng,r:Lg,D:Qg,C:qg,L:Gg,m:Yg,X:Vg,S:Xg,M:Zg};function Ng(){var t=Dl.f(),e=ju();return t||e}function Lg(t){var e=Ga(t);e!==null&&e.tag===5&&e.type==="form"?id(e):Dl.r(t)}var An=typeof document>"u"?null:document;function _h(t,e,l){var a=An;if(a&&typeof e=="string"&&e){var i=ke(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Mh.has(i)||(Mh.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),de(e,"link",t),ne(e),a.head.appendChild(e)))}}function Qg(t){Dl.D(t),_h("dns-prefetch",t,null)}function qg(t,e){Dl.C(t,e),_h("preconnect",t,e)}function Gg(t,e,l){Dl.L(t,e,l);var a=An;if(a&&t&&e){var i='link[rel="preload"][as="'+ke(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+ke(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+ke(l.imageSizes)+'"]')):i+='[href="'+ke(t)+'"]';var u=i;switch(e){case"style":u=Sn(t);break;case"script":u=En(t)}Ye.has(u)||(t=mt({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ye.set(u,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Ai(u))||e==="script"&&a.querySelector(Si(u))||(e=a.createElement("link"),de(e,"link",t),ne(e),a.head.appendChild(e)))}}function Yg(t,e){Dl.m(t,e);var l=An;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ke(a)+'"][href="'+ke(t)+'"]',u=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=En(t)}if(!Ye.has(u)&&(t=mt({rel:"modulepreload",href:t},e),Ye.set(u,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Si(u)))return}a=l.createElement("link"),de(a,"link",t),ne(a),l.head.appendChild(a)}}}function Xg(t,e,l){Dl.S(t,e,l);var a=An;if(a&&t){var i=Ya(a).hoistableStyles,u=Sn(t);e=e||"default";var s=i.get(u);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(Ai(u)))f.loading=5;else{t=mt({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ye.get(u))&&xo(t,l);var p=s=a.createElement("link");ne(p),de(p,"link",t),p._p=new Promise(function(x,j){p.onload=x,p.onerror=j}),p.addEventListener("load",function(){f.loading|=1}),p.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Nu(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:f},i.set(u,s)}}}function Vg(t,e){Dl.X(t,e);var l=An;if(l&&t){var a=Ya(l).hoistableScripts,i=En(t),u=a.get(i);u||(u=l.querySelector(Si(i)),u||(t=mt({src:t,async:!0},e),(e=Ye.get(i))&&Ao(t,e),u=l.createElement("script"),ne(u),de(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function Zg(t,e){Dl.M(t,e);var l=An;if(l&&t){var a=Ya(l).hoistableScripts,i=En(t),u=a.get(i);u||(u=l.querySelector(Si(i)),u||(t=mt({src:t,async:!0,type:"module"},e),(e=Ye.get(i))&&Ao(t,e),u=l.createElement("script"),ne(u),de(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(i,u))}}function kh(t,e,l,a){var i=(i=zt.current)?Uu(i):null;if(!i)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Sn(l.href),l=Ya(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Sn(l.href);var u=Ya(i).hoistableStyles,s=u.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,s),(u=i.querySelector(Ai(t)))&&!u._p&&(s.instance=u,s.state.loading=5),Ye.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ye.set(t,l),u||Kg(i,t,l,s.state))),e&&a===null)throw Error(c(528,""));return s}if(e&&a!==null)throw Error(c(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=En(l),l=Ya(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Sn(t){return'href="'+ke(t)+'"'}function Ai(t){return'link[rel="stylesheet"]['+t+"]"}function Bh(t){return mt({},t,{"data-precedence":t.precedence,precedence:null})}function Kg(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),de(e,"link",l),ne(e),t.head.appendChild(e))}function En(t){return'[src="'+ke(t)+'"]'}function Si(t){return"script[async]"+t}function $h(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ke(l.href)+'"]');if(a)return e.instance=a,ne(a),a;var i=mt({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ne(a),de(a,"style",i),Nu(a,l.precedence,t),e.instance=a;case"stylesheet":i=Sn(l.href);var u=t.querySelector(Ai(i));if(u)return e.state.loading|=4,e.instance=u,ne(u),u;a=Bh(l),(i=Ye.get(i))&&xo(a,i),u=(t.ownerDocument||t).createElement("link"),ne(u);var s=u;return s._p=new Promise(function(f,p){s.onload=f,s.onerror=p}),de(u,"link",a),e.state.loading|=4,Nu(u,l.precedence,t),e.instance=u;case"script":return u=En(l.src),(i=t.querySelector(Si(u)))?(e.instance=i,ne(i),i):(a=l,(i=Ye.get(u))&&(a=mt({},l),Ao(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),ne(i),de(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,Nu(a,l.precedence,t));return e.instance}function Nu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,u=i,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===e)u=f;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function xo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ao(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Lu=null;function Hh(t,e,l){if(Lu===null){var a=new Map,i=Lu=new Map;i.set(l,a)}else i=Lu,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var u=l[i];if(!(u[$n]||u[pe]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var s=u.getAttribute(e)||"";s=t+s;var f=a.get(s);f?f.push(u):a.set(s,[u])}}return a}function Uh(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Jg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Nh(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Ei=null;function Wg(){}function Fg(t,e,l){if(Ei===null)throw Error(c(475));var a=Ei;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var i=Sn(l.href),u=t.querySelector(Ai(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Qu.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=u,ne(u);return}u=t.ownerDocument||t,l=Bh(l),(i=Ye.get(i))&&xo(l,i),u=u.createElement("link"),ne(u);var s=u;s._p=new Promise(function(f,p){s.onload=f,s.onerror=p}),de(u,"link",l),e.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(a.count++,e=Qu.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Ig(){if(Ei===null)throw Error(c(475));var t=Ei;return t.stylesheets&&t.count===0&&So(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&So(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Qu(){if(this.count--,this.count===0){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var qu=null;function So(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qu=new Map,e.forEach(Pg,t),qu=null,Qu.call(t))}function Pg(t,e){if(!(e.state.loading&4)){var l=qu.get(t);if(l)var a=l.get(null);else{l=new Map,qu.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var s=i[u];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(l.set(s.dataset.precedence,s),a=s)}a&&l.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),u=l.get(s)||a,u===a&&l.set(null,i),l.set(s,i),this.count++,a=Qu.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ti={$$typeof:q,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function tb(t,e,l,a,i,u,s,f){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Er(0),this.hiddenUpdates=Er(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Lh(t,e,l,a,i,u,s,f,p,x,j,$){return t=new tb(t,e,l,s,f,p,x,$),e=1,u===!0&&(e|=24),u=qe(3,null,null,e),t.current=u,u.stateNode=t,e=Pr(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},_c(u),t}function Qh(t){return t?(t=tn,t):tn}function qh(t,e,l,a,i,u){i=Qh(i),a.context===null?a.context=i:a.pendingContext=i,a=Ll(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=Ql(t,a,e),l!==null&&(ye(l,t,e),ri(l,t,e))}function Gh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Eo(t,e){Gh(t,e),(t=t.alternate)&&Gh(t,e)}function Yh(t){if(t.tag===13){var e=_l(t,67108864);e!==null&&ye(e,t,67108864),Eo(t,67108864)}}var Gu=!0;function eb(t,e,l,a){var i=P.T;P.T=null;var u=B.p;try{B.p=2,To(t,e,l,a)}finally{B.p=u,P.T=i}}function lb(t,e,l,a){var i=P.T;P.T=null;var u=B.p;try{B.p=8,To(t,e,l,a)}finally{B.p=u,P.T=i}}function To(t,e,l,a){if(Gu){var i=wo(a);if(i===null)fo(t,e,a,Yu,l),Vh(t,a);else if(nb(i,t,e,l,a))a.stopPropagation();else if(Vh(t,a),e&4&&-1<ab.indexOf(t)){for(;i!==null;){var u=Ga(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var s=ra(u.pendingLanes);if(s!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var p=1<<31-Te(s);f.entanglements[1]|=p,s&=~p}ul(u),!(Gt&6)&&(zu=Ze()+500,yi(0))}}break;case 13:f=_l(u,2),f!==null&&ye(f,u,2),ju(),Eo(u,2)}if(u=wo(a),u===null&&fo(t,e,a,Yu,l),u===i)break;i=u}i!==null&&a.stopPropagation()}else fo(t,e,a,null,l)}}function wo(t){return t=jr(t),Do(t)}var Yu=null;function Do(t){if(Yu=null,t=ca(t),t!==null){var e=Y(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=ot(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Yu=t,null}function Xh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q0()){case ps:return 2;case ms:return 8;case Ni:case G0:return 32;case gs:return 268435456;default:return 32}default:return 32}}var zo=!1,Kl=null,Jl=null,Wl=null,wi=new Map,Di=new Map,Fl=[],ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":Kl=null;break;case"dragenter":case"dragleave":Jl=null;break;case"mouseover":case"mouseout":Wl=null;break;case"pointerover":case"pointerout":wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(e.pointerId)}}function zi(t,e,l,a,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[i]},e!==null&&(e=Ga(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nb(t,e,l,a,i){switch(e){case"focusin":return Kl=zi(Kl,t,e,l,a,i),!0;case"dragenter":return Jl=zi(Jl,t,e,l,a,i),!0;case"mouseover":return Wl=zi(Wl,t,e,l,a,i),!0;case"pointerover":var u=i.pointerId;return wi.set(u,zi(wi.get(u)||null,t,e,l,a,i)),!0;case"gotpointercapture":return u=i.pointerId,Di.set(u,zi(Di.get(u)||null,t,e,l,a,i)),!0}return!1}function Zh(t){var e=ca(t.target);if(e!==null){var l=Y(e);if(l!==null){if(e=l.tag,e===13){if(e=ot(l),e!==null){t.blockedOn=e,I0(t.priority,function(){if(l.tag===13){var a=Oe(),i=_l(l,a);i!==null&&ye(i,l,a),Eo(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=wo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Or=a,l.target.dispatchEvent(a),Or=null}else return e=Ga(l),e!==null&&Yh(e),t.blockedOn=l,!1;e.shift()}return!0}function Kh(t,e,l){Xu(t)&&l.delete(e)}function ib(){zo=!1,Kl!==null&&Xu(Kl)&&(Kl=null),Jl!==null&&Xu(Jl)&&(Jl=null),Wl!==null&&Xu(Wl)&&(Wl=null),wi.forEach(Kh),Di.forEach(Kh)}function Vu(t,e){t.blockedOn===e&&(t.blockedOn=null,zo||(zo=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ib)))}var Zu=null;function Jh(t){Zu!==t&&(Zu=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Zu===t&&(Zu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(Do(a||l)===null)continue;break}var u=Ga(l);u!==null&&(t.splice(e,3),e-=3,mc(u,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Ri(t){function e(p){return Vu(p,t)}Kl!==null&&Vu(Kl,t),Jl!==null&&Vu(Jl,t),Wl!==null&&Vu(Wl,t),wi.forEach(e),Di.forEach(e);for(var l=0;l<Fl.length;l++){var a=Fl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Fl.length&&(l=Fl[0],l.blockedOn===null);)Zh(l),l.blockedOn===null&&Fl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],u=l[a+1],s=i[ve]||null;if(typeof u=="function")s||Jh(l);else if(s){var f=null;if(u&&u.hasAttribute("formAction")){if(i=u,s=u[ve]||null)f=s.formAction;else if(Do(i)!==null)continue}else f=s.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),Jh(l)}}}function Ro(t){this._internalRoot=t}Ku.prototype.render=Ro.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var l=e.current,a=Oe();qh(l,a,t,e,null,null)},Ku.prototype.unmount=Ro.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&yn(),qh(t.current,2,null,t,null,null),ju(),e[qa]=null}};function Ku(t){this._internalRoot=t}Ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ss();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Fl.length&&e!==0&&e<Fl[l].priority;l++);Fl.splice(l,0,t),l===0&&Zh(t)}};var Wh=r.version;if(Wh!=="19.0.0")throw Error(c(527,Wh,"19.0.0"));B.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=k(e),t=t!==null?I(t):null,t=t===null?null:t.stateNode,t};var ub={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:P,findFiberByHostInstance:ca,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{_n=Ju.inject(ub),Ee=Ju}catch{}}return ji.createRoot=function(t,e){if(!d(t))throw Error(c(299));var l=!1,a="",i=hd,u=pd,s=md,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(f=e.unstable_transitionCallbacks)),e=Lh(t,1,!1,null,null,l,a,i,u,s,f,null),t[qa]=e.current,so(t.nodeType===8?t.parentNode:t),new Ro(e)},ji.hydrateRoot=function(t,e,l){if(!d(t))throw Error(c(299));var a=!1,i="",u=hd,s=pd,f=md,p=null,x=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(p=l.unstable_transitionCallbacks),l.formState!==void 0&&(x=l.formState)),e=Lh(t,1,!0,e,l??null,a,i,u,s,f,p,x),e.context=Qh(null),l=e.current,a=Oe(),i=Ll(a),i.callback=null,Ql(l,i,a),e.current.lanes=a,Bn(e,a),ul(e),t[qa]=e.current,so(t),new Ku(e)},ji.version="19.0.0",ji}var up;function mb(){if(up)return Co.exports;up=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Co.exports=pb(),Co.exports}var gb=mb(),$p=`
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

`,oe=function(){return oe=Object.assign||function(r){for(var o,c=1,d=arguments.length;c<d;c++){o=arguments[c];for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(r[g]=o[g])}return r},oe.apply(this,arguments)};function ki(n,r,o){if(o||arguments.length===2)for(var c=0,d=r.length,g;c<d;c++)(g||!(c in r))&&(g||(g=Array.prototype.slice.call(r,0,c)),g[c]=r[c]);return n.concat(g||Array.prototype.slice.call(r))}var Lt="-ms-",_i="-moz-",Mt="-webkit-",Hp="comm",mr="rule",ls="decl",bb="@import",Up="@keyframes",yb="@layer",Np=Math.abs,as=String.fromCharCode,Qo=Object.assign;function vb(n,r){return ce(n,0)^45?(((r<<2^ce(n,0))<<2^ce(n,1))<<2^ce(n,2))<<2^ce(n,3):0}function Lp(n){return n.trim()}function Rl(n,r){return(n=r.exec(n))?n[0]:n}function yt(n,r,o){return n.replace(r,o)}function er(n,r,o){return n.indexOf(r,o)}function ce(n,r){return n.charCodeAt(r)|0}function zn(n,r,o){return n.slice(r,o)}function rl(n){return n.length}function Qp(n){return n.length}function Ci(n,r){return r.push(n),n}function xb(n,r){return n.map(r).join("")}function rp(n,r){return n.filter(function(o){return!Rl(o,r)})}var gr=1,Rn=1,qp=0,Ve=0,te=0,Mn="";function br(n,r,o,c,d,g,y,w){return{value:n,root:r,parent:o,type:c,props:d,children:g,line:gr,column:Rn,length:y,return:"",siblings:w}}function Pl(n,r){return Qo(br("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function Tn(n){for(;n.root;)n=Pl(n.root,{children:[n]});Ci(n,n.siblings)}function Ab(){return te}function Sb(){return te=Ve>0?ce(Mn,--Ve):0,Rn--,te===10&&(Rn=1,gr--),te}function Pe(){return te=Ve<qp?ce(Mn,Ve++):0,Rn++,te===10&&(Rn=1,gr++),te}function Ma(){return ce(Mn,Ve)}function lr(){return Ve}function yr(n,r){return zn(Mn,n,r)}function qo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Eb(n){return gr=Rn=1,qp=rl(Mn=n),Ve=0,[]}function Tb(n){return Mn="",n}function Bo(n){return Lp(yr(Ve-1,Go(n===91?n+2:n===40?n+1:n)))}function wb(n){for(;(te=Ma())&&te<33;)Pe();return qo(n)>2||qo(te)>3?"":" "}function Db(n,r){for(;--r&&Pe()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return yr(n,lr()+(r<6&&Ma()==32&&Pe()==32))}function Go(n){for(;Pe();)switch(te){case n:return Ve;case 34:case 39:n!==34&&n!==39&&Go(te);break;case 40:n===41&&Go(n);break;case 92:Pe();break}return Ve}function zb(n,r){for(;Pe()&&n+te!==57;)if(n+te===84&&Ma()===47)break;return"/*"+yr(r,Ve-1)+"*"+as(n===47?n:Pe())}function Rb(n){for(;!qo(Ma());)Pe();return yr(n,Ve)}function Ob(n){return Tb(ar("",null,null,null,[""],n=Eb(n),0,[0],n))}function ar(n,r,o,c,d,g,y,w,A){for(var b=0,C=0,z=y,H=0,q=0,J=0,lt=1,W=1,V=1,Q=0,X="",it=d,G=g,Z=c,at=X;W;)switch(J=Q,Q=Pe()){case 40:if(J!=108&&ce(at,z-1)==58){er(at+=yt(Bo(Q),"&","&\f"),"&\f",Np(b?w[b-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:at+=Bo(Q);break;case 9:case 10:case 13:case 32:at+=wb(J);break;case 92:at+=Db(lr()-1,7);continue;case 47:switch(Ma()){case 42:case 47:Ci(jb(zb(Pe(),lr()),r,o,A),A);break;default:at+="/"}break;case 123*lt:w[b++]=rl(at)*V;case 125*lt:case 59:case 0:switch(Q){case 0:case 125:W=0;case 59+C:V==-1&&(at=yt(at,/\f/g,"")),q>0&&rl(at)-z&&Ci(q>32?op(at+";",c,o,z-1,A):op(yt(at," ","")+";",c,o,z-2,A),A);break;case 59:at+=";";default:if(Ci(Z=cp(at,r,o,b,C,d,w,X,it=[],G=[],z,g),g),Q===123)if(C===0)ar(at,r,Z,Z,it,g,z,w,G);else switch(H===99&&ce(at,3)===110?100:H){case 100:case 108:case 109:case 115:ar(n,Z,Z,c&&Ci(cp(n,Z,Z,0,0,d,w,X,d,it=[],z,G),G),d,G,z,w,c?it:G);break;default:ar(at,Z,Z,Z,[""],G,0,w,G)}}b=C=q=0,lt=V=1,X=at="",z=y;break;case 58:z=1+rl(at),q=J;default:if(lt<1){if(Q==123)--lt;else if(Q==125&&lt++==0&&Sb()==125)continue}switch(at+=as(Q),Q*lt){case 38:V=C>0?1:(at+="\f",-1);break;case 44:w[b++]=(rl(at)-1)*V,V=1;break;case 64:Ma()===45&&(at+=Bo(Pe())),H=Ma(),C=z=rl(X=at+=Rb(lr())),Q++;break;case 45:J===45&&rl(at)==2&&(lt=0)}}return g}function cp(n,r,o,c,d,g,y,w,A,b,C,z){for(var H=d-1,q=d===0?g:[""],J=Qp(q),lt=0,W=0,V=0;lt<c;++lt)for(var Q=0,X=zn(n,H+1,H=Np(W=y[lt])),it=n;Q<J;++Q)(it=Lp(W>0?q[Q]+" "+X:yt(X,/&\f/g,q[Q])))&&(A[V++]=it);return br(n,r,o,d===0?mr:w,A,b,C,z)}function jb(n,r,o,c){return br(n,r,o,Hp,as(Ab()),zn(n,2,-2),0,c)}function op(n,r,o,c,d){return br(n,r,o,ls,zn(n,0,c),zn(n,c+1,-1),c,d)}function Gp(n,r,o){switch(vb(n,r)){case 5103:return Mt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Mt+n+n;case 4789:return _i+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Mt+n+_i+n+Lt+n+n;case 5936:switch(ce(n,r+11)){case 114:return Mt+n+Lt+yt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Mt+n+Lt+yt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Mt+n+Lt+yt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Mt+n+Lt+n+n;case 6165:return Mt+n+Lt+"flex-"+n+n;case 5187:return Mt+n+yt(n,/(\w+).+(:[^]+)/,Mt+"box-$1$2"+Lt+"flex-$1$2")+n;case 5443:return Mt+n+Lt+"flex-item-"+yt(n,/flex-|-self/g,"")+(Rl(n,/flex-|baseline/)?"":Lt+"grid-row-"+yt(n,/flex-|-self/g,""))+n;case 4675:return Mt+n+Lt+"flex-line-pack"+yt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Mt+n+Lt+yt(n,"shrink","negative")+n;case 5292:return Mt+n+Lt+yt(n,"basis","preferred-size")+n;case 6060:return Mt+"box-"+yt(n,"-grow","")+Mt+n+Lt+yt(n,"grow","positive")+n;case 4554:return Mt+yt(n,/([^-])(transform)/g,"$1"+Mt+"$2")+n;case 6187:return yt(yt(yt(n,/(zoom-|grab)/,Mt+"$1"),/(image-set)/,Mt+"$1"),n,"")+n;case 5495:case 3959:return yt(n,/(image-set\([^]*)/,Mt+"$1$`$1");case 4968:return yt(yt(n,/(.+:)(flex-)?(.*)/,Mt+"box-pack:$3"+Lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Mt+n+n;case 4200:if(!Rl(n,/flex-|baseline/))return Lt+"grid-column-align"+zn(n,r)+n;break;case 2592:case 3360:return Lt+yt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(c,d){return r=d,Rl(c.props,/grid-\w+-end/)})?~er(n+(o=o[r].value),"span",0)?n:Lt+yt(n,"-start","")+n+Lt+"grid-row-span:"+(~er(o,"span",0)?Rl(o,/\d+/):+Rl(o,/\d+/)-+Rl(n,/\d+/))+";":Lt+yt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(c){return Rl(c.props,/grid-\w+-start/)})?n:Lt+yt(yt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return yt(n,/(.+)-inline(.+)/,Mt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rl(n)-1-r>6)switch(ce(n,r+1)){case 109:if(ce(n,r+4)!==45)break;case 102:return yt(n,/(.+:)(.+)-([^]+)/,"$1"+Mt+"$2-$3$1"+_i+(ce(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~er(n,"stretch",0)?Gp(yt(n,"stretch","fill-available"),r,o)+n:n}break;case 5152:case 5920:return yt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,g,y,w,A,b){return Lt+d+":"+g+b+(y?Lt+d+"-span:"+(w?A:+A-+g)+b:"")+n});case 4949:if(ce(n,r+6)===121)return yt(n,":",":"+Mt)+n;break;case 6444:switch(ce(n,ce(n,14)===45?18:11)){case 120:return yt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Mt+(ce(n,14)===45?"inline-":"")+"box$3$1"+Mt+"$2$3$1"+Lt+"$2box$3")+n;case 100:return yt(n,":",":"+Lt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return yt(n,"scroll-","scroll-snap-")+n}return n}function rr(n,r){for(var o="",c=0;c<n.length;c++)o+=r(n[c],c,n,r)||"";return o}function Cb(n,r,o,c){switch(n.type){case yb:if(n.children.length)break;case bb:case ls:return n.return=n.return||n.value;case Hp:return"";case Up:return n.return=n.value+"{"+rr(n.children,c)+"}";case mr:if(!rl(n.value=n.props.join(",")))return""}return rl(o=rr(n.children,c))?n.return=n.value+"{"+o+"}":""}function Mb(n){var r=Qp(n);return function(o,c,d,g){for(var y="",w=0;w<r;w++)y+=n[w](o,c,d,g)||"";return y}}function _b(n){return function(r){r.root||(r=r.return)&&n(r)}}function kb(n,r,o,c){if(n.length>-1&&!n.return)switch(n.type){case ls:n.return=Gp(n.value,n.length,o);return;case Up:return rr([Pl(n,{value:yt(n.value,"@","@"+Mt)})],c);case mr:if(n.length)return xb(o=n.props,function(d){switch(Rl(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tn(Pl(n,{props:[yt(d,/:(read-\w+)/,":"+_i+"$1")]})),Tn(Pl(n,{props:[d]})),Qo(n,{props:rp(o,c)});break;case"::placeholder":Tn(Pl(n,{props:[yt(d,/:(plac\w+)/,":"+Mt+"input-$1")]})),Tn(Pl(n,{props:[yt(d,/:(plac\w+)/,":"+_i+"$1")]})),Tn(Pl(n,{props:[yt(d,/:(plac\w+)/,Lt+"input-$1")]})),Tn(Pl(n,{props:[d]})),Qo(n,{props:rp(o,c)});break}return""})}}var Bb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},On=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",Yp="active",Xp="data-styled-version",vr="6.1.15",ns=`/*!sc*/
`,cr=typeof window<"u"&&"HTMLElement"in window,$b=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),Hb={},xr=Object.freeze([]),jn=Object.freeze({});function Vp(n,r,o){return o===void 0&&(o=jn),n.theme!==o.theme&&n.theme||r||o.theme}var Zp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ub=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nb=/(^-|-$)/g;function sp(n){return n.replace(Ub,"-").replace(Nb,"")}var Lb=/(a)(d)/gi,Wu=52,fp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Yo(n){var r,o="";for(r=Math.abs(n);r>Wu;r=r/Wu|0)o=fp(r%Wu)+o;return(fp(r%Wu)+o).replace(Lb,"$1-$2")}var $o,Kp=5381,Dn=function(n,r){for(var o=r.length;o;)n=33*n^r.charCodeAt(--o);return n},Jp=function(n){return Dn(Kp,n)};function Wp(n){return Yo(Jp(n)>>>0)}function Qb(n){return n.displayName||n.name||"Component"}function Ho(n){return typeof n=="string"&&!0}var Fp=typeof Symbol=="function"&&Symbol.for,Ip=Fp?Symbol.for("react.memo"):60115,qb=Fp?Symbol.for("react.forward_ref"):60112,Gb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xb=(($o={})[qb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$o[Ip]=Pp,$o);function dp(n){return("type"in(r=n)&&r.type.$$typeof)===Ip?Pp:"$$typeof"in n?Xb[n.$$typeof]:Gb;var r}var Vb=Object.defineProperty,Zb=Object.getOwnPropertyNames,hp=Object.getOwnPropertySymbols,Kb=Object.getOwnPropertyDescriptor,Jb=Object.getPrototypeOf,pp=Object.prototype;function t0(n,r,o){if(typeof r!="string"){if(pp){var c=Jb(r);c&&c!==pp&&t0(n,c,o)}var d=Zb(r);hp&&(d=d.concat(hp(r)));for(var g=dp(n),y=dp(r),w=0;w<d.length;++w){var A=d[w];if(!(A in Yb||o&&o[A]||y&&A in y||g&&A in g)){var b=Kb(r,A);try{Vb(n,A,b)}catch{}}}}return n}function _a(n){return typeof n=="function"}function is(n){return typeof n=="object"&&"styledComponentId"in n}function ja(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function Xo(n,r){if(n.length===0)return"";for(var o=n[0],c=1;c<n.length;c++)o+=n[c];return o}function Bi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Vo(n,r,o){if(o===void 0&&(o=!1),!o&&!Bi(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var c=0;c<r.length;c++)n[c]=Vo(n[c],r[c]);else if(Bi(r))for(var c in r)n[c]=Vo(n[c],r[c]);return n}function us(n,r){Object.defineProperty(n,"toString",{value:r})}function ka(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Wb=function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var o=0,c=0;c<r;c++)o+=this.groupSizes[c];return o},n.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,g=d;r>=g;)if((g<<=1)<0)throw ka(16,"".concat(r));this.groupSizes=new Uint32Array(g),this.groupSizes.set(c),this.length=g;for(var y=d;y<g;y++)this.groupSizes[y]=0}for(var w=this.indexOfGroup(r+1),A=(y=0,o.length);y<A;y++)this.tag.insertRule(w,o[y])&&(this.groupSizes[r]++,w++)},n.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],c=this.indexOfGroup(r),d=c+o;this.groupSizes[r]=0;for(var g=c;g<d;g++)this.tag.deleteRule(c)}},n.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var c=this.groupSizes[r],d=this.indexOfGroup(r),g=d+c,y=d;y<g;y++)o+="".concat(this.tag.getRule(y)).concat(ns);return o},n}(),nr=new Map,or=new Map,ir=1,Fu=function(n){if(nr.has(n))return nr.get(n);for(;or.has(ir);)ir++;var r=ir++;return nr.set(n,r),or.set(r,n),r},Fb=function(n,r){ir=r+1,nr.set(n,r),or.set(r,n)},Ib="style[".concat(On,"][").concat(Xp,'="').concat(vr,'"]'),Pb=new RegExp("^".concat(On,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ty=function(n,r,o){for(var c,d=o.split(","),g=0,y=d.length;g<y;g++)(c=d[g])&&n.registerName(r,c)},ey=function(n,r){for(var o,c=((o=r.textContent)!==null&&o!==void 0?o:"").split(ns),d=[],g=0,y=c.length;g<y;g++){var w=c[g].trim();if(w){var A=w.match(Pb);if(A){var b=0|parseInt(A[1],10),C=A[2];b!==0&&(Fb(C,b),ty(n,C,A[3]),n.getTag().insertRules(b,d)),d.length=0}else d.push(w)}}},mp=function(n){for(var r=document.querySelectorAll(Ib),o=0,c=r.length;o<c;o++){var d=r[o];d&&d.getAttribute(On)!==Yp&&(ey(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function ly(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e0=function(n){var r=document.head,o=n||r,c=document.createElement("style"),d=function(w){var A=Array.from(w.querySelectorAll("style[".concat(On,"]")));return A[A.length-1]}(o),g=d!==void 0?d.nextSibling:null;c.setAttribute(On,Yp),c.setAttribute(Xp,vr);var y=ly();return y&&c.setAttribute("nonce",y),o.insertBefore(c,g),c},ay=function(){function n(r){this.element=e0(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,d=0,g=c.length;d<g;d++){var y=c[d];if(y.ownerNode===o)return y}throw ka(17)}(this.element),this.length=0}return n.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},n}(),ny=function(){function n(r){this.element=e0(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n}(),iy=function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n}(),gp=cr,uy={isServer:!cr,useCSSOMInjection:!$b},sr=function(){function n(r,o,c){r===void 0&&(r=jn),o===void 0&&(o={});var d=this;this.options=oe(oe({},uy),r),this.gs=o,this.names=new Map(c),this.server=!!r.isServer,!this.server&&cr&&gp&&(gp=!1,mp(this)),us(this,function(){return function(g){for(var y=g.getTag(),w=y.length,A="",b=function(z){var H=function(V){return or.get(V)}(z);if(H===void 0)return"continue";var q=g.names.get(H),J=y.getGroup(z);if(q===void 0||!q.size||J.length===0)return"continue";var lt="".concat(On,".g").concat(z,'[id="').concat(H,'"]'),W="";q!==void 0&&q.forEach(function(V){V.length>0&&(W+="".concat(V,","))}),A+="".concat(J).concat(lt,'{content:"').concat(W,'"}').concat(ns)},C=0;C<w;C++)b(C);return A}(d)})}return n.registerId=function(r){return Fu(r)},n.prototype.rehydrate=function(){!this.server&&cr&&mp(this)},n.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new n(oe(oe({},this.options),r),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var c=o.useCSSOMInjection,d=o.target;return o.isServer?new iy(d):c?new ay(d):new ny(d)}(this.options),new Wb(r)));var r},n.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},n.prototype.registerName=function(r,o){if(Fu(r),this.names.has(r))this.names.get(r).add(o);else{var c=new Set;c.add(o),this.names.set(r,c)}},n.prototype.insertRules=function(r,o,c){this.registerName(r,o),this.getTag().insertRules(Fu(r),c)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup(Fu(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n}(),ry=/&/g,cy=/^\s*\/\/.*$/gm;function l0(n,r){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(c){return"".concat(r," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=l0(o.children,r)),o})}function oy(n){var r,o,c,d=jn,g=d.options,y=g===void 0?jn:g,w=d.plugins,A=w===void 0?xr:w,b=function(H,q,J){return J.startsWith(o)&&J.endsWith(o)&&J.replaceAll(o,"").length>0?".".concat(r):H},C=A.slice();C.push(function(H){H.type===mr&&H.value.includes("&")&&(H.props[0]=H.props[0].replace(ry,o).replace(c,b))}),y.prefix&&C.push(kb),C.push(Cb);var z=function(H,q,J,lt){q===void 0&&(q=""),J===void 0&&(J=""),lt===void 0&&(lt="&"),r=lt,o=q,c=new RegExp("\\".concat(o,"\\b"),"g");var W=H.replace(cy,""),V=Ob(J||q?"".concat(J," ").concat(q," { ").concat(W," }"):W);y.namespace&&(V=l0(V,y.namespace));var Q=[];return rr(V,Mb(C.concat(_b(function(X){return Q.push(X)})))),Q};return z.hash=A.length?A.reduce(function(H,q){return q.name||ka(15),Dn(H,q.name)},Kp).toString():"",z}var sy=new sr,Zo=oy(),a0=D.createContext({shouldForwardProp:void 0,styleSheet:sy,stylis:Zo});a0.Consumer;D.createContext(void 0);function Ko(){return R.useContext(a0)}var fy=function(){function n(r,o){var c=this;this.inject=function(d,g){g===void 0&&(g=Zo);var y=c.name+g.hash;d.hasNameForId(c.id,y)||d.insertRules(c.id,y,g(c.rules,y,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,us(this,function(){throw ka(12,String(c.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=Zo),this.name+r.hash},n}(),dy=function(n){return n>="A"&&n<="Z"};function bp(n){for(var r="",o=0;o<n.length;o++){var c=n[o];if(o===1&&c==="-"&&n[0]==="-")return n;dy(c)?r+="-"+c.toLowerCase():r+=c}return r.startsWith("ms-")?"-"+r:r}var n0=function(n){return n==null||n===!1||n===""},i0=function(n){var r,o,c=[];for(var d in n){var g=n[d];n.hasOwnProperty(d)&&!n0(g)&&(Array.isArray(g)&&g.isCss||_a(g)?c.push("".concat(bp(d),":"),g,";"):Bi(g)?c.push.apply(c,ki(ki(["".concat(d," {")],i0(g),!1),["}"],!1)):c.push("".concat(bp(d),": ").concat((r=d,(o=g)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in Bb||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function ea(n,r,o,c){if(n0(n))return[];if(is(n))return[".".concat(n.styledComponentId)];if(_a(n)){if(!_a(g=n)||g.prototype&&g.prototype.isReactComponent||!r)return[n];var d=n(r);return ea(d,r,o,c)}var g;return n instanceof fy?o?(n.inject(o,c),[n.getName(c)]):[n]:Bi(n)?i0(n):Array.isArray(n)?Array.prototype.concat.apply(xr,n.map(function(y){return ea(y,r,o,c)})):[n.toString()]}function u0(n){for(var r=0;r<n.length;r+=1){var o=n[r];if(_a(o)&&!is(o))return!1}return!0}var hy=Jp(vr),py=function(){function n(r,o,c){this.rules=r,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&u0(r),this.componentId=o,this.baseHash=Dn(hy,o),this.baseStyle=c,sr.registerId(o)}return n.prototype.generateAndInjectStyles=function(r,o,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ja(d,this.staticRulesId);else{var g=Xo(ea(this.rules,r,o,c)),y=Yo(Dn(this.baseHash,g)>>>0);if(!o.hasNameForId(this.componentId,y)){var w=c(g,".".concat(y),void 0,this.componentId);o.insertRules(this.componentId,y,w)}d=ja(d,y),this.staticRulesId=y}else{for(var A=Dn(this.baseHash,c.hash),b="",C=0;C<this.rules.length;C++){var z=this.rules[C];if(typeof z=="string")b+=z;else if(z){var H=Xo(ea(z,r,o,c));A=Dn(A,H+C),b+=H}}if(b){var q=Yo(A>>>0);o.hasNameForId(this.componentId,q)||o.insertRules(this.componentId,q,c(b,".".concat(q),void 0,this.componentId)),d=ja(d,q)}}return d},n}(),$i=D.createContext(void 0);$i.Consumer;function r0(n){var r=D.useContext($i),o=R.useMemo(function(){return function(c,d){if(!c)throw ka(14);if(_a(c)){var g=c(d);return g}if(Array.isArray(c)||typeof c!="object")throw ka(8);return d?oe(oe({},d),c):c}(n.theme,r)},[n.theme,r]);return n.children?D.createElement($i.Provider,{value:o},n.children):null}var Uo={};function my(n,r,o){var c=is(n),d=n,g=!Ho(n),y=r.attrs,w=y===void 0?xr:y,A=r.componentId,b=A===void 0?function(it,G){var Z=typeof it!="string"?"sc":sp(it);Uo[Z]=(Uo[Z]||0)+1;var at="".concat(Z,"-").concat(Wp(vr+Z+Uo[Z]));return G?"".concat(G,"-").concat(at):at}(r.displayName,r.parentComponentId):A,C=r.displayName,z=C===void 0?function(it){return Ho(it)?"styled.".concat(it):"Styled(".concat(Qb(it),")")}(n):C,H=r.displayName&&r.componentId?"".concat(sp(r.displayName),"-").concat(r.componentId):r.componentId||b,q=c&&d.attrs?d.attrs.concat(w).filter(Boolean):w,J=r.shouldForwardProp;if(c&&d.shouldForwardProp){var lt=d.shouldForwardProp;if(r.shouldForwardProp){var W=r.shouldForwardProp;J=function(it,G){return lt(it,G)&&W(it,G)}}else J=lt}var V=new py(o,H,c?d.componentStyle:void 0);function Q(it,G){return function(Z,at,jt){var P=Z.attrs,mt=Z.componentStyle,Ct=Z.defaultProps,Dt=Z.foldedComponentIds,$t=Z.styledComponentId,_t=Z.target,Et=D.useContext($i),L=Ko(),rt=Z.shouldForwardProp||L.shouldForwardProp,Y=Vp(at,Et,Ct)||jn,ot=function(tt,K,ft){for(var ht,_=oe(oe({},K),{className:void 0,theme:ft}),et=0;et<tt.length;et+=1){var pt=_a(ht=tt[et])?ht(_):ht;for(var xt in pt)_[xt]=xt==="className"?ja(_[xt],pt[xt]):xt==="style"?oe(oe({},_[xt]),pt[xt]):pt[xt]}return K.className&&(_.className=ja(_.className,K.className)),_}(P,at,Y),m=ot.as||_t,k={};for(var I in ot)ot[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&ot.theme===Y||(I==="forwardedAs"?k.as=ot.forwardedAs:rt&&!rt(I,m)||(k[I]=ot[I]));var N=function(tt,K){var ft=Ko(),ht=tt.generateAndInjectStyles(K,ft.styleSheet,ft.stylis);return ht}(mt,ot),B=ja(Dt,$t);return N&&(B+=" "+N),ot.className&&(B+=" "+ot.className),k[Ho(m)&&!Zp.has(m)?"class":"className"]=B,jt&&(k.ref=jt),R.createElement(m,k)}(X,it,G)}Q.displayName=z;var X=D.forwardRef(Q);return X.attrs=q,X.componentStyle=V,X.displayName=z,X.shouldForwardProp=J,X.foldedComponentIds=c?ja(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=H,X.target=c?d.target:n,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(it){this._foldedDefaultProps=c?function(G){for(var Z=[],at=1;at<arguments.length;at++)Z[at-1]=arguments[at];for(var jt=0,P=Z;jt<P.length;jt++)Vo(G,P[jt],!0);return G}({},d.defaultProps,it):it}}),us(X,function(){return".".concat(X.styledComponentId)}),g&&t0(X,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function yp(n,r){for(var o=[n[0]],c=0,d=r.length;c<d;c+=1)o.push(r[c],n[c+1]);return o}var vp=function(n){return Object.assign(n,{isCss:!0})};function F(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(_a(n)||Bi(n))return vp(ea(yp(xr,ki([n],r,!0))));var c=n;return r.length===0&&c.length===1&&typeof c[0]=="string"?ea(c):vp(ea(yp(c,r)))}function Jo(n,r,o){if(o===void 0&&(o=jn),!r)throw ka(1,r);var c=function(d){for(var g=[],y=1;y<arguments.length;y++)g[y-1]=arguments[y];return n(r,o,F.apply(void 0,ki([d],g,!1)))};return c.attrs=function(d){return Jo(n,r,oe(oe({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return Jo(n,r,oe(oe({},o),d))},c}var c0=function(n){return Jo(my,n)},U=c0;Zp.forEach(function(n){U[n]=c0(n)});var gy=function(){function n(r,o){this.rules=r,this.componentId=o,this.isStatic=u0(r),sr.registerId(this.componentId+1)}return n.prototype.createStyles=function(r,o,c,d){var g=d(Xo(ea(this.rules,o,c,d)),""),y=this.componentId+r;c.insertRules(y,y,g)},n.prototype.removeStyles=function(r,o){o.clearRules(this.componentId+r)},n.prototype.renderStyles=function(r,o,c,d){r>2&&sr.registerId(this.componentId+r),this.removeStyles(r,c),this.createStyles(r,o,c,d)},n}();function o0(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var c=F.apply(void 0,ki([n],r,!1)),d="sc-global-".concat(Wp(JSON.stringify(c))),g=new gy(c,d),y=function(A){var b=Ko(),C=D.useContext($i),z=D.useRef(b.styleSheet.allocateGSInstance(d)).current;return b.styleSheet.server&&w(z,A,b.styleSheet,C,b.stylis),D.useLayoutEffect(function(){if(!b.styleSheet.server)return w(z,A,b.styleSheet,C,b.stylis),function(){return g.removeStyles(z,b.styleSheet)}},[z,A,b.styleSheet,C,b.stylis]),null};function w(A,b,C,z,H){if(g.isStatic)g.renderStyles(A,Hb,C,H);else{var q=oe(oe({},b),{theme:Vp(b,z,y.defaultProps)});g.renderStyles(A,q,C,H)}}return D.memo(y)}const rs="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",cs="inset 2px 2px 3px rgba(0,0,0,0.2)",tl=()=>F`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,el=({background:n="material",color:r="materialText"}={})=>F`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[n]};
  color: ${({theme:o})=>o[r]};
`,Hi=({mainColor:n="black",secondaryColor:r="transparent",pixelSize:o=2})=>F`
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
`,Ba=()=>F`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,wn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},by=({theme:n,topLeftInner:r,bottomRightInner:o,hasShadow:c=!1,hasInsetShadow:d=!1})=>[c?rs:!1,d?cs:!1,r!==null?`inset 1px 1px 0px 1px ${n[r]}`:!1,o!==null?`inset -1px -1px 0 1px ${n[o]}`:!1].filter(Boolean).join(", "),Kt=({invert:n=!1,style:r="button"}={})=>{const o={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return F`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:c})=>c[wn[r][o.topLeftOuter]]};
    border-top-color: ${({theme:c})=>c[wn[r][o.topLeftOuter]]};
    border-right-color: ${({theme:c})=>c[wn[r][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:c})=>c[wn[r][o.bottomRightOuter]]};
    box-shadow: ${({theme:c,shadow:d})=>by({theme:c,topLeftInner:wn[r][o.topLeftInner],bottomRightInner:wn[r][o.bottomRightInner],hasShadow:d})};
  `},Cn=()=>F`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,yy=n=>Buffer.from(n).toString("base64"),vy=typeof btoa<"u"?btoa:yy,Iu=(n,r=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${vy(o)})`},os=(n="default")=>F`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>Hi({mainColor:n==="flat"?r.flatLight:r.material,secondaryColor:n==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${el()}
    ${n==="flat"?Ba():Kt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${el()}
    ${n==="flat"?Ba():Kt({style:"window"})}
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
    background-image: ${({theme:r})=>Iu(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>Iu(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>Iu(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>Iu(r.materialText,0)};
  }
`,xy=U.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Ay=R.forwardRef(({children:n,underline:r=!0,...o},c)=>D.createElement(xy,{ref:c,underline:r,...o},n));Ay.displayName="Anchor";const Sy=U.header`
  ${Kt()};
  ${el()};

  position: ${n=>{var r;return(r=n.position)!==null&&r!==void 0?r:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,s0=R.forwardRef(({children:n,fixed:r=!0,position:o="fixed",...c},d)=>D.createElement(Sy,{fixed:r,position:r!==!1?o:void 0,ref:d,...c},n));s0.displayName="AppBar";const Ha=()=>{};function Ca(n,r,o){return o!==null&&n>o?o:r!==null&&n<r?r:n}function Ey(n){if(Math.abs(n)<1){const o=n.toExponential().split("e-"),c=o[0].split(".")[1];return(c?c.length:0)+parseInt(o[1],10)}const r=n.toString().split(".")[1];return r?r.length:0}function xp(n,r,o){const c=Math.round((n-o)/r)*r+o;return Number(c.toFixed(Ey(r)))}function la(n){return typeof n=="number"?`${n}px`:n}const Ty=U.div`
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
`,wy=U.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,f0=R.forwardRef(({alt:n="",children:r,noBorder:o=!1,size:c=35,square:d=!1,src:g,...y},w)=>D.createElement(Ty,{noBorder:o,ref:w,size:la(c),square:d,src:g,...y},g?D.createElement(wy,{src:g,alt:n}):r));f0.displayName="Avatar";const he={sm:"28px",md:"36px",lg:"44px"},Dy=F`
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
`,Ar=U.button`
  ${({active:n,disabled:r,primary:o,theme:c,variant:d})=>d==="flat"?F`
          ${Ba()}
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
            ${!n&&!r&&Cn}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?F`
          ${el()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!n&&Kt({style:"buttonThin"})}
          }
          &:active {
            ${!r&&Kt({style:"buttonThinPressed"})}
          }
          ${n&&Kt({style:"buttonThinPressed"})}
          ${r&&tl()}
        `:F`
          ${el()};
          border: none;
          ${r&&tl()}
          ${n?Hi({mainColor:c.material,secondaryColor:c.borderLightest}):""}
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
            ${!n&&!r&&Cn}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Dy}
`,$a=R.forwardRef(({onClick:n,disabled:r=!1,children:o,type:c="button",fullWidth:d=!1,size:g="md",square:y=!1,active:w=!1,onTouchStart:A=Ha,primary:b=!1,variant:C="default",...z},H)=>D.createElement(Ar,{active:w,disabled:r,$disabled:r,fullWidth:d,onClick:r?void 0:n,onTouchStart:A,primary:b,ref:H,size:g,square:y,type:c,variant:C,...z},o));$a.displayName="Button";function aa({defaultValue:n,onChange:r,onChangePropName:o="onChange",readOnly:c,value:d,valuePropName:g="value"}){const y=d!==void 0,[w,A]=R.useState(n),b=R.useCallback(C=>{y||A(C)},[y]);if(y&&typeof r!="function"&&!c){const C=`Warning: You provided a \`${g}\` prop to a component without an \`${o}\` handler.${g==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${g}\`.`}`;console.warn(C)}return[y?d:w,b]}const Wo=U.li`
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
  ${n=>n.$disabled&&tl()}
`,ta=R.forwardRef(({size:n="lg",disabled:r,square:o,children:c,onClick:d,primary:g,...y},w)=>D.createElement(Wo,{$disabled:r,size:n,square:o,onClick:r?void 0:d,primary:g,role:"menuitem",ref:w,"aria-disabled":r,...y},c));ta.displayName="MenuListItem";const Fo=U.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Kt({style:"window"})}
  ${el()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Fo.displayName="MenuList";const cl=20,fr=U.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${cl}px;
  height: ${cl}px;
  opacity: 0;
  z-index: -1;
`,ss=U.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&tl()}

  ${Wo} & {
    margin: 0;
    height: 100%;
  }
  ${Wo}:hover & {
    ${({$disabled:n,theme:r})=>!n&&F`
        color: ${r.materialTextInvert};
      `};
  }
`,fs=U.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${fr}:focus ~ & {
    ${Cn}
  }
  ${fr}:not(:disabled) ~ &:active {
    ${Cn}
  }
`,ol=U.div`
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
    ${n=>n.shadow&&`box-shadow:${cs};`}
  }
`,zy=U.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${os()}
`,Ua=R.forwardRef(({children:n,shadow:r=!0,...o},c)=>D.createElement(ol,{ref:c,shadow:r,...o},D.createElement(zy,null,n)));Ua.displayName="ScrollView";const d0=F`
  width: ${cl}px;
  height: ${cl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ry=U(ol)`
  ${d0}
  width: ${cl}px;
  height: ${cl}px;
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,Oy=U.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  ${d0}
  width: ${cl-4}px;
  height: ${cl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
`,jy=U.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Cy=U.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:r})=>Hi({mainColor:n?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,My={flat:Oy,default:Ry},_y=R.forwardRef(({checked:n,className:r="",defaultChecked:o=!1,disabled:c=!1,indeterminate:d=!1,label:g="",onChange:y=Ha,style:w={},value:A,variant:b="default",...C},z)=>{var H;const[q,J]=aa({defaultValue:o,onChange:y,readOnly:(H=C.readOnly)!==null&&H!==void 0?H:c,value:n}),lt=R.useCallback(Q=>{const X=Q.target.checked;J(X),y(Q)},[y,J]),W=My[b];let V=null;return d?V=Cy:q&&(V=jy),D.createElement(ss,{$disabled:c,className:r,style:w},D.createElement(fr,{disabled:c,onChange:c?void 0:lt,readOnly:c,type:"checkbox",value:A,checked:q,"data-indeterminate":d,ref:z,...C}),D.createElement(W,{$disabled:c,role:"presentation"},V&&D.createElement(V,{$disabled:c,variant:b})),g&&D.createElement(fs,null,g))});_y.displayName="Checkbox";const Xe=U.div`
  ${({orientation:n,theme:r,size:o="100%"})=>n==="vertical"?`
    height: ${la(o)};
    border-left: 2px solid ${r.borderDark};
    border-right: 2px solid ${r.borderLightest};
    margin: 0;
    `:`
    width: ${la(o)};
    border-bottom: 2px solid ${r.borderLightest};
    border-top: 2px solid ${r.borderDark};
    margin: 0;
    `}
`;Xe.displayName="Separator";const ky=U(Ar)`
  padding-left: 8px;
`,By=U(Xe)`
  height: 21px;
  position: relative;
  top: 0;
`,h0=U.input`
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
`,$y=U.div`
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
  ${h0}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Cn}
    outline-offset: -8px;
  }
`,Hy=U.span`
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
`,Uy=R.forwardRef(({value:n,defaultValue:r,onChange:o=Ha,disabled:c=!1,variant:d="default",...g},y)=>{var w;const[A,b]=aa({defaultValue:r,onChange:o,readOnly:(w=g.readOnly)!==null&&w!==void 0?w:c,value:n}),C=z=>{const H=z.target.value;b(H),o(z)};return D.createElement(ky,{disabled:c,as:"div",variant:d,size:"md"},D.createElement(h0,{onChange:C,readOnly:c,disabled:c,value:A??"#008080",type:"color",ref:y,...g}),D.createElement($y,{$disabled:c,color:A??"#008080",role:"presentation"}),d==="default"&&D.createElement(By,{orientation:"vertical"}),D.createElement(Hy,{$disabled:c,variant:d}))});Uy.displayName="ColorInput";const Ny=U.div`
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
      ${Hi({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,Ap=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Ly=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Qy({digit:n=0,pixelSize:r=2,...o}){const c=Ly[Number(n)].map((d,g)=>d?`${Ap[g]} active`:Ap[g]);return D.createElement(Ny,{pixelSize:r,...o},c.map((d,g)=>D.createElement("span",{className:d,key:g})))}const qy=U.div`
  ${Kt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Gy={sm:1,md:2,lg:3,xl:4},Yy=R.forwardRef(({value:n=0,minLength:r=3,size:o="md",...c},d)=>{const g=R.useMemo(()=>n.toString().padStart(r,"0").split(""),[r,n]);return D.createElement(qy,{ref:d,...c},g.map((y,w)=>D.createElement(Qy,{digit:y,pixelSize:Gy[o],key:w})))});Yy.displayName="Counter";const p0=F`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${he.md};
`,Xy=U(ol).attrs({"data-testid":"variant-default"})`
  ${p0}
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
`,Vy=U.div.attrs({"data-testid":"variant-flat"})`
  ${Ba()}
  ${p0}
  position: relative;
`,m0=F`
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
  ${({disabled:n,variant:r})=>r!=="flat"&&n&&tl()}
`,Zy=U.input`
  ${m0}
  padding: 0 8px;
`,Ky=U.textarea`
  ${m0}
  padding: 8px;
  resize: none;
  ${({variant:n})=>os(n)}
`,g0=R.forwardRef(({className:n,disabled:r=!1,fullWidth:o,onChange:c=Ha,shadow:d=!0,style:g,variant:y="default",...w},A)=>{const b=y==="flat"?Vy:Xy,C=R.useMemo(()=>{var z;return w.multiline?D.createElement(Ky,{disabled:r,onChange:r?void 0:c,readOnly:r,ref:A,variant:y,...w}):D.createElement(Zy,{disabled:r,onChange:r?void 0:c,readOnly:r,ref:A,type:(z=w.type)!==null&&z!==void 0?z:"text",variant:y,...w})},[r,c,w,A,y]);return D.createElement(b,{className:n,fullWidth:o,$disabled:r,shadow:d,style:g},C)});g0.displayName="TextInput";const Jy=U.div`
  display: inline-flex;
  align-items: center;
`,Io=U($a)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?F`
          height: calc(50% - 1px);
        `:F`
          height: 50%;
        `}
`,Wy=U.div`
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
`,Sp=U.span`
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
  ${Io}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?F`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:F`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,b0=R.forwardRef(({className:n,defaultValue:r,disabled:o=!1,max:c,min:d,onChange:g,readOnly:y,step:w=1,style:A,value:b,variant:C="default",width:z,...H},q)=>{const[J,lt]=aa({defaultValue:r,onChange:g,readOnly:y,value:b}),W=R.useCallback(Z=>{const at=parseFloat(Z.target.value);lt(at)},[lt]),V=R.useCallback(Z=>{const at=Ca(parseFloat(((J??0)+Z).toFixed(2)),d??null,c??null);lt(at),g==null||g(at)},[c,d,g,lt,J]),Q=R.useCallback(()=>{J!==void 0&&(g==null||g(J))},[g,J]),X=R.useCallback(()=>{V(w)},[V,w]),it=R.useCallback(()=>{V(-w)},[V,w]),G=C==="flat"?"flat":"raised";return D.createElement(Jy,{className:n,style:{...A,width:z!==void 0?la(z):"auto"},...H},D.createElement(g0,{value:J,variant:C,onChange:W,disabled:o,type:"number",readOnly:y,ref:q,fullWidth:!0,onBlur:Q}),D.createElement(Wy,{variant:C},D.createElement(Io,{"data-testid":"increment",variant:G,disabled:o||y,onClick:X},D.createElement(Sp,{invert:!0})),D.createElement(Io,{"data-testid":"decrement",variant:G,disabled:o||y,onClick:it},D.createElement(Sp,null))))});b0.displayName="NumberInput";function Fy(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let o=0;o<10;o+=1)r+=n[Math.floor(Math.random()*n.length)];return r}const y0=n=>R.useMemo(()=>Fy(),[n]),v0=F`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,x0=F`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,ds=U.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Iy=U.div`
  ${v0}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${ds}:focus & {
    ${x0}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,A0=F`
  height: ${he.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:r})=>n?tl():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Py=U(ol)`
  ${A0}
  background: ${({$disabled:n=!1,theme:r})=>n?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,tv=U.div`
  ${Ba()}
  ${A0}
  background: ${({$disabled:n=!1,theme:r})=>n?r.flatLight:r.canvas};
`,ev=U.select`
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
  ${v0}
  cursor: pointer;
  &:disabled {
    ${tl()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,S0=U(Ar).attrs(()=>({"aria-hidden":"true"}))`
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
`,lv=U.span`
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
  ${S0}:active & {
    margin-top: 2px;
  }
`,av=U.ul`
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
  box-shadow: ${rs};
  ${({variant:n="default"})=>n==="flat"?F`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:F`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:n="default"})=>os(n)}
`,nv=U.li`
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
  ${({active:n})=>n?x0:""}
  user-select: none;
`,iv=[],E0=({className:n,defaultValue:r,disabled:o,native:c,onChange:d,options:g=iv,readOnly:y,style:w,value:A,variant:b,width:C})=>{var z;const H=R.useMemo(()=>g.filter(Boolean),[g]),[q,J]=aa({defaultValue:r??((z=H==null?void 0:H[0])===null||z===void 0?void 0:z.value),onChange:d,readOnly:y,value:A}),lt=!(o||y),W=R.useMemo(()=>({className:n,style:{...w,width:C}}),[n,w,C]),V=R.useMemo(()=>D.createElement(S0,{as:"div","data-testid":"select-button",$disabled:o,native:c,tabIndex:-1,variant:b==="flat"?"flat":"raised"},D.createElement(lv,{"data-testid":"select-icon",$disabled:o})),[o,c,b]),Q=R.useMemo(()=>b==="flat"?tv:Py,[b]);return R.useMemo(()=>({isEnabled:lt,options:H,value:q,setValue:J,wrapperProps:W,DropdownButton:V,Wrapper:Q}),[V,Q,lt,H,J,q,W])},uv={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},rv=1e3,cv=({onBlur:n,onChange:r,onClose:o,onFocus:c,onKeyDown:d,onMouseDown:g,onOpen:y,open:w,options:A,readOnly:b,value:C,selectRef:z,setValue:H,wrapperRef:q})=>{const J=R.useRef(null),lt=R.useRef([]),W=R.useRef(0),V=R.useRef(0),Q=R.useRef(),X=R.useRef("search"),it=R.useRef(""),G=R.useRef(),[Z,at]=aa({defaultValue:!1,onChange:y,onChangePropName:"onOpen",readOnly:b,value:w,valuePropName:"open"}),jt=R.useMemo(()=>{const _=A.findIndex(et=>et.value===C);return W.current=Ca(_,0,null),A[_]},[A,C]),[P,mt]=R.useState(A[0]),Ct=R.useCallback(_=>{const et=J.current,pt=lt.current[_];if(!pt||!et){Q.current=_;return}Q.current=void 0;const xt=et.clientHeight,zt=et.scrollTop,Yt=et.scrollTop+xt,Qt=pt.offsetTop,ee=pt.offsetHeight,Se=pt.offsetTop+pt.offsetHeight;Qt<zt&&et.scrollTo(0,Qt),Se>Yt&&et.scrollTo(0,Qt-xt+ee),pt.focus({preventScroll:!0})},[J]),Dt=R.useCallback((_,{scroll:et}={})=>{var pt;const xt=A.length-1;let zt;switch(_){case"first":{zt=0;break}case"last":{zt=xt;break}case"next":{zt=Ca(V.current+1,0,xt);break}case"previous":{zt=Ca(V.current-1,0,xt);break}case"selected":{zt=Ca((pt=W.current)!==null&&pt!==void 0?pt:0,0,xt);break}default:zt=_}V.current=zt,mt(A[zt]),et&&Ct(zt)},[V,A,Ct]),$t=R.useCallback(({fromEvent:_})=>{at(!0),Dt("selected",{scroll:!0}),y==null||y({fromEvent:_})},[Dt,y,at]),_t=R.useCallback(()=>{X.current="search",it.current="",clearTimeout(G.current)},[]),Et=R.useCallback(({focusSelect:_,fromEvent:et})=>{var pt;o==null||o({fromEvent:et}),at(!1),mt(A[0]),_t(),Q.current=void 0,_&&((pt=z.current)===null||pt===void 0||pt.focus())},[_t,o,A,z,at]),L=R.useCallback(({fromEvent:_})=>{Z?Et({focusSelect:!1,fromEvent:_}):$t({fromEvent:_})},[Et,$t,Z]),rt=R.useCallback((_,{fromEvent:et})=>{W.current!==_&&(W.current=_,H(A[_].value),r==null||r(A[_],{fromEvent:et}))},[r,A,H]),Y=R.useCallback(({focusSelect:_,fromEvent:et})=>{rt(V.current,{fromEvent:et}),Et({focusSelect:_,fromEvent:et})},[Et,rt]),ot=R.useCallback((_,{fromEvent:et,select:pt})=>{var xt;switch(X.current==="cycleFirstLetter"&&_!==it.current&&(X.current="search"),_===it.current?X.current="cycleFirstLetter":it.current+=_,X.current){case"search":{let zt=A.findIndex(Yt=>{var Qt;return((Qt=Yt.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(it.current))===0});zt<0&&(zt=A.findIndex(Yt=>{var Qt;return((Qt=Yt.label)===null||Qt===void 0?void 0:Qt.toLocaleUpperCase().indexOf(_))===0}),it.current=_),zt>=0&&(pt?rt(zt,{fromEvent:et}):Dt(zt,{scroll:!0}));break}case"cycleFirstLetter":{const zt=pt?(xt=W.current)!==null&&xt!==void 0?xt:-1:V.current;let Yt=A.findIndex((Qt,ee)=>{var Se;return ee>zt&&((Se=Qt.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(_))===0});Yt<0&&(Yt=A.findIndex(Qt=>{var ee;return((ee=Qt.label)===null||ee===void 0?void 0:ee.toLocaleUpperCase().indexOf(_))===0})),Yt>=0&&(pt?rt(Yt,{fromEvent:et}):Dt(Yt,{scroll:!0}));break}}clearTimeout(G.current),G.current=setTimeout(()=>{X.current==="search"&&(it.current="")},rv)},[Dt,A,rt]),m=R.useCallback(_=>{var et;_.button===0&&(_.preventDefault(),(et=z.current)===null||et===void 0||et.focus(),L({fromEvent:_}),g==null||g(_))},[g,z,L]),k=R.useCallback(_=>{Y({focusSelect:!0,fromEvent:_})},[Y]),I=R.useCallback(_=>{const{altKey:et,code:pt,ctrlKey:xt,metaKey:zt,shiftKey:Yt}=_,{ARROW_DOWN:Qt,ARROW_UP:ee,END:Se,ENTER:Ce,ESC:Me,HOME:na,SPACE:ia,TAB:ua}=uv,Ui=et||xt||zt||Yt;if(!(pt===ua&&(et||xt||zt)||pt!==ua&&Ui))switch(pt){case Qt:{if(_.preventDefault(),!Z){$t({fromEvent:_});return}Dt("next",{scroll:!0});break}case ee:{if(_.preventDefault(),!Z){$t({fromEvent:_});return}Dt("previous",{scroll:!0});break}case Se:{if(_.preventDefault(),!Z){$t({fromEvent:_});return}Dt("last",{scroll:!0});break}case Ce:{if(!Z)return;_.preventDefault(),Y({focusSelect:!0,fromEvent:_});break}case Me:{if(!Z)return;_.preventDefault(),Et({focusSelect:!0,fromEvent:_});break}case na:{if(_.preventDefault(),!Z){$t({fromEvent:_});return}Dt("first",{scroll:!0});break}case ia:{_.preventDefault(),Z?Y({focusSelect:!0,fromEvent:_}):$t({fromEvent:_});break}case ua:{if(!Z)return;Yt||_.preventDefault(),Y({focusSelect:!Yt,fromEvent:_});break}default:!Ui&&pt.match(/^Key/)&&(_.preventDefault(),_.stopPropagation(),ot(pt.replace(/^Key/,""),{select:!Z,fromEvent:_}))}},[Dt,Et,Z,$t,ot,Y]),N=R.useCallback(_=>{I(_),d==null||d(_)},[I,d]),B=R.useCallback(_=>{Dt(_)},[Dt]),tt=R.useCallback(_=>{Z||(_t(),n==null||n(_))},[_t,n,Z]),K=R.useCallback(_=>{_t(),c==null||c(_)},[_t,c]),ft=R.useCallback(_=>{J.current=_,Q.current!==void 0&&Ct(Q.current)},[Ct]),ht=R.useCallback((_,et)=>{lt.current[et]=_,Q.current===et&&Ct(Q.current)},[Ct]);return R.useEffect(()=>{if(!Z)return()=>{};const _=et=>{var pt;const xt=et.target;!((pt=q.current)===null||pt===void 0)&&pt.contains(xt)||(et.preventDefault(),Et({focusSelect:!1,fromEvent:et}))};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[Et,Z,q]),R.useMemo(()=>({activeOption:P,handleActivateOptionIndex:B,handleBlur:tt,handleButtonKeyDown:N,handleDropdownKeyDown:I,handleFocus:K,handleMouseDown:m,handleOptionClick:k,handleSetDropdownRef:ft,handleSetOptionRef:ht,open:Z,selectedOption:jt}),[P,B,tt,N,K,I,m,k,ft,ht,Z,jt])},ov=R.forwardRef(({className:n,defaultValue:r,disabled:o,onChange:c,options:d,readOnly:g,style:y,value:w,variant:A,width:b,...C},z)=>{const{isEnabled:H,options:q,setValue:J,value:lt,DropdownButton:W,Wrapper:V}=E0({defaultValue:r,disabled:o,native:!0,onChange:c,options:d,readOnly:g,value:w,variant:A}),Q=R.useCallback(X=>{const it=q.find(G=>G.value===X.target.value);it&&(J(it.value),c==null||c(it,{fromEvent:X}))},[c,q,J]);return D.createElement(V,{className:n,style:{...y,width:b}},D.createElement(ds,null,D.createElement(ev,{...C,disabled:o,onChange:H?Q:Ha,ref:z,value:lt},q.map((X,it)=>{var G;return D.createElement("option",{key:`${X.value}-${it}`,value:X.value},(G=X.label)!==null&&G!==void 0?G:X.value)})),W))});ov.displayName="SelectNative";function sv({activateOptionIndex:n,active:r,index:o,onClick:c,option:d,selected:g,setRef:y}){const w=R.useCallback(()=>{n(o)},[n,o]),A=R.useCallback(C=>{y(C,o)},[o,y]),b=y0();return D.createElement(nv,{active:r,"aria-selected":g?"true":void 0,"data-value":d.value,id:b,onClick:c,onMouseEnter:w,ref:A,role:"option",tabIndex:0},d.label)}function fv({"aria-label":n,"aria-labelledby":r,className:o,defaultValue:c,disabled:d=!1,formatDisplay:g,inputProps:y,labelId:w,menuMaxHeight:A,name:b,onBlur:C,onChange:z,onClose:H,onFocus:q,onKeyDown:J,onMouseDown:lt,onOpen:W,open:V,options:Q,readOnly:X,shadow:it=!0,style:G,variant:Z="default",value:at,width:jt="auto",...P},mt){const{isEnabled:Ct,options:Dt,setValue:$t,value:_t,wrapperProps:Et,DropdownButton:L,Wrapper:rt}=E0({className:o,defaultValue:c,disabled:d,native:!1,onChange:z,options:Q,style:G,readOnly:X,value:at,variant:Z,width:jt}),Y=R.useRef(null),ot=R.useRef(null),m=R.useRef(null),{activeOption:k,handleActivateOptionIndex:I,handleBlur:N,handleButtonKeyDown:B,handleDropdownKeyDown:tt,handleFocus:K,handleMouseDown:ft,handleOptionClick:ht,handleSetDropdownRef:_,handleSetOptionRef:et,open:pt,selectedOption:xt}=cv({onBlur:C,onChange:z,onClose:H,onFocus:q,onKeyDown:J,onMouseDown:lt,onOpen:W,open:V,options:Dt,value:_t,selectRef:ot,setValue:$t,wrapperRef:m});R.useImperativeHandle(mt,()=>({focus:Ce=>{var Me;(Me=ot.current)===null||Me===void 0||Me.focus(Ce)},node:Y.current,value:String(_t)}),[_t]);const zt=R.useMemo(()=>xt?typeof g=="function"?g(xt):xt.label:"",[g,xt]),Yt=Ct?1:void 0,Qt=R.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),ee=y0(),Se=R.useMemo(()=>Dt.map((Ce,Me)=>{const na=`${_t}-${Me}`,ia=Ce===k,ua=Ce===xt;return D.createElement(sv,{activateOptionIndex:I,active:ia,index:Me,key:na,onClick:ht,option:Ce,selected:ua,setRef:et})}),[k,I,ht,et,Dt,xt,_t]);return D.createElement(rt,{...Et,$disabled:d,ref:m,shadow:it,style:{...G,width:jt}},D.createElement("input",{name:b,ref:Y,type:"hidden",value:String(_t),...y}),D.createElement(ds,{"aria-disabled":d,"aria-expanded":pt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":r??w,"aria-owns":Ct&&pt?ee:void 0,onBlur:N,onFocus:K,onKeyDown:B,onMouseDown:Ct?ft:lt,ref:ot,role:"button",tabIndex:Yt,...P},D.createElement(Iy,null,zt),L),Ct&&pt&&D.createElement(av,{id:ee,onKeyDown:tt,ref:_,role:"listbox",style:Qt,tabIndex:0,variant:Z},Se))}const T0=R.forwardRef(fv);T0.displayName="Select";const dv=U.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,dr=R.forwardRef(function({children:r,noPadding:o=!1,...c},d){return D.createElement(dv,{noPadding:o,ref:d,...c},r)});dr.displayName="Toolbar";const hv=U.div`
  padding: 16px;
`,Na=R.forwardRef(function({children:r,...o},c){return D.createElement(hv,{ref:c,...o},r)});Na.displayName="WindowContent";const pv=U.div`
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

  ${Ar} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,La=R.forwardRef(function({active:r=!0,children:o,...c},d){return D.createElement(pv,{active:r,ref:d,...c},o)});La.displayName="WindowHeader";const mv=U.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Kt({style:"window"})}
  ${el()}
`,gv=U.span`
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
`,Qa=R.forwardRef(({children:n,resizable:r=!1,resizeRef:o,shadow:c=!0,...d},g)=>D.createElement(mv,{ref:g,shadow:c,...d},n,r&&D.createElement(gv,{"data-testid":"resizeHandle",ref:o})));Qa.displayName="Window";const bv=U(Ua)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,yv=U.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,vv=U.div`
  display: flex;
  flex-wrap: wrap;
`,zl=U.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,xv=U.span`
  cursor: pointer;

  background: ${({active:n,theme:r})=>n?r.hoverBackground:"transparent"};
  color: ${({active:n,theme:r})=>n?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:r})=>r?"none":n.materialDark};
  }
`,Av=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Sv(n,r){return new Date(n,r+1,0).getDate()}function Ev(n,r,o){return new Date(n,r,o).getDay()}function Tv(n){const r=new Date(Date.parse(n)),o=r.getUTCDate(),c=r.getUTCMonth(),d=r.getUTCFullYear();return{day:o,month:c,year:d}}const wv=R.forwardRef(({className:n,date:r=new Date().toISOString(),onAccept:o,onCancel:c,shadow:d=!0},g)=>{const[y,w]=R.useState(()=>Tv(r)),{year:A,month:b,day:C}=y,z=R.useCallback(({value:W})=>{w(V=>({...V,month:W}))},[]),H=R.useCallback(W=>{w(V=>({...V,year:W}))},[]),q=R.useCallback(W=>{w(V=>({...V,day:W}))},[]),J=R.useCallback(()=>{const W=[y.year,y.month+1,y.day].map(V=>String(V).padStart(2,"0")).join("-");o==null||o(W)},[y.day,y.month,y.year,o]),lt=R.useMemo(()=>{const W=Array.from({length:42}),V=Ev(A,b,1);let Q=C;const X=Sv(A,b);return Q=Q<X?Q:X,W.forEach((it,G)=>{if(G>=V&&G<X+V){const Z=G-V+1;W[G]=D.createElement(zl,{key:G,onClick:()=>{q(Z)}},D.createElement(xv,{active:Z===Q},Z))}else W[G]=D.createElement(zl,{key:G})}),W},[C,q,b,A]);return D.createElement(Qa,{className:n,ref:g,shadow:d,style:{margin:20}},D.createElement(La,null,D.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),D.createElement(Na,null,D.createElement(dr,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(T0,{options:Av,value:b,onChange:z,width:128,menuMaxHeight:200}),D.createElement(b0,{value:A,onChange:H,width:100})),D.createElement(bv,null,D.createElement(yv,null,D.createElement(zl,null,"S"),D.createElement(zl,null,"M"),D.createElement(zl,null,"T"),D.createElement(zl,null,"W"),D.createElement(zl,null,"T"),D.createElement(zl,null,"F"),D.createElement(zl,null,"S")),D.createElement(vv,null,lt)),D.createElement(dr,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement($a,{fullWidth:!0,onClick:c,disabled:!c},"Cancel"),D.createElement($a,{fullWidth:!0,onClick:o?J:void 0,disabled:!o},"OK"))))});wv.displayName="DatePicker";const Dv=n=>{switch(n){case"status":case"well":return F`
        ${Kt({style:"status"})}
      `;case"window":case"outside":return F`
        ${Kt({style:"window"})}
      `;case"field":return F`
        ${Kt({style:"field"})}
      `;default:return F`
        ${Kt()}
      `}},zv=U.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Dv(n)}
  ${({variant:n})=>el(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,hs=R.forwardRef(({children:n,shadow:r=!1,variant:o="window",...c},d)=>D.createElement(zv,{ref:d,shadow:r,variant:o,...c},n));hs.displayName="Frame";const Rv=U.fieldset`
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
  ${n=>n.$disabled&&tl()}
`,Ov=U.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:r})=>r==="flat"?n.canvas:n.material};
`,jv=R.forwardRef(({label:n,disabled:r=!1,variant:o="default",children:c,...d},g)=>D.createElement(Rv,{"aria-disabled":r,$disabled:r,variant:o,ref:g,...d},n&&D.createElement(Ov,{variant:o},n),c));jv.displayName="GroupBox";const Cv=U.div`
  ${({theme:n,size:r="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${la(r)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Cv.displayName="Handle";const Mv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",_v=U.div`
  display: inline-block;
  height: ${({size:n})=>la(n)};
  width: ${({size:n})=>la(n)};
`,kv=U.span`
  display: block;
  background: ${Mv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Bv=R.forwardRef(({size:n=30,...r},o)=>D.createElement(_v,{size:n,ref:o,...r},D.createElement(kv,null)));Bv.displayName="Hourglass";const $v=U.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Hv=U.div`
  position: relative;
`,Uv=U.div`
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
`,Nv=U(ol).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Lv=U.div`
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
`,Qv=R.forwardRef(({backgroundStyles:n,children:r,...o},c)=>D.createElement($v,{ref:c,...o},D.createElement(Hv,null,D.createElement(Uv,null,D.createElement(Nv,{style:n},r)),D.createElement(Lv,null))));Qv.displayName="Monitor";const qv=U.div`
  display: inline-block;
  height: ${he.md};
  width: 100%;
`,Gv=U(ol)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,w0=F`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Yv=U.div`
  position: relative;
  top: 4px;
  ${w0}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,Xv=U.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${w0}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Vv=U.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,D0=17,Zv=U.span`
  display: inline-block;
  width: ${D0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,z0=R.forwardRef(({hideValue:n=!1,shadow:r=!0,value:o,variant:c="default",...d},g)=>{const y=n?null:`${o}%`,w=R.useRef(null),[A,b]=R.useState([]),C=R.useCallback(()=>{if(!w.current||o===void 0)return;const z=w.current.getBoundingClientRect().width,H=Math.round(o/100*z/D0);b(Array.from({length:H}))},[o]);return R.useEffect(()=>(C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)),[C]),D.createElement(qv,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:g,role:"progressbar",variant:c,...d},D.createElement(Gv,{variant:c,shadow:r},c==="default"?D.createElement(D.Fragment,null,D.createElement(Yv,{"data-testid":"defaultProgress1"},y),D.createElement(Xv,{"data-testid":"defaultProgress2",value:o},y)):D.createElement(Vv,{ref:w,"data-testid":"tileProgress"},A.map((z,H)=>D.createElement(Zv,{key:H})))))});z0.displayName="ProgressBar";const R0=F`
  width: ${cl}px;
  height: ${cl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Kv=U(ol)`
  ${R0}
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
`,Jv=U.div`
  ${Ba()}
  ${R0}
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
`,Wv=U.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Fv={flat:Jv,default:Kv},Iv=R.forwardRef(({checked:n,className:r="",disabled:o=!1,label:c="",onChange:d,style:g={},variant:y="default",...w},A)=>{const b=Fv[y];return D.createElement(ss,{$disabled:o,className:r,style:g},D.createElement(b,{$disabled:o,role:"presentation"},n&&D.createElement(Wv,{$disabled:o,variant:y})),D.createElement(fr,{disabled:o,onChange:o?void 0:d,readOnly:o,type:"radio",checked:n,ref:A,...w}),c&&D.createElement(fs,null,c))});Iv.displayName="Radio";const Pv=typeof window<"u"?R.useLayoutEffect:R.useEffect;function Oa(n){const r=R.useRef(n);return Pv(()=>{r.current=n}),R.useCallback((...o)=>(0,r.current)(...o),[])}function Ep(n,r){typeof n=="function"?n(r):n&&(n.current=r)}function Tp(n,r){return R.useMemo(()=>n==null&&r==null?null:o=>{Ep(n,o),Ep(r,o)},[n,r])}var t1=Bp();let Sr=!0,Po=!1,wp;const e1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l1(n){if("type"in n){const{type:r,tagName:o}=n;if(o==="INPUT"&&e1[r]&&!n.readOnly||o==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function a1(n){n.metaKey||n.altKey||n.ctrlKey||(Sr=!0)}function No(){Sr=!1}function n1(){this.visibilityState==="hidden"&&Po&&(Sr=!0)}function i1(n){n.addEventListener("keydown",a1,!0),n.addEventListener("mousedown",No,!0),n.addEventListener("pointerdown",No,!0),n.addEventListener("touchstart",No,!0),n.addEventListener("visibilitychange",n1,!0)}function u1(n){const{target:r}=n;try{return r.matches(":focus-visible")}catch{}return Sr||l1(r)}function r1(){Po=!0,window.clearTimeout(wp),wp=window.setTimeout(()=>{Po=!1},100)}function c1(){const n=R.useCallback(r=>{const o=t1.findDOMNode(r);o!=null&&i1(o.ownerDocument)},[]);return{isFocusVisible:u1,onBlurVisible:r1,ref:n}}function o1(n,r,o){return(o-r)*n+r}function Pu(n,r){if(r!==void 0&&"changedTouches"in n){for(let o=0;o<n.changedTouches.length;o+=1){const c=n.changedTouches[o];if(c.identifier===r)return{x:c.clientX,y:c.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function tr(n){return n&&n.ownerDocument||document}function s1(n,r){var o;const{index:c}=(o=n.reduce((d,g,y)=>{const w=Math.abs(r-g);return d===null||w<d.distance||w===d.distance?{distance:w,index:y}:d},null))!==null&&o!==void 0?o:{};return c??-1}const f1=U.div`
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
`,O0=()=>F`
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
`,d1=U(ol)`
  ${O0()}
`,h1=U(ol)`
  ${O0()}

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
`,p1=U.span`
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
          ${Ba()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:F`
          ${el()}
          ${Kt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:r})=>n&&Hi({mainColor:r.material,secondaryColor:r.borderLightest})}
`,hr=6,m1=U.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?F`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${hr}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:F`
          bottom: ${-6}px;
          height: ${hr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:r})=>r.materialText};
          border-right: 1px solid ${({theme:r})=>r.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:r})=>n&&F`
      ${tl()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,g1=U.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?F`
          transform: translate(${hr+2}px, ${hr+1}px);
        `:F`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,b1=R.forwardRef(({defaultValue:n,disabled:r=!1,marks:o=!1,max:c=100,min:d=0,name:g,onChange:y,onChangeCommitted:w,onMouseDown:A,orientation:b="horizontal",size:C="100%",step:z=1,value:H,variant:q="default",...J},lt)=>{const W=q==="flat"?h1:d1,V=b==="vertical",[Q=d,X]=aa({defaultValue:n,onChange:y??w,value:H}),{isFocusVisible:it,onBlurVisible:G,ref:Z}=c1(),[at,jt]=R.useState(!1),P=R.useRef(),mt=R.useRef(null),Ct=Tp(Z,P),Dt=Tp(lt,Ct),$t=Oa(N=>{it(N)&&jt(!0)}),_t=Oa(()=>{at!==!1&&(jt(!1),G())}),Et=R.useRef(),L=R.useMemo(()=>o===!0&&Number.isFinite(z)?[...Array(Math.round((c-d)/z)+1)].map((N,B)=>({label:void 0,value:d+z*B})):Array.isArray(o)?o:[],[o,c,d,z]),rt=Oa(N=>{const B=(c-d)/10,tt=L.map(ht=>ht.value),K=tt.indexOf(Q);let ft=0;switch(N.key){case"Home":ft=d;break;case"End":ft=c;break;case"PageUp":z&&(ft=Q+B);break;case"PageDown":z&&(ft=Q-B);break;case"ArrowRight":case"ArrowUp":z?ft=Q+z:ft=tt[K+1]||tt[tt.length-1];break;case"ArrowLeft":case"ArrowDown":z?ft=Q-z:ft=tt[K-1]||tt[0];break;default:return}N.preventDefault(),z&&(ft=xp(ft,z,d)),ft=Ca(ft,d,c),X(ft),jt(!0),y==null||y(ft),w==null||w(ft)}),Y=R.useCallback(N=>{if(!P.current)return 0;const B=P.current.getBoundingClientRect();let tt;V?tt=(B.bottom-N.y)/B.height:tt=(N.x-B.left)/B.width;let K;if(K=o1(tt,d,c),z)K=xp(K,z,d);else{const ft=L.map(_=>_.value),ht=s1(ft,K);K=ft[ht]}return K=Ca(K,d,c),K},[L,c,d,z,V]),ot=Oa(N=>{var B;const tt=Pu(N,Et.current);if(!tt)return;const K=Y(tt);(B=mt.current)===null||B===void 0||B.focus(),X(K),jt(!0),y==null||y(K)}),m=Oa(N=>{const B=Pu(N,Et.current);if(!B)return;const tt=Y(B);w==null||w(tt),Et.current=void 0;const K=tr(P.current);K.removeEventListener("mousemove",ot),K.removeEventListener("mouseup",m),K.removeEventListener("touchmove",ot),K.removeEventListener("touchend",m)}),k=Oa(N=>{var B;A==null||A(N),N.preventDefault(),(B=mt.current)===null||B===void 0||B.focus(),jt(!0);const tt=Pu(N,Et.current);if(tt){const ft=Y(tt);X(ft),y==null||y(ft)}const K=tr(P.current);K.addEventListener("mousemove",ot),K.addEventListener("mouseup",m)}),I=Oa(N=>{var B;N.preventDefault();const tt=N.changedTouches[0];tt!=null&&(Et.current=tt.identifier),(B=mt.current)===null||B===void 0||B.focus(),jt(!0);const K=Pu(N,Et.current);if(K){const ht=Y(K);X(ht),y==null||y(ht)}const ft=tr(P.current);ft.addEventListener("touchmove",ot),ft.addEventListener("touchend",m)});return R.useEffect(()=>{const{current:N}=P;N==null||N.addEventListener("touchstart",I);const B=tr(N);return()=>{N==null||N.removeEventListener("touchstart",I),B.removeEventListener("mousemove",ot),B.removeEventListener("mouseup",m),B.removeEventListener("touchmove",ot),B.removeEventListener("touchend",m)}},[m,ot,I]),D.createElement(f1,{$disabled:r,hasMarks:!!L.length,isFocused:at,onMouseDown:k,orientation:b,ref:Dt,size:la(C),...J},D.createElement("input",{disabled:r,name:g,type:"hidden",value:Q??0}),L&&L.map(N=>D.createElement(m1,{$disabled:r,"data-testid":"tick",key:N.value/(c-d)*100,orientation:b,style:{[V?"bottom":"left"]:`${(N.value-d)/(c-d)*100}%`}},N.label&&D.createElement(g1,{"aria-hidden":!0,"data-testid":"mark",orientation:b},N.label))),D.createElement(W,{orientation:b,variant:q}),D.createElement(p1,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":b,"aria-valuemax":c,"aria-valuemin":d,"aria-valuenow":Q,onBlur:_t,onFocus:$t,onKeyDown:rt,orientation:b,ref:mt,role:"slider",style:{[V?"bottom":"left"]:`${(V?-100:0)+100*(Q-d)/(c-d)}%`},tabIndex:r?void 0:0,variant:q}))});b1.displayName="Slider";const y1=U.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${cs};
  overflow-y: auto;
`,j0=R.forwardRef(function({children:r,...o},c){return D.createElement(y1,{ref:c,...o},r)});j0.displayName="TableBody";const v1=U.td`
  padding: 0 8px;
`,st=R.forwardRef(function({children:r,...o},c){return D.createElement(v1,{ref:c,...o},r)});st.displayName="TableDataCell";const x1=U.thead`
  display: table-header-group;
`,C0=R.forwardRef(function({children:r,...o},c){return D.createElement(x1,{ref:c,...o},r)});C0.displayName="TableHead";const A1=U.th`
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
  ${({$disabled:n})=>n&&tl()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&tl()}
  }
`,ur=R.forwardRef(function({disabled:r=!1,children:o,onClick:c,onTouchStart:d=Ha,sort:g,...y},w){const A=g==="asc"?"ascending":g==="desc"?"descending":void 0;return D.createElement(A1,{$disabled:r,"aria-disabled":r,"aria-sort":A,onClick:r?void 0:c,onTouchStart:r?void 0:d,ref:w,...y},D.createElement("div",null,o))});ur.displayName="TableHeadCell";const S1=U.tr`
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
`,Pt=R.forwardRef(function({children:r,...o},c){return D.createElement(S1,{ref:c,...o},r)});Pt.displayName="TableRow";const E1=U.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,T1=U(ol)`
  &:before {
    box-shadow: none;
  }
`,M0=R.forwardRef(({children:n,...r},o)=>D.createElement(T1,null,D.createElement(E1,{ref:o,...r},n)));M0.displayName="Table";const w1=U.button`
  ${el()}
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
    ${Cn}
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
`,Mi=R.forwardRef(({value:n,onClick:r,selected:o=!1,children:c,...d},g)=>D.createElement(w1,{"aria-selected":o,selected:o,onClick:y=>r==null?void 0:r(n,y),ref:g,role:"tab",...d},c));Mi.displayName="Tab";const D1=U.div`
  ${el()}
  ${Kt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,_0=R.forwardRef(({children:n,...r},o)=>D.createElement(D1,{ref:o,...r},n));_0.displayName="TabBody";const z1=U.div`
  position: relative;
  ${({isMultiRow:n,theme:r})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,R1=U.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function O1(n,r){const o=[];for(let c=r;c>0;c-=1)o.push(n.splice(0,Math.ceil(n.length/c)));return o}const k0=R.forwardRef(({value:n,onChange:r=Ha,children:o,rows:c=1,...d},g)=>{const y=R.useMemo(()=>{var w;const A=(w=D.Children.map(o,z=>{if(!D.isValidElement(z))return null;const H={selected:z.props.value===n,onClick:r};return D.cloneElement(z,H)}))!==null&&w!==void 0?w:[],b=O1(A,c).map((z,H)=>({key:H,tabs:z})),C=b.findIndex(z=>z.tabs.some(H=>H.props.selected));return b.push(b.splice(C,1)[0]),b},[o,r,c,n]);return D.createElement(z1,{...d,isMultiRow:c>1,role:"tablist",ref:g},y.map(w=>D.createElement(R1,{key:w.key},w.tabs)))});k0.displayName="Tabs";const j1=["blur","focus"],C1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Dp(n){return"nativeEvent"in n&&j1.includes(n.type)}function zp(n){return"nativeEvent"in n&&C1.includes(n.type)}const M1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},_1=U.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${rs};
  text-align: center;
  font-size: 1rem;
  ${n=>M1[n.position]}
`,k1=U.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,B1=R.forwardRef(({className:n,children:r,disableFocusListener:o=!1,disableMouseListener:c=!1,enterDelay:d=1e3,leaveDelay:g=0,onBlur:y,onClose:w,onFocus:A,onMouseEnter:b,onMouseLeave:C,onOpen:z,style:H,text:q,position:J="top",...lt},W)=>{const[V,Q]=R.useState(!1),[X,it]=R.useState(),[G,Z]=R.useState(),at=!o,jt=!c,P=Y=>{window.clearTimeout(X),window.clearTimeout(G);const ot=window.setTimeout(()=>{Q(!0),z==null||z(Y)},d);it(ot)},mt=Y=>{Y.persist(),Dp(Y)?A==null||A(Y):zp(Y)&&(b==null||b(Y)),P(Y)},Ct=Y=>{window.clearTimeout(X),window.clearTimeout(G);const ot=window.setTimeout(()=>{Q(!1),w==null||w(Y)},g);Z(ot)},Dt=Y=>{Y.persist(),Dp(Y)?y==null||y(Y):zp(Y)&&(C==null||C(Y)),Ct(Y)},$t=at?Dt:void 0,_t=at?mt:void 0,Et=jt?mt:void 0,L=jt?Dt:void 0,rt=at?0:void 0;return D.createElement(k1,{"data-testid":"tooltip-wrapper",onBlur:$t,onFocus:_t,onMouseEnter:Et,onMouseLeave:L,tabIndex:rt},D.createElement(_1,{className:n,"data-testid":"tooltip",position:J,ref:W,show:V,style:H,...lt},q),r)});B1.displayName="Tooltip";const ts=U(fs)`
  white-space: nowrap;
`,B0=F`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":F`
          cursor: pointer;

          :focus {
            ${ts} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,$1=U.ul`
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
`,H1=U.li`
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
`,U1=U.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,N1=U.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${B0};

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
`,Rp=U(ss)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${B0};
`,L1=U.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Op(n,r){return n.includes(r)?n.filter(o=>o!==r):[...n,r]}function jp(n){n.preventDefault()}function $0({className:n,disabled:r,expanded:o,innerRef:c,level:d,select:g,selected:y,style:w,tree:A=[]}){const b=d===0,C=R.useCallback(z=>{var H,q;const J=!!(z.items&&z.items.length>0),lt=o.includes(z.id),W=(H=r||z.disabled)!==null&&H!==void 0?H:!1,V=W?jp:G=>g(G,z),Q=W?jp:G=>g(G,z),X=y===z.id,it=D.createElement(L1,{"aria-hidden":!0},z.icon);return D.createElement(H1,{key:z.label,isRootLevel:b,role:"treeitem","aria-expanded":lt,"aria-selected":X,hasItems:J},J?D.createElement(U1,{open:lt},D.createElement(N1,{onClick:V,$disabled:W},D.createElement(Rp,{$disabled:W},it,D.createElement(ts,null,z.label))),lt&&D.createElement($0,{className:n,disabled:W,expanded:o,level:d+1,select:g,selected:y,style:w,tree:(q=z.items)!==null&&q!==void 0?q:[]})):D.createElement(Rp,{as:"button",$disabled:W,onClick:Q},it,D.createElement(ts,null,z.label)))},[n,r,o,b,d,g,y,w]);return D.createElement($1,{className:b?n:void 0,style:b?w:void 0,ref:b?c:void 0,role:b?"tree":"group",isRootLevel:b},A.map(C))}function Q1({className:n,defaultExpanded:r=[],defaultSelected:o,disabled:c=!1,expanded:d,onNodeSelect:g,onNodeToggle:y,selected:w,style:A,tree:b=[]},C){const[z,H]=aa({defaultValue:r,onChange:y,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[q,J]=aa({defaultValue:o,onChange:g,onChangePropName:"onNodeSelect",value:w,valuePropName:"selected"}),lt=R.useCallback((Q,X)=>{if(y){const it=Op(z,X);y(Q,it)}H(it=>Op(it,X))},[z,y,H]),W=R.useCallback((Q,X)=>{J(X),g&&g(Q,X)},[g,J]),V=R.useCallback((Q,X)=>{Q.preventDefault(),W(Q,X.id),X.items&&X.items.length&&lt(Q,X.id)},[W,lt]);return D.createElement($0,{className:n,disabled:c,expanded:z,level:0,innerRef:C,select:V,selected:q,style:A,tree:b})}const q1=R.forwardRef(Q1);q1.displayName="TreeView";function G1(){const[n,r]=R.useState(new Date);R.useEffect(()=>{const d=setInterval(()=>r(new Date),1e3);return()=>clearInterval(d)},[]);const o=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0}).format(n);return h.jsx(hs,{variant:"field",shadow:!0,style:{padding:"0.3rem",lineHeight:"1",width:100},children:h.jsx("center",{children:o})})}function Y1(){return h.jsx(Ua,{style:{width:"100%",height:"100%"},children:h.jsxs("div",{style:{maxWidth:960,margin:"0 auto",padding:16},children:[h.jsx("h2",{style:{fontWeight:"bold",fontSize:28,margin:"12px 0"},children:"Hey, I'm Michael 👋"}),h.jsx(Xe,{}),h.jsx("div",{style:{textAlign:"center",margin:"16px 0"},children:h.jsx("img",{src:"/me3.png",width:420,height:300,alt:"picture of me",style:{borderRadius:4}})}),h.jsx("p",{children:"I’ve always been fascinated by technology. As a kid, I dismantled old remotes trying to understand how a thin circuit board could control a TV. That curiosity grew into a passion for building things of my own."}),h.jsxs("p",{children:["In middle school I discovered programming through ",h.jsx("strong",{children:"Unity + C#"}),", making 2D and 3D games for friends. By high school, I was diving deep into ",h.jsx("strong",{children:"iOS development"})," with Swift and Xcode. My first published app,",h.jsx("em",{children:"InsomniChat"}),", was built during sleepless nights sophomore year—teaching me backend basics and the grind of shipping to the App Store."]}),h.jsxs("p",{children:["My interests expanded into ",h.jsx("strong",{children:"web development"})," with React.js, where I built sites for family and small businesses, and ",h.jsx("strong",{children:"automation"})," with Python to solve everyday problems. Software became my universal tool for creation and problem-solving."]}),h.jsxs("p",{children:["Today, I’m a ",h.jsx("strong",{children:"Computer Science undergrad at Stony Brook University"}),". My early tinkering gave me a head start, but my coursework and projects here sharpened my fundamentals in systems, algorithms, and security. I’ve also grown as a teammate, collaborator, and communicator. ",h.jsx("span",{style:{fontWeight:"bold"},children:"Check out the Education tab for details on my academic journey."})]})]})})}const X1=[{code:"CSE 214",title:"Data Structures & Algorithms",outcomes:["Implemented arrays/lists, trees, heaps, hash tables, graphs.","Analyzed time/space complexity; applied greedy/DP/graph algorithms."]},{code:"CSE 320",title:"Systems Fundamentals II",outcomes:["Wrote C for systems programming; memory, concurrency, perf profiling.","Explored processes, IPC, linking/loading, ELF, and debugging toolchains."]},{code:"CSE 216",title:"Programming Abstractions",outcomes:["Built modular software using OOP, functional patterns, and generics.","Reasoned about type systems, interfaces, and API design trade-offs."]},{code:"CSE 373",title:"Analysis of Algorithms",outcomes:["Proved correctness and bounds; amortized analysis and reductions.","Explored NP-completeness and approximation techniques."]},{code:"CSE 316",title:"Software Development",outcomes:["Applied version control, testing, CI, and code reviews at team scale.","Delivered spec-driven features with iterative milestones."]},{code:"CSE 337",title:"Scripting Languages",outcomes:["Automated workflows in Python, Ruby, Bash; text/JSON/CSV pipelines.","Wrote CLI tools and glue code for data/ops tasks."]},{code:"CSE 361",title:"Web Security",outcomes:["Mitigated XSS/CSRF, injection, auth/session flaws; threat modeling.","Hardened frontend/backend with secure headers and input validation."]},{code:"CSE 360",title:"Software Security",outcomes:["Secure coding in C/C++/Java; memory safety, fuzzing, static analysis.","Explored crypto primitives, authZ/authN, and secure deployment."]}];function V1({code:n,title:r,outcomes:o}){return h.jsxs("div",{style:{marginBottom:12},children:[h.jsxs("div",{style:{display:"flex",gap:8,alignItems:"baseline"},children:[h.jsx("strong",{children:n}),h.jsxs("span",{children:["— ",r]})]}),h.jsx("ul",{style:{margin:4,paddingLeft:18},children:o.map((c,d)=>h.jsx("li",{children:c},d))})]})}function Z1(){return h.jsx(Ua,{style:{width:"100%",height:"100%"},children:h.jsxs("div",{style:{maxWidth:980,margin:"0 auto",padding:16},children:[h.jsx("h2",{style:{fontWeight:"bold",fontSize:28,margin:"12px 0"},children:"Computer Science At Stony Brook University 💻⚙️"}),h.jsx(Xe,{}),h.jsx("div",{style:{textAlign:"center",margin:"16px 0"},children:h.jsx("img",{src:"/Stony_Brook_University_seal.svg",alt:"Stony Brook University",style:{maxHeight:120}})}),h.jsx("p",{children:"Final semester B.S. in Computer Science. A rigorous, systems-forward program that sharpened my foundations and team software practices."}),h.jsx(Xe,{style:{margin:"12px 0"}}),h.jsx("h3",{style:{marginTop:0},children:"Key Coursework"}),h.jsx("div",{style:{display:"grid",gap:8},children:X1.map(n=>h.jsx(V1,{...n},n.code))}),h.jsx(Xe,{style:{margin:"12px 0"}}),h.jsx("h3",{style:{marginTop:0},children:"Extracurriculars"}),h.jsxs("ul",{style:{marginTop:4,paddingLeft:18},children:[h.jsxs("li",{children:[h.jsx("strong",{children:"LOQI (VIP Team)"})," — Frontend engineer for an AI-powered learning platform. Built reusable React patterns, collaborated via GitHub workflows, and coordinated with backend/ML services."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"IT / TLT Media Lab"})," — Student software engineer building and maintaining instructional web apps; improved DDEV/Docker workflow and accessibility (keyboard navigation, screen-reader support)."]})]})]})})}const Cp=[{company:"Stony Brook University — TLT Media Lab",role:"Student Software Engineer",timeframe:"2025 — Present",bullets:["Developed and maintained multiple interactive websites used in Stony Brook University courses within a DDEV environment using the LAMP stack.","Configured local DDEV + Docker environments to simulate authenticated user sessions by replicating IdP and service provider authentication flows, creating dev environments that mirror production.","Improved website accessibility by enhancing PHP-based interfaces to support keyboard navigation and screen-reader compatibility for visually impaired students.","Contributed to a streamlined development workflow, ensuring smoother transitions from development to production.","Optimized CI/CD reliability and reduced onboarding time for new developers by codifying environment setup and automating admin authorization."],tech:["Docker","DDEV","PHP","Apache","MySQL","CI/CD","Accessibility"],links:[]},{company:"Pulp Chat",role:"Software Engineering Intern",timeframe:"2024",bullets:["Designed and shipped a Flask + SQLite internal tool for data preprocessing and collection with access controls.","Built React + Tailwind UI and used Prisma for schema management; delivered a full-stack workflow.","Documented architecture and tests to improve maintainability and team adoption."],tech:["Flask","SQLite","React","Tailwind CSS","Prisma"],links:[]},{company:"Black to Business",role:"Web Development Intern",timeframe:"2024",bullets:["Customized WordPress templates with advanced CSS/JS to improve UX consistency on the podcast platform.","Automated podcast analytics ingestion with Python (deployed via GCP Functions) to replace manual workflows.","Collaborated with design to align branding with accessibility best practices."],tech:["WordPress","JavaScript","CSS","Python","Google Cloud Functions"],links:[]},{company:"LOQI (VIP Team)",role:"Software Engineer — Frontend",timeframe:"2024",bullets:["Implemented reusable React components and patterns for an AI learning platform (responsive + accessible).","Coordinated with backend/ML services in a microservices setup; hardened API integration flows.","Improved team velocity by standardizing code style and UI primitives."],tech:["React","TypeScript","REST","Design Systems"],links:[]}],Ol={container:{maxWidth:980,margin:"0 auto",padding:16},headerRow:{display:"flex",alignItems:"baseline",gap:8,flexWrap:"wrap"},role:{fontSize:18,fontWeight:700},company:{fontSize:18},timeframe:{marginLeft:"auto",fontSize:14,opacity:.8},ul:{marginTop:8,marginBottom:8,paddingLeft:20},chips:{display:"flex",flexWrap:"wrap",gap:8,marginTop:8},chip:{display:"inline-flex",alignItems:"center",padding:"2px 8px",border:"1px solid",borderColor:"var(--border, #000)",background:"#e5e5e5",fontSize:12},links:{display:"flex",gap:8,marginTop:8}};function K1({items:n}){return h.jsx("div",{style:Ol.chips,children:n.map(r=>h.jsx("span",{style:Ol.chip,"aria-label":`Tech: ${r}`,children:r},r))})}function J1({exp:n}){var r;return h.jsxs("div",{role:"article","aria-label":`${n.role} at ${n.company}`,children:[h.jsxs("div",{style:Ol.headerRow,children:[h.jsx("div",{style:Ol.role,children:n.role}),h.jsxs("div",{style:Ol.company,children:["@ ",n.company]}),h.jsx("div",{style:Ol.timeframe,children:n.timeframe})]}),h.jsx("ul",{style:Ol.ul,children:n.bullets.map((o,c)=>h.jsx("li",{children:o},c))}),h.jsx(K1,{items:n.tech}),(r=n.links)!=null&&r.length?h.jsx("div",{style:Ol.links,children:n.links.map(o=>h.jsx($a,{onClick:()=>window.open(o.href,"_blank"),children:o.label},o.href))}):null]})}function W1(){return h.jsx(Ua,{style:{width:"100%",height:"100%"},children:h.jsxs("div",{style:Ol.container,children:[h.jsx("h2",{style:{fontWeight:"bold",fontSize:28,margin:"12px 0"},children:"Work Experience 👨‍💻🏢"}),h.jsx(Xe,{}),h.jsx("p",{children:"My education laid the groundwork; these roles sharpened the tools. Below are the technical highlights and impact from recent work."}),h.jsx(Xe,{}),h.jsx("div",{style:{display:"grid",gap:24},children:Cp.map((n,r)=>h.jsxs("div",{children:[h.jsx(J1,{exp:n}),r<Cp.length-1&&h.jsx(Xe,{style:{marginTop:16}})]},r))})]})})}const F1=[{title:"AI Academy — LLM Quiz Generator",subtitle:"Web app for ingest → retrieve → generate quizzes",timeframe:"2025",desc:"React + Chakra UI frontend with a LangGraph/FastAPI backend that ingests PDFs/URLs/text, builds embeddings, and performs vector retrieval to generate interactive MCQs. Orchestrates parsing, chunking, embedding, cosine filtering, and top‑k re‑ranking to boost relevance while trimming latency and token spend.",tech:["React","TypeScript","Chakra UI","FastAPI","LangGraph","Embeddings","Vector Search"],links:[{label:"GitHub",href:"https://github.com/MichaelKawwa/ai-academy/tree/main"}]},{title:"Phreddit (Reddit Clone)",subtitle:"CSE 316 — Software Development",timeframe:"2024",desc:"Full‑stack clone supporting communities, posts, comments, and voting with a RESTful API. Focused on clean data modeling, client/server validation, and responsive UX for seamless interaction.",tech:["React","Axios","Node.js","Express","MongoDB"],links:[{label:"GitHub",href:"https://github.com/MichaelKawwa/phreddit"}]},{title:"LOQI — AI Learning Platform",subtitle:"VIP team frontend work",timeframe:"2024",desc:"Implemented reusable React components and patterns; coordinated with backend/ML microservices via REST.",tech:["React","TypeScript","Design System","REST"],links:[{label:"GitHub",href:"https://github.com/viLoqi/neo_client"}]},{title:"Verbal Digit Span (WAIS-style)",subtitle:"Web app using Web Speech APIs",timeframe:"2025",desc:"Digit Span Forward/Backward/Sequencing with 1s pacing, speech synthesis/recognition, and WAIS-IV norm-based scoring.",tech:["React","Vite","Web Speech API","TypeScript"],links:[{label:"Live Demo",href:"https://verbal-digitspan.netlify.app/"}]},{title:"InsomniChat",subtitle:"iOS app for late-night chat rooms",timeframe:"HS • Published",desc:"Native iOS app built during high school. Rooms unlock after certain hours; focused on simple UX and reliability.",tech:["Swift","Xcode","iOS"],links:[]},{title:"Consistently",subtitle:"Habit tracking with streak insights",timeframe:"HS • Published",desc:"Lightweight habit tracker with streak logic and daily prompts. Emphasis on offline-first and fast UI.",tech:["Swift","SwiftUI","iOS"],links:[]}],Ie={wrap:{maxWidth:1060,margin:"0 auto",padding:16},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16,marginTop:12},card:{padding:12,background:"#fff"},titleRow:{display:"flex",alignItems:"baseline",gap:8,flexWrap:"wrap"},title:{fontWeight:700,fontSize:18},timeframe:{marginLeft:"auto",fontSize:12,opacity:.75},subtitle:{fontSize:14,opacity:.9},desc:{marginTop:8},chips:{display:"flex",flexWrap:"wrap",gap:8,marginTop:10},chip:{display:"inline-flex",padding:"2px 8px",border:"1px solid #000",background:"#e5e5e5",fontSize:12},links:{display:"flex",gap:8,marginTop:10}};function I1({items:n}){return n!=null&&n.length?h.jsx("div",{style:Ie.chips,children:n.map(r=>h.jsx("span",{style:Ie.chip,"aria-label":`Tech: ${r}`,children:r},r))}):null}function P1({links:n}){return n!=null&&n.length?h.jsx("div",{style:Ie.links,children:n.map(r=>h.jsx($a,{onClick:()=>window.open(r.href,"_blank"),children:r.label},r.label))}):null}function tx({p:n}){return h.jsxs(hs,{variant:"outside",shadow:!0,style:Ie.card,children:[h.jsxs("div",{style:Ie.titleRow,children:[h.jsx("div",{style:Ie.title,children:n.title}),h.jsx("div",{style:Ie.timeframe,children:n.timeframe})]}),n.subtitle&&h.jsx("div",{style:Ie.subtitle,children:n.subtitle}),h.jsx("div",{style:Ie.desc,children:n.desc}),h.jsx(I1,{items:n.tech}),h.jsx(P1,{links:n.links})]})}function ex(){return h.jsx(Ua,{style:{width:"100%",height:"100%"},children:h.jsxs("div",{style:Ie.wrap,children:[h.jsx("h1",{style:{fontWeight:"bold",fontSize:28,margin:"12px 0"},children:"Projects 🚧"}),h.jsx("p",{children:"Selected builds across mobile, web, and automation. Each card lists stack + a quick summary; add GitHub/Demo links as you like."}),h.jsx(Xe,{}),h.jsx("div",{style:Ie.grid,children:F1.map(n=>h.jsx(tx,{p:n},n.title))})]})})}function lx(){const[n,r]=R.useState({activeTab:0}),o=(d,g)=>{console.log({value:d,event:g}),r({activeTab:d})},{activeTab:c}=n;return h.jsxs(Qa,{resizable:!0,style:{width:"70%",height:"clamp(560px, 75vh, 1000px)",display:"flex",flexDirection:"column"},children:[h.jsx(La,{className:"window-title",children:h.jsx("span",{children:"All_About_Me.exe"})}),h.jsxs(Na,{style:{display:"flex",flexDirection:"column",height:"100%"},children:[h.jsxs(k0,{value:c,onChange:o,children:[h.jsx(Mi,{value:0,children:"Who Is Michael?"}),h.jsx(Mi,{value:1,children:"Education"}),h.jsx(Mi,{value:2,children:"Experience"}),h.jsx(Mi,{value:3,children:"Projects"})]}),h.jsx("div",{style:{flex:1,overflow:"hidden"},children:h.jsxs(_0,{style:{height:"90%",display:"flex",flexDirection:"column",minHeight:0},children:[c===0&&h.jsx(Y1,{}),c===1&&h.jsx(Z1,{}),c===2&&h.jsx(W1,{}),c===3&&h.jsx(ex,{})]})})]})]})}function ax(){return h.jsxs(Qa,{className:"window",children:[h.jsx(La,{active:!0,className:"window-title",children:h.jsx("span",{children:"Me.jpeg"})}),h.jsxs(Na,{children:[h.jsx("img",{src:"/me3.png",width:500,height:350,alt:"picture of me"}),h.jsx("h1",{style:{fontSize:"20px"},children:"Thats Me!"})]})]})}function nx(){return h.jsxs(Qa,{style:{width:320,height:"100%"},children:[h.jsx(La,{children:"Skills_Pokedex.exe"}),h.jsx(Na,{children:h.jsx(M0,{children:h.jsxs(Ua,{style:{width:"100%",height:"60vh"},children:[h.jsx(C0,{children:h.jsxs(Pt,{children:[h.jsx(ur,{children:"rank"}),h.jsx(ur,{children:"skill"}),h.jsx(ur,{children:"Mastery"})]})}),h.jsxs(j0,{children:[h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"fire",children:"🤔"})}),h.jsx(st,{children:"Problem-Solving"}),h.jsx(st,{children:"100%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"fire",children:"🤝"})}),h.jsx(st,{children:"Teamwork"}),h.jsx(st,{children:"100%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"fire",children:"😺"})}),h.jsx(st,{children:"Git/GitHub"}),h.jsx(st,{children:"95%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"fire",children:"⚛️"})}),h.jsx(st,{children:"React JS"}),h.jsx(st,{children:"90%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"fire",children:"✅"})}),h.jsx(st,{children:"Javascript"}),h.jsx(st,{children:"90%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"fire",children:"♨️"})}),h.jsx(st,{children:"Java"}),h.jsx(st,{children:"90%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"⚡"})}),h.jsx(st,{children:"Swift/Xcode"}),h.jsx(st,{children:"85%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"🤖"})}),h.jsx(st,{children:"C programming"}),h.jsx(st,{children:"80%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"🐍"})}),h.jsx(st,{children:"Python"}),h.jsx(st,{children:"90%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"🟢"})}),h.jsx(st,{children:"Node JS"}),h.jsx(st,{children:"95%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"🌐"})}),h.jsx(st,{children:"MERN Stack"}),h.jsx(st,{children:"90%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"💎"})}),h.jsx(st,{children:"Ruby"}),h.jsx(st,{children:"75%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"🦾"})}),h.jsx(st,{children:"X86 Assembly"}),h.jsx(st,{children:"75%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"🚀"})}),h.jsx(st,{children:"MIPS Assembly"}),h.jsx(st,{children:"75%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"📟"})}),h.jsx(st,{children:"Bash"}),h.jsx(st,{children:"70%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"🆆"})}),h.jsx(st,{children:"Wordpress"}),h.jsx(st,{children:"80%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"☁️"})}),h.jsx(st,{children:"AWS"}),h.jsx(st,{children:"60%"})]}),h.jsxs(Pt,{children:[h.jsx(st,{style:{textAlign:"center"},children:h.jsx("span",{role:"img","aria-label":"lightning",children:"📡"})}),h.jsx(st,{children:"GCP"}),h.jsx(st,{children:"60%"})]})]})]})})})]})}function ix({onClick:n}){return h.jsx("div",{onClick:n,style:{cursor:"pointer"},children:h.jsx(f0,{size:50,src:"/personalIMG.jpg"})})}function ux(){return h.jsxs(Qa,{style:{width:"60vw",height:"60vh"},children:[h.jsx(La,{children:"Resume.pdf"}),h.jsx(Na,{style:{width:"90%",height:"80%"},children:h.jsx("iframe",{src:"/michael_kawwa_resume.pdf",style:{width:"100%",height:"100%"}})})]})}const H0="/github-mark.png",U0="/LI-In-Bug.png";function rx(){return h.jsxs(Qa,{style:{width:"40%",height:"50%",background:"white"},children:[h.jsx(La,{children:"Contact.exe"}),h.jsxs(Na,{style:{background:"white"},children:[h.jsx("h1",{style:{fontSize:"20px",fontWeight:"bold",textDecoration:"underline",marginBottom:"20px"},children:"Lets Get In Touch:"}),h.jsxs("p",{style:{marginBottom:"10px"},children:["You can email me here:",h.jsx("a",{href:"mailto:kawwamichael@gmail.com",style:{color:"blue"},children:"    kawwamichael@gmail.com"})]}),h.jsxs("p",{style:{marginBottom:"10px"},children:["you can also find me at Github:",h.jsx("a",{href:"https://github.com/MichaelKawwa",style:{textDecoration:"none",color:"inherit",display:"inline-flex",gap:"10px",alignItems:"center"},children:h.jsx("img",{src:H0,alt:"github"})})]}),h.jsxs("p",{style:{marginBottom:"10px"},children:["And Linkedin:",h.jsx("a",{href:"https://www.linkedin.com/in/michael-kawwa-6734b7255/",style:{textDecoration:"none",color:"inherit",display:"inline-flex",gap:"10px",alignItems:"center"},children:h.jsx("img",{src:U0,alt:"linkedin"})})]})]})]})}var Lo,Mp;function cx(){if(Mp)return Lo;Mp=1;var n={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return Lo=n,Lo}var ox=cx();const pr=kp(ox),sx="/assets/logo-Ut8b8d2c.png",N0="/assets/ms_sans_serif-Du8rjN1q.woff2",L0="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",_p={small:400,medium:900,large:1140},Q0=Object.keys(_p).reduce((n,r)=>(n[r]=(...o)=>F`
      @media (max-width: ${_p[r]}px) {
          ${F(...o)}
      }
  `,n),{}),fx=U.div`

  height: 80vh;
  width: 100%;

  padding: 7rem;
  padding-left: 5rem;

  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: stretch;
  margin-bottom: 40px;

  ${Q0.medium`
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
`,dx=o0`
  ${$p}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${N0}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${L0}') format('woff2');
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

  ${Q0.medium`
      grid-template-columns: 1fr;
      grid-gap: 40px;
      padding: 10px;
      width: 95%;
  `} 
`;function hx(){const[n,r]=R.useState(!1),[o,c]=R.useState(!1),[d,g]=R.useState({activeWindow:0}),y=A=>{console.log({value:A}),g({activeWindow:A})},{activeWindow:w}=d;return h.jsxs("div",{className:"desktop",style:{background:pr.desktopBackground},children:[h.jsx(dx,{}),h.jsxs(r0,{theme:pr,children:[h.jsx("nav",{children:h.jsx(s0,{style:{zIndex:3,padding:"2.5px"},children:h.jsxs(dr,{style:{justifyContent:"space-between"},children:[h.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",gap:10},children:[h.jsx(ix,{onClick:()=>y(1)}),h.jsxs("div",{style:{position:"relative"},children:[h.jsxs($a,{onClick:()=>r(!n),active:n,style:{fontWeight:"bold"},children:[h.jsx("img",{src:sx,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"Start"]}),n&&h.jsxs(Fo,{style:{position:"absolute",left:"0",top:"100%"},children:[h.jsxs(ta,{onClick:()=>{y(0),r(!1)},children:[h.jsx("span",{role:"img","aria-label":"👨‍💻",children:"👨‍💻"}),"Michael"]}),h.jsxs(ta,{onClick:()=>{y(3),r(!1)},children:[h.jsx("span",{role:"img","aria-label":"📁",children:"📁"}),"Resume"]}),h.jsxs(ta,{onClick:()=>{y(2),r(!1)},children:[h.jsx("span",{role:"img","aria-label":"📁",children:"🔥"}),"Skills"]}),h.jsx(Xe,{}),h.jsxs(ta,{onClick:()=>c(!o),children:[h.jsx("span",{role:"img","aria-label":"📱",children:"📱"}),"Socials"]}),h.jsx(Xe,{}),h.jsxs(ta,{onClick:()=>{y(4),r(!1)},children:[h.jsx("span",{role:"img","aria-label":"📧",children:"📧"}),"Email"]})]}),n&&o&&h.jsxs(Fo,{style:{position:"absolute",left:"125%",top:"400%"},children:[h.jsx(ta,{onClick:()=>c(!1),children:h.jsxs("a",{href:"https://github.com/MichaelKawwa",style:{textDecoration:"none",color:"inherit",display:"inline-flex",gap:"10px",alignItems:"center"},children:[h.jsx("img",{src:H0,alt:"github"}),"Github"]})}),h.jsx(ta,{onClick:()=>c(!1),children:h.jsxs("a",{href:"https://www.linkedin.com/in/michael-kawwa-6734b7255/",style:{textDecoration:"none",color:"inherit",display:"inline-flex",gap:"10px",alignItems:"center"},children:[h.jsx("img",{src:U0,alt:"linkedin"}),"Linkedin"]})})]}),";"]})]}),h.jsx(G1,{})]})})}),h.jsxs(fx,{children:[w==0&&h.jsx(lx,{}),w==1&&h.jsx(ax,{}),w==2&&h.jsx(nx,{}),w==3&&h.jsx(ux,{}),w==4&&h.jsx(rx,{})]})]})]})}const px=o0`
  ${$p}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${N0}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${L0}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;function mx(){const[n,r]=R.useState(!0),[o,c]=R.useState(0);return R.useEffect(()=>{const d=setInterval(()=>{c(g=>{if(g===100)return r(!1),0;const y=Math.random()*50;return Math.min(g+y,100)})},500);return()=>{clearInterval(d)}},[]),h.jsxs("div",{className:"desktop",style:{background:pr.desktopBackground},children:[h.jsx(px,{}),h.jsx(r0,{theme:pr,children:n?h.jsx(z0,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},value:Math.floor(o)}):h.jsx(hx,{})})]})}gb.createRoot(document.getElementById("root")).render(h.jsx(R.StrictMode,{children:h.jsx(mx,{})}));
