export function showGoToTop() {
    if (window.scrollY > 400) {
      document.getElementById("go-to-top").classList.remove("hidden");
      document.getElementById("go-to-top").classList.add("flex");
    } else {
      document.getElementById("go-to-top").classList.remove("flex");
      document.getElementById("go-to-top").classList.add("hidden");
    }
  }


  