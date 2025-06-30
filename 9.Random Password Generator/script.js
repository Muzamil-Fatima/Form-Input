const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.oninput = () => {
  lengthValue.textContent = lengthSlider.value;
};

function generatePassword() {
  const length = lengthSlider.value;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  passwordField.value = password;
}

function copyPassword() {
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
