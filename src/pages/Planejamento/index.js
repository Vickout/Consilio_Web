import React, { useState } from 'react';

import "./styles.css";

import {
    BarsOutlined,
    BarChartOutlined,
    BulbOutlined,
    PlayCircleOutlined,
    ScheduleOutlined,
    SearchOutlined,
    TeamOutlined,
    PlusCircleOutlined
  } from '@ant-design/icons';
import './styles.css';

import { Layout, Menu, Table, Row, Col, Card, Alert, Button, Progress } from 'antd';

import logo from "../../assets/logo_branco.png"

const { Content, Sider } = Layout;

export default function Planejamento() {

    const [state, setState] = useState(false);

    const metasDs = [
        {
          key: '1',
          resumo: 'Faturamento mensal',
          referencia: 'R$7.000,00',
          realizado: <Progress percent={54} showInfo={false} />,
          evolucao: '54%'
        },
        {
          key: '2',
          resumo: 'Implantações',
          referencia: '3',
          realizado: <Progress percent={33} showInfo={false} />,
          evolucao: '33%'
        },
        {
            key: '3',
            resumo: 'Novos conhecimentos',
            referencia: '2',
            realizado: <Progress percent={100} showInfo={false} />,
            evolucao: '100%'
          }
      ];
    
      const metasCol = [
        {
          title: 'Resumo',
          dataIndex: 'resumo',
          key: 'resumo',
        },
        {
          title: 'Referência',
          dataIndex: 'referencia',
          key: 'referencia',
        },
        {
          title: 'Realizado',
          dataIndex: 'realizado',
          key: 'realizado',
        },
        {
            title: 'Evolução',
            dataIndex: 'evolucao',
            key: 'evolucao',
          }
      ];

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
                        <h2>Bem-vindo</h2>
                        <img src={logo} alt="consilio"/>
                    </header>
                    <Content style={{ margin: '30px 30px' }}>
                    <span className="titulo">Metas</span>
                    <Table style={{ width: '100%'}} dataSource={metasDs} columns={metasCol} />
                    <span className="titulo">Processos e metodologias</span>
                    <Row>
                        <Col style={{ padding: '0px 10px 0px 0px', width: '50%' }}>
                            <Card title="Em utilização">
                                <Row>
                                    <Col><Alert message="" type="success" /></Col>  
                                    <Col style={{ margin: '0px 0px 0px 20px'}}>Agendamento</Col>  
                                </Row>
                                <Row>
                                    <Col style={{ margin: '0px 0px 0px 50px'}}>Resp.:Gestor Comercial</Col>  
                                    <Col><Button type="dashed" shape="circle" style={{ margin: '0px 0px 0px 199px'}} 
                                    icon={<PlusCircleOutlined />} size={'small'} /></Col>  
                                </Row>
                                <Row>
                                    <Col style={{ margin: '0px 0px 0px 50px'}}>Prioridade 1 - em 2 dias</Col>  
                                </Row>
                            </Card>
                        </Col>
                        <Col style={{ margin: '0px 0px 0px 0px', width: '50%' }}>
                            <Card title="Sugestão para implementar">
                                <Row>
                                    <Col><Alert message="" type="success" /></Col>  
                                    <Col style={{ margin: '0px 0px 0px 20px'}}>Funil de vendas</Col>  
                                </Row>
                                <Row>
                                    <Col style={{ margin: '0px 0px 0px 50px'}}>Resp.:Gestor Comercial</Col>
                                    <Col><Button type="dashed" shape="circle" style={{ margin: '0px 0px 0px 199px'}} 
                                    icon={<PlusCircleOutlined />} size={'small'} /></Col>  
                                </Row>
                                <Row>
                                    <Col style={{ margin: '0px 0px 0px 50px'}}>Prioridade 1 - em 4 dias</Col>  
                                </Row>

                                <Row>
                                    <Col><Alert message="" type="warning" /></Col>  
                                    <Col style={{ margin: '0px 0px 0px 20px'}}>Padrão de atend.</Col>  
                                </Row>
                                <Row>
                                    <Col style={{ margin: '0px 0px 0px 50px'}}>Resp.:Gestor Comercial</Col>  
                                    <Col><Button type="dashed" shape="circle" style={{ margin: '0px 0px 0px 199px'}} 
                                    icon={<PlusCircleOutlined />} size={'small'} /></Col>  
                                </Row>
                                <Row>
                                    <Col style={{ margin: '0px 0px 0px 50px'}}>Prioridade 1 - em 1 dias</Col>  
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
