/* empty css                      */import{S as u,P as p}from"./assets/vendor-BlZH08zN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();let n=null;function a(l){var e,i,r;const t=l.pagination.bullets;t.forEach(d=>{d.classList.remove("bullet-large","bullet-medium","bullet-small")});const s=l.realIndex,o=t.length;(e=t[s])==null||e.classList.add("bullet-large"),(i=t[(s+1)%o])==null||i.classList.add("bullet-medium"),(r=t[(s+2)%o])==null||r.classList.add("bullet-small")}function c(){if(window.innerWidth>=1440){n&&(n.destroy(!0,!0),n=null);return}n||(n=new u(".available-swiper",{modules:[p],slidesPerView:1,spaceBetween:16,speed:600,pagination:{el:".available-pagination",clickable:!0},on:{init(t){a(t)},slideChange(t){a(t)}}}))}c();window.addEventListener("resize",c);document.querySelectorAll(".faq-acc-el-trigger").forEach(l=>{l.addEventListener("click",()=>{const t=l.closest(".faq-acc-el"),s=t.querySelector(".faq-acc-el-descr-frame"),o=l.querySelector("svg"),e=t.classList.contains("open"),i=`
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
</svg>`;e?(t.classList.remove("open"),s.style.maxHeight="0",o.outerHTML=i):(t.classList.add("open"),s.style.maxHeight=s.scrollHeight+"px",o.outerHTML=r)})});
//# sourceMappingURL=index.js.map
