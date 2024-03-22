import React, { useRef } from "react";

export default function Referencias() {

  let refMenu = useRef(),
    refMenuBtn = useRef();

    const cambio=createRef()
    const funcionCambio=()=>{

    cambio.current.style.color='red'
    cambio.current.style.backgroundColor='yellow'
}




  const clicks = () => {

    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };



  return (
    <>
      <h2>Referencias</h2>
      <button id="cambio" ref={refMenuBtn} onClick={clicks}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="https://www.britishcouncil.org.mx/blog/participios-en-ingles">Sección 1</a>
        <br />
        <a href="https://www.poliglota.org/post/pasado-participio-en-ingles">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
      </nav>
    </>
  );
}