window.addEventListener("load", showSite);

// Lav variablen "button", der henviser til ".toggle-button"
const button = document.querySelector(".toggle_button");
// Lav variablen "button", der henviser til ".toggle-button"
const open_menu = document.querySelector(".open_menu");
// Lav variablen "button", der henviser til ".toggle-button"
const close_menu = document.querySelector(".close_menu");
// Lav variablen "menu", der henviser til "#main-menu"
const menu = document.querySelector("#main_menu");
// Lav variablen "menu", der henviser til ".ul-menu"
const ul_menu = document.querySelector(".menu");

function showSite() {
  console.log("site shown");
}

// Lav funktionen "toggleMenu()"
function toggleMenu() {
  console.log("button clicked");

  // tilføj toggle klassen "show" på menu
  ul_menu.classList.toggle("show");

  // spørg om "menu" i if-sætningen nedenfor
  if (ul_menu.classList.contains("show")) {
    //console.log(ul_menu.classList.contains("show"));

    // sæt bagrundsbilled til "lukke icon", når toggleMenu er "true"
    open_menu.classList.remove("show");
    open_menu.classList.add("hide");

    close_menu.classList.remove("hide");
    close_menu.classList.add("show");

    // sæt boxshadow på menuen
    /* menu.classList.add("box_active"); */
  } else {
    //console.log(ul_menu.classList.contains("show"));

    // sæt bgrundsbilled til "menu icon", når toggleMenu er "false"
    open_menu.classList.remove("hide");
    open_menu.classList.add("show");

    close_menu.classList.remove("show");
    close_menu.classList.add("hide");

    // sæt boxshadow på menuen
    /* menu.classList.remove("box_active"); */
  }
}

// Tilføj et klik-event til "button", der kalder på "toggelMenu" funktionen
button.addEventListener("click", toggleMenu);
