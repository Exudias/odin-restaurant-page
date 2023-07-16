import BannerImage from './image.jpg';

const contentDiv = document.querySelector("div#content");

function createPage()
{
    let bannerImage = new Image();
    bannerImage.src = BannerImage;
    bannerImage.width = 200;

    contentDiv.appendChild(bannerImage);

    let credits = document.createElement("p");
    credits.innerHTML = '<p>Photo by <a href="https://unsplash.com/@chrishardyphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Hardy</a> on <a href="https://unsplash.com/photos/I09FypgLoBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>';

    contentDiv.appendChild(credits);

    let heading = document.createElement("h1");
    heading.innerText = "La Casa Solegiatta";

    contentDiv.appendChild(heading);

    let flavourText = document.createElement("p");
    flavourText.innerText = "A beautiful Italian restaurant!";

    contentDiv.appendChild(flavourText);
}

export default createPage;