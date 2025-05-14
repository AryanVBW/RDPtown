// Navbar toggle for mobile
// Hide loading screen after page load
// Enable copy button functionality for all .copy-button elements
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

    // Hide loading screen after page load
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 600);
    }
});

function copyCode(btn, codeId) {
    var codeElem = document.getElementById(codeId);
    var code = codeElem ? codeElem.textContent : '';
    if (!navigator.clipboard) {
        alert('Clipboard not supported. Please copy manually.');
        return;
    }
    navigator.clipboard.writeText(code).then(function() {
        var original = btn.querySelector('span').textContent;
        btn.querySelector('span').textContent = 'Copied';
        btn.classList.add('copied');
        // Show confirmation message
        var msg = document.createElement('div');
        msg.className = 'copy-confirmation';
        msg.textContent = 'Installation script copied';
        btn.parentNode.insertBefore(msg, btn.nextSibling);
        setTimeout(function() {
            btn.querySelector('span').textContent = original;
            btn.classList.remove('copied');
            msg.remove();
        }, 1800);
    });
} 