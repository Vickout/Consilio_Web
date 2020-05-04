import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

import sebrae from '../../assets/sebrae.png';
import imagem from '../../assets/funil-de-vendas.png';

import logo from "../../assets/logo_branco.png";

const { Content, Sider } = Layout;

export default function Detalhes() {
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
                        <h2>Bem-vindo(a)!</h2>
                        <img src={logo} alt="consilio"/>
                    </header>
                    <Content style={{ margin: '30px 30px' }}>
                    <div className="total-container">
                        <h2 className="title">#3 -Implantação de funil de vendas</h2>
                        <div className="content">
                            <div className="text">
                                <h1>Como funciona a metodologia</h1>
                                <img src={imagem} alt="funil de vendas"/>
                                <p>O <span>funil de vendas</span>, ou funil do marketing, é um modelo estratégico de consumo que ilustra 
                                    o percurso teórico que o cliente deve seguir até efetuar a compra de um produto ou serviço. 
                                    Assim como no funil tradicional, o funil de vendas começa largo e vai diminuindo até chegar 
                                    aos reais consumidores.

                                    Em 1898, E. St. Elmo Lewis desenvolveu um modelo que mapeia a trajetória do cliente desde do 
                                    momento que uma marca ou produto atrai a atenção do consumidor até o ponto da ação ou compra. 
                                    A ideia de Lewis é muitas vezes referenciada como modelo AIDA - uma sigla que significa Atenção, 
                                    Interesse, Desejo e Ação.

                                    Este processo é representado resumidamente desta forma:
                                </p>
                                <ul>
                                    <li><span>Atenção</span> - as pessoas sabem da existência do seu produto/serviço.</li>
                                    <li><span>Interesse</span> - o consumidor expressa ativamente interesse no seu produto/serviço.</li>
                                    <li><span>Desejo</span> - desperta no consumidor o desejo de comprar o seu produto/serviço.</li>
                                    <li><span>Ação</span> - ato da ação ou compra.</li>
                                </ul>

                                <h1>Benefícios para o seu negócio</h1>
                                <p>O Funil de vendas no Marketing Digital[3], ou seja, o marketing aplicado aos negócios que 
                                    envolve a internet tem as mesmas características do modelo AIDA, contendo 4 etapas, porém 
                                    normalmente é representado no processo por outros termos:

                                    Resumidamente tem as seguintes fases: 
                                </p>
                                <ul>
                                    <li>Etapa #1 - Prospectar o cliente - Escolher o público alvo através de ferramentas para geração de leads</li>
                                    <li>Etapa #2 - Apresentar o produto - Utilizar sistema digital para apresentação, muito utilizado o e-mail marketing</li>
                                    <li>Etapa #3 - Quebrar as objeções - Tirar todas as dúvidas que impedem o cliente de tomar a decisão de compra;</li>
                                    <li>Etapa #4 - Fechar o negócio - Realizar a venda para todos os clientes que chegaram até a etapa final.</li>
                                </ul>
                                <p>Esse modelo tem se mostrado muito eficiente, pois gera uma aproximação grande entre o cliente 
                                    e vendedor, possibilitando um relacionamento que possibilita a aplicação de um processo de 
                                    venda chamado upsell, onde o vendedor assim que realiza a venda, faz a oferta de um novo produto 
                                    por ter conhecimento do cliente devido ao relacionamento formado pelo funil de vendas.
                                </p>
                            </div>
                            <div className="blue-box">
                                <div className="box-header">
                                    <h1 className="title-blue-box">Que tal uma ajudinha extra!</h1>
                                    <img className="sebrae" src={sebrae} alt="sebrae"/>
                                </div>
                                <hr/>
                                <div className="help-link">
                                    <div className="list-title">Conteúdos
                                        <div className="links">
                                            <a href="/">Artigo - Funil de Vendas: como utilizar a favor do seu negócio</a>
                                        </div>
                                        <div className="links">
                                            <a href="/">Vídeo - Entenda o Funil de Vendas</a>
                                        </div>
                                        <div className="links">
                                            <a href="/">Curso - Potencialize suas vendas entendendo a jornada do consumidor</a>
                                        </div>
                                    </div>
                                    <Link style={{color: "white"}} to="/faleComSebrae">
                                        <div className="list-title">Fale com o sebrae</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
