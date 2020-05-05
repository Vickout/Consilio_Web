import { Col, Progress, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import chart from '../../assets/chart.png';

export default function Home() {

    return (

        <div className="cards-container">
            <div className="cards-left">
            <div className="card">
                <h1>Impacto de problemas analisados</h1>
                <img src={chart} alt="gráfico"/>
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
    );
}
