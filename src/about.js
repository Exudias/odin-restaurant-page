import Contact1 from "./img/gimli.png";
import Contact2 from "./img/gloin.png";
import './styles/about.css';

function loadAbout()
{
    const body = document.querySelector(".body-container");

    let about = document.createElement("div");
    body.appendChild(about);
    
    // Heading
    let heading = document.createElement("h1");
    heading.className = "body-heading";
    heading.textContent = "La Casa Soleggiata\nABOUT";
    about.appendChild(heading);

    createContactInfo(about, "GIMLI", "Dwarf", "123-456-7890", "gimli@moria.com", Contact1);
    createContactInfo(about, "GLOIN", "Dwarf Father", "123-456-7890", "gloin@moria.com", Contact2);
}

function createContactInfo(container, name, occupation, number, email, src)
{
    let contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";

    let leftDiv = document.createElement("div");

    let nameDiv = document.createElement("div");
    nameDiv.textContent = name;
    leftDiv.appendChild(nameDiv);

    let occupationDiv = document.createElement("div");
    occupationDiv.textContent = occupation;
    leftDiv.appendChild(occupationDiv);

    let numberDiv = document.createElement("div");
    numberDiv.textContent = number;
    leftDiv.appendChild(numberDiv);

    let emailDiv = document.createElement("div");
    emailDiv.textContent = email;
    leftDiv.appendChild(emailDiv);

    contactContainer.appendChild(leftDiv);

    let rightDiv = document.createElement("div");

    let img = new Image();
    img.src = src;
    rightDiv.appendChild(img);

    contactContainer.appendChild(rightDiv);

    container.appendChild(contactContainer);
}

export default loadAbout;