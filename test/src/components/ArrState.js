import {useState} from 'react';

const ArrState = () => {
  const array = [1,2,3,4,5];
  const [arr, setArr] = useState(array);
  const shuffle = () => {
    const newArr = [...arr];
    const value = newArr.pop();
    newArr.unshift(value);
    setArr(newArr);
  }
  return (
    <>
    <p>{arr}</p>
    <button onClick={shuffle}>arrButton</button>
    </>
  )
}

export default ArrState;