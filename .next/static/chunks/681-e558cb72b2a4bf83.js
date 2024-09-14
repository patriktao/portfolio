(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{9081:function(e,t){"use strict";t.lO=void 0;let r=null,n=null,a=null,o=-1/0,s=!1,i=(e,t,r)=>{a=[e,r],c()};function c(){if(s)return;null===r&&(r="Apple Computer, Inc."===navigator.vendor?310:52);let e=performance.now()-o;e>=r?l():(setTimeout(l,r-e),s=!0)}function l(){s=!1,o=performance.now(),null!==n?(history.pushState(n[0],"",n[1]),n=null,null!==a&&c()):(history.replaceState(a[0],"",a[1]),a=null)}t.lO=i},8679:function(e,t,r){"use strict";var n=r(9864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return n.isMemo(e)?s:i[e.$$typeof]||a}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=s;var l=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var a=p(r);a&&a!==m&&e(t,a,n)}var s=f(r);u&&(s=s.concat(u(r)));for(var i=c(t),y=c(r),h=0;h<s.length;++h){var g=s[h];if(!o[g]&&!(n&&n[g])&&!(y&&y[g])&&!(i&&i[g])){var v=d(r,g);try{l(t,g,v)}catch(e){}}}}return t}},1752:function(e,t,r){e.exports=r(7905)},3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return s},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return l},ACTION_SERVER_ACTION:function(){return f}});let a="refresh",o="navigate",s="restore",i="server-patch",c="prefetch",l="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8754),a=r(1757),o=a._(r(7294)),s=n._(r(2636)),i=r(7757),c=r(3735),l=r(3341);r(4210);let f=n._(r(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function d(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,a,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let i="decode"in e?e.decode():Promise.resolve();i.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}})}function y(e){let[t,r]=o.version.split("."),n=parseInt(t,10),a=parseInt(r,10);return n>18||18===n&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:a,qualityInt:s,className:i,imgStyle:c,blurStyle:l,isLazy:f,fetchPriority:u,fill:d,placeholder:p,loading:h,srcString:g,config:v,unoptimized:b,loader:x,onLoadRef:w,onLoadingCompleteRef:k,setBlurComplete:S,setShowAltText:C,onLoad:O,onError:_,...E}=e;return h=f?"lazy":h,o.default.createElement("img",{...E,...y(u),loading:h,width:a,height:n,decoding:"async","data-nimg":d?"fill":"1",className:i,style:{...c,...l},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,g,p,w,k,S,b))},[g,p,w,k,S,_,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,g,p,w,k,S,b)},onError:e=>{C(!0),"blur"===p&&S(!0),_&&_(e)}})}),g=(0,o.forwardRef)((e,t)=>{var r;let n,a,{src:m,sizes:g,unoptimized:v=!1,priority:b=!1,loading:x,className:w,quality:k,width:S,height:C,fill:O,style:_,onLoad:E,onLoadingComplete:j,placeholder:$="empty",blurDataURL:P,fetchPriority:A,layout:M,objectFit:N,objectPosition:z,lazyBoundary:R,lazyRoot:I,...T}=e,Y=(0,o.useContext)(l.ImageConfigContext),F=(0,o.useMemo)(()=>{let e=u||Y||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[Y]),X=T.loader||f.default;delete T.loader;let V="__next_img_default"in X;if(V){if("custom"===F.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=X;X=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(O=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!g&&(g=t)}let L="",D=p(S),U=p(C);if("object"==typeof(r=m)&&(d(r)||void 0!==r.src)){let e=d(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,a=e.blurHeight,P=P||e.blurDataURL,L=e.src,!O){if(D||U){if(D&&!U){let t=D/e.width;U=Math.round(e.height*t)}else if(!D&&U){let t=U/e.height;D=Math.round(e.width*t)}}else D=e.width,U=e.height}}let W=!b&&("lazy"===x||void 0===x);(!(m="string"==typeof m?m:L)||m.startsWith("data:")||m.startsWith("blob:"))&&(v=!0,W=!1),F.unoptimized&&(v=!0),V&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(v=!0),b&&(A="high");let[G,B]=(0,o.useState)(!1),[H,K]=(0,o.useState)(!1),q=p(k),J=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:z}:{},H?{}:{color:"transparent"},_),Z="blur"===$&&P&&!G?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:D,heightInt:U,blurWidth:n,blurHeight:a,blurDataURL:P,objectFit:J.objectFit})+'")'}:{},Q=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:o,sizes:s,loader:i}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:o,kind:"x"}}(t,a,s),f=c.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:c.map((e,n)=>i({config:t,src:r,quality:o,width:e})+" "+("w"===l?e:n+1)+l).join(", "),src:i({config:t,src:r,quality:o,width:c[f]})}}({config:F,src:m,unoptimized:v,width:D,quality:q,sizes:g,loader:X}),ee=m,et=(0,o.useRef)(E);(0,o.useEffect)(()=>{et.current=E},[E]);let er=(0,o.useRef)(j);(0,o.useEffect)(()=>{er.current=j},[j]);let en={isLazy:W,imgAttributes:Q,heightInt:U,widthInt:D,qualityInt:q,className:w,imgStyle:J,blurStyle:Z,loading:x,config:F,fetchPriority:A,fill:O,unoptimized:v,placeholder:$,loader:X,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:B,setShowAltText:K,...T};return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...en,ref:t}),b?o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:T.crossOrigin,referrerPolicy:T.referrerPolicy,...y(A)})):null)}),v=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(8754),a=n._(r(7294)),o=r(4532),s=r(3353),i=r(1410),c=r(9064),l=r(370),f=r(9955),u=r(4224),d=r(508),p=r(1516),m=r(4266),y=r(3991),h=new Set;function g(e,t,r,n,a,o){if(!o&&!(0,s.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let a=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+a;if(h.has(o))return;h.add(o)}let i=o?e.prefetch(t,a):e.prefetch(t,r,n);Promise.resolve(i).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let b=a.default.forwardRef(function(e,t){let r,n;let{href:i,as:h,children:b,prefetch:x=null,passHref:w,replace:k,shallow:S,scroll:C,locale:O,onClick:_,onMouseEnter:E,onTouchStart:j,legacyBehavior:$=!1,...P}=e;r=b,$&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let A=!1!==x,M=null===x?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,N=a.default.useContext(f.RouterContext),z=a.default.useContext(u.AppRouterContext),R=null!=N?N:z,I=!N,{href:T,as:Y}=a.default.useMemo(()=>{if(!N){let e=v(i);return{href:e,as:h?v(h):e}}let[e,t]=(0,o.resolveHref)(N,i,!0);return{href:e,as:h?(0,o.resolveHref)(N,h):t||e}},[N,i,h]),F=a.default.useRef(T),X=a.default.useRef(Y);$&&(n=a.default.Children.only(r));let V=$?n&&"object"==typeof n&&n.ref:t,[L,D,U]=(0,d.useIntersection)({rootMargin:"200px"}),W=a.default.useCallback(e=>{(X.current!==Y||F.current!==T)&&(U(),X.current=Y,F.current=T),L(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[Y,V,T,U,L]);a.default.useEffect(()=>{R&&D&&A&&g(R,T,Y,{locale:O},{kind:M},I)},[Y,T,D,O,A,null==N?void 0:N.locale,R,I,M]);let G={ref:W,onClick(e){$||"function"!=typeof _||_(e),$&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,o,i,c,l,f,u){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:c}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!u})};f?a.default.startTransition(m):m()}(e,R,T,Y,k,S,C,O,I,A)},onMouseEnter(e){$||"function"!=typeof E||E(e),$&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(A||!I)&&g(R,T,Y,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:M},I)},onTouchStart(e){$||"function"!=typeof j||j(e),$&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(A||!I)&&g(R,T,Y,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:M},I)}};if((0,c.isAbsoluteUrl)(Y))G.href=Y;else if(!$||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,p.getDomainLocale)(Y,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);G.href=t||(0,m.addBasePath)((0,l.addLocale)(Y,e,null==N?void 0:N.defaultLocale))}return $?a.default.cloneElement(n,G):a.default.createElement("a",{...P,...G},r)}),x=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=r(7294),a=r(29),o="function"==typeof IntersectionObserver,s=new Map,i=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,l=c||!o,[f,u]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(o){if(l||f)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:a,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=s.get(n)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:a},i.push(r),s.set(r,t),t}(r);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),s.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=(0,a.requestIdleCallback)(()=>u(!0));return()=>(0,a.cancelIdleCallback)(e)}},[l,r,t,f,d.current]);let m=(0,n.useCallback)(()=>{u(!1)},[]);return[p,f,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:o,objectFit:s}=e,i=n||t,c=a||r,l=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+i+" "+c+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&a?"1":"20")+"'/%3E"+l+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)},4415:function(e,t){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.isFragment=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case s:case o:case u:case d:return e;default:switch(e=e&&e.$$typeof){case l:case c:case f:case m:case p:case i:return e;default:return t}}case n:return t}}}(e)===a}},4954:function(e,t,r){"use strict";e.exports=r(4415)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function c(e){return function(t){return n.createElement(l,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,s({key:r},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var r,a=e.attr,o=e.size,c=e.title,l=i(e,["attr","size","title"]),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(a)}},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case u:case o:case i:case s:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case h:case y:case c:return e;default:return t}}case a:return t}}}function k(e){return w(e)===u}t.AsyncMode=f,t.ConcurrentMode=u,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=o,t.Lazy=h,t.Memo=y,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||w(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===h},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===s},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===i||e===s||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===x||e.$$typeof===g)},t.typeOf=w},9864:function(e,t,r){"use strict";e.exports=r(9921)},3364:function(e,t,r){"use strict";let n;r.d(t,{pT:function(){return tn},Mi:function(){return td}});var a,o,s=r(7294),i=r.t(s,2),c=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),l=Math.abs,f=String.fromCharCode,u=Object.assign;function d(e,t,r){return e.replace(t,r)}function p(e,t){return e.indexOf(t)}function m(e,t){return 0|e.charCodeAt(t)}function y(e,t,r){return e.slice(t,r)}function h(e){return e.length}function g(e,t){return t.push(e),e}var v=1,b=1,x=0,w=0,k=0,S="";function C(e,t,r,n,a,o,s){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:v,column:b,length:s,return:""}}function O(e,t){return u(C("",null,null,"",null,null,0),e,{length:-e.length},t)}function _(){return k=w<x?m(S,w++):0,b++,10===k&&(b=1,v++),k}function E(){return m(S,w)}function j(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $(e){return v=b=1,x=h(S=e),w=0,[]}function P(e){var t,r;return(t=w-1,r=function e(t){for(;_();)switch(k){case t:return w;case 34:case 39:34!==t&&39!==t&&e(k);break;case 40:41===t&&e(t);break;case 92:_()}return w}(91===e?e+2:40===e?e+1:e),y(S,t,r)).trim()}var A="-ms-",M="-moz-",N="-webkit-",z="comm",R="rule",I="decl",T="@keyframes";function Y(e,t){for(var r="",n=e.length,a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function F(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case I:return e.return=e.return||e.value;case z:return"";case T:return e.return=e.value+"{"+Y(e.children,n)+"}";case R:e.value=e.props.join(",")}return h(r=Y(e.children,n))?e.return=e.value+"{"+r+"}":""}function X(e,t,r,n,a,o,s,i,c,f,u){for(var p=a-1,m=0===a?o:[""],h=m.length,g=0,v=0,b=0;g<n;++g)for(var x=0,w=y(e,p+1,p=l(v=s[g])),k=e;x<h;++x)(k=(v>0?m[x]+" "+w:d(w,/&\f/g,m[x])).trim())&&(c[b++]=k);return C(e,t,r,0===a?R:i,c,f,u)}function V(e,t,r,n){return C(e,t,r,I,y(e,0,n),y(e,n+1,-1),n)}var L=function(e,t,r){for(var n=0,a=0;n=a,a=E(),38===n&&12===a&&(t[r]=1),!j(a);)_();return y(S,e,w)},D=function(e,t){var r=-1,n=44;do switch(j(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=L(w-1,t,r);break;case 2:e[r]+=P(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=f(n)}while(n=_());return e},U=function(e,t){var r;return r=D($(e),t),S="",r},W=new WeakMap,G=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||W.get(r))&&!n){W.set(e,!0);for(var a=[],o=U(t,a),s=r.props,i=0,c=0;i<o.length;i++)for(var l=0;l<s.length;l++,c++)e.props[c]=a[i]?o[i].replace(/&\f/g,s[l]):s[l]+" "+o[i]}}},B=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},H=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case I:e.return=function e(t,r){switch(45^m(t,0)?(((r<<2^m(t,0))<<2^m(t,1))<<2^m(t,2))<<2^m(t,3):0){case 5103:return N+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return N+t+M+t+A+t+t;case 6828:case 4268:return N+t+A+t+t;case 6165:return N+t+A+"flex-"+t+t;case 5187:return N+t+d(t,/(\w+).+(:[^]+)/,N+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return N+t+A+"flex-item-"+d(t,/flex-|-self/,"")+t;case 4675:return N+t+A+"flex-line-pack"+d(t,/align-content|flex-|-self/,"")+t;case 5548:return N+t+A+d(t,"shrink","negative")+t;case 5292:return N+t+A+d(t,"basis","preferred-size")+t;case 6060:return N+"box-"+d(t,"-grow","")+N+t+A+d(t,"grow","positive")+t;case 4554:return N+d(t,/([^-])(transform)/g,"$1"+N+"$2")+t;case 6187:return d(d(d(t,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),t,"")+t;case 5495:case 3959:return d(t,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return d(d(t,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+t+t;case 4095:case 3583:case 4068:case 2532:return d(t,/(.+)-inline(.+)/,N+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(t)-1-r>6)switch(m(t,r+1)){case 109:if(45!==m(t,r+4))break;case 102:return d(t,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+M+(108==m(t,r+3)?"$3":"$2-$3"))+t;case 115:return~p(t,"stretch")?e(d(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==m(t,r+1))break;case 6444:switch(m(t,h(t)-3-(~p(t,"!important")&&10))){case 107:return d(t,":",":"+N)+t;case 101:return d(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+N+(45===m(t,14)?"inline-":"")+"box$3$1"+N+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(m(t,r+11)){case 114:return N+t+A+d(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return N+t+A+d(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return N+t+A+d(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return N+t+A+t+t}return t}(e.value,e.length);break;case T:return Y([O(e,{value:d(e.value,"@","@"+N)})],n);case R:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return Y([O(e,{props:[d(t,/:(read-\w+)/,":"+M+"$1")]})],n);case"::placeholder":return Y([O(e,{props:[d(t,/:(plac\w+)/,":"+N+"input-$1")]}),O(e,{props:[d(t,/:(plac\w+)/,":"+M+"$1")]}),O(e,{props:[d(t,/:(plac\w+)/,A+"input-$1")]})],n)}return""}).join("")}}];function K(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "}),n}var q=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},J=function(e,t,r){q(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next;while(void 0!==a)}},Z={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q=/[A-Z]|^ms/g,ee=/_EMO_([^_]+?)_([^]*?)_EMO_/g,et=function(e){return 45===e.charCodeAt(1)},er=function(e){return null!=e&&"boolean"!=typeof e},en=(a=Object.create(null),function(e){return void 0===a[e]&&(a[e]=et(e)?e:e.replace(Q,"-$&").toLowerCase()),a[e]}),ea=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ee,function(e,t,r){return o={name:t,styles:r,next:o},t})}return 1===Z[e]||et(e)||"number"!=typeof t||0===t?t:t+"px"};function eo(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return o={name:r.name,styles:r.styles,next:o},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)o={name:n.name,styles:n.styles,next:o},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=eo(e,t,r[a])+";";else for(var o in r){var s=r[o];if("object"!=typeof s)null!=t&&void 0!==t[s]?n+=o+"{"+t[s]+"}":er(s)&&(n+=en(o)+":"+ea(o,s)+";");else if(Array.isArray(s)&&"string"==typeof s[0]&&(null==t||void 0===t[s[0]]))for(var i=0;i<s.length;i++)er(s[i])&&(n+=en(o)+":"+ea(o,s[i])+";");else{var c=eo(e,t,s);switch(o){case"animation":case"animationName":n+=en(o)+":"+c+";";break;default:n+=o+"{"+c+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var a=o,s=r(e);return o=a,eo(e,t,s)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var es=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ei=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n,a=!0,s="";o=void 0;var i=e[0];null==i||void 0===i.raw?(a=!1,s+=eo(r,t,i)):s+=i[0];for(var c=1;c<e.length;c++)s+=eo(r,t,e[c]),a&&(s+=i[c]);es.lastIndex=0;for(var l="";null!==(n=es.exec(s));)l+="-"+n[1];return{name:function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(s)+l,styles:s,next:o}},ec=!!i.useInsertionEffect&&i.useInsertionEffect,el=ec||function(e){return e()};ec||s.useLayoutEffect;var ef={}.hasOwnProperty,eu=s.createContext("undefined"!=typeof HTMLElement?function(e){var t,r,n,a,o,s=e.key;if("css"===s){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var l=e.stylisPlugins||H,u={},x=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+s+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)u[t[r]]=!0;x.push(e)});var O=(r=(t=[G,B].concat(l,[F,(n=function(e){o.insert(e)},function(e){!e.root&&(e=e.return)&&n(e)})])).length,function(e,n,a,o){for(var s="",i=0;i<r;i++)s+=t[i](e,n,a,o)||"";return s}),A=function(e){var t,r;return Y((r=function e(t,r,n,a,o,s,i,c,l){for(var u,x=0,O=0,$=i,A=0,M=0,N=0,R=1,I=1,T=1,Y=0,F="",L=o,D=s,U=a,W=F;I;)switch(N=Y,Y=_()){case 40:if(108!=N&&58==m(W,$-1)){-1!=p(W+=d(P(Y),"&","&\f"),"&\f")&&(T=-1);break}case 34:case 39:case 91:W+=P(Y);break;case 9:case 10:case 13:case 32:W+=function(e){for(;k=E();)if(k<33)_();else break;return j(e)>2||j(k)>3?"":" "}(N);break;case 92:W+=function(e,t){for(var r;--t&&_()&&!(k<48)&&!(k>102)&&(!(k>57)||!(k<65))&&(!(k>70)||!(k<97)););return r=w+(t<6&&32==E()&&32==_()),y(S,e,r)}(w-1,7);continue;case 47:switch(E()){case 42:case 47:g(C(u=function(e,t){for(;_();)if(e+k===57)break;else if(e+k===84&&47===E())break;return"/*"+y(S,t,w-1)+"*"+f(47===e?e:_())}(_(),w),r,n,z,f(k),y(u,2,-2),0),l);break;default:W+="/"}break;case 123*R:c[x++]=h(W)*T;case 125*R:case 59:case 0:switch(Y){case 0:case 125:I=0;case 59+O:-1==T&&(W=d(W,/\f/g,"")),M>0&&h(W)-$&&g(M>32?V(W+";",a,n,$-1):V(d(W," ","")+";",a,n,$-2),l);break;case 59:W+=";";default:if(g(U=X(W,r,n,x,O,o,c,F,L=[],D=[],$),s),123===Y){if(0===O)e(W,r,U,U,L,s,$,c,D);else switch(99===A&&110===m(W,3)?100:A){case 100:case 108:case 109:case 115:e(t,U,U,a&&g(X(t,U,U,0,0,o,c,F,o,L=[],$),D),o,D,$,c,a?L:D);break;default:e(W,U,U,U,[""],D,0,c,D)}}}x=O=M=0,R=T=1,F=W="",$=i;break;case 58:$=1+h(W),M=N;default:if(R<1){if(123==Y)--R;else if(125==Y&&0==R++&&125==(k=w>0?m(S,--w):0,b--,10===k&&(b=1,v--),k))continue}switch(W+=f(Y),Y*R){case 38:T=O>0?1:(W+="\f",-1);break;case 44:c[x++]=(h(W)-1)*T,T=1;break;case 64:45===E()&&(W+=P(_())),A=E(),O=$=h(F=W+=function(e){for(;!j(E());)_();return y(S,e,w)}(w)),Y++;break;case 45:45===N&&2==h(W)&&(R=0)}}return s}("",null,null,null,[""],t=$(t=e),0,[0],t),S="",r),O)},M={key:s,sheet:new c({key:s,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:u,registered:{},insert:function(e,t,r,n){o=r,A(e?e+"{"+t.styles+"}":t.styles),n&&(M.inserted[t.name]=!0)}};return M.sheet.hydrate(x),M}({key:"css"}):null);eu.Provider;var ed=function(e){return(0,s.forwardRef)(function(t,r){return e(t,(0,s.useContext)(eu),r)})},ep=s.createContext({}),em="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ey=function(e,t){var r={};for(var n in t)ef.call(t,n)&&(r[n]=t[n]);return r[em]=e,r},eh=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return q(t,r,n),el(function(){return J(t,r,n)}),null},eg=ed(function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var a=e[em],o=[n],i="";"string"==typeof e.className?i=K(t.registered,o,e.className):null!=e.className&&(i=e.className+" ");var c=ei(o,void 0,s.useContext(ep));i+=t.key+"-"+c.name;var l={};for(var f in e)ef.call(e,f)&&"css"!==f&&f!==em&&(l[f]=e[f]);return l.ref=r,l.className=i,s.createElement(s.Fragment,null,s.createElement(eh,{cache:t,serialized:c,isStringTag:"string"==typeof a}),s.createElement(a,l))});function ev(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return ei(t)}r(8679);var eb=function(){var e=ev.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ex=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var o=t[n];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=e(o);else for(var i in s="",o)o[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=o}s&&(a&&(a+=" "),a+=s)}}return a},ew=function(e){var t=e.cache,r=e.serializedArr;return el(function(){for(var e=0;e<r.length;e++)J(t,r[e],!1)}),null},ek=ed(function(e,t){var r=[],n=function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var o=ei(n,t.registered);return r.push(o),q(t,o,!1),t.key+"-"+o.name},a={css:n,cx:function(){for(var e,r,a,o,s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return e=t.registered,o=K(e,a=[],r=ex(i)),a.length<2?r:o+n(a)},theme:s.useContext(ep)},o=e.children(a);return s.createElement(s.Fragment,null,s.createElement(ew,{cache:t,serializedArr:r}),o)});function eS(){return(eS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let eC=new Map,eO=new WeakMap,e_=0;function eE(e,t,r={},a=n){if(void 0===window.IntersectionObserver&&void 0!==a){let n=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:o,observer:s,elements:i}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(eO.has(r)||(e_+=1,eO.set(r,e_.toString())),eO.get(r)):"0":e[t]}`}).toString(),r=eC.get(t);if(!r){let n;let a=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{var r;let o=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=a.get(t.target))||r.forEach(e=>{e(o,t)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:a},eC.set(t,r)}return r}(r),c=i.get(e)||[];return i.has(e)||i.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(i.delete(e),s.unobserve(e)),0===i.size&&(s.disconnect(),eC.delete(o))}}let ej=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function e$(e){return"function"!=typeof e.children}class eP extends s.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()},this.handleChange=(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),e$(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=eE(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!e$(this.props)){let{inView:e,entry:t}=this.state;return this.props.children({inView:e,entry:t,ref:this.handleNode})}let e=this.props,{children:t,as:r}=e,n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,ej);return s.createElement(r||"div",eS({ref:this.handleNode},n),t)}}function eA({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:a,triggerOnce:o,skip:i,initialInView:c,fallbackInView:l,onChange:f}={}){var u;let[d,p]=s.useState(null),m=s.useRef(),[y,h]=s.useState({inView:!!c,entry:void 0});m.current=f,s.useEffect(()=>{let s;if(!i&&d)return s=eE(d,(e,t)=>{h({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)},{root:a,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}},[Array.isArray(e)?e.toString():e,d,a,n,o,i,r,l,t]);let g=null==(u=y.entry)?void 0:u.target,v=s.useRef();d||!g||o||i||v.current===g||(v.current=g,h({inView:!!c,entry:void 0}));let b=[p,y.inView,y.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var eM=r(4954),eN=r(5893),ez=eN.Fragment;function eR(e,t,r){return ef.call(t,"css")?eN.jsx(eg,ey(e,t),r):eN.jsx(e,t,r)}eb`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,eb`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,eb`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,eb`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,eb`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,eb`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eb`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eb`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,eb`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,eb`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,eb`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,eb`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eb`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var eI=eb`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,eT=eb`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eY=eb`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eF=eb`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eX=eb`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eV=eb`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eL=eb`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eD=eb`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eU=eb`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eW=eb`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eG=eb`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eB=eb`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eH=eb`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function eK(e){var t;return t=()=>null,r=>r?e():t()}var eq=e=>{let{cascade:t=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:i=eV,triggerOnce:c=!1,className:l,style:f,childClassName:u,childStyle:d,children:p,onVisibilityChange:m}=e,y=(0,s.useMemo)(()=>(function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:n=eV,iterationCount:a=1}){return ev`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:i,duration:a}),[a,i]);return void 0==p?null:"string"==typeof p||"number"==typeof p||"boolean"==typeof p?eR(eZ,{...e,animationStyles:y,children:String(p)}):(0,eM.isFragment)(p)?eR(eQ,{...e,animationStyles:y}):eR(ez,{children:s.Children.map(p,(i,p)=>{if(!(0,s.isValidElement)(i))return null;let h=n+(t?p*a*r:0);switch(i.type){case"ol":case"ul":return eR(ek,{children:({cx:t})=>eR(i.type,{...i.props,className:t(l,i.props.className),style:Object.assign({},f,i.props.style),children:eR(eq,{...e,children:i.props.children})})});case"li":return eR(eP,{threshold:o,triggerOnce:c,onChange:m,children:({inView:e,ref:t})=>eR(ek,{children:({cx:r})=>eR(i.type,{...i.props,ref:t,className:r(u,i.props.className),css:eK(()=>y)(e),style:Object.assign({},d,i.props.style,{animationDelay:h+"ms"})})})});default:return eR(eP,{threshold:o,triggerOnce:c,onChange:m,children:({inView:e,ref:t})=>eR("div",{ref:t,className:l,css:eK(()=>y)(e),style:Object.assign({},f,{animationDelay:h+"ms"}),children:eR(ek,{children:({cx:e})=>eR(i.type,{...i.props,className:e(u,i.props.className),style:Object.assign({},d,i.props.style)})})})})}})})},eJ={display:"inline-block",whiteSpace:"pre"},eZ=e=>{var t,r;let{animationStyles:n,cascade:a=!1,damping:o=.5,delay:s=0,duration:i=1e3,fraction:c=0,triggerOnce:l=!1,className:f,style:u,children:d,onVisibilityChange:p}=e,{ref:m,inView:y}=eA({triggerOnce:l,threshold:c,onChange:p});return(t=()=>eR("div",{ref:m,className:f,style:Object.assign({},u,eJ),children:d.split("").map((e,t)=>eR("span",{css:eK(()=>n)(y),style:{animationDelay:s+t*i*o+"ms"},children:e},t))}),r=()=>eR(eQ,{...e,children:d}),r=>r?t():r())(a)},eQ=e=>{let{animationStyles:t,fraction:r=0,triggerOnce:n=!1,className:a,style:o,children:s,onVisibilityChange:i}=e,{ref:c,inView:l}=eA({triggerOnce:n,threshold:r,onChange:i});return eR("div",{ref:c,className:a,css:eK(()=>t)(l),style:o,children:s})};eb`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,eb`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eb`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eb`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eb`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eb`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,eb`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,eb`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,eb`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,eb`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var e0=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,e1=eb`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,e3=eb`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,e5=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,e4=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,e2=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,e6=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,e9=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,e7=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,e8=eb`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,te=eb`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,tt=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,tr=eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,tn=e=>{let{big:t=!1,direction:r,reverse:n=!1,...a}=e,o=(0,s.useMemo)(()=>(function(e,t,r){switch(r){case"bottom-left":return t?e1:eT;case"bottom-right":return t?e3:eY;case"down":return e?t?e4:eX:t?e5:eF;case"left":return e?t?e6:eL:t?e2:eV;case"right":return e?t?e7:eU:t?e9:eD;case"top-left":return t?e8:eW;case"top-right":return t?te:eG;case"up":return e?t?tr:eH:t?tt:eB;default:return t?e0:eI}})(t,n,r),[t,r,n]);return eR(eq,{keyframes:o,...a})};eb`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,eb`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,eb`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,eb`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,eb`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,eb`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,eb`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,eb`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eb`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,eb`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eb`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eb`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eb`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eb`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eb`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,eb`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,eb`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,eb`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,eb`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;var ta=eb`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,to=eb`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ts=eb`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ti=eb`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tc=eb`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,tl=eb`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,tf=eb`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,tu=eb`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,td=e=>{let{direction:t,reverse:r=!1,...n}=e,a=(0,s.useMemo)(()=>(function(e,t){switch(t){case"down":return e?tc:ta;case"right":return e?tf:ts;case"up":return e?tu:ti;default:return e?tl:to}})(r,t),[t,r]);return eR(eq,{keyframes:a,...n})};eb`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,eb`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eb`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eb`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eb`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eb`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,eb`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,eb`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,eb`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,eb`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);