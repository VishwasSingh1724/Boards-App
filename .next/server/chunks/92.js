exports.id=92,exports.ids=[92],exports.modules={15880:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,26840,23)),Promise.resolve().then(a.t.bind(a,38771,23)),Promise.resolve().then(a.t.bind(a,13225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,43982,23))},90446:(e,t,a)=>{Promise.resolve().then(a.bind(a,34755)),Promise.resolve().then(a.bind(a,72765))},3737:(e,t,a)=>{Promise.resolve().then(a.bind(a,41343)),Promise.resolve().then(a.bind(a,58165)),Promise.resolve().then(a.bind(a,6124))},7843:(e,t,a)=>{Promise.resolve().then(a.bind(a,13280))},41343:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(95344);a(3729);var s=a(88476),i=a(5094),n=a(51838),o=a(56347),l=a(74311),d=a(19759),c=a(34755),m=a(15509),u=a(8428);let f=()=>{let e=(0,u.useRouter)(),t=async t=>{try{let a=t.get("title"),r=t.get("image");if(!a||!r){c.toast.error("please fill all required fields");return}let s=await (0,m.Ci)({title:a,image:r});c.toast.success("Organization successfully added"),e.push(`/organizations/${s?.result?.id}`)}catch(e){c.toast.error("organization not created")}};return(0,r.jsxs)("div",{className:"font-medium flex items-center mb-1",children:[r.jsx("span",{children:"Workspaces"}),(0,r.jsxs)(s.J2,{children:[r.jsx(s.xo,{asChild:!0,children:r.jsx(i.z,{asChild:!0,type:"button",variant:"ghost",size:"icon",className:"ml-auto cursor-pointer",children:r.jsx(n.Z,{className:"h-4 w-4"})})}),(0,r.jsxs)(s.yk,{children:[r.jsx("div",{className:"font-medium text-center text-gray-600 pb-4 text-sm",children:"Create Organiztion"}),r.jsx("form",{action:t,children:(0,r.jsxs)("div",{children:[r.jsx(o.Z,{name:"image"}),r.jsx(l.Z,{id:"title",label:"Organization Title",type:"text"}),r.jsx(d.Z,{className:"w-full mt-2",children:"Create Org"})]})})]})]})]})}},19759:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(95344);a(3729);var s=a(5094),i=a(11453);let n=({children:e,className:t,variant:a})=>r.jsx(s.z,{className:(0,i.cn)(t),variant:a,type:"submit",size:"sm",children:e})},56347:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(95344);let s=[{id:1,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image1_a7e9aq.avif",name:"abc"},{id:2,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image2_tx6ozj.jpg",name:"abc"},{id:3,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image6_bijqg9.jpg",name:"abc"},{id:4,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image5_pyyvsc.jpg",name:"abc"},{id:5,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132360/assets/image4_jg48zf.jpg",name:"abc"},{id:6,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image9_ocodce.jpg",name:"abc"},{id:7,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image8_saku93.jpg",name:"abc"},{id:8,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image7_lz1hhz.jpg",name:"abc"},{id:9,image:"https://res.cloudinary.com/my-umt-final-project/image/upload/v1707132361/assets/image3_rbpvp3.jpg",name:"abc"}];var i=a(3729),n=a(89410),o=a(62312);let l=({name:e})=>{let[t,a]=(0,i.useState)("");return r.jsx("div",{className:"relative",children:r.jsx("div",{className:"grid grid-cols-3 gap-2 mb-2",children:s?.map(s=>r.jsxs("div",{className:"cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",onClick:()=>a(s.id),children:[r.jsx("input",{type:"radio",id:e,name:e,checked:t==s.id,value:s.image,className:"hidden"}),r.jsx(n.default,{src:s.image,alt:s.name,className:"object-cover rounded-sm",fill:!0}),t==s.id&&r.jsx("div",{className:"absolute inset-y-0 h-full w-full bg-black/40 flex items-center justify-center",children:r.jsx(o.Z,{className:"h-4 w-4 text-white"})}),r.jsx("span",{className:"opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white p-0.5 bg-black/50",children:s.name})]},s.id))})})}},74311:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(95344),s=a(3729),i=a(14217),n=a(88720),o=a(11453);let l=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef(({className:e,...t},a)=>r.jsx(i.f,{ref:a,className:(0,o.cn)(l(),e),...t}));d.displayName=i.f.displayName;let c=s.forwardRef(({className:e,type:t,...a},s)=>r.jsx("input",{type:t,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...a}));c.displayName="Input";let m=(0,s.forwardRef)(({id:e,label:t,type:a,placeholder:s,className:i,defaultValue:n},l)=>r.jsx("div",{children:(0,r.jsxs)("div",{children:[r.jsx(d,{htmlFor:e,className:"font-medium text-gray-600",children:t}),r.jsx(c,{id:e,ref:l,name:e,defaultValue:n,placeholder:s,type:a,className:(0,o.cn)("text-sm px-2 py-1 h-7",i)})]})}))},13280:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var r=a(95344),s=a(47674),i=a(56506);a(3729);let n=()=>{let{status:e}=(0,s.useSession)();return r.jsx("header",{className:"bg-white shadow",children:(0,r.jsxs)("nav",{className:"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8",children:[r.jsx(i.default,{href:"/",className:"-m-1.5 p-1.5",children:r.jsx("div",{className:"text-lg font-bold text-blue-600",children:"BOARDS"})}),"authenticated"!==e?r.jsx(i.default,{href:"/login",className:"text-sm font-semibold leading-6 text-gray-900",children:"Log in"}):(0,r.jsxs)("div",{className:"flex gap-4",children:[r.jsx(i.default,{href:"/organizations",className:"text-sm font-semibold leading-6 text-gray-900",children:"Organizations"}),r.jsx("div",{onClick:e=>{e.preventDefault(),(0,s.signOut)()},className:"font-semibold text-sm cursor-pointer",children:"Logout"})]})]})})}},58165:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var r=a(95344);a(3729);var s=a(6124),i=a(89410),n=a(18878),o=a(88534),l=a(5094),d=a(11453),c=a(8428);let m=({org:e})=>{let t=(0,c.useRouter)(),a=(0,c.usePathname)(),m=[{label:"Boards",icon:r.jsx(n.Z,{className:"h-4 w-4 mr-2"}),href:`/organizations/${e.id}`},{label:"Activity",icon:r.jsx(o.Z,{className:"h-4 w-4 mr-2"}),href:`/organizations/${e.id}/activity`},{label:"Members",icon:r.jsx(o.Z,{className:"h-4 w-4 mr-2"}),href:`/organizations/${e.id}/members`}];return(0,r.jsxs)(s.AccordionItem,{value:e?.id,className:"border-none",children:[r.jsx(s.AccordionTrigger,{children:(0,r.jsxs)("div",{className:"flex items-center gap-x-2",children:[r.jsx("div",{className:"w-7 h-7 relative",children:r.jsx(i.default,{fill:!0,src:e?.image,alt:e?.title,className:"rounded-sm object-cover"})}),r.jsx("span",{className:"font-medium text-sm",children:e?.title})]})}),r.jsx(s.AccordionContent,{className:"",children:m?.map(e=>r.jsxs(l.z,{onClick:()=>t.push(e.href),className:d.cn("w-full font-normal justify-start pl-10 mb-1",a==e.href&&"bg-sky-500/10 text-sky-700"),variant:"ghost",children:[e.icon,e.label]},e.href))})]})}},6124:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Accordion:()=>l,AccordionContent:()=>m,AccordionItem:()=>d,AccordionTrigger:()=>c});var r=a(95344),s=a(3729),i=a(23557),n=a(25390),o=a(11453);let l=i.fC,d=s.forwardRef(({className:e,...t},a)=>r.jsx(i.ck,{ref:a,className:(0,o.cn)("border-b",e),...t}));d.displayName="AccordionItem";let c=s.forwardRef(({className:e,children:t,...a},s)=>r.jsx(i.h4,{className:"flex",children:(0,r.jsxs)(i.xz,{ref:s,className:(0,o.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...a,children:[t,r.jsx(n.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));c.displayName=i.xz.displayName;let m=s.forwardRef(({className:e,children:t,...a},s)=>r.jsx(i.VY,{ref:s,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:r.jsx("div",{className:(0,o.cn)("pb-4 pt-0",e),children:t})}));m.displayName=i.VY.displayName},5094:(e,t,a)=>{"use strict";a.d(t,{z:()=>d});var r=a(95344),s=a(3729),i=a(32751),n=a(88720),o=a(11453);let l=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef(({className:e,variant:t,size:a,asChild:s=!1,...n},d)=>{let c=s?i.g7:"button";return r.jsx(c,{className:(0,o.cn)(l({variant:t,size:a,className:e})),ref:d,...n})});d.displayName="Button"},88476:(e,t,a)=>{"use strict";a.d(t,{J2:()=>o,xo:()=>l,yk:()=>d});var r=a(95344),s=a(3729),i=a(57886),n=a(11453);let o=i.fC,l=i.xz,d=s.forwardRef(({className:e,align:t="center",sideOffset:a=4,...s},o)=>r.jsx(i.h_,{children:r.jsx(i.VY,{ref:o,align:t,sideOffset:a,className:(0,n.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s})}));d.displayName=i.VY.displayName},11453:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var r=a(56815),s=a(79377);function i(...e){return(0,s.m6)((0,r.W)(e))}},72765:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(95344);a(3729);var s=a(47674);let i=({children:e})=>r.jsx(s.SessionProvider,{children:e})},15509:(e,t,a)=>{"use strict";a.d(t,{Ci:()=>i,bL:()=>o,o7:()=>s,pt:()=>n}),a(13664);var r=a(28371),s=(0,r.$)("a17fc8052cb27ae622fbe13d92558fd578dfd2c0"),i=(0,r.$)("600fd465f68ba7cb4333bcf1c06aee99dc5799eb"),n=(0,r.$)("22b468c826244c02b49be721d1ea25be54708c1c"),o=(0,r.$)("88d47719a19dd85a905d89a84334848596015111")},66286:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(25036);a(40002);let s=()=>r.jsx("div",{children:r.jsx("footer",{children:(0,r.jsxs)("div",{className:"w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between",children:[(0,r.jsxs)("span",{className:"flex text-sm text-gray-500 sm:text-center",children:["\xa9 2024 ",r.jsx("li",{className:"hover:underline",children:"Boards"}),". All Rights Reserved."]}),(0,r.jsxs)("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0",children:[r.jsx("li",{className:"hover:underline me-4 md:me-6",children:"About"}),r.jsx("li",{className:"hover:underline me-4 md:me-6",children:"Privacy Policy"}),r.jsx("li",{className:"hover:underline me-4 md:me-6",children:"Licensing"}),r.jsx("li",{className:"hover:underline",children:"Contact"})]})]})})}),i=(0,a(86843).createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\components\Navbar.tsx`),{__esModule:n,$$typeof:o}=i,l=i.default,d=({children:e})=>(0,r.jsxs)("div",{children:[r.jsx(l,{}),e,r.jsx(s,{})]})},78531:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var r=a(25036);a(40002);var s=a(86843);let i=(0,s.createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\components\CreateOrgForm.tsx`),{__esModule:n,$$typeof:o}=i,l=i.default,d=(0,s.createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\components\ui\accordion.tsx`),{__esModule:c,$$typeof:m}=d;d.default;let u=(0,s.createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\components\ui\accordion.tsx#Accordion`);(0,s.createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\components\ui\accordion.tsx#AccordionItem`),(0,s.createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\components\ui\accordion.tsx#AccordionTrigger`),(0,s.createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\components\ui\accordion.tsx#AccordionContent`);let f=(0,s.createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\components\SidebarItem.tsx`),{__esModule:h,$$typeof:x}=f,p=f.default,g=({getOrganizations:e})=>r.jsx(u,{type:"multiple",className:"space-y-2",children:e?.map(e=>r.jsx(p,{org:e}))});var v=a(1958);let b=async()=>{let e=await v.P.organization.findMany();return(0,r.jsxs)("div",{children:[r.jsx(l,{}),r.jsx(g,{getOrganizations:e})]})},y=({children:e})=>r.jsx("main",{className:"pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto",children:(0,r.jsxs)("div",{className:"flex gap-x-7",children:[r.jsx("div",{className:"w-64 shrink-0 hidden md:block",children:r.jsx(b,{})}),e]})})},60975:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u,metadata:()=>m});var r=a(25036),s=a(53640),i=a.n(s);a(5023);let n=(0,a(86843).createProxy)(String.raw`C:\Users\vishwas singh\trello-clone-main\trello-clone-main\src\providers\AuthProvider.tsx`),{__esModule:o,$$typeof:l}=n,d=n.default;var c=a(27171);let m={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:i().className,children:(0,r.jsxs)(d,{children:[r.jsx(c.x,{}),e]})})})}},68474:(e,t,a)=>{"use strict";a.d(t,{getAuthSession:()=>l});var r=a(25046),s=a(48970),i=a(28388),n=a(63669);let o={adapter:(0,i.PrismaAdapter)(n.prismaDB),providers:[(0,s.default)({clientId:process.env.GOOGLE_ID,clientSecret:process.env.GOOGLE_SECRET})]},l=()=>(0,r.getServerSession)(o)},63669:(e,t,a)=>{"use strict";a.d(t,{prismaDB:()=>s});var r=a(53524);let s=globalThis.prisma||new r.PrismaClient},1958:(e,t,a)=>{"use strict";a.d(t,{P:()=>s});var r=a(53524);let s=globalThis.prisma||new r.PrismaClient},40926:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createOgranization:()=>l,getWithoutOrgMembers:()=>d,removeOrgMember:()=>m,updateOrgMember:()=>c});var r=a(98601);a(75811);var s=a(68474),i=a(63669),n=a(43811),o=a(46893);let l=async e=>{let t;if(!(0,s.getAuthSession)())return{error:"unauthorized"};let{title:a,image:r}=e;try{t=await i.prismaDB.organization.create({data:{title:a,image:r}})}catch(e){return{error:"organization not created"}}return(0,n.revalidatePath)("/"),{result:t}},d=async e=>{let t;if(!(0,s.getAuthSession)())return{error:"unauthorized"};let{organizationId:a}=e;try{t=await i.prismaDB.user.findMany({where:{NOT:{organizations:{some:{id:a}}}}})}catch(e){return{error:"user already exist"}}return(0,n.revalidatePath)(`/orgnaizations/${a}/members`),{result:t}},c=async e=>{let t,a;if(!(0,s.getAuthSession)())return{error:"unauthorized"};let{id:r,organizationId:o,orgIds:l,userIds:d}=e;try{[t,a]=await i.prismaDB.$transaction([i.prismaDB.user.update({where:{id:r},data:{orgIds:l}}),i.prismaDB.organization.update({where:{id:o},data:{userIds:d}})])}catch(e){return{error:"user already exist"}}return(0,n.revalidatePath)(`/orgnaizations/${o}/members`),{result:{updateUser:t,updateOrg:a}}},m=async e=>{if(!(0,s.getAuthSession)())return{error:"unauthorized"};let{userId:t,organizationId:a}=e;try{let e=(await i.prismaDB.organization.findUnique({where:{id:a},select:{userIds:!0}})).userIds.filter(e=>e!=t);for(let r of(await i.prismaDB.organization.update({where:{id:a},data:{userIds:{set:e}}}),await i.prismaDB.board.findMany({where:{orgId:a},select:{id:!0,userIds:!0}}))){let e=r.userIds.filter(e=>e!=t);for(let a of(await i.prismaDB.board.update({where:{id:r.id},data:{userIds:{set:e}}}),await i.prismaDB.card.findMany({where:{boardId:r.id},select:{id:!0,userIds:!0}}))){let e=a.userIds.filter(e=>e!=t);await i.prismaDB.card.update({where:{id:a.id},data:{userIds:{set:e}}})}}}catch(e){return{error:"user already exist"}}(0,n.revalidatePath)(`/orgnaizations/${a}/members`)};(0,o.ensureServerEntryExports)([l,d,c,m]),(0,r.createActionProxy)("600fd465f68ba7cb4333bcf1c06aee99dc5799eb",l),(0,r.createActionProxy)("22b468c826244c02b49be721d1ea25be54708c1c",d),(0,r.createActionProxy)("88d47719a19dd85a905d89a84334848596015111",c),(0,r.createActionProxy)("a17fc8052cb27ae622fbe13d92558fd578dfd2c0",m)},73881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(70337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};