class Shape {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calArea() {
    return this.length * this.width;
  }

  calPerimeter() {
    return 2 * (this.length + this.width);
  }
}

function getValues() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (!Number.isFinite(length) || !Number.isFinite(width)) {
    throw new Error("Vui lòng nhập đầy đủ chiều dài và chiều rộng!");
  }
  if (length <= 0 || width <= 0) {
    throw new Error("Chiều dài và chiều rộng phải > 0!");
  }

  return { length, width };
}

function showArea() {
  const resultEl = document.getElementById("result");
  try {
    const { length, width } = getValues();
    const shape = new Shape(length, width);
    resultEl.textContent = `Diện tích: ${shape.calArea()}`;
  } catch (err) {
    resultEl.textContent = err.message;
  }
}

function showPerimeter() {
  const resultEl = document.getElementById("result");
  try {
    const { length, width } = getValues();
    const shape = new Shape(length, width);
    resultEl.textContent = `Chu vi: ${shape.calPerimeter()}`;
  } catch (err) {
    resultEl.textContent = err.message;
  }
}

window.showArea = showArea;
window.showPerimeter = showPerimeter;
