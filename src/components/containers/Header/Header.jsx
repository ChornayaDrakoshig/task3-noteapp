import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Заметки</span>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Главная</Link></li>
            <li><Link to="/login">Войти</Link></li>
            <li><Link to="/signup">Зарегистрироваться</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" title={props.email}>
                <span className="glyphicon glyphicon-user" />
                { props.isLoggedIn && 'Привет, ' }
                { props.username}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;