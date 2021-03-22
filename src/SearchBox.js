import React from 'react';

const SearchBox = ( {searchChange} ) => {
    return (
        <div>
            <input type="search" placeholder="search food..." className = "text-center form-control" onChange={searchChange} />
        </div>
    );
}

export default SearchBox;