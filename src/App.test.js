import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('./services/headBlock');

it('renders without crashing', () => {
  const mock = jest.fn();

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
