// Load stock dari localStorage
let stock = JSON.parse(localStorage.getItem("stockData")) || {
    sock: 0,
    handsock: 0
};

function updateUI() {
    document.getElementById("sock-stock").innerText = stock.sock;
    document.getElementById("handsock-stock").innerText = stock.handsock;
}

function saveStock() {
    localStorage.setItem("stockData", JSON.stringify(stock));
}

function addStock(item) {
    stock[item]++;
    saveStock();
    updateUI();
}

function removeStock(item) {
    if (stock[item] > 0) {
        stock[item]--;
        saveStock();
        updateUI();
    }
}

updateUI();
