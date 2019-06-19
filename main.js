var expo = 0
var num = new Decimal(4)
var base = new Decimal(1.01)

function updateGUI() {
  num = base.pow(base.pow(base.pow(base.pow(base.pow(base.pow(expo))))));
  expo += 0.004;
  document.getElementById("num").textContent = "number: " + num
}

setInterval(updateGUI, 50)
