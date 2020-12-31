//state
let stores = {
    1: {
        "name": "HiLo Food Stores",
        "logo_url": "",
        "locations": {
            1: {
                "location": "Manor Park",
                "address": "300 Constant Spring Road",
                "phone": "876-937-2345",
                "email": "info@hilo.com.jm"
            },
            2: {
                "location": "Half Way Tree",
                "address": "300 Constant Spring Road",
                "phone": "876-937-2346",
                "email": "info@hilo.com.jm"
            },
            3: {
                "location": "Sovreign",
                "address": "2 Liguanea Avenue, Kingston 6",
                "phone": "876-926-2347",
                "email": "info@hilo.com.jm"
            }
        }
    },
    1: {
        "name": "Shopper's Fair",
        "logo_url": "",
        "locations": {
            1: {
                "location": "Manor Park",
                "address": "251 Constant Spring Road",
                "phone": "876-937-4645",
                "email": "info@shoppersfair.com.jm"
            },
            2: {
                "location": "Half Way Tree",
                "address": "Shop 16, Twin Gates Plaza, 5 Constant Spring Road",
                "phone": "876-937-2367",
                "email": "info@shoppersfair.com.jm"
            },
            3: {
                "location": "Sovreign",
                "address": "2 Liguanea Avenue, Kingston 6",
                "phone": "876-926-3334",
                "email": "info@shoppersfair.com.jm"
            }
        }
    },
    1: {
        "name": "Select Grocers",
        "logo_url": "",
        "locations": {
            1: {
                "location": "Manor Park",
                "address": "Upper Manor Park Plaza, 306 Constant Spring Road",
                "phone": "876-937-6689",
                "email": "selectgrocers@gmail.com"
            },
        }
    }
}

let storeMessages = [
    {
        "customer": "Angela",
        "time": "2020/12/21 07:04:34",
        "preview": "Good Morning Angela, yes we",
        "messages": {
            1: {
                "cus": "Good Morning I am inquiring about the delivery service"
            },
            2: {
                "cus": "Do you deliver to Norbrook Hill?"
            },
            3: {
                "store": "Good Morning Angela, yes we do deliver to Norbrook, Jacks Hill and surrounding areas"
            }
        }
    },
    {
        "customer": "Marsha",
        "time": "2020/12/27 10:00:34",
        "preview": "Good Morning Marsha, indeed we",
        "messages": {
            1: {
                "cus": "Good Morning, Can I pickup my goods later that the time i selected?"
            },
            2: {
                "cus": "Do you deliver to Norbrook Hill"
            },
            3: {
                "store": "Good Morning Angela, indeed you may pickup your goods later than the time indicated"
            },
        },
    }

]
let orders = [
    {
        "orderId": "ORDHMP-0001",
        "savedlist": "Groceries for Ian",
        "store": 1,
        "location": 1,
        "datetime": "2020/08/04 13:40:03",
        "ordertype": "Pickup",
        "orderstatus": "COMPLETED",
        "numitems": 8,
        "pickuptime": "3 - 4 PM",
        "totalcost": 4483.03,
        "netsales": 4008.40,
        "gct": 474.63,
        "totalsales": 4483.03,
        "discount": 0.00,
        "rewards": 0.00,
        "totalsavings": 0.00,
        "items": [
            {
                "itemid": "Snacks.1",
                "quantity": 12,
                "total": 771.84
            },
            {
                "itemid": "Snacks.2",
                "quantity": 12,
                "total": 1104.12
            },
            {
                "itemid": "Snacks.3",
                "quantity": 3,
                "total": 198.99
            },
            {
                "itemid": "Snacks.4",
                "quantity": 10,
                "total": 211.10
            },
            {
                "itemid": "Snacks.5",
                "quantity": 10,
                "total": 331.70
            },
            {
                "itemid": "Snacks.6",
                "quantity": 5,
                "total": 281.40
            },
            {
                "itemid": "Snacks.7",
                "quantity": 3,
                "total": 185.40
            },
            {
                "itemid": "Snacks.8",
                "quantity": 3,
                "total": 231.75
            },
        ]
    },
    {
        "orderId": "ORDHMP-0002",
        "store": 1,
        "location": 2,
        "datetime": "2020/09/16 17:20:03",
        "ordertype": "Delivery",
        "orderstatus": "COMPLETED",
        "numitems": 3,
        "deliveryaddress": "3 Cherry Gardens Drive, Kingston 8",
        "totalcost": 1360.78,
        "netsales": 1240.00,
        "gct": 120.78,
        "totalsales": 1380.78,
        "discount": 20.00,
        "rewards": 0.00,
        "totalsavings": 0.00,
        "totalsavings": 0.00,
        "items": [
            {
                "itemid": "Meats.1",
                "quantity": 4,
                "quantity_d": "lbs",
                "total": 771.84
            },
            {
                "itemid": "Snacks.2",
                "quantity": 2,
                "total": 132.66
            },
            {
                "itemid": "Household.1",
                "quantity": 1,
                "total": 1335.50
            },
        ]
    },
    {
        "orderId": "ORDHMP-0003",
        "reorderid": "ORDHMP-0002",
        "store": 1,
        "location": 1,
        "datetime": "2020/11/06 17:30:03",
        "ordertype": "Delivery",
        "orderstatus": "COMPLETED",
        "numitems": 4,
        "deliveryaddress": "3 Cherry Gardens Drive, Kingston 8",
        "totalcost": 1360.78,
        "netsales": 1240.00,
        "gct": 120.78,
        "totalsales": 1380.78,
        "discount": 20.00,
        "rewards": 0.00,
        "totalsavings": 0.00,
        "totalsavings": 0.00,
        "items": [
            {
                "itemid": "Meats.1",
                "quantity": 4,
                "quantity_d": "lbs",
                "total": 771.84
            },
            {
                "itemid": "Snacks.2",
                "quantity": 2,
                "total": 132.66
            },
            {
                "itemid": "Household.1",
                "quantity": 1,
                "total": 1335.50
            },
        ]

    },
    /*{
        "orderId": "ORDHMP-0004",
        "savedlist": "",
        "reorderid": "",
        "store": "",
        "location": "",
        "datetime": "",
        "ordertype": "",
        "orderstatus": "",
        "numitems": 0,
        "pickuptime": "",
        "deliveryaddress": "",
        "totalcost": 0,
        "netsales": 0,
        "gct": 0,
        "totalsales": 0,
        "discount": 0,
        "rewards": 0,
        "totalsavings": 0,
        "totalsavings": 0,
        "items": [
            {
                "itemid": 0,
                "quantity": 0,
                "total": 0
            }
        ]


    },*/
]

