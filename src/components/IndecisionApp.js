import React from 'react';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined,
  };
  
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  handleDeleteSingleOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((item) => item !== option),
    }));
  };

  handleChooseOption = () => {
    this.setState(() => ({
      selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)],
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter a valid option.';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }
    
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

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
  
  render() {
    const subtitle = 'Put your life in the hands of a computer.'

    return (
      <div>
        <Header subtitle={ subtitle } />
        <div className="container">
          <Action
            hasOptions={ this.state.options.length > 0 }
            selectedOption={ this.state.selectedOption }
            handleChooseOption={ this.handleChooseOption }
          />
          <div className="widget">
            <Options
              options={ this.state.options }
              handleDeleteOptions={ this.handleDeleteOptions }
              handleDeleteSingleOption={ this.handleDeleteSingleOption }
            />
            <AddOption
              handleAddOption={ this.handleAddOption }
            />
          </div>
          <OptionModal 
            selectedOption={ this.state.selectedOption } 
            handleClearSelectedOption={ this.handleClearSelectedOption }  
          />
        </div>
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: [],
};
export default IndecisionApp;