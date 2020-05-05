import { PlusCircleOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Col, Progress, Row, Table } from 'antd';
import React from 'react';
import "./styles.css";

export default function Planejamento() {

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
        <div>
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
        </div>
    );
}
