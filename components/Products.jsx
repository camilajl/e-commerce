import React, {useContext} from 'react';
import Product from './Product'
import AppContext from '../src/context/AppContext'

const Products = ({products}) =>  {
  
  const {state, addToCart} = useContext(AppContext)
  const {prod} = state;

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className='Products'>

        <div className="products-item">
            {prod.map(product =>(
                <Product key = {product.id} product = {products} handleAddToCart = {handleAddToCart} />

            ))}
        </div>

    </div>
  )
}

export default Products
