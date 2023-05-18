(()=>{"use strict";var n={902:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: pink;\r\n}\r\n\r\n.container {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.2);\r\n    border-radius: 10px;\r\n    margin-top: 50px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput[type="text"], select {\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.btn {\r\n    background-color: #4CAF50;\r\n    color: #fff;\r\n    padding: 8px 16px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #3e8e41;\r\n}\r\n\r\n.output {\r\n    background-color: #f5f5f5;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    margin-top: 20px;\r\n    font-size: 1.2rem;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .container {\r\n        padding: 10px;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .input-group label {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .input-group select,\r\n    .input-group input[type="number"] {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .calculate-btn {\r\n        font-size: 16px;\r\n        padding: 8px 16px;\r\n    }\r\n\r\n    .result {\r\n        font-size: 16px;\r\n    }\r\n}',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],u=a[p]||0,d="".concat(p," ").concat(u);a[p]=u+1;var l=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var v=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),p=0;p<a.length;p++){var u=t(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),p=t(216),u=t.n(p),d=t(589),l=t.n(d),f=t(902),v={};v.styleTagTransform=l(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const m=document.getElementById("depositType"),b=document.getElementById("depositTerm");m.addEventListener("change",(function(){const n=m.value;"Пополняемый"===n?b.innerHTML='\n\t\t<option value="none" selected disabled hidden>Срок вклада</option>\n\t\t<option value="6 месяцев">6 Месяцев (20 %)</option>\n\t\t<option value="12 месяцев">12 Месяцев (22 %)</option>\n\t\t<option value="18 месяцев">18 Месяцев (15 %)</option>\n\t\t<option value="24 месяцев">24 Месяцев (10 %)</option>\n\t\t':"Срочный"===n&&(b.innerHTML='\n\t\t<option value="none" selected disabled hidden>Срок вклада</option>\n\t\t<option value="3 месяца">3 Месяца (20 %)</option>\n\t\t<option value="6 месяцев">6 Месяцев (22 %)</option>\n\t\t<option value="9 месяцев">9 Месяцев (24 %)</option>\n\t\t<option value="12 месяцев">12 Месяцев (24 %)</option>\n\t\t<option value="18 месяцев">18 Месяцев (18 %)</option>\n\t\t<option value="24 месяцев">24 Месяцев (15 %)</option>\n\t\t')})),document.getElementById("btn").addEventListener("click",(function(){const n=document.getElementById("depositType").value,e=document.getElementById("depositTerm").value,t=document.getElementById("depositAmount").value;if("none"===n||"none"===e)return void alert("Вы не указали вид вклада или срок вклада");if(""===t||isNaN(t))return void alert("Укажите число");let r,o;if("Пополняемый"===n)switch(e){case"6 месяцев":r=.2;break;case"12 месяцев":r=.22;break;case"18 месяцев":r=.15;break;case"24 месяцев":r=.1;break;default:r=0}else if("Срочный"===n)switch(e){case"3 месяца":r=.2;break;case"6 месяцев":r=.22;break;case"9 месяцев":r=.23;break;case"12 месяцев":r=.24;break;case"18 месяцев":r=.18;break;case"24 месяцев":r=.15;break;default:r=0}o=t*(1+r),document.getElementById("result").innerHTML=`Вклад "${n}" на срок "${e}", на сумму ${t} руб. принесет процентную ставку ${100*r}%, что даст вам общую сумму ${o.toFixed(2)} руб.`}))})()})();