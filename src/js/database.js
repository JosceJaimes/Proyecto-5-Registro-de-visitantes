// // alert("probando");

let db = firebase.firestore();

window.memberadd = () =>{
  let tble = document.getElementById('baseTable');
  const mb = db.collection('register').orderBy('date', 'asc');
  //   let tble = document.getElementById('baseTable');
  mb.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      let name = doc.data().name;
      console.log(name);
      let mail = doc.data().email;
      console.log(mail);
      let dt = doc.data().date;
      console.log(dt);
      let memb = doc.data().member;
      console.log(memb);
      let hr = doc.data().time;
      // template string 
      tble.innerHTML += `<tr>
      
        <th> ${name}</th>
        <th> ${mail}</th>
        <th> ${memb}</th>
        <th> ${dt}</th>
        <th> ${hr}</th>
     
      <tr>
      `;
      // interpolacion de variables
    });
  });
};
memberadd();