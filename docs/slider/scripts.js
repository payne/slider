/*! =======================================================
                      VERSION  10.6.2              
========================================================= */
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},windowIsDefined="object"===("undefined"==typeof window?"undefined":_typeof(window));!function(a){if("function"==typeof define&&define.amd)define(["jquery"],a);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var b;try{b=require("jquery")}catch(c){b=null}module.exports=a(b)}else window&&(window.Slider=a(window.jQuery))}(function(a){var b="slider",c="bootstrapSlider";windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){});var d;return function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return 1===m.length?m[0]:m}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function e(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1,tickIndex:null},this.ticksCallbackMap={},this.handleCallbackMap={},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var e=Object.keys(this.defaultOptions),f=c.hasOwnProperty("min"),g=c.hasOwnProperty("max"),i=0;i<e.length;i++){var j=e[i],k=c[j];k="undefined"!=typeof k?k:d(this.element,j),k=null!==k?k:this.defaultOptions[j],this.options||(this.options={}),this.options[j]=k}if(this.ticksAreValid=Array.isArray(this.options.ticks)&&this.options.ticks.length>0,this.ticksAreValid||(this.options.lock_to_ticks=!1),"auto"===this.options.rtl){var l=window.getComputedStyle(this.element);null!=l?this.options.rtl="rtl"===l.direction:this.options.rtl="rtl"===this.element.style.direction}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.rtl?this.options.tooltip_position="left":this.options.tooltip_position="right";var m,n,o,p,q,r=this.element.style.width,s=!1,t=this.element.parentNode;if(this.sliderElem)s=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var u=document.createElement("div");u.className="slider-track",n=document.createElement("div"),n.className="slider-track-low",m=document.createElement("div"),m.className="slider-selection",o=document.createElement("div"),o.className="slider-track-high",p=document.createElement("div"),p.className="slider-handle min-slider-handle",p.setAttribute("role","slider"),p.setAttribute("aria-valuemin",this.options.min),p.setAttribute("aria-valuemax",this.options.max),q=document.createElement("div"),q.className="slider-handle max-slider-handle",q.setAttribute("role","slider"),q.setAttribute("aria-valuemin",this.options.min),q.setAttribute("aria-valuemax",this.options.max),u.appendChild(n),u.appendChild(m),u.appendChild(o),this.rangeHighlightElements=[];var v=this.options.rangeHighlights;if(Array.isArray(v)&&v.length>0)for(var w=0;w<v.length;w++){var x=document.createElement("div"),y=v[w]["class"]||"";x.className="slider-rangeHighlight slider-selection "+y,this.rangeHighlightElements.push(x),u.appendChild(x)}var z=Array.isArray(this.options.labelledby);if(z&&this.options.labelledby[0]&&p.setAttribute("aria-labelledby",this.options.labelledby[0]),z&&this.options.labelledby[1]&&q.setAttribute("aria-labelledby",this.options.labelledby[1]),!z&&this.options.labelledby&&(p.setAttribute("aria-labelledby",this.options.labelledby),q.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",i=0;i<this.options.ticks.length;i++){var A=document.createElement("div");if(A.className="slider-tick",this.options.ticks_tooltip){var B=this._addTickListener(),C=B.addMouseEnter(this,A,i),D=B.addMouseLeave(this,A);this.ticksCallbackMap[i]={mouseEnter:C,mouseLeave:D}}this.ticks.push(A),this.ticksContainer.appendChild(A)}m.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",i=0;i<this.options.ticks_labels.length;i++){var E=document.createElement("div"),F=0===this.options.ticks_positions.length,G=this.options.reversed&&F?this.options.ticks_labels.length-(i+1):i;E.className="slider-tick-label",E.innerHTML=this.options.ticks_labels[G],this.tickLabels.push(E),this.tickLabelContainer.appendChild(E)}var H=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},I=document.createElement("div");I.className="tooltip tooltip-main",I.setAttribute("role","presentation"),H(I);var J=document.createElement("div");J.className="tooltip tooltip-min",J.setAttribute("role","presentation"),H(J);var K=document.createElement("div");K.className="tooltip tooltip-max",K.setAttribute("role","presentation"),H(K),this.sliderElem.appendChild(u),this.sliderElem.appendChild(I),this.sliderElem.appendChild(J),this.sliderElem.appendChild(K),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(p),this.sliderElem.appendChild(q),t.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),h[this.options.scale]&&(this.options.scale=h[this.options.scale]),s===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.sliderElem,"slider-rtl"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","right","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"right"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"right"),this._removeProperty(a,"top"),this._removeClass(a,"right"),this._removeClass(a,"left"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=r,this.options.orientation="horizontal",this.options.rtl?this.stylePos="right":this.stylePos="left",this.mousePos="clientX",this.sizePos="offsetWidth"),this.options.rtl&&this._addClass(this.sliderElem,"slider-rtl"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(g||(this.options.max=Math.max.apply(Math,this.options.ticks)),f||(this.options.min=Math.min.apply(Math,this.options.ticks))),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=n||this.trackLow,this.trackSelection=m||this.trackSelection,this.trackHigh=o||this.trackHigh,"none"===this.options.selection?(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")):("after"===this.options.selection||"before"===this.options.selection)&&(this._removeClass(this.trackLow,"hide"),this._removeClass(this.trackSelection,"hide"),this._removeClass(this.trackHigh,"hide")),this.handle1=p||this.handle1,this.handle2=q||this.handle2,s===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),i=0;i<this.ticks.length;i++)this._removeClass(this.ticks[i],"round triangle hide");var L=["round","triangle","custom"],M=-1!==L.indexOf(this.options.handle);if(M)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),i=0;i<this.ticks.length;i++)this._addClass(this.ticks[i],this.options.handle);if(this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.touchstart,!1),this.sliderElem.addEventListener("touchmove",this.touchmove,!1)),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip)this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide");else if("always"===this.options.tooltip)this._showTooltip(),this._alwaysShowTooltip=!0;else{if(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.options.ticks_tooltip){var N=this._addTickListener(),O=N.addMouseEnter(this,this.handle1),P=N.addMouseLeave(this,this.handle1);this.handleCallbackMap.handle1={mouseEnter:O,mouseLeave:P},O=N.addMouseEnter(this,this.handle2),P=N.addMouseLeave(this,this.handle2),this.handleCallbackMap.handle2={mouseEnter:O,mouseLeave:P}}else this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.showTooltip,!1),this.sliderElem.addEventListener("touchmove",this.showTooltip,!1),this.sliderElem.addEventListener("touchend",this.hideTooltip,!1));this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1),this.touchCapable&&(this.handle1.addEventListener("touchstart",this.showTooltip,!1),this.handle1.addEventListener("touchmove",this.showTooltip,!1),this.handle1.addEventListener("touchend",this.hideTooltip,!1),this.handle2.addEventListener("touchstart",this.showTooltip,!1),this.handle2.addEventListener("touchmove",this.showTooltip,!1),this.handle2.addEventListener("touchend",this.hideTooltip,!1))}this.options.enabled?this.enable():this.disable()}var f=void 0,g={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},h={linear:{getValue:function(a,b){return a<b.min?b.min:a>b.max?b.max:a},toValue:function(a){var b=a/100*(this.options.max-this.options.min),c=!0;if(this.options.ticks_positions.length>0){for(var d,e,f,g=0,i=1;i<this.options.ticks_positions.length;i++)if(a<=this.options.ticks_positions[i]){d=this.options.ticks[i-1],f=this.options.ticks_positions[i-1],e=this.options.ticks[i],g=this.options.ticks_positions[i];break}var j=(a-f)/(g-f);b=d+j*(e-d),c=!1}var k=c?this.options.min:0,l=k+Math.round(b/this.options.step)*this.options.step;return h.linear.getValue(l,this.options)},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=1-this.options.min,c=Math.log(this.options.min+b),d=Math.log(this.options.max+b),e=Math.exp(c+(d-c)*a/100)-b;return Math.round(e)===d?d:(e=this.options.min+Math.round((e-this.options.min)/this.options.step)*this.options.step,h.linear.getValue(e,this.options))},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=1-this.options.min,c=Math.log(this.options.max+b),d=Math.log(this.options.min+b),e=Math.log(a+b);return 100*(e-d)/(c-d)}}};d=function(a,b){return e.call(this,a,b),this},d.prototype={_init:function(){},constructor:d,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,lock_to_ticks:!1,handle:"round",reversed:!1,rtl:"auto",enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,ticks_tooltip:!1,scale:"linear",focus:!1,tooltip_position:null,labelledby:null,rangeHighlights:[]},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this.ticksAreValid&&this.options.lock_to_ticks&&(this._state.value[0]=this.options.ticks[this._getClosestTickIndex(this._state.value[0])],this._state.value[1]=this.options.ticks[this._getClosestTickIndex(this._state.value[1])]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this.ticksAreValid&&this.options.lock_to_ticks&&(this._state.value=this.options.ticks[this._getClosestTickIndex(this._state.value)]),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this._setTickIndex(),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];this._setDataVal(f),b===!0&&this._trigger("slide",f);var g=!1;return g=Array.isArray(f)?d[0]!==f[0]||d[1]!==f[1]:d!==f,g&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),f===b&&this.$element.removeData(f),this.$element.removeData(c))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(d){var g=this.getValue();return this._removeSliderEventHandlers(),e.call(this,this.element,this.options),d&&d.useCurrentValue===!0&&this.setValue(g),a&&(f===b?(a.data(this.element,b,this),a.data(this.element,c,this)):a.data(this.element,c,this)),this},relayout:function(){return this._resize(),this},_removeTooltipListener:function(a,b){this.handle1.removeEventListener(a,b,!1),this.handle2.removeEventListener(a,b,!1)},_removeSliderEventHandlers:function(){if(this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.options.ticks_tooltip){for(var a=this.ticksContainer.getElementsByClassName("slider-tick"),b=0;b<a.length;b++)a[b].removeEventListener("mouseenter",this.ticksCallbackMap[b].mouseEnter,!1),a[b].removeEventListener("mouseleave",this.ticksCallbackMap[b].mouseLeave,!1);this.handleCallbackMap.handle1&&this.handleCallbackMap.handle2&&(this.handle1.removeEventListener("mouseenter",this.handleCallbackMap.handle1.mouseEnter,!1),this.handle2.removeEventListener("mouseenter",this.handleCallbackMap.handle2.mouseEnter,!1),this.handle1.removeEventListener("mouseleave",this.handleCallbackMap.handle1.mouseLeave,!1),this.handle2.removeEventListener("mouseleave",this.handleCallbackMap.handle2.mouseLeave,!1))}this.handleCallbackMap=null,this.ticksCallbackMap=null,this.showTooltip&&this._removeTooltipListener("focus",this.showTooltip),this.hideTooltip&&this._removeTooltipListener("blur",this.hideTooltip),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),this.touchCapable&&(this.showTooltip&&(this.handle1.removeEventListener("touchstart",this.showTooltip,!1),this.handle1.removeEventListener("touchmove",this.showTooltip,!1),this.handle2.removeEventListener("touchstart",this.showTooltip,!1),this.handle2.removeEventListener("touchmove",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("touchend",this.hideTooltip,!1),this.handle2.removeEventListener("touchend",this.hideTooltip,!1)),this.showTooltip&&(this.sliderElem.removeEventListener("touchstart",this.showTooltip,!1),this.sliderElem.removeEventListener("touchmove",this.showTooltip,!1)),this.hideTooltip&&this.sliderElem.removeEventListener("touchend",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1)),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];delete this.eventToCallbackMap[c]}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this._alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_setToolTipOnMouseOver:function(a){function b(a,b){return b?[100-a.percentage[0],c.options.range?100-a.percentage[1]:a.percentage[1]]:[a.percentage[0],a.percentage[1]]}var c=this,d=this.options.formatter(a?a.value[0]:this._state.value[0]),e=a?b(a,this.options.reversed):b(this._state,this.options.reversed);this._setText(this.tooltipInner,d),this.tooltip.style[this.stylePos]=e[0]+"%"},_copyState:function(){return{value:[this._state.value[0],this._state.value[1]],enabled:this._state.enabled,offset:this._state.offset,size:this._state.size,percentage:[this._state.percentage[0],this._state.percentage[1],this._state.percentage[2]],inDrag:this._state.inDrag,over:this._state.over,dragged:this._state.dragged,keyCtrl:this._state.keyCtrl}},_addTickListener:function(){return{addMouseEnter:function(a,b,c){var d=function(){var d=a._copyState(),e=b===a.handle1?d.value[0]:d.value[1],f=void 0;void 0!==c?(e=a.options.ticks[c],f=a.options.ticks_positions.length>0&&a.options.ticks_positions[c]||a._toPercentage(a.options.ticks[c])):f=a._toPercentage(e),d.value[0]=e,d.percentage[0]=f,a._setToolTipOnMouseOver(d),a._showTooltip()};return b.addEventListener("mouseenter",d,!1),d},addMouseLeave:function(a,b){var c=function(){a._hideTooltip()};return b.addEventListener("mouseleave",c,!1),c}}},_layout:function(){var a,b;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),b=this.options.formatter(this._state.value[0]),isNaN(b)?this.handle1.setAttribute("aria-valuetext",b):this.handle1.removeAttribute("aria-valuetext"),this.handle2.style[this.stylePos]=a[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),b=this.options.formatter(this._state.value[1]),isNaN(b)?this.handle2.setAttribute("aria-valuetext",b):this.handle2.removeAttribute("aria-valuetext"),this.rangeHighlightElements.length>0&&Array.isArray(this.options.rangeHighlights)&&this.options.rangeHighlights.length>0)for(var c=0;c<this.options.rangeHighlights.length;c++){var d=this._toPercentage(this.options.rangeHighlights[c].start),e=this._toPercentage(this.options.rangeHighlights[c].end);if(this.options.reversed){var f=100-e;e=100-d,d=f}var g=this._createHighlightRange(d,e);g?"vertical"===this.options.orientation?(this.rangeHighlightElements[c].style.top=g.start+"%",this.rangeHighlightElements[c].style.height=g.size+"%"):(this.options.rtl?this.rangeHighlightElements[c].style.right=g.start+"%":this.rangeHighlightElements[c].style.left=g.start+"%",this.rangeHighlightElements[c].style.width=g.size+"%"):this.rangeHighlightElements[c].style.display="none"}if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var h,i="vertical"===this.options.orientation?"height":"width";h="vertical"===this.options.orientation?"marginTop":this.options.rtl?"marginRight":"marginLeft";var j=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var k=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[h]=-j/2+"px"),k=this.tickLabelContainer.offsetHeight;else for(l=0;l<this.tickLabelContainer.childNodes.length;l++)this.tickLabelContainer.childNodes[l].offsetHeight>k&&(k=this.tickLabelContainer.childNodes[l].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=k+"px")}for(var l=0;l<this.options.ticks.length;l++){var m=this.options.ticks_positions[l]||this._toPercentage(this.options.ticks[l]);this.options.reversed&&(m=100-m),this.ticks[l].style[this.stylePos]=m+"%",this._removeClass(this.ticks[l],"in-selection"),this.options.range?m>=a[0]&&m<=a[1]&&this._addClass(this.ticks[l],"in-selection"):"after"===this.options.selection&&m>=a[0]?this._addClass(this.ticks[l],"in-selection"):"before"===this.options.selection&&m<=a[0]&&this._addClass(this.ticks[l],"in-selection"),this.tickLabels[l]&&(this.tickLabels[l].style[i]=j+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[l]?(this.tickLabels[l].style.position="absolute",this.tickLabels[l].style[this.stylePos]=m+"%",this.tickLabels[l].style[h]=-j/2+"px"):"vertical"===this.options.orientation&&(this.options.rtl?this.tickLabels[l].style.marginRight=this.sliderElem.offsetWidth+"px":this.tickLabels[l].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style[h]=this.sliderElem.offsetWidth/2*-1+"px"),this._removeClass(this.tickLabels[l],"label-in-selection label-is-selection"),this.options.range?m>=a[0]&&m<=a[1]&&(this._addClass(this.tickLabels[l],"label-in-selection"),(m===a[0]||a[1])&&this._addClass(this.tickLabels[l],"label-is-selection")):("after"===this.options.selection&&m>=a[0]?this._addClass(this.tickLabels[l],"label-in-selection"):"before"===this.options.selection&&m<=a[0]&&this._addClass(this.tickLabels[l],"label-in-selection"),m===a[0]&&this._addClass(this.tickLabels[l],"label-is-selection")))}}var n;if(this.options.range){n=this.options.formatter(this._state.value),this._setText(this.tooltipInner,n),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%";var o=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,o);var p=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,p),this.tooltip_min.style[this.stylePos]=a[0]+"%",this.tooltip_max.style[this.stylePos]=a[1]+"%"}else n=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,n),this.tooltip.style[this.stylePos]=a[0]+"%";if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{"right"===this.stylePos?this.trackLow.style.right="0":this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%","right"===this.stylePos?this.trackSelection.style.right=Math.min(a[0],a[1])+"%":this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%","right"===this.stylePos?this.trackHigh.style.left="0":this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var q=this.tooltip_min.getBoundingClientRect(),r=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?q.right>r.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):q.right>r.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_createHighlightRange:function(a,b){return this._isHighlightRange(a,b)?a>b?{start:b,size:a-b}:{start:a,size:b-a}:null},_isHighlightRange:function(a,b){return a>=0&&100>=a&&b>=0&&100>=b?!0:!1},_resize:function(a){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;a.preventDefault&&a.preventDefault(),this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1,this._adjustPercentageForRangeSliders(b)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this.setValue(e,!1,!0),a.returnValue=!1,this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(a){this._mousedown(a)},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="horizontal"===this.options.orientation,e="vertical"===this.options.orientation,f=this.options.rtl,g=this.options.reversed;d?f?g||(c=-c):g&&(c=-c):e&&(g||(c=-c))}var h;if(this.ticksAreValid&&this.options.lock_to_ticks){var i=void 0;i=this.options.ticks.indexOf(this._state.value[a]),-1===i&&(i=0,window.console.warn("(lock_to_ticks) _keydown: index should not be -1")),i+=c,i=Math.max(0,Math.min(this.options.ticks.length-1,i)),h=this.options.ticks[i]}else h=this._state.value[a]+c*this.options.step;var j=this._toPercentage(h);if(this._state.keyCtrl=a,this.options.range){this._adjustPercentageForRangeSliders(j);var k=this._state.keyCtrl?this._state.value[0]:h,l=this._state.keyCtrl?h:this._state.value[1];h=[Math.max(this.options.min,Math.min(this.options.max,k)),Math.max(this.options.min,Math.min(this.options.max,l))]}else h=Math.max(this.options.min,Math.min(this.options.max,h));return this._trigger("slideStart",h),this.setValue(h,!0,!0),this._trigger("slideStop",h),this._pauseEvent(b),delete this._state.keyCtrl,!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;
var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b;var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_touchmove:function(a){void 0!==a.changedTouches&&a.preventDefault&&a.preventDefault()},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c?(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0):0===this._state.keyCtrl&&this._toPercentage(this._state.value[1])<a?(this._state.percentage[0]=this._state.percentage[1],this._state.keyCtrl=1,this.handle2.focus()):1===this._state.keyCtrl&&this._toPercentage(this._state.value[0])>a&&(this._state.percentage[1]=this._state.percentage[0],this._state.keyCtrl=0,this.handle1.focus())}},_mouseup:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var c=this._calculateValue(!0);return this.setValue(c,!1,!0),this._trigger("slideStop",c),this._state.dragged=null,!1},_setValues:function(a,b){var c=0===a?0:100;this._state.percentage[a]!==c&&(b.data[a]=this._toValue(this._state.percentage[a]),b.data[a]=this._applyPrecision(b.data[a]))},_calculateValue:function(a){var b={};return this.options.range?(b.data=[this.options.min,this.options.max],this._setValues(0,b),this._setValues(1,b),a&&(b.data[0]=this._snapToClosestTick(b.data[0]),b.data[1]=this._snapToClosestTick(b.data[1]))):(b.data=this._toValue(this._state.percentage[0]),b.data=parseFloat(b.data),b.data=this._applyPrecision(b.data),a&&(b.data=this._snapToClosestTick(b.data))),b.data},_snapToClosestTick:function(a){for(var b=[a,1/0],c=0;c<this.options.ticks.length;c++){var d=Math.abs(this.options.ticks[c]-a);d<=b[1]&&(b=[this.options.ticks[c],d])}return b[1]<=this.options.ticks_snap_bounds?b[0]:a},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type&&"touchend"!==a.type||(a=a.changedTouches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c;"right"===this.stylePos&&(d=-d);var e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if(isNaN(+a)){if(Array.isArray(a))return this._validateArray(a),a;throw new Error(g.formatInvalidInputErrorMsg(a))}return+a},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(g.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.textContent?a.textContent=b:"undefined"!=typeof a.innerText&&(a.innerText=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetRight:function(a){return a.getBoundingClientRect().right},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop,"BODY"!==a.tagName&&(b-=a.scrollTop);return b},_offset:function(a){return{left:this._offsetLeft(a),right:this._offsetRight(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b;b=this.options.tooltip_position?this.options.tooltip_position:this.options.rtl?"left":"right";var c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?a.forEach(function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this)):a.forEach(function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))},_getClosestTickIndex:function(a){for(var b=Math.abs(a-this.options.ticks[0]),c=0,d=0;d<this.options.ticks.length;++d){var e=Math.abs(a-this.options.ticks[d]);b>e&&(b=e,c=d)}return c},_setTickIndex:function(){this.ticksAreValid&&(this._state.tickIndex=[this.options.ticks.indexOf(this._state.value[0]),this.options.ticks.indexOf(this._state.value[1])])}},a&&a.fn&&(a.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),f=c):(a.bridget(b,d),f=b),a.bridget(c,d),a(function(){a("input[data-provide=slider]")[f]()}))}(a),d});
;