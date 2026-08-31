import  './Header.css'
function Header(){
    return (
        <header className="header">
            <a href={"#"} className="header_pagina">HABIT</a>
            <a href={"#"} className="header_pagina">Inicio</a>
            <a href={"#"} className="header_pagina">Paginas</a>
            <a href={"#"} className="header_pagina">Destaques</a>
            <a href={"#"} className="header_pagina">assinar</a>
            <a href={"#"} className="header_pagina">admin</a>
            <div id="header_espaco"></div>
            <input className="header_input"/>
            <button className="header_botao">Buscar</button>
            <button className="header_botao">Entrar</button>
        </header>
    );
}

export default Header
