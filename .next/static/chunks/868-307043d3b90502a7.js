"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{7461:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(4090),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.317.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),u=(t,e)=>{let n=(0,r.forwardRef)((n,u)=>{let{color:c="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:f="",children:d,...p}=n;return(0,r.createElement)("svg",{ref:u,...i,width:l,height:l,stroke:c,strokeWidth:s?24*Number(a)/Number(l):a,className:["lucide","lucide-".concat(o(t)),f].join(" "),...p},[...e.map(t=>{let[e,n]=t;return(0,r.createElement)(e,n)}),...Array.isArray(d)?d:[d]])});return n.displayName="".concat(t),n}},3879:function(t,e,n){n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.317.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(7461).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},8025:function(t,e,n){n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.317.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(7461).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},7742:function(t,e,n){n.d(e,{j:function(){return o}});let r=t=>"boolean"==typeof t?"".concat(t):0===t?"0":t,i=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=function t(e){var n,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(i&&(i+=" "),i+=r);else for(n in e)e[n]&&(i&&(i+=" "),i+=n)}return i}(t))&&(r&&(r+=" "),r+=e);return r},o=(t,e)=>n=>{var o;if((null==e?void 0:e.variants)==null)return i(t,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:u,defaultVariants:c}=e,l=Object.keys(u).map(t=>{let e=null==n?void 0:n[t],i=null==c?void 0:c[t];if(null===e)return null;let o=r(e)||r(i);return u[t][o]}),a=n&&Object.entries(n).reduce((t,e)=>{let[n,r]=e;return void 0===r||(t[n]=r),t},{});return i(t,l,null==e?void 0:null===(o=e.compoundVariants)||void 0===o?void 0:o.reduce((t,e)=>{let{class:n,className:r,...i}=e;return Object.entries(i).every(t=>{let[e,n]=t;return Array.isArray(n)?n.includes({...c,...a}[e]):({...c,...a})[e]===n})?[...t,n,r]:t},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},8062:function(t,e,n){n.d(e,{Z:function(){return O}});var r=n(4090);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?"".concat(r)==="".concat(u):i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function l(t){return"string"==typeof t}function a(t){return"boolean"==typeof t}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return y(t).map(Number)}function m(t){return t[g(t)]}function g(t){return Math.max(0,t.length-1)}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from(Array(t),(t,n)=>e+n)}function y(t){return Object.keys(t)}function v(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function b(){let t=[],e={add:function(n,r,i){let o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return"addEventListener"in n?(n.addEventListener(r,i,u),o=()=>n.removeEventListener(r,i,u)):(n.addListener(i),o=()=>n.removeListener(i)),t.push(o),e},clear:function(){t=t.filter(t=>t())}};return e}function x(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=f(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function w(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function k(t,e,n){let r="x"===t.scroll?function(t){return"translate3d(".concat(t,"px,0px,0px)")}:function(t){return"translate3d(0px,".concat(t,"px,0px)")},i=n.style,o=!1;return{clear:function(){o||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(t){o||(i.transform=r(e.apply(t)))},toggleActive:function(t){o=!t}}}let E={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function S(t,e,n){let r,i,o,u,O;let A=t.ownerDocument,D=A.defaultView,L=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(y(n).forEach(r=>{let i=e[r],o=n[r],u=s(i)&&s(o);e[r]=u?t(i,o):o}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,i)},optionsMediaQueries:function(e){return e.map(t=>y(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(D),I=(O=[],{init:function(t,e){return(O=e.filter(t=>{let{options:e}=t;return!1!==L.optionsAtMedia(e).active})).forEach(e=>e.init(t,L)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){O=O.filter(t=>t.destroy())}}),j=b(),M=function(){let t;let e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n}};return n}(),{mergeOptions:N,optionsAtMedia:F,optionsMediaQueries:P}=L,{on:T,off:z,emit:H}=M,V=!1,C=N(E,S.globalOptions),R=N(C),B=[];function Z(e,n){!V&&(R=F(C=N(C,e)),B=n||B,function(){let{container:e,slides:n}=R;o=(l(e)?t.querySelector(e):e)||t.children[0];let r=l(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function e(n){let r=function(t,e,n,r,i,o,u){let s,E;let{align:S,axis:O,direction:A,startIndex:D,loop:L,duration:I,dragFree:j,dragThreshold:M,inViewThreshold:N,slidesToScroll:F,skipSnaps:P,containScroll:T,watchResize:z,watchSlides:H,watchDrag:V}=o,C={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:i}=t;return{top:e,right:n+r,bottom:e+i,left:n,width:r,height:i}}},R=C.measure(e),B=n.map(C.measure),Z=function(t){let e="rtl"===t?-1:1;return{apply:function(t){return t*e}}}(A),q=function(t,e){let n="y"===t?"y":"x";return{scroll:n,cross:"y"===t?"x":"y",startEdge:"y"===n?"top":"rtl"===e?"right":"left",endEdge:"y"===n?"bottom":"rtl"===e?"left":"right",measureSize:function(t){let{width:e,height:r}=t;return"x"===n?e:r}}}(O,A),U=q.measureSize(R),_={measure:function(t){return t/100*U}},J=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r,i){return l(t)?n[t](r):t(e,r,i)}}}(S,U),W=!L&&!!T,{slideSizes:X,slideSizesWithGaps:$,startGap:Q,endGap:Y}=function(t,e,n,r,i,o){let{measureSize:u,startEdge:c,endEdge:l}=t,a=n[0]&&i,s=function(){if(!a)return 0;let t=n[0];return f(e[c]-t[c])}(),d=a?parseFloat(o.getComputedStyle(m(r)).getPropertyValue("margin-".concat(l))):0,p=n.map(u),h=n.map((t,e,n)=>{let r=e===g(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+s}).map(f);return{slideSizes:p,slideSizesWithGaps:h,startGap:s,endGap:d}}(q,R,B,n,L||!!T,i),G=function(t,e,n,r,i,o,u,l,a,s){let{startEdge:d,endEdge:h}=t,y=c(r);return{groupSlides:function(t){return y?p(t).filter(t=>t%r==0).map(e=>t.slice(e,e+r)):t.length?p(t).reduce((r,c)=>{let s=m(r)||0,p=c===g(t),y=o[d]-u[s][d],v=o[d]-u[c][h],b=i||0!==s?0:e.apply(l);return f(v-(!i&&p?e.apply(a):0)-(y+b))>n+2&&r.push(c),p&&r.push(t.length),r},[]).map((e,n,r)=>{let i=Math.max(r[n-1]||0);return t.slice(i,e)}):[]}}}(q,Z,U,F,L,R,B,Q,Y,0),{snaps:K,snapsAligned:tt}=function(t,e,n,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:c}=i,l=c(r).map(t=>m(t)[u]-t[0][o]).map(f).map(e.measure),a=r.map(t=>n[o]-t[o]).map(t=>-f(t)),s=c(a).map(t=>t[0]).map((t,e)=>t+l[e]);return{snaps:a,snapsAligned:s}}(q,J,R,B,G),te=-m(K)+m($),{snapsContained:tn,scrollContainLimit:tr}=function(t,e,n,r,i){let o=x(-e+t,0),u=n.map((t,e)=>{let{min:r,max:i}=o,u=o.constrain(t),c=e===g(n);return e?c||1>f(r-u)?r:1>f(i-u)?i:u:i}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],e=m(u);return x(u.lastIndexOf(t),u.indexOf(e)+1)}();return{snapsContained:function(){if(e<=t+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=c;return u.slice(n,i)}(),scrollContainLimit:c}}(U,te,tt,T,0),ti=W?tn:tt,{limit:to}=function(t,e,n){let r=e[0];return{limit:x(n?r-t:m(e),r)}}(te,ti,L),tu=function t(e,n,r){let{constrain:i}=x(0,e),o=e+1,u=c(n);function c(t){return r?f((o+t)%o):i(t)}function l(){return t(e,u,r)}let a={get:function(){return u},set:function(t){return u=c(t),a},add:function(t){return l().set(u+t)},clone:l};return a}(g(ti),D,L),tc=tu.clone(),tl=p(n),ta=t=>{let{dragHandler:e,scrollBody:n,scrollBounds:r,options:{loop:i}}=t;i||r.constrain(e.pointerDown()),n.seek()},ts=(t,e)=>{let{scrollBody:n,translate:r,location:i,offsetLocation:o,scrollLooper:u,slideLooper:c,dragHandler:l,animation:a,eventHandler:s,options:{loop:f}}=t,d=n.velocity(),p=n.settled();p&&!l.pointerDown()&&(a.stop(),s.emit("settle")),p||s.emit("scroll"),o.set(i.get()-d+d*e),f&&(u.loop(n.direction()),c.loop()),r.to(o.get())},tf=function(t,e,n,r){let i=b(),o=1e3/60,u=null,c=0,l=0;function a(t){u||(u=t);let i=t-u;for(u=t,c+=i;c>=o;)n(),c-=o;r(f(c/o)),l&&e.requestAnimationFrame(a)}function s(){e.cancelAnimationFrame(l),u=null,c=0,l=0}return{init:function(){i.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){s(),i.clear()},start:function(){l||(l=e.requestAnimationFrame(a))},stop:s,update:n,render:r}}(r,i,()=>ta(tS),t=>ts(tS,t)),td=ti[tu.get()],tp=w(td),tm=w(td),tg=w(td),th=function(t,e,n,r,i){let o=0,u=0,c=r,l=i,a=t.get(),s=0;function p(t){return c=t,g}function m(t){return l=t,g}let g={direction:function(){return u},duration:function(){return c},velocity:function(){return o},seek:function(){let e=n.get()-t.get(),r=0;return c?(o+=e/c,o*=l,a+=o,t.add(o),r=a-s):(o=0,t.set(n),r=e),u=d(r),s=a,g},settled:function(){return .001>f(n.get()-e.get())},useBaseFriction:function(){return m(i)},useBaseDuration:function(){return p(r)},useFriction:m,useDuration:p};return g}(tp,tm,tg,I,.68),ty=function(t,e,n,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function l(t){return t.concat().sort((t,e)=>f(t)-f(e))[0]}function a(e,r){let i=[e,e+n,e-n];if(!t)return i[0];if(!r)return l(i);let o=i.filter(t=>d(t)===r);return o.length?l(o):m(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:s,distance:d}=function(n){let r=t?u(n):c(n),{index:i}=e.map(t=>t-r).map(t=>a(t,0)).map((t,e)=>({diff:t,index:e})).sort((t,e)=>f(t.diff)-f(e.diff))[0];return{index:i,distance:r}}(l),p=!t&&o(l);if(!r||p)return{index:s,distance:n};let m=n+a(e[s]-d,0);return{index:s,distance:m}},byIndex:function(t,n){let r=a(e[t]-i.get(),n);return{index:t,distance:r}},shortcut:a}}(L,ti,te,to,tg),tv=function(t,e,n,r,i,o,u){function c(i){let c=i.distance,l=i.index!==e.get();o.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),l&&(n.set(e.get()),e.set(i.index),u.emit("select"))}return{distance:function(t,e){c(i.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);c(i.byIndex(r.get(),n))}}}(tf,tu,tc,th,ty,tg,u),tb=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(to),tx=b(),tw=function(t,e,n,r){let i;let o={},u=null,c=null,l=!1;return{init:function(){i=new IntersectionObserver(t=>{l||(t.forEach(t=>{o[e.indexOf(t.target)]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),l=!0},get:function(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];if(t&&u)return u;if(!t&&c)return c;let e=y(o).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,N),{slideRegistry:tk}=function(t,e,n,r,i,o){let{groupSlides:u}=i,{min:c,max:l}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:t&&"keepSnaps"!==e?r.slice(c,l).map((t,e,n)=>{let r=e===g(n);return e?r?h(g(o)-m(n)[0]+1,m(n)[0]):t:h(m(n[0])+1)}):r}()}}(W,T,ti,tr,G,tl),tE=function(t,e,n,r,i,o){let u=0;function l(t){"Tab"===t.code&&(u=new Date().getTime())}function a(l){o.add(l,"focus",()=>{if(new Date().getTime()-u>10)return;t.scrollLeft=0;let o=e.indexOf(l),a=n.findIndex(t=>t.includes(o));c(a)&&(i.useDuration(0),r.index(a,0))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",l,!1),e.forEach(a)}}}(t,n,tk,tv,th,tx),tS={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:R,slideRects:B,animation:tf,axis:q,direction:Z,dragHandler:function(t,e,n,r,i,o,u,c,l,s,p,m,g,h,y,w,k,E,S,O){let{cross:A}=t,D=["INPUT","SELECT","TEXTAREA"],L={passive:!1},I=b(),j=b(),M=x(50,225).constrain(y.measure(20)),N={mouse:300,touch:400},F={mouse:500,touch:600},P=w?43:25,T=!1,z=0,H=0,V=!1,C=!1,R=!1,B=!1;function Z(t){let n=u.readPoint(t),r=u.readPoint(t,A),i=f(n-z),c=f(r-H);if(!C&&!B&&(!t.cancelable||!(C=i>c)))return q(t);let a=u.pointerMove(t);i>k&&(R=!0),p.useFriction(.3).useDuration(1),l.start(),o.add(e.apply(a)),t.preventDefault()}function q(t){let n=m.byDistance(0,!1).index!==g.get(),r=u.pointerUp(t)*(w?F:N)[B?"mouse":"touch"],i=function(t,e){let n=g.add(-1*d(t)),r=m.byDistance(t,!w).distance;return w||f(t)<M?r:E&&e?.5*r:m.byIndex(n.get(),0).distance}(e.apply(r),n),o=function(t,e){var n,r;if(0===t||0===e||f(t)<=f(e))return 0;let i=(n=f(t),r=f(e),f(n-r));return f(i/t)}(r,i);C=!1,V=!1,j.clear(),p.useDuration(P-10*o).useFriction(.68+o/50),s.distance(i,!w),B=!1,h.emit("pointerUp")}function U(t){R&&(t.stopPropagation(),t.preventDefault())}return{init:function(t){O&&I.add(n,"dragstart",t=>t.preventDefault(),L).add(n,"touchmove",()=>void 0,L).add(n,"touchend",()=>void 0).add(n,"touchstart",e).add(n,"mousedown",e).add(n,"touchcancel",q).add(n,"contextmenu",q).add(n,"click",U,!0);function e(e){(a(O)||O(t,e))&&function(t){let e=v(t,i);B=e,(!e||0===t.button)&&!function(t){let e=t.nodeName||"";return D.includes(e)}(t.target)&&(R=w&&e&&!t.buttons&&T,T=f(o.get()-c.get())>=2,V=!0,u.pointerDown(t),p.useFriction(0).useDuration(0),o.set(c),function(){let t=B?r:n;j.add(t,"touchmove",Z,L).add(t,"touchend",q).add(t,"mousemove",Z,L).add(t,"mouseup",q)}(),z=u.readPoint(t),H=u.readPoint(t,A),h.emit("pointerDown"))}(e)}},pointerDown:function(){return V},destroy:function(){I.clear(),j.clear()}}}(q,Z,t,r,i,tg,function(t,e){let n,r;function i(t){return t.timeStamp}function o(n,r){let i=r||t.scroll;return(v(n,e)?n:n.touches[0])["client".concat("x"===i?"X":"Y")]}return{pointerDown:function(t){return n=t,r=t,o(t)},pointerMove:function(t){let e=o(t)-o(r),u=i(t)-i(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=o(r)-o(n),u=i(t)-i(n),c=i(t)-i(r)>170,l=e/u;return u&&!c&&f(l)>.1?l:0},readPoint:o}}(q,i),tp,tf,tv,th,ty,tu,u,_,j,M,P,0,V),eventStore:tx,percentOfView:_,index:tu,indexPrevious:tc,limit:to,location:tp,offsetLocation:tm,options:o,resizeHandler:function(t,e,n,r,i,o,u){let c,l;let s=[],d=!1;function p(t){return i.measureSize(u.measure(t))}return{init:function(i){o&&(l=p(t),s=r.map(p),c=new ResizeObserver(u=>{!d&&(a(o)||o(i,u))&&function(o){for(let u of o){let o=u.target===t,c=r.indexOf(u.target),a=o?l:s[c];if(f(p(o?t:r[c])-a)>=.5){n.requestAnimationFrame(()=>{i.reInit(),e.emit("resize")});break}}}(u)}),[t].concat(r).forEach(t=>c.observe(t)))},destroy:function(){c&&c.disconnect(),d=!0}}}(e,u,i,n,q,z,C),scrollBody:th,scrollBounds:function(t,e,n,r,i){let o=i.measure(10),u=i.measure(50),c=x(.1,.99),l=!1;return{constrain:function(i){if(!(!l&&t.reachedAny(n.get())&&t.reachedAny(e.get())))return;let a=t.reachedMin(e.get())?"min":"max",s=f(t[a]-e.get()),d=n.get()-e.get(),p=c.constrain(s/u);n.subtract(d*p),!i&&f(d)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){l=!t}}}(to,tp,tg,th,_),scrollLooper:function(t,e,n,r){let{reachedMin:i,reachedMax:o}=x(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?o(n.get()):-1===e&&i(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(te,to,tm,[tp,tm,tg]),scrollProgress:tb,scrollSnapList:ti.map(tb.get),scrollSnaps:ti,scrollTarget:ty,scrollTo:tv,slideLooper:function(t,e,n,r,i,o,u,c,l,a){let s=p(o),f=g(m(p(o).reverse(),c[0]),r,!1).concat(g(m(s,n-c[0]-1),-r,!0));function d(t,e){return t.reduce((t,e)=>t-o[e],e)}function m(t,e){return t.reduce((t,n)=>d(t,e)>0?t.concat([n]):t,[])}function g(o,c,s){let f=u.map((t,e)=>({start:t-i[e]+.5+c,end:t+n-.5+c}));return o.map(n=>{let i=s?0:-r,o=s?r:0,u=f[n][s?"end":"start"];return{index:n,loopPoint:u,slideLocation:w(-1),translate:k(t,e,a[n]),target:()=>l.get()>u?i:o}})}return{canLoop:function(){return f.every(t=>{let{index:e}=t;return .1>=d(s.filter(t=>t!==e),n)})},clear:function(){f.forEach(t=>t.translate.clear())},loop:function(){f.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,i=e();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:f}}(q,Z,U,te,X,$,K,ti,tm,n),slideFocus:tE,slidesHandler:(E=!1,{init:function(t){H&&(s=new MutationObserver(e=>{!E&&(a(H)||H(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){s&&s.disconnect(),E=!0}}),slidesInView:tw,slideIndexes:tl,slideRegistry:tk,slidesToScroll:G,target:tg,translate:k(q,Z,e)};return tS}(t,o,u,A,D,n,M);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(R),P([C,...B.map(t=>{let{options:e}=t;return e})]).forEach(t=>j.add(t,"change",q)),R.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(W),r.resizeHandler.init(W),r.slidesHandler.init(W),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(W),i=I.init(W,B)))}function q(t,e){let n=J();U(),Z(N({startIndex:n},t),e),M.emit("reInit")}function U(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),I.destroy(),j.clear()}function _(t,e,n){R.active&&!V&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:R.duration),r.scrollTo.index(t,n||0))}function J(){return r.index.get()}let W={canScrollNext:function(){return r.index.add(1).get()!==J()},canScrollPrev:function(){return r.index.add(-1).get()!==J()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){V||(V=!0,j.clear(),U(),M.emit("destroy"))},off:z,on:T,emit:H,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:q,rootNode:function(){return t},scrollNext:function(t){_(r.index.add(1).get(),t,-1)},scrollPrev:function(t){_(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:_,selectedScrollSnap:J,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return Z(e,n),setTimeout(()=>M.emit("init"),0),W}function O(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,r.useRef)(t),i=(0,r.useRef)(e),[c,l]=(0,r.useState)(),[a,s]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(n.current,i.current)},[c]);return(0,r.useEffect)(()=>{if(window.document&&window.document.createElement&&a){S.globalOptions=O.globalOptions;let t=S(a,n.current,i.current);return l(t),()=>t.destroy()}l(void 0)},[a,l]),(0,r.useEffect)(()=>{o(n.current,t)||(n.current=t,f())},[t,f]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>o(t,r[e]))}(i.current,e)&&(i.current=e,f())},[e,f]),[s,c]}S.globalOptions=void 0,O.globalOptions=void 0}}]);