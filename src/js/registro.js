// JS p/ registro.html//

var db = firebase.firestore();

document.getElementById('safeinfo').addEventListener('click', event => {
  event.preventDefault();
  const nombre = document.getElementById('username').value;

  const correo = document.getElementById('useremail').value;

  const fecha = document.getElementById('registerdate').value;

  const hora = document.getElementById('registertime').value;

  const anfitrion = document.getElementById('member').value;

  db.collection('register').add({
    name: nombre,
    email: correo,
    date: fecha,
    time: hora,
    member: anfitrion
  }).then(result => {
    location.reload(true);
  }).catch(error => {
  
  });
});

// window.

