function loadAbout()
{
    const body = document.querySelector(".body-container");

    let about = document.createElement("div");
    body.appendChild(about);
    about.textContent = "Hello! I am an about page.";
}

export default loadAbout;