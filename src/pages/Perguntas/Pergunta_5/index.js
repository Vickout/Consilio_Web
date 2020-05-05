import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    LeftOutlined,
    RightOutlined,
  } from '@ant-design/icons';
import { Radio, Button } from 'antd'
import './styles.css';

export default function Pergunta5() {
    const history = useHistory();

    function NextPage() {
        history.push('/pergunta6');
      }
  
      function PreviousPage() {
        history.push('/pergunta4');
      }  

    return (
        <div>
            <h1 className="question">Sua empresa tem um processo de atendimento claro e funcional?</h1>
            <div className="radio-4">
                <Radio.Group className="radio-group-5" onChange={() => {}} >
                    <Radio className="item-radio-5" value={1}>
                    Sim
                    </Radio>
                    <Radio className="item-radio-5" value={2}>
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