(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[124],{1888:function(e,t,r){Promise.resolve().then(r.bind(r,5808))},5808:function(e,t,r){"use strict";r.r(t),r.d(t,{Avatar:function(){return l},AvatarFallback:function(){return i},AvatarImage:function(){return c}});var n=r(3827),u=r(4090),a=r(2178),o=r(2169);let l=u.forwardRef((e,t)=>{let{className:r,...u}=e;return(0,n.jsx)(a.fC,{ref:t,className:(0,o.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...u})});l.displayName=a.fC.displayName;let c=u.forwardRef((e,t)=>{let{className:r,...u}=e;return(0,n.jsx)(a.Ee,{ref:t,className:(0,o.cn)("aspect-square h-full w-full",r),...u})});c.displayName=a.Ee.displayName;let i=u.forwardRef((e,t)=>{let{className:r,...u}=e;return(0,n.jsx)(a.NY,{ref:t,className:(0,o.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...u})});i.displayName=a.NY.displayName},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(3167),u=r(1367);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,u.m6)((0,n.W)(t))}},2178:function(e,t,r){"use strict";r.d(t,{Ee:function(){return w},NY:function(){return N},fC:function(){return g}});var n=r(2110),u=r(4090),a=r(4104),o=r(9830),l=r(2618),c=r(9586);let i="Avatar",[s,f]=(0,a.b)(i),[d,m]=s(i),v=(0,u.forwardRef)((e,t)=>{let{__scopeAvatar:r,...a}=e,[o,l]=(0,u.useState)("idle");return(0,u.createElement)(d,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:l},(0,u.createElement)(c.WV.span,(0,n.Z)({},a,{ref:t})))}),p=(0,u.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:i=()=>{},...s}=e,f=m("AvatarImage",r),d=function(e){let[t,r]=(0,u.useState)("idle");return(0,l.b)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,u=e=>()=>{t&&r(e)};return r("loading"),n.onload=u("loaded"),n.onerror=u("error"),n.src=e,()=>{t=!1}},[e]),t}(a),v=(0,o.W)(e=>{i(e),f.onImageLoadingStatusChange(e)});return(0,l.b)(()=>{"idle"!==d&&v(d)},[d,v]),"loaded"===d?(0,u.createElement)(c.WV.img,(0,n.Z)({},s,{ref:t,src:a})):null}),h=(0,u.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:a,...o}=e,l=m("AvatarFallback",r),[i,s]=(0,u.useState)(void 0===a);return(0,u.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>s(!0),a);return()=>window.clearTimeout(e)}},[a]),i&&"loaded"!==l.imageLoadingStatus?(0,u.createElement)(c.WV.span,(0,n.Z)({},o,{ref:t})):null}),g=v,w=p,N=h},4104:function(e,t,r){"use strict";r.d(t,{b:function(){return a},k:function(){return u}});var n=r(4090);function u(e,t){let r=(0,n.createContext)(t);function u(e){let{children:t,...u}=e,a=(0,n.useMemo)(()=>u,Object.values(u));return(0,n.createElement)(r.Provider,{value:a},t)}return u.displayName=e+"Provider",[u,function(u){let a=(0,n.useContext)(r);if(a)return a;if(void 0!==t)return t;throw Error("`".concat(u,"` must be used within `").concat(e,"`"))}]}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[],u=()=>{let t=r.map(e=>(0,n.createContext)(e));return function(r){let u=(null==r?void 0:r[e])||t;return(0,n.useMemo)(()=>({["__scope".concat(e)]:{...r,[e]:u}}),[r,u])}};return u.scopeName=e,[function(t,u){let a=(0,n.createContext)(u),o=r.length;function l(t){let{scope:r,children:u,...l}=t,c=(null==r?void 0:r[e][o])||a,i=(0,n.useMemo)(()=>l,Object.values(l));return(0,n.createElement)(c.Provider,{value:i},u)}return r=[...r,u],l.displayName=t+"Provider",[l,function(r,l){let c=(null==l?void 0:l[e][o])||a,i=(0,n.useContext)(c);if(i)return i;if(void 0!==u)return u;throw Error("`".concat(r,"` must be used within `").concat(t,"`"))}]},function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let u=t[0];if(1===t.length)return u;let a=()=>{let e=t.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(t){let r=e.reduce((e,r)=>{let{useScope:n,scopeName:u}=r,a=n(t)["__scope".concat(u)];return{...e,...a}},{});return(0,n.useMemo)(()=>({["__scope".concat(u.scopeName)]:r}),[r])}};return a.scopeName=u.scopeName,a}(u,...t)]}},9586:function(e,t,r){"use strict";r.d(t,{WV:function(){return l},jH:function(){return c}});var n=r(2110),u=r(4090),a=r(9542),o=r(9143);let l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,u.forwardRef)((e,r)=>{let{asChild:a,...l}=e,c=a?o.g7:t;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(c,(0,n.Z)({},l,{ref:r}))});return r.displayName="Primitive.".concat(t),{...e,[t]:r}},{});function c(e,t){e&&(0,a.flushSync)(()=>e.dispatchEvent(t))}},9830:function(e,t,r){"use strict";r.d(t,{W:function(){return u}});var n=r(4090);function u(e){let t=(0,n.useRef)(e);return(0,n.useEffect)(()=>{t.current=e}),(0,n.useMemo)(()=>function(){for(var e,r=arguments.length,n=Array(r),u=0;u<r;u++)n[u]=arguments[u];return null===(e=t.current)||void 0===e?void 0:e.call(t,...n)},[])}},2618:function(e,t,r){"use strict";r.d(t,{b:function(){return u}});var n=r(4090);let u=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{}}},function(e){e.O(0,[387,971,69,744],function(){return e(e.s=1888)}),_N_E=e.O()}]);