// Set the initial time on page load
setTime();

// Update the time every second
setInterval(setTime, 1000);

// Toggle between 12-hour and 24-hour format
const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", toggleFormat);

function setTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const is12HourFormat = localStorage.getItem("is12HourFormat") === "true";

  // Convert to 12-hour format if selected
  if (is12HourFormat) {
    hours = hours % 12;
    if (hours === 0) hours = 12;
  }

  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

function toggleFormat() {
  const is12HourFormat = localStorage.getItem("is12HourFormat") === "true";

  if (is12HourFormat) {
    localStorage.setItem("is12HourFormat", "false");
    toggleButton.textContent = "12-Hour Format";
  } else {
    localStorage.setItem("is12HourFormat", "true");
    toggleButton.textContent = "24-Hour Format";
  }

  // Update the time format immediately after toggling
  setTime();
}
