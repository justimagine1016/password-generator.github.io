// Get a reference to the HTML element with the ID "password"
const passwordBox = document.getElementById("password");

// Define the desired length of the generated password
const length = 12;

// Define character sets for uppercase letters, lowercase letters, numbers, and symbols
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; // Corrected variable name
const number = "0123456789";
const symbol = `!@#$%^&*()-_+={}[];:"'|<>.,?~`; // Corrected symbols

// Combine all character sets into a single string
const allChars = upperCase + lowerCase + number + symbol;

// Function to create a random password and display it in the passwordBox
function cPass() {
  let password = "";

  // Add one random character from each character set to ensure diversity
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // Corrected variable name
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // While the password is shorter than the desired length, add random characters
  while (length > password.length) {
    // Corrected variable name
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Set the generated password in the passwordBox
  passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
  // Select the text within the passwordBox
  passwordBox.select();

  try {
    // Attempt to copy the selected text to the clipboard
    const textToCopy = document.getSelection();
    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        // Display a success message when copying is successful
        alert("Password copied to clipboard");
      })
      .catch(function (err) {
        // Display an error message when copying fails
        alert(
          "Oops, unable to copy to clipboard. You can manually copy the password."
        );
      });
  } catch (err) {
    // Handle any exceptions during the copying process and provide an error message
    alert(
      "Oops, unable to copy to clipboard. You can manually copy the password."
    );
  }
}
