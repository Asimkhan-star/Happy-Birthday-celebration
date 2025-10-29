document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginCard = document.getElementById('loginCard');
    const loginScene = document.querySelector('.scene');
    const birthdayPage = document.getElementById('birthdayPage');

    // --- NEW: Get the audio elements ---
    const clickSound = document.getElementById('clickSound');
    const birthdaySound = document.getElementById('birthdayAudio');
    // ------------------------------------

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting/reloading the page

        // --- NEW: Play the click sound immediately ---
        clickSound.play();
        // ------------------------------------------

        // 1. Hide the login card
        loginScene.style.display = 'none';
        
        // 2. Show the birthday page
        birthdayPage.style.display = 'block';

        // 3. Optional: Change the background
        document.body.style.background = 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)';

        // --- NEW: Play the birthday song ---
        birthdaySound.play();
        // ------------------------------------
    });
});