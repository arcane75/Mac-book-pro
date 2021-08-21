//DISABLING 8GB Memory BUTTON
function eightGBButtonDisable() {
    document.getElementById('eightGB-memory-btn').disabled = true;
    document.getElementById('sixteenGB-memory-btn').disabled = false;
    // document.getElementById('ssd256-btn').disabled = false;
    // document.getElementById('ssd512-btn').disabled = false;
    // document.getElementById('ssd1TB-btn').disabled = false;
    // document.getElementById('free-delivery').disabled = false;
    // document.getElementById('paid-delivery').disabled = false;
}
//DISABLING 16GB Memory BUTTON
function sixteenGBButtonDisable() {
    document.getElementById('eightGB-memory-btn').disabled = false;
    document.getElementById('sixteenGB-memory-btn').disabled = true;
    // document.getElementById('ssd256-btn').disabled = false;
    // document.getElementById('ssd512-btn').disabled = false;
    // document.getElementById('ssd1TB-btn').disabled = false;
    // document.getElementById('free-delivery').disabled = false;
    // document.getElementById('paid-delivery').disabled = false;
}
//DISABLING 256GB Storage BUTTON
function storage256ButtonDisable() {
    // document.getElementById('eightGB-memory-btn').disabled = false;
    // document.getElementById('sixteenGB-memory-btn').disabled = false;
    document.getElementById('ssd256-btn').disabled = true;
    document.getElementById('ssd512-btn').disabled = false;
    document.getElementById('ssd1TB-btn').disabled = false;
    // document.getElementById('free-delivery').disabled = false;
    // document.getElementById('paid-delivery').disabled = false;
}
//DISABLING 512GB Storage BUTTON
function storage512ButtonDisable() {
    // document.getElementById('eightGB-memory-btn').disabled = false;
    // document.getElementById('sixteenGB-memory-btn').disabled = false;
    document.getElementById('ssd256-btn').disabled = false;
    document.getElementById('ssd512-btn').disabled = true;
    document.getElementById('ssd1TB-btn').disabled = false;
    // document.getElementById('free-delivery').disabled = false;
    // document.getElementById('paid-delivery').disabled = false;
}
//DISABLING 1TB Storage BUTTON
function storage1TBButtonDisable() {
    // document.getElementById('eightGB-memory-btn').disabled = false;
    // document.getElementById('sixteenGB-memory-btn').disabled = false;
    document.getElementById('ssd256-btn').disabled = false;
    document.getElementById('ssd512-btn').disabled = false;
    document.getElementById('ssd1TB-btn').disabled = true;
    // document.getElementById('free-delivery').disabled = false;
    // document.getElementById('paid-delivery').disabled = false;
}
//Free delivery Button Disabled
function freeDelButtonDisable() {
    // document.getElementById('eightGB-memory-btn').disabled = false;
    // document.getElementById('sixteenGB-memory-btn').disabled = false;
    // document.getElementById('ssd256-btn').disabled = false;
    // document.getElementById('ssd512-btn').disabled = false;
    // document.getElementById('ssd1TB-btn').disabled = false;
    document.getElementById('free-delivery').disabled = true;
    document.getElementById('paid-delivery').disabled = false;
}
//Paid delivery Button Disabled
function paidDelButtonDisable() {
    // document.getElementById('eightGB-memory-btn').disabled = false;
    // document.getElementById('sixteenGB-memory-btn').disabled = false;
    // document.getElementById('ssd256-btn').disabled = false;
    // document.getElementById('ssd512-btn').disabled = false;
    // document.getElementById('ssd1TB-btn').disabled = false;
    document.getElementById('free-delivery').disabled = false;
    document.getElementById('paid-delivery').disabled = true;
}

//Memory Selection
document.getElementById("eightGB-memory-btn").addEventListener('click', function () {
    console.log('clicked');
})
document.getElementById("sixteenGB-memory-btn").addEventListener('click', function () {

})
//Storage Selection
document.getElementById("ssd256-btn").addEventListener('click', function () {

})
document.getElementById("ssd512-btn").addEventListener('click', function () {

})
document.getElementById("ssd1TB-btn").addEventListener('click', function () {

})
document.getElementById("free-delivery").addEventListener('click', function () {

})
document.getElementById("paid-delivery").addEventListener('click', function () {

})