(()=>{"use strict";const e=function(){const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("h2"),c=document.createElement("em"),o=document.createElement("p"),a=document.createElement("div"),i=document.createElement("img"),r=document.createElement("img");a.classList.add("image-container"),t.classList.add("our-story"),i.setAttribute("src","chad-liz-drink-wine.jpg"),r.setAttribute("src","src/chad-turns-dough.jpg"),n.textContent="Our Story...",d.textContent="TARTINE BEGAN WITH A MISSION:",c.textContent="Bring bread with an old-soul into the lives of our friends in California.",o.textContent="Using a wood fired brick oven, Chad Robertson baked bread and Elisabeth Prueitt created rustic, elegant pastries using many of the techniques they had learned abroad.",a.appendChild(i),a.appendChild(r),t.appendChild(n),t.appendChild(d),t.appendChild(c),t.appendChild(o),t.appendChild(a),e.appendChild(t)};function t(e,t,n){const d=document.createElement("div"),c=document.createElement("div"),o=document.createElement("h2"),a=document.createElement("p"),i=document.createElement("img");return d.classList.add("item"),i.setAttribute("src",n),o.textContent=e,a.textContent=t,c.appendChild(o).appendChild(a),d.appendChild(c),d.appendChild(i),d}const n=function(){const n=document.createElement("header"),d=document.querySelector(".content"),c=document.createElement("h1");c.textContent="TARTINE";const o=document.createElement("nav"),a=document.createElement("button");a.textContent="Home";const i=document.createElement("button");i.textContent="Menu";const r=document.createElement("button");r.textContent="Contact",o.appendChild(a),o.appendChild(i),o.appendChild(r),n.appendChild(c),n.appendChild(o),a.addEventListener("click",(()=>{d.textContent="",e()})),i.addEventListener("click",(()=>{d.textContent="",function(){const e=document.querySelector(".content"),n=document.createElement("div");n.classList.add("menu-items");const d=t("Country","$7.75-12.75","country.png"),c=t("Oat-Porridge","$8.50-13.75","oat-porridge.png"),o=t("Buttermilk-Loaf","$12.75","buttermilk-loaf.png");n.appendChild(d),n.appendChild(c),n.appendChild(o),e.appendChild(n)}()})),r.addEventListener("click",(()=>{d.textContent="",function(){const e=document.querySelector(".content"),t=document.createElement("div"),n=document.createElement("p"),d=document.createElement("p"),c=document.createElement("p");t.classList.add("contact"),n.textContent="Give us a call at (999) - 999 - 999",d.textContent="Or, shoot us an email at tartinebakery@gmail.com",c.textContent="Visit our bakery at 12300 Bleker St. LA CA",t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t)}()})),document.body.insertBefore(n,document.body.firstChild)};e(),n()})();
