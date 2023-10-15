import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function SearchBox() {
  return (
    <div className="search-div">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input className='search-input' type="text" placeholder='Search'/>
    </div>
  )
}

export default SearchBox