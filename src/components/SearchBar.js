import React from 'react'

class SearchBar extends React.Component{
    render(){
        return (
            <form>
                <input onChange={this.props.searchBarAction} type="text" placeholder="Search..." />
                <p>
                <input onChange={this.props.checkBoxAction} type="checkbox" />
                {' '}
                Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar