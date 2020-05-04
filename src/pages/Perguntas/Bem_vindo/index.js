import { Button, Col, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

export default function BemVindo() {
    const history = useHistory();

    return (
            <div>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={8}>
                        <Button 
                            onClick={() => history.push('/pergunta1')} 
                            id="button" 
                            className="button-comercial"><div></div></Button>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Button id="button" className="button-marketing"><div></div></Button>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Button id="button" className="button-operacional"><div></div></Button>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Button id="button" className="button-financeiro"><div></div></Button>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Button id="button" className="button-legislacao"><div></div></Button>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Button id="button" className="button-gestao"><div></div></Button>
                    </Col>
                </Row>
        </div>
    );
}