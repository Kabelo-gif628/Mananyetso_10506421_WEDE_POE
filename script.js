

// Wait until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function () {

const page = decodeURIComponent(window.location.pathname).toLowerCase();

    // 1. HOME PAGE (index.html)

    const isHomePage =
        page.endsWith("/") ||
        page.endsWith("/index.html") ||
        page === "index.html";

    if (isHomePage) {

        console.log("Welcome to K&T Electricians!");

        // Welcome message
        if (!document.getElementById("ktWelcome")) {

            const welcome = document.createElement("div");

            welcome.id = "ktWelcome";

            welcome.textContent =
                "Welcome to K&T Electricians! How can we help you today?";

            welcome.style.cssText =
                "background:#198754;color:white;padding:15px;" +
                "text-align:center;font-size:18px;border-radius:8px;margin:10px;";

            document.body.prepend(welcome);

            // Live date and time
            const clock = document.createElement("div");

            clock.id = "ktClock";

            clock.style.cssText =
                "text-align:center;padding:10px;color:#198754;font-weight:bold;";

            welcome.after(clock);

            function updateClock() {
                clock.textContent =
                    "Current date and time: " +
                    new Date().toLocaleString();
            }

            updateClock();

            window.setInterval(updateClock, 1000);
        }

        // Service search
        if (!document.getElementById("ktServiceSearchBox")) {

            const searchBox = document.createElement("div");

            searchBox.id = "ktServiceSearchBox";

            searchBox.style.cssText =
                "text-align:center;padding:15px;";

            searchBox.innerHTML = `
                <h3>Search Our Services</h3>

                <input
                    type="search"
                    id="serviceSearch"
                    placeholder="Type repairs or inspections"
                >

                <button id="searchButton" type="button">
                    Search
                </button>

                <ul id="searchResult"
                    style="list-style:none;padding:0;">
                </ul>
            `;

            const clock = document.getElementById("ktClock");

            if (clock) {
                clock.after(searchBox);
            } else {
                document.body.appendChild(searchBox);
            }

            const serviceSearch =
                searchBox.querySelector("#serviceSearch");

            const searchResult =
                searchBox.querySelector("#searchResult");

            const searchButton =
                searchBox.querySelector("#searchButton");

            const services = [
                "Electrical wiring",
                "Electrical repairs",
                "Electrical maintenance",
                "Electrical Inspection",
                "Fault finding"
            ];

            // Service links
            function getServiceLink(service) {

                const name = service.toLowerCase();

                if (
                    name.includes("inspection") ||
                    name.includes("fault finding") ||
                    name.includes("checking") ||
                    name.includes("panels") ||
                    name.includes("electrical faults")
                ) {
                    return "service.html#inspection";
                }

                if (
                    name.includes("repair") ||
                    name.includes("resetting") ||
                    name.includes("loose plug") ||
                    name.includes("extension")
                ) {
                    return "service.html#repairs";
                }

                if (
                    name.includes("maintenance") ||
                    name.includes("installation") ||
                    name.includes("switches")
                ) {
                    return "service.html#maintenance";
                }

                return "service.html#wiring";
            }

            // Search function
            function searchServices() {

                const query =
                    serviceSearch.value.trim().toLowerCase();

                searchResult.replaceChildren();

                if (query === "") {

                    const item = document.createElement("li");

                    item.textContent =
                        "Please enter a service to search for.";

                    searchResult.appendChild(item);

                    return;
                }

                const matches = services.filter(function (service) {

                    return service.toLowerCase().includes(query);

                });

                if (matches.length === 0) {

                    const item = document.createElement("li");

                    item.textContent =
                        "No matching services found.";

                    searchResult.appendChild(item);

                    return;
                }

                matches.forEach(function (service) {

                    const item = document.createElement("li");

                    const link = document.createElement("a");

                    link.textContent = service;

                    link.href = getServiceLink(service);

                    link.style.cssText =
                        "color:#198754;text-decoration:underline;cursor:pointer;";

                    item.style.padding = "5px";

                    item.appendChild(link);

                    searchResult.appendChild(item);

                });
            }

            searchButton.addEventListener(
                "click",
                searchServices
            );

            serviceSearch.addEventListener("keydown", function (event) {

                if (event.key === "Enter") {
                    searchServices();
                }

            });
        }

        // Header and navigation adjustments
        document.body.style.paddingTop = "10px";

        const header =
            document.querySelector(".logo-section");

        const navigation =
            document.querySelector(".navigation-table");

        if (header) {

            header.style.position = "relative";

            header.style.height = "auto";
        }

        if (navigation) {

            navigation.style.position = "relative";

            navigation.style.top = "auto";

            navigation.style.left = "auto";

            navigation.style.margin = "20px auto";
        }
    }


    // 2. ABOUT US PAGE (about.html)

    if (
    page.endsWith("about.html") ||
    page.endsWith("/about")
) {

        console.log("About Us page loaded successfully!");

        const headings = document.querySelectorAll(
            ".mission h3, .vision h3"
        );

        headings.forEach(function (heading) {

            const paragraph = heading.nextElementSibling;

            if (!paragraph) return;

            heading.style.cursor = "pointer";

            heading.setAttribute("aria-expanded", "true");

            heading.addEventListener("click", function () {

                const isHidden =
                    window.getComputedStyle(paragraph).display === "none";

                paragraph.style.display =
                    isHidden ? "block" : "none";

                heading.setAttribute(
                    "aria-expanded",
                    String(isHidden)
                );

            });

        });
    }



    // 3. SERVICES PAGE (service.html)


    if (
    page.endsWith("service.html") ||
    page.endsWith("/service")
) {

        const headings = document.querySelectorAll("h3");

        headings.forEach(function (heading) {

            const list = heading.nextElementSibling;

            if (!list) return;

            heading.style.cursor = "pointer";

            heading.addEventListener("click", function () {

                const isHidden =
                    window.getComputedStyle(list).display === "none";

                list.style.display =
                    isHidden ? "block" : "none";

            });

        });
    }


    
    // 4. CONTACT US PAGE

