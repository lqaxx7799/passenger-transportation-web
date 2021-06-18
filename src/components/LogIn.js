import { Button, TextInput } from 'carbon-components-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import authenticationActions from '../actions/authentication.actions';

const { PasswordInput } = TextInput;

const LogIn = (props) => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange = (key, value) => {
    setAccount({
      ...account,
      [key]: value,
    });
  };

  const onSubmit = () => {
    dispatch(authenticationActions.logIn(account.username, account.password))
      .then((result) => {
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        alert('Error');
      });
  };

  return (
    <div>
      <h1>Log In</h1>
      <div className="bx--row" style={{ marginBottom: '16px' }}>
        <div className="bx--col-lg-8">
          <TextInput
            invalidText="Invalid error message."
            labelText="User name"
            placeholder="Insert user name"
            value={account.username}
            onChange={(e) => onChange('username', e.target.value)}
          />
        </div>
      </div>
      <div className="bx--row" style={{ marginBottom: '16px' }}>
        <div className="bx--col-lg-8">
          <PasswordInput
            invalidText="Invalid error message."
            labelText="Password"
            placeholder="Insert password"
            value={account.password}
            onChange={(e) => onChange('password', e.target.value)}
          />
        </div>
      </div>
      <Button onClick={onSubmit}>Log in</Button>
    </div>
  );
};

export default LogIn;
