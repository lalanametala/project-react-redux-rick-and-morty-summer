import React, { useContext, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import AppContext from '../context/AppContext';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    password: '',
    username: '',
  });
  const { setUser } = useContext(AppContext);

  const sendAction = () => {
    const { username } = loginInfo;
    setUser({ username, redirect: true });
  };

  function handleChange({ target }) {
    const { name, value } = target;
    setLoginInfo({ ...loginInfo, [name]: value });
  }

  const { username, password } = loginInfo;
  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="input-login">
        <Input
          label="Username: "
          type="text"
          onChange={ handleChange }
          value={ username }
          name="username"
        />
        <Input
          label="Senha: "
          type="password"
          onChange={ handleChange }
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
