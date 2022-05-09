function excercise1() {
  var notiBt1 = document.getElementById("noti-bt1");
  var n = 1;
  var result = 0;

  while (result <= 10000) {
    n++;
    result += n;
  }

  notiBt1.style.display = "block";
  notiBt1.innerHTML = `Số nguyên dương nhỏ nhất: ${n}`;
}

function excercise2() {
  var x = +document.getElementById("txtNum1").value;
  var n = +document.getElementById("txtNum2").value;
  var notiBt2 = document.getElementById("noti-bt2");

  if (n === 0) {
    return;
  }
  result = 0;
  for (var i = 1; i <= n; i++) {
    result += x ** i;
  }

  notiBt2.style.display = "block";
  notiBt2.innerHTML = `Tổng của biểu thức x + x^2 + x^3 +...+ x^n = ${result}`;
}

function excercise3() {
  var n = +document.getElementById("txtNum1-bt3").value;
  var notiBt3 = document.getElementById("noti-bt3");
  if (n === 0) {
    return;
  }
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  notiBt3.style.display = "block";
  notiBt3.innerHTML = `Giai thừa 1*2*...n = ${result}`;
}

function excercise4() {
  var notiBt4 = document.getElementById("noti-bt4");
  notiBt4.style.display = "block";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      notiBt4.innerHTML += `<div style = "background-color: red; color: #fff">Div chẵn ${i}</div>`;
    } else {
      notiBt4.innerHTML += `<div style = "background-color: blue; color: #fff">Div lẻ ${i}</div>`;
    }
  }
}
