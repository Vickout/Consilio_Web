import React, { useState } from 'react';

import data from "./data.json";
import "./styles.css";
import Board from "react-trello";

import { Layout, Menu } from 'antd';
import {
    BarsOutlined,
    BarChartOutlined,
    BulbOutlined,
    PlayCircleOutlined,
    ScheduleOutlined,
    SearchOutlined,
    TeamOutlined,  
  } from '@ant-design/icons';
import './styles.css';

import logo from "../../assets/logo_branco.png"

const { Content, Sider } = Layout;

function UncontrolledBoard() {
    return (
      <Board
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={data}
        allowAddCard={{ on: "top" }}
        onNewCardConfirm={draftCard => ({
          id: new Date().getTime(),
          ...draftCard
        })}
        onCardNew={console.log}
      />
    );
  }

export default function ListaExecucao() {
    
    const [state, setState] = useState(false);

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
                        <div className="App">
                            <Board data={data} laneDraggable canAddLanes />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
