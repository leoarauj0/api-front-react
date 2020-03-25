import React, { useState } from "react";
import { Form, Col, Input, Button, Row, Spin, Select } from "antd";
import { Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
const FormItem = Form.Item;

const { Title } = Typography;
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
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
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [telefone, setTelefone] = useState("");
  const [classe, setClasse] = useState("");
  const [blocos, setBlocos] = useState("");
  const [preco, setPreco] = useState("");

  const history = useHistory();

  async function handleSubmite(e: { preventDefault: () => void }) {
    e.preventDefault();

    const data = {
      cnpj,
      nome,
      email,
      logradouro,
      numero,
      bairro,
      telefone,
      classe,
      blocos,
      preco
    };

    try {
      const response = await api.post("create", data);

      alert(`Nome: ${response.data.nome}`);

      history.push("/condominium");
    } catch (err) {
      alert("Erro no cadastro do condomínio.");
    }
  }

  const [loading, setLoading] = useState(false);

  return (
    <Spin spinning={loading} tip="Carregando...">
      <Title level={2}>Cadastro de Condominio</Title>
      <Form
        onSubmitCapture={handleSubmite}
        layout="vertical"
        validateMessages={validateMessages}
      >
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
              <Input value={cnpj} onChange={e => setCnpj(e.target.value)} />
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
              <Input value={nome} onChange={e => setNome(e.target.value)} />
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
              <Input value={email} onChange={e => setEmail(e.target.value)} />
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
              <Input
                value={logradouro}
                onChange={e => setLogradouro(e.target.value)}
              />
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
              <Input value={numero} onChange={e => setNumero(e.target.value)} />
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
              <Input value={bairro} onChange={e => setBairro(e.target.value)} />
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
              <Input
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
              />
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
                value={classe}
                //onChange={e => setClasse(e.target.value)}
              >
                <Option
                  value="A"
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setClasse(e.target.value)}
                >
                  A
                </Option>
                <Option
                  value="B"
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setClasse(e.target.value)}
                >
                  B
                </Option>
                <Option
                  value="C"
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setClasse(e.target.value)}
                >
                  C
                </Option>
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
              <Input value={blocos} onChange={e => setBlocos(e.target.value)} />
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
              <Input value={preco} onChange={e => setPreco(e.target.value)} />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Button type="primary" style={{ marginRight: 8 }}>
            <Link to="/condominium">
            Voltar
            </Link>
          </Button>
          <Button type="primary" htmlType="submit">
            <FormOutlined />
            Cadastrar
          </Button>
        </Row>
      </Form>
    </Spin>
  );
}
