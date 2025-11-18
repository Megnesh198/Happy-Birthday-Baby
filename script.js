// --- 1. Countdown Timer Function ---

function startCountdown() {
    // Apni target birthday date yahan set karein: Year, Month (0-11), Day, Hour, Minute, Second
    // Example: December 25, 2025 ke liye: new Date(2025, 11, 25, 0, 0, 0).getTime();
    const targetDate = new Date("November 19, 2025 00:00:00").getTime(); // IMPORTANT: Is date ko change karein!

    const countdownElement = document.getElementById('countdown');

    // Update timer har second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        countdownElement.innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;

        // Jab timer khatam ho jaaye
        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "🎉 **HAPPY BIRTHDAY!** 🎂";
            // Optional: Heading ko confetti animation ke liye change kar sakte hain
            document.getElementById('main-heading').innerHTML = "🥳 **WISH YOU A VERY HAPPY BIRTHDAY!** 🥳";
        }
    }, 1000);
}


// --- 2. Surprise Button Functionality ---

const surpriseBtn = document.getElementById('surprise-btn');
const surpriseText = document.getElementById('surprise-text');

surpriseBtn.addEventListener('click', () => {
    // Hidden class ko remove/add karke text ko show/hide karna
    surpriseText.classList.toggle('hidden');
    
    // Button ka text change karna
    if (surpriseText.classList.contains('hidden')) {
        surpriseBtn.textContent = 'Click for a Surprise! ✨';
    } else {
        surpriseBtn.textContent = 'Surprise Revealed! 😊';
    }
});


// Start the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
});