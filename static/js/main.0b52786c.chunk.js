(this.webpackJsonpjosuegarciaii=this.webpackJsonpjosuegarciaii||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),o=a.n(r),s=(a(27),a(21)),l=a(15),c=a(8),u=a(2),m=a(1),p={hidden:{rotate:-180},visible:{rotate:0,transition:{duration:1}}},d={hidden:{opacity:0,pathLength:0},visible:{opacity:1,pathLength:1,transition:{duration:2,ease:"easeInOut"}}},v=function(){return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement(m.b.div,{className:"logo",drag:!0,dragConstraints:{left:0,top:0,right:0,bottom:0},dragElastic:2},i.a.createElement(m.b.svg,{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",variants:p,initial:"hidden",animate:"visible"},i.a.createElement(m.b.path,{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z",variants:d}),i.a.createElement(m.b.path,{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z",variants:d}))),i.a.createElement(m.b.div,{className:"title",animate:{y:-10},initial:{y:-250},transition:{delay:.2,type:"spring",stiffness:120}},i.a.createElement("h1",null,"Pizza Joint"))))},b=a(7),h=Object(n.createContext)({containerVariants:{},buttonVariants:{}}),E=function(e){var t=e.children,a=Object(n.useState)({hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5},exit:{x:"-100vw",transition:{ease:"easeInOut"}}}}),r=Object(c.a)(a,2),o=r[0],s=(r[1],Object(n.useState)({hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255, 255, 255)",boxShadow:"0px 0px 8px rgb(255, 255, 255)",transition:{duration:.3,yoyo:1/0}}})),l=Object(c.a)(s,2),u=l[0],m=(l[1],{containerVariants:o,buttonVariants:u});return i.a.createElement(h.Provider,{value:m},t)},g={animationOne:{x:[-20,20],y:[0,-30],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25,ease:"easeOut"}}},animationTwo:{y:[0,-40],x:0,transition:{x:{yoyo:1/0,duration:.25,ease:"easeOut"}}}},y=function(){var e=Object(m.c)("animationOne","animationTwo"),t=Object(c.a)(e,2),a=t[0],n=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.b.div,{className:"loader",variants:g,animate:a}),i.a.createElement("div",{onClick:function(){return n()}},"Change Cycle Loader"))},x={hidden:{opacity:0},visible:{opacity:1,transition:{delay:1.5,duration:1.5}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},f=function(){var e=Object(n.useContext)(h).buttonVariants;return i.a.createElement(m.b.div,{className:"home container",variants:x,animate:"visible",initial:"hidden",exit:"exit"},i.a.createElement("h2",null,"Welcome to Pizza Joint"),i.a.createElement(b.b,{to:"/base"},i.a.createElement(m.b.button,{variants:e,whileHover:"hover"},"Create Your Pizza")),i.a.createElement(y,null))},O={hidden:{x:"-100vw"},visible:{x:0,transition:{type:"spring",stiffness:300}}},w=function(e){var t=e.addBase,a=e.pizza,r=Object(n.useContext)(h),o=r.containerVariants,s=r.buttonVariants;return i.a.createElement(m.b.div,{className:"base container",variants:o,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 1: Choose Your Base"),i.a.createElement("ul",null,["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=a.base===e?"active":"";return i.a.createElement(m.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,color:"#f8e112",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),a.base&&i.a.createElement(m.b.div,{className:"next",variants:O},i.a.createElement(b.b,{to:"/toppings"},i.a.createElement(m.b.button,{variants:s,whileHover:"hover"},"Next"))))},z=function(e){var t=e.addTopping,a=e.pizza,r=Object(n.useContext)(h),o=r.containerVariants,s=r.buttonVariants;return i.a.createElement(m.b.div,{className:"toppings container",variants:o,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 2: Choose Toppings"),i.a.createElement("ul",null,["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=a.toppings.includes(e)?"active":"";return i.a.createElement(m.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,color:"#f8e112",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),i.a.createElement(b.b,{to:"/order"},i.a.createElement(m.b.button,{variants:s,whileHover:"hover"},"Order")))},C={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",mass:.4,damping:8,when:"beforeChildren",staggerChildren:.4}}},j={hidden:{opacity:0},visible:{opacity:1}},k=function(e){var t=e.pizza;return i.a.createElement(m.b.div,{className:"container order",variants:C,initial:"hidden",animate:"visible"},i.a.createElement("h2",null,"Thank you for your order :)"),i.a.createElement(m.b.p,{variants:j},"You ordered a ",t.base," pizza with:"),i.a.createElement(m.b.div,{variants:j},t.toppings.map((function(e){return i.a.createElement("div",{key:e},e)}))))};var N=function(){var e=Object(u.f)(),t=Object(n.useState)({base:"",toppings:[]}),a=Object(c.a)(t,2),r=a[0],o=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(m.a,{exitBeforeEnter:!0},i.a.createElement(u.c,{location:e,key:e.key},i.a.createElement(u.a,{path:"/base"},i.a.createElement(w,{addBase:function(e){o(Object(l.a)({},r,{base:e}))},pizza:r})),i.a.createElement(u.a,{path:"/toppings"},i.a.createElement(z,{addTopping:function(e){var t;t=r.toppings.includes(e)?r.toppings.filter((function(t){return t!==e})):[].concat(Object(s.a)(r.toppings),[e]),o(Object(l.a)({},r,{toppings:t}))},pizza:r})),i.a.createElement(u.a,{path:"/order"},i.a.createElement(k,{pizza:r})),i.a.createElement(u.a,{path:"/"},i.a.createElement(f,null)))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b.a,null,i.a.createElement(E,null,i.a.createElement(N,null)))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0b52786c.chunk.js.map