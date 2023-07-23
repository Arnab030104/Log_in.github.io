function validateForm() {
  const passwordInput = document.getElementById("password");
  const passwordValue = passwordInput.value;
  const userInput = document.getElementById("username");
  const userValue = userInput.value;
  if(passwordValue.length ==0 && userValue==0){
    alert("Enter Username and Password..");
  }
  else if (passwordValue.length < 6) {
    alert("Invalid password. Password must be at least 6 characters long.");
  }

  return true;
}
