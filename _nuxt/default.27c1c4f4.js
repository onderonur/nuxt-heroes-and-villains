import{a as l,C as g,B as h,M as x,I as v,o as s,c as k,u,f as d,s as a,w as f,m,t as y,i as B,r as T,y as E,N as C}from"./entry.854b5c9f.js";import{_ as S}from"./nuxt-link.92134417.js";import{_ as b}from"./BaseButton.2ef3205e.js";import{u as w}from"./config.665f42db.js";import"./Icon.e945a6b3.js";var _=(t=>(t.LIGHT="light",t.DARK="dark",t))(_||{});function i(){return localStorage.getItem("theme")??"light"}function L(t){localStorage.setItem("theme",t)}const H=l({__name:"ThemeToggler",setup(t){const e=g(i());h(e,()=>{e.value==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),L(e.value)},{immediate:!0});function n(){e.value=e.value===_.DARK?_.LIGHT:_.DARK}function o(){e.value=i()}return x(()=>{window.addEventListener("storage",o)}),v(()=>{window.removeEventListener("storage",o)}),(p,r)=>{const c=b;return s(),k(c,{variant:"text","icon-name":u(e)==="dark"?"material-symbols:sunny":"material-symbols:dark-mode-rounded",circle:"",onClick:n},null,8,["icon-name"])}}}),I={class:"bg-background-paper dark:bg-dark-background-paper text-primary-main h-app-header flex items-center justify-between px-app-px md:px-app-px-md fixed w-full z-10 shadow-sm"},N={class:"font-bold text-xl md:text-2xl"},D={class:"flex gap-1"},R=l({__name:"AppHeader",props:{appTitle:{}},setup(t){const e=g(i());h(e,()=>{e.value==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),L(e.value)},{immediate:!0});function n(){e.value=i()}x(()=>{window.addEventListener("storage",n)}),v(()=>{window.removeEventListener("storage",n)});const o=w();return(p,r)=>{const c=S,$=H,A=b;return s(),d("header",I,[a(c,{to:{name:"index"}},{default:f(()=>[m("h1",N,y(p.appTitle),1)]),_:1}),m("div",D,[a($),a(A,{variant:"text",to:u(o).githubRepoUrl,"is-external-url":"","icon-name":"mdi:github",circle:""},null,8,["to"])])])}}}),K={},V={class:"mt-app-header py-app-py md:py-app-py-md px-app-px md:px-app-px-md bg-background-body dark:bg-dark-background-body"},j={class:"max-w-6xl mx-auto"};function F(t,e){return s(),d("main",V,[m("div",j,[T(t.$slots,"default")])])}const G=B(K,[["render",F]]),M={class:"bg-overlay-light dark:bg-dark-overlay-light flex items-center p-app-px md:p-app-px-md"},U=l({__name:"AppFooter",props:{appTitle:{}},setup(t){return(e,n)=>(s(),d("footer",M,y(e.appTitle)+" | Vue.js ",1))}}),z={class:"min-h-screen grid grid-rows-[1fr_auto]"},P=l({__name:"AppLayout",props:{appTitle:{}},setup(t){return(e,n)=>{const o=R,p=G,r=U;return s(),d("div",z,[a(o,{"app-title":e.appTitle},null,8,["app-title"]),a(p,null,{default:f(()=>[T(e.$slots,"default")]),_:3}),a(r,{"app-title":e.appTitle},null,8,["app-title"])])}}}),X=l({__name:"default",setup(t){const e=w(),{appTitle:n}=e;return E({title:n,titleTemplate:`%s | ${n}`}),(o,p)=>{const r=C,c=P;return s(),k(c,{"app-title":u(n)},{default:f(()=>[a(r)]),_:1},8,["app-title"])}}});export{X as default};