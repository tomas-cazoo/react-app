import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
    render(){
        const data = this.props.data;
        const rows = [];
        const productCategories = [...new Set(data.map(item => item.category))];

        productCategories.forEach(category => {
            rows.push(<ProductCategoryRow category={category} />)
            rows.push([...data
                        .filter(item => item.category === category)
                        .map(row => <ProductRow name={row.name} price={row.price} />)])
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