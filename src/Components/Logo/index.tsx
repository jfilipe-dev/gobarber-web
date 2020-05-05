import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Logo } from './styles';

interface LogoProps {
  size?: 'small' | 'large';
}

const LogoComponent: React.FC<LogoProps> = ({ size = 'large' }: LogoProps) => (
  <Logo size={size}>
    <div>
      <img src={logoImg} alt="gobarber" />
      <h1>GoBarber</h1>
    </div>
  </Logo>
);

export default LogoComponent;
