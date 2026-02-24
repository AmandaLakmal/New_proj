document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    message.textContent = '';

    const email = form.email.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      showMsg('Please fill in both fields', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showMsg('Please enter a valid email address', 'error');
      return;
    }

    // Simple demo check — replace with real authentication
    if (email === 'user@example.com' && password === 'password') {
      showMsg('Login successful — welcome!', 'success');
      // Optionally redirect: window.location.href = '/dashboard.html';
    } else {
      showMsg('Invalid email or password', 'error');
    }
  });

  function showMsg(text, type) {
    message.textContent = text;
    message.className = 'message ' + type;
  }

  function validateEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }
});
