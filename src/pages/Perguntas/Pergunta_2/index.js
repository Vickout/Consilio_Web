import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Checkbox, Col, Row, Button } from 'antd'
import './styles.css';

export default function Pergunta2() {
    const history = useHistory();

    function NextPage() {
        history.push('/pergunta3');
      }
  
      function PreviousPage() {
        history.push('/pergunta1');
      }  

    return (
        <div>
            <h1 className="question">Como você controla suas informações de venda?</h1>
            <div className="checkbox">
            <Checkbox.Group style={{ width: '100%' }} onChange={()=>{}}>
                <Row>
                    <Col className="item-1" span={12}>
                        <Checkbox value="agenda">Agenda</Checkbox>
                    </Col>
                    <Col className="item-1" span={12}>
                        <Checkbox value="aplicativo ou crm">Aplicativo ou CRM</Checkbox>
                    </Col>
                    <Col className="item-1" span={12}>
                        <Checkbox value="caderno">Caderno</Checkbox>
                    </Col>
                    <Col className="item-1" span={12}>
                        <Checkbox value="sistema proprio">Sistema Próprio</Checkbox>
                    </Col>
                    <Col className="item-1" span={12}>
                        <Checkbox value="planilhas">Planilhas</Checkbox>
                    </Col>
                    <Col className="item-1" span={12}>
                        <Checkbox value="outro">Outro</Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>
            </div>
            <div className="buttons">
                <div>
                    <Button onClick={PreviousPage} size="large" icon={<LeftOutlined />}></Button>
                </div>
                <div>
                    <Button onClick={NextPage} size="large" icon={<RightOutlined />}></Button>
                </div>
            </div>
        </div>
    );
}