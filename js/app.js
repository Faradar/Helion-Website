const mql = window.matchMedia("(min-width: 37.5em)");
const navList = document.getElementById("nav-list");
const navIcon = document.getElementById("nav-icon");
const navLang = document.getElementById("nav-lang");
const navBtn = document.getElementById("nav-btn");
const backCol = "#000000"; /* Background color variable from scss */
const highCol = "#c2a775"; /* Highlight color variable from scss */
const textCol = "#ffffff"; /* Text color variable from scss */

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
        navIcon.className = "fa fa-bars";
        navLang.style.display = "none";
        navBtn.style.backgroundColor = backCol;
        navBtn.style.color = textCol;

        mouseBtnCol(highCol, textCol);

    } else {
        /* The viewport is 600 pixels wide or less */
        navList.style.display = "none";
        navLang.style.display = "none";
        navBtn.style.backgroundColor = backCol;
        navBtn.style.color = textCol;

        mouseBtnBack(highCol, backCol);
    }
};

/* Display the navbar on click */
/* Changes the icon on click */
function openMenu() {
    if (navList.style.display === "block") {
        navList.style.display = "none";
        navIcon.className = "fa fa-bars";
    } else {
        navList.style.display = "block";
        navIcon.className = "fa fa-times";
    }
}

/* Display the dropdown on click */
/* Changes the styles of the dropdown button on click depending on width */
function openDropdown() {
    if (navLang.style.display === "block") {
        navLang.style.display = "none";

        if (!mql.matches) {
            navBtn.style.backgroundColor = highCol;

            mouseBtnBack(highCol, backCol);

        } else {
            navBtn.style.backgroundColor = backCol;
            navBtn.style.color = highCol;

            mouseBtnCol(highCol, "inherit");
        }

    } else {
        navLang.style.display = "block";

        if (!mql.matches) {
            mouseBtnBack(highCol, highCol);

        } else {
            navBtn.style.color = highCol;

            mouseBtnCol(highCol, highCol);
        }
    }
}