'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
  const expanded = sidebar.classList.contains("active");
  sidebarBtn.setAttribute("aria-expanded", String(expanded));
  sidebarBtn.setAttribute("aria-label", expanded ? "Hide contacts" : "Show contacts");
  sidebarBtn.querySelector("span").textContent = expanded ? "Hide Contacts" : "Show Contacts";
});

// Keep the reading order aligned with the single-column or desktop layout.
const news = document.querySelector("[data-news]");
const sidebarColumn = document.querySelector(".sidebar-column");
const main = document.querySelector("main");
const desktopLayout = window.matchMedia("(min-width: 1250px)");

const placeNews = function () {
  if (desktopLayout.matches) {
    sidebarColumn.append(news);
  } else {
    main.append(news);
  }
};

placeNews();
desktopLayout.addEventListener("change", placeNews);



// theme toggle
const themeToggleBtn = document.querySelector("[data-theme-toggle]");
const themeToggleIcon = document.querySelector("[data-theme-icon]");
const themeToggleState = document.querySelector("[data-theme-state]");

const setTheme = function (mode, persist = true) {
  if (mode === "light") {
    document.documentElement.classList.add("theme-light");
  } else {
    document.documentElement.classList.remove("theme-light");
    mode = "dark";
  }

  if (themeToggleIcon) {
    themeToggleIcon.name = mode === "light" ? "sunny-outline" : "moon-outline";
  }

  if (themeToggleState) {
    themeToggleState.innerText = mode === "light" ? "Day" : "Night";
  }

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute(
      "aria-label",
      mode === "light" ? "Switch to night mode" : "Switch to day mode"
    );
    themeToggleBtn.setAttribute(
      "aria-pressed",
      mode === "light" ? "true" : "false"
    );
  }

  if (persist) {
    try {
      localStorage.setItem("preferred-theme", mode);
    } catch (error) {
      // ignore storage failures (e.g., privacy mode)
    }
  }
};

const storedTheme = (function () {
  try {
    return localStorage.getItem("preferred-theme");
  } catch (error) {
    return null;
  }
})();

const userChoseTheme = storedTheme === "light" || storedTheme === "dark";
setTheme(userChoseTheme ? storedTheme : "dark", false);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    const nextTheme = document.documentElement.classList.contains("theme-light") ? "dark" : "light";
    setTheme(nextTheme);
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const activatePage = function (pageName) {
  for (const page of pages) {
    page.classList.toggle("active", page.dataset.page === pageName);
  }
  for (const link of navigationLinks) {
    const active = link.textContent.trim().toLowerCase() === pageName;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }
};

for (const link of navigationLinks) {
  link.addEventListener("click", function () {
    activatePage(this.textContent.trim().toLowerCase());
    if (window.location.hash === "#focalflow") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  });
}

// A shared conference link always reveals the About page before focusing the panel.
const openConferenceLink = function () {
  if (window.location.hash !== "#focalflow") return;
  activatePage("about");
  const spotlight = document.getElementById("focalflow");
  window.requestAnimationFrame(function () {
    spotlight.focus({ preventScroll: true });
    spotlight.scrollIntoView({ block: "start" });
  });
};

activatePage("about");
openConferenceLink();
window.addEventListener("hashchange", openConferenceLink);
