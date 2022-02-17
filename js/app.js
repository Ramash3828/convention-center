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
        savingTotal.innerText = "";
        savingsBalance.innerText = lastBalance;
    } else {
        if (income.value < totalCost) {

            balancehMsg.innerText = "Your earning amount is low!!!";
        }
    }
});


// Validation Check
let input = document.querySelectorAll('input')

function validateInput() {
    for (let i = 0; i < input.length; i = i + 1) {
        console.log(input[i])
        if (input[i].value == "" || input[i].value < 0) {
            document.querySelectorAll('span')[i + 1].innerText = "* Please enter the valid number.";
        } else {
            document.querySelectorAll('span')[i + 1].innerHTML = "";
        }
    }
}


//Saveings Section
let save = document.getElementById('save');
let savingTotal = document.getElementById('savings');
let savingsBalance = document.getElementById('savings-balance');
let saveLowMsg = document.getElementById('saveLowMsg');

// Savings field validation section
function validateSavings() {
    if (save.value == "" || save.value < 0) {
        document.getElementById("saveMsg").innerText = "* Please enter the valid number.";
    } else {
        document.getElementById("saveMsg").innerText = "";
    }
}

// Savings Calculation section
document.getElementById('savebtn').addEventListener('click', function() {
    validateSavings();

    let savingsAmount = ((income.value / 100) * save.value).toFixed(2);

    if (income.value != "") {

        saveLowMsg.innerText = "";
        if (parseInt(balance.innerText) > savingsAmount && save.value > 0) {
            savingTotal.innerText = savingsAmount;
            savingsBalance.innerText = (parseInt(balance.innerText) - savingsAmount).toFixed(2);
            // clear input amd Massage field
            food.value = "";
            rent.value = "";
            cloth.value = "";
            saveLowMsg.innerText = "";
            income.value = "";
            save.value = "";
        } else {
            if (parseInt(balance.innerText) < savingsAmount) {
                saveLowMsg.innerText = "Your Balance amount is low!!!";
            }
        }
    } else {
        saveLowMsg.innerText = "Income field is empty!!!";
    }

});