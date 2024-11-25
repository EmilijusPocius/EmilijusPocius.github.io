// themeToggle.js
const toggleSwitch = document.getElementById('mode-toggle');

// Check for saved user preference in localStorage
const currentMode = localStorage.getItem('mode') || 'light';

if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

// Toggle dark mode on and off
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
    }
});
