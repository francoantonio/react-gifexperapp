(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(7),c=n.n(a),r=n(2),i=n(1),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(i.useState)(""),a=Object(r.a)(n,2),c=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2?e((function(t){return[c].concat(Object(s.a)(t))})):console.error("Input Invalid"),o("")},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){var e=t.target.value;o(void 0===e?"":e)}})})},j=n(10),d=function(t){var e=t.url,n=t.title;t.id;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:e,alt:n}),Object(u.jsx)("p",{children:n})]})},f=n(6),p=n.n(f),l=n(8),b=function(){var t=Object(l.a)(p.a.mark((function t(e){var n,a,c,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"o8kYfXLa5w6pUEOppSXtKuxnU2YWGiT1",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=5&api_key=").concat("o8kYfXLa5w6pUEOppSXtKuxnU2YWGiT1"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,r=c.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.category,n=function(t){var e=Object(i.useState)({data:[""],loading:!0}),n=Object(r.a)(e,2),a=n[0],c=n[1];return Object(i.useEffect)((function(){b(t).then((function(t){return c({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(i.useState)(["React.js"]),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Gif Expert App"}),Object(u.jsx)(o,{setCategories:a}),Object(u.jsx)("hr",{}),n.map((function(t){return Object(u.jsx)(m,{category:t},t)}))]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};n(17),n(18);c.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),h()}},[[19,1,2]]]);
//# sourceMappingURL=main.3322a01a.chunk.js.map