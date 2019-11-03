import React from 'react';
import { connect } from 'react-redux'



const MostarHacerLista = ({Productos, AgregarListaCompra})=>{
    return(
        <React.Fragment>
            <div className='d-flex justify-content-center'>
                <ul className="list-group mt-5 mb-5 w-100">
                    {
                            Productos.map(p =>(
                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                <li key={p.id} className={p.Listacompra === true ? 'bg-light list-group-item d-flex aling-items-center': 'list-group-item d-flex aling-items-center'}>
                                    <p className='col-7'>{p.producto}</p>
                                    <h5 className='col-3 d-flex align-items-center text-muted'>{p.precio+ ' €'}</h5>
                                    {
                                        p.Listacompra === false ? <i onClick={()=>AgregarListaCompra(p, true)} className="h5 col-2 far fa-bookmark d-flex align-items-center text-warning"></i> : ''
                                    }
                                    {
                                        p.Listacompra === true ? <i onClick={()=>AgregarListaCompra(p, false)} className="h5 col-2 fas fa-bookmark d-flex align-items-center text-warning"></i>  : ''
                                    }
                                </li>
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
export default connect(mapStateToProps,mapDispatchToProps)(MostarHacerLista)