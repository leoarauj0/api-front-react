import React, { useState } from 'react';
import { Form, Col, Input, Button, Row, Spin, Select } from 'antd';

import { FormOutlined } from '@ant-design/icons';
const FormItem = Form.Item;
const { Option } = Select;

export default function ClientsForm() {
  const [loading, setLoading] = useState(false);

  return (
    <Spin spinning={loading} tip="Carregando...">
      <h1>Cadastro de Clientes</h1>
      <Form layout="vertical">
        <Row>
          <Col span={4}>
            <FormItem colon={false} label="Tipo" style={{ marginRight: 8 }}>
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
            <FormItem colon={false} label="CPF/CNPJ" style={{ marginRight: 8 }}>
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
            <FormItem colon={false} label="Email" style={{ marginRight: 8 }}>
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
            <FormItem colon={false} label="Número" style={{ marginRight: 8 }}>
              <Input
              // onChange={e => {
              //   setName(e.target.value);
              // }}
              // value={name}
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem colon={false} label="Bairro" style={{ marginRight: 8 }}>
              <Input
              // onChange={e => {
              //   setName(e.target.value);
              // }}
              // value={name}
              />
            </FormItem>
          </Col>
          <Col span={5}>
            <FormItem colon={false} label="Telefone" style={{ marginRight: 8 }}>
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
    </Spin>
  );
}
