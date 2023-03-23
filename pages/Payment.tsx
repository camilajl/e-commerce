import React from 'react'
import Navbar from '../components/Navbar'

function Payment() {
  return (
    <div>
        <Navbar/>
        <div className="Payment">
          <div className="Payment-content">
            <h3>Resumen del Pedido:</h3>
            <div className="Payment-button">
              <button type='button'>
                Botón de Pago con Paypal
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Payment