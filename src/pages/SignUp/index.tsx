import React, { useState } from 'react';
import {
  Form,
  Col,
  Input,
  Button,
  Row,
  Spin,
  Select,
  Layout,
  Menu,
  Breadcrumb,
} from 'antd';

import { useHistory } from 'react-router-dom';

import { FormOutlined } from '@ant-design/icons';

import './index.css';
const FormItem = Form.Item;
const { Option } = Select;
const { Header, Content, Footer } = Layout;

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  return (
    <Spin spinning={loading} tip="Carregando...">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
            onClick={() => history.push('/signIn')}
          >
            <Menu.Item key="1">Promo Condominios</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Form layout="vertical">
              <Row>
                <Col span={4}>
                  <FormItem
                    colon={false}
                    label="Tipo"
                    style={{ marginRight: 8 }}
                  >
                    <Select
                      defaultValue="Pessoa Juridica"
                      style={{ width: '100%' }}
                      // onChange={handleChange}
                    >
                      <Option value="pf">Pessoa Física</Option>
                      <Option value="pj">Pessoa Juridica</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem
                    colon={false}
                    label="CPF/CNPJ"
                    style={{ marginRight: 8 }}
                  >
                    <Input
                    // onChange={(e) => {
                    //   setCpf(e.target.value);
                    // }}
                    // value={cpf}
                    />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem
                    colon={false}
                    label="Razão Social"
                    style={{ marginRight: 8 }}
                  >
                    <Input
                    // onChange={e => {
                    //   setName(e.target.value);
                    // }}
                    // value={name}
                    />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem
                    colon={false}
                    label="Email"
                    style={{ marginRight: 8 }}
                  >
                    <Input
                    // onChange={e => {
                    //   setName(e.target.value);
                    // }}
                    // value={name}
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <FormItem
                    colon={false}
                    label="Logradouro"
                    style={{ marginRight: 8 }}
                  >
                    <Input
                    // onChange={(e) => {
                    //   setCpf(e.target.value);
                    // }}
                    // value={cpf}
                    />
                  </FormItem>
                </Col>
                <Col span={3}>
                  <FormItem
                    colon={false}
                    label="Número"
                    style={{ marginRight: 8 }}
                  >
                    <Input
                    // onChange={e => {
                    //   setName(e.target.value);
                    // }}
                    // value={name}
                    />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem
                    colon={false}
                    label="Bairro"
                    style={{ marginRight: 8 }}
                  >
                    <Input
                    // onChange={e => {
                    //   setName(e.target.value);
                    // }}
                    // value={name}
                    />
                  </FormItem>
                </Col>
                <Col span={5}>
                  <FormItem
                    colon={false}
                    label="Telefone"
                    style={{ marginRight: 8 }}
                  >
                    <Input
                    // onChange={e => {
                    //   setName(e.target.value);
                    // }}
                    // value={name}
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Button type="primary">
                  <FormOutlined />
                  Cadastrar
                </Button>
              </Row>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Promo 2020 Created by Veiga
        </Footer>
      </Layout>
    </Spin>
  );
}
