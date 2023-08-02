function createHome(){
    const home = document.createElement("div");
    home.id = "home";
   
    const firstP = document.createElement("p");
    firstP.textContent = "Best sushi experience";

    const secondP = document.createElement("p");
    secondP.textContent = "Made with high-quality ingredients";
   
    const mainImg = document.createElement("img");
    mainImg.src = "images/sushi-main.jpeg";
    mainImg.className = "main-img";

    const thirdP = document.createElement("p");
    thirdP.textContent = "Order online or visit us";

    home.append(firstP, secondP, mainImg, thirdP);

    return home;

}

function loadHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
    return main;

}

export default loadHome;

