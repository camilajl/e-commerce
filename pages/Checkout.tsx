import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'


function Checkout() {
  return (

    <div>
        <Navbar />
       
       <div className='Checkout'>

        <div className="Checkout-content">
          <h3>Lista de Pedidos:</h3>
          <div className='Checkout-item'>
            <div className='Checkout-element'>
                <h4>Item Name</h4>
                <span>$10</span>
            </div>
            <button type='button'>Eliminar</button>
          </div>
        </div>

       </div>
        <div className="Checkout-sidebar">
          <h3>Precio Total: $10</h3>
          <Link href='\Information'>
            <button type='button'>Continuar Pedido</button>
          </Link>
          
          
          
        </div>
       
    </div>
  )
}

export default Checkout