import './App.css';
import Child from './components/Child'
import List from './components/List'
import StatePra from './components/StatePra'
import InputState from './components/InputState'
import ObjState from './components/ObjState'
import ArrState from './components/ArrState'

function App() {
  const obj = {
    name:'ishikawa',
    age:24
  }
  return (
    <div className="App">
      <Child word = {'ここ自由だ'} />
      <List {...obj} />
      <StatePra />
      <InputState />
      <ObjState />
      <ArrState />
      
    </div>
  );
}

export default App;
