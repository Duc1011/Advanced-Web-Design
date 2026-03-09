// f
// unction doSomething(action) {
//   console.log("Đang làm việc...");
//   action();
// }

//doSomething(function() {
  //console.log("Xong việc rồi ✅");
//});
function doSomething(callback) {
  console.log("Đang làm việc...");
  callback();
}

function inkq() {
  console.log("Xong việc rồi ✅");
}

// truyền 1 callback vào
doSomething(inkq);
