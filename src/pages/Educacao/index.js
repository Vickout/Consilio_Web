import React from 'react';
import './styles.css'

import cursosUp from '../../assets/cursos.png'
import cursosDown from '../../assets/cursos_down.png'

export default function Educacao() {
    return (
        <div className="imagem-cursos">
            <img className="cursosUp" src={cursosUp} alt="cursos"/>
            <img className="cursosDown" src={cursosDown} alt="lista de cursos"/>
        </div>
    );
}