import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './index.css'
import   Home  from "./Pages/Home/home"
import  Characters from "./Pages/Characters/characters"
import Contact from './Pages/Contact/Contact'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)

//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import RouterSite from './routes.jsx'

//createRoot(document.getElementById('root')).render(
  //<StrictMode>
    //<RouterSite />
  //</StrictMode>, )