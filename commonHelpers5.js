import"./assets/footer-da5d75d8.js";import{S as C,N as v,K as T,M as B,A as I,T as M,a as N}from"./assets/vendor-32767f66.js";document.querySelector(".swiper-button-next");document.querySelector(".swiper-button-prev");new C(".mySwiper",{loop:!0,slidesPerView:1,spaceBetween:50,freeMode:!0,watchSlidesProgress:!0,modules:[v,T,B,I,M],keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},navigation:{nextEl:".sbn",prevEl:".sbp"}});const j=document.querySelector("[data-days]"),P=document.querySelector("[data-hours]"),$=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");document.querySelector(".timer");function K(t){const E=Math.floor(t/864e5),_=Math.floor(t%864e5/36e5),k=Math.floor(t%864e5%36e5/6e4),A=Math.floor(t%864e5%36e5%6e4/1e3);return{days:E,hours:_,minutes:k,seconds:A}}function O(t){for(let e in t)t[e]>=0&&t[e]<10&&(t[e]=t[e].toString().padStart(2,"0"));return t}const h=Date.now()+225845005,Q=setInterval(()=>{const t=O(K(h-Date.now()));j.textContent=`${t.days}`,P.textContent=`${t.hours}`,$.textContent=`${t.minutes}`,D.textContent=`${t.seconds}`,h-Date.now()<=999&&clearInterval(Q)},1e3),g=document.querySelectorAll(".content-item"),U=document.querySelector(".content-color"),V=document.querySelector(".content-color-list"),a=document.getElementById("mySource1"),l=document.getElementById("mySource2"),i=document.getElementById("mySource3"),d=document.querySelectorAll(".swiper-slide img"),W="../../img/products/mobile/black_tray_table@2x.png",Z="../../img/products/mobile/red_tray_table_color@12x.png",z="../../img/products/mobile/sand_tray_table_color@12x.png",F="../../img/products/mobile/white_tray_table_color@12x.png";let n=[W,z,Z,F];V.addEventListener("click",t=>{U.textContent=t.target.closest("li").dataset.color;for(let e=0;e<4;e++)if(g[e].dataset.color===t.target.closest("li").dataset.color){for(let r of g)r.classList.remove("content-active");g[e].classList.add("content-active");for(let r of d)r.src=n[e],a.srcset=n[e],l.srcset=n[e],i.srcset=n[e]}});const u="../img/products/mobile/black_tray_table_thumb1@2x.png",G="../img/products/mobile/black_tray_table_thumb2@2x.png",H="../img/products/mobile/black_tray_table_thumb3@2x.png",o=[u,G,H],J=document.querySelector(".thumb-list");J.addEventListener("click",t=>{if(console.log(t.target.dataset.thumb),t.target.dataset.thumb==="thumb1")for(let e of d)e.src=u,a.srcset=o[0],l.srcset=o[1],i.srcset=o[2];else if(t.target.dataset.thumb==="thumb2")for(let e of d)e.src=u,a.srcset=o[1],l.srcset=o[2],i.srcset=o[0];else for(let e of d)e.src=u,a.srcset=o[2],l.srcset=o[0],i.srcset=o[1]});const m=document.querySelector(".quantity-list"),y=document.querySelector(".quantity");let S=1;console.log(m.firstElementChild.getElementsByTagName("button")[0]);m.addEventListener("click",t=>{t.target.closest("button").classList=="plus-button"?y.textContent=S+=1:y.textContent=S-=1,y.textContent==0?m.firstElementChild.getElementsByTagName("button")[0].disabled=!0:m.firstElementChild.getElementsByTagName("button")[0].disabled=!1});new N(".accordion-container",{showMultiple:!0});const s=document.querySelectorAll(".tabs-arrow"),w=document.querySelector(".accordion-container"),b=document.querySelectorAll(".tabs-accordion"),f=document.querySelectorAll(".ac-tabs-text");w.addEventListener("click",t=>{console.log(t.target.closest("button"));const e=t.target.closest("button");e&&e.tagName==="BUTTON"&&(e.id==="ac-trigger-2"?(s[0].classList.toggle("rotate"),s[0].classList.toggle("arrow-active"),b[0].classList.toggle("tabs-accordion-active"),f[0].classList.toggle("ac-tabs-text-active")):e.id==="ac-trigger-3"?(s[1].classList.toggle("rotate"),s[1].classList.toggle("arrow-active"),b[1].classList.toggle("tabs-accordion-active"),f[1].classList.toggle("ac-tabs-text-active")):e.id==="ac-trigger-4"&&(s[2].classList.toggle("rotate"),s[2].classList.toggle("arrow-active"),b[2].classList.toggle("tabs-accordion-active"),f[2].classList.toggle("ac-tabs-text-active")))});window.innerWidth>=768&&(w.style.display="none");const R=document.querySelector(".tabs-list"),X=document.querySelectorAll(".tabs-list p"),L=document.querySelector(".review-container"),q=document.querySelector(".something");R.addEventListener("click",t=>{if(t.target.tagName==="P"){for(let e of X)e.classList.remove("active-tab");t.target.classList.add("active-tab"),t.target.textContent==="Questions"||t.target.textContent==="Additional info"?(L.style.display="none",q.style.display="block"):(L.style.display="block",q.style.display="none")}});const p=document.getElementById("emojiPanel"),x=document.getElementById("emojiInput"),c=document.querySelectorAll(".emoji");document.getElementById("form");x.addEventListener("mouseover",()=>{p.style.display="flex"});document.addEventListener("click",t=>{t.target!=p&&t.target!=x&&t.target!=c[0]&&t.target!=c[1]&&t.target!=c[2]&&t.target!=c[3]&&t.target!=c[4]&&t.target!=c[5]&&(p.style.display="none")});
//# sourceMappingURL=commonHelpers5.js.map
