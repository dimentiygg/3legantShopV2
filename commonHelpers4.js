import"./assets/footer-010760e1.js";import{S as s,N as o,K as n,M as i,P as l,A as a}from"./assets/vendor-32767f66.js";import"./assets/content-26b88ee6.js";const c=document.querySelector(".swiper-button-next"),u=document.querySelector(".swiper-button-prev");window.innerWidth<=1024&&(c.style.display="none",u.style.display="none");new s(".swiper",{loop:!0,slidesPerView:1,spaceBetween:30,modules:[o,n,i,l,a],autoplay:{delay:3e3},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},pagination:{enabled:!0,el:".swiper-pagination",clickable:!0},breakpoints:{1024:{navigation:{nextEl:".sbn",prevEl:".sbp"}}}});new s(".swiper2",{scrollbar:{el:".swiper-scrollbar",hide:!0}});const b=document.querySelector(".carousel-list");b.addEventListener("click",t=>{const r=t.target.closest("button").classList.contains("favourites"),e=t.target.closest("button").querySelector("use");r&&(e.getAttribute("href")==="./assets/symbol-defs.svg#icon-black-heart"?(e.setAttribute("href","./assets/symbol-defs.svg#icon-heart"),e.closest("svg").style.fill="#6c7275"):(e.setAttribute("href","./assets/symbol-defs.svg#icon-black-heart"),e.closest("svg").style.fill="black"))});
//# sourceMappingURL=commonHelpers4.js.map
