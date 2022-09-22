import React from 'react'

class SearchBar extends React.Component{
    render(){
        return (
            <div>
                <input placeholder='Search...' />
                <br />
                <input type="checkbox" />
                <label>Only show products in stock</label>
            </div>
        )
    }
}

export default SearchBar