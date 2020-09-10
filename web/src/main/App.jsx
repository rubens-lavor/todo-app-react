import React from 'react';
import './App.css';

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <div className="container">
      <Todo />
      <About />
  </div>
)
