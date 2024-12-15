import { useState ,useEffect,useContext} from 'react';
import './character.css'
import Navegation from '../../Components/Navegation/Navegation'
import Card from '../../Components/Card/Card'
import Filter from '../../Components/Filter/Filter'

export default function Characters() {
    let [data,setData]=useState([])
    let[dataCompleta,setDataCompleta]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([])
    let[show,setShow]=useState(true)
    
  


    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarData=async()=>{
    
       let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .catch((error)=>console.log("error:" +error));
     
         setDataCompleta(infoAPI.results);
     
     }

    const filtrar=(inputData)=>{
        let pulsado=inputData.checked;

        let filtroPulsado=inputData.value;
        console.log(pulsado)
        console.log(filtroPulsado)


        if(pulsado){
            setFiltrosAplicados([...filtrosAplicados,filtroPulsado])
           
        }else{
            setData(dataCompleta)
            let filtrosActualizado=filtrosAplicados.filter((fil)=>{return fil !== filtroPulsado})
            setFiltrosAplicados(filtrosActualizado)//
        }
    
    }

    useEffect(()=>{

       filtrosAplicados.forEach((filtro)=>{
        let nuevaLista;

        switch (filtro) {
            case "Character Alive":
                nuevaLista=data.filter((personaje)=>{return personaje.status === "Alive"})
                break;

            case "Character Dead":
                nuevaLista=data.filter((personaje)=>{return personaje.status === "Dead" })
                break;

            case "Female":
                nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Female"})
                break;

            case "Male":
                nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Male" })
                break;

            case "Origin Unknown":
                nuevaLista=data.filter((personaje)=>{return personaje.origin.name === "unknown" })
                break;
                              
        }
       setData(nuevaLista)
       })
    },[filtrosAplicados])  
  
     useEffect(()=>{
        mostrarData()
        
     },[])
    
    return(
        <div>
            <Navegation/>
          
            <h2 className='text-white subt-1'>Filters</h2>
            
            <div className='mobile-filters bg-success d-flex gap-3 my-3' onClick={()=>{setShow(!show)}}>
                <h2 className='text-white'>Filters</h2>
                <p>Icono</p>
            </div>
          
                <form className={show? 'form row gap-2':'row gap-2'}>
                    {
                        filterName.map((filter)=>{
                            return  <Filter key={filter} title={filter} filtar={filtrar}/>
                        })
                    }  
                </form>          
        

            <section className='d-flex gap-2 flex-wrap'>
            {
                
                data.length !== 0?
                data.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
                :
                <p className='alert bg-success'>
                <i className="bi bi-exclamation-triangle-fill pe-2"></i>Sorry! There are no characters width all those properties.</p>
            }
                
            </section>      
        </div>

    )
}