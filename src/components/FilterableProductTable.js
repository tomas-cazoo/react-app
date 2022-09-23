import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {filterText: '', inStockOnly: false}
    }
    searchBarAction = (e) => {
        this.setState({filterText: e.target.value})
    }

    checkBoxAction = () => {
        this.setState(state=>({
            inStockOnly: !state.inStockOnly
        }))
    }
    render(){
        return (
            <div>
                <SearchBar 
                    searchBarAction={this.searchBarAction}
                    checkBoxAction={this.checkBoxAction}
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} 
                    data={this.props.data} 
                />
            </div>
        )
    }
}

export default FilterableProductTable