(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4184:function(e,n){var t;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)&&t.length){var l=r.apply(null,t);l&&e.push(l)}else if("object"===i)for(var a in t)o.call(t,a)&&t[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},3454:function(e,n,t){"use strict";var o,r;e.exports=(null===(o=t.g.process)||void 0===o?void 0:o.env)&&"object"===typeof(null===(r=t.g.process)||void 0===r?void 0:r.env)?t.g.process:t(7663)},7663:function(e){!function(){var n={162:function(e){var n,t,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(o){try{return n.call(null,e,0)}catch(o){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:r}catch(e){n=r}try{t="function"===typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var a,u=[],c=!1,s=-1;function d(){c&&a&&(c=!1,a.length?u=a.concat(u):s=-1,u.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var n=u.length;n;){for(a=u,u=[];++s<n;)a&&a[s].run();s=-1,n=u.length}a=null,c=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function v(e,n){this.fun=e,this.array=n}function m(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new v(e,n)),1!==u.length||c||l(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}},l=!0;try{n[e](i,i.exports,o),l=!1}finally{l&&delete t[e]}return i.exports}o.ab="//";var r=o(162);e.exports=r}()},1190:function(e,n,t){"use strict";t.d(n,{u:function(){return D}});var o=t(7294),r=t(3935),i=t(4184),l=t.n(i);var a=!1;if("undefined"!==typeof window){var u={get passive(){a=!0}};window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}var c="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],d=!1,f=-1,v=void 0,m=void 0,p=function(e){return s.some((function(n){return!(!n.options.allowTouchMove||!n.options.allowTouchMove(e))}))},y=function(e){var n=e||window.event;return!!p(n.target)||(n.touches.length>1||(n.preventDefault&&n.preventDefault(),!1))},h=function(){void 0!==m&&(document.body.style.paddingRight=m,m=void 0),void 0!==v&&(document.body.style.overflow=v,v=void 0)},g=function(e,n){if(e){if(!s.some((function(n){return n.targetElement===e}))){var t={targetElement:e,options:n||{}};s=[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(s),[t]),c?(e.ontouchstart=function(e){1===e.targetTouches.length&&(f=e.targetTouches[0].clientY)},e.ontouchmove=function(n){1===n.targetTouches.length&&function(e,n){var t=e.targetTouches[0].clientY-f;!p(e.target)&&(n&&0===n.scrollTop&&t>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(n)&&t<0?y(e):e.stopPropagation())}(n,e)},d||(document.addEventListener("touchmove",y,a?{passive:!1}:void 0),d=!0)):function(e){if(void 0===m){var n=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;n&&t>0&&(m=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===v&&(v=document.body.style.overflow,document.body.style.overflow="hidden")}(n)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")};function w(e){var n=function(e){void 0===e&&(e=null);var n=o.useState(e),t=n[0],r=n[1],i=o.useRef({current:t}).current;return Object.defineProperty(i,"current",{get:function(){return t},set:function(e){Object.is(t,e)||(t=e,r(e))}}),i}(null);return o.useEffect((function(){e&&("function"==typeof e?e(n.current):e.current=n.current)})),n}t(3454);function b(){return b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},b.apply(this,arguments)}var E=function(e){var n=e.classes,t=e.classNames,r=e.styles,i=e.id,a=e.closeIcon,u=e.onClick;return o.createElement("button",{id:i,className:l()(n.closeButton,null==t?void 0:t.closeButton),style:null==r?void 0:r.closeButton,onClick:u,"data-testid":"close-button"},a||o.createElement("svg",{className:null==t?void 0:t.closeIcon,style:null==r?void 0:r.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},o.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},T="undefined"!==typeof window,A=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function C(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}function I(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!0;var n=(e.form||e.ownerDocument).querySelectorAll('input[type="radio"][name="'+e.name+'"]'),t=function(e,n){for(var t=0;t<e.length;t++)if(e[t].checked&&e[t].form===n)return e[t]}(n,e.form);return t===e||void 0===t&&n[0]===e}function k(e){for(var n=document.activeElement,t=e.querySelectorAll(A.join(",")),o=[],r=0;r<t.length;r++){var i=t[r];(n===i||!i.disabled&&x(i)>-1&&!C(i)&&I(i))&&o.push(i)}return o}function x(e){var n=parseInt(e.getAttribute("tabindex"),10);return isNaN(n)?function(e){return e.getAttribute("contentEditable")}(e)?0:e.tabIndex:n}var O=function(e){var n=e.container,t=e.initialFocusRef,r=(0,o.useRef)();return(0,o.useEffect)((function(){var e=function(e){(null==n?void 0:n.current)&&function(e,n){if(e&&"Tab"===e.key){if(!n||!n.contains)return!1;if(!n.contains(e.target))return!1;var t=k(n),o=t[0],r=t[t.length-1];e.shiftKey&&e.target===o?(r.focus(),e.preventDefault()):!e.shiftKey&&e.target===r&&(o.focus(),e.preventDefault())}}(e,n.current)};if(T&&document.addEventListener("keydown",e),T&&(null==n?void 0:n.current)){var o=function(){-1!==A.findIndex((function(e){var n;return null==(n=document.activeElement)?void 0:n.matches(e)}))&&(r.current=document.activeElement)};if(t)o(),requestAnimationFrame((function(){var e;null==(e=t.current)||e.focus()}));else{var i=k(n.current);i[0]&&(o(),i[0].focus())}}return function(){var n;T&&(document.removeEventListener("keydown",e),null==(n=r.current)||n.focus())}}),[n,t]),null},L=[],N=function(e){L.push(e)},S=function(e){L=L.filter((function(n){return n!==e}))},B=function(e){return!!L.length&&L[L.length-1]===e};var R=function(e,n,t,r,i){var l=(0,o.useRef)(null);(0,o.useEffect)((function(){return n&&e.current&&r&&(l.current=e.current,g(e.current,{reserveScrollBarGap:i})),function(){var e;l.current&&((e=l.current)?(s=s.filter((function(n){return n.targetElement!==e})),c?(e.ontouchstart=null,e.ontouchmove=null,d&&0===s.length&&(document.removeEventListener("touchmove",y,a?{passive:!1}:void 0),d=!1)):s.length||h()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."),l.current=null)}}),[n,t,e,r,i])},P={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},D=o.forwardRef((function(e,n){var t,i,a,u,c=e.open,s=e.center,d=e.blockScroll,f=void 0===d||d,v=e.closeOnEsc,m=void 0===v||v,p=e.closeOnOverlayClick,y=void 0===p||p,h=e.container,g=e.showCloseIcon,A=void 0===g||g,C=e.closeIconId,I=e.closeIcon,k=e.focusTrapped,x=void 0===k||k,L=e.initialFocusRef,D=void 0===L?void 0:L,j=e.animationDuration,M=void 0===j?300:j,F=e.classNames,_=e.styles,q=e.role,G=void 0===q?"dialog":q,K=e.ariaDescribedby,H=e.ariaLabelledby,U=e.modalId,W=e.onClose,Y=e.onEscKeyDown,z=e.onOverlayClick,J=e.onAnimationEnd,Q=e.children,V=e.reserveScrollBarGap,X=w(n),Z=(0,o.useRef)(null),$=(0,o.useRef)(null),ee=(0,o.useRef)(null);null===ee.current&&T&&(ee.current=document.createElement("div"));var ne=(0,o.useState)(!1),te=ne[0],oe=ne[1];!function(e,n){(0,o.useEffect)((function(){return n&&N(e),function(){S(e)}}),[n,e])}(Z,c),R(Z,c,te,f,V);var re=function(e){27===e.keyCode&&B(Z)&&(null==Y||Y(e),m&&W())};(0,o.useEffect)((function(){return function(){te&&(ee.current&&!h&&document.body.contains(ee.current)&&document.body.removeChild(ee.current),document.removeEventListener("keydown",re))}}),[te]),(0,o.useEffect)((function(){c&&!te&&(oe(!0),!ee.current||h||document.body.contains(ee.current)||document.body.appendChild(ee.current),document.addEventListener("keydown",re))}),[c]);var ie=function(){$.current=!1},le=h||ee.current,ae=c?null!=(t=null==F?void 0:F.overlayAnimationIn)?t:P.overlayAnimationIn:null!=(i=null==F?void 0:F.overlayAnimationOut)?i:P.overlayAnimationOut,ue=c?null!=(a=null==F?void 0:F.modalAnimationIn)?a:P.modalAnimationIn:null!=(u=null==F?void 0:F.modalAnimationOut)?u:P.modalAnimationOut;return te&&le?r.createPortal(o.createElement("div",{className:l()(P.root,null==F?void 0:F.root),style:null==_?void 0:_.root,"data-testid":"root"},o.createElement("div",{className:l()(P.overlay,null==F?void 0:F.overlay),"data-testid":"overlay","aria-hidden":!0,style:b({animation:ae+" "+M+"ms"},null==_?void 0:_.overlay)}),o.createElement("div",{ref:Z,className:l()(P.modalContainer,s&&P.modalContainerCenter,null==F?void 0:F.modalContainer),style:null==_?void 0:_.modalContainer,"data-testid":"modal-container",onClick:function(e){null===$.current&&($.current=!0),$.current?(null==z||z(e),y&&W(),$.current=null):$.current=null}},o.createElement("div",{ref:X,className:l()(P.modal,null==F?void 0:F.modal),style:b({animation:ue+" "+M+"ms"},null==_?void 0:_.modal),onMouseDown:ie,onMouseUp:ie,onClick:ie,onAnimationEnd:function(){c||oe(!1),null==J||J()},id:U,role:G,"aria-modal":"true","aria-labelledby":H,"aria-describedby":K,"data-testid":"modal",tabIndex:-1},x&&o.createElement(O,{container:X,initialFocusRef:D}),Q,A&&o.createElement(E,{classes:P,classNames:F,styles:_,closeIcon:I,onClick:W,id:C})))),le):null}))}}]);