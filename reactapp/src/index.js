//entry point or our application
console.log("This loads my first page through bundle")
//alert("Welcome to the shopping cart application, warm welcome!!!")
import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";// provider component will make sure that it wraps whole react appln and has store object in it
import Application, {pi} from "./app/ApplicationComponent";//default export/import
import store from "./app/State/store";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping of single page application
//creates the virtual dom
root.render(
    <Provider store={store}>
        <Application />
    </Provider>
)


// Flux base architecture - publisher subscriber method
// Redux will implement this architecture
// Object which stores all the states will be termed as - store (one store per app)
// The object which will update the state is - Action - {payload : datatoupdate, type : edit,delete}
// We need callback - reducer to generate new state using - Acions Type and Actions Payload - always returns new state
//       initial states (to be used to combine in reducer), switch cases to handle action type for everynew state
// Action creator - to define the action which will be invoked (like click event handler)
// Dispatcher - a function which makes application work in call back