import React,{useState} from 'react';

const Search = (props) => {

    const [searchValue, setSearchValue] = useState("");

    // const handleSearchInputChanges = (e) => {
    //     setSearchValue(e.target.value);
    // };
    // const callSearchFunction = (e) => {
    //     e.preventDefault();
    //     props.search(searchValue);
    //   }


    const searchHandler = (e) => {
        e.preventDefault();
        props.fetchMovies(searchValue)
    
    }
    
    return (
        <div>
            <form action="" >
                <input value={searchValue} onChange={e=>setSearchValue(e.target.value)} type="text" />
                <button onClick={searchHandler}>Search</button>
            </form>
        </div>
    );
}

export default Search;