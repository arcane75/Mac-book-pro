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



//Memory Selection
document.getElementById("eightGB-memory-btn").addEventListener('click', function () {
    //console.log('clicked');
    document.getElementById('extra-memory').innerText = '0';
})
document.getElementById("sixteenGB-memory-btn").addEventListener('click', function () {
    document.getElementById('extra-memory').innerText = '180';
})

//Storage Selection
document.getElementById("ssd256-btn").addEventListener('click', function () {
    document.getElementById('extra-storage').innerText = '0';
})
document.getElementById("ssd512-btn").addEventListener('click', function () {
    document.getElementById('extra-storage').innerText = '100';
})
document.getElementById("ssd1TB-btn").addEventListener('click', function () {
    document.getElementById('extra-storage').innerText = '180';
})

// Shipping Method
document.getElementById("free-delivery").addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = '0';
})
document.getElementById("paid-delivery").addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = '20';
})