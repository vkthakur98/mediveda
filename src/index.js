import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { showGoToTop } from "./scripts/gtp.js";
import { bookAppointment } from "./scripts/book_appointment.js";
import { mobile_navigation } from "./scripts/mobile_navigation.js";
import { patientCounter, expCounter, startCounter} from "./scripts/counter.js"
import disease_router from "./scripts/disease_router.js";
import updateIsdCode from "./scripts/updateIsdCode.js";



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

function router() {
  // Get the current path, defaulting to "/" if none is present
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '') || '/';
  
  // Load content based on the path (root or specific page)
  loadContent(path === "" || path === "/" ? "" : path);

  // Update the document title based on the path
  switch (path) {
    case "/":
      document.title = "Ayurvedic treatment by Mediveda"; // Title for home page
      document.querySelector("#home-label").style.color = "#ffa16f";
      break;
    case "about":
      document.title = "Mediveda - About Us"; // Title for about page
      document.querySelector("#about-us-label").style.color = "#ffa16f";
      break;
    case "contact-us":
      document.title = "Mediveda - Contact Us"; // Title for contact page
      document.querySelector("#contact-label").style.color = "#ffa16f";
      break;
    case "admin":
      document.title = "Mediveda - Admin Login"; // Title for admin login page
      break;
    case "payment-qr":
      document.title = "Mediveda - Payement"; // Title for admin login page
      document.querySelector("#payment-label").style.color = "#ffa16f";
      break;
    default:
      document.title = "Mediveda - Diseases"; // Fallback title for unknown routes
      break;
  }
}

function navigateTo(path) {
  history.pushState(null, null, path); // Update the URL without a page reload
  router(); // Run the router function after navigation
}

window.addEventListener("popstate", router);
window.addEventListener("load", router);


