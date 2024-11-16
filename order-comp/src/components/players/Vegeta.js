import React, { Component } from 'react';
import vegeta from '../images/vegeta.png';
import Button from '../buttons/Button';
import countHits from '../functions/countHits';

export class Vegeta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      danger: 'btn btn-danger',
    };
  }

  render() {
    const { name, hits, life, addOnePoint } = this.props;
    const lifeValue =
      life > 0 ? (
        <td>{life}%</td>
      ) : (
        <td>
          <span className="badge badge-danger">Dead</span>
        </td>
      );

    console.log(Math.round());

    const button =
      life > 0 ? (
        <Button clickFight={addOnePoint}> {name} fight</Button>
      ) : (
        <Button
          danger={this.state.danger}
          clickFight={addOnePoint}
          disabled={this.state.disabled}
        >
          {' '}
          {name} is dead
        </Button>
      );

    return (
      <div className="col">
        <img src={vegeta} alt="Portrait de Vegeta" />
        <br />

        {button}

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Coups</th>
              <th scope="col">Vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Vegeta, (Math.random() * 10).toFixed(0));
