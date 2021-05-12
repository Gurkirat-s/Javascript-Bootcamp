let myAccount = {
    name: 'Jon',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount

    
    // Only properties can be manipulated
    // Object is passed by value, but properties are referenced
    //account.expenses = account.expenses + amount
    console.log(account)
}


//Challenge

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// Account for Jon has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addIncome(myAccount, 100)
addExpense(myAccount, 500)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))