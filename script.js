// --- 1. Auto-Play Music Function ---
// Many browsers block automatic play, so this tries to start it immediately.
window.onload = function() {
    const audio = document.getElementById('bday-song');
    audio.play().catch(error => {
        // If auto-play failed (browser blocked it), you can ask the user to click anywhere.
        console.log("Autoplay failed:", error);
        // You could add a visible button here to start the music manually.
    });
};

// --- 2. Slideshow Functionality ---
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Optional: Automatic Slideshow
setInterval(function() {
    plusSlides(1);
}, 5000); // Change image every 5 seconds (5000 milliseconds)


// --- 3. PIN Lock Functionality ---
const CORRECT_PIN = "198"; // 🔑 IMPORTANT: Change this to your secret 3-digit code!

function checkPin() {
    const pinInput = document.getElementById('pin-input').value;
    const messageContent = document.getElementById('message-content');
    const errorMessage = document.getElementById('error-message');

    if (pinInput === CORRECT_PIN) {
        // PIN is correct: Show the message, hide the input and error
        messageContent.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        
        // Optional: Hide the input/button after success
        document.getElementById('pin-input').style.display = 'none';
        document.querySelector('.secret-message-lock button').style.display = 'none';

    } else {
        // PIN is wrong: Show error, clear input
        errorMessage.classList.remove('hidden');
        messageContent.classList.add('hidden');
        document.getElementById('pin-input').value = ''; // Clear the wrong input
    }
}
// script.js mein puraane onload code ko hata de
// aur yeh naya code daal dein:

const audio = document.getElementById('bday-song');
const startButton = document.getElementById('start-music-button');

// script.js mein, startButton.addEventListener ke andar:

// script.js mein, startButton.addEventListener ke andar:

startButton.addEventListener('click', function() {
    audio.play().then(() => {
        
        // 🌟 1. SLIDESHOW AUTO-START (Jo pehle tha) 🌟
        setInterval(function() {
            plusSlides(1);
        }, 5000); 

        // 💥 2. NEON VISUAL BLAST LOGIC 💥
        const neonBlastElement = document.getElementById('neon-blast');
        neonBlastElement.classList.remove('hidden'); // Neon Blast ko dikhao
        
        // 3 seconds ke baad blast ko chupa do
        setTimeout(() => {
            neonBlastElement.classList.add('hidden'); // Neon Blast ko chupa do
        }, 5000); // 3000 milliseconds = 3 seconds
        
        // 3. Button ko chhupa do (Jo pehle tha)
        startButton.style.display = 'none'; 
        
    }).catch(error => {
        // ... (Error handling code)
    });
});

// ... baaki sab PIN code aur slideshow code same rahega.
// ... (Aapka puraana code, jahan button click listener hai)

startButton.addEventListener('click', function() {
    audio.play().then(() => {
        
        // 🌟 NEW ADDITION: Show a temporary joyful message 🌟
        const joyMessage = document.createElement('h2');
        joyMessage.textContent = "🥳 Happy Birthday, My Queen! 🎉";
        joyMessage.style.color = '#8c0022';
        joyMessage.style.fontSize = '3em';
        joyMessage.style.marginTop = '20px';
        
        // Isko slideshow ke upar dikhao
        document.querySelector('.greeting').appendChild(joyMessage);

        // 3 seconds ke baad is message ko hata do
        setTimeout(() => {
            joyMessage.remove();
        }, 3000); // 3000 milliseconds = 3 seconds

        startButton.style.display = 'none'; 
    }).catch(error => {
        // ... (Error code)
    });
});