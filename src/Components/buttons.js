import React from 'react';
import propTypes from 'prop-types';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle = (event) => {
    const { onButtonPress } = this.props;
    return onButtonPress(event);
  };

  render() {
    const symbols = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      '×',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];
    const buttons = symbols.map((symbol) => {
      if (/[÷×+\-=]/.test(symbol) && symbol !== '+/-') {
        return (
          <button
            key={symbol}
            type="button"
            className="calc btn green"
            onClick={this.clickHandle}
          >
            {symbol}
          </button>
        );
      }
      if (symbol === '0') {
        return (
          <button
            key={symbol}
            type="button"
            id="zero"
            className="calc btn"
            onClick={this.clickHandle}
          >
            0
          </button>
        );
      }
      return (
        <button
          key={symbol}
          type="button"
          className="calc btn"
          onClick={this.clickHandle}
        >
          {symbol}
        </button>
      );
    });
    return buttons;
  }
}

Buttons.propTypes = {
  onButtonPress: propTypes.func.isRequired,
};

export default Buttons;
