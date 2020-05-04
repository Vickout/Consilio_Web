import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BemVindo from './pages/Perguntas/Bem_vindo';
import Pergunta1 from './pages/Perguntas/Pergunta_1';
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

export default function Routes() {
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
                <Route path="/home" component={Home} />

            </Switch>
        </BrowserRouter>
    );
}