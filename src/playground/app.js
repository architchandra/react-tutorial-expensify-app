class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleChooseOption = this.handleChooseOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);

    this.state = {
      options: props.options,
      selectedOption: '',
    };
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
    
      if(options) {
        this.setState(() => ({
          options: options,
        }));
      }
    } catch(e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const optionsJson = JSON.stringify(this.state.options);
      localStorage.setItem('options', optionsJson);
    }
  }
  
  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
    }));
  }

  handleDeleteSingleOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((item) => item !== option),
    }));
  }

  handleChooseOption() {
    this.setState(() => ({
      selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)],
    }));
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid option.';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }
    
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }
  
  render() {
    const subtitle = 'Put your life in the hands of a computer.'

    return (
      <div>
        <Header subtitle={ subtitle } />
        <Action
          hasOptions={ this.state.options.length > 0 }
          selectedOption={ this.state.selectedOption }
          handleChooseOption={ this.handleChooseOption }
        />
        <Options
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteSingleOption={ this.handleDeleteSingleOption }
        />
        <AddOption
          handleAddOption={ this.handleAddOption }
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: [],
};

const Header = (props) => (
  <header>
    <h1>{ props.title }</h1>
    { props.subtitle && <h2>{ props.subtitle }</h2> }
  </header>
);
Header.defaultProps = {
  title: 'Indecision App',
};

const Action = (props) => (
  <div>
    <button
      type="button"
      disabled={ !props.hasOptions }
      onClick={ props.handleChooseOption }
    >
      What should I do?
    </button>
    { !!props.selectedOption && <p>{ props.selectedOption }</p> }
  </div>
);

const Options = (props) => (
  <div>
    <button type="button" onClick={ props.handleDeleteOptions }>Remove all options</button>
    { props.options.length === 0 && <p>Please add an option to get started.</p> }
    <ol>
      { props.options.map((option, index) => (
        <Option
          key={ index }
          text={ option }
          options={ props.options }
          handleDeleteSingleOption={ props.handleDeleteSingleOption }
        />
      ) ) }
    </ol>
  </div>
);

const Option = (props) => (
  <li>
    { props.text }
    <button
      type="button"
      onClick={ (e) => props.handleDeleteSingleOption(props.text) }
    >
      Remove
    </button>
  </li>
);

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined,
    };
  }
  
  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error,
    }));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  
  render() {
    return (
      <div>
        { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));