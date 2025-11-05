import React from 'react'

const Search = (props) => {
    const { setSearch, search } = props ;
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="Search" />
                <input type="text" placeholder="Search for a movie" value={search}
                       onChange={(e) => setSearch(e.target.value)} />
            </div>

        </div>
    )
}
export default Search ;
