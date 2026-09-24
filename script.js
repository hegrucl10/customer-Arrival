const params = new URLSearchParams(window.location.search);

const location = params.get("location");

const locations = {

    pickup: {
        name: "PICK UP",
        message: "Please notify staff that you have arrived at Pick Up.",
        color: "#d32f2f"
    },

    doorA: {
        name: "DOOR A",
        message: "Please notify staff that you have arrived at Door A.",
        color: "#1976d2"
    },

    lax: {
        name: "LAX DOOR",
        message: "Please notify staff that you have arrived at LAX Door.",
        color: "#f9a825"
    },

    doorB: {
        name: "DOOR B",
        message: "Please notify staff that you have arrived at Door B.",
        color: "#7b1fa2"
    }

};

const locationTitle = document.getElementById("locationTitle");
const locationMessage = document.getElementById("locationMessage");
const notifyButton = document.getElementById("notifyButton");
const statusMessage = document.getElementById("statusMessage");

if (locations[location]) {

    locationTitle.textContent = locations[location].name;

    locationMessage.textContent =
        locations[location].message;

    notifyButton.style.backgroundColor =
        locations[location].color;

} else {

    locationTitle.textContent = "Welcome";

    locationMessage.textContent =
        "Please select your arrival location.";

}

notifyButton.addEventListener("click", function() {

    statusMessage.textContent =
        "Your notification has been sent. Please wait for assistance.";

    notifyButton.disabled = true;

});

