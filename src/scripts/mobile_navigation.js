export function mobile_navigation() {
    //code for navigation
const navs = document.querySelectorAll(".navigation");

//code for resetting menu
function resetMenu() {
    menu.classList.add("hidden");
    menu.classList.remove("block");
    menu_btn.classList.remove("fa-xmark");
    menu_btn.classList.add("fa-bars");
    menuexpand = false;
  }
  

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = e.target.textContent;
    switch (hash) {
      case "Home":
        window.location.href = "";
        resetMenu();
        break;
      case "About Us":
        window.location.href = "about";
        resetMenu();
        break;
      case "Payment":
        window.location.href = "payment-qr";
        resetMenu();
        break;
      case "Contact Us":
          window.location.href = "contact-us";
          resetMenu();
          break;  
      default:
        break;
    }
  });
});
}