// Initialize EmailJS with your User ID
(function() {
    emailjs.init("service_5zoeqcj"); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
})();

// Add event listener for form submission
document.getElementById('stakeholderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    var form = document.getElementById('stakeholderForm');
    var formData = new FormData(form);
    var data = {};
    formData.forEach(function(value, key) {
        // Handle multiple checkbox values by storing them as an array
        if (data[key]) {
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });

    // Send email using EmailJS with Service ID and Template ID
    emailjs.send('service_5zoeqcj', 'template_nnbo1t1', data)
    .then(function(response) {
        // Display a success message and reset the form
        alert('Form submitted successfully!');
        form.reset();
    }, function(error) {
        // Display an error message
        alert('An error occurred while submitting the form. Please try again.');
        console.error('EmailJS Error:', error);
    });
});