if (
    page.endsWith("contact.html") ||
    page.endsWith("contact us.html")
) {

        const contactForm =
            document.getElementById("contactForm");

        if (contactForm) {

            contactForm.addEventListener("submit", function (event) {

                const nameField =
                    document.getElementById("contactName");

                const emailField =
                    document.getElementById("contactEmail");

                const messageField =
                    document.getElementById("contactMessage");

                const name =
                    nameField ? nameField.value.trim() : "";

                const email =
                    emailField ? emailField.value.trim() : "";

                const message =
                    messageField ? messageField.value.trim() : "";

                if (!name || !email || !message) {

                    event.preventDefault();

                    alert("Please fill in all the fields.");

                } else {

                    event.preventDefault();

                    alert(
                        "Thank you! Your message has been checked."
                    );
                }

            });
        }
        // GOOGLE MAPS - CONTACT PAGE

const map = document.getElementById("map");

if (map) {

    map.innerHTML = `
        <iframe
            src="https://maps.google.com/maps?q=Silverton,Pretoria,South Africa&z=14&output=embed"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            title="Silverton Pretoria Map">
        </iframe>
    `;

    console.log("Silverton Google Map displayed!");
}

    }


    
    // 5. ENQUIRY PAGE (enquire.html)

if (
    page.endsWith("enquire.html") ||
    page.endsWith("enquiry.html") ||
    page.endsWith("/enquire")
) {

        const enquiryForm =
            document.getElementById("enquireForm") ||
            document.querySelector("form");

        if (enquiryForm) {

            enquiryForm.addEventListener("submit", function (event) {

                event.preventDefault();

                const nameField =
                    document.getElementById("name");

                const phoneField =
                    document.getElementById("phone");

                const emailField =
                    document.getElementById("email");

                const enquiryField =
                    document.getElementById("enquire");

                const name =
                    nameField ? nameField.value.trim() : "";

                const phone =
                    phoneField ? phoneField.value.trim() : "";

                const email =
                    emailField ? emailField.value.trim() : "";

                const enquiry =
                    enquiryField ? enquiryField.value.trim() : "";

                if (
                    !enquiryForm.checkValidity() ||
                    !name ||
                    !phone ||
                    !email ||
                    !enquiry
                ) {

                    enquiryForm.reportValidity();

                    return;
                }

                let formMessage =
                    document.getElementById("formMessage");

                if (!formMessage) {

                    formMessage =
                        document.createElement("div");

                    formMessage.id = "formMessage";

                    enquiryForm.insertAdjacentElement(
                        "afterend",
                        formMessage
                    );
                }

                formMessage.textContent =
                    "Thank you! Your enquiry has been submitted successfully. " +
                    "K&T Electricians appreciates your interest.";

                formMessage.style.cssText =
                    "color:#198754;font-weight:bold;text-align:center;" +
                    "padding:25px;font-size:20px;";

                enquiryForm.style.display = "none";

            });
        }
    }

// 6. ANIMATIONS AND TRANSITIONS


// Add smooth transitions to website elements

const animatedElements = document.querySelectorAll(
    "button, img, a"
);

animatedElements.forEach(function (element) {

    element.style.transition = "all 0.3s ease";

    element.addEventListener("mouseenter", function () {

        element.style.transform = "scale(1.05)";

    });

    element.addEventListener("mouseleave", function () {

        element.style.transform = "scale(1)";

    });

});

console.log("Website animations loaded successfully!");

const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.createElement("div");
lightbox.id = "imageLightbox";

lightbox.style.cssText = `
    display: none;
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    justify-content: center;
    align-items: center;
`;

const enlargedImage = document.createElement("img");
enlargedImage.style.cssText = `
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
`;

const backButton = document.createElement("button");
backButton.textContent = "← Back";

backButton.style.cssText = `
    position: fixed;
    z-index: 1000000;
    top: 25px;
    left: 25px;
    padding: 14px 25px;
    background: #198754;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;

lightbox.appendChild(enlargedImage);
lightbox.appendChild(backButton);
document.body.appendChild(lightbox);

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        enlargedImage.src = image.src;
        lightbox.style.display = "flex";
    });
});

function closeLightbox() {
    lightbox.style.display = "none";
    enlargedImage.src = "";
}

backButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});


});




