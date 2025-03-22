
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode'); // Toggle light mode class
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark'); // Store theme preference
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.innerText = isLightMode ? 'Dark Mode' : 'Light Mode';
}

// Function to apply the stored theme preference
function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
        document.body.classList.add('light-mode'); // Apply light mode
        const toggleButton = document.getElementById('toggle-button');
        toggleButton.innerText = 'Dark Mode';
    }else{
        document.body.classList.remove('light-mode'); // Apply dark mode
        document.body.classList.add('dark-mode');
        const toggleButton = document.getElementById('toggle-button');
        toggleButton.innerText = 'Light Mode';
    }
}

// Apply the stored theme preference when the extension initializes or when a new tab is opened
document.addEventListener('DOMContentLoaded', applyStoredTheme);

// Event listener for the toggle button
document.getElementById('toggle-button').addEventListener('click', toggleTheme);

window.addEventListener('storage', () => {
    applyStoredTheme();
});