function loadContent(page) {
  const contentDiv = document.getElementById("content");

  // Define page mappings to the correct HTML files for each section
   const pageMap = {
    "about": "./pages/about.html",
    "contact-us": "./pages/contactus.html",
    "payment-qr": "./pages/payment.html",
    "adminlogin": "./admin/login.html",
    "azoospermia-ayurvedic-treatment": "./diseases/male-infertility/azoospermia.html",
    "epididymitis-ayurvedic-treatment": "./diseases/male-infertility/epididymitis.html",
    "funiculitis-ayurvedic-treatment": "./diseases/male-infertility/funiculitis.html",
    "hormonal-imbalances-ayurvedic-treatment": "./diseases/male-infertility/hormonal-imbalance.html",
    "oligospermia-ayurvedic-treatment": "./diseases/male-infertility/oligo.html",
    "orchitis-ayurvedic-treatment": "./diseases/male-infertility/orchitis.html",
    "retrograde-ejaculation-ayurvedic-treatment": "./diseases/male-infertility/retrograde-ejaculation.html",
    "undescended-testis-ayurvedic-treatment": "./diseases/male-infertility/undescended-testicles.html",
    "endometriosis-ayurvedic-treatment": "./diseases/female-infertility/Endometriosis.html",
    "hormonal-imbalance-female-ayurvedic-treatment": "./diseases/female-infertility/Hormonal-Imbalance.html",
    "irregular-menstruation-ayurvedic-treatment": "./diseases/female-infertility/Irregular-Menstruation.html",
    "ovulation-problems-ayurvedic-treatment": "./diseases/female-infertility/Ovulation-Problems.html",
    "pcod-ayurvedic-treatment": "./diseases/female-infertility/PCOD.html",
    "white-discharge-ayurvedic-treatment": "./diseases/female-infertility/White-Discharge.html",
    "pelvic-inflammatory-disease-ayurvedic-treatment": "./diseases/female-infertility/PID.html",
    "uterine-fibroids-ayurvedic-treatment": "./diseases/female-infertility/Uterine-Fibroids.html",
    "arthritis-ayurvedic-treatment": "./diseases/joint/Arthritis.html",
    "cervical-ayurvedic-treatment": "./diseases/joint/Cervical.html",
    "gout-ayurvedic-treatment": "./diseases/joint/Gout.html",
    "osteoarthritis-ayurvedic-treatment": "./diseases/joint/Osteoarthritis.html",
    "rheumatoid-arthritis-ayurvedic-treatment": "./diseases/joint/Rheumatoid_Arthritis.html",
    "sciatica-ayurvedic-treatment": "./diseases/joint/Sciatica.html",
    "spondylitis-ayurvedic-treatment": "./diseases/joint/Spondylitis.html",
    "acute-kidney-disorder-ayurvedic-treatment": "./diseases/kidney-disorders/AKD.html",
    "chronic-kidney-disorder-ayurvedic-treatment": "./diseases/kidney-disorders/CKD.html",
    "igA-nephropathy-ayurvedic-treatment": "./diseases/kidney-disorders/igA.html",
    "kidney-stones-ayurvedic-treatment": "./diseases/kidney-disorders/kidneystone.html",
    "polycystic-kidney-disorder-ayurvedic-treatment": "./diseases/kidney-disorders/PKD.html",
    "proteinuria-ayurvedic-treatment": "./diseases/kidney-disorders/proteinuria.html",
    "urinary-tract-obstruction-ayurvedic-treatment": "./diseases/kidney-disorders/UTO.html",
    "diabetes-ayurvedic-treatment": "./diseases/lifestyle-disorders/Diabetes.html",
    "erectile-dysfunction-ayurvedic-treatment": "./diseases/lifestyle-disorders/Erectile-Dysfunction.html",
    "gallbladder-stones-ayurvedic-treatment": "./diseases/lifestyle-disorders/GBS.html",
    "high-blood-pressure-ayurvedic-treatment": "./diseases/lifestyle-disorders/HTN.html",
    "hydrocele-ayurvedic-treatment": "./diseases/lifestyle-disorders/Hydrocele.html",  
    "infection-ayurvedic-treatment": "./diseases/lifestyle-disorders/Infection.html",
    "piles-ayurvedic-treatment": "./diseases/lifestyle-disorders/Piles.html",
    "obesity-ayurvedic-treatment": "./diseases/lifestyle-disorders/Obesity.html",
    "premature-ejaculation-ayurvedic-treatment": "./diseases/lifestyle-disorders/Premature-Ejaculation.html",
    "urinary-tract-infection-ayurvedic-treatment": "./diseases/lifestyle-disorders/UTI.html",
    "varicocele-ayurvedic-treatment": "./diseases/lifestyle-disorders/Varicocele.html",
    "chronic-liver-disorder-ayurvedic-treatment": "./diseases/liver-disorders/CLD.html",
    "fatty-liver-ayurvedic-treatment": "./diseases/liver-disorders/fattyliver.html",
    "hepatitis-ayurvedic-treatment": "./diseases/liver-disorders/Hepatitis.html",
    "hepatomegaly-ayurvedic-treatment": "./diseases/liver-disorders/Hepatomegaly.html",
    "jaundice-ayurvedic-treatment": "./diseases/liver-disorders/jaundice.html",
    "liver-abscess-ayurvedic-treatment": "./diseases/liver-disorders/liverabscess.html",
    "liver-cirrhosis-ayurvedic-treatment": "./diseases/liver-disorders/livercirrhosis.html",
    "liver-fibrosis-ayurvedic-treatment": "./diseases/liver-disorders/liverfibrosis.html",
    "acne-ayurvedic-treatment": "./diseases/skin-disorders/Acne.html",
    "dermatitis-ayurvedic-treatment": "./diseases/skin-disorders/Dermatitis.html",
    "eczema-ayurvedic-treatment": "./diseases/skin-disorders/Eczema.html",
    "hives-ayurvedic-treatment": "./diseases/skin-disorders/hives.html",
    "psoriasis-ayurvedic-treatment": "./diseases/skin-disorders/Psoriasis.html",
    "vitiligo-ayurvedic-treatment": "./diseases/skin-disorders/Vitiligo.html",
    "warts-ayurvedic-treatment": "./diseases/skin-disorders/Warts.html",
    "terms-and-conditions": "./pages/termsandcondition.html",
    "privacy-policy": "./pages/privacypolicy.html",
    "": "./pages/main.html" // Home page
  };

  
  // Fetch the content based on the path, fallback to home if no match
  const pagePath = pageMap[page] || pageMap[""];  
  console.log(pagePath)
  fetch(pagePath)
    .then((response) => response.text())
    .then((data) => {
        if(pagePath === "./pages/about.html" || pagePath==="./pages/payment.html" || pagePath==="./pages/contactus.html" || pagePath==="./pages/termsandcondition.html" || pagePath==="./pages/privacypolicy.html"){
        contentDiv.innerHTML = data;
        document.getElementById("loader_main").classList.add("hidden");
        document.getElementById("loader_main").classList.remove("flex");
        document.documentElement.scrollTop = 0; // Scroll to top after loading content     
        }
        else if(pagePath==="./admin/login.html")
        {
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
              const response = await fetch("https://mediveda.in/checkinputs.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
              });
  
              console.log("Response status:", response.status);
              const data = await response.json(); 
  
              if (response.ok) {
                window.location.href = data.redirect; 
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
        }
        else if(pagePath==="./pages/main.html"){
        contentDiv.innerHTML = data;
        document.getElementById("loader_main").classList.add("hidden");
        document.getElementById("loader_main").classList.remove("flex");
        document.documentElement.scrollTop = 0; // Scroll to top after loading content
        startCounter(document.getElementById("target"), patientCounter, 10000);
        startCounter(document.getElementById("target"), expCounter, 25);
        startScrolling();
        disease_router();
        operateAppointmentWindow();
        bookAppointment();
        updateIsdCode(); 
        document.addEventListener("scroll", showGoToTop);
        document.getElementsByClassName("disease") 
        }
        else
        {
        contentDiv.innerHTML = data;
        document.getElementById("loader_main").classList.add("hidden");
        document.getElementById("loader_main").classList.remove("flex");
        document.documentElement.scrollTop = 0; // Scroll to top after loading content
        document.querySelector("#disease_menu").style.color="#ffa16f";
        operateAppointmentWindow();
        bookAppointment();
        document.title = page;
        }   
    })
    .catch((error) => {
      // Handle errors (e.g., page not found)
      contentDiv.innerHTML = "<p>Sorry, the page you're looking for doesn't exist.</p>";
      console.error('Error loading content:', error);
    });
}
  
 


