import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Button, Radio } from 'antd'
import './styles.css';

import logo from "../../../assets/logo_branco.png"

export default function Pergunta9() {
    const history = useHistory();

    function NextPage() {
        history.push('/pergunta10');
      }
  
      function PreviousPage() {
        history.push('/pergunta8');
      }  

    return (
        <div className="container">
            <header className="header" >
                <h2>Bem-vindo</h2>
                <h1>Análise Comercial</h1>
                <img src={logo} alt="consilio"/>
            </header>
            <h1 className="question">Existem processos e etapas que orientam o trabalho e atendimento do setor de vendas?</h1>
            <div className="checkbox-4">
            <Radio.Group onChange={() => {}} >
                <Radio className="item-4" value={1}>
                Sim
                </Radio>
                <Radio className="item-4" value={2}>
                Não
                </Radio>
            </Radio.Group>
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