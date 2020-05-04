import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Button, Radio } from 'antd'
import './styles.css';

import logo from "../../../assets/logo_branco.png"

export default function Pergunta7() {
    const history = useHistory();

    function NextPage() {
        history.push('/pergunta8');
      }
  
      function PreviousPage() {
        history.push('/pergunta6');
      }  
  
    return (
        <div>
            <h1 className="question">Sua empresa tem metas de vendas?</h1>
            <div className="checkbox-5">
            <Radio.Group onChange={() => {}} >
                <Radio className="item-5" value={1}>
                Sim e cumprimos
                </Radio>
                <Radio className="item-5" value={2}>
                Sim, mas não funciona
                </Radio>
                <Radio className="item-5" value={3}>
                Não, mas já fizemos no passado
                </Radio>
                <Radio className="item-5" value={4}>
                Não e nuna tivemos
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