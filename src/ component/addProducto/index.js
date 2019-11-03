import React from 'react';
import { connect } from 'react-redux'

const AddProducto = ({ AgregarProducto, PorductoGuardar})=>{
    return(
        <React.Fragment>
            <div className='text-center'>
                <h3 className='mt-4'>HACER LISTA</h3>
            </div>
            <div className='bg-light p-4 mt-5'>
                <form onSubmit={(event)=>{AgregarProducto(event)}}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Ejemplo: Manzanas" onChange={(event)=>PorductoGuardar(event)}/>
                    </div>
                    <button type="submit" className="btn btn-warning">Add</button>
                </form>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch =>({
    PorductoGuardar(e){
        dispatch({
            type: "TEXTOPRODUCTO",
            event:  e.persist(),
            text: e.target.value
        })
    },
    AgregarProducto(e){
        dispatch({
            type: "AGREGARPRODUCTO",
            event:  e,
        })
    }
})

export default connect(null, mapDispatchToProps)(AddProducto)