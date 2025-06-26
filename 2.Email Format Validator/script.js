const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("emailError");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", () => {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = "2px solid red";
    errorMsg.textContent = "❌ Invalid Email Format";
  } else {
    emailInput.style.border = "2px solid green";
    errorMsg.textContent = "";
  }
});
