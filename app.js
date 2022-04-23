// calculations
function updateNumberAndPrice(product, price, plusClicked) {
    const input = document.getElementById(product + '-number');
    let inputNumber = parseInt(input.value);
    if (plusClicked == true) {
        inputNumber = inputNumber + 1;
    }
    else if (plusClicked == false && inputNumber > 0) {
        inputNumber = inputNumber - 1;
    }
    input.value = inputNumber;
    const total = document.getElementById(product + '-total');
    total.innerText = inputNumber * price;
    calculateTotal();
};

function getInput(product) {
    const productInput = document.getElementById(product + '-number');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}
function calculateTotal() {
    const phonePrice = getInput('phone') * 1219;
    const casePrice = getInput('case') * 59;
    const subtotal = phonePrice + casePrice;
    const tax = parseInt((subtotal * 11) / 100);
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// Phone event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumberAndPrice('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumberAndPrice('phone', 1219, false);
});
// Phone case event
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumberAndPrice('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateNumberAndPrice('case', 59, false);
});
