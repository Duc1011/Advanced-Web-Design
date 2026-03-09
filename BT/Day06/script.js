function formatPrice(price) {
  return price.toLocaleString("vi-VN") + " đ";
}

function renderStars(rating) {
  return Array(rating).fill('<span class="star">★</span>').join("");
}

const hotelsGrid = document.getElementById("hotelsGrid");

function createHotelCard(hotel) {
  const card = document.createElement("div");
  card.className = "hotel-card";
  card.dataset.id = hotel.id;

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${hotel.image}" alt="${hotel.name}"
           onerror="this.src='https://via.placeholder.com/400x250?text=Hotel'">
      <button class="heart-btn ${hotel.liked ? "liked" : ""}" data-id="${hotel.id}">♥</button>
    </div>
    <div class="card-body">
      <div class="card-rating">
        <div class="stars">${renderStars(hotel.rating)}</div>
        <span class="review-count">${hotel.reviews} Review</span>
      </div>
      <div class="card-name">${hotel.name}</div>
      <div class="card-type">${hotel.type}</div>
      <div class="card-price-row">
        <span class="price-label">Giá tiền</span>
        <span class="price-value">${formatPrice(hotel.price)}</span>
      </div>
      <div class="card-availability">
        <span class="avail-item"> Còn ${hotel.available} phòng</span>
        <span class="avail-item">✅ ${hotel.booked} đã đặt</span>
      </div>
      <button class="btn-book">Đặt Ngay ⚡</button>
    </div>
  `;

  card.querySelector(".heart-btn").addEventListener("click", function () {
    this.classList.toggle("liked");
  });

  return card;
}

async function loadHotels() {
  hotelsGrid.innerHTML = '<div class="loading-msg">⏳ Đang tải dữ liệu...</div>';
  try {
    const hotels = await mockApi.getHotels();
    hotelsGrid.innerHTML = "";
    hotels.forEach((h) => hotelsGrid.appendChild(createHotelCard(h)));
  } catch {
    hotelsGrid.innerHTML = '<div class="loading-msg">❌ Lỗi tải dữ liệu</div>';
  }
}

const btnShow    = document.getElementById("btnShow");
const btnAddNew  = document.getElementById("btnAddNew");
const addForm    = document.getElementById("addHotelForm");
const tableWrap  = document.getElementById("hotelTableWrap");
const tableBody  = document.getElementById("hotelTableBody");
const btnChoose  = document.getElementById("btnChooseImg");
const fileInput  = document.getElementById("fileInput");
const imgPreview = document.getElementById("imgPreview");

let selectedImage = "";

btnShow.addEventListener("click", async () => {
  const isVisible = tableWrap.classList.toggle("visible");
  btnShow.textContent = isVisible ? "Ẩn" : "Hiển Thị";
  if (isVisible) await renderTable();
});

btnChoose.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    selectedImage = e.target.result;
    imgPreview.src = selectedImage;
    imgPreview.style.display = "block";
  };
  reader.readAsDataURL(file);
});

addForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name  = document.getElementById("inputName").value.trim();
  const type  = document.getElementById("inputType").value.trim();
  const price = document.getElementById("inputPrice").value.trim();

  if (!name || !type || !price) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const submitBtn = document.getElementById("btnAddNew");
  submitBtn.textContent = "Đang lưu...";
  submitBtn.disabled = true;

  try {
    const newHotel = await mockApi.addHotel({ name, type, price, image: selectedImage });

    hotelsGrid.appendChild(createHotelCard(newHotel));

    addForm.reset();
    imgPreview.style.display = "none";
    selectedImage = "";

    if (tableWrap.classList.contains("visible")) await renderTable();

    alert(`✅ Đã thêm "${newHotel.name}" thành công!`);
  } catch {
    alert("❌ Lỗi khi thêm phòng!");
  } finally {
    submitBtn.textContent = "Thêm mới phòng 📅";
    submitBtn.disabled = false;
  }
});

async function renderTable() {
  tableBody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#aaa">⏳ Đang tải...</td></tr>';
  const hotels = await mockApi.getHotels();
  tableBody.innerHTML = "";
  hotels.forEach((hotel) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${hotel.id}</td>
      <td><img class="table-img" src="${hotel.image}" alt="${hotel.name}"
               onerror="this.src='https://via.placeholder.com/60x40'"></td>
      <td>${hotel.name}</td>
      <td>${hotel.type}</td>
      <td>${formatPrice(hotel.price)}</td>
      <td><button class="btn-delete">Xóa</button></td>
    `;
    tr.querySelector(".btn-delete").addEventListener("click", async () => {
      if (!confirm(`Xóa phòng "${hotel.name}"?`)) return;
      await mockApi.deleteHotel(hotel.id);
      const cardEl = hotelsGrid.querySelector(`[data-id="${hotel.id}"]`);
      if (cardEl) cardEl.remove();
      tr.remove();
    });
    tableBody.appendChild(tr);
  });
}

loadHotels();
