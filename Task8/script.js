const routes = {
    "/": { template: "./templates/index.html", title: "Home" },
    FAQ: { template: "./templates/FAQ.html", title: "About Us" },
    Contact: { template: "./templates/contact.html", title: "Contact Us" }
};

const locationHandler = async () => {
    var location = window.location.hash.replace("#", "");
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
};

window.addEventListener("hashchange", locationHandler);
locationHandler();