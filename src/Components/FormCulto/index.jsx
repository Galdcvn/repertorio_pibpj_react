import { useState } from "react"
import { musics } from "../Home/Index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons"
import "./style.css"

function FormCulto (){
    
    const [getInput,setGetInput] = useState("")

    const [openSelectManha,setOpenSelectManha] = useState(false)
    const [openSelectNoite,setOpenSelectNoite] = useState(false)
    const [showButtonManha,setShowButtonManha] = useState(true)
    const [showButtonNoite,setShowButtonNoite] = useState(true)
    const [showInitialText,setShowInitialText] = useState(false)

    const [getMusicManha,setGetMusicManha] = useState([])
    const [getMusicNoite,setGetMusicNoite] = useState([])
    

    function getInputAndShowText(e){
        setGetInput(e.target.value)
        setShowInitialText(true)
    }

    function openSelectAndTextManha(){
        setOpenSelectManha(true)
        setShowButtonManha(false)
        setShowInitialText(true)
    }
    function closeSelectAndTextManha(){
        setOpenSelectManha(false)
        setShowButtonManha(true)
        setGetMusicManha([])
    }

    function openSelectAndTextNoite(){
        setOpenSelectNoite(true)
        setShowButtonNoite(false)
        setShowInitialText(true)
    }
    function closeSelectAndTextNoite(){
        setOpenSelectNoite(false)
        setShowButtonNoite(true)
        setGetMusicNoite([])
    }

    function selectMusicManha(e){
        const selectedValue = parseInt(e.target.value)
        const selectedMusicName = musics.find(music => music.value === selectedValue)?.name
        if(selectedMusicName){
            setGetMusicManha([...getMusicManha, selectedMusicName])
        }
    }
    function selectMusicNoite(e){
        const selectedValue = parseInt(e.target.value)
        const selectedMusicName = musics.find(music => music.value === selectedValue)?.name
        if(selectedMusicName){
            setGetMusicNoite([...getMusicNoite, selectedMusicName])
        }
    } 
    
    return(
        <div className="formCulto">
            <h2>Data</h2>
            <input type="text" placeholder="Insira a Data" onChange={getInputAndShowText}/>

            <div className="controlsManha">
                <h2>Músicas da Manhã</h2>
                {showButtonManha && (<button onClick={openSelectAndTextManha} className="openButton">
                <FontAwesomeIcon icon={faSquarePlus} />
                </button>)}
                {openSelectManha && (<button onClick={closeSelectAndTextManha} className="closeButton">
                <FontAwesomeIcon icon={faSquareMinus} />
                </button>)}
            </div>
            {openSelectManha && (<select multiple name="maha" className="selectManha" onChange={selectMusicManha}>
                {musics.map(itens => (<option key={itens.value} value={itens.value} name={itens.name}>{itens.name}</option>))}
            </select>)}

            <div className="controlsNoite">
                <h2>Músicas da Noite</h2>
                {showButtonNoite && (<button onClick={openSelectAndTextNoite} className="openButton">
                <FontAwesomeIcon icon={faSquarePlus} />
                </button>)}
                {openSelectNoite && (<button onClick={closeSelectAndTextNoite} className="closeButton">
                <FontAwesomeIcon icon={faSquareMinus} />
                </button>)}
            </div>
            {openSelectNoite && (<select multiple name="noite" className="selectNoite" onChange={selectMusicNoite}>
                {musics.map(itens => (<option key={itens.value} value={itens.value} name={itens.name}>{itens.name}</option>))}
            </select>)}

            {showInitialText && (<section className="textArea">
                <h2>Culto Público</h2>
                <h2>Domingo - Dia {getInput}</h2>
                <br />
                {openSelectManha && (<h2>Manhã</h2>)}
                {openSelectManha && (<ol>{getMusicManha.map((item,index) => (<li key={index}>- {item}</li>))}</ol>)}
                {openSelectManha && (<br/>)}
                {openSelectNoite && (<h2>Noite</h2>)}
                {openSelectNoite && (<ol>{getMusicNoite.map((item,index) => (<li key={index}>- {item}</li>))}</ol>)}
            </section>)}
        </div>
    )
}

export default FormCulto