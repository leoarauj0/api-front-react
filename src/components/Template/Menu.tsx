/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Menu } from 'antd';
import {
  DashboardFilled,
  UserOutlined,
  DollarOutlined,
  ArrowLeftOutlined,
  HomeOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

const { SubMenu } = Menu;

// import { Container } from './styles';

export default function MenuTemplate() {
  const history = useHistory();
  return (
    <Menu theme="dark" mode="inline">
      <Menu.Item onClick={() => history.push('/')}>
        <DashboardFilled />
        <span>Inicio</span>
      </Menu.Item>
      <Menu.Item onClick={() => history.push('/condominium')}>
      <HomeOutlined />
        <span>Condomínio</span>
      </Menu.Item>
      <Menu.Item onClick={() => history.push('/purchases')}>
        <DollarOutlined />
        <span>Propostas</span>
      </Menu.Item>
      <Menu.Item onClick={() => history.push('/clients')}>
        <UserOutlined />
        <span>Clientes</span>
      </Menu.Item>
      <Menu.Item onClick={() => history.push('/signIn')}>
        <ArrowLeftOutlined />
        <span>Sair</span>
      </Menu.Item>
    </Menu>
  );
}
