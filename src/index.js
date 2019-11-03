import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HacerLista from './page/HacerLista/layout';
import ListaCompra from './page/ListaCompra/layout'
import { Provider } from 'react-redux'
import store from './redux/reducer'

const App = ()=> {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <ListaCompra/>
                        </Route>
                        <Route path='/l'>
                            <HacerLista/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
}

render(<App/>, document.getElementById('app'))