import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const contentDiv = document.createElement("div");
contentDiv.id = "content";
document.body.appendChild(contentDiv);

function createPage()
{
    let {nav, navBtns} = createNav();
    createBody();
    createFooter();

    // Disable home button since it's the default
    navBtns[1].disabled = true;
    loadMenu();
}

function createNav()
{
    let nav = document.createElement("div");
    nav.className = "navigation-container";
    contentDiv.appendChild(nav);

    let navBtns = createNavButtons();
    navBtns.forEach(btn => {
        nav.appendChild(btn);
    });

    return {nav, navBtns};
}

function createNavButtons()
{
    let homeBtn = makeButton("Home");
    let menuBtn = makeButton("Menu");
    let aboutBtn = makeButton("About");

    homeBtn.addEventListener("click", () => {
        clearBody();
        loadHome();
        menuBtn.disabled = false;
        aboutBtn.disabled = false;
        homeBtn.disabled = true;
    });
    menuBtn.addEventListener("click", () => {
        clearBody();
        loadMenu();
        menuBtn.disabled = true;
        aboutBtn.disabled = false;
        homeBtn.disabled = false;
    });
    aboutBtn.addEventListener("click", () => {
        clearBody();
        loadAbout();
        menuBtn.disabled = false;
        aboutBtn.disabled = true;
        homeBtn.disabled = false;
    });

    return [homeBtn, menuBtn, aboutBtn];
}

function clearBody()
{
    const body = document.querySelector(".body-container");
    body.innerHTML = "";
}

function makeButton(text)
{
    let btn = document.createElement("button");
    btn.innerText = text;
    return btn;
}

function createBody()
{
    let body = document.createElement("div");
    body.className = "body-container";
    contentDiv.appendChild(body);
}

function createFooter()
{
    let footer = document.createElement("div");
    footer.className = "footer-container";
    contentDiv.appendChild(footer);

    footer.textContent = "Copyright © Exudias 2023";
}

export default createPage;