import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <span className='navbar-brand'>Заметки</span>
            </div>
            <ul className='nav navbar-nav'>
              <li className='active'><Link to='/'>Главная</Link></li>
              <li><Link to='/login'>Войти</Link></li>
              <li><Link to='/signup'>Зарегистрироваться</Link></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#' title={this.props.email}>
                  <span className='glyphicon glyphicon-user' />
                  { this.props.isLoggedIn && 'Привет, ' }
                  { this.props.username}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggedIn: ('username' in state.user),
    username: ('username' in state.user) ? state.user.username : 'Anonymous',
    email: ('email' in state.user) ? state.user.email : '',
  };
}
export default connect(mapStateToProps)(Header);