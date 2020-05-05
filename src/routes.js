import {
    BarChartOutlined, BarsOutlined,

    BulbOutlined,
    PlayCircleOutlined,
    ScheduleOutlined,

    TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import FaleComSebrae from './pages/FaleComSebrae';
import Home from './pages/Home';
import ListaExecucao from './pages/ListaExecucao';
import BemVindo from './pages/Perguntas/Bem_vindo';
import Pergunta1 from './pages/Perguntas/Pergunta_1';
import Pergunta10 from './pages/Perguntas/Pergunta_10';
import Pergunta2 from './pages/Perguntas/Pergunta_2';
import Pergunta3 from './pages/Perguntas/Pergunta_3';
import Pergunta4 from './pages/Perguntas/Pergunta_4';
import Pergunta5 from './pages/Perguntas/Pergunta_5';
import Pergunta6 from './pages/Perguntas/Pergunta_6';
import Pergunta7 from './pages/Perguntas/Pergunta_7';
import Pergunta8 from './pages/Perguntas/Pergunta_8';
import Pergunta9 from './pages/Perguntas/Pergunta_9';
import Pergunta10 from './pages/Perguntas/Pergunta_10';
import Home from './pages/Home';
import ListaExecucao from './pages/ListaExecucao' ;
import Detalhes from './pages/Detalhes';
import Analise from './pages/Analise';
import FaleComSebrae from './pages/FaleComSebrae' ;
import Planejamento from './pages/Planejamento';

const { Sider } = Layout;

export default function Routes() {

    const [state, setState] = useState(false);

    const onCollapse = (collapsed) => {
        console.log(collapsed);
        setState(!state);
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={BemVindo} />
                <Route path="/pergunta1" component={Pergunta1} />
                <Route path="/pergunta2" component={Pergunta2} />
                <Route path="/pergunta3" component={Pergunta3} />
                <Route path="/pergunta4" component={Pergunta4} />
                <Route path="/pergunta5" component={Pergunta5} />
                <Route path="/pergunta6" component={Pergunta6} />
                <Route path="/pergunta7" component={Pergunta7} />
                <Route path="/pergunta8" component={Pergunta8} />
                <Route path="/pergunta9" component={Pergunta9} />
                <Route path="/pergunta10" component={Pergunta10} />

                <Layout style={{ minHeight: '100vh' }}>
                    <Sider className="sider" collapsible collapsed={state} onCollapse={onCollapse}>
                        <div className="logo" />
                        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<BarsOutlined />}><Link to='home'>Resumo</Link></Menu.Item>
                            <Menu.Item key="2" icon={<BarChartOutlined />}><Link to='analise'>Análise</Link></Menu.Item>
                            <Menu.Item key="3" icon={<ScheduleOutlined />}><Link to='planejamento'>Planejamento</Link></Menu.Item>
                            <Menu.Item key="4" icon={<PlayCircleOutlined />}><Link to='listaExecucao'>Execução</Link></Menu.Item>
                            <Menu.Item key="5" icon={<BulbOutlined />}><Link to='home'>Educação</Link></Menu.Item>
                            <Menu.Item key="6" icon={<TeamOutlined />}><Link to='faleComSebrae'>Fale com o Sebrae</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Content styele={{margin: '30px 30px'}}>
                            <Route path="/home" component={Home} />
                            <Route path="/listaExecucao" component={ListaExecucao} />
                            <Route path="/faleComSebrae" component={FaleComSebrae} />
                            <Route path="/planejamento" component={Planejamento} />
                            <Route path="/analise" component={Analise} />
                            <Route path="/detalhes" component={Detalhes} />
                        </Content>
                    </Layout>
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}