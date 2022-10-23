password = document.getElementById("first-password")
passwordCopy = document.getElementById("second-password")

errorText = document.getElementById("error-text")

function validatePassword() {
  if (password.value !== passwordCopy.value || password.value === "") {
    passwordCopy.setCustomValidity("Error: Passwords do not match.")
    if (!password.classList.contains('error')) {
      password.classList.add('error')
    }
    if (!passwordCopy.classList.contains('error')) {
      passwordCopy.classList.add('error')
    }
    errorText.textContent = "*Passwords do not match"
    errorText.style.color = 'red'
    passwordCopy.style.borderColor = 'red'
    password.style.borderColor = 'red'
  } else {
    password.classList.remove('error')
    passwordCopy.classList.remove('error')
    errorText.textContent = ""
    passwordCopy.setCustomValidity('')
    passwordCopy.style.borderColor = '#BBB'
    password.style.borderColor = '#BBB'
  }
}

password.onchange = validatePassword
passwordCopy.onkeyup = validatePassword

window.onload = validatePassword
