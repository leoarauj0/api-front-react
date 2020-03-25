import React, { useState } from "react";
import { Form, Col, Input, Button, Row, Spin, Select } from "antd";
import { Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
const FormItem = Form.Item;

const { Title } = Typography;
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 50 }}>
      <Option value="98">+98</Option>
      <Option value="99">+99</Option>
    </Select>
  </Form.Item>
);

const validateMessages = {
  required: "Este campo é obrigatorio!",
  types: {
    email: "Digite um email válido!",
    number: "Digite um número válido!"
  }
};

export default function CondominiumForm() {
  const [loading, setLoading] = useState(false);

  return (
    <Spin spinning={loading} tip="Carregando...">
      <Title level={2}>Cadastro de Condominio</Title>
      <Form layout="vertical" validateMessages={validateMessages}>
        <Row>
          <Col span={8}>
            <FormItem
              colon={false}
              label="CNPJ"
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input />
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              colon={false}
              label="Nome"
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input />
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              colon={false}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input />
            </FormItem>
          </Col>
        </Row>

        <Title level={4}>Endereço</Title>

        <Row>
          <Col span={8}>
            <FormItem
              colon={false}
              label="Logradouro"
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input />
            </FormItem>
          </Col>

          <Col span={3}>
            <FormItem
              colon={false}
              label="Número"
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input />
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              colon={false}
              label="Bairro"
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input />
            </FormItem>
          </Col>

          <Col span={5}>
            <FormItem
              colon={false}
              label="Telefone"
              rules={[
                {
                  required: true,
                  message: "Por favor insira seu telefone!"
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              colon={false}
              label="Classe"
              rules={[{ required: true }]}
              style={{ marginRight: 8 }}
            >
              <Select
                placeholder="Selecione uma opção de classe."
                style={{ width: "100%" }}
                // onChange={handleChange}
              >
                <Option value="A">A</Option>
                <Option value="B">B</Option>
                <Option value="C">C</Option>
              </Select>
            </FormItem>
          </Col>

          <Col span={3}>
            <FormItem
              colon={false}
              label="Blocos"
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input />
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem
              colon={false}
              label="Preço da publicidade"
              rules={[
                {
                  required: true
                }
              ]}
              style={{ marginRight: 8 }}
            >
              <Input />
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
