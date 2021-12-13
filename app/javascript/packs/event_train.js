
console.log('allooo')

let hamburgerMenu = document.querySelector('.hamburger')
console.log(hamburgerMenu)

let listMenu = document.querySelector('.list-hamburger')
console.log(listMenu)

let menuCondition = false

function makeMenuMove() {
  if (menuCondition == true) {
    listMenu.style.marginLeft = "-300px"
    menuCondition = false
  } else if (menuCondition == false) {
    listMenu.style.marginLeft = "0px"
    menuCondition = true
  }
}
hamburgerMenu.onclick = makeMenuMove

// addEventListener
// Cette méthode permet de lier plusieurs évènements différents à un même élement HTML

let p1 = document.querySelector('p.click-1');
// click en 1er argument, et la function en 2eme argument
// pas de parentheses pour executer la fonction immédiatemment
p1.addEventListener('click', changeText);
function changeText() {
  this.innerHTML = "<strong>Bravo !</strong>";
  this.style.color = "green";
}
let p2 = document.querySelector('p.click-2');
// la meme chose avec une fonction anonyme
p2.addEventListener('click', function () {
  this.innerHTML = "<strong>Bravo !</strong>";
  this.style.color = "green";
});

let p3 = document.querySelector('p.click-3');

p3.addEventListener('click', Message1);
p3.addEventListener('click', Message2);

function Message1() {
  alert('Premier message');
}
function Message2() {
  alert('Second message');
}


// mars over & mars down
let p4 = document.querySelector('p.mouse-1');
let p5 = document.querySelector('p.mouse-2');

p4.addEventListener('mouseover', Fonction1);
p4.addEventListener('mouseout', Reset1); // evenement contraire à celui au dessus
p4.addEventListener('mousedown', Fonction2);
p4.addEventListener('mouseup', Reset2); // evenement contraire à celui au dessus

function Fonction1() {
  this.innerHTML = 'Cliquez moi maintenant';
  this.style.backgroundColor = 'lightblue';
}
function Fonction2() {
  this.innerHTML = 'Bravo';
  this.style.backgroundColor = 'peru';
  this.style.fontWeight = 'bold';
  this.style.fontSize = '24px';
}
function Reset1() {
  this.innerHTML = ' Passez sur moi ! '; // on remet les valeurs d'origine
  this.style.backgroundColor = '';
}
function Reset2() {
  this.innerHTML = ' Passez sur moi ! ';
  this.style.backgroundColor = ''; // on ne passe aucune valeur afin de rendre les valeurs par défaut
  this.style.fontWeight = '';
  this.style.fontSize = '';
}


// objet evenement

let p10 = document.querySelector('p.object-event-1');
p10.addEventListener('click', Message10)
function Message10() {
  this.innerHTML =
    "Message changé"
}

let p11 = document.querySelector('p.object-event-2');
p11.addEventListener('click', Message11)
function Message11(event) {
  this.innerHTML = "Element déclencheur : " + event.target +
    "<br/>Element portant lévènement : " + event.currentTarget 
}

// va chercher un autre event.currentTarget
let div1 = document.getElementById("div1")
let pObject1 = document.getElementById("p1")
div1.addEventListener('click', Message12)
function Message12(event) {
  this.innerHTML = "Element déclencheur : " + event.target +
    "<br/>Element portant lévènement : " + event.currentTarget 
}

// propriété type 
let p20 = document.querySelector('p.object-event-3');
p20.addEventListener('click', Message13)
function Message13(e) {
  this.innerHTML = "Type dévenement déclenché : " + e.type; 
}

// stop propagation // la 2nd alerte ne s'affichera pas 
let div2 = document.getElementById("div2")
let pObject2 = document.getElementById("p2")

div2.addEventListener('click', Message14, true)
pObject2.addEventListener('click', Texte14, true)

function Message14(event) {
  alert('stop a la propagation');
  event.stopPropagation();
}
function Texte14(event) {
  alert('Ceci ne saffichera pas');
}

// empecher l'evenement , tout simplement ^^ <3 prevent.default ? rip prevent.default ! 
let div3 = document.getElementById("div3")
let pObject3 = document.getElementById("p3")

div3.addEventListener('click', Message15, true)
pObject3.addEventListener('click', Texte15, true)

function Message15(event) {
  event.preventDefault();
}
function Texte15(event) {
  alert('La méthode preventDefault nempeche pas la propagation');
}

