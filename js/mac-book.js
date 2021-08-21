//DISABLING 8GB Memory BUTTON
function eightGBButtonDisable() {
    document.getElementById('eightGB-memory-btn').disabled = true;
    document.getElementById('sixteenGB-memory-btn').disabled = false;
}
//DISABLING 16GB Memory BUTTON
function sixteenGBButtonDisable() {
    document.getElementById('eightGB-memory-btn').disabled = false;
    document.getElementById('sixteenGB-memory-btn').disabled = true;
}
//DISABLING 256GB Storage BUTTON
function storage256ButtonDisable() {
    document.getElementById('ssd256-btn').disabled = true;
    document.getElementById('ssd512-btn').disabled = false;
    document.getElementById('ssd1TB-btn').disabled = false;
}
//DISABLING 512GB Storage BUTTON
function storage512ButtonDisable() {
    document.getElementById('ssd256-btn').disabled = false;
    document.getElementById('ssd512-btn').disabled = true;
    document.getElementById('ssd1TB-btn').disabled = false;
}
//DISABLING 1TB Storage BUTTON
function storage1TBButtonDisable() {
    document.getElementById('ssd256-btn').disabled = false;
    document.getElementById('ssd512-btn').disabled = false;
    document.getElementById('ssd1TB-btn').disabled = true;
}
//Free delivery Button Disabled
function freeDelButtonDisable() {
    document.getElementById('free-delivery').disabled = true;
    document.getElementById('paid-delivery').disabled = false;
}
//Paid delivery Button Disabled
function paidDelButtonDisable() {
    document.getElementById('free-delivery').disabled = false;
    document.getElementById('paid-delivery').disabled = true;
}


const totalPrice = document.getElementById('totalPrice');
const grandAmount = document.getElementById('grand-total');
const extraMemoryCost = document.getElementById('extra-memory');
const extraStorageCost = document.getElementById('extra-storage');
const extraDeliveryCost = document.getElementById('delivery-charge');


//Memory Selection
document.getElementById("eightGB-memory-btn").addEventListener('click', function () {
  
    extraMemoryCost.innerText = '0';
    calculateTotal();
})
document.getElementById("sixteenGB-memory-btn").addEventListener('click', function () {
   
    extraMemoryCost.innerText = '180';
    calculateTotal();
})


//Storage Selection
document.getElementById("ssd256-btn").addEventListener('click', function () {
  
    extraStorageCost.innerText = '0';
    calculateTotal();
})
document.getElementById("ssd512-btn").addEventListener('click', function () {
    //document.getElementById('extra-storage').innerText = '100';
    //updateStorageCost('storage', 100);
    extraStorageCost.innerText = '100';
    calculateTotal();
})
document.getElementById("ssd1TB-btn").addEventListener('click', function () {
 
    extraStorageCost.innerText = '180';
    calculateTotal();
})

// Shipping Method
document.getElementById("free-delivery").addEventListener('click', function () {
    //updateDeliveryCost('delivery', 0);
    extraDeliveryCost.innerText = '0';
    calculateTotal();
})
document.getElementById("paid-delivery").addEventListener('click', function () {
  
    extraDeliveryCost.innerText = '20';
    calculateTotal();
})

//Calculate Total
function calculateTotal() {
    
    const memoryTotal = Number(extraMemoryCost.innerText);
    const storageTotal = Number(extraStorageCost.innerText);
    const deliveryTotal = Number(extraDeliveryCost.innerText);

    const grandTotal = 1299 + memoryTotal + storageTotal + deliveryTotal;
    //console.log(grandTotal);
    totalPrice.innerText = grandTotal;
    grandAmount.innerText = grandTotal;
    //console.log(totalPrice.innerText);
}
