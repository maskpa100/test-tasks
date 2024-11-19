document.querySelectorAll('.header__menu-button').forEach(function(button) {
  button.addEventListener('click', function() {
    const nav = document.querySelector('.header__nav');
    if (nav.classList.contains('visible')) {
      nav.classList.remove('visible');
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
      nav.classList.add('visible');
    }
  });
});



