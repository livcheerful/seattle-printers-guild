window.onload = async () => {
    loadWorkshops();
    loadPastEvents();
}

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const divWithContent = (content, parent) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    if (parent) parent.appendChild (div);
    return div;
}

const loadWorkshops = () => {
    const currentYear = new Date(Date.now()).getFullYear();
    const currentMonth = new Date(Date.now()).getMonth() + 1;
    const currentDate = new Date(Date.now()).getDate() + 1;

    // Sort by year first, then month, then date
    WORKSHOPS.sort((a, b) => { return a.year == b.year ? (a.month == b.month ? a.day > b.day : a.month > b.month) : a.year > b.year});

    const workshopContainer = document.getElementById("workshops");
    const upcomingWorkshops = WORKSHOPS
        .filter(w => w.year >= currentYear && (w.month > currentMonth || (w.month == currentMonth && w.day >= currentDate)));
    upcomingWorkshops.forEach(w => {
        const workshopDiv = document.createElement("div");
        workshopDiv.classList.add("workshop")
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("workshop-date")
        divWithContent(MONTHS[w.month - 1], dateDiv);
        divWithContent(w.day, dateDiv);
        workshopDiv.appendChild(dateDiv);

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("workshop-details");
        detailsDiv.classList.add("text");
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
}

const loadPastEvents = () => {
    const pastWorkshopContainer = document.getElementById("past-events");
    const pastWorkshops = WORKSHOPS.reverse().filter(w => w.past).slice(0, 3);
    const slideIds = [];
    pastWorkshops.forEach((w, i) => {
        w.imgs.forEach(src => {
            const slide = document.createElement("div");
            slide.classList.add("slide");
            slide.id = src;
            slideIds.push(src);

            const imgContainer = document.createElement("div");
            imgContainer.classList.add("slide-img");
            const img = document.createElement("img");
            img.src = "img/" + src;
            if (i > 0) img.loading = "lazy";
            imgContainer.appendChild(img);
            slide.appendChild(imgContainer)

            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("slide-details")
            divWithContent(w.title, detailsDiv);
            divWithContent(`${MONTHS[w.month - 1]} ${w.day}, ${w.year}`, detailsDiv);
            divWithContent(w.location, detailsDiv);
            slide.appendChild(detailsDiv);

            pastWorkshopContainer.appendChild(slide);
        })
    })
    setInterval(() => {
        const slide = pastWorkshopContainer.querySelector(".slide");
        const slideWidth = slide.getBoundingClientRect().width;
        const scrollIdx = Math.round(pastWorkshopContainer.scrollLeft / slideWidth) + 1;
        pastWorkshopContainer.scrollTo({left: (scrollIdx % slideIds.length) * slideWidth });
    }, 5000);
}