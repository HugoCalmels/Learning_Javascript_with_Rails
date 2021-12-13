// changes title & sub-title
function changeTitles() {
  let selectTitle = document.querySelectorAll('h1')
  selectTitle[0].innerHTML = "Exercice 2"
  document.querySelectorAll('section.jumbotron .container p')[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}
changeTitles()

// changes jumbotron buttons text & links
function changeCallToActions() {
  document.querySelectorAll('section.jumbotron a')[0].innerHTML = "Ok je veux tester !"
  document.querySelectorAll('section.jumbotron a')[0].setAttribute("href", "http://www.thehackingproject.org")
  document.querySelectorAll('section.jumbotron a')[1].innerHTML = "Non merci"
  document.querySelectorAll('section.jumbotron a')[1].setAttribute("href", "https://www.pole-emploi.fr/accueil/")
}
changeCallToActions()

// changes navbar logo
function changeLogoName() {
  document.querySelectorAll('.navbar strong')[0].innerHTML = "The THP Experience"
  document.querySelectorAll('.navbar strong')[0].style.fontSize = '2em'
}
changeLogoName()

// targets each cards, then changes the src of each image using an array of images
function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  for (let i = 0 ; i < imagesArray.length; i++) {
    console.log(imagesArray[i]);
    document.querySelectorAll('.album img')[i].setAttribute("src", imagesArray[i])
  }
}
populateImages()

// targets 3 last cards, and remove them
function deleteLastCards() {
  let cardsNode = document.querySelectorAll('.col-md-4')
  // 3 times loop with index( last - i ), since it dosnt affect the original node
  let times = 4;
  for ( let i = 1; i < times; i++){
  cardsNode[cardsNode.length - i].remove()
  }
}
deleteLastCards()

// changes the cards text depending on textArray.length
function changeCardsText() {
  let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
  let cardsNode = document.querySelectorAll('.col-md-4 p')
  for (let i = 0; i < textArray.length; i++) {
    cardsNode[i].innerHTML = textArray[i]
  }
}
changeCardsText()

// targets all buttons from the cards, to make it an array of buttons
// then adds a new class to each button, and removes the old ones
function changeViewButtons() {
  let buttonsArray = document.querySelectorAll('.col-md-4 .btn-group')
  for (let i = 0; i < buttonsArray.length; i++) {
    let test = buttonsArray[i].querySelectorAll('button')
    // if statement is not necessary
    if (test[0].classList.contains("btn-outline-secondary")) {
      test[0].classList.remove("btn-outline-secondary");
      test[0].classList.add("btn-success");
    }
  }
}
changeViewButtons()

// Ok here it's a litle bit WTF
// We add a div class name "row" between the col-md-4 and the card div
function playWithJS() {
  let arrayCards = document.querySelectorAll('.col-md-4')
  for (let i = 0; i < arrayCards.length; i++) {
    const child = document.createElement("div"); // we make a child in our working div
    child.classList.add("row"); // givin it also a class name
    arrayCards[i].appendChild(child); // pushing the created div to the node
    // but we want our created div to hold the old div
    let savedDiv = arrayCards[i].querySelectorAll('.card')[0] // saving the old div for each card
    savedDiv.remove() // removing the old div
    let newArrayCards = document.querySelectorAll('.col-md-4 .row') // select the created div
    newArrayCards[i].appendChild(savedDiv) // and giving it a child
  }
}


