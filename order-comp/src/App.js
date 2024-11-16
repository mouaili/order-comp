import React from 'react';

import './App.css';
import Goku from './components/players/Goku';
import Vegeta from './components/players/Vegeta';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Vegeta: 100,
      Goku: 100,
    };
  }

  reduceLife = (param, power) => {
    if (param === 'Goku') {
      this.setState({ Vegeta: this.state.Vegeta - power });
    }

    if (param === 'Vegeta') {
      this.setState({ Goku: this.state.Goku - power });
    }
  };

  render() {
    return (
      <div className="container text-center primary-warning">
        <h1>Goku vs Vegeta</h1>
        <hr />
        <div className="row">
          <Vegeta
            name="Vegeta"
            life={this.state.Vegeta}
            reduceLife={this.reduceLife}
          />
          <Goku
            name="Goku"
            life={this.state.Goku}
            reduceLife={this.reduceLife}
          />
        </div>
      </div>
    );
  }
}

export default App;
