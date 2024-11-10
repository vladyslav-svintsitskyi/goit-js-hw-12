import{a as b,S as w,i as a}from"./assets/vendor-C4-ZuMk8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const L="46861440-5100b639d37c0efc8464b7fe2",f=document.querySelector(".loader"),P="https://pixabay.com/api/",S=15;async function g(t,r=1){f.style.display="block";const{data:o}=await b(`${P}`,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:S}}).finally(()=>{f.style.display="none"});return o}const O=new w(".gallery a",{captionData:"alt"});function y(t){const r=t.map(({webformatURL:o,largeImageURL:l,tags:e,likes:s,views:c,comments:m,downloads:p})=>`
      <li class='gallery-item' >
        <a href='${l}' class="gallery-image">
          <img src='${o}' alt='${e} '>
        </a>
        <ul class="info-list">
          <li class="info-list-item">
            <h2 class="info-heading">Likes</h2>
            <p class="info-text">${s}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Views</h2>
            <p class="info-text">${c}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Comments</h2>
            <p class="info-text">${m}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Downloads</h2>
            <p class="info-text">${p}</p>
          </li>
        </ul>
      </li>
      `).join("");u.insertAdjacentHTML("beforeend",r),O.refresh()}let i=1;const d=15;let $="";const h=document.querySelector(".search-form"),u=document.querySelector(".gallery"),n=document.querySelector(".js-load-more");h.addEventListener("submit",v);n.addEventListener("click",k);async function v(t){t.preventDefault(),u.innerHTML="";const r=t.currentTarget.elements.tag.value;if(r.trim()===""){a.warning({title:"Missing tags",message:"Please enter a search tag!",closeOnClick:!0});return}i=1,n.classList.replace("load-more-hidden","load-more"),loader.style.display="block";try{const o=await g(r,i,d);if(console.log(o.hits),o.hits.length===0)a.error({title:"No pictures found",message:"Sorry, there are no images matching your search query. Please try again.",timeout:2500,closeOnClick:!0});else{y(o.hits);const l=u.children;if(l.length>0){const e=l[l.length-1].getBoundingClientRect();x(e)}o.totalHits>d*i?n.style.display="block":(n.style.display="none",a.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."}))}}catch(o){console.log(o),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:2500,closeOnClick:!0})}finally{loader.style.display="none"}h.reset()}async function k(){loader.style.display="block",i+=1;try{const t=await g($,i,d);y(t.hits),t.totalHits>d*i?n.style.display="block":(n.style.display="none",a.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:2500,closeOnClick:!0})}finally{loader.style.display="none"}}function x(t){window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
