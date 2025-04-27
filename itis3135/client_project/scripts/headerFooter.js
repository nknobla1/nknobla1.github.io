
document.getElementById("dynamicHeader").innerHTML = `
  <nav>
    <a href="./">Home</a>
    ~
    <a href="overview.html">Product Overview</a>
    ~
    <a href="samples.html">Product Sampling</a>
    ~
    <a href="about.html">About KMK Custom Creations</a>
    ~
    <a href="information.html">Additional Information</a>
  </nav>
`;


document.getElementById("dynamicFooter").innerHTML = `
  <p>Page Built By <a href="../nickknoblauchdesigns.com/">Nick Knoblauch</a> &copy; 2025</p>
  <a id="validation-button-html" href="#">
    <img src="../images/htmlValidationButton.png" alt="html validation button">
  </a>
  <a id="validation-button-css" href="#">
    <img src="../images/cssValidationButton.png" alt="css validation button">
  </a>
`;


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("validation-button-html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
  document.getElementById("validation-button-css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
});
