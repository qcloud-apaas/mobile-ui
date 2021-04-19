import React from 'react';
import ReactDOM from 'react-dom';
import { RootComponent } from './root-component';
import '@vant/touch-emulator';
import '../../../pant-react/es/styles/base.scss';
import '../styles/base.scss';

const container = document.getElementById('app');
container.innerHTML = '';
ReactDOM.render(React.createElement(RootComponent, {}), container);
