// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 3 hr 51' 00 ''
import React, { useState, useEffect } from 'react'

import List from './List'
import Alert from './Alert'



function App() {
  const [ item, setItem ] = useState('');
  const [ list, setList ] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);

    setList(item);
  };


  return (
    <main>
      <h3>Grocery Bud App</h3>
      <form onSubmit={handleSubmit} >
        <input 
          type="text"
          placeholder="e.g. eggs"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button >Submit</button>
      </form>
      <button>Clear items</button>
    </main>
  );
}



export default App


