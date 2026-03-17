
import { Github, Linkedin, Instagram } from 'lucide-react';
import './text.css'
import {motion} from "framer-motion"
export default function textoInicial(){
    
    return(
        <div className='Corpo'>
          <motion.div
        initial={{ opacity: 0, y: 50 }}          
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6, ease: "easeOut" }} 
        viewport={{ 
          once: true,  
          amount: 0.2  
        }}>
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
             
          </div>
        </motion.div>
        
            
        </div>
    )
}