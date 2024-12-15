import "./home.css"

export default function home (){
    return(
    <div className="titulo d-flex justify-content-center align-items-center container-fluid  mt-4 vw-100 vh-100">
        <div className="containerhome align-self-center fondo-blanco  w-50 h-10 p-5">
                <h1 className="text t-1 text-center">Proyect Rick &amp; Morty</h1>
                <h2 className="text t-2 text-center mt-4">Welcome to Rick &amp; Morty Proyect!</h2>
                <p className="text t-3 text-center">This proyect was made for practising React and to made a functional website.</p>
                <p className="text t-4 text-center mt-4">In this website you can know information of the characters of this animated series.</p>
                <p className="text t-6 text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.</p>
                <h2 className="texto t-5 text-center">Lets go!</h2>
                <div className="containerbutton d-flex justify-content-center">
                <a alt="Go to Characters" class="boton b1 btn btn-secondary" href="/characters">Characters</a>
                <a alt="Go to Contact" class="boton b2 btn btn-secondary" href="/contact">Contact</a>

            </div>
        </div>
    </div>
    
     

    )
}
//import ButtonsHome from '../../components/ButtonsHome/ButtonsHome'

//import './home.css'


//export default function Home() {
    //return(
        //<div className='d-flex justy-content-center align-items-center mt-4'>
            //<div className='container fondo-blanco p-5'>
                    //<h1 className=" row">Proyect Rick & Morty</h1>
                    //<h2 className='row'>Welcome to Rick & Morty Proyect!</h2>  
                    //<p className='row'>This proyect was made for practising React and to made a functional website. </p> 

                    //<p className='row'>In this website you can know information of the characters of this animated series. </p> 
                    
                    //<p className='row'>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                    //</p>     
                    //<p className='row'>Lets go!</p> 
                    //<div className='row'>
                        //<ButtonsHome contenido="Characters"/>
                        //<ButtonsHome contenido="Contact"/>           
                    //</div>

                //</div>        
       // </div>


 