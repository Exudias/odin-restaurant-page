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

}

function createFooter()
{

}

export default createPage;