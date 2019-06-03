import break_eternity.js
var triplePower = new Decimal(0)
var num = new Decimal(4)

function updateGUI() {
  document.getElementById(“num”).textContent = “number: ” + num
}

function looping() {
  add(triplePower, new Decimal(0.01))
}

function number() {
  num = pow(2, pow(2, pow(2, triplePower)))

function mainLoop() {
  

