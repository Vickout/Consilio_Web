import React, { useState } from 'react';

import data from "./data.json";
import "./styles.css";
import Board from "react-trello";

import { Layout, Menu, Table, Tag, Switch } from 'antd';

import {
    BarsOutlined,
    BarChartOutlined,
    BulbOutlined,
    PlayCircleOutlined,
    ScheduleOutlined,
    SearchOutlined,
    TeamOutlined,  
    PlusCircleOutlined
  } from '@ant-design/icons';
import './styles.css';

import logo from "../../assets/logo_branco.png"

const { Content, Sider } = Layout;

export default function ListaExecucao() {

    const [state, setState] = useState(false);

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
        render: text => <a>{text}</a>,
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
        <div className="container">
            <Layout style={{ minHeight: '100vh' }}>
                <Sider  className="sider" collapsible collapsed={state} onCollapse={() => {setState(state)}}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<BarsOutlined />}>Resumo</Menu.Item>
                    <Menu.Item key="2" icon={<BarChartOutlined />}>Análise</Menu.Item>
                    <Menu.Item key="3" icon={<ScheduleOutlined />}>Planejamento</Menu.Item>
                    <Menu.Item key="4" icon={<PlayCircleOutlined />}>Execução</Menu.Item>
                    <Menu.Item key="5" icon={<BulbOutlined />}>Educação</Menu.Item>
                    <Menu.Item key="6" icon={<TeamOutlined />}>Fale com o Sebrae</Menu.Item>
                    <Menu.Item key="7" icon={<SearchOutlined />}>Ajuda</Menu.Item>
                </Menu>
                </Sider>
                <Layout className="site-layout">
                    <header className="header" >
                        <h2>Bem-vindo</h2>
                        <img src={logo} alt="consilio"/>
                    </header>
                    <Content style={{ margin: '30px 30px' }}>
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
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
