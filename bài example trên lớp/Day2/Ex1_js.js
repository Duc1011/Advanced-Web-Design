function myFunction1() {
  var a = parseFloat(document.getElementById('text_1').value);
  var b = parseFloat(document.getElementById('text_2').value);
  var year = parseInt(document.getElementById('select').value, 10);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('result').value = "";
    document.getElementById('display').innerHTML = "Vui lòng nhập số hợp lệ";
    document.getElementById('display').style.color = "red";
    return;
  }

  var k;

  switch (year) {
    case 1:
      k = (a + (b * 2)) / 3;
      break;
    case 2:
      k = ((a * 2) + (b * 3)) / 5;
      break;
    case 3:
      k = ((a * 3) + (b * 4)) / 7;
      break;
    default:
      k = (a + b) / 2;
  }

  var showK = Number(k.toFixed(6));
  document.getElementById('result').value = showK;

  var display = document.getElementById('display');

  if (k >= 9) {
    display.innerHTML = "Hoc sinh gioi";
    display.style.color = "red";
  } else if (k >= 7) {
    display.innerHTML = "Hoc sinh kha";
    display.style.color = "blue";
  } else if (k >= 5) {
    display.innerHTML = "Hoc sinh Trung binh";
    display.style.color = "yellow";
  } else {
    display.innerHTML = "Hoc sinh yeu";
    display.style.color = "black";
  }
}

function myFunction2() {
  document.getElementById('text_1').value = "";
  document.getElementById('text_2').value = "";
  document.getElementById('select').value = "1";
  document.getElementById('result').value = "";
  document.getElementById('display').innerHTML = "";
}
