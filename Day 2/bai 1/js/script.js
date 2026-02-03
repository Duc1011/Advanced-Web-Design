var arr = [];
const DISCOUNT_RATE = 0.15;

function $(id) {
  return document.getElementById(id);
}

function toNumber(value) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : NaN;
}

function round1(n) {
  return Math.round(n * 10) / 10; // 1 chữ số thập phân như hình 1
}

function setMsg(text, isError = false) {
  const el = $("msg");
  el.textContent = text || "";
  el.style.color = isError ? "#b00020" : "#1b1b1b";
}

function save() {
  const name = $("name").value.trim();
  const id = $("id").value.trim();
  const prdname = $("prdname").value.trim();

  const qty = toNumber($("qty").value);
  const price = toNumber($("price").value);

  if (!name || !id || !prdname || !Number.isFinite(qty) || !Number.isFinite(price)) {
    setMsg("Vui lòng nhập đầy đủ thông tin (Quantity/Price phải là số).", true);
    return;
  }
  if (qty < 0 || price < 0) {
    setMsg("Quantity/Price không được âm.", true);
    return;
  }

  const amount = qty * price;
  const discount = round1(amount * DISCOUNT_RATE);
  const total = round1(amount - discount);

  var a = {
    auto: arr.length + 1,
    name: name,
    id: id,
    prdname: prdname,
    qty: qty,
    price: price,
    discount: discount,
    amount: amount,
    total: total
  };

  arr.push(a);
  setMsg("Đã lưu. Bấm Show để hiển thị (hoặc tự hiển thị ngay).");
  show(); // giống trải nghiệm hình 1: lưu xong thấy bảng luôn
}

function show() {
  var html = "";
  for (let i = 0; i < arr.length; i++) {
    html += "<tr>";
    html += "<td>" + arr[i].auto + "</td>";
    html += "<td>" + arr[i].name + "</td>";
    html += "<td>" + arr[i].id + "</td>";
    html += "<td>" + arr[i].prdname + "</td>";
    html += "<td>" + arr[i].qty + "</td>";
    html += "<td>" + arr[i].price + "</td>";
    html += "<td>" + arr[i].discount + "</td>";
    html += "<td>" + arr[i].amount + "</td>";
    html += "<td>" + arr[i].total + "</td>";
    html += "</tr>";
  }
  $("tbl").innerHTML = html;
}

function resetForm() {
  $("name").value = "";
  $("id").value = "";
  $("prdname").value = "";
  $("qty").value = "";
  $("price").value = "";
  setMsg("");
}

/* Enter để Save cho nhanh */
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") save();
});
