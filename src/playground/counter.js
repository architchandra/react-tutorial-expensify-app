class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const retrievedCount = parseInt(localStorage.getItem('count'), 10);
    if(!isNaN(retrievedCount)) {
      this.setState(() => ({
        count: retrievedCount,
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  
  handlePlusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: { this.state.count }</h1>
        <button type="button" onClick={ this.handlePlusOne }>+1</button>
        <button type="button" onClick={ this.handleMinusOne }>-1</button>
        <button type="button" onClick={ this.handleReset }>Reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));