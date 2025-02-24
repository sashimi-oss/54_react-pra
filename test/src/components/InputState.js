import {useState} from 'react';

const InputState = () => {
  const [value, setValue] = useState("text");
  const valueComponent = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <input type="text" value={value} onChange={valueComponent} />

      <h2>{value}</h2>
    </>
  )
}

export default InputState;