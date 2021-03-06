import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Slider, Button } from 'antd'
import './styles.css';

export default function Pergunta8() {
    const history = useHistory();

    function NextPage() {
        history.push('/pergunta9');
      }
  
      function PreviousPage() {
        history.push('/pergunta7');
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
            <h1 className="question">Qual o seu grau de satisfação com suas vendas atualmente?</h1>
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