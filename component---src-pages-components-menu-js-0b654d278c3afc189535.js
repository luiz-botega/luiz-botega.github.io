(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+ELr":function(e,t,a){e.exports=a.p+"static/leafsmall-978c3c21166d28898d2e0820e2427fcf.png"},"5vA6":function(e,t,a){e.exports=a.p+"static/menustroke-0fe1ca8082271cfcd0cce298261fadd4.png"},SDFf:function(e,t,a){e.exports=a.p+"static/verticalline-ac3d0a0779a7a6ae105d6ef91601754e.png"},qjxE:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),o=a("q1tI"),i=a.n(o),l=a("+ELr"),c=a.n(l),r=a("5vA6"),s=a.n(r),d=a("SDFf"),m=a.n(d),u=(a("Wbzz"),function(e){function t(t){var a;return(a=e.call(this,t)||this).componentWillUnmount=function(){window.removeEventListener("scroll",a.brandScroll),window.removeEventListener("scroll",a.verticalLineManager),window.removeEventListener("scroll",a.menuTimeout)},a.menuTimeout=function(){null!==a.timer&&window.clearTimeout(a.timer),a.timer=window.setTimeout(a.menuManager.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),50)},a.verticalLineManager=function(){var e=document.body.offsetHeight,t=document.getElementById("landing-bkgr").offsetHeight,a=document.getElementById("contact-fixed-div").getBoundingClientRect().top;if(window.scrollY>=t){var n=16+(window.scrollY-t)*a/(e-window.screen.height-t);document.getElementById("vertical-line-div").setAttribute("style","height:"+n+"px")}else document.getElementById("vertical-line-div").setAttribute("style","height: 0vh")},a.menuManager=function(){var e=window.scrollY;a.setState({scrollPosition:e}),a.state.scrollPosition>document.getElementById("texts-div").offsetTop-150?(a.clearStroke(),a.paintStroke("#blog-menu")):a.state.scrollPosition>document.getElementById("portfolio-div").offsetTop-150?(a.clearStroke(),a.paintStroke("#portfolio-menu")):a.state.scrollPosition>document.getElementById("process-div").offsetTop-150?(a.clearStroke(),a.paintStroke("#process-menu")):a.state.scrollPosition>document.getElementById("about-div").offsetTop-150?(a.clearStroke(),a.paintStroke("#about-menu")):a.clearStroke()},a.clearStroke=function(){var e=document.querySelectorAll(".menuStroke.show")[0];e&&e.classList.remove("show");var t=document.querySelectorAll(".nav-item-box.selected")[0];t&&t.classList.remove("selected")},a.paintStroke=function(e){var t=document.querySelectorAll(e)[0];t.classList.add("selected");var a=document.querySelectorAll(e+" .menuStroke")[0];a.classList.add("show"),a.setAttribute("style","height:"+(t.offsetHeight+40)+"px")},a.brandScroll=function(){var e=document.getElementsByClassName("brand-div")[0],t=document.getElementsByClassName("brand-leaf-box")[0],a=document.getElementById("landing-bkgr").offsetHeight;window.scrollY<=a?(e.classList="brand-div hide",t.classList="brand-leaf-box hide",document.getElementById("contact-fixed-div").classList.add("hidden")):(e.classList="brand-div appear",t.classList="brand-leaf-box appear",document.getElementById("contact-fixed-div").classList.remove("hidden"))},a.scrollDown=function(e){var t;switch(e){case"back-to-top":window.scrollTo({top:0,behavior:"smooth"});break;case"about-menu":t=document.getElementById("about-div").offsetTop,window.scrollTo({top:t,behavior:"smooth"});break;case"process-menu":t=document.getElementById("process-div").offsetTop,window.scrollTo({top:t,behavior:"smooth"});break;case"portfolio-menu":t=document.getElementById("portfolio-div").offsetTop,window.scrollTo({top:t,behavior:"smooth"});break;case"blog-menu":t=document.getElementById("texts-div").offsetTop,window.scrollTo({top:t,behavior:"smooth"})}},a.copyToClipboard=function(){var e=document.getElementById("fixed-email-popup");e.classList.remove("show");var t=document.createElement("textarea");document.body.appendChild(t),t.value="lfbotega@gmail.com",t.select(),document.execCommand("copy"),document.body.removeChild(t),e.classList.add("show")},a.state={contactsFixed:!1,scrollPosition:0},a.timer=null,a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.brandScroll),window.addEventListener("scroll",this.verticalLineManager),document.getElementsByClassName("vertical-line")[0].setAttribute("style","height:"+(t+40)+"px");var e=document.getElementById("contact-fixed-div").getBoundingClientRect().top+"px",t=document.getElementById("contact-fixed-div").getBoundingClientRect().top;document.getElementById("vertical-line-div").style.maxHeight=e,window.addEventListener("scroll",this.menuTimeout,!1)},a.render=function(){var e=this,t=i.a.createElement("div",{id:"contact-fixed-box"},i.a.createElement("div",{className:"contact-fixed"},i.a.createElement("div",{id:"fixed-email-popup"},"lfbotega@gmail.com ",i.a.createElement("br",null),i.a.createElement("div",null,"e-mail copied to your clipborad :)")),i.a.createElement("div",{className:"contact-mail fixed-button",onClick:function(){return e.copyToClipboard()}},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"})))),i.a.createElement("div",{className:"contact-fixed"},i.a.createElement("a",{href:"https://www.linkedin.com/in/luiz-botega/",target:"_blank"},i.a.createElement("div",{className:"contact-linkedin fixed-button"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z"}),i.a.createElement("path",{d:"M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z"}),i.a.createElement("path",{d:"M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"}))))),i.a.createElement("div",{className:"contact-fixed"},i.a.createElement("a",{href:"https://medium.com/@luizbotega",target:"_blank"},i.a.createElement("div",{className:"contact-medium fixed-button"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"}))))));return i.a.createElement("nav",{className:"nav flex-column"},i.a.createElement("div",{className:"brand-div hide",onClick:function(){return e.scrollDown("back-to-top")}},i.a.createElement("div",{className:"brand-box"},i.a.createElement("div",{className:"brand-title"},"Luiz Botega"),i.a.createElement("div",{className:"brand-subtitle"},"service designer")),i.a.createElement("div",{className:"brand-leaf-box hide"},i.a.createElement("img",{className:"brand-leaf",src:c.a}))),i.a.createElement("div",{id:"about-menu",className:"nav-item-box",onClick:function(){return e.scrollDown("about-menu")}},i.a.createElement("img",{src:s.a,className:"menuStroke"}),i.a.createElement("div",{className:"nav-link"},"who am i")),i.a.createElement("div",{id:"process-menu",className:"nav-item-box",onClick:function(){return e.scrollDown("process-menu")}},i.a.createElement("img",{src:s.a,className:"menuStroke"}),i.a.createElement("div",{className:"process-menu nav-link"},"my process")),i.a.createElement("div",{id:"portfolio-menu",className:"nav-item-box",onClick:function(){return e.scrollDown("portfolio-menu")}},i.a.createElement("img",{src:s.a,className:"menuStroke"}),i.a.createElement("div",{className:"portfolio-menu nav-link"},"my works")),i.a.createElement("div",{id:"blog-menu",className:"nav-item-box",onClick:function(){return e.scrollDown("blog-menu")}},i.a.createElement("img",{src:s.a,className:"menuStroke"}),i.a.createElement("div",{className:"blog-menu nav-link"},"my texts")),i.a.createElement("div",{id:"contact-fixed-div",className:"hidden"},t),i.a.createElement("div",{id:"vertical-line-div"},i.a.createElement("img",{src:m.a,className:"vertical-line"})))},t}(o.Component));t.default=u}}]);
//# sourceMappingURL=component---src-pages-components-menu-js-0b654d278c3afc189535.js.map