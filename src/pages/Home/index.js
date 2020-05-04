import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Progress, Row, Col } from 'antd';
import {
    BarsOutlined,
    BarChartOutlined,
    BulbOutlined,
    PlayCircleOutlined,
    ScheduleOutlined,
    SearchOutlined,
    TeamOutlined,  
  } from '@ant-design/icons';
import './styles.css';

import logo from "../../assets/logo_branco.png"

const { Content, Sider } = Layout;

export default function Home() {
    const [state, setState] = useState(false);

    return (
        <div className="container">
            <Layout style={{ minHeight: '100vh' }}>
                <Sider  className="sider" collapsible collapsed={state} onCollapse={() => {setState(state)}}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<BarsOutlined />}>Resumo</Menu.Item>
                    <Menu.Item key="2" icon={<BarChartOutlined />}>Análise</Menu.Item>
                    <Menu.Item key="3" icon={<ScheduleOutlined />}>Planejamento</Menu.Item>
                    <Menu.Item key="4" icon={<PlayCircleOutlined />}>Execução</Menu.Item>
                    <Menu.Item key="5" icon={<BulbOutlined />}>Educação</Menu.Item>
                    <Menu.Item key="6" icon={<TeamOutlined />}>Fale com o Sebrae</Menu.Item>
                    <Menu.Item key="7" icon={<SearchOutlined />}>Ajuda</Menu.Item>
                </Menu>
                </Sider>
                <Layout className="site-layout">
                    <header className="header" >
                        <h2>Bem-vindo(a)!</h2>
                        <img src={logo} alt="consilio"/>
                    </header>
                    <Content style={{ margin: '30px 30px' }}>
                        <div className="cards-container">
                            <div className="cards-left">
                                <div className="card">
                                    <h1>Impacto de problemas analisados</h1>
                                </div>
                                <div className="card">
                                    <h1>Próximos passos do seu fluxo</h1>
                                    <div className="steps-container">
                                        <Row>
                                            <Col span={12}>
                                                <Link to="/listaExecucao">
                                                    <div className="steps">
                                                        <h2>Funil de Vendas</h2>
                                                        <p className="responsible">Resp: Gestor Comercial</p>
                                                        <div className="priority">
                                                            <p>Prioridade 1</p>
                                                            <p>em 4 dias</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col span={12}>
                                                <div className="steps">
                                                    <h2>Agendamento</h2>
                                                    <p className="responsible">Resp: Gestor Comercial</p>
                                                    <div className="priority">
                                                        <p>Prioridade 1</p>
                                                        <p>em 2 dias</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="steps-3">
                                                    <h2>Padrão de Atend.</h2>
                                                    <p className="responsible">Resp: Gestor Comercial</p>
                                                    <div className="priority">
                                                        <p>Prioridade 1</p>
                                                        <p>em 1 dias</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>    
                                </div>
                            </div>
                            <div className="evolution">
                                <h1>Evolução das metas estabelecidas</h1>
                                <div className="evolution-content">
                                    <div className="goal">
                                        <h1>Faturamento Mensal</h1>
                                        <Progress percent={54} status="active" />
                                    </div>
                                    <div className="goal">
                                        <h1>Implantações</h1>
                                        <Progress percent={33} status="active" />
                                    </div>
                                    <div className="goal">
                                        <h1>Novos Conhecimentos</h1>
                                        <Progress percent={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
