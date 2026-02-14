// ATS-Friendly CV - Minimal JavaScript
// Only essential functionality, no animations or effects

document.addEventListener('DOMContentLoaded', function() {
    
    // Print functionality with Ctrl/Cmd + P
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });

    // Simple print button (if needed - currently not in HTML)
    function printCV() {
        window.print();
    }

    // Make print function globally available
    window.printCV = printCV;

    // Track page load for analytics (optional)
    console.log('CV loaded successfully');

    // Simple email protection (if needed)
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Email link clicked');
        });
    });

});

// Export to PDF function
function downloadPageAsPDF() {
    window.print();
}

// Make function available globally
window.downloadPageAsPDF = downloadPageAsPDF;

/* 
ATS-Friendly JavaScript Principles:
- No animations or transitions
- No DOM manipulation that changes content
- No heavy libraries or frameworks
- Only basic interactivity
- Print-focused functionality
- Simple, clean code
*/
