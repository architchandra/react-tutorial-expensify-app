import getExpenses from "./expenses";



const getExpensesTotal = (expenses = []) => {
  return(
    expenses
      .map(expense => expense.amount)
      .reduce(
        (prevAmount, currentAmount) => prevAmount + currentAmount,
        0
      )
  );
};



export default getExpensesTotal;
