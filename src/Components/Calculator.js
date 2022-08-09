import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-wrap">
        <div className="output">0</div>
        <div className="row">
          <div className="calc_key">AC</div>
          <div className="calc_key">+/-</div>
          <div className="calc_key">%</div>
          <div className="calc_key operator_key">+</div>
        </div>
        <div className="row">
          <div className="calc_key">7</div>
          <div className="calc_key">8</div>
          <div className="calc_key">9</div>
          <div className="calc_key operator_key">x</div>
        </div>
        <div className="row">
          <div className="calc_key">4</div>
          <div className="calc_key">5</div>
          <div className="calc_key">6</div>
          <div className="calc_key operator_key">-</div>
        </div>
        <div className="row">
          <div className="calc_key">1</div>
          <div className="calc_key">2</div>
          <div className="calc_key">3</div>
          <div className="calc_key operator_key">+</div>
        </div>
        <div className="last_row">
          <div className="calc_key zero_key">0</div>
          <div className="calc_key">.</div>
          <div className="calc_key operator_key">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
