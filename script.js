function redirectToSignup() {
    window.location.href = 'signup.html';
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}