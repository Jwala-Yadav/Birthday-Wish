document.addEventListener("DOMContentLoaded", function() {

    // --- 1. GET ALL OUR ELEMENTS ---
    const welcomeScreen = document.getElementById('welcome-screen');
    const startButton = document.getElementById('start-button');
    const mainContent = document.getElementById('main-content');
    
    const music = document.getElementById('birthday-music');
    
    // *** This variable name is CORRECT and matches the HTML ID ***
    const pauseButton = document.getElementById('pause-music-btn'); 
    
    const myCanvas = document.getElementById('confetti-canvas');
    const slides = document.querySelectorAll('.slide');

    // --- 2. PREPARE THE "SHOW" ---
    
    // Disable right-click (inspect)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Create the confetti instance
    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });

    // Function to fire "crackers"
    function triggerAnimations() {
        myConfetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0, y: 0.7 } });
        myConfetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1, y: 0.7 } });
        myConfetti({ particleCount: 100, angle: 90, spread: 180, origin: { y: -0.1 }, decay: 0.9 });
    }

    // This function will be called when the user clicks "Start"
    function startTheShow() {
        // 1. Hide welcome, show main content
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';

        // 2. START THE MUSIC!
        music.play();

        // 3. Fire the first confetti burst
        triggerAnimations();

        // 4. Start the synchronized wishes and slideshow
        let currentSlideIndex = 0;
        new TypeIt("#dynamic-wishes", {
            strings: [
                "Happiest of birthdays to you, Madam!",
                "Wishing you a day filled with joy, laughter, and wonderful memories.",
                "May your year ahead be filled with success, health, and happiness.",
                "Happy Birthday to an inspiring leader and a wonderful person.",
                "Thank you for your guidance and leadership. Wishing you the best!",
                "May your special day be as amazing as you are.",
                "Wishing you all the happiness your heart can hold.",
                "Here's to another year of great achievements and new adventures.",
                "Hope your celebration is joyful and bright.",
                "With warmest wishes for a very Happy Birthday.",
                "From: Jwala Yadav"
            ],
            speed: 70,
            breakLines: false,
            loop: true,
            autoStart: true,
            
            beforeString: (step, instance) => {
                slides[currentSlideIndex].classList.remove('active');
                currentSlideIndex++;
                if (currentSlideIndex >= slides.length) {
                    currentSlideIndex = 0;
                }
                slides[currentSlideIndex].classList.add('active');
                triggerAnimations(); // Fire crackers on each new wish
            }
        }).go();
    }

    // --- 3. CREATE THE EVENT LISTENERS ---

    // Main listener: When user clicks "Start", begin everything.
    startButton.addEventListener('click', startTheShow);

    // *** This listener is CORRECT and targets the correct variable ***
    pauseButton.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            pauseButton.textContent = 'Pause Music ⏸️';
        } else {
            music.pause();
            pauseButton.textContent = 'Play Music 🎵';
        }
    });

});x