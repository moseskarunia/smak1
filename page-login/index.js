function signUp() {
  const name = document.getElementById('sign-up-name').value;
  const email = document.getElementById('sign-up-email').value;
  const password = document.getElementById('sign-up-password').value;

  if (name.length < 3) {
    alert('Insufficient name characters length');
    return;
  }

  if (
    email.indexOf('@') === -1 ||
    email.indexOf('.') === -1
  ) {
    alert('invalid email. no @ or / and . found');
    return;
  }

  if (password.length < 6) {
    alert('insufficient password length. min: 6');
    return;
  }

  alert(`Hello World, ${email}`);
}