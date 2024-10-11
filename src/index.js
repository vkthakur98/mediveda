import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";

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
  } else {
    fetch("./pages/main.html")
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        startCounter(document.getElementById("target"), patientCounter, 10000);
        startCounter(document.getElementById("target"), expCounter, 25);
        startScrolling();
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
      if(i>0)
      {
        t_width = t_width - 90;
        document.getElementsByClassName("slide")[
          i
        ].style.transform = `translateX(-${t_width}vw)`;
        document.getElementsByClassName("slide")[
          i - 1
        ].style.transform = `translateX(-${t_width}vw)`;
        
        if(i>0)
        {
            i--;
        }
      }
      
    }
  });
}
