import { useState } from "react";
import { usePosition } from "../assets/hook/usePosition";
import logo from '../assets/image/ia_designer.jpeg'
import icon from '../assets/image/skull.png'
import './card.css'

export const Card = () => {
    const { movement } = usePosition()
    const [ show, setShow ] = useState<boolean>(false)

    return (
        <>
            <button onClick={()=>setShow(!show)}>show</button>
            <dialog open={false} id="card" style={{ ...movement }} >
                <figure>
                    <img className="bashs" alt="card image" src={logo} style={{ boxShadow: movement.boxShadow }}></img>
                    <figcaption>IA Signature</figcaption>
                </figure>
                <header style={{ boxShadow: movement.boxShadow }}>
                    <img alt="card type" src={icon}></img>
                    <p>Drazhar, o Suserano do Vazio</p>
                    <p>❤️80</p>
                    {/* <p>1/4</p> */}
                </header>
                <footer>
                    <fieldset style={{ boxShadow: movement.boxShadow }}>
                        <legend>Marionete Sombria</legend>
                        <span><p></p><p>20</p></span>
                        {/* <p>{JSON.stringify(movement.transform)}</p> */}
                        {/* <blockquote>
                            <p>O conjurador pode manipular pensamentos, criar ilusões ou até controlar as ações do alvo, deixando-o incapaz de distinguir entre realidade e sugestão.</p>
                        </blockquote> */}
                        <span>Permite ao conjurador dominar completamente a mente do alvo, controlando suas ações como se fossem fios invisíveis.</span>
                    </fieldset>
                    <fieldset style={{ boxShadow: movement.boxShadow }}>
                        <legend>Chama Abissal</legend>
                        <span><p>🔥⚡⚡</p><p>60</p></span>
                        {/* ☀⚔🏹🛡 */}
                        <span>As chamas dançam com uma fúria sombria, drenando energia vital dos inimigos enquanto deixam apenas cinzas frias no caminho.</span>
                    </fieldset>
                    <span><p>002/050 @ 2024</p><p>be344101-8faa-40fa-b056-d86c56c38b5c</p></span>
                </footer>
            </dialog>
        </>
    )
}