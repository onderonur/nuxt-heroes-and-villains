(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(t,e,r){"use strict";var o=r(3),n=r(24);r(342),r(343),r(344),r(345),r(346),r(347),r(348);o.default.component("VIcon",n.a)},155:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({props:{type:String,to:Object,href:String,iconName:String,iconAlignment:String,circle:Boolean,variant:String,buttonClass:String,iconClass:String}}),l=(r(323),r(21)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.to?"NuxtLink":t.href?"a":"button",{tag:"component",class:["button",t.circle&&"circle-button","primary"===t.variant&&["solid-button","primary-button"],"secondary"===t.variant&&["solid-button","secondary-button"],"text"===t.variant&&"text-button",t.buttonClass],attrs:{to:t.to,href:t.href,target:t.href?"_blank":void 0,rel:t.href?"noopener noreferrer":void 0,type:t.type},on:{click:function(e){return t.$emit("click",e)}}},["right"===t.iconAlignment?t._t("default"):t._e(),t._v(" "),t.iconName?r("VIcon",{class:[t.iconClass,"fill-current"],attrs:{name:t.iconName}}):t._e(),t._v(" "),"right"!==t.iconAlignment?t._t("default"):t._e()],2)}),[],!1,null,"7ee576ca",null);e.default=component.exports},200:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("28976f42",content,!0,{sourceMap:!1})},201:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("436bbb0a",content,!0,{sourceMap:!1})},216:function(t,e,r){"use strict";var o=r(12),n=Object(o.b)({head:{},setup:function(){var t="Heroes & Villains";return Object(o.i)({title:t,titleTemplate:"%s | ".concat(t)}),{appTitle:t}}}),l=(r(321),r(21)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AppLayout",{attrs:{"app-title":t.appTitle}},[r("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppLayout:r(349).default})},218:function(t,e,r){r(219),r(220),t.exports=r(223)},321:function(t,e,r){"use strict";r(200)},322:function(t,e,r){var o=r(74)((function(i){return i[1]}));o.push([t.i,"body{color:rgba(0, 0, 0, 0.87)}.dark body{color:rgba(255, 255, 255, 0.87)}body a{--tw-text-opacity:1;color:rgb(244 63 94 / var(--tw-text-opacity))}body a:hover{--tw-text-opacity:1;color:rgb(20 184 166 / var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},323:function(t,e,r){"use strict";r(201)},324:function(t,e,r){var o=r(74)((function(i){return i[1]}));o.push([t.i,".button[data-v-7ee576ca]{display:flex;align-items:center;gap:0.25rem;border-radius:0.375rem;border-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgb(244 63 94 / var(--tw-border-opacity));padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;font-weight:500;--tw-text-opacity:1;color:rgb(244 63 94 / var(--tw-text-opacity))}.button[data-v-7ee576ca]:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(20 184 166 / var(--tw-text-opacity))}.dark .button[data-v-7ee576ca]:hover{--tw-bg-opacity:1;background-color:rgb(100 116 139 / var(--tw-bg-opacity))}.button.solid-button[data-v-7ee576ca]{border-style:none;color:rgba(255, 255, 255, 0.87)}.button.solid-button[data-v-7ee576ca]:hover{color:rgba(255, 255, 255, 0.87)}.button.primary-button[data-v-7ee576ca]{--tw-bg-opacity:1;background-color:rgb(244 63 94 / var(--tw-bg-opacity))}.button.primary-button[data-v-7ee576ca]:hover{--tw-bg-opacity:1;background-color:rgb(251 113 133 / var(--tw-bg-opacity))}.button.secondary-button[data-v-7ee576ca]{--tw-bg-opacity:1;background-color:rgb(20 184 166 / var(--tw-bg-opacity))}.button.secondary-button[data-v-7ee576ca]:hover{--tw-bg-opacity:1;background-color:rgb(45 212 191 / var(--tw-bg-opacity))}.button.text-button[data-v-7ee576ca]{border-style:none}.button.circle-button[data-v-7ee576ca]{display:flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:space-around;border-radius:9999px;padding:0px}",""]),o.locals={},t.exports=o},349:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({props:{appTitle:{type:String,required:!0}}}),l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-screen flex flex-col"},[r("AppHeader",{attrs:{"app-title":t.appTitle}}),t._v(" "),r("AppContent",[t._t("default")],2),t._v(" "),r("AppFooter",{attrs:{"app-title":t.appTitle}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHeader:r(350).default,AppContent:r(353).default,AppFooter:r(352).default})},350:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({props:{appTitle:{type:String,required:!0}},setup:function(){var t,e=Object(o.f)(null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"light");function r(){var t;e.value=null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"light"}return Object(o.l)(e,(function(){"dark"===e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e.value)}),{immediate:!0}),Object(o.d)((function(){window.addEventListener("storage",r)})),Object(o.e)((function(){window.removeEventListener("storage",r)})),{currentTheme:e,toggleTheme:function(){e.value="dark"===e.value?"light":"dark"},githubRepoUrl:"https://github.com/onderonur/nuxt-heroes-and-villains"}}}),l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"bg-background-paper dark:bg-dark-background-paper text-primary-main h-app-header flex items-center justify-between px-3 fixed w-full z-10 shadow-sm"},[r("NuxtLink",{attrs:{to:{name:"index"}}},[r("h1",{staticClass:"font-bold text-2xl"},[t._v(t._s(t.appTitle))])]),t._v(" "),r("div",{staticClass:"flex gap-2"},[r("ThemeToggler"),t._v(" "),r("BaseButton",{attrs:{variant:"text",href:t.githubRepoUrl,"icon-name":"brands/github","icon-class":"h-6 w-6",circle:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ThemeToggler:r(351).default,BaseButton:r(155).default})},351:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({setup:function(){var t,e=Object(o.f)(null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"light");function r(){var t;e.value=null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"light"}return Object(o.l)(e,(function(){"dark"===e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e.value)}),{immediate:!0}),Object(o.d)((function(){window.addEventListener("storage",r)})),Object(o.e)((function(){window.removeEventListener("storage",r)})),{currentTheme:e,toggleTheme:function(){e.value="dark"===e.value?"light":"dark"}}}}),l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseButton",{attrs:{variant:"text","icon-name":"dark"===t.currentTheme?"sun":"moon","icon-class":"h-6 w-6",circle:""},on:{click:t.toggleTheme}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseButton:r(155).default})},352:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({props:{appTitle:{type:String,required:!0}}}),l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{staticClass:"bg-overlay-light dark:bg-dark-overlay-light flex items-center p-2"},[t._v("\n  "+t._s(t.appTitle)+" | Vue.js\n")])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,r){"use strict";r.r(e);var o=r(21),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"flex-grow mt-app-header p-6 bg-background-body dark:bg-dark-background-body"},[r("div",{staticClass:"max-w-6xl mx-auto"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports}},[[218,17,1,18]]]);