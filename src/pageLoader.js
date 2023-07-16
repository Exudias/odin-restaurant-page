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
    console.log("Doing...");
}

function createBody()
{
    console.log("It...");
}

createFooter()
{
    console.log("Now...");
}

export default createPage;