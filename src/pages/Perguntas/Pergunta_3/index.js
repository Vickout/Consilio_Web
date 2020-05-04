import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Radio, Button } from 'antd'
import './styles.css';

import logo from "../../../assets/logo_branco.png"

export default function Pergunta3() {
    const history = useHistory();

    function NextPage() {
        history.push('/pergunta4');
      }
  
      function PreviousPage() {
        history.push('/pergunta2');
      }  

    return (
        <div className="container">
            <header className="header" >
                <h2>Bem-vindo</h2>
                <h1>Análise Comercial</h1>
                <img src={logo} alt="consilio"/>
            </header>
            <h1 className="question">Você conhece e utiliza o Funil de vendas?</h1>
            <div className="radio-3">
                <Radio.Group className="radio-group-3" onChange={() => {}} >
                    <Radio className="item-radio-3" value={1}>
                    Sim
                    </Radio>
                    <Radio className="item-radio-3" value={2}>
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