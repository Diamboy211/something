var expo = 0
var num = new Decimal(4)
var base = new Decimal(2)

function updateGUI() {
  document.getElementById(“num”).textContent = "number: " + num
}

function looping() {
  expo++
}

function number() {
  num = base.pow(expo)
}

function mainLoop() {
  number();
  looping();
  updateGUI()
}
  
  updateGUI()
  
  setInterval(mainLoop, 50)
