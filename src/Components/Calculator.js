import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [element, addNewElement] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calc = (event) => {
    const newElement = calculate(element, event.target.textContent);
    addNewElement(newElement);
  };
  return (
    <div className="container-wrap">
      <div className="output">{element.next || element.total || 0}</div>
      <div className="row">
        <button type="button" className="calc_key " onClick={calc}>
          AC
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          +/-
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          %
        </button>
        <button type="button" className="calc_key operator_key" onClick={calc}>
          ÷
        </button>
      </div>
      <div className="row">
        <button type="button" className="calc_key" onClick={calc}>
          7
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          8
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          9
        </button>
        <button type="button" className="calc_key operator_key" onClick={calc}>
          x
        </button>
      </div>
      <div className="row">
        <button type="button" className="calc_key" onClick={calc}>
          4
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          5
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          6
        </button>
        <button type="button" className="calc_key operator_key" onClick={calc}>
          -
        </button>
      </div>
      <div className="row">
        <button type="button" className="calc_key" onClick={calc}>
          1
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          2
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          3
        </button>
        <button type="button" className="calc_key operator_key" onClick={calc}>
          +
        </button>
      </div>
      <div className="last_row">
        <button type="button" className="calc_key zero_key" onClick={calc}>
          0
        </button>
        <button type="button" className="calc_key" onClick={calc}>
          .
        </button>
        <button type="button" className="calc_key operator_key" onClick={calc}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
