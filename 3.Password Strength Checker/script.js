const passwordFields = document.querySelectorAll('.pass');

passwordFields.forEach((passField) => {
  let errMess = document.createElement("span");
  errMess.style.color = "red";
  passField.parentNode.appendChild(errMess);

  passField.addEventListener("blur", () => {
    if (passField.value.length < 8) {
      errMess.textContent = "❌ Password must be at least 8 characters";
    } else {
      errMess.textContent = "";
    }
  });
});
