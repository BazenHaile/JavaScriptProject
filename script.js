
////////////////Listening & responsig  to the rating star buttons///
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to each star
    const stars = document.querySelectorAll('#ratingStars span');
    stars.forEach(function (star, index) {
        star.addEventListener('click', function () {
            rateBook(index + 1);
        });
    });
});

function rateBook(stars) {
    // Remove the rating stars
    const ratingStars = document.getElementById('ratingStars');
    ratingStars.innerHTML = '';

    // Create a new element for the thank you message
    const thankYouMessage = document.createElement('h4');
    thankYouMessage.innerText = `You have rated it ${stars} stars. Thank you.`;

    // Append the thank you message to the parent container
    ratingStars.appendChild(thankYouMessage);
}



////////////////Validating The form inputs/////////////
function validateForm(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var messageInput = document.getElementById('message');

    // Validate email format using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Validate phone number format using regex (allows only digits)
    var phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phoneInput.value)) {
        alert('Please enter a valid phone number (only digits).');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Additional validation can be added for other fields if needed

    // If all validations pass, the form will be submitted
}

//////////Redirecting the the send message button into a thank you page//////

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Assuming all necessary data is provided
        // You can add additional validation if needed

        // Redirect to thankyou.html
        window.location.href = 'thankyou.html';
    });
});

