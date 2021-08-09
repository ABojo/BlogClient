(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{34:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(20),s=r.n(c),o=r(9),i=r(0);var b=function(){return Object(i.jsxs)("div",{className:"flex flex-row items-baseline justify-between px-5 py-5 border-b border-grey-100 mb-10",children:[Object(i.jsx)(o.b,{to:"/",className:"text-3xl",children:"Blog Client"}),Object(i.jsx)("a",{href:"https://github.com/ABojo/BlogClient",className:"text-3xl font-bold text-blue-500",children:Object(i.jsx)("i",{className:"fab fa-github text-blue-500 bg-blue-100 p-4 rounded-full"})})]})},l=r(8),u=r(7),d=r.n(u),j=r(10);var x=function(e){var t=e.title,r=e.body,n=e.author,a=e.stamp,c=e.url;return Object(i.jsxs)("div",{className:"container mb-10 border-l-8 border-blue-500 px-8",children:[Object(i.jsx)(o.b,{to:c,className:"font-bold text-3xl mb-3 block",children:t}),Object(i.jsx)("p",{className:"text-gray-500 mb-3 break-words",children:r}),Object(i.jsx)("p",{className:"text-gray-400 text-sm mb-3 block",children:"".concat(n," \xb7 ").concat(a)}),Object(i.jsx)(o.b,{to:c,className:"\t\tbg-green-100\r hover:bg-green-200\r transition\r duration-200\r p-3\r rounded\r text-green-900\r font-bold\r text-sm\r inline-block",children:"Read More"})]})};var m=function(){return Object(i.jsxs)("div",{className:"lds-ring mt-10",children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})},p=function(e){var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear())},h=function(e){return JSON.parse(e).reverse().map((function(e){var t=e.body,r=e.timestamp;return Object(i.jsx)(x,{url:"/posts/".concat(e._id),title:e.title,body:"".concat(t.length>200?t.slice(0,200):t,"..."),author:e.author,stamp:p(r)},e._id)}))},O=function(){var e=Object(j.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://odingblogapi.herokuapp.com/api/posts");case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t(JSON.stringify(n.data.posts));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var f=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],a=t[1];return O(a),Object(i.jsx)("div",{children:r?h(r):Object(i.jsx)(m,{})})},v=r(2),g=r(22);var y=function(e){var t=e.text,r=e.success,n=r?"bg-green-100":"bg-red-100",a=r?"text-green-900":"text-red-900";return Object(i.jsx)("div",{className:"p-5 w-full ".concat(n," rounded mb-10"),children:Object(i.jsx)("h1",{className:a,children:t})})},N=function(){var e=Object(j.a)(d.a.mark((function e(t,r,n){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://odingblogapi.herokuapp.com/api/comments/",{method:"POST",body:JSON.stringify({postId:t,name:r,body:n}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c.data.comment);case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();var w=function(e){var t=e.postId,r=Object(n.useState)(e.comments),c=Object(l.a)(r,2),s=c[0],o=c[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),x=u[0],m=u[1],h=Object(n.useState)(""),O=Object(l.a)(h,2),f=O[0],v=O[1],w=Object(n.useState)(""),k=Object(l.a)(w,2),S=k[0],C=k[1],J=Object(n.useState)(!1),B=Object(l.a)(J,2),F=B[0],I=B[1],T=function(e,t){I(t),C(e)},E=function(){var e=Object(j.a)(d.a.mark((function e(){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x||!f){e.next=9;break}return e.next=3,N(t,x,f);case 3:r=e.sent,v(""),m(""),T("Your comment has been successfully posted!",!0),o([].concat(Object(g.a)(s),[r])),e.next=10;break;case 9:T("Sorry, you must fill out both fields first!",!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(a.a.Fragment,{children:[Object(i.jsx)("div",{className:"bg-gray-100 p-5 mb-10 rounded",children:Object(i.jsxs)("div",{className:"mx-auto",children:[Object(i.jsx)("input",{onChange:function(e){m(e.currentTarget.value)},value:x,type:"text",placeholder:"Enter your name",className:"px-5 py-5 rounded shadow-inner resize-none w-full text-sm block mb-3",required:!0}),Object(i.jsx)("textarea",{onChange:function(e){v(e.currentTarget.value)},value:f,placeholder:"Enter a comment",className:"px-5 py-5 rounded shadow-inner resize-none w-full text-sm block mb-3",required:!0}),Object(i.jsx)("input",{onClick:E,type:"submit",value:"Add Comment",className:"rounded font-bold bg-blue-100 hover:bg-blue-200 text-blue-900 p-3 text-sm cursor-pointer transition duration-200 shadow block ml-auto"})]})}),S&&Object(i.jsx)(y,{text:S,success:F}),Object(i.jsxs)("div",{className:"mb-10",children:[Object(i.jsxs)("h1",{className:"text-3xl mb-3 text-gray-900",children:["Comments (",s.length,")"]}),s.map((function(e){return Object(i.jsxs)("div",{className:"border-l-8 border-blue-500 px-8 mb-3",children:[Object(i.jsx)("h1",{className:"text-xl text-gray-900",children:e.name}),Object(i.jsx)("p",{className:"text-gray-500 text-lg mb-3",children:e.body}),Object(i.jsx)("p",{className:"text-gray-400",children:p(e.timestamp)})]},e._id)})).reverse()]})]})},k=function(){var e=Object(j.a)(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://odingblogapi.herokuapp.com/api/posts/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r(JSON.stringify(a.data.post));case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),S=function(e){var t=JSON.parse(e),r=t.title,n=t.body,a=t.author,c=t.timestamp;return Object(i.jsxs)("div",{className:"mb-10",children:[Object(i.jsx)("h1",{className:"text-4xl font-bold mb-3",children:r}),Object(i.jsxs)("h2",{className:"text-gray-400 text-md mb-3",children:[a," \xb7 ",p(c)]}),Object(i.jsx)("p",{className:"text-gray-500 text-xl break-words",children:n})]})};var C=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],c=t[1],s=Object(v.e)().id;return k(s,c),Object(i.jsx)("div",{children:r?Object(i.jsxs)(a.a.Fragment,{children:[S(r),Object(i.jsx)(w,{comments:JSON.parse(r).comments,postId:s})]}):Object(i.jsx)(m,{})})};var J=function(){return Object(i.jsx)("div",{className:"container mx-auto max-w-3xl p-5",children:Object(i.jsxs)(o.a,{basename:"/BlogClient",children:[Object(i.jsx)(b,{}),Object(i.jsx)(v.a,{exact:!0,path:"/",children:Object(i.jsx)(f,{})}),Object(i.jsx)(v.a,{exact:!0,path:"/posts/:id",children:Object(i.jsx)(C,{})})]})})};r(34);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(J,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ea5504e3.chunk.js.map