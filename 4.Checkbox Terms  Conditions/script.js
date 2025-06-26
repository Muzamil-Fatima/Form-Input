const checkBox = document.getElementById("agree");
const submitBtn = document.getElementById("btn");

checkBox.addEventListener("change", () => {
  submitBtn.disabled = !checkBox.checked;
});