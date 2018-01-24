import React from 'react';
import SignupForm from 'sourceDir/components/containers/SignupForm/SignupFormConnector.jsx';
import LogoutForm from 'sourceDir/components/containers/LogoutForm/LogoutFormConnector.jsx';

function SignupPage(props) {
  return (
    <div>
      <div className="panel-group">
        <div className="panel panel-default userforms">
          <div className="panel-heading">Регистрация</div>
          <div className="panel-body">
            {('type' in props.alert) && <div className={`alert ${props.alert.type}`}>{props.alert.msg}</div>}
            { !props.isLoggedIn && <SignupForm /> }
            { props.isLoggedIn && <LogoutForm /> }
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;