import React from 'react';
import { Row, Table, Col, Tag } from 'antd';

import './styles.css';

const columns = [
    {
      title: 'Tema',
      dataIndex: 'tema',
      key: 'tema',
      render: text => <a>{text}</a>,
      width: '80%'
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
      width: '20%'
    }
  ];
  
  const data = [
    {
      key: '1',
      tema: 'como implantar um funil de vendas',
      tipo: 'evento online'
    },
    {
      key: '2',
      tema: 'como criar processos comerciais',
      tipo: 'webmário'
    },
    {
      key: '3',
      tema: '3 passos para revolucionar seu atedimento',
      tipo: 'artigo'
    },
    {
      key: '4',
      tema: 'como motivar sua equipe de vendas em momentos de crise',
      tipo: 'curso'
    },
    {
      key: '5',
      tema: 'orientação para atendimento durante a crise do COVID-19',
      tipo: 'vídeo'
    }
  ];

export default function PaginaFaleComSebrae() {

    return (

<div id="container">
	<div id="header"><span className="titulo">Agenda sebrae</span></div>
	<div id="mainnav"><br></br></div>
	<div id="menu">
        <span className="azul">Dados do Sebrae mais próximo
        <br></br><br></br>
        SEBRAE MINAS
        UNID. POÇOS DE CALDAS
        <br></br><br></br>
        telefone
        0800 570 0800
        <br></br><br></br>
        endereço
        R. Mal. Deodoro, 274 - Centro, 
        Poços de Caldas
        MG, 37701-014
        <br></br><br></br>
        site
        www.sebrae.com.br
        <br></br><br></br>
        Google Maps - Easy
        <br></br><br></br>
        <div className="mapa"><br></br></div>
        </span>
    </div>
	<div id="contents">
        <Row>
            <Col>
                <div className="eventosPresenciais"><br></br></div>
            </Col>
            <Col>
                <div className="eventosOnline"><br></br></div>
            </Col>
            <Col>
                <div className="empretec"><br></br></div>
            </Col>
            <Col>
                <div className="orientacaoMentoria"><br></br></div>
            </Col>
        </Row>
        <Row>
            <Table style={{ width: '100%'}} columns={columns} dataSource={data} />
        </Row>
    </div>
</div>
    );
}