function sendData() {
    let validData = true;

    const fullName = document.getElementById("fullName").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const email = document.getElementById("email").value.trim();
    const participants = document.getElementById("participants").value.trim();
    const departureDate = document.getElementById("departureDate").value.trim();
    const returnDate = document.getElementById("returnDate").value.trim();

    // Full Name
    if (fullName === "") {
        document.getElementById("errorFullName").textContent = "Full name is required.";
        validData = false;
    } else {
        document.getElementById("errorFullName").textContent = "";
    }

    // Telephone Number
    const phoneRegex = /^[0-9]{10,15}$/;
    if (telephone === "") {
        document.getElementById("errorTelephone").textContent = "Telephone number is required.";
        validData = false;
    } else if (!phoneRegex.test(telephone)) {
        document.getElementById("errorTelephone").textContent = "Enter a valid phone number (10–15 digits).";
        validData = false;
    } else {
        document.getElementById("errorTelephone").textContent = "";
    }

    // Email
    if (email === "") {
        document.getElementById("errorEmail").textContent = "Email is required.";
        validData = false;
    } else if (!email.endsWith("gmail.com") && !email.endsWith("binus.ac.id")) {
        document.getElementById("errorEmail").textContent = "Email must end with gmail.com or binus.ac.id.";
        validData = false;
    } else {
        document.getElementById("errorEmail").textContent = "";
    }

    // Participants
    const participantNumber = parseInt(participants, 10);
    if (participants === "") {
        document.getElementById("errorParticipants").textContent = "Please enter number of participants.";
        validData = false;
    } else if (isNaN(participantNumber) || participantNumber <= 0) {
        document.getElementById("errorParticipants").textContent = "Participants must be a positive number.";
        validData = false;
    } else {
        document.getElementById("errorParticipants").textContent = "";
    }

    // Dates
    const depDate = new Date(departureDate);
    const retDate = new Date(returnDate);

    if (departureDate === "") {
        document.getElementById("errorDepartureDate").textContent = "Departure date is required.";
        validData = false;
    } else {
        document.getElementById("errorDepartureDate").textContent = "";
    }

    if (returnDate === "") {
        document.getElementById("errorReturnDate").textContent = "Return date is required.";
        validData = false;
    } else if (depDate > retDate) {
        document.getElementById("errorReturnDate").textContent = "Return date must be after departure date.";
        validData = false;
    } else {
        document.getElementById("errorReturnDate").textContent = "";
    }

    return false; // Prevent form submission for now (you can change this later)
}
