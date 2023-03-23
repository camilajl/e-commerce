import React from 'react'
import Navbar from '../components/Navbar'

function Success() {
  return (
    <div>
        <Navbar/>
        <div className="success">
          <div className='Success-content'>
            <h2>Oscar, Gracias por tu Compra</h2>
            <span>Tu pedido llegará en 3 días a tu dirección</span>

            <div className='Success-map'>
              Google Maps
            </div>
          </div>
        </div>
    </div> 
  )
}

export default Success