import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Partials/App'
import {Provider} from "react-redux"
import Store from "./Redux/Store"

const root=ReactDOM.createRoot(document.getElementById("root"))



root.render(
     <>
     <Provider store={Store}>

     <App/>
     
     </Provider>
     </>
)
// json-server GenStyle.json --watch --port 8000
// 25_(React ) start 