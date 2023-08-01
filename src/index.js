
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader(){
    const header = document.createElement("header");
    header.className = "header"; 

    const title  = document.createElement("h1");
    title.className = "title";
    title.textContent = "Ootoro Sushi";

    const nav = createNav();
    header.append(title, nav);

    return header;
}


function createNav(){

    const nav = document.createElement("nav");
    nav.className = "navbar";
    nav.id = "nav";

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.className = "home";

    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return; 
        activateBtn(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.className = "menu";
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return; 
        activateBtn(menuBtn);
        loadMenu();

    });

    const contactBtn = document.createElement("button");
    contactBtn.className = "contact";
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return; 
        activateBtn(contactBtn);
        loadContact();
    });

    nav.append(homeBtn, menuBtn, contactBtn);
    return nav;

}

function activateBtn(button){
    const nav = document.getElementById("nav");
    const buttons = nav.querySelectorAll("button");

    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

function createMain(){
    const main = document.createElement("main");
    main.id = "main";

    return main;
}

function createFooter(){
    const footer = document.createElement("footer"); 
    footer.className = "footer";

    footer.textContent = "Copyright © asiddiq1";
    const link = document.createElement("a");
    link.href = "https://github.com/asiddiq1";
    const icon = document.createElement("i");
    icon.className = "fa-brands fa-github";
    link.append("\u00A0", icon);
    footer.append(link);
    
    return footer;

}


function createContent(){
    const content = document.getElementById("content");
    content.append(createHeader(), createMain(), createFooter());
    const home = document.querySelector('button.home');
    activateBtn(home);
    loadHome();

}

createContent();











