// getElementById : rajouter des outerHTML sinon ca bug
console.log(document.getElementById("fromage").outerHTML)
console.log(document.getElementById("vin").outerHTML)

// getElementsByClassName, return #DomElement, so we go index[0]
console.log(document.getElementsByClassName("roger")[0].outerHTML)

// getElementsByTagName, gets all the div here
console.log(document.getElementsByTagName("div")[0].outerHTML)

// Query selectors
console.log(document.querySelector('.roger'))

// InnerHTML
// Changer le contenu d'un div
document.querySelector('#vin').innerHTML = "J'ai change le contenu de la div avec l'id #vin"
document.querySelector('.roger').innerHTML = "J'ai change le contenu de la div avec la class .roger"

// Capturer une list de divs avec le même nom
elementList = document.querySelectorAll('.naruto')
console.log(elementList)
elementList[1].innerHTML = "Nonono"
// j'ai un peu dérivé de la classlist .. mais bon

// Changer le style d'une div ou autre
elementList[3].style.backgroundColor = "red"

// Query selector est très puissant et permet de faire le chemin pour arriver à un truc précis
let test10 = document.querySelector('.openclassroom p.notrandom a').innerHTML
console.log(test10)

/* Changer une classe 
let elt = document.getElementById('main');
elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";

elt.classList.add("nouvelleClasse");    // Ajoute la classe nouvelleClasse à l'élément
elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse");   // Retournera false car on vient de la supprimer
// mais oldClasse n'as pas été crée, sinon c'est OK
elt.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément

// Change attribute ( type for inputs, name .. idk what else )
elt.setAttribute("type", "password");   // Change le type de l'input en un type password
elt.setAttribute("name", "my-password");    // Change le nom de l'input en my-password
elt.getAttribute("name");               // Retourne my-password

// Ajouter des enfants :DD
const newElt = document.createElement("div");
let elt = document.getElementById("main");
elt.appendChild(newElt);
// Supprimer .. editer 
elt.removeChild(newElt);    // Supprime l'élément newElt de l'élément elt
elt.replaceChild(document.createElement("article"), newElt);    // Remplace l'élément newElt par un nouvel élément de type article

*/




