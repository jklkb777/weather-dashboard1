document.getElementById('weatherInput').addEventListener('blur', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
  e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
});