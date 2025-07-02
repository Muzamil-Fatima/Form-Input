const inputs = document.querySelectorAll(".input-text");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
});

// next time do with the help of arrow function keep it up