import Navegation from  "../../Components/Navegation/Navegation"
import React from 'react';

export default function Contact() {
    return(
    
      <div>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top pb-5" style={{backgroundColor: '#344d67' }}>
    <div className="container-fluid">
      <a className="navbar-brand text-light p-3" href="/">
        <h1 className="t-rm navbar-brand cursor-p ">Rick &amp; Morty</h1>
      </a>

      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link text-light" href="/characters">Characters</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main className="d-flex justify-content-center">
    <div className="container-contact d-flex flex-column justify-content-center aling-items-center"style={{ backgroundColor: '#344d67'}}>
      <div>
        <h2 className="text-1 text-center pb-4 p-5">Contact</h2>
        <h3 className="text-2 text-center">Leave us your information so we can contact you</h3>
        </div>
        <form className="container-form justify-content-md-center p-4" action="https://formspree.io/f/xgejnork" method="POST">
        <div className="div-1 d-flex flex-column">
          <label className="label-form" form="name">Name</label>
          <input className="input-text rounded-2 p-2 border border-0" type="text" name="userName" id="name" required=""/>
          </div>
          <div className="div-2 d-flex flex-column">
            <label className="label-form" form="email">Email</label>
            <input className="input-text rounded-2 p-2 border border-0" type="email" name="userEmail" id="email" required=""/>
            </div>
            <div className="div-3 d-flex flex-column">
              <label className="label-form" form="messege">Messege</label>
              <textarea className="textarea rounded-2 border border-0 p-4" name="userMessege" id="messege" cols="30" rows="10" required=""></textarea>
              </div>
              <div className="div-4 pt-3">
                <input className="btn-form rounded-2 border border-0" type="submit" value="Send"/>
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
       
     