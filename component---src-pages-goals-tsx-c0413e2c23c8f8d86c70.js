"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[689],{3020:function(e,t,r){var n=r(758);t.A=function(){return n.createElement("footer",{className:"text-center py-8"},n.createElement("p",null,"© Kazen Projects 2024"))}},6942:function(e,t,r){var n=r(758),l=r(9789),a=r(1336);t.A=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:r,1:o}=(0,n.useState)(!1),c=(0,n.useRef)(null),s=(0,n.useRef)(null);var i,u;i=c,u=s,(0,n.useEffect)((()=>{function e(e){!i.current||i.current.contains(e.target)||u.current.contains(e.target)||t(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[i,u]);const m=n.createElement(n.Fragment,null,n.createElement(l.Link,{to:"/#home",className:"Link2 hover:underline"},"Home"),n.createElement(l.Link,{to:"/goals",className:"Link2 hover:underline"},"Goals"),n.createElement(l.Link,{to:"/#clientwork",className:"Link2 hover:underline"},"Client Work"),n.createElement(l.Link,{to:"/#contact",className:"Link2 hover:underline"},"Contact"));return(0,n.useEffect)((()=>{localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),o(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),o(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),o(!0))}),[]),n.createElement("header",{className:"NavBar flex justify-between fixed w-full "},n.createElement(l.Link,{to:"/",className:"Link1 ml-[5vw] pt-3 pb-4"},"Kazen Projects"),n.createElement("div",{className:"flex flex-row"},n.createElement("div",{className:"FullNav"},n.createElement("ul",{className:"flex mt-7 mr-3"},m)),n.createElement("div",{className:"ToggleNav"},n.createElement("button",{ref:s,onClick:()=>{t((e=>!e))}},n.createElement(a.vIB,{className:"ml-4 mr-8 mt-4 text-white",size:30})),e?n.createElement("div",{ref:c,className:"MobileMenu pt-4 ml-[-90px] pb-7 pl-2 pr-8 absolute rounded-md"},n.createElement("ul",{className:"flex flex-col text-start ml-3"},m)):null)))}},2411:function(e,t,r){r.r(t),r.d(t,{Head:function(){return o}});var n=r(758),l=r(6942),a=r(3020);t.default=()=>("undefined"!=typeof window?console.log("we are running on the client"):console.log("we are running on the server"),n.createElement("div",{className:"flex flex-col"},n.createElement(l.A,null),n.createElement("main",{id:"home",className:"pt-20 pb-16"},n.createElement("h1",{className:"text-center mt-8 text-[26px]"},"Goals"),n.createElement("h2",{className:"mt-4"},"Stuctural Issues Observed:"),n.createElement("ul",null,n.createElement("h3",null,"Deferred Consequence Economics - ",n.createElement("a",{href:"/blog/deferred-consequence-economics",className:"underline",target:"_blank"},"Read More")),n.createElement("h4",null,"Where solutions are created to deal with the ",n.createElement("i",null,"effects")," of actions, rather than solutions that deal with problematic actions directly."),n.createElement("h3",null,"Planned Obselesence"),n.createElement("h4",null,"Products are engineered so they avoidably fail after a period of time."),n.createElement("h3",{className:"mt-4"},"Intentional Labour Creation"),n.createElement("h4",null,"Jobs and work are created where they do not need to be. ",n.createElement("br",null),"Think software re-organising it's menus and layout, making it harder to use, but developers can keep working")),n.createElement("h2",{className:"mt-8"},"Areas:"),n.createElement("ul",null,n.createElement("h3",null,"Government"),n.createElement("h3",null,"Business"))),n.createElement(a.A,null)));const o=()=>n.createElement("title",null,"Kazen Projects - Goals")},1714:function(e,t,r){r.d(t,{k5:function(){return f}});var n=r(758),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),o=["attr","size","title"];function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),d(e.child))))}function f(e){return t=>n.createElement(h,s({attr:u({},e.attr)},t),d(e.child))}function h(e){var t=t=>{var r,{attr:l,size:a,title:i}=e,m=c(e,o),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,m,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=component---src-pages-goals-tsx-c0413e2c23c8f8d86c70.js.map