import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRectangleXmark, faSquareCaretDown } from "@fortawesome/free-solid-svg-icons"
import FormCulto from "../FormCulto"
import FormOutros from "../FormOutros"
import Card from "../Card"
import "./style.css"

export const musics = [
  {
      value: 0,
      name: "A Ele a Glória (Diante do Trono)"
  },
  {
      value: 1,
      name: "Aclame ao Senhor (Diante do Trono)"
  },
  {
      value: 2,
      name: "Agnus Dei (Aline Barros)"
  },
  {
      value: 3,
      name: "Aguardo o Dia (ADAI Music)"
  },
  {
    value: 4,
    name: "Alegrei-me (IBNJ)"
  },
  {
    value: 5,
    name: "Alfa e Ômega (Marine Friesen)"
  },
  {
    value: 6,
    name: "Alto Preço (Asaph Borba)"
  },
  {
    value: 7,
    name: "Ao Erguemos as Mãos (Aline Barros)"
  },
  {
    value: 8,
    name: "Bem Aventurado (Aline Barros)"
  },
  {
    value: 9,
    name: "Bondade de Deus (Isaías Saad)"
  },
  {
    value: 10,
    name: "Calmo, Sereno e Tranquilo (Terno e Saia)"
  },
  {
    value: 11,
    name: "Canção do Apocalipse (Diante do Trono)"
  },
  {
    value: 12,
    name: "Cantai ao Senhor (Adhemar de Campos)"
  },
  {
    value: 13,
    name: "Cantarei Teu Amor pra Sempre (IBAB)"
  },
  {
    value: 14,
    name: "Castelo Forte (PIBPJ/HeartSong)"
  },
  {
    value: 15,
    name: "Céu, Lindo Céu (Grupo Elo)"
  },
  {
    value: 16,
    name: "Colossenses  1 (Projeto Sola)"
  },
  {
    value: 17,
    name: "Consagração (Aline Barros)"
  },
  {
    value: 18,
    name: "Coração Igual ao Teu (Diante do Trono)"
  },
  {
    value: 19,
    name: "Corpo e Família (Daniel Souza)"
  },
  {
    value: 20,
    name: "Cria em Mim ó Deus (Comunidade de Nilópolis)"
  },
  {
    value: 21,
    name: "Deus Chama Todos os Povos (Comunidade Vila da Penha)"
  },
  {
    value: 22,
    name: "Deus Supremo És (Corinhos Evangélicos)"
  },
  {
    value: 23,
    name: "É o Teu Povo (Ipalpha)"
  },
  {
    value: 24,
    name: "Ele é Exaltado (Adhemar de Campos)"
  },
  {
    value: 25,
    name: "Em Espírito, Em Verdade (Ministério Koinonya de Louvor)"
  },
  {
    value: 26,
    name: "Entrega (Heloisa Rosa)"
  },
  {
    value: 27,
    name: "Grande é o Senhor (Adhemar de Campos)"
  },
  {
    value: 28,
    name: "Infinitamente Mais (Asaph Borba)"
  },
  {
    value: 29,
    name: "Isaías 53 (Projeto Sola)"
  },
  {
    value: 30,
    name: "Jesus em Tua Presença (Morada)"
  },
  {
    value: 31,
    name: "Jesus te Amamos (Paulo César Baruk)"
  },
  {
    value: 32,
    name: "Leva-me Além (Toque no Altar)"
  },
  {
    value: 33,
    name: "Maior é Jesus (Comunidade da Zona Sul)"
  },
  {
    value: 34,
    name: "Majestoso (Paulo César Baruk)"
  },
  {
    value: 35,
    name: "Maranata (Avivah)"
  },
  {
    value: 36,
    name: "Maravilhoso (Ministério Koinonya de Louvor)"
  },
  {
    value: 37,
    name: "Me Derramar (Vineyard)"
  },
  {
    value: 38,
    name: "Nosso Deus é Soberano (Comunidade Vila da Penha)"
  },
  {
    value: 39,
    name: "Nosso Salvador (Marcus Witt)"
  },
  {
    value: 40,
    name: "O Nome de Jesus (Adhemar de Campos)"
  },
  {
    value: 41,
    name: "Ó Quão Lindo Esse Nome É (Kemuel)"
  },
  {
    value: 42,
    name: "O Rei da Glória, o Rei dos Reis (IB Morumbi)"
  },
  {
    value: 43,
    name: "Perdão e Graça (Vineyard)"
  },
  {
    value: 44,
    name: "Poder Pra Salvar (Aline Barros)"
  },
  {
    value: 45,
    name: "Quão Grande é o Meu Deus (Soraya Moraes)"
  },
  {
    value: 46,
    name: "Quebrantado (Vineyard)"
  },
  {
    value: 47,
    name: "Quero Louvar-te (Paulo César Baruk)"
  },
  {
    value: 48,
    name: "Rei das Nações (Vencedores por Cristo)"
  },
  {
    value: 49,
    name: "Rei do Meu Coração (Paulo César Baruk)"
  },
  {
    value: 50,
    name: "Reina Hoje (Marina de Oliveira)"
  },
  {
    value: 51,
    name: "Reinas (Purples)"
  },
  {
    value: 52,
    name: "Rocha Fiel (IB Nova Jerusalém)"
  },
  {
    value: 53,
    name: "Salmo 23 (Cláudio Claro)"
  },
  {
    value: 54,
    name: "Santo (Aline Barros)"
  },
  {
    value: 55,
    name: "Santo, Santo, Santo (Renascer Praise)"
  },
  {
    value: 56,
    name: "Segurança (CC 375)"
  },
  {
    value: 57,
    name: "Seja Engrandecido (Guilherme Kerr)"
  },
  {
    value: 58,
    name: "Ser Conhecido de Deus (Renascer Praise)"
  },
  {
    value: 59,
    name: "Só em Jesus (Shane & Shane)"
  },
  {
    value: 60,
    name: "Sonda-me (Aline Barros)"
  },
  {
    value: 61,
    name: "Te Adorar é o Meu Prazer (Aline Barros)"
  },
  {
    value: 62,
    name: "Te Louvarei (Toque no Altar)"
  },
  {
    value: 63,
    name: "Tremenda Graça (IBAB Celebração)"
  },
  {
    value: 64,
    name: "Tributo a Yehowah (Paulo César Baruk)"
  },
  {
    value: 65,
    name: "Tu és Santo (Kathleen Jungles)"
  },
  {
    value: 66,
    name: "Tu es Soberano (Eli Soares)"
  },
  {
    value: 67,
    name: "Vem, Esta é a Hora (Vineyard)"
  },
  {
    value: 68,
    name: "Venha o Teu Reino (Davi Sacer)"
  },
  {
    value: 69,
    name: "Vim para Adorar-te (Diante do Trono)"
  },
]

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
    <>
    <header>
      <img src="https://i.imgur.com/aupdt0W.png" alt="Logo PIBPJ" />
      <h1>Repetório Grupo de Louvor</h1>
    </header>

    <div className="containerEventos">
      
      {closeCulto &&
      <section className="containerCulto">
        
        {appearItems && <button className="buttonClose" onClick={closeCardCulto}>
          <FontAwesomeIcon icon={faRectangleXmark}/>
        </button>}
        
        <Card name={"Culto Público"}description={"Cultos regulares de Domingo."}/>
        
        <div>
          {disaappearItems && <button className="buttonOpen" onClick={openCardCulto}>
            <FontAwesomeIcon icon={faSquareCaretDown}/>
          </button>}        
        </div>
        
        {appearItems && <FormCulto/>}
      </section>}

      {closeOutros &&
      <section className="containerOutros">
        
        {appearItems && 
        <button className="buttonClose" onClick={closeCardOutros}>
          <FontAwesomeIcon icon={faRectangleXmark}/>
        </button>}
        
        <Card name={"Outros"} description={"Outros eventos da Igreja."}/>
        
        <div>
          {disaappearItems && <button className="buttonOpen" onClick={openCardOutros}>
            <FontAwesomeIcon icon={faSquareCaretDown}/>
          </button>}
        </div>

        {appearItems && <FormOutros/>}
        
      </section>}

    </div>
    </>   
  )
}

export default Home
