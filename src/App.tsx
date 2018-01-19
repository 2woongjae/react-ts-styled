import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import Button from './Button';

const H2 = styled.h2`
  font-size: 30px;
  color: aquamarine;
  text-decoration: underline;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <H2>Hello</H2>
        <Button>Normal Button</Button>
        <Button primary={true}>Primary Button</Button>
      </div>
    );
  }
}

export default App;
