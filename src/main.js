import React from "react";
import createStore from "./store/createstore";
import AppContainer from "./app_container";

export default class Root extends React.Component {
    renderApp(){
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);
        return (
            <AppContainer store = {store} />
        );
    }
    render(){
        return this.renderApp();
    }
}