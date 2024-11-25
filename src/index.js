import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { showGoToTop } from "./scripts/script.js";

AOS.init({
  duration: 2000,
});

let menuexpand = false;
menu_btn.addEventListener("click", (e) => {
  if (menuexpand) {
    menu.classList.add("hidden");
    menu.classList.remove("block");
    e.target.classList.remove("fa-xmark");
    e.target.classList.add("fa-bars");
    menuexpand = false;
  } else {
    menu.classList.remove("hidden");
    menu.classList.add("block");
    e.target.classList.add("fa-xmark");
    e.target.classList.remove("fa-bars");
    menuexpand = true;
  }
});

//code for routing
function loadContent(page) {
  const contentDiv = document.getElementById("content");
  if (page == "about") {
    fetch("./pages/about.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
      });
  } else if (page == "admin") {
    fetch("./admin/login.html")
      .then((response) => response.text())
      .then((data) => {
        document.body.innerHTML = data;
        const loader = document.getElementById("loader");
        async function handleLogin(event) {
          event.preventDefault(); // Prevent the default form submission

          loader.classList.remove("hidden");
          loader.classList.add("flex");
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          // console.log('Username:', username);
          // console.log('Password:', password);

          try {
            const response = await fetch("checkinputs.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password }),
            });

            console.log("Response status:", response.status);
            const data = await response.json(); // Assuming the server returns JSON

            if (response.ok) {
              window.location.href = data.redirect; // Replace with your desired path
            } else {
              document
                .getElementById("login-error-message")
                .classList.remove("hidden");
              document
                .getElementById("login-error-message")
                .classList.add("block");
              document.getElementById("login-error-message").textContent =
                data.message || "Login failed. Please try again.";
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
          } finally {
            loader.classList.remove("flex");
            loader.classList.add("hidden");
          }
        }

        document
          .getElementById("login-button")
          .addEventListener("click", (event) => {
            event.preventDefault();
            handleLogin(event);
          });
      });
  } else if (page == "diseases/maleinfertility/azoospermia") {
    fetch("./diseases/male-infertility/azoospermia.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/maleinfertility/oligospermia") {
    fetch("./diseases/male-infertility/oligo.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/maleinfertility/epididymitis") {
    fetch("./diseases/male-infertility/epididymitis.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/maleinfertility/orchitis") {
    fetch("./diseases/male-infertility/orchitis.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/maleinfertility/funiculitis") {
    fetch("./diseases/male-infertility/funiculitis.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/maleinfertility/retrograde-ejaculation") {
    fetch("./diseases/male-infertility/retrograde-ejaculation.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/maleinfertility/undescended-testicles") {
    fetch("./diseases/male-infertility/undescended-testicles.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/maleinfertility/hormonal-imbalance") {
    fetch("./diseases/male-infertility/hormonal-imbalance.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/liverdisorders/chronicliverdisease") {
    fetch("./diseases/liver-disorders/CLD.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/liverdisorders/fattyliver") {
    fetch("./diseases/liver-disorders/fattyliver.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/liverdisorders/liverfibrosis") {
    fetch("./diseases/liver-disorders/liverfibrosis.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/liverdisorders/livercirrhosis") {
    fetch("./diseases/liver-disorders/livercirrhosis.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/liverdisorders/jaundice") {
    fetch("./diseases/liver-disorders/jaundice.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/liverdisorders/hepatitis") {
    fetch("./diseases/liver-disorders/Hepatitis.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/liverdisorders/heaptomegaly") {
    fetch("./diseases/liver-disorders/Hepatomegaly.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else if (page == "diseases/liverdisorders/liverabscess") {
    fetch("./diseases/liver-disorders/liverabscess.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0;
      });
  } else {
    fetch("./pages/main.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        startCounter(document.getElementById("target"), patientCounter, 10000);
        startCounter(document.getElementById("target"), expCounter, 25);
        startScrolling();
        operateAppointmentWindow();
        document.addEventListener("scroll", showGoToTop);
      });
  }
}

//code for resetting menu
function resetMenu() {
  menu.classList.add("hidden");
  menu.classList.remove("block");
  menu_btn.classList.remove("fa-xmark");
  menu_btn.classList.add("fa-bars");
  menuexpand = false;
}

//code for navigation
const navs = document.querySelectorAll(".navigation");

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = e.target.textContent;
    switch (hash) {
      case "Home":
        window.location.href = "#";
        resetMenu();
        break;
      case "About Us":
        window.location.href = "#about";
        resetMenu();
        break;
      default:
        break;
    }
  });
});

function router() {
  const hash = window.location.hash.substring(1) || "/";
  loadContent(hash === "/" ? "" : hash);

  switch (hash) {
    case "/":
      document.title = "Mediveda-Home"; // Set to your desired title for home
      break;
    case "about":
      document.title = "Mediveda-About Us"; // Set to your desired title for about
      break;
    case "contact":
      document.title = "Mediveda-Contact Us"; // Set to your desired title for contact
      break;
    case "admin":
      document.title = "Mediveda-Admin Login"; // Set to your desired title for contact
      break;
    case "diseases/maleinfertility/azoospermia":
      document.title = "Azoospermia"; // Set to your desired title for contact
      break;
    // Add more cases as needed
    default:
      document.title = "Page Not Found"; // Fallback title for unmatched routes
      break;
  }

  navs.forEach((nav) => {
    if (nav.dataset.page === hash) {
      nav.classList.add("text-[red]");
    } else {
      nav.classList.remove("text-[red]");
    }
  });
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function patientCounter(maxNumber) {
  let currentCount = 0;
  const counterElement = document.getElementById("p-counter");
  const interval = setInterval(() => {
    if (currentCount < maxNumber) {
      currentCount += 100;
      counterElement.innerText = currentCount;
    } else {
      clearInterval(interval);
    }
  }, 50); // Adjust the delay (in milliseconds) as needed
}

function expCounter(maxNumber) {
  let currentCount = 0;
  const counterElement = document.getElementById("c-counter");
  const interval = setInterval(() => {
    if (currentCount < maxNumber) {
      currentCount++;
      counterElement.innerText = currentCount;
    } else {
      clearInterval(interval);
    }
  }, 100); // Adjust the delay (in milliseconds) as needed
}

function startCounter(targetElement, counterFunction, maxNumber) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counterFunction(maxNumber); // Change this number as needed
        observer.unobserve(entry.target); // Stop observing once it has counted
      }
    });
  });

  observer.observe(targetElement);
}

function startScrolling() {
  let startX,
    endX,
    t_width = 0;
  let slides = document.querySelectorAll(".slide");
  let i = 0;
  const slider = document.querySelector("#slider");
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    // console.log( `this is endx ${endX}`)
    let difference = startX - endX;
    // console.log(difference)
    if (difference > 0) {
      if (i < 2) {
        t_width = t_width + 90;
        document.getElementsByClassName("slide")[
          i
        ].style.transform = `translateX(-${t_width}vw)`;
        document.getElementsByClassName("slide")[
          i + 1
        ].style.transform = `translateX(-${t_width}vw)`;
        if (i < 2) {
          i++;
        }
      }
    } else {
      if (i > 0) {
        t_width = t_width - 90;
        document.getElementsByClassName("slide")[
          i
        ].style.transform = `translateX(-${t_width}vw)`;
        document.getElementsByClassName("slide")[
          i - 1
        ].style.transform = `translateX(-${t_width}vw)`;

        if (i > 0) {
          i--;
        }
      }
    }
  });
}

const disease_menu_overlay = document.getElementById("disease_menu_overlay");
const disease_menu_item = document.getElementById("disease_menu_item");
const disease_menu = document.getElementById("disease_menu");

document.getElementById("copyright-content").innerHTML =
  "Copyright " + new Date().getFullYear() + " © Mediveda. All Rights Reserved.";

disease_menu.addEventListener("mouseenter", (e) => {
  disease_menu_overlay.classList.remove("hidden");
  disease_menu_overlay.classList.add("block");
});

disease_menu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!disease_menu_overlay.matches(":hover")) {
      disease_menu_overlay.classList.add("hidden");
    }
  }, 200);
});

