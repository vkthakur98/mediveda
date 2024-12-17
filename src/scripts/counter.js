export function patientCounter(maxNumber) {
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
      
export function expCounter(maxNumber) {
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
      
export  function startCounter(targetElement, counterFunction, maxNumber) {
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

