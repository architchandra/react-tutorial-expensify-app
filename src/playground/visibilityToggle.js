class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      isHidden: true,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => ({
      isHidden: !prevState.isHidden,
    }));
  }
  
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button type="button" onClick={ this.handleToggleVisibility }>{ this.state.isHidden ? 'Show' : 'Hide' } Details</button>
        { !this.state.isHidden && <p>Details are here.</p> }
      </div>
    );
  }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));