(this["webpackJsonpdance-app"]=this["webpackJsonpdance-app"]||[]).push([[0],{34:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n,c,s=a(0),i=a.n(s),o=a(14),l=a.n(o),r=a(28),j=a(4),b=(a(34),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))}),d=a(1),u=function(){return Object(d.jsx)("div",{className:"About",children:"I am About Page"})},g=a(21),m=a(11),h=a(24),O=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"mb-4 border border-gray-80 rounded overflow-hidden",children:[Object(d.jsx)("div",{className:"w-full bg-gray-200 h-40"}),Object(d.jsxs)("div",{className:"p-2",children:[Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsx)("span",{className:"text-sm",children:e.name}),Object(d.jsx)("span",{className:"text-sm font-medium",children:"50+ Enrolled"})]}),Object(d.jsxs)("div",{className:"flex justify-between mb-4",children:[Object(d.jsx)("span",{className:"text-sm",children:"Live yoga with goga"}),Object(d.jsxs)("span",{className:"text-sm font-medium text-blue-500",children:["INR ",e.price]})]}),Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsx)("span",{className:"text-sm underline",children:"View Details"}),Object(d.jsx)("button",{className:"text-sm text-white bg-yellow-600 px-3 py-1 rounded",children:"Book Now"})]})]})]})})},x=a(13),v=a(55);!function(e){e[e.morning=0]="morning",e[e.afternoon=1]="afternoon",e[e.evening=2]="evening"}(n||(n={}));var p=(c={},Object(x.a)(c,n.morning,[5,6,7,8,9,10,11]),Object(x.a)(c,n.afternoon,[12,13,14,15,16,17]),Object(x.a)(c,n.evening,[18,19,20,21,22,23,24]),c),f="dd-MM-yyyy",y=[Object(h.a)(new Date,f),Object(h.a)(Object(v.a)(new Date,1),f),Object(h.a)(Object(v.a)(new Date,2),f),Object(h.a)(Object(v.a)(new Date,3),f),Object(h.a)(Object(v.a)(new Date,4),f)],w=a(25),N=a(29);function L(e){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(N.a,{options:e.options,value:e.selectedOption,onChange:function(t){e.onSelect(t)},placeholder:e.placeholder})})}var S,D=function(){var e=y.map((function(e){return{value:e,label:e}})),t=[{value:0,label:"Morning"},{value:1,label:"Afternoon"},{value:2,label:"Evening"}],a=Object(s.useState)([]),n=Object(m.a)(a,2),c=n[0],i=n[1],o=Object(s.useState)([]),l=Object(m.a)(o,2),r=l[0],j=l[1],b=Object(s.useState)([]),u=Object(m.a)(b,2),x=u[0],v=u[1],N=Object(s.useState)({value:Object(h.a)(new Date,f),label:Object(h.a)(new Date,f)}),S=Object(m.a)(N,2),D=S[0],A=S[1],k=Object(s.useState)(null),E=Object(m.a)(k,2),F=E[0],I=E[1],C=Object(s.useState)(null),M=Object(m.a)(C,2),P=M[0],B=M[1];Object(s.useEffect)((function(){fetch("./products.json").then((function(e){return e.json()})).then((function(e){j(e.map((function(e){return{category:e.category,name:e.categoryName,image:e.categoryImage}}))),i(e)}))}),[]),Object(s.useEffect)((function(){var e=function(e,t,a,n){var c=[];if(n){var s=e.filter((function(e){return e.category===n.category}));c=s[0].products}else e.forEach((function(e){c=[].concat(Object(w.a)(c),Object(w.a)(e.products))}));return a&&!t?c=c.filter((function(e){return Object.keys(e.slots).includes(a.value)})):t&&a&&(c=c.filter((function(e){var n=e.slots[a.value];return!!n&&n.some((function(e){return p[t.value].includes(e)}))}))),c}(c,F,D,P);v(e)}),[F,D,P,c]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h4",{className:"pt-6 my-4 text-center font-medium",children:"Its Happening Now"}),Object(d.jsx)("div",{className:"flex w-full overflow-x-auto pb-4",children:r.map((function(e){var t=!!P&&e.category===(null===P||void 0===P?void 0:P.category);return Object(d.jsxs)("div",{className:["mx-3 text-center",t?"selected":""].join(" "),onClick:function(){return B(e),void I(null)},children:[Object(d.jsx)("div",{className:"rounded-full w-14 h-14 border bg-gray-200"}),Object(d.jsx)("span",{className:"text-xs mt-2",children:e.category})]},e.category)}))}),Object(d.jsxs)("div",{className:"mb-8",children:[Object(d.jsxs)("div",{className:"mb-4 text-right",children:[Object(d.jsx)("div",{children:Object(d.jsx)(L,{options:e,selectedOption:D,onSelect:function(e){A(e)}})}),Object(d.jsx)("div",{children:Object(d.jsx)(L,{options:t,selectedOption:F,onSelect:function(e){I(e)},placeholder:"select batch"})})]}),x.length?x.map((function(e,t){return Object(s.createElement)(O,Object(g.a)(Object(g.a)({},e),{},{key:t}))})):null]})]})};!function(e){e.About="about",e.App="app",e.PlanDetails="plandetails"}(S||(S={}));var A=[{component:D,routeName:S.App,path:"/",exact:!0},{component:u,routeName:S.About,path:"/about",exact:!0},{component:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"mt-8",children:[Object(d.jsx)("div",{className:"text-md mb-4 font-medium",children:"Live yoga with goga Live"}),Object(d.jsx)("span",{className:"text-sm",children:"Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga"})]}),Object(d.jsxs)("div",{className:"flex justify-between mt-4",children:[Object(d.jsx)("span",{className:"text-sm",children:"Session Flow"}),Object(d.jsx)("span",{className:"text-sm font-medium",children:"50+ Minutes"})]}),Object(d.jsxs)("ul",{className:"pl-4 mt-4",children:[Object(d.jsx)("li",{children:"--Live yoga"}),Object(d.jsx)("li",{children:"--Live yoga"}),Object(d.jsx)("li",{children:"--Live yoga"}),Object(d.jsx)("li",{children:"--Live yoga"})]}),Object(d.jsxs)("div",{className:"mt-5",children:[Object(d.jsx)("div",{className:"text-md mb-1 font-medium",children:"Live yoga with goga Live"}),Object(d.jsx)("span",{className:"text-sm",children:"Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga"})]}),Object(d.jsxs)("div",{className:"mt-4 mb-10",children:[Object(d.jsx)("div",{className:"text-md mb-1 font-medium",children:"Live yoga with goga Live"}),Object(d.jsx)("span",{className:"text-sm",children:"Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga Live yoga with goga"})]}),Object(d.jsx)("button",{className:"text-base w-full text-white bg-yellow-600 text-center py-3 rounded",children:"Book Now"})]})},routeName:S.PlanDetails,path:"/plandetails/:id",exact:!0}];l.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(j.c,{children:A.map((function(e){return Object(d.jsx)(j.a,{exact:!0,path:e.path,component:e.component},e.path)}))})})}),document.getElementById("root")),b()}},[[53,1,2]]]);
//# sourceMappingURL=main.6e979627.chunk.js.map