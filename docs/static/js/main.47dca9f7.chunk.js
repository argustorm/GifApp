(this.webpackJsonpgiftapp=this.webpackJsonpgiftapp||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n(5),i=n.n(r),s=(n(12),n(2)),u=n(4),o=n.n(u),j=n(6),f=function(){var t=Object(j.a)(o.a.mark((function t(e){var n,c,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://api.giphy.com/v1/gifs/","search?q=").concat(e,"&limit=").concat(10,"&api_key=").concat("fJtmfyWZCBEQAbWLOzzMlqYwf6cY5Mux"));case 2:return n=t.sent,t.next=5,n.json();case 5:return c=t.sent,a=c.data,r=a.map((function(t){return{id:t.id,title:t.title,url:t.images.original.url}})),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(t){var e=t.image;return Object(c.jsxs)("div",{className:"card animate__animated animate__fadeInLeftBig",children:[Object(c.jsx)("img",{alt:e.title,src:e.url}),Object(c.jsx)("p",{children:e.title})]})},b=function(t){var e=t.category,n=Object(a.useState)([]),r=Object(s.a)(n,2),i=r[0],u=r[1];return Object(a.useEffect)((function(){f(e).then((function(t){return u(t)}))}),[e]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e}),Object(c.jsx)("div",{className:"grid animate__animated animate__fadeInLeftBig",children:i.map((function(t){return Object(c.jsx)(l,{image:t},t.id)}))})]})},p=function(t){var e=t.setCategory,n=Object(a.useState)(""),r=Object(s.a)(n,2),i=r[0],u=r[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e(i),u(""))},children:Object(c.jsx)("input",{type:"text",placeholder:"Escriba una categoria",onChange:function(t){u(t.target.value)},value:i})})},d=function(){var t=Object(a.useState)(null),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Repaso GifAppExpert"}),Object(c.jsx)(p,{setCategory:r}),Object(c.jsx)("hr",{}),Object(c.jsx)(b,{category:n})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(c.jsx)(d,{}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.47dca9f7.chunk.js.map