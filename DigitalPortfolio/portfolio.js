document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Smooth scroll to the target element
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



/*
    // JavaScript to open the GitHub folder link when the button is clicked
    document.getElementById("round-btn3").addEventListener("click", function() {
        window.open("https://github.com/D-Clerk/MERN/tree/main/SharedFiles/HtmlBasics");
    });
});
*/

