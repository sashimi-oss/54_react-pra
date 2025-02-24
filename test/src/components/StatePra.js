import {useState} from 'react';

const StatePra = () => {
  const [value, setValue] = useState(0);
  const addNum = () => {
    setValue(value + 1);
  }
  const subNum = () => {
    setValue(value - 1);
  }
  return (
    <>
    <h1>{value}</h1>

    <button onClick = {addNum}>+</button>
    <button onClick = {subNum}>-</button>


    </>
  )
}

export default StatePra;