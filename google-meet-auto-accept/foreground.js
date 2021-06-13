const admit = () => {
    const x = document.querySelectorAll("div");
    for (let i = 0; i < x.length; i++) {
        if (x[i].innerText == "View all") {
            x[i].click();
            console.log("Viewed all");
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (x[i].innerText == "Admit") {
            x[i].click();
        }
    }
}

setInterval(admit, 5000);