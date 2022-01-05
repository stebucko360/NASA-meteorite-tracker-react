import React from 'react'
import { useState } from 'react';

export const Searchbar = ({setQuery}) => {

    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
    };

    const handleSubmit = (event)=>{
        event.preventDefault()
        setQuery(search)
        setSearch("")
    }


    return (
        <div className='sideBar'>
            <form className='search' onSubmit={handleSubmit}>
                <label className='searchLabel' for='searchbox'>Search by meteorite name :</label>
                <input
                id="searchbox"
                className="input"
                value={search}
                onChange={handleChange}>
                </input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}


