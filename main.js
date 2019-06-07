var triplePower = new Decimal(0)
var num = new Decimal(4)
var base = new Decimal(2)

function updateGUI() {
  document.getElementById(“num”).textContent = "number: " + num
}

function looping() {
  add(triplePower, new Decimal(0.01))
}

function number() {
  num = base.pow(base.pow(base.pow(triplePower)))

function mainLoop() {
  number();
  looping();
  updateGUI()
}
  
  updateGUI()
  
  setInterval(mainLoop, 50)
