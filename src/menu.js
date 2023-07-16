import './styles/menu.css';

const salads = require('./data/salads.json');
const appetizers1 = require('./data/appetizers1.json');

function loadMenu()
{
    const body = document.querySelector(".body-container");

    let menu = document.createElement("div");
    body.appendChild(menu);
    
    addHeading(menu, "La Casa Soleggiata<br>MENU");

    addHeading(menu, "Salads");
    let saladContainer = addMenuContainer(menu);
    addEntries(saladContainer, salads);

    addHeading(menu, "Antipasti / Cold Appetizers");
    let appetizer1Container = addMenuContainer(menu);
    addEntries(appetizer1Container, appetizers1);

    addHeading(menu, "Antipasti / Warm Appetizers");
    addHeading(menu, "Pasta");
    addHeading(menu, "Risotto");
    addHeading(menu, "Pizza");
    addHeading(menu, "Main Courses");
    addHeading(menu, "Fish");
    addHeading(menu, "Sides");
    addHeading(menu, "Bread");
    addHeading(menu, "Dessert");
    addHeading(menu, "Drinks");
    addSubHeading(menu, "Soft Drinks");
    addSubHeading(menu, "Hot Drinks");
    addSubHeading(menu, "Beer");
    addSubHeading(menu, "Vodka");
    addSubHeading(menu, "Rakia");
    addSubHeading(menu, "Ouzo");
    addSubHeading(menu, "Gin");
    addSubHeading(menu, "Whiskey");
    addSubHeading(menu, "Rum");
    addSubHeading(menu, "Cognac");
    addSubHeading(menu, "Vermouths & Liquors");
    addSubHeading(menu, "White Wine");
    addSubHeading(menu, "Rosé");
    addSubHeading(menu, "Red Wine");
    addSubHeading(menu, "Draft Wine");
    addHeading(menu, "Allergens");
}

function addEntries(container, list)
{
    for (let idx in list)
    {
        const item = list[idx];
        addMenuEntry(container, item.name, item.side, item.ingredients);
    }
}

function addMenuEntry(container, title, side, ingredients)
{
    let entryContainer = document.createElement("div");
    entryContainer.className = "entry-container";

    let titleContainer = document.createElement("div");
    titleContainer.className = "title-container";
    let sideContainer = document.createElement("div");
    sideContainer.className = "side-container";
    let ingredientsContainer = document.createElement("div");
    ingredientsContainer.className = "ingredients-container";

    titleContainer.textContent = title;
    sideContainer.textContent = side;
    ingredientsContainer.textContent = ingredients;

    entryContainer.appendChild(titleContainer);
    entryContainer.appendChild(sideContainer);
    entryContainer.appendChild(ingredientsContainer);

    container.appendChild(entryContainer);
}

function addMenuContainer(container)
{
    let menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    container.appendChild(menuContainer);
    return menuContainer;
}

function addSubHeading(container, text)
{
    let subHeading = document.createElement("h2");
    subHeading.className = "body-subheading";
    subHeading.innerHTML = text;
    container.appendChild(subHeading);
}

function addHeading(container, text)
{
    let heading = document.createElement("h1");
    heading.className = "body-heading";
    heading.innerHTML = text;
    container.appendChild(heading);
}

export default loadMenu;