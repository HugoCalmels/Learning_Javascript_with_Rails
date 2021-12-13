let answer1 = document.querySelectorAll('p')
console.log("il y a :" + answer1.length + "paragraphes dans le body")

let answer2 = document.getElementById("coucou")
console.log("le contenu de l'el avec l'id 'coucou' est :" + answer2.innerHTML)

let answer3 = document.querySelectorAll('a')
console.log("le 3eme <a> est :" + answer3[2])

let answer4 = document.querySelectorAll('.compte-moi')
console.log("il y a : " + answer4.length + "éléments qui portent la classe 'compte-moi'")

let answer5 = document.querySelectorAll('li.compte-moi')
console.log("il y a : " + answer5.length + "éléments qui portent la classe 'compte-moi', de la class 'li'")

let answer6 = document.querySelectorAll('ul li.compte-moi')
console.log("il y a : " + answer6.length + "éléments qui portent la classe 'compte-moi', de la class 'li' et 'ul'")

let answer7 = document.querySelectorAll('div ul')
let answer7bis = answer7[1].querySelectorAll('li')
console.log(answer7bis[0].outerHTML)
