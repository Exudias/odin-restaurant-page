function loadHome()
{
    const body = document.querySelector(".body-container");

    let home = document.createElement("div");
    body.appendChild(home);
    home.textContent = "Hello! I am a home page.";
}

export default loadHome;