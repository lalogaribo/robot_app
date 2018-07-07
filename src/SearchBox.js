import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        type="search" 
        placeholder='Set robot name'/>
    </div>
  );
};

export default SearchBox;