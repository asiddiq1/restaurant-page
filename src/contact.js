function createContact(){
    const contact = document.createElement("div");
    contact.id = "contact";

    const p1 =  document.createElement("p");
    p1.textContent = "📱 949 674 8645"

    const p2 =  document.createElement("p");
    p2.textContent = "🏠 4589 Walnut Ave, Irvine 92864"

    const location = document.createElement("img");
    location.src = "images/location.jpeg";
    location.alt = "location";
    location.className = "location";

    contact.append(p1, p2, location);
    
    return contact;

}

function loadContact(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
    return main;
}

export default loadContact;