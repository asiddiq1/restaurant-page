function createMenu(){

    const menu = document.createElement("div");
    menu.id = "menu";
    menu.className ="menu";
    menu.appendChild(createMenuItem("orange-nigiri", "Salmon Nigiri", "A ball of shaped, vinegared sushi rice is topped with a delicious looking slice of salmon."));
    menu.appendChild(createMenuItem("red-nigiri", "Tuna Nigiri", "A thinly sliced piece of tuna over a perfectly rectangular seasoned rice ball."));
    menu.appendChild(createMenuItem("shrimp-temp", "Shrimp Tempura", "A crispy battered shrimp with seasoned sushi rice, and nori (dried edible seaweed)."));
    menu.appendChild(createMenuItem("cali-roll", "California Roll", "A roll made with seasoned sushi rice, crab meat (real or imitation), avocado, and cucumber."));
    menu.appendChild(createMenuItem("salmon-roll", "Philadelphia Roll", "A roll made with smoked salmon, cream cheese, and cucumber, with the rice on the outside."));
    menu.appendChild(createMenuItem("yellow-nigiri", "Uni Nigiri", "Hand-pressed sushi rice topped with uni (sea urchin)."));
    menu.appendChild(createMenuItem("crispy-salmon", "Salmon Roll", "A roll full of buttery salmon, sweet rice, and cucumber."));
    menu.appendChild(createMenuItem("yellowtail", "Yellowtail Roll", "Made with yellowtail, sweet rice, and cucumber."));
    menu.appendChild(createMenuItem("handroll", "Lobster Handroll", "Gently cooked lobster mixed with a touch of mayonnaise, along with our signature warm rice, it's wrapped up in a crispy sheet of nori."));
    menu.appendChild(createMenuItem("salmon-veggies", "Salmon Sashimi", "Salmon served with fresh wasabi, ginger, soy sauce or a delicious side of soy yuzo citrus ponzu."));  
    menu.appendChild(createMenuItem("assorted", "Mixed Sashimi", "An assortment of maguro, chutoro, and ootoro tuna served with fresh wasabi, ginger, soy sauce or a delicious side of soy yuzo citrus ponzu."));
    menu.appendChild(createMenuItem("masego", "Salmon Roe", "Seaweed wrapped around rice served with light salted salmon eggs on top."));

    return menu;

}

function createMenuItem(imgName, name, description){
    const item = document.createElement("div");
    item.className = "item";
    
    const foodName = document.createElement("h3");
    foodName.textContent = name; 
    
    const foodText = document.createElement("p");
    foodText.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `images/menu/${imgName}.png`;
    foodImage.alt = name;

    item.append(foodImage, foodName, foodText);

    return item;
}

function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());

    return main;

}

export default loadMenu;








