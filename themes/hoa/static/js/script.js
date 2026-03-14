document.addEventListener("DOMContentLoaded", function () {

  // ---- Dark mode toggle ----
  var toggle = document.getElementById('darkModeToggle');
  var htmlEl = document.documentElement;

  function applyTheme(theme) {
    htmlEl.setAttribute('data-bs-theme', theme);
    if (toggle) {
      toggle.textContent = theme === 'dark' ? '☀' : '☾';
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('title', theme === 'dark' ? 'Light mode' : 'Dark mode');
    }
  }

  // Sync toggle label with the theme already set by the inline script in <head>
  applyTheme(htmlEl.getAttribute('data-bs-theme') || 'light');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = htmlEl.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem('hoa-theme', next);
      applyTheme(next);
    });
  }

  // ---- Active nav link highlighting ----
  var currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.hoa-navbar .nav-link').forEach(function (link) {
    var href = (link.getAttribute('href') || '').replace(/\/$/, '');
    if (href && href !== '' && currentPath.startsWith(href)) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

});
