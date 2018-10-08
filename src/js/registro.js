// JS p/ registro.html//
// Initialize Firebase


let db = firebase.firestore();

document.getElementById('safeinfo').addEventListener('click', event => {
  event.preventDefault();
  const nombre = document.getElementById('username').value;
  const correo = document.getElementById('useremail').value;
  const fecha = document.getElementById('registerdate').value;
  const miembro = document.getElementById('member').value;
  const hora = document.getElementById('registertime').value;
  console.log(nombre, correo);
  db.collection('register').add({
    name: nombre,
    email: correo,
    date: fecha,
    member: miembro,
    hour: hora
  }).then(result => {
    location.reload(true);
  }).catch(error => {
  

  
  });
});

