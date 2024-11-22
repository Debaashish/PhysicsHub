document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const studentId = document.getElementById("studentId").value;
    const appointmentType = document.getElementById("appointmentType").value;
    const professor = document.getElementById("professor").value;
    const communication = document.getElementById("communication").value;
    const date = document.getElementById("date").value;

    // Validate inputs
    if (
      !name ||
      !studentId ||
      !appointmentType ||
      !professor ||
      !communication ||
      !date
    ) {
      alert("Please fill in all fields!");
      return;
    }

    // Generate unique ticket number
    const ticketNumber = "PH-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById(
      "ticketNumber"
    ).textContent = `Booking successful! Your ticket number is: ${ticketNumber}`;
  });