//code for routing
// function loadContent(page) {
//   const contentDiv = document.getElementById("content");
//   if (page == "about") {
//     fetch("./pages/about.html")
//       .then((response) => response.text())
//       .then((data) => {
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//       });
//   } else if (page == "admin") {
//     fetch("./admin/login.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.body.innerHTML = data;
//         const loader = document.getElementById("loader");
//         async function handleLogin(event) {
//           event.preventDefault(); // Prevent the default form submission

//           loader.classList.remove("hidden");
//           loader.classList.add("flex");
//           const username = document.getElementById("username").value;
//           const password = document.getElementById("password").value;

//           // console.log('Username:', username);
//           // console.log('Password:', password);

//           try {
//             const response = await fetch("checkinputs.php", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ username, password }),
//             });

//             console.log("Response status:", response.status);
//             const data = await response.json(); 

//             if (response.ok) {
//               window.location.href = data.redirect; 
//             } else {
//               document
//                 .getElementById("login-error-message")
//                 .classList.remove("hidden");
//               document
//                 .getElementById("login-error-message")
//                 .classList.add("block");
//               document.getElementById("login-error-message").textContent =
//                 data.message || "Login failed. Please try again.";
//             }
//           } catch (error) {
//             console.error("Error:", error);
//             alert("An error occurred. Please try again.");
//           } finally {
//             loader.classList.remove("flex");
//             loader.classList.add("hidden");
//           }
//         }

