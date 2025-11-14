function setExample() {
  document.getElementById("func").value =
    document.getElementById("examples").value;
}

function calc() {
  let expr = document.getElementById("func").value;
  try {
    let diff = math.derivative(expr, "x").toString();
    document.getElementById("result").innerHTML = "f'(x) = " + diff;
  } catch (e) {
    document.getElementById("result").innerHTML = "Error";
  }
}
