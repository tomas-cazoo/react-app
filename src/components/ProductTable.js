import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const data = this.props.data;
        const rows = [];
        const productCategories = [...new Set(data.map(item => item.category))];
        
        productCategories.forEach(category => {
            rows.push(<ProductCategoryRow category={category} />)
            
            //get products only for current category with filters applied
            const productRows = [...data
                                    .filter(item => item.category === category &&
                                                    item.name.includes(filterText) &&
                                                    (item.stocked === true || item.stocked === inStockOnly))
                                    .map(row => <ProductRow product={row} />)]
            
            if(productRows.length != 0){
                rows.push(productRows);
            }else{
                rows.pop();
            }
        });
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
export default ProductTable