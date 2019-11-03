import React from 'react';
import { connect } from 'react-redux'

const MostarListaCompra = ({Productos, AgregarListaCompra})=>{
    return(
        <React.Fragment>
            <div className='text-center'>
                <h3 className='mt-4'>LISTA COMPRA</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <ul className="list-group mt-5 mb-5 w-100">
                    {
                        Productos.map(p =>(
                            p.Listacompra === true ?
                            <li key={p.id} className="list-group-item d-flex aling-items-center">
                                <p className='col-7'>{p.producto}</p>
                                <h5 className='col-3 d-flex align-items-center text-muted'>{p.precio+ ' €'}</h5>
                                <i onClick={()=>AgregarListaCompra(p, false)} className="h5 col-2 fas fa-bookmark d-flex align-items-center text-warning"></i>
                            </li> : ''
                        ))
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state=>({
    Productos: state.ListaCompra
})

const mapDispatchToProps = dispatch =>({
    AgregarListaCompra(p, ListaCompra){
        dispatch({
            type: "AGREGARLISTACOMPRA",
            product: p,
            listacompra: ListaCompra
        })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(MostarListaCompra)