let income = document.getElementById('income');
let food = document.getElementById('food');
let rent = document.getElementById('rent');
let cloth = document.getElementById('cloth');
let totalExpenses = document.getElementById('total-expenses');
let balance = document.getElementById('balance');
let balancehMsg = document.getElementById('balancehMsg');
// Calculate Section
document.getElementById('calculate').addEventListener('click', function(e) {
    e.preventDefault();
    validateInput();
    let totalCost = parseInt(food.value) + parseInt(rent.value) + parseInt(cloth.value);
    if (income.value > totalCost) {
        totalExpenses.innerText = totalCost;
        let lastBalance = income.value - totalCost;
        balance.innerText = lastBalance;
        balancehMsg.innerText = "";
    } else {
        if (income.value < totalCost) {

            balancehMsg.innerText = "Your earning amount is low!!!";
        }
    }
    // clear input field
    food.value = "";
    rent.value = "";
    cloth.value = "";

});
// Validation Massage
function getMassage(msgId) {
    document.getElementById(msgId).innerText = "* Please enter the valid number."
}

function removeMassage(msgId) {
    document.getElementById(msgId).innerText = ""
}
// Validation Check
function validateInput() {
    if (income.value == "" || income.value < 0) {
        getMassage('msg');
    } else {
        removeMassage('msg');
    }
    if (food.value == "" || food.value < 0) {
        getMassage('foodMsg');
    } else {
        removeMassage('foodMsg');
    }
    if (rent.value == "" || rent.value < 0) {
        getMassage('rentMsg');
    } else {
        removeMassage('rentMsg');
    }
    if (cloth.value == "" || cloth.value < 0) {
        getMassage('clothMsg');
    } else {
        removeMassage('clothMsg');
    }

}
//Saveings Section
let save = document.getElementById('save');
let savingTotal = document.getElementById('savings');
let savingsBalance = document.getElementById('savings-balance');
let saveLowMsg = document.getElementById('saveLowMsg');
// Savings Calculation section
function validateSavings() {
    if (save.value == "" || save.value < 0) {
        getMassage('saveMsg');
    } else {
        removeMassage('saveMsg');
    }
}
document.getElementById('savebtn').addEventListener('click', function() {
    validateSavings();
    let savingsAmount = ((income.value / 100) * save.value);
    if (income.value == "") {
        saveLowMsg.innerText = "Income field is empty!!!";
    }
    if (parseInt(balance.innerText) > savingsAmount) {
        savingTotal.innerText = savingsAmount;
        savingsBalance.innerText = parseInt(balance.innerText) - savingsAmount;
        saveLowMsg.innerText = "";
        income.value = "";
        save.value = "";
    } else {
        if (parseInt(balance.innerText) == "") {

            saveLowMsg.innerText = "Your Balance amount is low!!!";

        } else {
            income.value = "";
            save.value = "";
        }
    }



    // clear input field

});