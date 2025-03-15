function trackExpense(budget, expenseAmount) {
    if(isNaN(budget) || isNaN(expenseAmount)) {
        return 'Please enter valid numeric values for budget and expense amount.';
    }
  // Calculate the difference between the budget and expenseAmount, and return that difference
    const remainingBudget = budget - expenseAmount;
    return remainingBudget;
}

// Implement a 'getBudgetStatus() function that takes in the budget and expenseAmount, and returns a string based on the following conditions
// if expeneseAmount is lesser than budget, return "You're within budget"
// if they are equal, return "Budget met. Any future expense will overshoot the budget"
// if expenseAmount is greater than budget, return "Overshot the budget!"

function getBudgetStatus(budget, expenseAmount) {
    if(expenseAmount < budget) {
        return "You're within budget";
    } else if(expenseAmount === budget) {
        return "Budget met. Any future expense will overshoot the budget";
    } else {
        return "Overshot the budget!";
    }
}

// Don't change this line
if(typeof module != 'undefined') {
  module.exports = { getBudgetStatus, trackExpense  };
}