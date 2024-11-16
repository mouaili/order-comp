import React, { Component } from 'react';
import goku from '../images/goku.webp';
import Button from '../buttons/Button';
import countHits from '../functions/countHits';

export class Goku extends Component {
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

    const button =
      life > 0 ? (
        <Button clickFight={addOnePoint}> {name} fight</Button>
      ) : (
        <Button
          clickFight={addOnePoint}
          disabled={this.state.disabled}
          danger={this.state.danger}
        >
          {' '}
          {name} is dead
        </Button>
      );

    return (
      <div className="col">
        <img src={goku} alt="Portrait de Gku" />
        <br />
        {button}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">coups</th>
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

export default countHits(Goku, (Math.random() * 10).toFixed(0));
