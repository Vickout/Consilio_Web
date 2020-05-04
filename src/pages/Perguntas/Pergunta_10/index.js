import React from 'react';
import { useHistory } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { Checkbox, Col, Row, Button } from 'antd'
import './styles.css';

export default function Pergunta10() {
    const history = useHistory();

    function NextPage() {
        history.push('/home');
      }
  
      function PreviousPage() {
        history.push('/pergunta9');
      }  

    return (
        <div >
            <h1 className="question">Com que frequência são feitos planejamentos comerciais?</h1>
            <div className="checkbox-10">
            <Checkbox.Group style={{ width: '100%' }} onChange={()=>{}}>
                <Row>
                    <Col className="item-10" span={12}>
                        <Checkbox value="semanal">Semanal</Checkbox>
                    </Col>
                    <Col className="item-10" span={12}>
                        <Checkbox value="bimestral">Bimestral</Checkbox>
                    </Col>
                    <Col className="item-10" span={12}>
                        <Checkbox value="quinzenal">Quinzenal</Checkbox>
                    </Col>
                    <Col className="item-10" span={12}>
                        <Checkbox value="única vez">Fizemos uma única vez</Checkbox>
                    </Col>
                    <Col className="item-10" span={12}>
                        <Checkbox value="mensal">Mensal</Checkbox>
                    </Col>
                    <Col className="item-10" span={12}>
                        <Checkbox value="não faz">Não fazemos planejamento</Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>
            </div>
            <div className="buttons">
                <div>
                    <Button onClick={PreviousPage} size="large" icon={<LeftOutlined />}></Button>
                </div>
                <div>
                    <Button onClick={NextPage} className="concluir" size="large" type="primary">Concluir</Button>
                </div>
            </div>
        </div>
    );
}