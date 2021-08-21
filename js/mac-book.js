const totalPrice = document.getElementById('totalPrice');
const grandAmount = document.getElementById('grand-total');
const extraMemoryCost = document.getElementById('extra-memory');
const extraStorageCost = document.getElementById('extra-storage');
const extraDeliveryCost = document.getElementById('delivery-charge');
const promoInput = document.getElementById('promoCode-input');


//--------------------------Update Memory total Cost--------------------------
function updateMemoryCost(product, price) {
    const memoryPrice = price;
    const extraMemoryCost = document.getElementById('extra-memory');
    extraMemoryCost.innerText = memoryPrice;

}
//--------------------------Update Storage Total Cost--------------------------
function updateStorageCost(product, price) {
    const storagePrice = price;
    const extraStorageCost = document.getElementById('extra-storage');
    extraStorageCost.innerText = storagePrice;
}
//-------------------------- Update Delivery Total Cost--------------------------
function updateDeliveryCost(product, price) {
    const deliveryCost = price;
    const extraDeliveryCost = document.getElementById('delivery-charge');
    extraDeliveryCost.innerText = deliveryCost;
}



//--------------------------Memory Selection--------------------------
document.getElementById("eightGB-memory-btn").addEventListener('click', function () {
    updateMemoryCost('memory', 0);
    calculateTotal();
})
document.getElementById("sixteenGB-memory-btn").addEventListener('click', function () {
    updateMemoryCost('memory', 180);
    calculateTotal();
})


//--------------------------Storage Selection--------------------------
document.getElementById("ssd256-btn").addEventListener('click', function () {
    updateStorageCost('storage', 0);
    calculateTotal();
})
document.getElementById("ssd512-btn").addEventListener('click', function () {
    updateStorageCost('storage', 100);
    calculateTotal();
})
document.getElementById("ssd1TB-btn").addEventListener('click', function () {
    updateStorageCost('storage', 180);
    calculateTotal();
})

//--------------------------Shipping Method--------------------------
document.getElementById("free-delivery").addEventListener('click', function () {
    updateDeliveryCost('delivery', 0);
    calculateTotal();
})
document.getElementById("paid-delivery").addEventListener('click', function () {
    updateDeliveryCost('delivery', 20);
    calculateTotal();
})

//--------------------------Calculate Total--------------------------
function calculateTotal() {
    const memoryTotal = Number(extraMemoryCost.innerText);
    const storageTotal = Number(extraStorageCost.innerText);
    const deliveryTotal = Number(extraDeliveryCost.innerText);

    const grandTotal = 1299 + memoryTotal + storageTotal + deliveryTotal;
    //console.log(grandTotal);
    totalPrice.innerText = grandTotal;
    grandAmount.innerText = grandTotal;
    // Return total price
    return totalPrice.innerText;
}

// --------------------------Promo code Section--------------------------
document.getElementById("promoCode-applyBtn").addEventListener("click", function () {
    promoCode();
})
function promoCode() {
    const promoText = promoInput.value;
    totalPrice.innerText = calculateTotal();
    //console.log(promoText);
    if (promoText == "stevekaku") {
        const discountAmount = Number((totalPrice.innerText * 20) / 100);
        const AfterDiscountgrandTotal = Number(totalPrice.innerText - discountAmount);
        grandAmount.innerText = Number(AfterDiscountgrandTotal);
        //console.log(grandAmount.innerText)
        const wrongPromo = document.getElementById('wrongCode');
        wrongPromo.style.display = 'none';
    }
    else {
        const wrongPromo = document.getElementById('wrongCode');
        wrongPromo.style.display = 'block';
    }
    promoInput.value = '';
}

