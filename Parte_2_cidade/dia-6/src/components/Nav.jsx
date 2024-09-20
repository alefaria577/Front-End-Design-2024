import { NavStyle } from "../css/NavStyle.jsx"

const Nav =()=>{
    return(

        <NavStyle>
            <section className="header">
               <div className="header-container">
                    <h1 className="logo">CityCars</h1>
                    <ul>
                        <li className="link">Home</li>
                        <li className="link">Sobre</li>
                        <li className="link">Carros</li>
                    </ul>
               </div>
            </section>
        </NavStyle>
        
     
    )
}

export default Nav