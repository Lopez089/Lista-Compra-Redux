import { createStore } from 'redux'
import inicialStore from '../redux/store'

const reducer = (state = inicialStore, action)=>{

    if(action.type === 'TEXTOPRODUCTO'){
        return{
            ...state,
            PorductoGuardar: action.text
        }
    }
    if(action.type === 'AGREGARPRODUCTO'){
        action.event.preventDefault()
        const product = state.PorductoGuardar
        const id =  state.ListaCompra.length
        const newProduct = {
            producto: product,
            precio: '',
            Listacompra: false,
            id: id+1
        }
        return{
            ...state,
            ListaCompra: state.ListaCompra.concat(newProduct)
        }
    }

    if(action.type === 'AGREGARLISTACOMPRA'){
        const id = action.product.id;
        const productUpdate = {
            producto: action.product.producto,
            precio: action.product.precio,
            Listacompra: action.listacompra,
            id: id
        }
        return{
            ...state,
            ListaCompra: state.ListaCompra.filter(l => l.id !== id).concat(productUpdate)
        }
    }

    return state
}

export default createStore(reducer, inicialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())