let pickuptimes = {
    "12 - 1 PM": true,
    "1 - 2 PM": true,
    "2 - 3 PM": true,
    "3 - 4 PM": true,
    "4 - 5 PM": true,
    "5 - 6 PM": true,
    "6 - 7 PM": true,
    "7 - 8 PM": true,
    "8 - 9 PM": true
}

//const
let order_sort;
let order_filter_type;
let order_filter_status;
let cus_order_sort;
let currentTab = "ORDERS";
let list = {};
let trolley = {};
let customerName = "Angela";
let adminName = "Dwight";
let shopping_mode;
let selectedStore;
let defaultStore = 1;
let defaultLocationRange = 4;
let list_mode = false;
let currentStore;
let currentAisle;
let currentitem;
let shop_mode;

window.addEventListener('load', () => {
    //handleCollapsibles();
    //getContent();
    loadOrders();
});

function showAdminMenu() {
    const menu = document.getElementById("admin-menu");
    menu.style.visibility = "visible";
    menu.style.width = "5%";
    menu.style.width = "50%";
    menu.style.width = "80%";
}

function closeAdminMenu() {
    const menu = document.getElementById("admin-menu");
    menu.style.width = "50%";
    menu.style.width = "30%";
    menu.style.width = "5%";
    menu.style.visibility = "hidden";
}

function goToAdminMessages() {
    console.log("go to messages");
}

function goToPickupTimes() {
    console.log("pick up ");
}

function updateAdminAppBar(title) {
    const appbarTitle = document.getElementById("admin-appbar-title");
    setContent(appbarTitle, title);
}

function loadOrders() {
    updateAdminAppBar("Orders"); 
    let in_orders = sortAdminOrders(orders);
    displayOrders(in_orders);
}

function displayOrders() {
    //implement
}

function loadPickupTimes() {
    //implement
}

function updatePickupTime(time, avail) {
    pickuptimes[time] = avail;
}

