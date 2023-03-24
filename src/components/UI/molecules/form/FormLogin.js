import React from 'react';
import { Loginform } from './FormLogin.styled';
import Input from '../../atoms/input/Input';
import { Button } from '../../atoms/button/Button.style';

const FormLogin = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user, password);
  };

  return (
    <Loginform onclick={handleSubmit}>
      <Input
        type="email"
        name="user"
        placeHolder="Insira seu e-mail"
        value={user}
        onchange={(event) => setUser(event.target.value)}
      />
      <Input
        type="password"
        name="password"
        placeHolder="Insira sua senha"
        value={password}
        onchange={(event) => setPassword(event.target.value)}
      />
      <Button margin="10px" padding="10px" fontSize="20px">
        Entrar
      </Button>
    </Loginform>
  );
};

export default FormLogin;
