function loadMenu()
{
    const body = document.querySelector(".body-container");

    let menu = document.createElement("div");
    body.appendChild(menu);
    menu.textContent = "Hello! I am a menu page.";
}

export default loadMenu;