
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode'); // Toggle light mode class
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark'); // Store theme preference
}

// Function to apply the stored theme preference
function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
        document.body.classList.add('light-mode'); // Apply light mode
    }
}

// Apply the stored theme preference when the extension initializes or when a new tab is opened
document.addEventListener('DOMContentLoaded', applyStoredTheme);

// Event listener for the toggle button
document.getElementById('toggle-button').addEventListener('click', toggleTheme);
