import"./assets/footer-23e3bde3.js";import{S as s,N as r,K as a,M as o,P as i,A as l}from"./assets/vendor-32767f66.js";import"./assets/content-26b88ee6.js";const n=document.querySelector(".swiper-button-next"),c=document.querySelector(".swiper-button-prev");window.innerWidth<=1024&&(n.style.display="none",c.style.display="none");new s(".swiper",{loop:!0,slidesPerView:1,spaceBetween:30,modules:[r,a,o,i,l],autoplay:{delay:3e3},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},pagination:{enabled:!0,el:".swiper-pagination",clickable:!0},breakpoints:{1024:{navigation:{nextEl:".sbn",prevEl:".sbp"}}}});new s(".swiper2",{scrollbar:{el:".swiper-scrollbar",hide:!0}});const u=document.querySelector(".carousel-list");u.addEventListener("click",e=>{if(e.target.tagName!="IMG"&&e.target.tagName!="P"&&e.target.tagName!="DIV"&&!e.target.classList.contains("add-to-cart")){const t=e.target.closest("button").querySelector("use");t.getAttribute("href")==="/public/symbol-defs.svg#icon-black-heart"?(t.setAttribute("href","/public/symbol-defs.svg#icon-heart"),t.closest("svg").style.fill="#6c7275"):(t.setAttribute("href","/public/symbol-defs.svg#icon-black-heart"),t.closest("svg").style.fill="black")}});
//# sourceMappingURL=commonHelpers4.js.map
