const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],l=["A","J","Q","K"],r=[],a=document.querySelector("#btnNuevo"),n=document.querySelector("#btnPedir"),d=document.querySelector("#btnDetener"),o=document.querySelectorAll(".divCartas"),s=document.querySelectorAll("small"),i=(t=2)=>{e=c(),r=[];for(let l=0;l<t;l++)r.push(0);console.clear(),s.forEach(e=>e.innerText=0),o.forEach(e=>e.innerHTML=""),n.disabled=!1,d.disabled=!1},c=()=>{e=[];for(let r=2;r<11;r++)for(let a of t)e.push(r+a);for(let n of t)for(let d of l)e.push(d+n);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},b=(e,t)=>(r[t]=r[t]+$(e),s[t].innerText=r[t],r[t]),f=(e,t)=>{let l=document.createElement("img");l.src=`assets/cartas/${e}.png`,l.classList.add("carta"),o[t].append(l)},h=()=>{let[e,t]=r;setTimeout(()=>{t===e?alert("Hubo un empate!"):e>21?alert("Gan\xf3 la computadora!"):t>21?alert("Gan\xf3 el jugador!"):alert("Gan\xf3 la computadora!")},100)},p=e=>{let t=0;do{let l=u();t=b(l,r.length-1),f(l,r.length-1)}while(t<e&&e<=21);h()};return n.addEventListener("click",()=>{let e=u(),t=b(e,0);f(e,0),t>21?(n.disabled=!0,d.disabled=!0,p(t)):21===t&&(n.disabled=!0,d.disabled=!0,p(t))}),d.addEventListener("click",()=>{n.disabled=!0,d.disabled=!0,p(r[0])}),a.addEventListener("click",()=>{i()}),{nuevoJuego:i}})();