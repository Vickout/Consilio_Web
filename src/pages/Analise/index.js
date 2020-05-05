import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Modal, Button } from 'antd';
import {
    PlusCircleOutlined,
    RedoOutlined, 
  } from '@ant-design/icons';
import './styles.css';

import chart from "../../assets/chart.png"

export default function Analise() {
    const history = useHistory();

    const [visible, setVisible] = useState(false);

    function GoToListaExecucao() {
        history.push('/listaExecucao');
    }

    return (
            <>
            <Button 
                style={{backgroundColor: "#0d3b7f", borderRadius: 5, color: "white"}} 
                className="button-analise"
            >
                <RedoOutlined style={{fontSize: 20}}/>
                Refazer Avaliação
            </Button>
            <div className="cards-container">
                <div className="cards-left">
                    <div className="card-analise">
                        <h1 className="card-title">Última avaliação</h1>
                        <div className="analise-content">
                            <Row>
                                <Col span={12}>
                                    <div className="collum">
                                        <h1 className="title-col">Áreas avaliadas</h1>
                                        <p>Agendamento</p>
                                        <p>Padrão de Atendimento</p>
                                        <p>Funil de Vendas</p>
                                        <p>Script de Vendas</p>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="collum">
                                        <h1 className="title-col">Impacto</h1>
                                        <p>80</p>
                                        <p>100</p>
                                        <p>125</p>
                                        <p>75</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="chart-analise">
                            <h1>Impacto dos prolemas analisados</h1>
                            <img src={chart} alt="gráfico"/>   
                        </div> 
                    </div>
                </div>
                <div className="evolution">
                    <h1>Sugestões de implementação</h1>
                    <div className="evolution-content">
                        <div className="goal-1">
                            <div className="step-1">
                                <h2>Agendamento</h2>
                                <p className="responsible">Resp: Gestor Comercial</p>
                                <div className="priority">
                                    <p>Prioridade 1</p>
                                </div>
                            </div>
                            <PlusCircleOutlined style={{fontSize: 20}} />
                        </div>
                        <div className="goal-2">
                            <div className="step-2">
                                <h2>Padrão de Atend.</h2>
                                <p className="responsible">Resp: Gestor Comercial</p>
                                <div className="priority">
                                    <p>Prioridade 1</p>
                                </div>
                            </div>
                            <Link style={{color: "#444"}}onClick={() => {setVisible(true)}}>
                                <PlusCircleOutlined style={{fontSize: 20}} />
                            </Link>
                        </div>
                        <div className="goal-3">
                            <div className="step-3">
                                <h2>Funil de Vendas</h2>
                                <p className="responsible">Resp: Gestor Comercial</p>
                                <div className="priority">
                                    <p>Prioridade 1</p>
                                </div>
                            </div>
                            <PlusCircleOutlined style={{fontSize: 20}} />
                        </div>
                        <div className="goal-4">
                            <div className="step-4">
                                <h2>Script de Vendas</h2>
                                <p className="responsible">Resp: Gestor Comercial</p>
                                <div className="priority">
                                    <p>Prioridade 1</p>
                                </div>
                            </div>
                            <PlusCircleOutlined style={{fontSize: 20}} />
                        </div>
                    </div>
                </div>
            </div>
            <Modal

                title="Parabéns! Novo item adicionado ao seu planejamento"
                visible={visible}
                onOk={() => {setVisible(false)}}
                onCancel={() => {setVisible(false)}}
                footer={[
                    <Button key="back" onClick={() => {setVisible(false)}}>
                      Voltar
                    </Button>,
                    <Button key="submit" type="primary" onClick={GoToListaExecucao}>
                      Visualizar fluxo
                    </Button>,
                  ]}        
                >
                    <div className="goal-2">
                        <div className="step-2">
                            <h2>Padrão de Atend.</h2>
                            <p className="responsible">Resp: Gestor Comercial</p>
                            <div className="priority">
                                <p>Prioridade 1</p>
                            </div>
                        </div>
                    </div>
            </Modal>
        </>
    );
}
