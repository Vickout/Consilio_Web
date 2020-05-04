import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Checkbox, Col, Row, Button } from 'antd'
import './styles.css';

export default function Pergunta5() {
    const history = useHistory();

    function NextPage() {
        history.push('/pergunta6');
      }
  
      function PreviousPage() {
        history.push('/pergunta4');
      }  

    return (
        <div>
            <h1 className="question">Sua empresa tem um processo de atendimento claro e funcional?</h1>
            <div className="checkbox-4">
            <Checkbox.Group style={{ width: '100%' }} onChange={()=>{}}>
                <Row>
                    <Col className="item-4" span={24}>
                        <Checkbox value="sim">Sim</Checkbox>
                    </Col>
                    <Col className="item-4" span={24}>
                        <Checkbox value="nao">Não</Checkbox>
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