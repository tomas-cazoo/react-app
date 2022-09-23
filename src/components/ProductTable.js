import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component{
    render(){
        const data = this.props.data;
        const productCategories = [...new Set(data.map(item => item.category))];

        const productRows = [];
        productCategories.forEach(category => {
            productRows.push(data
                .filter(item => item.category === category)
                .map(row => <ProductRow name={row.name} price={row.price} />))
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
                    <ProductCategoryRow category={productCategories[0]} />
                    {productRows[0]}
                </tbody>
            </table>
        )
    }
}
export default ProductTable