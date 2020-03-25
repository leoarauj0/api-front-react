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
  Typography,
} from 'antd';



import { SearchOutlined, FormOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

import Condominio from '../../models/Condominium';

const { Title } = Typography;

const FormItem = Form.Item;

const columns = [
  {
    title: 'Classe',
    dataIndex: 'class',
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

export default function Condominium() {
  const history = useHistory();
  const condominio: Condominio = {
    id: "1",
    name: 'Brisas Life',
    document: '1234567890',
    class: 'A',
    price: 100.000,
    address: 'Alto do Calhau',
    city: 'São Luís',
    state: 'MA',
    email: 'brisas@brisas.com',
    phone: '99 999999999',
  };
  const [condominios, setCondominios] = useState<Condominio[]>([condominio]);
  const [loading, setLoading] = useState(false);

  function redirectFormCreate(e: any): void {
    e.preventDefault();
    history.push('/condominium/create');
    setLoading(false);
  }

  return (
    <Spin spinning={loading} tip="Carregando...">
      
      <Title level={2}>Consulta de Condominio</Title>
      <Form layout="vertical">
        <Row>
          <Col span={4}>
            <FormItem colon={false} label="CNPJ" style={{ marginRight: 8 }}>
              <Input
              // onChange={(e) => {
              //   setCpf(e.target.value);
              // }}
              // value={CNPJ}
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
        <Table rowKey={t => t.id} columns={columns} dataSource={condominios} />
      </Form>
    </Spin>
  );
}
