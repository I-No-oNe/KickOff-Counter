// Set the date for the FRC 2025 Kickoff
const kickoffDate = new Date('January 6, 2025 12:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = kickoffDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // If the countdown is finished, display some text
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').textContent = "It's time for FRC 2025 Kickoff!";
    }
}, 1000);

// Add a favicon to the page
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = 'https://info.firstinspires.org/hubfs/2025%20Season/Season%20Assets/FIRST_DIVE-fullLogo.png';
document.head.appendChild(faviconLink);
