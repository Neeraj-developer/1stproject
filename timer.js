document.addEventListener('DOMContentLoaded', function () {
    const countdownTimer = document.querySelector('.countdown_timer');
    const emailInput = document.getElementById('emailInput');
    const emailForm = document.getElementById('emailForm');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const popupImage = document.getElementById('popupImage');
    
    // Check if email exists in localStorage
    const storedEmail = localStorage.getItem('userEmail');

    // Calculate the time for the next midnight
    function getNextMidnight() {
        const now = new Date();
        const nextMidnight = new Date();
        nextMidnight.setHours(24, 0, 0, 0); // Set to midnight of the next day
        return nextMidnight;
    }

    // Set or retrieve the countdown end date
    let enddate = getNextMidnight();

    // Hide the countdown if email is already stored
    if (storedEmail) {
        countdownTimer.classList.add('hidden');
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handle form submission
    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (email && isValidEmail(email)) {
            // Store email in localStorage
            localStorage.setItem('userEmail', email);
            // Hide the form and countdown timer
            countdownTimer.classList.add('hidden');
            // Show success popup with user email
            popupMessage.textContent = `Thank you for subscribing, ${email}! You will be notified once we launch.`;
            popupImage.src = 'your-image-url.jpg'; // Set the image source
            showPopup();

            // Send the email address to the backend for scheduling notifications
            scheduleEmailNotifications(email);
        } else {
            // Show error popup if the email is invalid
            popupMessage.textContent = 'Please enter a valid email address.';
            showPopup();
        }
    });

    // Function to show the popup
    function showPopup() {
        popup.style.display = 'block';
        popup.setAttribute('aria-hidden', 'false');
        popup.focus();
    }

    // Function to close the popup
    window.closePopup = function () {
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');
    };

    // Function to send a request to backend to schedule email notifications
    function scheduleEmailNotifications(email) {
        // Send request to the backend (e.g., using fetch API)
        fetch('https://your-backend-url.com/schedule-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Notifications scheduled:', data);
        })
        .catch(error => {
            console.error('Error scheduling email notifications:', error);
        });
    }

    // Timer functionality
    const inputs = document.querySelectorAll('.time_box input');

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    function clock() {
        const now = new Date();
        let diff = Math.max((enddate - now) / 1000, 0); // Ensure no negative time

        if (diff <= 0) {
            // Reset countdown for the next midnight
            enddate = getNextMidnight();
            diff = (enddate - now) / 1000; // Recalculate difference
        }

        const hours = Math.floor(diff / 3600) % 24;
        const minutes = Math.floor(diff / 60) % 60;
        const seconds = Math.floor(diff) % 60;

        inputs[0].value = formatTime(hours);
        inputs[1].value = formatTime(minutes);
        inputs[2].value = formatTime(seconds);
    }

    clock();
    // Update the clock every second
    setInterval(clock, 1000);
});
