import React, {Component} from 'react';
import ReactDom from 'react-dom'
import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom';

import './Styles/stylesheet.css';


ReactDom.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));