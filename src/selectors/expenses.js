const getExpenses = (expenses = [], { text, sortBy, startDate, endDate } = {}) => {
  if(expenses.length > 0) {
    return expenses.filter((expense) => {
      const hasTextFilterMatch = typeof text !== 'string' || (expense.description.toLowerCase()).includes(text.toLowerCase()) ;
      const hasStartDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const hasEndDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

      return hasTextFilterMatch && hasStartDateMatch && hasEndDateMatch;
    })
    .sort((expense1, expense2) => {
      if(sortBy === 'date') {
        return expense1.createdAt < expense2.createdAt ? 1 : -1;
      }
      else if(sortBy === 'amount') {
        return expense1.amount < expense2.amount ? 1 : -1;
      }
    });
  }
};



export default getExpenses;