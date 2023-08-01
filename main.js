(()=>{"use strict";const e=function(){const e=document.getElementById("main");return e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.id="home";const t=document.createElement("p");t.textContent="Best sushi experience";const n=document.createElement("p");n.textContent="Made with high-quality ingredients";const o=document.createElement("img");o.src="images/sushi-bar.jpeg",o.className="main-img";const a=document.createElement("p");return a.textContent="Order online or visit us",e.append(t,n,o,a),e}()),e};function t(e,t,n){const o=document.createElement("div");o.className="item";const a=document.createElement("h3");a.textContent=t;const i=document.createElement("p");i.textContent=n;const c=document.createElement("img");return c.src=`images/menu/${e}.png`,c.alt=t,o.append(c,a,i),o}function n(e){document.getElementById("nav").querySelectorAll("button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}document.getElementById("content").append(function(){const o=document.createElement("header");o.className="header";const a=document.createElement("h1");a.className="title",a.textContent="Ootoro Sushi";const i=function(){const o=document.createElement("nav");o.className="navbar",o.id="nav";const a=document.createElement("button");a.textContent="Home",a.className="home",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(a),e())}));const i=document.createElement("button");i.className="menu",i.textContent="Menu",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(i),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.id="menu",e.className="menu",e.appendChild(t("orange-nigiri","Salmon Nigiri","A ball of shaped, vinegared sushi rice is topped with a delicious looking slice of salmon.")),e.appendChild(t("red-nigiri","Tuna Nigiri","A thinly sliced piece of tuna over a perfectly rectangular seasoned rice ball.")),e.appendChild(t("shrimp-temp","Shrimp Tempura","A crispy battered shrimp with seasoned sushi rice, and nori (dried edible seaweed).")),e.appendChild(t("cali-roll","California Roll","A roll made with seasoned sushi rice, crab meat (real or imitation), avocado, and cucumber.")),e.appendChild(t("salmon-roll","Philadelphia Roll","A roll made with smoked salmon, cream cheese, and cucumber, with the rice on the outside.")),e.appendChild(t("yellow-nigiri","Uni Nigiri","Hand-pressed sushi rice topped with uni (sea urchin).")),e.appendChild(t("crispy-salmon","Salmon Roll","A roll full of buttery salmon, sweet rice, and cucumber.")),e.appendChild(t("yellowtail","Yellowtail Roll","Made with yellowtail, sweet rice, and cucumber.")),e.appendChild(t("handroll","Lobster Handroll","Gently cooked lobster mixed with a touch of mayonnaise, along with our signature warm rice, it's wrapped up in a crispy sheet of nori.")),e.appendChild(t("salmon-veggies","Salmon Sashimi","Salmon served with fresh wasabi, ginger, soy sauce or a delicious side of soy yuzo citrus ponzu.")),e.appendChild(t("assorted","Mixed Sashimi","An assortment of maguro, chutoro, and ootoro tuna served with fresh wasabi, ginger, soy sauce or a delicious side of soy yuzo citrus ponzu.")),e.appendChild(t("masego","Salmon Roe","Seaweed wrapped around rice served with light salted salmon eggs on top.")),e}())}())}));const c=document.createElement("button");return c.className="contact",c.textContent="Contact",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(c),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.id="contact";const t=document.createElement("p");t.textContent="📱 949 674 8645";const n=document.createElement("p");n.textContent="🏠 4589 Walnut Ave, Irvine 92864";const o=document.createElement("img");return o.src="images/location.jpeg",o.alt="location",o.className="location",e.append(t,n,o),e}())}())})),o.append(a,i,c),o}();return o.append(a,i),o}(),function(){const e=document.createElement("main");return e.id="main",e}(),function(){const e=document.createElement("footer");e.className="footer",e.textContent="Copyright © asiddiq1";const t=document.createElement("a");t.href="https://github.com/asiddiq1";const n=document.createElement("i");return n.className="fa-brands fa-github",t.append(" ",n),e.append(t),e}()),n(document.querySelector("button.home")),e()})();