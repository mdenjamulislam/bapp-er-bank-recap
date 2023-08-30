/*
Step-1: Add Event listener to the deposit
Step-2: Get deposit amount form the deposit field 
    Make Sure deposit amount string to number
Step-3: Clear the deposite input field after geting value
Step-4: Get the deposit previous total
Step-5: Calculate new deposit total and set the value to the deposit toatl
Step-6: Get Current balance
Step-7: Calculate the new balance and set is so the balance total element
*/
/*
// Step 1
document.getElementById('btn-deposit').addEventListener('click', function() {
    // Step 2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // Step 3
    depositField.value = '';
    // Step 4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // Step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    // Step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    // Step 7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});
*/



document.getElementById('btn-deposit').addEventListener('click', function() {
    // Step 2
    const newDepositAmount = getInputFieldValueById('deposit-field');
    
    // Step 4
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // Calculate new delopsit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // Set deposit total value 
    setElementValueById('deposit-total', newDepositTotal);
    // Get Previous balance by using the function
    const previousBalanceTotalAmount = getTextElementValueById('balance-total');
    // Calculate new balance total
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    setElementValueById('balance-total', newBalanceTotal);
});