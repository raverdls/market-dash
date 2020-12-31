
window.addEventListener('load', () => {
    handleCollapsibles();
    getContent();
    loadOrders();
});

function showMenu() {
    const menu = document.getElementById("admin-menu");
    menu.style.visibility = "visible";
    menu.style.width = "5%";
    menu.style.width = "50%";
    menu.style.width = "80%";
}

function goToAdminMessages() {
    console.log("go to messages");
}

function goToPickupTimes() {
    console.log("pick up ");
}

function closeMenu() {
    const menu = document.getElementById("admin-menu");
    menu.style.width = "50%";
    menu.style.width = "30%";
    menu.style.width = "5%";
    menu.style.visibility = "hidden";
}

function updateAdminAppBar(title) {
    const appbarTitle = document.getElementById("admin-appbar-title");
    setContent(appbarTitle, title);
}

function loadOrders() {
    console.log("load");
    updateAdminAppBar("Orders");
}

function getContent() {
    let request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', 'content.json', true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status == "200") {
            fillPageSections(JSON.parse(request.response));
        }
    }
    request.send();
}

//function to insert page content based on section
function fillPageSections(content) {
    const banner = document.getElementById("banner");
    banner.innerHTML = content.bannerText;

    const profileHeading = document.getElementById("profileHeading");
    profileHeading.innerHTML = content.profileHeading;

    const profileText = document.getElementById("profileText");
    profileText.innerHTML = content.profileContent;

    getExperience(content);
    getEducation(content);
    getCoCurricular(content);
    getSkills(content);
    getReferences(content);
}

function getExperience(content) {
    const experienceCollapsible = document.getElementById("experience-collapsed");

    if (experienceCollapsible.children.length == 0) {
        content.experienceContent.forEach(
            (element) => {
                let container = document.createElement("div")
                container.setAttribute("class", "experience container");

                let jobTitle = document.createElement("div");
                jobTitle.setAttribute("class", "collapsed-h1");
                setContent(jobTitle, element.capacity);


                let detailsContainer = document.createElement("div")
                detailsContainer.setAttribute("class", "collapsed-subs");

                let companyName = document.createElement("div")
                companyName.setAttribute("class", "collapsed-h2");
                setContent(companyName, element.company);

                let period = document.createElement("div")
                period.setAttribute("class", "collapsed-h3");
                setContent(period, element.period);

                let details = document.createElement("div")
                details.setAttribute("class", "collapsed-text");
                setContent(details, element.tasks);

                detailsContainer.append(companyName);
                detailsContainer.append(period);

                container.append(jobTitle);
                container.append(detailsContainer);
                container.append(details);

                experienceCollapsible.append(container);
            }
        );
    }
}

function getEducation(content) {
    const educationCollapsible = document.getElementById("education-collapsed");

    if (educationCollapsible.children.length == 0) {
        content.educationContent.forEach(
            (element) => {
                let container = document.createElement("div")
                container.setAttribute("class", "education container");

                let institution = document.createElement("div");
                institution.setAttribute("class", "collapsed-subs");
                setContent(institution, element.institution + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + element.period);

                let qualifications = document.createElement("div")
                qualifications.setAttribute("class", "collapsed-text");
                setContent(qualifications, element.qualifications);

                container.append(institution);
                container.append(qualifications);

                educationCollapsible.append(container);
            }
        );
    }
}

function getCoCurricular(content) {
    const cocurricularCollapsible = document.getElementById("cocurricular-collapsed");

    if (cocurricularCollapsible.children.length == 0) {
        content.cocurricularContent.forEach(
            (element) => {
                let container = document.createElement("div")
                container.setAttribute("class", "co-curricular container");

                let activity = document.createElement("div");
                activity.setAttribute("class", "collapsed-subs");
                setContent(activity, element.activity + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + element.period);

                let roles = document.createElement("div")
                roles.setAttribute("class", "collapsed-text");
                setContent(roles, element.roles.join(", "));

                container.append(activity);
                container.append(roles);

                cocurricularCollapsible.append(container);
            }
        );
    }
}

function getReferences(content) {
    const referencesCollapsible = document.getElementById("references-collapsed");

    if (referencesCollapsible.children.length == 0) {
        content.referenceContent.forEach(
            (element) => {
                let container = document.createElement("div")
                container.setAttribute("class", "co-curricular container");

                let name = document.createElement("div");
                name.setAttribute("class", "collapsed-subs");
                setContent(name, element.name);

                let contact = document.createElement("div")
                contact.setAttribute("class", "collapsed-text");
                setContent(contact, element.number);

                container.append(name);
                container.append(contact);

                referencesCollapsible.append(container);
            }
        );
    }
}

function getSkills(content) {
    const skillsListArea = document.getElementById("skillsList");

    if (skillsListArea.innerHTML.length == 0) {
        content.skillsContent.forEach(
            (element) => {
                let skill = document.createElement("div");
                skill.setAttribute("class", "collapsed-list-item");
                setContent(skill, element);
                skillsListArea.append(skill);
            }
        );
    }
}

function setContent(element, content) {
    element.innerHTML = content;
}


//Section - handle function of collapsibles and arrow direction toggle

//function to get each html collapsible and invoke content fill
function handleCollapsibles() {
    const collapsibleCollection = document.getElementsByClassName("collapsible");
    const collapsibles = Array.from(collapsibleCollection);

    collapsibles.forEach((element) => {
        element.onclick = () => {
            showSection(element);
        }
    });
}


//function to determine and insert the correct content for each collapsible.
function showSection(element) {
    event.preventDefault();
    let collapsiblePrefixes = ["experience", "skills", "education", "cocurricular", "references"];
    const collapseId = ((element.id).split("-"))[0];

    collapsiblePrefixes.forEach((prefix) => {
        const collapsedClassList = document.getElementById(`${prefix}-collapsed`).classList;
        const triangle = document.getElementById(`${prefix}-triangle`);
        if ((prefix === collapseId) && collapsedClassList.contains("no-display")) {
            collapsedClassList.remove('no-display');
            if (!triangle.classList.contains("arrow-down")) { triangle.classList.add("arrow-down"); }
        } else {
            if (!collapsedClassList.contains("no-display")) { collapsedClassList.add("no-display"); }
            if (triangle.classList.contains("arrow-down")) { triangle.classList.remove("arrow-down"); }
        }
    });
}

