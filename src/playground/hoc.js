import React from 'react';
import ReactDOM from 'react-dom';



const Info = (props) => (
  <div>
    <h1>
      Info
    </h1>
    {props.message && <p>{props.message}</p>}
  </div>
);

// Higher order component
// Returns a component
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Private info. Don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);



ReactDOM.render(<AdminInfo isAdmin={true} message={ 'Holla if you hear me!' } />, document.getElementById('app'));