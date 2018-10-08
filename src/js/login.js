// JS p/ login.html//
// alert('Ya está enlazado');

let names = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password1');
let btnAddMember = document.getElementById('newMember');


btnAddMember.addEventListener('click', event => {  
  let nm = names.value;
  console.log(nm);
  let pass = password.value;
  console.log(pass);
  let ml = email.value;
  console.log(ml);
  
  const auth = firebase.auth();
  
  const promise = auth.createUserWithEmailAndPassword(ml, pass);

  promise.then(function(docRef) {
    console.log('document write with ID:', docRef.id);// falta que me lance el id
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password1').value = '';
  })
    .catch(function(error) {
      console.error('Error adding document:', error);
    });
});
