const inputs = document.querySelectorAll(".input-text");

inputs.forEach(input => {
  input.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
});