(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2:function(i,t,e){"use strict";function s(i,t){for(var e=0;e<t.length;e++){var s=t[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}e.r(t);var n=function(){function i(t){!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.slides=document.querySelectorAll(".slideshow__slide"),this.count=0,this.prev=document.querySelector(".slideshow__btn--left"),this.next=document.querySelector(".slideshow__btn--right"),this.timer,this.interval=t,this.events(),this.startSlideShow()}var t,e,n;return t=i,(e=[{key:"events",value:function(){this.prev.addEventListener("click",this.showPrevSlide.bind(this)),this.next.addEventListener("click",this.showNextSlide.bind(this))}},{key:"startSlideShow",value:function(){this.slides[this.count].classList.remove("slideshow__slide--is-hidden"),this.timer=setTimeout(this.showNextSlide.bind(this),this.interval)}},{key:"showNextSlide",value:function(){clearTimeout(this.timer),this.slides[this.count].classList.add("slideshow__slide--is-hidden"),this.count===this.slides.length-1?this.count=0:this.count++,this.slides[this.count].classList.remove("slideshow__slide--is-hidden"),this.timer=setTimeout(this.showNextSlide.bind(this),this.interval)}},{key:"showPrevSlide",value:function(){clearTimeout(this.timer),this.slides[this.count].classList.add("slideshow__slide--is-hidden"),0===this.count?this.count=this.slides.length-1:this.count--,this.slides[this.count].classList.remove("slideshow__slide--is-hidden"),this.timer=setTimeout(this.showNextSlide.bind(this),this.interval)}}])&&s(t.prototype,e),n&&s(t,n),i}();t.default=n}}]);