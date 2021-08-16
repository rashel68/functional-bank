// functional way 

// input amount function 
function getAmountInput(inputFieldId) {
    const depoInput = document.getElementById(inputFieldId);
    const depoInputText = depoInput.value;
    const depoInputValue = parseFloat(depoInputText);

    // clear deposit input field 
    depoInput.value = '';
    return depoInputValue;
}

// display amount function 
function displayFunction(displayId, inputValue) {
    const depositDisplay = document.getElementById(displayId);
    const previousDeposit = parseFloat(depositDisplay.innerText);
    const totalDeposit = previousDeposit + inputValue;
    depositDisplay.innerText = totalDeposit;
    return depositDisplay.innerText;

}

// current balance 
function currentBalance() {
    const balanceDisplay = document.getElementById('balance');
    const balanceDisplayValue = parseFloat(balanceDisplay.innerText);
    return balanceDisplayValue;
}

// update balance function 
function updateBalance(depoInputValue, isAdd) {
    const balanceDisplay = document.getElementById('balance');
    const balanceDisplayValue = parseFloat(balanceDisplay.innerText);
    if (isAdd == true) {
        balanceDisplay.innerText = balanceDisplayValue + depoInputValue;
    } else {
        balanceDisplay.innerText = balanceDisplayValue - depoInputValue;
    }
    return balanceDisplay.innerText;
}

// manual system 
document.getElementById('depoBtn').addEventListener('click', function () {
    const depoInputValue = getAmountInput('depoInput');
    if (depoInputValue > 0) {
        const display = displayFunction('deposit', depoInputValue);
        updateBalance(depoInputValue, true);
    }

});

document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withdrawInput = getAmountInput('withdrawInput');

    const currentBl = currentBalance();
    if (withdrawInput > 0 && withdrawInput <= currentBl) {
        const withdrawDisplay = displayFunction('withdraw', withdrawInput)
        updateBalance(withdrawInput, false);
    }

})