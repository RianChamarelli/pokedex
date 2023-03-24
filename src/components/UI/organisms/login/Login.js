import React from 'react';
import { LoginSection, LoginDiv, QuickAccessDiv } from './Login.styled';
import LogoPoke from '../../atoms/logo/LogoPoke';
import QuickAccessList from '../../molecules/quickAccess/QuickAccessList';
import FormLogin from '../../molecules/form/FormLogin';

const Login = () => {
  return (
    <LoginSection>
      <LogoPoke />
      <LoginDiv>
        <QuickAccessDiv>
          <QuickAccessList />
        </QuickAccessDiv>
        <FormLogin />
      </LoginDiv>
    </LoginSection>
  );
};

export default Login;
