


let boxesArray = document.querySelectorAll(".boxes-container .row")[0];
console.log(boxesArray)
let boxesChilds = boxesArray.querySelectorAll(".box")

let audioList = document.getElementsByTagName("audio")

document.addEventListener('keyup', FonctionTest2)


function FonctionTest2(event) {
  for (let i = 0; i < boxesChilds.length; i++) {
    boxesChilds[i].style.border = "2px solid darkgreen"
  }
 
    if (event.code === "KeyQ") {
      boxesChilds[0].style.border = "2px solid orange"
      audioList[0].play()
    } else if (event.code === "KeyW") {
      boxesChilds[1].style.border = "2px solid orange"
      audioList[1].play()
    } else if (event.code === "KeyE") {
      boxesChilds[2].style.border = "2px solid orange"
      audioList[2].play()
    } else if (event.code === "KeyR") {
      boxesChilds[3].style.border = "2px solid orange"
      audioList[3].play()
    } else if (event.code === "KeyT") {
      boxesChilds[4].style.border = "2px solid orange"
      audioList[4].play()
    } else if (event.code === "KeyY") {
      boxesChilds[5].style.border = "2px solid orange"
      audioList[5].play()
    } else if (event.code === "KeyA") {
      boxesChilds[6].style.border = "2px solid orange"
      audioList[6].play()
    } else if (event.code === "KeyS") {
      boxesChilds[7].style.border = "2px solid orange"
      audioList[7].play()
    }
  console.log(event.code)
  
}


