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



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}



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

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

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
