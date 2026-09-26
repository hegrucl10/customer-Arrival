const params = new URLSearchParams(window.location.search);
const location = params.get("location");

const locations = {
    pickup: {
        name: "PICK UP",
        message: "Please notify staff that you have arrived at Pick Up."
    },

    doorA: {
        name: "DOOR A",
        message: "Please notify staff that you have arrived at Door A."
    },

    lax: {
        name: "LAX DOOR",
        message: "Please notify staff that you have arrived at LAX Door."
    },

    doorB: {
        name: "DOOR B",
        message: "Please notify staff that you have arrived at Door B."
    }
};

const locationTitle = document.getElementById("locationTitle");
const locationMessage = document.getElementById("locationMessage");
const notifyButton = document.getElementById("notifyButton");
const statusMessage = document.getElementById("statusMessage");

if (locations[location]) {

    locationTitle.textContent = locations[location].name;
    locationMessage.textContent = locations[location].message;

} else {

    locationTitle.textContent = "Welcome";
    locationMessage.textContent =
        "Please select your arrival location.";

    notifyButton.disabled = true;
}

notifyButton.addEventListener("click", async function () {

    if (!locations[location]) return;

    notifyButton.disabled = true;

    statusMessage.textContent = "Sending notification...";

    try {

        const response = await fetch(
            "https://teowxwsnmfizuidqheve.supabase.co/functions/v1/Customer-Arrival",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    location: locations[location].name
                })
            }
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error("Notification failed");
        }

        statusMessage.textContent =
            "Your notification has been sent. Please wait for assistance.";

    } catch (error) {

        console.error(error);

        statusMessage.textContent =
            "Unable to send notification. Please try again.";

        notifyButton.disabled = false;
    }

});
