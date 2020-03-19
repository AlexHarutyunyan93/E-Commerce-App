import React, {useEffect} from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import { history } from '../helpers';
export function App(){

    useEffect(() => {
        history.listen((location, action) => {
            clear();
        });
    });

    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={() => <div>Home</div>} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </div>
    )
}
