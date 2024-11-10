import{a as b,S as w,i as a}from"./assets/vendor-C4-ZuMk8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const L="46861440-5100b639d37c0efc8464b7fe2",u=document.querySelector(".loader"),P="https://pixabay.com/api/",S=15;async function f(o,r=1){u.style.display="block";const{data:t}=await b(`${P}`,{params:{key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:S}}).finally(()=>{u.style.display="none"});return t}const O=new w(".gallery a",{captionData:"alt"});function y(o){const r=o.map(({webformatURL:t,largeImageURL:c,tags:e,likes:s,views:n,comments:h,downloads:p})=>`
      <li class='gallery-item' >
        <a href='${c}' class="gallery-image">
          <img src='${t}' alt='${e} '>
        </a>
        <ul class="info-list">
          <li class="info-list-item">
            <h2 class="info-heading">Likes</h2>
            <p class="info-text">${s}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Views</h2>
            <p class="info-text">${n}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Comments</h2>
            <p class="info-text">${h}</p>
          </li>
          <li class="info-list-item">
            <h2 class="info-heading">Downloads</h2>
            <p class="info-text">${p}</p>
          </li>
        </ul>
      </li>
      `).join("");g.insertAdjacentHTML("beforeend",r),O.refresh()}let l=1;const d=15;let $="";const m=document.querySelector(".search-form"),g=document.querySelector(".gallery"),i=document.querySelector(".js-load-more");m.addEventListener("submit",v);i.addEventListener("click",k);async function v(o){o.preventDefault(),g.innerHTML="";const r=o.currentTarget.elements.tag.value;if(r.trim()===""){a.warning({title:"Missing tags",message:"Please enter a search tag!",closeOnClick:!0});return}l=1,i.classList.replace("load-more-hidden","load-more"),loader.style.display="block";try{const t=await f(r,l,d);console.log(t.hits),t.hits.length===0?a.error({title:"No pictures found",message:"Sorry, there are no images matching your search query. Please try again.",timeout:2500,closeOnClick:!0}):(y(t.hits),t.totalHits>d*l?i.style.display="block":(i.style.display="none",a.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."})))}catch(t){console.log(t),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:2500,closeOnClick:!0})}finally{loader.style.display="none"}m.reset()}async function k(){loader.style.display="block",l+=1;try{const o=await f($,l,d);y(o.hits);const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:t*3.36,behavior:"smooth"}),o.totalHits>d*l?i.style.display="block":(i.style.display="none",a.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."}))}catch(o){console.log(o),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",timeout:2500,closeOnClick:!0})}finally{loader.style.display="none"}}
//# sourceMappingURL=index.js.map
