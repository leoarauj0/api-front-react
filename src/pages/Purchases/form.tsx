import React, { useState } from 'react';
import { Form, Col, Input, Button, Row, Spin, Select } from 'antd';

import { CheckOutlined } from '@ant-design/icons';

import Condominium from '../../models/Condominium';
const FormItem = Form.Item;
const { Option } = Select;

const cond1: Condominium = {
  id: '54545-dasda21312',
  name: 'Costa Azul',
};
const cond2: Condominium = {
  id: '54545-nmmm-dsada-2312',
  name: 'Lima Verde',
};

interface OptionValue {
  key: string;
  label: string;
  value: string;
}

const empty: OptionValue = {
  key: 'asd',
  label: '',
  value: '',
};

export default function PurchaseForm() {
  const [loading, setLoading] = useState(false);
  const [condominium, setCondominium] = useState<OptionValue>();
  const [condominiums, setCondominiums] = useState<Condominium[]>([
    cond1,
    cond2,
  ]);

  function handleChange(value: OptionValue) {
    console.log('selectedx ', value);
    // setCondominium(value);
  }

  return (
    <Spin spinning={loading} tip="Carregando...">
      <h1>Proposta</h1>
      <Form layout="vertical">
        <Row>
          <Col span={8}>
            <FormItem
              colon={false}
              label="Condominios"
              style={{ marginRight: 8 }}
            >
              <Select labelInValue value={condominium} onChange={handleChange}>
                {condominiums.map(condominium => (
                  <Option key={condominium.id} value={condominium.id}>
                    {condominium.name}
                  </Option>
                ))}
              </Select>
            </FormItem>
          </Col>
          <Col span={4}>
            <FormItem colon={false} label="Valor" style={{ marginRight: 8 }}>
              <Input
              // onChange={(e) => {
              //   setCpf(e.target.value);
              // }}
              // value={cpf}
              />
            </FormItem>
          </Col>
          <Col span={4}>
            <FormItem colon={false} label="Unidades" style={{ marginRight: 8 }}>
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
          <Col span={8}>
            <FormItem colon={false} label="Clients" style={{ marginRight: 8 }}>
              <Input
              // onChange={(e) => {
              //   setCpf(e.target.value);
              // }}
              // value={cpf}
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Button type="primary">
            <CheckOutlined />
            Salvar
          </Button>
        </Row>
      </Form>
    </Spin>
  );
}
