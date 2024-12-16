import './nav.css';
import {Link, Links} from 'react-router'


export default function Navegation() {
    return(
        <nav className='container-nav navbar navbar-expand-lg w-100 d-flex justify-content.between p-4'>
           <h1><Links to="/" classname="rick">rick y morty</Links></h1>
           <div className='containerbuttom col d-flex justify-content.end'>
           <Links to="/characters" classname="btn boton">characters</Links>
           <Links to="/contact" classname="btn boton">contact</Links>
           </div>
        </nav>
    )
}