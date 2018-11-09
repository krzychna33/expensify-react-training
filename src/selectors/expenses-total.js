
export default (expenses) => {
    let expensesTotalValue = 0;
    expenses.forEach((expense)=> {
        expensesTotalValue += expense.amount;
    })

    return expensesTotalValue;
}