//         document
//           .getElementById("login-button")
//           .addEventListener("click", (event) => {
//             event.preventDefault();
//             handleLogin(event);
//           });
//       });
//   } 
//   else if (page == "diseases/maleinfertility/azoospermia") {
//     fetch("./diseases/male-infertility/azoospermia.html")
//       .then((response) => response.text())
//       .then((data) => {document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/maleinfertility/oligospermia") {
//     fetch("./diseases/male-infertility/oligo.html")
//       .then((response) => response.text())
//       .then((data) => {document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "payment/QR_MD76XLMNS3298SLLSIEMN7") {
//     document.getElementById("loader_main").classList.add("flex");
//     document.getElementById("loader_main").classList.remove("hidden");
//     fetch("./pages/payment.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//       });
//   }
//   else if (page == "contact-us") {
//     fetch("./pages/contactus.html")
//       .then((response) => response.text())
//       .then((data) => {document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//       });
//   }
//   else if (page == "diseases/maleinfertility/epididymitis") {
//     fetch("./diseases/male-infertility/epididymitis.html")
//       .then((response) => response.text())
//       .then((data) => {document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/maleinfertility/orchitis") {
//     fetch("./diseases/male-infertility/orchitis.html")
//       .then((response) => response.text())
//       .then((data) => {document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/maleinfertility/funiculitis") {
//     fetch("./diseases/male-infertility/funiculitis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//       document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//   } else if (page == "diseases/maleinfertility/retrograde-ejaculation") {
//     fetch("./diseases/male-infertility/retrograde-ejaculation.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/maleinfertility/undescended-testicles") {
//     fetch("./diseases/male-infertility/undescended-testicles.html")
//       .then((response) => response.text())
//       .then((data) => {
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/maleinfertility/hormonal-imbalance") {
//     fetch("./diseases/male-infertility/hormonal-imbalance.html")
//       .then((response) => response.text())
//       .then((data) => {
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//       });
//   } else if (page == "diseases/liverdisorders/chronicliverdisease") {
//     fetch("./diseases/liver-disorders/CLD.html")
//       .then((response) => response.text())
//       .then((data) => {
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/liverdisorders/fattyliver") {
//     fetch("./diseases/liver-disorders/fattyliver.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/liverdisorders/liverfibrosis") {
//     fetch("./diseases/liver-disorders/liverfibrosis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/liverdisorders/livercirrhosis") {
//     fetch("./diseases/liver-disorders/livercirrhosis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/liverdisorders/jaundice") {
//     fetch("./diseases/liver-disorders/jaundice.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/liverdisorders/hepatitis") {
//     fetch("./diseases/liver-disorders/Hepatitis.html")
    
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/liverdisorders/heaptomegaly") {
//     fetch("./diseases/liver-disorders/Hepatomegaly.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   } else if (page == "diseases/liverdisorders/liverabscess") {
//     fetch("./diseases/liver-disorders/liverabscess.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }else if (page == "diseases/skindisorders/psoriasis") {
//     fetch("./diseases/skin-disorders/Psoriasis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/skindisorders/vitiligo") {
//     fetch("./diseases/skin-disorders/Vitiligo.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/skindisorders/acne") {
//     fetch("./diseases/skin-disorders/Acne.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/skindisorders/dermatitis") {
//     fetch("./diseases/skin-disorders/Dermatitis.html")
//       .then((response) => response.text())
//       .then((data) => {document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/skindisorders/hives") {
//     fetch("./diseases/skin-disorders/hives.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/skindisorders/warts") {
//     document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//     fetch("./diseases/skin-disorders/Warts.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/skindisorders/eczema") {
//     fetch("./diseases/skin-disorders/Eczema.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/kidneydisorders/pkd") {
//     fetch("./diseases/kidney-disorders/PKD.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/kidneydisorders/ckd") {
//     fetch("./diseases/kidney-disorders/CKD.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/kidneydisorders/akd") {
//     fetch("./diseases/kidney-disorders/AKD.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/kidneydisorders/iga") {
//     fetch("./diseases/kidney-disorders/igA.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/kidneydisorders/kidneystones") {
//     fetch("./diseases/kidney-disorders/kidneystone.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/kidneydisorders/uto") {
//     fetch("./diseases/kidney-disorders/UTO.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/kidneydisorders/proteinuria") {
//     fetch("./diseases/kidney-disorders/Proteinuria.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/jointneuralpain/arthritis") {
//     fetch("./diseases/joint/Arthritis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/jointneuralpain/gout") {
//     fetch("./diseases/joint/Gout.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
// else if (page == "diseases/jointneuralpain/sciatica") {
//   fetch("./diseases/joint/Sciatica.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("loader_main").classList.add("hidden");
//       document.getElementById("loader_main").classList.remove("flex");
//       contentDiv.innerHTML = data;
//       document.documentElement.scrollTop = 0;
//       operateAppointmentWindow();
//         bookAppointment();
//     });
// }
//   else if (page == "diseases/jointneuralpain/rheumatoidarthritis") {
//     fetch("./diseases/joint/Rheumatoid_Arthritis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/jointneuralpain/osteoarthritis") {
//     fetch("./diseases/joint/Osteoarthritis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/jointneuralpain/spondylitis") {
//     fetch("./diseases/joint/Spondylitis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/jointneuralpain/spondylitis") {
//     fetch("./diseases/joint/Spondylitis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/jointneuralpain/cervical") {
//     fetch("./diseases/joint/Cervical.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/femaleinfertility/pcod") {
//     fetch("./diseases/female-infertility/PCOD.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/femaleinfertility/endometriosis") {
//     fetch("./diseases/female-infertility/Endometriosis.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/femaleinfertility/hormonalimbalance") {
//     fetch("./diseases/female-infertility/Hormonal-Imbalance.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/femaleinfertility/irregularmenstruation") {
//     fetch("./diseases/female-infertility/Irregular-Menstruation.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/femaleinfertility/uterinefibroids") {
//     fetch("./diseases/female-infertility/Uterine-Fibroids.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/femaleinfertility/ovulationproblems") {
//     fetch("./diseases/female-infertility/Ovulation-Problems.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/femaleinfertility/whitedischarge") {
//     fetch("./diseases/female-infertility/White-Discharge.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/femaleinfertility/pelvicinflammatorydisease") {
//     fetch("./diseases/female-infertility/PID.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/varicocele") {
//     fetch("./diseases/lifestyle-disorders/Varicocele.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/hydrocele") {
//     fetch("./diseases/lifestyle-disorders/Hydrocele.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/prematureejaculation") {
//     fetch("./diseases/lifestyle-disorders/Premature-Ejaculation.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/diabetes") {
//     fetch("./diseases/lifestyle-disorders/Diabetes.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/highbloodpressure") {
//     fetch("./diseases/lifestyle-disorders/HTN.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/infection") {
//     fetch("./diseases/lifestyle-disorders/Infection.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/uti") {
//     fetch("./diseases/lifestyle-disorders/UTI.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/obesity") {
//     fetch("./diseases/lifestyle-disorders/Obesity.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/erectiledysfunction") {
//     fetch("./diseases/lifestyle-disorders/Erectile-Dysfunction.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/piles") {
//     fetch("./diseases/lifestyle-disorders/Piles.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else if (page == "diseases/lifestyledisorders/gallbladderstone") {
//     fetch("./diseases/lifestyle-disorders/GBS.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         document.documentElement.scrollTop = 0;
//         operateAppointmentWindow();
//         bookAppointment();
//       });
//   }
//   else {
//     fetch("./pages/main.html")
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById("loader_main").classList.add("hidden");
//         document.getElementById("loader_main").classList.remove("flex");
//         contentDiv.innerHTML = data;
//         startCounter(document.getElementById("target"), patientCounter, 10000);
//         startCounter(document.getElementById("target"), expCounter, 25);
//         startScrolling();
//         disease_router();
//         operateAppointmentWindow();
//         document.addEventListener("scroll", showGoToTop);
//         bookAppointment();
//         document.getElementsByClassName("disease")
//       });
//   }
// }



// function router() {
//   const hash = window.location.hash.substring(1) || "/";
//   loadContent(hash === "/" ? "" : hash);

//   switch (hash) {
//     case "/":
//       document.title = "Ayurvedic treatment by mediveda"; // Set to your desired title for home
//       break;
//     case "about":
//       document.title = "Mediveda-About Us"; // Set to your desired title for about
//       break;
//     case "contact":
//       document.title = "Mediveda-Contact Us"; // Set to your desired title for contact
//       break;
//     case "admin":
//       document.title = "Mediveda-Admin Login"; // Set to your desired title for contact
//       break;
//       default:
//       document.title = "Mediveda-Diseases"; // Fallback title for unmatched routes
//       break;
//   }
// }

// window.addEventListener("hashchange", router);
// window.addEventListener("load", router);

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

mobile_navigation();
