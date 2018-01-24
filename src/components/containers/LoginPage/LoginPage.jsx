import React from 'react';
import LoginForm from 'sourceDir/components/containers/LoginForm/LoginFormConnector.jsx';
import LogoutForm from 'sourceDir/components/containers/LogoutForm/LogoutFormConnector.jsx';

function LoginPage(props) {
  return (
    <div className="panel-group">
      <div className="panel panel-default userforms">
        <div className="panel-heading">Вход</div>
        <div className="panel-body">
          {('type' in props.alert) && <div className={`alert ${props.alert.type}`}>{props.alert.msg}</div>}
          { props.isLoggedIn ? (<LogoutForm />) : (<LoginForm />) }
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
