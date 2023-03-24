import React from 'react';
import { QuickAccessListUl, QuickAccessListLi } from './QuickAccessList.style';
import GoogleIcon from '../../atoms/icons/GoogleIcon';
import FacebookIcon from '../../atoms/icons/FacebookIcon';

const QuickAccessList = () => {
  return (
    <>
      <QuickAccessListUl>
        <QuickAccessListLi>
          <GoogleIcon />
        </QuickAccessListLi>
        <QuickAccessListLi>
          <FacebookIcon />
        </QuickAccessListLi>
      </QuickAccessListUl>
    </>
  );
};

export default QuickAccessList;
