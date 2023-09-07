const menuIcon = document.getElementById("menu");
const menuSection = document.getElementById("menu_pc");
const mobileMenuSection = document.getElementById("menu_mobile");
const rowright = document.getElementById("icone_right");
const dashboardSection = document.querySelector(".dashboard");
const iconeright3 = document.getElementById("icone_right3");
const menu_nav = document.getElementById("menu_nav");
const menu_mobile3 = document.getElementById("menu_mobile3");

let isMenuVisible = false;


menu_nav.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
        if (!isMenuVisible) {
            menu_mobile3.style.display = "block";
            isMenuVisible = true;
        } else {
            menu_mobile3.style.display = "none";
            isMenuVisible = false;
        }
    }
});

function toggleMenuVisibility() {
    if (window.innerWidth > 600) {
        menu_mobile3.style.display = "none";
        isMenuVisible = false;
    }
}

// Add a resize event listener to handle changes in window size
window.addEventListener("resize", toggleMenuVisibility);

// Initial check to set the initial visibility state
toggleMenuVisibility();

menuIcon.addEventListener("click", () => {
    menuSection.classList.remove("menu-visible");
    menuSection.classList.add("menu-hidden");

    mobileMenuSection.classList.remove("menu-hidden");
    mobileMenuSection.classList.add("menu-visible");

    // Modify the CSS for the .dashboard section
    dashboardSection.classList.add("dashboard-expanded");
});

rowright.addEventListener("click", () => {
    menuSection.classList.remove("menu-hidden");
    menuSection.classList.add("menu-visible");

    mobileMenuSection.classList.remove("menu-visible");
    mobileMenuSection.classList.add("menu-hidden");

    // Revert the CSS for the .dashboard section
    dashboardSection.classList.remove("dashboard-expanded");
});
iconeright3.addEventListener("click", () => {
    if (menu_mobile3.style.display === "none") {
        menu_mobile3.style.display = "block";
    } else {
        menu_mobile3.style.display = "none";
    }
});

