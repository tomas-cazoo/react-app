import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component{
    render(){
        return (
            <div>
                <SearchBar />
                <br/>
                <ProductTable data={this.props.data} />
            </div>
        )
    }
}

export default FilterableProductTable