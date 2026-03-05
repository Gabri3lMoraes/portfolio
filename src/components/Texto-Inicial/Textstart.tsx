
import { Github, Linkedin, Instagram } from 'lucide-react';
import './text.css'

export default function textoInicial(){
    
    return(
        <div className='Corpo'>
          <div className="text">
            <div className="name-apresetation">
                 <h1 className='titulo-apresentacao'>Olá, Eu sou <br /> Gabriel Moraes <br />
              Desenvolvedor <span className='full'>Fullstack</span></h1>
              
            <p className='about'>Unindo desenvolvimento e automação para otimizar resultados.</p>
            <ul className='social'>
                <li className='linkks'><a className='git' href=""><Github /></a></li>
                <li className='linkks'><a className='git' href=""><Linkedin /></a></li>
                <li className='linkks'><a className='git' href=""><Instagram /></a></li>
              </ul>
            </div>
             <div className="foto">
                <img src="./src/assets/foto.jpg" style={{width: '300px', borderRadius: '50%'}} alt="" />
             </div>
          </div>
        
        
            
        </div>
    )
}