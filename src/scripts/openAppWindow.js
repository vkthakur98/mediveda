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
  