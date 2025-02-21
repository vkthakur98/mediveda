function router() {
    // Get the current path, defaulting to "/" if none is present
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '') || '/';
    
    // Load content based on the path (root or specific page)
    loadContent(path === "/" ? "" : path);
  
    // Update the document title based on the path
    switch (path) {
      case "/":
        document.title = "Ayurvedic treatment by Mediveda"; // Title for home page
        break;
      case "about":
        document.title = "Mediveda - About Us"; // Title for about page
        break;
      case "contact":
        document.title = "Mediveda - Contact Us"; // Title for contact page
        break;
      case "admin":
        document.title = "Mediveda - Admin Login"; // Title for admin login page
        break;
      default:
        document.title = "Mediveda - Diseases"; // Fallback title for unknown routes
        break;
    }
  }
  
  // Push state to change the URL when a route is selected
  function navigateTo(path) {
    history.pushState(null, null, path); // Update the URL without a page reload
    router(); // Run the router function after navigation
  }
  
  // Add event listeners for popstate (back/forward buttons) and load events
  window.addEventListener("popstate", router);
  window.addEventListener("load", router);
  

  // Example of navigating programmatically
navigateTo('/about'); // Navigates to the About Us page
navigateTo('/contact'); // Navigates to the Contact Us page


function loadContent(page) {
    const contentDiv = document.getElementById("content");
  
    // Define page mappings to the correct HTML files for each section
    const pageMap = {
      "about": "./pages/about.html",
      "contact": "./pages/contact.html",
      "admin": "./pages/admin.html",
      "": "./pages/home.html" // Home page
    };
  
    // Fetch the content based on the path, fallback to home if no match
    const pagePath = pageMap[page] || pageMap[""];  
    fetch(pagePath)
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        document.documentElement.scrollTop = 0; // Scroll to top after loading content
      })
      .catch((error) => {
        // Handle errors (e.g., page not found)
        contentDiv.innerHTML = "<p>Sorry, the page you're looking for doesn't exist.</p>";
        console.error('Error loading content:', error);
      });
  }
  