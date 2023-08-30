/*
Step-1: Add Event listener to the withdraw
Step-2: Get withdraw amount form the withdraw field 
    Make Sure withdraw amount string to number
Step-3: Clear the withdraw input field after geting value
Step-4: Get the previous withdraw balance
Step-5: 
Step-6: Get the previous total balance
Step-7: Calculate new withdraw and set the value to the toatl balance

*/
/*
// Step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step 2
    const withdrawFIeld = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawFIeld.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // Step 3
    withdrawFIeld.value = '';
    // Step 4
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = previousWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawElement.innerText = totalWithdrawAmount;

    // Step 6
    const previousBalanceELement = document.getElementById('balance-total');
    const previousBalanceAmountString = previousBalanceELement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    // Step 7
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    previousBalanceELement.innerText = newBalanceTotal;
});

*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');

    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    
    setElementValueById('withdraw-total', totalWithdrawAmount);

    const previousBalanceAmount = getTextElementValueById('balance-total');
    // Step 7
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    setElementValueById('balance-total', newBalanceTotal);
});