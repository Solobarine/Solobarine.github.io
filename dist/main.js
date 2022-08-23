(()=>{"use strict";var e={426:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(213),r=o.n(n),a=o(645),i=o.n(a)()(r());i.push([e.id,"body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.newList {\n  border-radius: 5px;\n  width: 30vw;\n  box-shadow: 3px 3px 5px 5px lightgray;\n}\n\n.today {\n  padding: 10px;\n  border-bottom: 1px solid black;\n}\n\n.top {\n  display: flex;\n  border-bottom: 1px solid black;\n}\n\n#eye {\n  background-color: white;\n  border: none;\n  margin-right: 10px;\n  padding: 10px 20px 10px 20px;\n}\n\n#activity {\n  border: none;\n  width: 28vw;\n  padding: 10px;\n}\n\n.ToDoList {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.ToDoList li {\n  text-decoration: none;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid gray;\n  padding: 10px;\n}\n\n.remove button {\n  padding: 10px;\n  width: 30vw;\n  color: rgb(148, 145, 145);\n  border: none;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},213:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=o(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=r(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=o(a[i]);t[c].references--}for(var s=n(e,r),d=0;d<a.length;d++){var l=o(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{var e=o(379),t=o.n(e),n=o(795),r=o.n(n),a=o(569),i=o.n(a),c=o(565),s=o.n(c),d=o(216),l=o.n(d),u=o(589),p=o.n(u),f=o(426),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".removeCompleted"),m=new class{#e;constructor(){this.#e=[]}SetToDo(e){this.#e=e}get ToDo(){return this.#e}reorder(){for(let e=0;e<this.#e.length;e+=1)this.#e[e].id=e}AddToDo(e,t){const o=this.#e.length;this.#e.push({activity:e,doneBox:t,id:o})}DeleteToDo(e){this.#e.splice(e,1)}SaveToDolistLocal(){localStorage.setItem("toDo",JSON.stringify(this.#e))}LoadToDoFromLocal(){const e=JSON.parse(localStorage.getItem("toDo"));return!!Array.isArray(e)&&(this.#e=e,!0)}};function y(e,t){m.ToDo[e].doneBox=t,m.SaveToDolistLocal()}function x(e,t){m.ToDo[e].activity=t,m.SaveToDolistLocal()}m.LoadToDoFromLocal();const g=()=>{document.querySelector(".ToDoList").innerHTML="";for(let e=0;e<m.ToDo.length;e+=1){const t=m.ToDo[e],o=document.querySelector(".ToDoList"),n=document.createElement("li");n.classList.add("eachToDo");const r=document.createElement("input");r.type="checkbox";const a=document.createElement("input");a.type="text",r.classList.add("doneBox"),a.value=t.activity,n.append(r,a),r.setAttribute("id",t.id),a.disabled=!1,r.checked=t.doneBox,r.checked&&(a.style.textDecoration="line-through"),a.addEventListener("change",(()=>{x(e,a.value)})),r.addEventListener("click",(()=>{y(e,r.checked),r.checked?a.style.textDecoration="line-through":a.style.textDecoration="none"})),o.appendChild(n);const i=document.createElement("button");function c(){const e=i.id;m.DeleteToDo(e),m.reorder(),m.SaveToDolistLocal(),g()}i.innerHTML='<i class="fa-solid fa-trash-can"></i>',i.classList.add("delButton"),i.onclick=c,i.id=t.id,n.appendChild(i)}};g(),document.querySelector(".button").addEventListener("click",(()=>{const e=document.getElementById("activity"),t=e.value;m.AddToDo(t,!1),m.SaveToDolistLocal(),e.value="",g()})),function(e,t){h.addEventListener("click",(()=>{const o=e.ToDo.filter((({doneBox:e})=>!e));e.SetToDo(o),e.reorder(),e.SaveToDolistLocal(),t()}))}(m,g)})()})();