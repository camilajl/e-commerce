import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

function Information() {
  return (

    <div>
        <Navbar/>
       <div className='Information'>
          <div className="information-content">
            <div className="information-head">
              <h2>Información de Contacto</h2>
            </div>
            <div className='information-form'>
              <form action="">
                <input type="text" placeholder='Nombre Completo' name = 'name'/>
                <input type="text" placeholder='Correo Electrónico' name = 'email'/>
                <input type="text" placeholder='Dirección' name = 'address'/>
                <input type="text" placeholder='Apto' name = 'apto'/>
                <input type="text" placeholder='Ciudad' name = 'city'/>
                <input type="text" placeholder='País' name = 'country'/>
                <input type="text" placeholder='Estado' name = 'state'/>
                <input type="text" placeholder='Código Postal' name = 'cp'/>
                <input type="text" placeholder='Teléfono' name = 'phone'/> 
              </form>
            </div>
            <div className="information-buttons">
              <div className='information-back'>
                Regresar
              </div>
              <div className="information-next">
                <Link href='\Payment'>
                Pagar
                </Link>
              </div>
              <div>
              </div>
              <div className="information-sidebar">
                <h3>Pedido:</h3>
                <div className='information-item'>
                  <div className="information-element">
                    <h4>Item Name</h4>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Information