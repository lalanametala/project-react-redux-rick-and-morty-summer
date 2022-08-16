import React, { useContext, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import AppContext from '../context/AppContext';

function Login() {
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });
  const { setUser } = useContext(AppContext);

  const handleClick = () => {
    setUser({ username: loginInfo.username, redirect: true });
  };

  const handleChange = ({ target: { name, value } }) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <div>
      <div>
        <Input
          label="Username: "
          type="text"
          onChange={ handleChange }
          value={ loginInfo.username }
          name="username"
        />
        <Input
          label="Senha: "
          type="password"
          onChange={ handleChange }
          value={ loginInfo.password }
          name="password"
        />
      </div>
      <Button
        type="button"
        label="Entrar"
        onClick={ handleClick }
      />
    </div>

  );
}

export default Login;
