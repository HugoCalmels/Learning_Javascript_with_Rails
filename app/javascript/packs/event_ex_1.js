// f1 for fonctionnality #1 
let f1 = document.querySelector('.text-muted .container')
f1.addEventListener('click', SendMessageToTheConsole)
function SendMessageToTheConsole() {
  console.log("clique")
}

let number = 0
let f1bis = document.querySelector('.text-muted .container')
f1bis.addEventListener('click', SendMessageToTheConsoleBis)
function SendMessageToTheConsoleBis() {
  number += 1
  console.log("cliq numéro : " + number)
}

// f2 - f4
let f2onClick = document.querySelectorAll('button.btn.btn-sm.btn-outline-secondary')
console.log(f2onClick)
// iteration sur le node "btn-edit"
let cardsArray = document.querySelectorAll('.col-md-4 p')

let f3condition = 1

for (let i = 0; i < f2onClick.length; i++) {
  
  f2onClick[i].addEventListener("mousedown", changeCardsColors)

    function changeCardsColors() {
      if (f3condition === 1) {

        if (i == 1){
          cardsArray[i].classList.add("text-success")
          f3condition = 2
        } else  {
          cardsArray[i].classList.add("text-danger")
          f3condition = 2
        } 

      } else if (f3condition === 2) { 

        if (i == 1){
          cardsArray[i].classList.remove("text-success")
          f3condition = 1
        } else  {
          cardsArray[i].classList.remove("text-danger")
          f3condition = 1
        } 
      }   
    }

}

// f6
let f6cursor = document.querySelectorAll('button.btn.btn-sm.btn-success')
let f6paragraph = document.querySelectorAll('.col-md-4 p')
let f6card = document.querySelectorAll('.col-md-4')
let f6condition = 1

let f6paragraphSaves = []
for (let i = 0; i < f6paragraph.length; i++) {
  if (f6paragraph[i] != '') {
    f6paragraphSaves.push(f6paragraph[i].innerHTML)
  } 
}

for (let i = 0; i < f6card.length; i++) {
  f6cursor[i].addEventListener('mouseover', changeAttributes)

  function changeAttributes() {
    if (f6condition === 1) {
      f6paragraph[i].innerHTML = '';
      f6card[i].style.width = '20%';
      f6condition = 2
    } else if (f6condition === 2) {
      f6paragraph[i].innerHTML = f6paragraphSaves[i];
      f6card[i].style.width = '';
      f6condition = 1
    }
  }
}

// f7 & f8
// failed this 

let f7selector = document.querySelectorAll('.jumbotron .container p a')

f7selector[1].removeAttribute("href");
f7selector[1].addEventListener('mousedown', changeOrder)
/*
let parentElement = document.querySelectorAll(".album .container .row")
console.log(parentElement[0])
let childElement = parentElement[0].querySelectorAll(".col-md-4")
console.log(childElement[0])

let removed = parentElement[0].removeChild(childElement[0])
 */
function changeOrder() {

  let parentElement = document.querySelectorAll(".album .container .row")[0]
  let childElement = parentElement.querySelectorAll(".col-md-4")
  console.log(childElement.length)
  for (let i = 0; i < childElement.length; i++) {
    if (i === 0) {
      console.log('alo?')
      let removed = parentElement.removeChild(childElement[0])
      parentElement.appendChild(removed)
    } else if (i !== 0)  {
    
    }
  }
}
// inverse order
f7selector[0].removeAttribute("href");
f7selector[0].addEventListener('mousedown', changeOrderInverse)

function changeOrderInverse() {

  let parentElement = document.querySelectorAll(".album .container .row")[0]
  let childElement = parentElement.querySelectorAll(".col-md-4")
  console.log(childElement.length)
  for (let i = 0; i < childElement.length; i++) {
    if (i === (childElement.length - 1)) {
      console.log('alo?')
      let removed = parentElement.removeChild(childElement[childElement.length - 1])
      parentElement.appendChild(removed)
      parentElement.insertBefore(removed,childElement[0])
    } else if (i !== (childElement.length - 1))  {   
    }
  }
}