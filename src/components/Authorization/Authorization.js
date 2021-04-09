import React, { useState } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import FacebookLogin from 'react-facebook-login';
import MainPage from '../MainPage/MainPage';
import './Authorization.css';

const Authorization = ({
  code,
  setCode,
  setPeople,
  people,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const responseFacebook = (response) => {
    setCode(response.accessToken);
  };

  if (errorMessage) return <div>{errorMessage}</div>;

  return code ? (
    <MainPage
      setPeople={setPeople}
      people={people}
    />
  ) : (
    <div className="wrapper-auth">
      <div style={{ textAlign: 'center' }}>
        <h3>Please enter one of the following methods:</h3>
      </div>
      <LinkedIn
        clientId="81lx5we2omq9xh"
        onFailure={(error) => setErrorMessage(error.errorMessage)}
        onSuccess={(data) => setCode(data.code)}
        redirectUri="http://localhost:3000/linkedin"
      >
        <img
          src={linkedin}
          alt="Log in with Linked In"
          style={{ maxWidth: '150px', minHeight: '23px' }}
        />
      </LinkedIn>
      <FacebookLogin
        appId="262238732205356"
        autoLoad={true}
        // fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        cssClass="fb-btn"
      />
    </div>
  );
};

export default Authorization;
