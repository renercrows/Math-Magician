class calculator extends React.PureComponent {
    render() {
      const { data, onDataChange } = this.props;
      const { total, operation, next } = data;
      return (
        <div className="calculator-container">
          <h2>Let&apos;s do some math!</h2>
          <div className="calculator">
            <div id="entry" className="calc" name="entry" placeholder="0">
              <span>{total}</span>
              <span>{operation}</span>
              <span>{next}</span>
            </div>
            <Buttons onButtonPress={onDataChange} />
          </div>
        </div>
      );
    }
  }
  
  Calculator.propTypes = {
    onDataChange: propTypes.func.isRequired,
    data: propTypes.instanceOf(Object).isRequired,
  };

  export default Calculator;
  