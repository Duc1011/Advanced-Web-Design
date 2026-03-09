var man = [
  {
    id: 1,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "250.000",
    image: "https://znews-photo.zadn.vn/w660/Uploaded/yocmvivj/2018_04_16/9_2.jpg"
  },
  {
    id: 2,
    name: "Quần baggy đen sang trọng QQ",
    code: "TC1025011BA",
    price: "398.000",
    image: "https://www.celeb.vn/wp-content/uploads/2017/10/ao-phong-thoi-trang-nam-4-554x800.jpg"
  },
  {
    id: 3,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "300.000",
    image: "https://toplist.vn/images/800px/4men-shop-175469.jpg"
  },
  {
    id: 4,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "300.000",
    image: "https://cdn.nhanh.vn/cdn/store/3138/albumCT/7046/dsc_3135.jpg"
  }
];

var woment = [
  {
    id: 1,
    name: "Quần jean nữ - KO0002",
    code: "KO0002",
    price: "269.000",
    priceOld: "370.000",
    image: "https://product.hstatic.net/1000230642/product/20_4fba3c6695f946a9a7a4b5cf84bf3674_grande.jpg"
  },
  {
    id: 2,
    name: "Áo khoác nữ - VN0002",
    code: "VN0002",
    price: "249.000",
    priceOld: "369.000",
    image: "https://luzy.vn/wp-content/uploads/2019/02/1zd9078-3.jpg"
  },
  {
    id: 3,
    name: "Áo phông nữ - US0002",
    code: "US0002",
    price: "159.000",
    priceOld: "390.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6Ytt2NITTynV8Nhtufx5JmusBY2ehUhQkNLzQQTsS_JACc9RB"
  }
];

function listProducts() {
  let demoMan = "";
  for (let i = 0; i < man.length; i++) {
    demoMan += '<div class="col-3">';
    demoMan += '<div class="card" style="width: 18rem;">';
    demoMan += '<img src="' + man[i].image + '" class="card-img-top" style="height:400px;">';
    demoMan += '<div class="card-body">';
    demoMan += '<h5 class="card-title">' + man[i].name + '</h5>';
    demoMan += '<p class="card-text">' + man[i].price;
    if (man[i].priceOld) {
      demoMan += ' <span class="price-old">' + man[i].priceOld + '</span>';
    }
    demoMan += '</p>';
    demoMan += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
    demoMan += '</div>';
    demoMan += '</div>';
    demoMan += '</div>';
  }
  document.getElementById("men").innerHTML = demoMan;

  let demoWoment = "";
  for (let i = 0; i < woment.length; i++) {
    demoWoment += '<div class="col-3">';
    demoWoment += '<div class="card" style="width: 18rem;">';
    demoWoment += '<img src="' + woment[i].image + '" class="card-img-top" style="height:400px;">';
    demoWoment += '<div class="card-body">';
    demoWoment += '<h5 class="card-title">' + woment[i].name + '</h5>';
    demoWoment += '<p class="card-text">' + woment[i].price + ' vnđ';
    if (woment[i].priceOld) {
      demoWoment += ' <span class="price-old">' + woment[i].priceOld + ' vnđ</span>';
    }
    demoWoment += '</p>';
    demoWoment += '<a href="#" class="btn btn-primary" onclick="order()">Đặt Mua</a>';
    demoWoment += '</div>';
    demoWoment += '</div>';
    demoWoment += '</div>';
  }
  document.getElementById("woment").innerHTML = demoWoment;
}

function order() {
  alert("Thank you for your order!");
}

function searchProducts() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  
  if (!searchValue) {
    alert("Vui lòng nhập từ khóa tìm kiếm!");
    return;
  }

  const filteredMan = man.filter(product => 
    product.name.toLowerCase().includes(searchValue)
  );

  const filteredWoment = woment.filter(product => 
    product.name.toLowerCase().includes(searchValue)
  );

  let demoMan = "";
  for (let i = 0; i < filteredMan.length; i++) {
    demoMan += '<div class="col-3">';
    demoMan += '<div class="card" style="width: 18rem;">';
    demoMan += '<img src="' + filteredMan[i].image + '" class="card-img-top" style="height:400px;">';
    demoMan += '<div class="card-body">';
    demoMan += '<h5 class="card-title">' + filteredMan[i].name + '</h5>';
    demoMan += '<p class="card-text">' + filteredMan[i].price;
    if (filteredMan[i].priceOld) {
      demoMan += ' <span class="price-old">' + filteredMan[i].priceOld + '</span>';
    }
    demoMan += '</p>';
    demoMan += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
    demoMan += '</div>';
    demoMan += '</div>';
    demoMan += '</div>';
  }
  document.getElementById("men").innerHTML = demoMan || '<div class="col-12"><p class="text-center">Không tìm thấy sản phẩm nam</p></div>';

  let demoWoment = "";
  for (let i = 0; i < filteredWoment.length; i++) {
    demoWoment += '<div class="col-3">';
    demoWoment += '<div class="card" style="width: 18rem;">';
    demoWoment += '<img src="' + filteredWoment[i].image + '" class="card-img-top" style="height:400px;">';
    demoWoment += '<div class="card-body">';
    demoWoment += '<h5 class="card-title">' + filteredWoment[i].name + '</h5>';
    demoWoment += '<p class="card-text">' + filteredWoment[i].price + ' vnđ';
    if (filteredWoment[i].priceOld) {
      demoWoment += ' <span class="price-old">' + filteredWoment[i].priceOld + ' vnđ</span>';
    }
    demoWoment += '</p>';
    demoWoment += '<a href="#" class="btn btn-primary" onclick="order()">Đặt Mua</a>';
    demoWoment += '</div>';
    demoWoment += '</div>';
    demoWoment += '</div>';
  }
  document.getElementById("woment").innerHTML = demoWoment || '<div class="col-12"><p class="text-center">Không tìm thấy sản phẩm nữ</p></div>';
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchProducts();
      }
    });
  }
});
