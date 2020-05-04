import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Slider, Button } from 'antd'
import './styles.css';

export default function Pergunta1() {
    const history = useHistory();

    function NextPage() {
      history.push('/pergunta2');
    }

    function PreviousPage() {
      history.push('/');
    }
    
    const marks = {
        0: {
            style: {
              color: '#000',
            },
            label: '0',
          },
        1: {
            style: {
              color: '#000',
            },
            label: '1',
          },
        2: {
            style: {
              color: '#000',
            },
            label: '2',
          },
        3: {
            style: {
              color: '#000',
            },
            label: '3',
          },
        4: {
            style: {
              color: '#000',
            },
            label: '4',
          },
        5: {
            style: {
              color: '#000',
            },
            label: '5',
          },
        6: {
          style: {
            color: '#000',
          },
          label: <strong>6+</strong>,
        },
    };

    return (
        <div>
            <h1 className="question">Qual o tamanho do seu time comercial?</h1>
            <div className="slider">
                <Slider max={6} marks={marks} step={1} defaultValue={0} />
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