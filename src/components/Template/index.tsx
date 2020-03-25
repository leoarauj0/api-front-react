import React, { useState, ReactNode } from 'react';
import { Layout } from 'antd';
import Menu from './Menu';

const { Header, Sider, Content, Footer } = Layout;

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}
export default function Template({ children }: IProps) {
  const [collapsed, setCollapsed] = useState(false);

  function onCollapse(value: boolean) {
    setCollapsed(value);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div
          style={{
            height: 32,
            background: 'rgba(255, 255, 255, 0.2)',
            margin: 16,
          }}
        />
        <Menu />
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#FFF',
            padding: 0,
            marginBottom: 20,
            alignItems: 'center',
          }}
        >
          <h1 style={{ paddingLeft: 20, color: '#001529' }}>Promo</h1>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              paddingTop: 20,
              background: '#fff',
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          PROMO 2020 Created by Horys
        </Footer>
      </Layout>
    </Layout>
  );
}
