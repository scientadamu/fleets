document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item.has-sub");

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.querySelector(".submenu").style.display = "block";
        });

        item.addEventListener("mouseleave", function () {
            this.querySelector(".submenu").style.display = "none";
        });
    });

    // Handle active menu item selection
    const menuLinks = document.querySelectorAll(".menu-item");

    menuLinks.forEach(menu => {
        menu.addEventListener("click", function () {
            document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const fleetSection = document.getElementById("addFleetSection");
    const openFormBtn = document.getElementById("openAddFleetForm");
    const closeFormBtn = document.getElementById("closeFleetForm");

    openFormBtn.addEventListener("click", function () {
        fleetSection.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable scrolling
    });

    closeFormBtn.addEventListener("click", function () {
        fleetSection.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    });

    // Handle Form Submission
    document.getElementById("addFleetForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const fleetData = {
            fleetName: document.getElementById("fleetName").value,
            fleetGroup: document.getElementById("fleetGroup").value,
            fleetType: document.getElementById("fleetType").value,
            dateFounded: document.getElementById("dateFounded").value,
            contactPerson: document.getElementById("contactPerson").value,
            contactPhone: document.getElementById("contactPhone").value,
            contactEmail: document.getElementById("contactEmail").value,
            taxID: document.getElementById("taxID").value
        };

        console.log("Fleet Data Submitted:", fleetData);

        alert("Fleet Added Successfully!");

        // Close & Reset Form
        fleetSection.style.display = "none";
        document.getElementById("addFleetForm").reset();
        document.body.style.overflow = "auto"; // Enable scrolling after form submission
    });
});