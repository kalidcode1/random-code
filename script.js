function randomCharacter(){
  /*
const a = String.fromCharCode(Math.ceil(Math.random()* 93) + 33)
const b = String.fromCharCode(Math.ceil(Math.random()* 93) + 33)
const c = String.fromCharCode(Math.ceil(Math.random()* 93) + 33)
const d = String.fromCharCode(Math.ceil(Math.random()* 93) + 33)
const e = String.fromCharCode(Math.ceil(Math.random()* 93) + 33)
const f = String.fromCharCode(Math.ceil(Math.random()* 93) + 33)
console.log(a+b+c+d+e+f)
*/

  //shorter way
let i = 0 
const length = Math.floor(Math.random() * 5) + 12
let storage = []

while(i < length ){
const a = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
storage.push(a)
i++
}
document.querySelector('.output').value = storage.join("")
}
