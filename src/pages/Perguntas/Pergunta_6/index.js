import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Slider, Button } from 'antd'
import './styles.css';

import logo from "../../../assets/logo_branco.png"

export default function Pergunta6() {
    const history = useHistory();

    function NextPage() {
        history.push('/pergunta7');
      }
  
      function PreviousPage() {
        history.push('/pergunta5');
      }  

    const marks = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: {
          style: {
            color: '#000',
          },
          label: <strong>10</strong>,
        },
    };

    return (
        <div>
            <h1 className="question">Como você avalia a qualidade do atendimento da sua empresa?</h1>
            <div className="slider">
                <Slider max={10} marks={marks} step={1} defaultValue={0} />
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