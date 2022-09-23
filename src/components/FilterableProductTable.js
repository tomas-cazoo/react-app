import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component{
    render(){
        return (
            <div>
                <SearchBar />
                <ProductTable data={this.props.data} />
            </div>
        )
    }
}

export default FilterableProductTable