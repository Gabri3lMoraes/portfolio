
import { Github, Linkedin, Instagram } from 'lucide-react';
import './text.css'

export default function textoInicial(){
    
    return(
        <div className='Corpo'>
            <div className="text">
              <h1 className='titulo-apresentacao'>Olá, Eu sou <br /> Gabriel Moraes <br />
              Desenvolvedor <span className='full'>Fullstack</span></h1>
              
            <p className='about'>Unindo desenvolvimento e automação para otimizar resultados.</p>
            </div>
        
        
            <ul className='social'>
                <li className='linkks'><a className='git' href=""><Github /></a></li>
                <li className='linkks'><a className='git' href=""><Linkedin /></a></li>
                <li className='linkks'><a className='git' href=""><Instagram /></a></li>
              </ul>
        </div>
    )
}