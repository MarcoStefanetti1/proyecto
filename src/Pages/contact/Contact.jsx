import Navegation from  "../../Components/Navegation/Navegation"

export default function Contact() {
    return(
        <div>
        <nav className="container-nav navbar navbar-expand-lg w-100">
        <div className="container-fluid justify-content-between aling-items-center">
            <a alt="Go to Home" class=" text-decoration-none" href="/">
            <h1 className="t-rm navbar-brand cursor-p">Rick &amp; Morty</h1>
            </a><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src="./Components/imagen/list.svg" alt="Nav" class="ico-h"/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="container-items nav nav-pills">
                        <li className="nav-item">
                            <a className="bc-1-contact nav-link text-decoration-none bc-hover" href="/Characters">Characters</a>
                            </li><li className="nav-item"><a class="bc-2-contact bc-hover nav-link text-decoration-none" href="/Contact">Contact</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </nav>
                            <main className="d-flex justify-content-center p-4 fondo">
                                <div className="fondo container-contact d-flex flex-column justify-content-center aling-items-center"><div>
                                    <h2 className="text-1 text-center">Contact</h2>
                                    <h3 className="text-2 text-center">Leave us your information so we can contact you</h3>
                                    </div>
                                    <form className="fondo container-form  justify-content-md-center p-4" action="https://formspree.io/f/xgejnork" method="POST">
                                    <div className="div-1 d-flex flex-column">
                                        <label className="label-form " form="name">Name</label>
                                        <input className="fondo input-text rounded-2 p-2 border border-0" type="text" name="userName" id="name" required=""/></div>
                                        <div className=" div-2 d-flex flex-column">
                                            <label className="label-form" form="email">Email</label>
                                            <input className="input-text rounded-2 p-2 border border-0" type="email" name="userEmail" id="email" required=""/></div>
                                            <div className="div-3 d-flex flex-column">
                                                <label className="label-form" form="messege">Messege</label>
                                                <textarea className="textarea rounded-2 border border-0 p-4" name="userMessege" id="messege" cols="30" rows="10" required=""></textarea>
                                                </div>
                                                <div className="div-4"><input className="btn-form rounded-2 border border-0" type="submit" value="Send"/>
                                                </div>
                                             </form>
                                         </div>
                                     </main>
                                
      </div>
    )
}

                            
//no hace falta hacerlo funcional, si quieren ponerle un action pueden usar la forma gratuita de formspree  //<div>
        
          //<Navegation/>
            //<div className='bg-primary d-flex flex-column'>
                //<h1>Contact</h1>
                   // <p>Leave us your information so we can contact you</p>
                    //<form>
                     //   <label htmlFor='name'>Name</label>
                      //  <input type='text' id='name'/>

//                        <label htmlFor='email'>Email</label>
  //                      <input type="email" id='email'/>

    //                    <label htmlFor='message'>Message</label>
      //                  <textarea id='message'></textarea>

        //                <input type='submit' value={"Send"}/>
          //          </form>        
           //</div>
 
        //</div>
       
       