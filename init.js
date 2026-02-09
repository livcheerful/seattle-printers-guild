window.onload = async () => {
    loadWorkshops();
}

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const divWithContent = (content, parent) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    if (parent) parent.appendChild (div);
    return div;
}

const loadWorkshops = () => {
    const currentMonth = new Date(Date.now()).getMonth() + 1;
    const currentDate = new Date(Date.now()).getDate() + 1;

    WORKSHOPS.sort((a, b) => { return a.month == b.month ? a.day > b.day : a.month > b.month});

    const workshopContainer = document.getElementById("workshops");
    const upcomingWorkshops = WORKSHOPS.filter(w => w.month > currentMonth || (w.month == currentMonth && w.day >= currentDate));
    upcomingWorkshops.forEach(w => {
        const workshopDiv = document.createElement("div");
        workshopDiv.classList.add("workshop")
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("workshop-date")
        divWithContent(MONTHS[w.month - 1], dateDiv);
        divWithContent(w.day, dateDiv);
        workshopDiv.appendChild(dateDiv);

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("workshop-details")
        divWithContent(w.title, detailsDiv);
        divWithContent(w.time, detailsDiv);
        divWithContent(w.location, detailsDiv);
        divWithContent(w.description, detailsDiv);

        const button = document.createElement("a");
        if (!!w.url) {
            button.href = w.url;
            button.innerHTML = "Register!";
            button.target = "_blank";
        } else {
            button.innerHTML = "Coming soon";
            button.classList.add("disabled");
        }
        detailsDiv.appendChild(button);

        workshopDiv.appendChild(detailsDiv);
        workshopContainer.appendChild(workshopDiv);
    })

    // Eventually this could be a slideshow of photos
    const pastWorkshopContainer = document.getElementById("past-events");
    const pastWorkshops = WORKSHOPS
        .filter(w => w.month < currentMonth || (w.month == currentMonth && w.day < currentDate))
        .slice(0, 3);
    pastWorkshops.forEach(w => {
        const workshopDiv = document.createElement("div");
        workshopDiv.classList.add("workshop")
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("workshop-date")
        divWithContent(MONTHS[w.month - 1], dateDiv);
        divWithContent(w.day, dateDiv);
        workshopDiv.appendChild(dateDiv);

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("workshop-details")
        divWithContent(w.title, detailsDiv);
        divWithContent(w.time, detailsDiv);
        divWithContent(w.location, detailsDiv);
        divWithContent(w.description, detailsDiv);

        workshopDiv.appendChild(detailsDiv);
        pastWorkshopContainer.appendChild(workshopDiv);
    })
}