function sortAdminOrders(in_orders) {
    if (order_sort == undefined) {
        order_sort = "time";
    }

    let sort_maps = {
        "time": () => {
            let sub_orders = in_orders;
            return sub_orders.sort(compareOrderTime);
        },
        "location": () => {
            let sub_orders = in_orders;
            return sub_orders.sort(compareDestLocation);
        }
    }

    return sort_maps[order_sort];
}

function sortOrders(in_orders) {
    if (cus_order_sort == undefined) {
        cus_order_sort = "time";
    }

    let sort_maps = {
        "time": () => {
            let sub_orders = in_orders;
            return sub_orders.sort(compareOrderTime);
        },
        "location": () => {
            let sub_orders = in_orders;
            return sub_orders.sort(compareStoreLocation);
        }
    }

    return sort_maps[order_sort];
}

function filterOrderType(in_orders) {
    if (order_filter_type == undefined) {
        order_filter_type = "all";
    }
    let filter_maps = {
        "delivery": () => {
            let sub_orders = [];
            sub_orders.forEach((ord) => {
                if (ord.ordertype === "Delivery") {
                    sub_orders.push(ord);
                }
            });
            return sub_orders;
        },
        "pickup": () => {
            let sub_orders = [];
            sub_orders.forEach((ord) => {
                if (ord.ordertype === "Pickup") {
                    sub_orders.push(ord);
                }
            });
            return sub_orders;
        },
        "all": () => {
            return in_orders;
        }
    }
    return filter_maps[order_filter_type];
}

function filterOrderStauts(in_orders) {
    if (order_filter_type == undefined) {
        order_filter_type = "all";
    }
    let filter_maps = {
        "delivery": () => {
            let sub_orders = [];
            sub_orders.forEach((ord) => {
                if (ord.ordertype === "Delivery") {
                    sub_orders.push(ord);
                }
            });
            return sub_orders;
        },
        "pickup": () => {
            let sub_orders = [];
            sub_orders.forEach((ord) => {
                if (ord.ordertype === "Pickup") {
                    sub_orders.push(ord);
                }
            });
            return sub_orders;
        },
        "all": () => {
            return in_orders;
        }
    }
    return filter_maps[order_filter_type];
}

function compareOrderTime(order1, order2) {
    //implement comparator
}

function compareDestLocation(order1, order2) {
    //implement comparator
}

function compareStoreLocation(order1, order2) {
    //implement comparator
}

function loadMessages() {
    //implement
}

function loadPickupTimes() {
    //implement
}

function loadSavedLists() {
    //implement
}

function loadSavedList(name) {
    //implement
}

function loadEditList(name) {
    //implement
}

function removeFromList(itemObj, name) {
    //implement
}

function addToList(name, itemObj) {

    //implement
}

function loadTrolley() {
    //implement
}

function addToTrolley(itemObj) {
    //implement
}

function removeFromTrolley(itemObj) {
    //implement
}

function viewOrder(orderid) {
    //implement
}

function goToDefaults() {
    //implement
}

function goToMessageStore() {
    //implement
}

function selectStoreToMessage(store) {
    //implement
}

function updatePhoneNumber(num) {
    //implement
}

function updateAddress(address) {
    //implement
}

function showConfirmOrderModal() {
    //implement
}

function closeConfirmOrderModal() {
    //implement
}

function handleAisleCollapsible(store, aisle) {
    //implement
}

function loadSearchPage() {

}

function loadSearchResults() {

}

function selectShopStore(store) {
    //implement
}

function selectShoppingMode(mode) {
    //implement
}

function selectTab(tab) {
    //implement
}

function loadCustorders() {
    //implement
}

function updateTab(tab) {
    //implement
}

function displayTab() {
    //implement
}

function saveList(listObj) {
    //implement
}

function selectItem(itemObj) {
    //implement
}

function viewItem(store, location, aisle, item, mode) {
    //implement
}

function updateItemQuantity(itemObj, cart) {
    //implement
}

function disableItem(element) {
    //implement
}

function showStoreContacts() {
    //implement
}

function editListName(list, new_name) {
    //implement
}

function editCartStore(cart, store) {
    //implement
}

function showDeliveryTile() {
    //implement
}

function showPickupTile() {
    //implement
}

function goToMessage() {
    //implement
}

function updateOrderStatus(orderid, new_status) {
    //implement
}


// Reference Functions //

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
