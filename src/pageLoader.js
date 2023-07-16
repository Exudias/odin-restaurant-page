const contentDiv = document.createElement("div");
contentDiv.id = "content";
document.body.appendChild(contentDiv);

function createPage()
{
    createNav();
    createBody();
    createFooter();
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
}

function createNavButtons()
{
    let homeBtn = makeButton("Home");
    let menuBtn = makeButton("Menu");
    let aboutBtn = makeButton("About");
    // Add eventlisteners
    return [homeBtn, menuBtn, aboutBtn];
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