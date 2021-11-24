import React from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa'



const List = ({ list }) => {
  console.log(list);

  const renderItem = () => {
    if (list) {
      renderItem = list.map((item, index) => {
        return <span key={index} >{item}</span>
      });
      return;
    } else {
      return null;
    }
  };
  
  

  return (
    
    <li>teste</li>
  );
}



export default List


