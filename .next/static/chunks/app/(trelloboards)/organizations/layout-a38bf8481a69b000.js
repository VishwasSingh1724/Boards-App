(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{8188:function(e,t,a){Promise.resolve().then(a.bind(a,6736)),Promise.resolve().then(a.bind(a,1876)),Promise.resolve().then(a.bind(a,5326))},6736:function(e,t,a){"use strict";a.r(t);var r=a(3827);a(4090);var i=a(2012),n=a(575),s=a(94),o=a(8388),c=a(7524),l=a(1874),d=a(6288),u=a(4958),m=a(7907);t.default=()=>{let e=(0,m.useRouter)(),t=async t=>{try{var a;let r=t.get("title"),i=t.get("image");if(!r||!i){d.toast.error("please fill all required fields");return}let n=await (0,u.Ci)({title:r,image:i});d.toast.success("Organization successfully added"),e.push("/organizations/".concat(null==n?void 0:null===(a=n.result)||void 0===a?void 0:a.id))}catch(e){d.toast.error("organization not created")}};return(0,r.jsxs)("div",{className:"font-medium flex items-center mb-1",children:[(0,r.jsx)("span",{children:"Workspaces"}),(0,r.jsxs)(i.J2,{children:[(0,r.jsx)(i.xo,{asChild:!0,children:(0,r.jsx)(n.z,{asChild:!0,type:"button",variant:"ghost",size:"icon",className:"ml-auto cursor-pointer",children:(0,r.jsx)(s.Z,{className:"h-4 w-4"})})}),(0,r.jsxs)(i.yk,{children:[(0,r.jsx)("div",{className:"font-medium text-center text-gray-600 pb-4 text-sm",children:"Create Organiztion"}),(0,r.jsx)("form",{action:t,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{name:"image"}),(0,r.jsx)(c.Z,{id:"title",label:"Organization Title",type:"text"}),(0,r.jsx)(l.Z,{className:"w-full mt-2",children:"Create Org"})]})})]})]})]})}},1874:function(e,t,a){"use strict";var r=a(3827);a(4090);var i=a(575),n=a(2169);t.Z=e=>{let{children:t,className:a,variant:s}=e;return(0,r.jsx)(i.z,{className:(0,n.cn)(a),variant:s,type:"submit",size:"sm",children:t})}},8388:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(3827);let i=[{id:1,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image1_a7e9aq.avif",name:"abc"},{id:2,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image2_tx6ozj.jpg",name:"abc"},{id:3,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image6_bijqg9.jpg",name:"abc"},{id:4,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image5_pyyvsc.jpg",name:"abc"},{id:5,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132360/assets/image4_jg48zf.jpg",name:"abc"},{id:6,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image9_ocodce.jpg",name:"abc"},{id:7,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image8_saku93.jpg",name:"abc"},{id:8,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image7_lz1hhz.jpg",name:"abc"},{id:9,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image3_rbpvp3.jpg",name:"abc"}];var n=a(4090),s=a(703),o=a(9259),c=e=>{let{name:t}=e,[a,c]=(0,n.useState)("");return(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("div",{className:"grid grid-cols-3 gap-2 mb-2",children:null==i?void 0:i.map(e=>(0,r.jsxs)("div",{className:"cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",onClick:()=>c(e.id),children:[(0,r.jsx)("input",{type:"radio",id:t,name:t,checked:a==e.id,value:e.image,className:"hidden"}),(0,r.jsx)(s.default,{src:e.image,alt:e.name,className:"object-cover rounded-sm",fill:!0}),a==e.id&&(0,r.jsx)("div",{className:"absolute inset-y-0 h-full w-full bg-black/40 flex items-center justify-center",children:(0,r.jsx)(o.Z,{className:"h-4 w-4 text-white"})}),(0,r.jsx)("span",{className:"opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white p-0.5 bg-black/50",children:e.name})]},e.id))})})}},7524:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(3827),i=a(4090),n=a(4602),s=a(7742),o=a(2169);let c=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(n.f,{ref:t,className:(0,o.cn)(c(),a),...i})});l.displayName=n.f.displayName;let d=i.forwardRef((e,t)=>{let{className:a,type:i,...n}=e;return(0,r.jsx)("input",{type:i,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});d.displayName="Input";var u=(0,i.forwardRef)((e,t)=>{let{id:a,label:i,type:n,placeholder:s,className:c,defaultValue:u}=e;return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(l,{htmlFor:a,className:"font-medium text-gray-600",children:i}),(0,r.jsx)(d,{id:a,ref:t,name:a,defaultValue:u,placeholder:s,type:n,className:(0,o.cn)("text-sm px-2 py-1 h-7",c)})]})})})},1876:function(e,t,a){"use strict";a.r(t);var r=a(3827);a(4090);var i=a(5326),n=a(703),s=a(2821),o=a(5032),c=a(575),l=a(2169),d=a(7907);t.default=e=>{let{org:t}=e,a=(0,d.useRouter)(),u=(0,d.usePathname)(),m=[{label:"Boards",icon:(0,r.jsx)(s.Z,{className:"h-4 w-4 mr-2"}),href:"/organizations/".concat(t.id)},{label:"Activity",icon:(0,r.jsx)(o.Z,{className:"h-4 w-4 mr-2"}),href:"/organizations/".concat(t.id,"/activity")},{label:"Members",icon:(0,r.jsx)(o.Z,{className:"h-4 w-4 mr-2"}),href:"/organizations/".concat(t.id,"/members")}];return(0,r.jsxs)(i.AccordionItem,{value:null==t?void 0:t.id,className:"border-none",children:[(0,r.jsx)(i.AccordionTrigger,{children:(0,r.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,r.jsx)("div",{className:"w-7 h-7 relative",children:(0,r.jsx)(n.default,{fill:!0,src:null==t?void 0:t.image,alt:null==t?void 0:t.title,className:"rounded-sm object-cover"})}),(0,r.jsx)("span",{className:"font-medium text-sm",children:null==t?void 0:t.title})]})}),(0,r.jsx)(i.AccordionContent,{className:"",children:null==m?void 0:m.map(e=>(0,r.jsxs)(c.z,{onClick:()=>a.push(e.href),className:(0,l.cn)("w-full font-normal justify-start pl-10 mb-1",u==e.href&&"bg-sky-500/10 text-sky-700"),variant:"ghost",children:[e.icon,e.label]},e.href))})]})}},5326:function(e,t,a){"use strict";a.r(t),a.d(t,{Accordion:function(){return c},AccordionContent:function(){return u},AccordionItem:function(){return l},AccordionTrigger:function(){return d}});var r=a(3827),i=a(4090),n=a(2601),s=a(3441),o=a(2169);let c=n.fC,l=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(n.ck,{ref:t,className:(0,o.cn)("border-b",a),...i})});l.displayName="AccordionItem";let d=i.forwardRef((e,t)=>{let{className:a,children:i,...c}=e;return(0,r.jsx)(n.h4,{className:"flex",children:(0,r.jsxs)(n.xz,{ref:t,className:(0,o.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...c,children:[i,(0,r.jsx)(s.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});d.displayName=n.xz.displayName;let u=i.forwardRef((e,t)=>{let{className:a,children:i,...s}=e;return(0,r.jsx)(n.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...s,children:(0,r.jsx)("div",{className:(0,o.cn)("pb-4 pt-0",a),children:i})})});u.displayName=n.VY.displayName},575:function(e,t,a){"use strict";a.d(t,{z:function(){return l}});var r=a(3827),i=a(4090),n=a(9143),s=a(7742),o=a(2169);let c=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=i.forwardRef((e,t)=>{let{className:a,variant:i,size:s,asChild:l=!1,...d}=e,u=l?n.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(c({variant:i,size:s,className:a})),ref:t,...d})});l.displayName="Button"},2012:function(e,t,a){"use strict";a.d(t,{J2:function(){return o},xo:function(){return c},yk:function(){return l}});var r=a(3827),i=a(4090),n=a(4328),s=a(2169);let o=n.fC,c=n.xz,l=i.forwardRef((e,t)=>{let{className:a,align:i="center",sideOffset:o=4,...c}=e;return(0,r.jsx)(n.h_,{children:(0,r.jsx)(n.VY,{ref:t,align:i,sideOffset:o,className:(0,s.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...c})})});l.displayName=n.VY.displayName},2169:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var r=a(3167),i=a(1367);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.m6)((0,r.W)(t))}},4958:function(e,t,a){"use strict";a.d(t,{Ci:function(){return n},bL:function(){return o},o7:function(){return i},pt:function(){return s}}),a(5355);var r=a(3472),i=(0,r.$)("a17fc8052cb27ae622fbe13d92558fd578dfd2c0"),n=(0,r.$)("600fd465f68ba7cb4333bcf1c06aee99dc5799eb"),s=(0,r.$)("22b468c826244c02b49be721d1ea25be54708c1c"),o=(0,r.$)("88d47719a19dd85a905d89a84334848596015111")}},function(e){e.O(0,[387,27,288,286,630,971,69,744],function(){return e(e.s=8188)}),_N_E=e.O()}]);