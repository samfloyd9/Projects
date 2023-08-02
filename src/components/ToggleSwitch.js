import { useState, useRef } from "react";
import "../styles/ToggleSwitch.css";
  
const ToggleSwitch = ({ label }) => {
  
  const [val, setVal] = useState('');

  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setVal(inputRef.current.value);
}

  // const rsOrPSResult = document.getElementsByClassName("checkbox")[0].checked ? true : false;
  // console.log(rsOrPSResult);

  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <form onSubmit={submitHandler}>
        <input type="checkbox" className="checkbox" 
               name={label} id={label} ref={inputRef}/>
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
        </form>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;