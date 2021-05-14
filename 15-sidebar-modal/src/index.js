import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { AppContext, AppProvider } from "./context";
import App from './App'

ReactDOM.render(
  <React.Fragment>
     <AppProvider>
       <App />
      </AppProvider>   
  </React.Fragment>
   
  ,
  document.getElementById('root')
)
//åå</React.StrictMode><React.StrictMode>