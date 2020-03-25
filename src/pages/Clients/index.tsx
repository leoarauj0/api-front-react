import React, { useState } from 'react';

import {
  Form,
  Col,
  Table,
  Input,
  Button,
  Row,
  Divider,
  Spin,
  Popconfirm,
  Modal,
} from 'antd';

import { SearchOutlined, FormOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

import Client from '../../models/Client';

const FormItem = Form.Item;

const columns = [
  {
    title: 'Tipo',
    dataIndex: 'type',
  },
  {
    title: 'Nome',
    dataIndex: 'name',
  },
  {
    title: 'CPF/CNPJ',
    dataIndex: 'document',
    key: 'document',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
  },
];

export default function Clients() {
  const history = useHistory();
  const user: Client = {
    id: 1,
    document: '45',
    name: 'Artur Veiga',
    type: 'Pessoa Fisica',
    email: 'artur@artur.com',
    phone: '99 999999999',
  };
  const [users, setUsers] = useState<Client[]>([user]);
  const [loading, setLoading] = useState(false);

  function redirectFormCreate(e: any): void {
    e.preventDefault();
    history.push('/clients/create');
    setLoading(false);
  }

  return (
    <Spin spinning={loading} tip="Carregando...">
      <h1>Consulta de Clientes</h1>
      <Form layout="vertical">
        <Row>
          <Col span={4}>
            <FormItem colon={false} label="CPF" style={{ marginRight: 8 }}>
              <Input
              // onChange={(e) => {
              //   setCpf(e.target.value);
              // }}
              // value={cpf}
              />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem colon={false} label="Nome" style={{ marginRight: 8 }}>
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
          <Col span={24} style={{ textAlign: 'left' }}>
            <Button
              type="primary"
              // onClick={async () => {
              //   const obj = await CandidatesSearchByCpfOrName({ name, cpf });
              //   setCooperados(obj);
              // }}
            >
              <SearchOutlined />
              Buscar
            </Button>

            <Button
              type="primary"
              style={{ marginLeft: 8 }}
              onClick={redirectFormCreate}
            >
              <FormOutlined />
              Cadastrar
            </Button>
          </Col>
        </Row>
        <br />
        <Table rowKey={t => t.id} columns={columns} dataSource={users} />
      </Form>
    </Spin>
  );
}
