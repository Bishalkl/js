class Timer {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
        this.intervalId = null;
        this.isRunning = false;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(() => {
                this.updateTimer();
                this.updateDisplay();
            },15);
        }
    }

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.intervalId);
        }
    }

    reset() {
        this.stop();
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
        this.updateDisplay();
    }

    updateTimer() {
        this.millisecond++;
        if (this.millisecond >= 100) {
            this.millisecond = 0;
            this.second++;
            if (this.second >= 60) {
                this.second = 0;
                this.minute++;
                if (this.minute >= 60) {
                    this.minute = 0;
                    this.hour++;
                    if (this.hour >= 24) {
                        this.hour = 0;
                    }
                }
            }
        }
    }

    updateDisplay() {
        let paddedHour = this.hour.toString().padStart(2, '0');
        let paddedMinute = this.minute.toString().padStart(2, '0');
        let paddedSecond = this.second.toString().padStart(2, '0');
        let paddedMillisecond = this.millisecond.toString().padStart(2, '0');
        this.displayElement.textContent = `${paddedHour}:${paddedMinute}:${paddedSecond}:${paddedMillisecond}`;
    }
}

const display = document.getElementById('display');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

const timer = new Timer(display);
startbtn.onclick = timer.start.bind(timer);
stopbtn.onclick = timer.stop.bind(timer);
resetbtn.onclick = timer.reset.bind(timer);
