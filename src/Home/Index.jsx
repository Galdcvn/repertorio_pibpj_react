import { useState } from "react"
import Card from "../Card"
import "./style.css"

function Home() {

  const [appearItems,setAppearItems] = useState(false)
  const [disaappearItems,setDisappearItems] = useState(true)
  const [closeCulto,setCloseCulto] = useState(true)
  const [closeOutros,setCloseOutros] = useState(true)

  const openCardCulto = () => {
    setAppearItems(true)
    setDisappearItems(false)
    setCloseOutros(false)
  }
  const closeCardCulto = () => {
    setAppearItems(false)
    setDisappearItems(true)
    setCloseOutros(true)
  }
  const openCardOutros = () => {
    setAppearItems(true)
    setDisappearItems(false)
    setCloseCulto(false)
  }
  const closeCardOutros = () => {
    setAppearItems(false)
    setDisappearItems(true)
    setCloseCulto(true)
  }

  return (
    <div className="containerEventos">
      {closeCulto &&
      <section className="containerCulto">
        {appearItems && <button className="buttonClose" onClick={closeCardCulto}>X</button>}
        <Card name={"Culto Público"} description={"Cultos regulares de Domingo"}/>
        {disaappearItems && <button className="buttonOpen" onClick={openCardCulto}>Botão</button>}
      </section>}

      {closeOutros &&
      <section className="containerOutros">
      {appearItems && <button className="buttonClose" onClick={closeCardOutros}>X</button>}
        <Card name={"Outros"} description={"Outros eventos da Igreja"}/>
        {disaappearItems && <button className="buttonOpen" onClick={openCardOutros}>Botão</button>}
      </section>}
    </div>    
  )
}

export default Home
