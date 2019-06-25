var expo = 0
var num = new Decimal(4)
var base = new Decimal(1.66)
var ten = new Decimal(10)

function format(number) {
  let n = new Decimal(number)
  let e = n.log10().floor()
  let m = n.div(ten.pow(e))
  let h = n.slog(10)
  if (n.slog(10).cmp(3) > 0) {
      return "10^^" + h.toFixed(2)
    }
  }
  else {
    return m.toFixed(2) + "e" + e
  }
}

function updateGUI() {
  num = format(base.tetrate(base.tetrate(expo)));
  expo += document.getElementById("speed");
  document.getElementById("num").textContent = "number: " + num
}

setInterval(updateGUI, 1)
