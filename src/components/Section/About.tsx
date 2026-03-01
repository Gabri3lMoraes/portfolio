import { GraduationCap, Briefcase } from 'lucide-react';
import './about.css'
export default function About(){
    return(
    <div className="section">
         <div id="about">
                <h4 className='about-text'>// Sobre Min</h4>
                <div className="text">
                  <h2 className='topic1'>Estudante apaixonado por <br /> <span className='tecfull'>tecnologia</span></h2>
                  <p className='ajust-text'>Estou no 5º período de Sistemas de Informação e atuo como estagiário na área de tecnologia. Minha paixão é construir soluções que fazem a diferença — desde automações inteligentes com N8N até aplicações web e mobile completas. <br /> <br />
        
        Tenho experiência prática com containerização usando Docker, criação de workflows automatizados, desenvolvimento de websites responsivos e aplicativos mobile. Sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.</p>
                <p className='Trabalho'><GraduationCap color='#00eeff'/>  Sistemas de Informação — 5º Período </p> 
                <p className='Trabalho'><Briefcase color='#00eeff'/>  Estagiário em Tecnologia </p> 
                </div>
              </div>
              <div className="tecnolog">
                    
              </div>
    </div>
       
    )
}