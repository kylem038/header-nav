$dropdown = document.querySelector('.dropdown');

$dropdown.addEventListener('click', function() {
  document.querySelector('.link-list').classList.toggle('show');
});
