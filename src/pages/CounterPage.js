// import { useState } from 'react';
import { useReducer } from 'react';
import Button from "../components/Button";
import Panel from '../components/Panel';

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};

function CounterPage({ initialCount }) {
  // const [valueToAdd, setValueToAdd] = useState(0);
  // const [count, setCount] = useState(initialCount);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch();
    // setCount(count + 1);
  };

  const decrement = () => {
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: 'change-value-to-add',
      payload: value,
    });
    // setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg mb-2.5">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button className="mr-5" primary onClick={increment}>Increment</Button>
        <Button primary onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input 
          type="number" 
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;