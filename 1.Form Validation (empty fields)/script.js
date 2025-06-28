const form = document.getElementById("my-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password1 = document.getElementById("password1").value.trim();
  const password2 = document.getElementById("password2").value.trim();

  if (!username || !lastname || !email || !password1 || !password2) {
    alert("Please fill all the fields");
    return;
  }

  if (password1 !== password2) {
    alert("Passwords do not match");
    return;
  }

  alert("Your form submitted successfully");
});