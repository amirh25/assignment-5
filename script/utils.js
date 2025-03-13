// utils.js

// Get real-time clock
export function getTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Get real-time date
export function updateDate(currentDateEl) {
    const now = new Date();
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    currentDateEl.textContent = now.toLocaleDateString('en-US', options);
}

// Random color generator
export function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
