import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input className="pa3 ba b--green bg-lightest-blue br2 searchbox" 
            type='search' 
            placeholder='Search Robots...' 
            onChange={searchChange} />
        </div>
    );
}

export default SearchBox;