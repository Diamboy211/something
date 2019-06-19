var expo = 0
var num = new Decimal(4)
var base = new Decimal(1.66)

function updateGUI() {
  num = base.tetrate(expo)
  expo += 0.0005;
  document.getElementById("num").textContent = "number: " + num
}

setInterval(updateGUI, 1)
