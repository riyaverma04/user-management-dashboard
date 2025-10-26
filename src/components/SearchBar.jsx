import React from 'react'
import '../styles/searchbar.scss'

const SearchBar = ({search,setSearch}) => {
  return (
   <>
   <input
         className='search-bar'
           type="text"
           placeholder="Search by name or email"
           value={search}
           onChange={e => setSearch(e.target.value)}
         />
   </>
  )
}

export default SearchBar
