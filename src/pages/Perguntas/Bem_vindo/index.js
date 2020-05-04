import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import './styles.css';

import logo from "../../../assets/logo_branco.png"

export default function BemVindo() {
    const history = useHistory();
    
    return (
        <div className="container">
            <header className="header" >
                <h2>Bem-vindo</h2>
                <img src={logo} alt="consilio"/>
            </header>
            <div className="content">
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
        </div>
    );
}