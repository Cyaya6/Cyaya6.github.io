window.addEventListener("load",(()=>{let e=!1,t=[];const n=document.getElementById("search-mask"),a=()=>{const t=document.body.style;t.width="100%",t.overflow="hidden",btf.animateIn(n,"to_show 0.5s"),btf.animateIn(document.querySelector("#local-search .search-dialog"),"titleScale 0.5s"),setTimeout((()=>{document.querySelector("#local-search-input input").focus()}),100),e||(o(),e=!0),document.addEventListener("keydown",(function e(t){"Escape"===t.code&&(l(),document.removeEventListener("keydown",e))}))},l=()=>{const e=document.body.style;e.width="",e.overflow="",btf.animateOut(document.querySelector("#local-search .search-dialog"),"search_close .5s"),btf.animateOut(n,"to_hide 0.5s")},r=()=>{document.querySelector("#search-button > .search").addEventListener("click",a)},c=async e=>{let t=[];const n=await fetch(e);if(/\.json$/.test(e))t=await n.json();else{const e=await n.text(),a=await(new window.DOMParser).parseFromString(e,"text/xml");t=[...(await a).querySelectorAll("entry")].map((e=>({title:e.querySelector("title").textContent,content:e.querySelector("content")&&e.querySelector("content").textContent,url:e.querySelector("url").textContent})))}if(n.ok){const e=document.getElementById("loading-database");e.nextElementSibling.style.display="block",e.remove()}return t},o=()=>{GLOBAL_CONFIG.localSearch.preload||(t=c(GLOBAL_CONFIG.localSearch.path));const e=document.querySelector("#local-search-input input"),n=document.getElementById("local-search-results"),a=document.getElementById("loading-status");e.addEventListener("input",(function(){const e=this.value.trim().toLowerCase().split(/[\s]+/);if(""===e[0])return void(n.innerHTML="");a.innerHTML='<i class="fas fa-spinner fa-pulse"></i>';let l='<div class="search-result-list">';if(e.length<=0)return;let r=0;t.then((t=>{t.forEach((t=>{let n=!0,a=t.title?t.title.trim().toLowerCase():"";const c=t.content?t.content.trim().replace(/<[^>]+>/g,"").toLowerCase():"",o=t.url.startsWith("/")?t.url:GLOBAL_CONFIG.root+t.url;let s=-1,i=-1,d=-1;if(""!==a||""!==c?e.forEach(((e,t)=>{s=a.indexOf(e),i=c.indexOf(e),s<0&&i<0?n=!1:(i<0&&(i=0),0===t&&(d=i))})):n=!1,n){if(d>=0){let t=d-30,n=d+100,s="",i="";t<0&&(t=0),0===t?n=100:s="...",n>c.length?n=c.length:i="...";let u=c.substring(t,n);e.forEach((e=>{u=u.replaceAll(e,'<span class="search-keyword">'+e+"</span>"),a=a.replaceAll(e,'<span class="search-keyword">'+e+"</span>")})),l+='<div class="local-search__hit-item"><a href="'+o+'"><span class="search-result-title">'+a+"</span>",r+=1,""!==c&&(l+='<p class="search-result">'+s+u+i+"</p>")}l+="</a></div>"}})),0===r&&(l+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),l+="</div>",n.innerHTML=l,""!==e[0]&&(a.innerHTML=""),window.pjax&&window.pjax.refresh(n)}))}))};r(),document.querySelector("#local-search .search-close-button").addEventListener("click",l),n.addEventListener("click",l),GLOBAL_CONFIG.localSearch.preload&&(t=c(GLOBAL_CONFIG.localSearch.path)),window.addEventListener("pjax:complete",(()=>{!btf.isHidden(n)&&l(),r()}))}));