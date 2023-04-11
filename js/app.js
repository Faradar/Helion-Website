const mql = window.matchMedia("(min-width: 37.5em)");
const navList = document.getElementById("nav-list");
const navIcon = document.getElementById("nav-icon");
const navLang = document.getElementById("nav-lang");
const navBtn = document.getElementById("nav-btn");

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
        navBtn.style.backgroundColor = "var(--background-color)";
        navBtn.style.color = "var(--text-color)";

        mouseBtnCol("var(--highlight-color)", "var(--text-color)");

    } else {
        /* The viewport is 600 pixels wide or less */
        navList.style.display = "none";
        navLang.style.display = "none";
        navBtn.style.backgroundColor = "var(--background-color)";
        navBtn.style.color = "var(--text-color)";

        mouseBtnBack("var(--highlight-color)", "var(--background-color)");
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
            navBtn.style.backgroundColor = "var(--highlight-color)";

            mouseBtnBack("var(--highlight-color)", "var(--background-color)");

        } else {
            navBtn.style.backgroundColor = "var(--background-color)";
            navBtn.style.color = "var(--highlight-color)";

            mouseBtnCol("var(--highlight-color)", "inherit");
        }

    } else {
        navLang.style.display = "block";

        if (!mql.matches) {
            mouseBtnBack("var(--highlight-color)", "var(--highlight-color)");

        } else {
            navBtn.style.color = "var(--highlight-color)";

            mouseBtnCol("var(--highlight-color)", "var(--highlight-color)");
        }
    }
}