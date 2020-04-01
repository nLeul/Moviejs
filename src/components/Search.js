import React from 'react';

const Search = (props) => {
    return (
        <div>
            <form action="">
                <input value={props.searchVal} type="text" />
                <button onClick={props.searchTag} >Search</button>
            </form>
        </div>
    );
}

export default Search;