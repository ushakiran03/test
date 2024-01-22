"use strict";(self.webpackChunkfinance=self.webpackChunkfinance||[]).push([[546],{6383:(t,n,e)=>{e.d(n,{Z:()=>s});var r={value:()=>{}};function i(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new o(r)}function o(t){this._=t}function a(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function u(t,n,e){for(var i=0,o=t.length;i<o;++i)if(t[i].name===n){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=e&&t.push({name:n,value:e}),t}o.prototype=i.prototype={constructor:o,on:function(t,n){var e,r,i=this._,o=(r=i,(t+"").trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");if(e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}}))),s=-1,l=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!==typeof n)throw new Error("invalid callback: "+n);for(;++s<l;)if(e=(t=o[s]).type)i[e]=u(i[e],t.name,n);else if(null==n)for(e in i)i[e]=u(i[e],t.name,null);return this}for(;++s<l;)if((e=(t=o[s]).type)&&(e=a(i[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new o(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};const s=i},5531:(t,n,e)=>{e.d(n,{B7:()=>v,HT:()=>_,zO:()=>d});var r,i,o=0,a=0,u=0,s=1e3,l=0,c=0,h=0,f="object"===typeof performance&&performance.now?performance:Date,p="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function d(){return c||(p(y),c=f.now()+h)}function y(){c=0}function v(){this._call=this._time=this._next=null}function _(t,n,e){var r=new v;return r.restart(t,n,e),r}function g(){c=(l=f.now())+h,o=a=0;try{!function(){d(),++o;for(var t,n=r;n;)(t=c-n._time)>=0&&n._call.call(void 0,t),n=n._next;--o}()}finally{o=0,function(){var t,n,e=r,o=1/0;for(;e;)e._call?(o>e._time&&(o=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:r=n);i=t,m(o)}(),c=0}}function w(){var t=f.now(),n=t-l;n>s&&(h-=n,l=t)}function m(t){o||(a&&(a=clearTimeout(a)),t-c>24?(t<1/0&&(a=setTimeout(g,t-f.now()-h)),u&&(u=clearInterval(u))):(u||(l=f.now(),u=setInterval(w,s)),o=1,p(g)))}v.prototype=_.prototype={constructor:v,restart:function(t,n,e){if("function"!==typeof t)throw new TypeError("callback is not a function");e=(null==e?d():+e)+(null==n?0:+n),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=e,m()},stop:function(){this._call&&(this._call=null,this._time=1/0,m())}}},3546:(t,n,e)=>{function r(){}function i(t){return null==t?r:function(){return this.querySelector(t)}}function o(){return[]}function a(t){return null==t?o:function(){return this.querySelectorAll(t)}}function u(t){return function(){return null==(n=t.apply(this,arguments))?[]:Array.isArray(n)?n:Array.from(n);var n}}function s(t){return function(){return this.matches(t)}}function l(t){return function(n){return n.matches(t)}}var c=Array.prototype.find;function h(){return this.firstElementChild}var f=Array.prototype.filter;function p(){return Array.from(this.children)}function d(t){return new Array(t.length)}function y(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function v(t,n,e,r,i,o){for(var a,u=0,s=n.length,l=o.length;u<l;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new y(t,o[u]);for(;u<s;++u)(a=n[u])&&(i[u]=a)}function _(t,n,e,r,i,o,a){var u,s,l,c=new Map,h=n.length,f=o.length,p=new Array(h);for(u=0;u<h;++u)(s=n[u])&&(p[u]=l=a.call(s,s.__data__,u,n)+"",c.has(l)?i[u]=s:c.set(l,s));for(u=0;u<f;++u)l=a.call(t,o[u],u,o)+"",(s=c.get(l))?(r[u]=s,s.__data__=o[u],c.delete(l)):e[u]=new y(t,o[u]);for(u=0;u<h;++u)(s=n[u])&&c.get(p[u])===s&&(i[u]=s)}function g(t){return t.__data__}function w(t){return"object"===typeof t&&"length"in t?t:Array.from(t)}function m(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}y.prototype={constructor:y,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var b="http://www.w3.org/1999/xhtml";const x={svg:"http://www.w3.org/2000/svg",xhtml:b,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function A(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),x.hasOwnProperty(n)?{space:x[n],local:t}:t}function k(t){return function(){this.removeAttribute(t)}}function N(t){return function(){this.removeAttributeNS(t.space,t.local)}}function E(t,n){return function(){this.setAttribute(t,n)}}function M(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function S(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function C(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function q(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function O(t){return function(){this.style.removeProperty(t)}}function P(t,n,e){return function(){this.style.setProperty(t,n,e)}}function T(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function H(t,n){return t.style.getPropertyValue(n)||q(t).getComputedStyle(t,null).getPropertyValue(n)}function X(t){return function(){delete this[t]}}function R(t,n){return function(){this[t]=n}}function I(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function j(t){return t.trim().split(/^|\s+/)}function L(t){return t.classList||new B(t)}function B(t){this._node=t,this._names=j(t.getAttribute("class")||"")}function D(t,n){for(var e=L(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Y(t,n){for(var e=L(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function z(t){return function(){D(this,t)}}function $(t){return function(){Y(this,t)}}function V(t,n){return function(){(n.apply(this,arguments)?D:Y)(this,t)}}function U(){this.textContent=""}function F(t){return function(){this.textContent=t}}function Z(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function K(){this.innerHTML=""}function W(t){return function(){this.innerHTML=t}}function G(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function J(){this.nextSibling&&this.parentNode.appendChild(this)}function Q(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function tt(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===b&&n.documentElement.namespaceURI===b?n.createElement(t):n.createElementNS(e,t)}}function nt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function et(t){var n=A(t);return(n.local?nt:tt)(n)}function rt(){return null}function it(){var t=this.parentNode;t&&t.removeChild(this)}function ot(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function at(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function ut(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function st(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function lt(t,n,e){var r=q(t),i=r.CustomEvent;"function"===typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ct(t,n){return function(){return lt(this,t,n)}}function ht(t,n){return function(){return lt(this,t,n.apply(this,arguments))}}B.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var ft=[null];function pt(t,n){this._groups=t,this._parents=n}function dt(){return new pt([[document.documentElement]],ft)}pt.prototype=dt.prototype={constructor:pt,select:function(t){"function"!==typeof t&&(t=i(t));for(var n=this._groups,e=n.length,r=new Array(e),o=0;o<e;++o)for(var a,u,s=n[o],l=s.length,c=r[o]=new Array(l),h=0;h<l;++h)(a=s[h])&&(u=t.call(a,a.__data__,h,s))&&("__data__"in a&&(u.__data__=a.__data__),c[h]=u);return new pt(r,this._parents)},selectAll:function(t){t="function"===typeof t?u(t):a(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var s,l=n[o],c=l.length,h=0;h<c;++h)(s=l[h])&&(r.push(t.call(s,s.__data__,h,l)),i.push(s));return new pt(r,i)},selectChild:function(t){return this.select(null==t?h:function(t){return function(){return c.call(this.children,t)}}("function"===typeof t?t:l(t)))},selectChildren:function(t){return this.selectAll(null==t?p:function(t){return function(){return f.call(this.children,t)}}("function"===typeof t?t:l(t)))},filter:function(t){"function"!==typeof t&&(t=s(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,l=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&l.push(o);return new pt(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,g);var e,r=n?_:v,i=this._parents,o=this._groups;"function"!==typeof t&&(e=t,t=function(){return e});for(var a=o.length,u=new Array(a),s=new Array(a),l=new Array(a),c=0;c<a;++c){var h=i[c],f=o[c],p=f.length,d=w(t.call(h,h&&h.__data__,c,i)),y=d.length,m=s[c]=new Array(y),b=u[c]=new Array(y);r(h,f,m,b,l[c]=new Array(p),d,n);for(var x,A,k=0,N=0;k<y;++k)if(x=m[k]){for(k>=N&&(N=k+1);!(A=b[N])&&++N<y;);x._next=A||null}}return(u=new pt(u,i))._enter=s,u._exit=l,u},enter:function(){return new pt(this._enter||this._groups.map(d),this._parents)},exit:function(){return new pt(this._exit||this._groups.map(d),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"===typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,a=Math.min(i,o),u=new Array(i),s=0;s<a;++s)for(var l,c=e[s],h=r[s],f=c.length,p=u[s]=new Array(f),d=0;d<f;++d)(l=c[d]||h[d])&&(p[d]=l);for(;s<i;++s)u[s]=e[s];return new pt(u,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=m);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],s=u.length,l=i[o]=new Array(s),c=0;c<s;++c)(a=u[c])&&(l[c]=a);l.sort(n)}return new pt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=A(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?N:k:"function"===typeof n?e.local?C:S:e.local?M:E)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?O:"function"===typeof n?T:P)(t,n,null==e?"":e)):H(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?X:"function"===typeof n?I:R)(t,n)):this.node()[t]},classed:function(t,n){var e=j(t+"");if(arguments.length<2){for(var r=L(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"===typeof n?V:n?z:$)(e,n))},text:function(t){return arguments.length?this.each(null==t?U:("function"===typeof t?Z:F)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?K:("function"===typeof t?G:W)(t)):this.node().innerHTML},raise:function(){return this.each(J)},lower:function(){return this.each(Q)},append:function(t){var n="function"===typeof t?t:et(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"===typeof t?t:et(t),r=null==n?rt:"function"===typeof n?n:i(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(it)},clone:function(t){return this.select(t?at:ot)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?st:ut,r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var s,l=0,c=u.length;l<c;++l)for(r=0,s=u[l];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"===typeof n?ht:ct)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};const yt=dt;var vt=e(6383),_t=e(5531);function gt(t,n,e){var r=new _t.B7;return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}var wt=(0,vt.Z)("start","end","cancel","interrupt"),mt=[],bt=0,xt=1,At=2,kt=3,Nt=4,Et=5,Mt=6;function St(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(t){e.state=xt,e.timer.restart(a,e.delay,e.time),e.delay<=t&&a(t-e.delay)}function a(o){var l,c,h,f;if(e.state!==xt)return s();for(l in i)if((f=i[l]).name===e.name){if(f.state===kt)return gt(a);f.state===Nt?(f.state=Mt,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[l]):+l<n&&(f.state=Mt,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[l])}if(gt((function(){e.state===kt&&(e.state=Nt,e.timer.restart(u,e.delay,e.time),u(o))})),e.state=At,e.on.call("start",t,t.__data__,e.index,e.group),e.state===At){for(e.state=kt,r=new Array(h=e.tween.length),l=0,c=-1;l<h;++l)(f=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(r[++c]=f);r.length=c+1}}function u(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(s),e.state=Et,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);e.state===Et&&(e.on.call("end",t,t.__data__,e.index,e.group),s())}function s(){for(var r in e.state=Mt,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=(0,_t.HT)(o,0,e.time)}(t,e,{name:n,index:r,group:i,on:wt,tween:mt,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:bt})}function Ct(t,n){var e=Ot(t,n);if(e.state>bt)throw new Error("too late; already scheduled");return e}function qt(t,n){var e=Ot(t,n);if(e.state>kt)throw new Error("too late; already running");return e}function Ot(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Pt(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var Tt,Ht=180/Math.PI,Xt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Rt(t,n,e,r,i,o){var a,u,s;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Ht,skewX:Math.atan(s)*Ht,scaleX:a,scaleY:u}}function It(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],s=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var s=a.push("translate(",null,n,null,e);u.push({i:s-4,x:Pt(t,i)},{i:s-2,x:Pt(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,s),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:Pt(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,s),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:Pt(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,s),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:Pt(t,e)},{i:u-2,x:Pt(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,s),o=a=null,function(t){for(var n,e=-1,r=s.length;++e<r;)u[(n=s[e]).i]=n.x(t);return u.join("")}}}var jt=It((function(t){const n=new("function"===typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Xt:Rt(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),Lt=It((function(t){return null==t?Xt:(Tt||(Tt=document.createElementNS("http://www.w3.org/2000/svg","g")),Tt.setAttribute("transform",t),(t=Tt.transform.baseVal.consolidate())?Rt((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Xt)}),", ",")",")");function Bt(t,n){var e,r;return function(){var i=qt(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}function Dt(t,n,e){var r,i;if("function"!==typeof e)throw new Error;return function(){var o=qt(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=u;break}s===l&&i.push(u)}o.tween=i}}function Yt(t,n,e){var r=t._id;return t.each((function(){var t=qt(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return Ot(t,r).value[n]}}function zt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function $t(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Vt(){}var Ut=.7,Ft=1/Ut,Zt="\\s*([+-]?\\d+)\\s*",Kt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Wt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Gt=/^#([0-9a-f]{3,8})$/,Jt=new RegExp("^rgb\\(".concat(Zt,",").concat(Zt,",").concat(Zt,"\\)$")),Qt=new RegExp("^rgb\\(".concat(Wt,",").concat(Wt,",").concat(Wt,"\\)$")),tn=new RegExp("^rgba\\(".concat(Zt,",").concat(Zt,",").concat(Zt,",").concat(Kt,"\\)$")),nn=new RegExp("^rgba\\(".concat(Wt,",").concat(Wt,",").concat(Wt,",").concat(Kt,"\\)$")),en=new RegExp("^hsl\\(".concat(Kt,",").concat(Wt,",").concat(Wt,"\\)$")),rn=new RegExp("^hsla\\(".concat(Kt,",").concat(Wt,",").concat(Wt,",").concat(Kt,"\\)$")),on={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function an(){return this.rgb().formatHex()}function un(){return this.rgb().formatRgb()}function sn(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=Gt.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?ln(n):3===e?new fn(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?cn(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?cn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=Jt.exec(t))?new fn(n[1],n[2],n[3],1):(n=Qt.exec(t))?new fn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=tn.exec(t))?cn(n[1],n[2],n[3],n[4]):(n=nn.exec(t))?cn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=en.exec(t))?gn(n[1],n[2]/100,n[3]/100,1):(n=rn.exec(t))?gn(n[1],n[2]/100,n[3]/100,n[4]):on.hasOwnProperty(t)?ln(on[t]):"transparent"===t?new fn(NaN,NaN,NaN,0):null}function ln(t){return new fn(t>>16&255,t>>8&255,255&t,1)}function cn(t,n,e,r){return r<=0&&(t=n=e=NaN),new fn(t,n,e,r)}function hn(t,n,e,r){return 1===arguments.length?((i=t)instanceof Vt||(i=sn(i)),i?new fn((i=i.rgb()).r,i.g,i.b,i.opacity):new fn):new fn(t,n,e,null==r?1:r);var i}function fn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function pn(){return"#".concat(_n(this.r)).concat(_n(this.g)).concat(_n(this.b))}function dn(){const t=yn(this.opacity);return"".concat(1===t?"rgb(":"rgba(").concat(vn(this.r),", ").concat(vn(this.g),", ").concat(vn(this.b)).concat(1===t?")":", ".concat(t,")"))}function yn(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function vn(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function _n(t){return((t=vn(t))<16?"0":"")+t.toString(16)}function gn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new mn(t,n,e,r)}function wn(t){if(t instanceof mn)return new mn(t.h,t.s,t.l,t.opacity);if(t instanceof Vt||(t=sn(t)),!t)return new mn;if(t instanceof mn)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new mn(a,u,s,t.opacity)}function mn(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function bn(t){return(t=(t||0)%360)<0?t+360:t}function xn(t){return Math.max(0,Math.min(1,t||0))}function An(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function kn(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}zt(Vt,sn,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:an,formatHex:an,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return wn(this).formatHsl()},formatRgb:un,toString:un}),zt(fn,hn,$t(Vt,{brighter(t){return t=null==t?Ft:Math.pow(Ft,t),new fn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?Ut:Math.pow(Ut,t),new fn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new fn(vn(this.r),vn(this.g),vn(this.b),yn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:pn,formatHex:pn,formatHex8:function(){return"#".concat(_n(this.r)).concat(_n(this.g)).concat(_n(this.b)).concat(_n(255*(isNaN(this.opacity)?1:this.opacity)))},formatRgb:dn,toString:dn})),zt(mn,(function(t,n,e,r){return 1===arguments.length?wn(t):new mn(t,n,e,null==r?1:r)}),$t(Vt,{brighter(t){return t=null==t?Ft:Math.pow(Ft,t),new mn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?Ut:Math.pow(Ut,t),new mn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new fn(An(t>=240?t-240:t+120,i,r),An(t,i,r),An(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new mn(bn(this.h),xn(this.s),xn(this.l),yn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=yn(this.opacity);return"".concat(1===t?"hsl(":"hsla(").concat(bn(this.h),", ").concat(100*xn(this.s),"%, ").concat(100*xn(this.l),"%").concat(1===t?")":", ".concat(t,")"))}}));const Nn=t=>()=>t;function En(t,n){return function(e){return t+e*n}}function Mn(t){return 1===(t=+t)?Sn:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):Nn(isNaN(n)?e:n)}}function Sn(t,n){var e=n-t;return e?En(t,e):Nn(isNaN(t)?n:t)}const Cn=function t(n){var e=Mn(n);function r(t,n){var r=e((t=hn(t)).r,(n=hn(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=Sn(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function qn(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=hn(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}qn((function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return kn((e-r/n)*n,a,i,o,u)}})),qn((function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return kn((e-r/n)*n,i,o,a,u)}}));var On=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Pn=new RegExp(On.source,"g");function Tn(t,n){var e,r,i,o=On.lastIndex=Pn.lastIndex=0,a=-1,u=[],s=[];for(t+="",n+="";(e=On.exec(t))&&(r=Pn.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,s.push({i:a,x:Pt(e,r)})),o=Pn.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)u[(e=s[r]).i]=e.x(t);return u.join("")})}function Hn(t,n){var e;return("number"===typeof n?Pt:n instanceof sn?Cn:(e=sn(n))?(n=e,Cn):Tn)(t,n)}function Xn(t){return function(){this.removeAttribute(t)}}function Rn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function In(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}}function jn(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}function Ln(t,n,e){var r,i,o;return function(){var a,u,s=e(this);if(null!=s)return(a=this.getAttribute(t))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s));this.removeAttribute(t)}}function Bn(t,n,e){var r,i,o;return function(){var a,u,s=e(this);if(null!=s)return(a=this.getAttributeNS(t.space,t.local))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s));this.removeAttributeNS(t.space,t.local)}}function Dn(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,i)),e}return i._value=n,i}function Yn(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,i)),e}return i._value=n,i}function zn(t,n){return function(){Ct(this,t).delay=+n.apply(this,arguments)}}function $n(t,n){return n=+n,function(){Ct(this,t).delay=n}}function Vn(t,n){return function(){qt(this,t).duration=+n.apply(this,arguments)}}function Un(t,n){return n=+n,function(){qt(this,t).duration=n}}var Fn=yt.prototype.constructor;function Zn(t){return function(){this.style.removeProperty(t)}}var Kn=0;function Wn(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Gn(){return++Kn}var Jn=yt.prototype;Wn.prototype=function(t){return yt().transition(t)}.prototype={constructor:Wn,select:function(t){var n=this._name,e=this._id;"function"!==typeof t&&(t=i(t));for(var r=this._groups,o=r.length,a=new Array(o),u=0;u<o;++u)for(var s,l,c=r[u],h=c.length,f=a[u]=new Array(h),p=0;p<h;++p)(s=c[p])&&(l=t.call(s,s.__data__,p,c))&&("__data__"in s&&(l.__data__=s.__data__),f[p]=l,St(f[p],n,e,p,f,Ot(s,e)));return new Wn(a,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!==typeof t&&(t=a(t));for(var r=this._groups,i=r.length,o=[],u=[],s=0;s<i;++s)for(var l,c=r[s],h=c.length,f=0;f<h;++f)if(l=c[f]){for(var p,d=t.call(l,l.__data__,f,c),y=Ot(l,e),v=0,_=d.length;v<_;++v)(p=d[v])&&St(p,n,e,v,d,y);o.push(d),u.push(l)}return new Wn(o,u,n,e)},selectChild:Jn.selectChild,selectChildren:Jn.selectChildren,filter:function(t){"function"!==typeof t&&(t=s(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,l=r[i]=[],c=0;c<u;++c)(o=a[c])&&t.call(o,o.__data__,c,a)&&l.push(o);return new Wn(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,l=n[u],c=e[u],h=l.length,f=a[u]=new Array(h),p=0;p<h;++p)(s=l[p]||c[p])&&(f[p]=s);for(;u<r;++u)a[u]=n[u];return new Wn(a,this._parents,this._name,this._id)},selection:function(){return new Fn(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Gn(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)if(a=u[l]){var c=Ot(a,n);St(a,t,e,l,u,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Wn(r,this._parents,t,e)},call:Jn.call,nodes:Jn.nodes,node:Jn.node,size:Jn.size,empty:Jn.empty,each:Jn.each,on:function(t,n){var e=this._id;return arguments.length<2?Ot(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?Ct:qt;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=A(t),r="transform"===e?Lt:Hn;return this.attrTween(t,"function"===typeof n?(e.local?Bn:Ln)(e,r,Yt(this,"attr."+t,n)):null==n?(e.local?Rn:Xn)(e):(e.local?jn:In)(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!==typeof n)throw new Error;var r=A(t);return this.tween(e,(r.local?Dn:Yn)(r,n))},style:function(t,n,e){var r="transform"===(t+="")?jt:Hn;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=H(this,t),a=(this.style.removeProperty(t),H(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,Zn(t)):"function"===typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var a=H(this,t),u=e(this),s=u+"";return null==u&&(this.style.removeProperty(t),s=u=H(this,t)),a===s?null:a===r&&s===i?o:(i=s,o=n(r=a,u))}}(t,r,Yt(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var s=qt(this,t),l=s.on,c=null==s.value[a]?o||(o=Zn(n)):void 0;l===e&&i===c||(r=(e=l).copy()).on(u,i=c),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var a=H(this,t);return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!==typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"===typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(Yt(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!==typeof t)throw new Error;return this.tween(n,function(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&function(t){return function(n){this.textContent=t.call(this,n)}}(r)),n}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Ot(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?Bt:Dt)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"===typeof t?zn:$n)(n,t)):Ot(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"===typeof t?Vn:Un)(n,t)):Ot(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!==typeof n)throw new Error;return function(){qt(this,t).ease=n}}(n,t)):Ot(this.node(),n).ease},easeVarying:function(t){if("function"!==typeof t)throw new Error;return this.each(function(t,n){return function(){var e=n.apply(this,arguments);if("function"!==typeof e)throw new Error;qt(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise((function(o,a){var u={value:a},s={value:function(){0===--i&&o()}};e.each((function(){var e=qt(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:Jn[Symbol.iterator]};var Qn={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function te(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error("transition ".concat(n," not found"));return e}yt.prototype.interrupt=function(t){return this.each((function(){!function(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>At&&e.state<Et,e.state=Mt,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}(this,t)}))},yt.prototype.transition=function(t){var n,e;t instanceof Wn?(n=t._id,t=t._name):(n=Gn(),(e=Qn).time=(0,_t.zO)(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)(a=u[l])&&St(a,t,n,l,u,e||te(a,n));return new Wn(r,this._parents,t,n)}}}]);
//# sourceMappingURL=546.a11ca407.chunk.js.map