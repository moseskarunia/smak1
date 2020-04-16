function signUp() {
  const name = document.getElementById('sign-up-name').value;
  const email = document.getElementById('sign-up-email').value;
  const password = document.getElementById('sign-up-password').value;
  const retypedPassword = document.getElementById('sign-up-retyped-password').value;

  // Javascript falsy value
  if (name === null || name === undefined || name.length < 3) {
    alert('Minimum length for name is 3 characters');
    return;
  }

  const result = _validateEmailPassword(email, password);
  if (!result) return;

  if (password !== retypedPassword) {
    alert('Password and retyped password mismatch');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (data) {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name
      }).then(function () {
        alert('Thanks for signing up, ' + user.displayName);
      }).catch(function (error) {
        alert('Error updating user: ', error);
      })
    })
    .catch(function (error) {
      alert('Error signing up: ', error);
    });
}

function signIn() {
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;

  const result = _validateEmailPassword(email, password);
  if (!result) return;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (data) {
      const user = firebase.auth().currentUser;
      alert('Hello again, ' + user.displayName);
    })
    .catch(function (error) {
      alert('Error signing in: ', error);
    });
}

function _validateEmailPassword(email, password) {
  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    alert('Email need to include both @ and .');
    return false;
  }

  if (email.length <= 5) {
    alert('Email is impossibly too short');
    return false;
  }

  if (password.length < 8) {
    alert('Minimum length for password is 8 characters');
    return false;
  }

  return true;
}