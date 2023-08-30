let form = document.querySelector('form');
let button = document.querySelector('input[type="button"]');
//console.log(form);

let nom = document.querySelector('#nom');
let prenom = document.querySelector('#prenom');
let nationalite = document.querySelector('#nationalite');
let specialite = document.querySelector('#specialite');
let tbody = document.querySelector('tbody');
let num = 0;

button.addEventListener('click', function(e) {
    // console.log(e.target);
    num++
   let nomValue =  nom.value;
   let prenomValue = prenom.value;
   let nationaliteValue = nationalite.value;
   let specialiteValue = specialite.value;
    // console.log(nom.value);

    let tr = document.createElement('tr');   

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    
    let i6 = document.createElement('i');
    let i7 = document.createElement('i');


    let texte1 = document.createTextNode(num);
    let texte2 = document.createTextNode(nomValue);
    let texte3 = document.createTextNode(prenomValue);
    let texte4 = document.createTextNode(nationaliteValue);
    let texte5 = document.createTextNode(specialiteValue);

    let texte6 = document.createTextNode('Edit');
    let texte7 = document.createTextNode('Delete');




    td1.appendChild(texte1);
    td2.appendChild(texte2);
    td3.appendChild(texte3);
    td4.appendChild(texte4);
    td5.appendChild(texte5);

    i6.appendChild(texte6);
    i7.appendChild(texte7);
    i6.classList.add("edite");
    i7.classList.add("delete");


  
    td6.appendChild(i6);
    td6.appendChild(i7);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
   
    
    tbody.appendChild(tr);
   
});

