// import './App.css';

/** 
  TODO: when user clicks the Add new Item button a new input should appear
  TODO: added inputs should not exceed maxNumber
  TODO: when user clicks Submit button all inserted input values should appear on the list
  */

import { useState } from 'react';

const App = () => {
  const maxNumber = 10;

  const [inputs, setInputs] = useState(['']);
  const [resutls, setResutls] = useState([]);

  const addFields = () => {
    inputs.length < maxNumber && setInputs(previous => [...previous, '']);
  };

  const handleChange = (e, index) => {
    const values = inputs.map((input, i) =>
      index === i ? e.target.value : input
    );
    setInputs(values);
  };

  const submit = () => {
    console.log(inputs);
    setResutls([...inputs]);
    // EMPTY VALUES AFTER SUBMITION
    setInputs(['']);
  };

  return (
    <div className='body'>
      <div className='list-wrapper'>
        <h2> Max List Number {maxNumber} </h2>

        <form onSubmit={submit} className='form'>
          {inputs.map((input, index) => (
            <input
              value={input}
              name='value'
              placeholder={index}
              key={index}
              onChange={e => handleChange(e, index)}
            />
          ))}
        </form>

        <div className='buttons-wrappers'>
          <button onClick={() => addFields()}>Add new Item</button>
          <button onClick={submit}>submit</button>
        </div>
      </div>

      <div className='list-result'>
        <h2> List Result </h2>
        <ul>
          {resutls.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
