import React from 'react';
import LogoPoke from '../../atoms/logo/LogoPoke';
import QuickAccessList from '../../molecules/quickAccess/QuickAccessList';
import FormLogin from '../../molecules/form/FormLogin';

const Login = () => {
  return (
    <section>
      <LogoPoke />
      <div>
        <div>
          <QuickAccessList />
        </div>
        <FormLogin />
      </div>
    </section>
  );
};

export default Login;
