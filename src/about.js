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
}

export default loadAbout;