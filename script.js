var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});





document.getElementById("reservationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let guests = document.getElementById("guests").value;

  if (name && email && phone && date && time && guests) {
      alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guests.`);
      document.getElementById("reservationForm").reset();
  } else {
      alert("Please fill in all fields.");
  }
});