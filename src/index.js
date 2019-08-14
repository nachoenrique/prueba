//const element = document.createElement('h1');
//element.innerText = 'Hello, Platzi Badges!';

//const container = document.getElementById('app');
//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './componentes/App'
import './global.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

//const name = 'Nacho'
////const element = React.createElement('a',{href: 'https://instagram.com'},'Ir a ig.')

const container = document.getElementById('app');

//const jsx = <h1>hola soy {name}</h1>

//const jsx = <div> <h1>hola, soy el mas crack</h1> <p>Soy el nuevo</p>  </div>
//const element = React.createElement(
//'div',
//{},
//React.createElement('h1',{},'hola soy el mas crack.'),
//React.createElement('p',{},'soy el nuevo'))

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App/>, container); //¿PARA QUE SIRVE PONER "<Badge />"?
