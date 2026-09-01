import error404 from './assets/images.jpeg'
import './Navegacao.css'
function Navegacao() {
    return (
        <div className="navegacao">
            <div className="navegacao_conteudo">
                <h1>Navegue por tópicos de interesse</h1>
                <h5>
                    Descubra conteúdos por categoria, posts em destaque e as escolhas do editor
                </h5>

                <button>Explorar categorias</button>
                <button>Assine a newsletter</button>
            </div>

            <img src={error404}/>
        </div>
    );
}

export default Navegacao;

