import React from 'react';
import {Link} from "react-router-dom";
import AddProducto from '../../ component/addProducto';
import MostrarHacerLista from '../../ component/mostrarHacerLista';

const HacerLista = ()=>{
    return(
        <div className='container-fluid'>
        <AddProducto/>
        <MostrarHacerLista/>
        <div className='fixed-bottom '>
            <Link to="/">
                <button type="button" className="m-4 float-right btn btn-warning">Lista Compra</button>
            </Link>
        </div>
    </div>
    )
}

export default HacerLista