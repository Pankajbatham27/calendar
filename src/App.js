import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import { useState } from 'react';

function App() {

  const [date, setDate] = useState(new Date('2020-03-23'));
  const [firstInputDateRemember, setFirstInputDateRemember] = useState(date);

  const preNextHandler = (event) => {
    if (event === 'pre') {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }
  }

  return (
    <div className="App">
      <div className="app-header">
        <Calendar date={date} firstInputDateRemember={firstInputDateRemember} preNextHandler={preNextHandler} />
      </div>
    </div>
  );
}

export default App;
