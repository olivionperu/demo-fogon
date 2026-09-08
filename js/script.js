document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var whatsappMsg = 'Hola El Fogón, soy ' + name + '. ' + form.querySelector('#message').value.trim();
      window.open('https://wa.me/51999999999?text=' + encodeURIComponent(whatsappMsg), '_blank');
    });
  }
});
