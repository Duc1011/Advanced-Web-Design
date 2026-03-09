

function doSomething(input, callback) {
  console.log("Demo 1: Đang làm việc...");

  setTimeout(() => {
    const result = `PROM: xử lý xong cho "${input}"✅ `;
    callback(result); 
  }, 1500);
}

function printResult(message) {
  console.log(message);
}

doSomething("Duc", printResult);

doSomething("JS Callback", (msg) => {
  console.log("PROM (inline):", msg);
});
