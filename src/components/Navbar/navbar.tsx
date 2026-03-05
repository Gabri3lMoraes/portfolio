import { useState } from "react"
import { CodeXml } from 'lucide-react';
import './navbar.css'
import { Menu, X } from 'lucide-react';
export default function Navbar(){

    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => setMenuAberto(!menuAberto)

    return(
         <nav className='nave'>
              <div className="logo">
                  <h2 className='logo-text'>Moraes <CodeXml size={33}/></h2>
              </div>
              
                <button onClick={toggleMenu} className="botao-menu" id="botao-menu">
                    {menuAberto ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
                    </button>


                <ul className={`ulist ${menuAberto ? 'ativo' : ''}`}>
                  <li className='list'>
                    <a href="Textstart" onClick={toggleMenu}>Home</a>
                  </li>
                  <li className='list'>
                    <a href="#about" onClick={toggleMenu} >Sobre Mim</a>
                  </li>
                  <li className='list'>
                    <a href="#projeto" onClick={toggleMenu}>Projetos</a>
                  </li>
                  <li className='list' id='contatos'>
                    <a id='a-contato' href="#contato" onClick={toggleMenu}>Fale comigo</a>
                  </li>
                </ul>
            </nav>
    )
}