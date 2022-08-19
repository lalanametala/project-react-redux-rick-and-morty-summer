import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { addUser } from '../redux/actions';
import Input from '../components/Input';
import Button from '../components/Button';

function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  // const [userInfo, setUserInfo] = useState({
  //   password: '',
  //   username: '',
  // });

  const sendAction = () => {
    dispatch(addUser(username));
  };

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setUserInfo({
  //     ...userInfo,
  //     [name]: value,
  //   });
  // };

  const handleChangeUsername = ({ target }) => {
    const { value } = target;
    setUsername(value);
  };

  const handleChangePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="input-login">
        <Input
          label="Username: "
          type="text"
          onChange={ handleChangeUsername }
          value={ username }
          name="username"
        />
        <Input
          label="Senha: "
          type="password"
          onChange={ handleChangePassword }
          value={ password }
          name="password"
        />
      </div>
      <Button
        type="button"
        label="Entrar"
        onClick={ sendAction }
      />
    </div>

  );
}

export default Login;
