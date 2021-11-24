import React from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa'



const List = ({ items }) => {
  //console.log(items);

  const renderItem = items.map((item) => {
    const {id, title} = item;
    return <article className="grocery-item" key={id} >
      <p className="title">{title}</p>
      <div className="brn-container">
        <button type="button" className="edit-btn">
          <FaEdit />
        </button>
        <button type="button" className="delete-btn">
          <FaTrash />
        </button>
      </div>
    </article>
  });
  

  return (
    <div className="grocery-item">

      {renderItem}
    </div>
  );
}



export default List


