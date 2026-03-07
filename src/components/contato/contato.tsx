import { useState } from 'react';
import './contato.css'
import { motion } from 'framer-motion';
import { Github, Mail, MapPin, Send, Linkedin } from 'lucide-react';






export default function Contato(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    
    const handlerenviar = () => {
        if(!nome || !mensagem){
            alert("Por favor, preencha pelo menos o nome e a mensagem");
            return
        }
        const texto = `Olá, Gabriel! Meu nome é ${nome} \n(${email}).\n\n ${mensagem}`;
        
        const textoFormatado = encodeURIComponent(texto);
        
        
        const Numero = "5581997713780"; 
        
        
        window.open(`https://wa.me/${Numero}?text=${textoFormatado}`, '_blank');
    }
    return(
        <motion.div initial={{ opacity: 0, y: 50 }}          
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6, ease: "easeOut" }} 
        viewport={{ 
          once: true,  
          amount: 0.2  
        }}>
        <div id='contato' className="container-contato">
            <div className="topo">
                <p className='text-contato'>// Contato</p>
                <h1>Vamos <span className='fullcontato'>conversar</span>?</h1>
            </div>
        <div className="containersection">
             <div className="f-contato">
                <p className='text2-contato'>Estou sempre aberto a novas oportunidades, projetos freelance ou apenas trocar uma ideia sobre tecnologia. Não hesite em entrar em contato!</p>
                <ul className="contats">
                    <li className='contato-lista'><span className='contato-icon'><Mail/></span> devgabriel03s@gmail.com</li>
                    <li onClick={()=>{window.open("https://github.com/Gabri3lMoraes")}} className='contato-lista'><span className='contato-icon'><Github/></span>    github.com/Gabri3lMoraes</li>
                    <li onClick={()=>{window.open("https://www.linkedin.com/in/paulo-gabriel-688437222/")}} className='contato-lista'><span className='contato-icon'><Linkedin/></span>linkedin.com/in/paulo-gabriel</li>
                    <li className='contato-lista'><span className='contato-icon'><MapPin/></span>Brasil / Olinda-PE</li>
                </ul>
            </div>
            <div className="f2-contato">
                <div className="nome">
                    <p className='paragrafo-contato'>Nome</p>
                <input value={nome} onChange={(e) => setNome(e.target.value)} className='inputs' type="text" placeholder="Seu nome" />
                </div>
                <div className="email">
                    <p className='paragrafo-contato'>Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id='email' className='inputs' type="text" placeholder="Seu@email.com" />
                </div>
                <div className="email">
                    <p className='paragrafo-contato'>Mensagem</p>
                <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
        id="mensagem"
        placeholder="Sua mensagem..."/>
                </div>
                <button onClick={handlerenviar} className='sendmensage'><Send/>  Enviar Mensagem</button>
            </div>
        </div>
           

        </div>
    </motion.div>
    )
}
