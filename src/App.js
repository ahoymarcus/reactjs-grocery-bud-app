// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 3 hr 51' 00 ''
import React, { useState, useEffect } from 'react'

import List from './List'
import Alert from './Alert'



function App() {
  const [ item, setItem ] = useState('');
  const [ list, setList ] = useState([]);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ editID, setEditID ] = useState(null);
  const [ alert, setAlert ] = useState({show: false, msg: '', type: ''});

  console.log(list);


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(item);

    setList(item);
  };


  
  // const renderList = () => {

  //   if (list) {
  //     return <List list={list} />;
  //   } else {
  //      return <span></span>;
  //   }
  // };
    
 

  return (
    <section className="section-center">
      
      <form 
        className="grocery-form" 
        onSubmit={handleSubmit}
      >
        {alert.show && <Alert />}
        <h3>Grocery Bud App</h3>
        <div className="form-control"></div>
        <input 
          type="text"
          className="grocery"
          placeholder="e.g. eggs"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button 
          className="submit-btn" 
          type="submit">
            {isEditing ? 'edit' : 'submit' }
        </button>
      </form>
     

      <div className="grocery-container" >
        <List />
        <button className="clear-btn"
        
        >
          Clear items
        </button>
      </div>
      
    </section>
  );
}



export default App


