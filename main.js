var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  initialCountry: "auto", // Automatically detect the country
  preferredCountries: ['us', 'gb'], // Optional: Set preferred countries
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Optional for validation & formatting
});