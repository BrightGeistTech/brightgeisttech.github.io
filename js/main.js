// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year automatically
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Brightgeist Technologies, Inc.`;
    }
}); 