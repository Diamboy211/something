var expo = 0
var num = new Decimal(4)
var base = new Decimal(1.66)
var ten = new Decimal(10)
/*For displaying big numbers in your website
you can copy the array and use
var array = []
for (let i = 0; i < array.length; i++) {
  document.getElementById(id).textContent = array[i]
}
and you can remove line 28
*/
function format(number) {
  let n = new Decimal(number)
  let e = n.log10().floor()
  let m = n.div(ten.pow(e))
  let h = n.slog(10)
  if (n.slog(10).cmp(3) > 0) {
      return "10^^" + format(h)
  } else {
    return m.toFixed(2) + "e" + e
  }
}

function updateGUI() {
  num = format(base.tetrate(base.pow(expo)));
  expo += 0.0005;
  document.getElementById("num").textContent = "number: " + num
}

setInterval(updateGUI, 20)
