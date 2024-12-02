export function showGoToTop() {
    if (window.scrollY > 400) {
      document.getElementById("go-to-top").classList.remove("hidden");
      document.getElementById("go-to-top").classList.add("flex");
    } else {
      document.getElementById("go-to-top").classList.remove("flex");
      document.getElementById("go-to-top").classList.add("hidden");
    }
  }

  export function goToDiseaseLink()
  {
    const disease_link_list= Array.from(document.getElementsByClassName("disease-link-list"));
    disease_link_list.forEach((link) => {
    link.addEventListener("click", () => {
      link.getAttribute("link")==="azoospermia"? window.location.href="#diseases/maleinfertility/azoospermia": null;
      link.getAttribute("link")==="chronicliverdisease"? window.location.href="#diseases/liverdisorders/chronicliverdisease": null;
      
    });
     });
  }
  