(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(2444)}])},4175:function(e,n,r){"use strict";var t=r(5893),s=r(2498),i=r(204),l=r(3490);let a=e=>{let{colorMode:n}=(0,s.If)();return(0,t.jsx)(i.k,{direction:"column",alignItems:"center",justifyContent:"flex-start",bg:l.Z.bgColor[n],color:l.Z.color[n],minW:"100vw",maxW:"100%",...e,children:e.children})};n.Z=a},1794:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var t=r(5893),s=r(6384),i=r(2498),l=r(4089),a=r(3100),c=r(6979),o=r(6684),d=r(8911),u=r(9583),h=r(3490);let m=e=>{let{children:n,label:r,href:a}=e;return(0,t.jsxs)(s.m.button,{bg:(0,i.ff)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:a,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:(0,i.ff)("blackAlpha.200","whiteAlpha.200")},children:[(0,t.jsx)(l.TX,{children:r}),n]})};function x(){return(0,t.jsx)(a.xu,{bg:h.Z.bgColor[(0,i.ff)("light","dark")],color:h.Z.color[(0,i.ff)("light","dark")],maxW:"100vw",children:(0,t.jsxs)(c.W,{as:o.K,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"center",md:"center"},children:[(0,t.jsxs)(d.x,{children:["\xa9 ",new Date().getUTCFullYear()," Tom\xe1s Lopes. All rights reserved"]}),(0,t.jsxs)(o.K,{direction:"row",spacing:4,children:[(0,t.jsx)(m,{label:"GitHub",href:"http://www.github.com/tomas050302",children:(0,t.jsx)(u.hJX,{})}),(0,t.jsx)(m,{label:"LinkedIn",href:"https://www.linkedin.com/in/tom%C3%A1s-lopes-021907172/",children:(0,t.jsx)(u.ltd,{})})]})]})})}},238:function(e,n,r){"use strict";r.d(n,{Z:function(){return C}});var t=r(5893),s=r(8163),i=r(4741),l=r(3838),a=r(2498),c=r(7335),o=r(3100),d=r(204),u=r(4641),h=r(4418),m=r(6684),x=r(7405),f=r(6938),j=r(9098),p=r(6272),b=r(9154),g=r(3490),k=r(4231),_=r(8728),w=r(7350);let v=()=>{let{colorMode:e,toggleColorMode:n}=(0,a.If)(),r="dark"===e,s=(0,w.p)();return(0,t.jsx)(p.z,{onClick:function(){n(),s({position:"bottom-left",duration:1e3,render:()=>(0,t.jsxs)(o.xu,{color:"white",p:3,mx:1,bg:r?"green.500":"green.700",children:["Theme changed to ",r?"light":"dark"]})})},children:"light"===e?(0,t.jsx)(k.k,{}):(0,t.jsx)(_.N,{})})},y=e=>{let{href:n,children:r}=e;return(0,t.jsx)(l.r,{p:2,rounded:"md",_hover:{textDecoration:"none",bg:(0,a.ff)("gray.200","gray.700")},fontSize:{base:"4xl",md:"md"},href:n,children:r})};function C(){let{isOpen:e,onOpen:n,onClose:r}=(0,c.q)(),k=[{name:"About me",url:"/about"},{name:"Projects",url:"/projects"},{name:"Contact me",url:"/contacts"}];return(0,t.jsxs)(o.xu,{px:4,w:"100%",children:[(0,t.jsxs)(d.k,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,t.jsxs)(u.U,{spacing:8,alignItems:"center",children:[(0,t.jsx)(h.X,{as:"h1",size:"lg",noOfLines:1,children:(0,t.jsx)(l.r,{_hover:{textDecoration:"none"},href:"/",children:"Tom\xe1s Lopes"})}),(0,t.jsx)(u.U,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:k.map(e=>(0,t.jsx)(y,{href:e.url,children:e.name},e.url))})]}),(0,t.jsx)(d.k,{alignItems:"center",children:(0,t.jsx)(m.K,{direction:"row",spacing:4,children:(0,t.jsxs)(x.v,{children:[(0,t.jsx)(f.q,{alignItems:"center",children:k.map(e=>(0,t.jsx)(y,{href:e.url,children:e.name},e.url))}),(0,t.jsx)(j.j,{as:p.z,rounded:"full",variant:"link",cursor:"pointer",minW:0}),(0,t.jsx)(v,{}),(0,t.jsx)(b.h,{size:"md",icon:e?(0,t.jsx)(s.T,{}):(0,t.jsx)(i.U,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:e?r:n})]})})})]}),e?(0,t.jsx)(o.xu,{pb:4,display:{md:"none"},position:{base:"fixed"},width:"100%",zIndex:2,overflowY:"hidden",bg:g.Z.bgColor[(0,a.ff)("light","dark")],h:{base:"100vh",md:"0"},children:(0,t.jsx)(m.K,{as:"nav",spacing:"8",alignItems:"center",children:k.map(e=>(0,t.jsx)(y,{href:e.url,children:e.name},e.url))})}):null]})}},4737:function(e,n,r){"use strict";r.d(n,{Z:function(){return b}});var t=r(5893),[s,i]=(0,r(5227).k)({name:"BreadcrumbStylesContext",errorMessage:"useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Breadcrumb />\" "}),l=(...e)=>e.filter(Boolean).join(" "),a=r(2495),c=r(5059),o=r(1639),d=r(535),u=r(6384),h=r(7294),m=(0,c.G)(function(e,n){let r=(0,o.jC)("Breadcrumb",e),i=(0,d.Lr)(e),{children:c,spacing:m="0.5rem",separator:x="/",className:f,listProps:j,...p}=i,b=(0,a.W)(c),g=b.length,k=b.map((e,n)=>(0,h.cloneElement)(e,{separator:x,spacing:m,isLastChild:g===n+1})),_=l("chakra-breadcrumb",f);return(0,t.jsx)(u.m.nav,{ref:n,"aria-label":"breadcrumb",className:_,__css:r.container,...p,children:(0,t.jsx)(s,{value:r,children:(0,t.jsx)(u.m.ol,{className:"chakra-breadcrumb__list",...j,__css:{display:"flex",alignItems:"center",...r.list},children:k})})})});m.displayName="Breadcrumb";var x=(0,c.G)(function(e,n){let{isCurrentPage:r,as:s,className:a,href:c,...o}=e,d=i(),h={ref:n,as:s,className:l("chakra-breadcrumb__link",a),...o};return r?(0,t.jsx)(u.m.span,{"aria-current":"page",__css:d.link,...h}):(0,t.jsx)(u.m.a,{__css:d.link,href:c,...h})});x.displayName="BreadcrumbLink";var f=(0,c.G)(function(e,n){let{spacing:r,...s}=e,l=i(),a={mx:r,...l.separator};return(0,t.jsx)(u.m.span,{ref:n,role:"presentation",...s,__css:a})});f.displayName="BreadcrumbSeparator";var j=(0,c.G)(function(e,n){let{isCurrentPage:r,separator:s,isLastChild:c,spacing:o,children:d,className:m,...j}=e,p=(0,a.W)(d),b=p.map(e=>e.type===x?(0,h.cloneElement)(e,{isCurrentPage:r}):e.type===f?(0,h.cloneElement)(e,{spacing:o,children:e.props.children||s}):e),g=i(),k={display:"inline-flex",alignItems:"center",...g.item},_=l("chakra-breadcrumb__list-item",m);return(0,t.jsxs)(u.m.li,{ref:n,className:_,...j,__css:k,children:[b,!c&&(0,t.jsx)(f,{spacing:o,children:s})]})});j.displayName="BreadcrumbItem";let p=e=>{let{currentPage:n}=e;return(0,t.jsxs)(m,{fontWeight:"medium",fontSize:"md",mb:"4",alignSelf:"start",ml:"8",children:[(0,t.jsx)(j,{children:(0,t.jsx)(x,{href:"/",children:"Home"})}),(0,t.jsx)(j,{isCurrentPage:!0,children:(0,t.jsx)(x,{children:n.charAt(0).toUpperCase()+n.slice(1)})})]})};var b=p},2444:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=r(9008),i=r.n(s),l=r(4175),a=r(1794),c=r(238),o=r(4737);let d=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i(),{children:[(0,t.jsx)("title",{children:"Tom\xe1s Lopes. About me"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)(l.Z,{minH:"91vh",minW:"100vw",children:[(0,t.jsx)(c.Z,{}),(0,t.jsx)(o.Z,{currentPage:"About me"})]}),(0,t.jsx)(a.Z,{})]});n.default=d},3490:function(e,n){"use strict";n.Z={bgColor:{light:"white.0",dark:"gray.800"},color:{light:"black",dark:"white"},cardColor:{light:"white.0",dark:"gray.700"}}}},function(e){e.O(0,[445,688,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);