disease_menu_overlay.addEventListener("mouseleave", (e) => {
  disease_menu_overlay.classList.remove("block");
  disease_menu_overlay.classList.add("hidden");
});

const disease_menu_btn_mob = document.getElementById("mobile-disease-menu");
const disease_menu_mobile = document.getElementById("disease-menu-mobile");
let menu_open = false;
disease_menu_btn_mob.addEventListener("click", () => {
  if (menu_open) {
    disease_menu_mobile.classList.remove("block");
    disease_menu_mobile.classList.add("hidden");
    document
      .getElementById("mobile-disease-menu-icon")
      .classList.remove("fa-angle-up");
    document
      .getElementById("mobile-disease-menu-icon")
      .classList.add("fa-angle-down");
    menu_open = false;
  } else {
    disease_menu_mobile.classList.remove("hidden");
    disease_menu_mobile.classList.add("block");
    document
      .getElementById("mobile-disease-menu-icon")
      .classList.remove("fa-angle-down");
    document
      .getElementById("mobile-disease-menu-icon")
      .classList.add("fa-angle-up");
    menu_open = true;
  }
});

const categories = Array.from(
  document.getElementsByClassName("disease-category")
);
const sub_menus = Array.from(
  document.getElementsByClassName("disease-sub-menu")
);
const sub_menu_icons = Array.from(
  document.getElementsByClassName("disease-sub-menu-icon")
);

