



     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // JavaScript to open the GitHub folder link when the button is clicked
    document.getElementById("round-btn3").addEventListener("click", function() {
        window.open("https://github.com/D-Clerk/davidclerk/tree/master/SharedFiles/HtmlBasics");
    });

