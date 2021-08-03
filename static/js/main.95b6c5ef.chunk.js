(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,n){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__TI6cZ",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__RxVXE","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__3do9O"}},13:function(e,t,n){e.exports={Overlay:"Modal_Overlay__2CYVj",Modal:"Modal_Modal__1x44C"}},25:function(e,t,n){e.exports={Button:"Button_Button__3ORqK"}},27:function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__1Q4DK"}},33:function(e,t,n){},6:function(e,t,n){e.exports={wrapper:"SearchBar_wrapper__eAuh9",form:"SearchBar_form__HvBA5",submit_btn:"SearchBar_submit_btn__23Wpc",search_input:"SearchBar_search_input__O-dPU",icon:"SearchBar_icon__7_Pf6"}},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),s=(n(33),n(4)),u=n(5),i=n(28),l=n(6),m=n.n(l),b=n(1);function j(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1];return Object(b.jsx)("div",{className:m.a.wrapper,children:Object(b.jsxs)("form",{className:m.a.form,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):u.b.error("Enter your query please")},children:[Object(b.jsx)("button",{className:m.a.submit_btn,type:"submit",children:Object(b.jsx)(i.a,{className:m.a.icon})}),Object(b.jsx)("input",{className:m.a.search_input,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",type:"text",name:"search",value:c,onChange:function(e){return o(e.target.value)}})]})})}var g=n(8),f=n.n(g),p=n(14),h=n(11),O=n(24),d=n.n(O);var _=n(12),v=n.n(_);var x=function(e){var t=e.src,n=e.tags,a=e.largeImage,r=e.onClick;return Object(b.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:t,alt:n,className:v.a.ImageGalleryItem_image,onClick:function(){r({largeImage:a,tags:n})}})})},y=n(25),I=n.n(y);var S=function(e){var t=e.onClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"button",className:I.a.Button,onClick:t,children:"Load more"})})},k=n(26),w=n.n(k);var C=function(e,t){return w.a.get("https://pixabay.com/api/",{params:{q:e,page:"".concat(t),key:"21801737-49cda37636a05962c9a05323f",image_type:"photo",orientation:"horizontal",per_page:"12"}}).then((function(e){return e.data.hits}))},G=n(27),B=n.n(G),E="idle",N="pending",F="resolved",L="rejected";var q=function(e){var t=e.query,n=e.onSelect,r=Object(a.useState)(1),c=Object(s.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)([]),m=Object(s.a)(l,2),j=m[0],g=m[1],O=Object(a.useState)(E),_=Object(s.a)(O,2),v=_[0],y=_[1],I=Object(a.useState)(null),k=Object(s.a)(I,2),w=k[0],G=k[1],q=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current}(t),M=function(){var e=Object(h.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(N),e.prev=1,e.next=4,C(t,n);case 4:if(0!==(a=e.sent).length){e.next=9;break}return y(E),i(1),e.abrupt("return",u.b.error("Search result is not successful. Enter the correct query and try again, please."));case 9:g((function(e){return[].concat(Object(p.a)(e),Object(p.a)(a))})),y(F),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),G(e.t0.message),y(L),u.b.error("Oops! Something went wrong... Please try again. If the problem persists, contact our customer support");case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){""!==t&&(i(1),g([]),G(null),M(t,1))}),[t]),Object(a.useEffect)((function(){if(q===t&&1!==o){var e=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(null),e.next=3,M(t,o);case 3:window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("pagination"),e()}}),[o,q,t]),Object(b.jsxs)(b.Fragment,{children:[v===L&&Object(b.jsxs)("h1",{children:["Error: ",w]}),Object(b.jsx)("ul",{className:B.a.ImageGallery,children:j.length>0&&j.map((function(e){return Object(b.jsx)(x,{src:e.webformatURL,tags:e.tags,largeImage:e.largeImageURL,onClick:n},e.id)}))}),v===N&&Object(b.jsx)(d.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100}),v===F&&j.length>0&&Object(b.jsx)(S,{onClick:function(){i((function(e){return e+1}))}})]})},M=n(13),T=n.n(M);var P=function(e){var t=e.onClose,n=e.src,r=e.tags;return Object(a.useEffect)((function(){var e=function(e){27===e.keyCode&&t()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),Object(b.jsx)("div",{className:T.a.Overlay,onClick:function(e){!function(e){e.target===e.currentTarget&&t()}(e)},children:Object(b.jsx)("div",{className:T.a.Modal,children:Object(b.jsx)("img",{src:n,alt:r})})})};n(74),n(75);var R=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),o=Object(s.a)(c,2),i=o[0],l=o[1],m=Object(a.useState)(null),g=Object(s.a)(m,2),f=g[0],p=g[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{onSubmit:function(e){r(e)}}),Object(b.jsx)(q,{query:n,onSelect:function(e){var t=e.largeImage,n=e.tags;l(t),p(n)}}),i&&Object(b.jsx)(P,{src:i,tags:f,onClose:function(){l(null)}}),Object(b.jsx)(u.a,{position:"top-right",toastOptions:{duration:3e3}})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),D()}},[[76,1,2]]]);
//# sourceMappingURL=main.95b6c5ef.chunk.js.map