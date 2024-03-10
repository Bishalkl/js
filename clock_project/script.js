class DateTimeUpdater {
    constructor(updateElementId) {
        this.updateElement = document.getElementById(updateElementId);
        this.updateDateTime(); // Update the time immediately
        this.startUpdating(); // Start updating the time continuously
    }

    updateDateTime() {
        // Create a new Date object to get the current date and time
        let currentDate = new Date();

        // Extract hours, minutes, and seconds from the Date object
        let currentHour = currentDate.getHours().toString().padStart(2, '0');
        let currentMinute = currentDate.getMinutes().toString().padStart(2, '0');
        let currentSecond = currentDate.getSeconds().toString().padStart(2, '0');

        // Update the displayed time
        this.updateElement.textContent = `${currentHour}:${currentMinute}:${currentSecond}`;
    }

    startUpdating() {
        // Update the time every second
        this.intervalId = setInterval(() => {
            this.updateDateTime();
        }, 1000);
    }

    stopUpdating() {
        // Stop updating the time
        clearInterval(this.intervalId);
    }
}

// Create an instance of DateTimeUpdater with the ID of the update element
const dateTimeUpdater = new DateTimeUpdater("update");
