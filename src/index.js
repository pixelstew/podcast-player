import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { BrowserRouter, Route} from 'react-router-dom'

const Root = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
