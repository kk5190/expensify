// Higher order components = A component that renders another component
// reuse code
// Render hijacking
// prop manipulation
// abstract state


import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is : {props.info}</p> 
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, don't share!</p>}
      
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Login Please</p>
      )}
    </div>
  )
};

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDom.render(<AdminInfo isAdmin={true} info="DETAILS" />,document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="DETAILS" />,document.getElementById('app'));