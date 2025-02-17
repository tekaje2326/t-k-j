document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    const navLinks = document.querySelectorAll("nav a");

    // Add event listener to buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });

    // Add event listener to nav links
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            alert("Link clicked!");
        });
    });
});