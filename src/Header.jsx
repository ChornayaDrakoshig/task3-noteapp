import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">Заметки</span>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><Link to='/'>Главная</Link></li>
              <li><Link to='/login'>Войти</Link></li>
              <li><Link to='/signup'>Зарегистрироваться</Link></li>
            </ul>
              <ul className="nav navbar-nav navbar-right">
      <li><a href='#'><span className="glyphicon glyphicon-user"></span> Привет, User</a></li>
    </ul>
          </div>
        </nav>            
      </header>
    );
  }
}

export default Header;