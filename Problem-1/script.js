document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode preference is stored in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

   
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    
    updateButtonText();

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Store the dark mode preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }

        updateButtonText();
    });


    function updateButtonText() {
      if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Disable Dark Mode';
      } else {
        darkModeToggle.textContent = 'Enable Dark Mode';
      }
    }
});