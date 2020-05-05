import { PlusCircleOutlined } from '@ant-design/icons';
import { Switch, Table, Tag } from 'antd';
import React, { useState } from 'react';
import Board from "react-trello";
import data from "./data.json";
import "./styles.css";

export default function ListaExecucao() {

    const [fluxo, setFluxo] = useState(true);
    const [tipoCheck, setTipoCheck] = useState('Fluxo');

    function onChange(checked) {
      console.log(`switch to ${checked}`);
      
      if(checked) {
        setTipoCheck('Fluxo')
      } else  {
        setTipoCheck('Lista')
      }
      setFluxo(checked);
    }

    const columns = [
      {
        title: 'CUT',
        dataIndex: 'cut',
        key: 'cut',

        render: text => text,
      },
      {
        title: 'Tarefa',
        dataIndex: 'tarefa',
        key: 'tarefa',
      },
      {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Responsável',
        dataIndex: 'responsavel',
        key: 'responsavel',
      },
      {
        title: 'Detalhes',
        key: 'action',
        render: (text, record) => (
          <span>
            <PlusCircleOutlined />
          </span>
        ),
      },
    ];
    
    const dataTabela = [
      {
        key: '1',
        cut: '100',
        tarefa: 'Padrão de atendimento',
        status: ['A fazer'],
        responsavel: 'Gestor comercial'
      },
      {
        key: '2',
        cut: '125',
        tarefa: 'Funil de vendas',
        status: ['A fazer'],
        responsavel: 'Gestor comercial'
      },
      {
        key: '3',
        cut: '80',
        tarefa: 'Agendamentos',
        status: ['A fazer'],
        responsavel: 'Gestor comercial'
      },
    ];

    return (
        <div>
                        <div style={{ textAlign: 'right' }}>{tipoCheck}<br></br>
                          <Switch defaultChecked checked={fluxo} onChange={onChange} />
                        </div>
                        <div className="App">
                          { fluxo ?
                            <Board data={data} laneDraggable canAddLanes />
                            :
                            <Table columns={columns} dataSource={dataTabela} />
                          }
                        </div>
        </div>
    );
}