categories.forEach((cat, index) => {
  cat.addEventListener("click", () => {
    const isOpen = sub_menus[index].classList.contains("block");

    // Close all sub-menus first
    sub_menus.forEach((sub_menu, idx) => {
      if (idx !== index) {
        sub_menu.classList.add("hidden");
        sub_menu.classList.remove("block");
        sub_menu_icons[idx].classList.remove("fa-angle-up");
        sub_menu_icons[idx].classList.add("fa-angle-down");
      }
    });

    // Toggle the clicked sub-menu
    if (isOpen) {
      sub_menus[index].classList.add("hidden");
      sub_menus[index].classList.remove("block");
      sub_menu_icons[index].classList.remove("fa-angle-up");
      sub_menu_icons[index].classList.add("fa-angle-down");
    } else {
      sub_menus[index].classList.add("block");
      sub_menus[index].classList.remove("hidden");
      sub_menu_icons[index].classList.remove("fa-angle-down");
      sub_menu_icons[index].classList.add("fa-angle-up");
    }
  });
});

const disease_link = Array.from(document.getElementsByClassName("disease-link"));

disease_link.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("block");
    menu_btn.classList.remove("fa-xmark");
    menu_btn.classList.add("fa-bars");
    menuexpand = false;
  })
})

function operateAppointmentWindow() {
  let appointment_window = document.getElementById("appointment-window");
  document.getElementById("appointment-btn").addEventListener("click", () => {
    appointment_window.classList.add("flex");
    appointment_window.classList.remove("hidden");
  });

  document.getElementById("appointment-btn2").addEventListener("click", () => {
    appointment_window.classList.add("flex");
    appointment_window.classList.remove("hidden");
  });

  document
    .querySelector("#apmnt-window-closer")
    .addEventListener("click", () => {
      appointment_window.classList.add("hidden");
      appointment_window.classList.remove("flex");
    });

  window.addEventListener("click", (e) => {
    if (e.target == appointment_window) {
      appointment_window.classList.add("hidden");
      appointment_window.classList.remove("flex");
    }
  });
}


const disease_btns = Array.from(document.getElementsByClassName("disease"));

disease_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    disease_menu_overlay.classList.add("hidden");
  });
});
