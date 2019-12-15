import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    id: 0,
    name: '',
    loggedIn: false
  });

  const [users, setUsers] = useState([
    {
      name: 'bob',
      message: 'blah'
    },
    {
      name: 'steve',
      message: 'blah blah'
    },
    {
      name: 'tony',
      message: 'blah blah blah'
    }
  ]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setRed(newCount < 0);
  }

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setRed(newCount < 0);
  }

  return (
    <div className="app">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1 className={isRed ? "red" : ""}>{count}</h1>

      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}


    </div>
  );
}

export default App;