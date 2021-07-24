const appData = {
  title: 'Indecision App',
  subtitle: 'Do things with clarity',
  options: [],
  decision: null,
};

const onClickRemove = () => {
  appData.options = [];
  reRender();
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  appData.options.push(option);
  e.target.elements.option.value = '';
  reRender();
};

const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * appData.options.length);
  console.log(randNum);
  appData.decision = randNum;
  reRender();
};

const appRoot = document.getElementById('app');

const reRender = () => {
  const template = (
    <div>
      <h1>{ appData.title }</h1>
      { appData.subtitle && <p>{appData.subtitle}</p> }
      <button type="button" disabled={ appData.options.length === 0 } onClick={ onClickRemove }>Remove All</button>
      <button type="button" disabled={ appData.options.length === 0 } onClick={ onMakeDecision }>What should I do?</button>
      { (appData.options.length !== 0 && appData.decision !== null) ? <p>Do { appData.options[appData.decision] }</p> : '' }
      <ol>
        { appData.options.map((option, i) => <li key={ i }>{ option }</li>) }
      </ol>
      { appData.options && !appData.options.length ? <p>No options found.</p> : '' }
      <form onSubmit={ onFormSubmit }>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
reRender();