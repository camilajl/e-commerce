import React, {useContext} from "react";
import Link from 'next/link'
import AppContext  from "../src/context/AppContext";

function Navbar() {
    const {state} = useContext(AppContext);
    const {cart} = state
 
    return (
        <div className="Header">
          
            <nav>

                <Link href='\'>
                <h1 className="text-blue-700">Platzi Conf Merch</h1>
                </Link>
                
                <menu>

                    <Link href="/Checkout">
                      <p>Checkout</p>
                      
                    </Link>
                   {cart.length > 0 && <div>{cart.lenght}</div>}

          
                </menu>
            </nav>
        </div>
    );


}

export default Navbar