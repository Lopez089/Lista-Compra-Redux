import React from 'react';
import MostarListaCompra from '../../ component/mostarListaCompra/index'
import {Link} from "react-router-dom";

const ListaCompra = ()=>{
    return(
        <div className='container-fluid'>
            <MostarListaCompra/>
            <div className='fixed-bottom '>
                <Link to="/l">
                    <button type="button" className="m-4 float-right btn btn-warning">Hacer Lista</button>
                </Link>
            </div>
        </div>
    )
}

export default ListaCompra