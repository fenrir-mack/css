import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./Header.tsx";
import Navegacao from "./Navegacao.tsx";
import Categorias from "./Categorias.tsx";
import Posts from "./Posts.tsx";
import Footer from "./Footer.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <>
          <Header/>
          <Navegacao/>
          <Categorias/>
          <Posts/>
          <Footer/>
      </>
  </StrictMode>,
)
