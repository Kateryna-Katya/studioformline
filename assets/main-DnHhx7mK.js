import{S as m,P as w}from"./vendor-BlZH08zN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let f=null;function p(i){var e,t,r;const o=i.pagination.bullets;o.forEach(n=>{n.classList.remove("bullet-large","bullet-medium","bullet-small")});const s=i.realIndex,c=o.length;(e=o[s])==null||e.classList.add("bullet-large"),(t=o[(s+1)%c])==null||t.classList.add("bullet-medium"),(r=o[(s+2)%c])==null||r.classList.add("bullet-small")}function g(){if(window.innerWidth>=1440){f&&(f.destroy(!0,!0),f=null);return}f||(f=new m(".available-swiper",{modules:[w],slidesPerView:1,spaceBetween:16,speed:600,pagination:{el:".available-pagination",clickable:!0},on:{init(o){p(o)},slideChange(o){p(o)}}}))}g();window.addEventListener("resize",g);document.querySelectorAll(".faq-acc-el-trigger").forEach(i=>{i.addEventListener("click",()=>{const o=i.closest(".faq-acc-el"),s=o.querySelector(".faq-acc-el-descr-frame"),c=i.querySelector("svg"),e=o.classList.contains("open"),t=`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.16602 10H15.834M10 4.16602V15.834" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" />
</svg>`,r=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_18_848)">
    <path d="M5 12H19" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_18_848">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>`;e?(o.classList.remove("open"),s.style.maxHeight="0",c.outerHTML=t):(o.classList.add("open"),s.style.maxHeight=s.scrollHeight+"px",c.outerHTML=r)})});document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".menu-button"),o=i.querySelector(".icon"),s=document.querySelector(".modal"),c=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const r=`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_6_592)">
    <path d="M5.33301 8H26.6663" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.33301 16H26.6663" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.33301 24H26.6663" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_6_592">
      <rect width="32" height="32" fill="white" />
    </clipPath>
  </defs>
</svg>
    `,n=`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_6_560)">
    <path d="M24 8L8 24" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 8L24 24" stroke="#00D9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_6_560">
      <rect width="32" height="32" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;i.addEventListener("click",()=>{t=!t,o.innerHTML=t?n:r,t?l():a()}),c.forEach(u=>u.addEventListener("click",()=>{a(),o.innerHTML=r,t=!1})),window.addEventListener("scroll",d);function l(){s.style.display="block"}function a(){s.style.display="none"}function d(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function i(){const n=document.getElementById("site-header");return n?n.offsetHeight:0}function o(n){const l=document.getElementById(n);if(!l)return;const a=i(),d=l.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:d,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(n=>{n.addEventListener("click",function(l){const a=this.getAttribute("href");if(!a)return;const[d,u]=a.split("#");if(!u)return;const h=window.location.pathname.split("/").pop();!(d===""||d==="./"||d===h||d==="./"+h)||!document.getElementById(u)||(l.preventDefault(),o(u),t(u))})});const c=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navigation-item");function t(n){e.forEach(a=>a.classList.remove("active"));const l=document.querySelector(`.navigation-item a[href*="#${n}"]`);l&&l.closest(".navigation-item").classList.add("active")}function r(){const n=window.pageYOffset+i()+100;c.forEach(l=>{const a=l.offsetTop,d=a+l.offsetHeight;n>=a&&n<d&&t(l.id)})}if(window.addEventListener("scroll",r),window.location.hash){const n=window.location.hash.substring(1);setTimeout(()=>{o(n),t(n)},300)}});
//# sourceMappingURL=main-DnHhx7mK.js.map
