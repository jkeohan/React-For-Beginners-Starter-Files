// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';
import App from './components/App'
import Header from './components/Header'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

// render(<App/>, document.querySelector('#main'))

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'))

//import ReactDM from 'react-dom';
//ReactDom.render()
// instead just imported render from react-dom
