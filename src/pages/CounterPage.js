// import { useState } from 'react';
import { produce } from 'immer';
import { useReducer } from 'react';
import Button from "../components/Button";
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = ''

const reducer = (state, action) => {

  switch (action.type) {
    case INCREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };
      state.count = state.count + 1;
      return;
    case SET_VALUE_TO_ADD:
      // return {
      //   ...state,
      //   valueToAdd: action.payload,
      // };
      state.valueToAdd = action.payload;
      return;
    case DECREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      // return {
      //   ...state,
      //   count: state.count + state.valueToAdd,
      //   valueToAdd: 0
      // };
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
      // return state;
  }

  // if (action.type === INCREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }
  // if (action.type === SET_VALUE_TO_ADD) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }  
  // return state;
};

function CounterPage({ initialCount }) {
  // const [valueToAdd, setValueToAdd] = useState(0);
  // const [count, setCount] = useState(initialCount);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
    // setCount(count + 1);
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    })
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    })

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