import './projetos.css'
import { ExternalLink, Workflow, Smartphone, Globe, Phone } from 'lucide-react';
export default function Projetos() {
    return (
        <div className="containe">
            <h3 className="about-project">// Projetos</h3>
            <h1>O que eu tenho <span className="projefull">construido</span></h1>
            <div className="cardcorpo">
                <div className="cardproject">
                <div className="nav">
                    <div className="conjuntos-tec">
                        <a href=""><Workflow className='icon' color='#00d2ff'  /></a>
                        <p className='poptitulo'>N8N</p>
                    </div>
                    <a href=""><ExternalLink className='icon' /></a>
                </div>
                <p className='text-card'>Automação de Leads com N8N</p>
                <p className='para-card'>Workflow automatizado para captura, qualificação e distribuição de leads via WhatsApp e email.</p>
                <ul className="tecpop">
                    <li className='tecnopop'>N8N</li>
                    <li className='tecnopop'>Webhook</li>
                    <li className='tecnopop'>API</li>
                    <li className='tecnopop'>Telegram</li>
                    <li className='tecnopop'>Docker</li>
                </ul>
            </div>










                <div className="cardproject" onClick={()=> window.open('https://github.com/Gabri3lMoraes/AnotaFeira')}>
                <div className="nav">
                    <div className="conjuntos-tec">
                        <a href=""><Smartphone className='icon' color='#00d2ff'  /></a>
                        <p className='poptitulo'>Mobile</p>
                    </div>
                    <a href=""><ExternalLink className='icon' /></a>
                </div>
                <p className='text-card'>AnotaFeira.IA</p>
                <p className='para-card'>Aplicativo mobile focado em otimizar e organizar anotações e listas de compras durante feiras.</p>
                <ul className="tecpop">
                    <li className='tecnopop'>React Native</li>
                    <li className='tecnopop'>Expo</li>
                </ul>
            </div>










                <div className="cardproject" onClick={() => window.open('https://github.com/Gabri3lMoraes/SystemNet')}>
                <div className="nav">
                    <div className="conjuntos-tec">
                        <a href=""><Globe className='icon' color='#00d2ff'  /></a>
                        <p className='poptitulo'>Website</p>
                    </div>
                    <a href=""><ExternalLink className='icon' /></a>
                </div>
                <p className='text-card'>Website SystemNet</p>
                <p className='para-card'>Plataforma web institucional desenvolvida para a empresa SystemNet, com design responsivo e moderno.</p>
                <ul className="tecpop">
                    <li className='tecnopop'>React</li>
                    <li className='tecnopop'>javascript</li>
                    <li className='tecnopop'>Boostrap</li>
                    
                </ul>
            </div>









                <div className="cardproject" onClick={() => window.open('https://github.com/Gabri3lMoraes/Oxe_Comprei-')}>
                <div className="nav">
                    <div className="conjuntos-tec">
                        <a href=""><Smartphone className='icon' color='#00d2ff'  /></a>
                        <p className='poptitulo'>Startup</p>
                    </div>
                    <a href="https://github.com/Gabri3lMoraes/Oxe_Comprei-"><ExternalLink className='icon' /></a>
                </div>
                <p className='text-card'>Oxê Comprei</p>
                <p className='para-card'>Aplicativo de e-commerce que utiliza geolocalização para conectar usuários aos comércios locais mais próximos.</p>
                <ul className="tecpop">
                    <li className='tecnopop'>React Native</li>
                    <li className='tecnopop'>Geolocalização</li>
                    <li className='tecnopop'>APIs</li>
                    <li className='tecnopop'>Typescript</li>
                </ul>
            </div>









                <div className="cardproject">
                <div className="nav">
                    <div className="conjuntos-tec">
                        <a href=""><Workflow className='icon' color='#00d2ff'  /></a>
                        <p className='poptitulo'>N8N</p>
                    </div>
                    <a href=""><ExternalLink className='icon' /></a>
                </div>
                <p className='text-card'>Agente Financeiro IA com N8N</p>
                <p className='para-card'>Automação que recebe áudios via Telegram, transcreve, organiza gastos e os salva automaticamente em uma planilha.</p>
                <ul className="tecpop">
                    <li className='tecnopop'>N8N</li>
                    <li className='tecnopop'>Webhook</li>
                    <li className='tecnopop'>API</li>
                    <li className='tecnopop'>Telegram</li>
                    <li className='tecnopop'>Google sheet</li>
                    <li className='tecnopop'>PostgreSQL</li>
                    <li className='tecnopop'>Docker</li>
                </ul>
            </div>











            
                <div className="cardproject" onClick={() => window.open('https://github.com/Gabri3lMoraes/CurriculoIA')}>
                <div className="nav">
                    <div className="conjuntos-tec">
                        <a href=""><Workflow className='icon' color='#00d2ff'  /></a>
                        <p className='poptitulo'>Mobile</p>
                    </div>
                    <a href=""><ExternalLink className='icon' /></a>
                </div>
                <p className='text-card'>CurriculoIA</p>
                <p className='para-card'>Aplicativo que utiliza Inteligência Artificial para otimizar currículos e ajudar candidatos a passarem por filtros de recrutamento (ATS).</p>
                <ul className="tecpop">
                    <li className='tecnopop'>React Native</li>
                    <li className='tecnopop'>Typescript</li>
                    <li className='tecnopop'>APIs</li>
                    <li className='tecnopop'>IA</li>
                </ul>
            </div>
                <div className="cardproject" >
                <div className="nav">
                    <div className="conjuntos-tec">
                        <a href=""><Workflow className='icon' color='#00d2ff'  /></a>
                        <p className='poptitulo'>Mobile</p>
                    </div>
                    <a href=""><ExternalLink className='icon' /></a>
                </div>
                <p className='text-card'>ERP - Caixa de Pudim</p>
                <p className='para-card'>Aplicativo focado no controle de estoque e gestão financeira de uma loja especializada em pudins.</p>
                <ul className="tecpop">
                    <li className='tecnopop'>React Native</li>
                    <li className='tecnopop'>Typescript</li>
                    <li className='tecnopop'>APIs</li>
                    <li className='tecnopop'>IA</li>
                </ul>
            </div>
                <div className="cardproject" onClick={()=> window.open('https://github.com/Gabri3lMoraes/AppUninassau')}>
                <div className="nav">
                    <div className="conjuntos-tec">
                        <a href=""><Workflow className='icon' color='#00d2ff'  /></a>
                        <p className='poptitulo'>Mobile</p>
                    </div>
                    <a href=""><ExternalLink className='icon' /></a>
                </div>
                <p className='text-card'>appUninassau</p>
                <p className='para-card'>Redesign e desenvolvimento do portal da faculdade Uninassau em versão mobile, focado em otimizar a usabilidade e a experiência do aluno.</p>
                <ul className="tecpop">
                    <li className='tecnopop'>React Native</li>
                    <li className='tecnopop'>Typescript</li>
                    <li className='tecnopop'>APIs</li>
                    <li className='tecnopop'>Expo</li>
                </ul>
            </div>
            
            </div>
            
        </div>
    )
}