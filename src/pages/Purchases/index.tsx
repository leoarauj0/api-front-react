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
  Select,
} from 'antd';

import { SearchOutlined, FormOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

import Purchase from '../../models/Purchase';

const FormItem = Form.Item;
const { Option } = Select;

const columns = [
  {
    title: 'Clientes',
    dataIndex: 'clients',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    render: (record: number) => <span>R$ {record}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Ações',
    dataIndex: '',
    key: 'x',
    render: () => <a>Excluir</a>,
  },
];

export default function Purchases() {
  const history = useHistory();
  const purchase1: Purchase = {
    id: 1,
    clients: 'Ceuma , Pitagoras',
    status: 'Aguardando Aprovação',
    total: 450.56,
  };
  const [purchases] = useState<Purchase[]>([purchase1]);
  const [loading, setLoading] = useState(false);

  function redirectFormCreate(e: any): void {
    e.preventDefault();
    history.push('purchases/create');
    setLoading(false);
  }

  return (
    <Spin spinning={loading} tip="Carregando...">
      <h1>Propostas</h1>
      <Form layout="vertical">
        <Row>
          <Col span={6}>
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
          <Col span={6}>
            <FormItem colon={false} label="CPF" style={{ marginRight: 8 }}>
              <Input
              // onChange={(e) => {
              //   setCpf(e.target.value);
              // }}
              // value={cpf}
              />
            </FormItem>
          </Col>
          <Col span={12}>
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
        <Table rowKey={t => t.id} columns={columns} dataSource={purchases} />
      </Form>
    </Spin>
  );
}
