import React from 'react';
import { Layout, Row, Col } from 'antd';

import './styles.css';

const { Header, Sider, Content } = Layout;

export default function PaginaFaleComSebrae() {

    return (
        <div>
            <Layout>
                <Header>
                Agenda sebrae
                <Row>
                    <Col>
                        <div className="eventosPresenciais"><br></br></div>
                    </Col>
                    <Col>
                        <div className="eventosOnline"><br></br></div>
                    </Col>
                    <Col>
                        <div className="empretec"><br></br></div>
                    </Col>
                    <Col>
                        <div className="orientacaoMentoria"><br></br></div>
                    </Col>
                </Row>

                </Header>
            <Layout>
                <Content>dddddd</Content>
                <Sider>Sider</Sider>
            </Layout>
            </Layout>
        </div>
    );
}