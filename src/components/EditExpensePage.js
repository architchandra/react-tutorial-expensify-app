import React from 'react';



const EditExpensePage = (props) => {
  return (
    <div>
      <h2>Edit an Expense</h2>
      <p>For id { props.match.params.id }</p>
    </div>
  );
};
export default EditExpensePage;