import React from 'react';



const Header = (props) => (
  <header className="header">
    <div className="container">
      <h1 className="header__title">{ props.title }</h1>
      { props.subtitle && <h2 className="header__subtitle">{ props.subtitle }</h2> }
    </div>
  </header>
);
Header.defaultProps = {
  title: 'Indecision App',
};
export default Header;