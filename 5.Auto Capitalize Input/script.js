// function capitalize(str) {
//   return str.charAt(0).UpperCase() + str.slice(1).toLowCase();
// }

const inputs = document.querySelectorAll(".input-text");

inputs.forEach(input => {
  input.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
});
