const mql = window.matchMedia("(min-width: 37.5em)");
const navList = document.getElementById("nav-list");
const navIcon = document.getElementById("nav-icon");
const navLang = document.getElementById("nav-lang");
const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav-menu");
const backCol = "#000000"; /* Background color variable from scss */
const highCol = "#c2a775"; /* Highlight color variable from scss */
const textCol = "#ffffff"; /* Text color variable from scss */

/* Sets the proper class on startup based on screen width */
if (mql.matches) {
    navList.className = "navbar__list--visible";
} else {
    navList.className = "navbar__list";
}

/* Changes the background color of the button on mouse behaviour */
function mouseBtnBack(a, b) {
    navBtn.onmouseover = () => {
        navBtn.style.backgroundColor = a;
    };

    navBtn.onmouseout = () => {
        navBtn.style.backgroundColor = b;
    };
}

/* Changes the color of the button on mouse behaviour */
function mouseBtnCol(a, b) {
    navBtn.onmouseover = () => {
        navBtn.style.color = a;
    };

    navBtn.onmouseout = () => {
        navBtn.style.color = b;
    };
}

/* Resets styles to default on width change */
mql.onchange = (e) => {
    if (e.matches) {
        /* The viewport is more than 600 pixels wide */
        navList.style.display = "flex";
        navIcon.className = "fa-solid fa-bars";
        navList.className = "navbar__list--visible";
        navLang.className = "navbar__dropdown-items";
        navLang.style.transition = "max-height 0s,transform 0s";
        setTimeout(() => {
            navLang.style.transition = "max-height 1s, transform .8s";
        }, 1);
        navBtn.style.backgroundColor = backCol;
        navBtn.style.color = textCol;
        navMenu.ariaExpanded = "false";
        navList.ariaHidden = "false";
        navBtn.ariaExpanded = "false";

        mouseBtnCol(highCol, textCol);

    } else {
        /* The viewport is 600 pixels wide or less */
        navList.style.display = "none";
        setTimeout(() => {
            navList.style.display = "block";
        }, 1);
        navList.className = "navbar__list";
        navLang.className = "navbar__dropdown-items";
        navBtn.style.backgroundColor = backCol;
        navBtn.style.color = textCol;
        navList.ariaHidden = "true";
        navBtn.ariaExpanded = "false";

        mouseBtnBack(highCol, backCol);
    }
};

/* Display the navbar on click */
/* Changes the icon on click */
function openMenu() {
    if (navList.className === "navbar__list--visible") {
        navList.className = "navbar__list";
        navIcon.className = "fa-solid fa-bars";
        navLang.className = "navbar__dropdown-items";
        navMenu.ariaExpanded = "false";
        navList.ariaHidden = "true";
        navBtn.style.backgroundColor = backCol;
    } else {
        navList.className = "navbar__list--visible";
        navIcon.className = "fa-solid fa-x";
        navMenu.ariaExpanded = "true";
        navList.ariaHidden = "false";
        mouseBtnBack(highCol, backCol);
    }
}

/* Display the dropdown on click */
/* Changes the styles of the dropdown button on click depending on screen width */
function openDropdown() {
    if (navLang.className === "navbar__dropdown-items--visible") {
        navLang.className = "navbar__dropdown-items";
        navBtn.ariaExpanded = "false";

        if (!mql.matches) {
            navBtn.style.backgroundColor = highCol;

            mouseBtnBack(highCol, backCol);

        } else {
            navBtn.style.backgroundColor = backCol;
            navBtn.style.color = highCol;

            mouseBtnCol(highCol, "inherit");
        }

    } else {
        navLang.className = "navbar__dropdown-items--visible";
        navBtn.ariaExpanded = "true";

        if (!mql.matches) {
            mouseBtnBack(highCol, highCol);
        } else {
            navBtn.style.color = highCol;

            mouseBtnCol(highCol, highCol);
        }
    }
}