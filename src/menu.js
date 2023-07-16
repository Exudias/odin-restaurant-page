function loadMenu()
{
    const body = document.querySelector(".body-container");

    let menu = document.createElement("div");
    body.appendChild(menu);
    
    // Heading
    let heading = document.createElement("h1");
    heading.className = "body-heading";
    heading.textContent = "La Casa Soleggiata";
    menu.appendChild(heading);
}

export default loadMenu;