import RestaurantInterior from "./img/restaurant-interior.jpg";

function loadHome()
{
    const body = document.querySelector(".body-container");

    let home = document.createElement("div");
    body.appendChild(home);
    
    // Heading
    let heading = document.createElement("h1");
    heading.className = "body-heading";
    heading.innerHTML = "La Casa Soleggiata<br>HOME";
    home.appendChild(heading);

    // Image
    let img = new Image();
    img.src = RestaurantInterior;
    home.appendChild(img);

    // Review panel
    let review = document.createElement("div");
    review.className = "review";

    let reviewBody = document.createElement("p");
    reviewBody.textContent = "\"A great restaurant in the heart of the city! The food is great, the service is quick, and the staff are very kind.\"";

    let reviewer = document.createElement("p");
    reviewer.textContent = "- Anonymous";

    review.appendChild(reviewBody);
    review.appendChild(reviewer);

    home.appendChild(review);

    // Working hours
    let hours = document.createElement("div");
    hours.className = "hours";

    let hoursTitle = document.createElement("h1");
    hoursTitle.textContent = "Hours";

    let hoursBody = document.createElement("ul");
    hoursBody.appendChild(makeHoursListItem("Monday", "8am", "10pm"));
    hoursBody.appendChild(makeHoursListItem("Tuesday", "8am", "10pm"));
    hoursBody.appendChild(makeHoursListItem("Wednesday", "8am", "10pm"));
    hoursBody.appendChild(makeHoursListItem("Thursday", "8am", "10pm"));
    hoursBody.appendChild(makeHoursListItem("Friday", "8am", "10pm"));
    hoursBody.appendChild(makeHoursListItem("Saturday", "8am", "10pm"));
    hoursBody.appendChild(makeHoursListItem("Sunday"));

    hours.appendChild(hoursTitle);
    hours.appendChild(hoursBody);

    home.appendChild(hours);

    // Location
    let location = document.createElement("div");
    location.className = "location";

    let locationTitle = document.createElement("h1");
    locationTitle.textContent = "Location";

    let locationBody = document.createElement("p");
    locationBody.textContent = "Olimpi Panov 23 Str., Ruse, Bulgaria";

    location.appendChild(locationTitle);
    location.appendChild(locationBody);

    home.appendChild(location);
}

function makeHoursListItem(day, start, end)
{
    let li = document.createElement("li");
    if (start && end)
    {
        li.textContent = `${day}: ${start} - ${end}`;
    }
    else
    {
        li.textContent = `${day}: Not working`;
    }
    return li;
}

export default loadHome;