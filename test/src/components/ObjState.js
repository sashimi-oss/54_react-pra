import {useState} from 'react';

const ObjState = () => {
  let object = {
    name: 'shoki',
    age:24
  }
  const [obj, setObj] = useState(object);
  const changeName = (e) => {
    setObj({...obj, name : e.target.value});
  }
  const changeAge = (e) => {
    setObj({...obj, age : e.target.value});
  }
  return (
    <>
      <input type="text" value={obj.name} onChange={changeName} />
      <input type="number" value={obj.age} onChange={changeAge} />

      <p>{obj.name}</p>

      <p>{obj.age}</p>
    </>
  )
}

export default ObjState;