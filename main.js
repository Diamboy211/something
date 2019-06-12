var expo = 0
var num = new Decimal(4)
var base = new Decimal(2)

function updateGUI() {
  document.getElementById("num").textContent = "number: " + num
}

function looping() {
  expo += 0.005
}

function number() {
  num = base.pow(base.pow(base.pow(expo)))
}

function mainLoop(a) {
  number();
  looping();
  updateGUI()
}
  
  updateGUI()
  
  setInterval(mainLoop, 50)
