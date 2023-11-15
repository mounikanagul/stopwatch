document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let isRunning = false;

    const display = document.querySelector('.display');
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const resetButton = document.querySelector('.reset');

    function updateDisplay() {
        display.textContent = "${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}";
    }

    function startTimer() {
        if (!isRunning) {
            timer = setInterval(function () {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes === 60) {
                        minutes = 0;
                        hours++;
                    }
                }
                updateDisplay();
            }, 1000);

            isRunning = true;
        }
    }

    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        minutes = 0;
        hours = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
