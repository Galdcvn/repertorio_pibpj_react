import { useState } from "react"
import { musics } from "../Home/Index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus, faSquareMinus} from "@fortawesome/free-solid-svg-icons"
import "./style.css"

function FormCulto (){
    
    const [getInput,setGetInput] = useState("")

    const [openSelectManha,setOpenSelectManha] = useState(false)
    const [openSelectNoite,setOpenSelectNoite] = useState(false)
    const [showButtonManha,setShowButtonManha] = useState(true)
    const [showButtonNoite,setShowButtonNoite] = useState(true)

    const [getMusicManha,setGetMusicManha] = useState([])
    const [getMusicNoite,setGetMusicNoite] = useState([])
    

    function getInputDate(e){
        setGetInput(e.target.value.split('-').reverse().join('/'))
    }

    function openSelectAndTextManha(){
        setOpenSelectManha(true)
        setShowButtonManha(false)
    }
    function closeSelectAndTextManha(){
        setOpenSelectManha(false)
        setShowButtonManha(true)
        setGetMusicManha([])
    }

    function openSelectAndTextNoite(){
        setOpenSelectNoite(true)
        setShowButtonNoite(false)
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
            <div className="controlsContainer">
                
                <h2>Data</h2>
                <input type="date" placeholder="Insira a Data" onChange={getInputDate}/>
                
                <div className="controlsManha">
                    <h2>Músicas da Manhã</h2>
                    {showButtonManha && (<button onClick={openSelectAndTextManha} className="openButton">
                    <FontAwesomeIcon icon={faSquarePlus} />
                    </button>)}
                    {openSelectManha && (<button onClick={closeSelectAndTextManha} className="closeButton">
                    <FontAwesomeIcon icon={faSquareMinus} />
                    </button>)}
                </div>

                {openSelectManha && (<section className="sectionManha">
                    {musics.map(itens => (
                    <div key={itens.value} name={itens.name}>
                        {itens.name} <button className="buttonDivManha" value={itens.value} onClick={selectMusicManha}>Inserir</button>
                    </div>))}
                </section>)}


                <div className="controlsNoite">
                    <h2>Músicas da Noite</h2>
                    {showButtonNoite && (<button onClick={openSelectAndTextNoite} className="openButton">
                    <FontAwesomeIcon icon={faSquarePlus} />
                    </button>)}
                    {openSelectNoite && (<button onClick={closeSelectAndTextNoite} className="closeButton">
                    <FontAwesomeIcon icon={faSquareMinus} />
                    </button>)}
                </div>

                {openSelectNoite && (<section className="sectionNoite">
                    {musics.map(itens => (
                    <div key={itens.value} name={itens.name}>
                        {itens.name} <button className="buttonDivNoite" value={itens.value} onClick={selectMusicNoite}>Inserir</button>
                    </div>))}
                </section>)}

            </div>

            <section className="textArea">
                <h2>Culto Público</h2>
                <h2>Domingo - Dia {getInput}</h2>
                <br />
                {openSelectManha && (<h2>Manhã</h2>)}
                {openSelectManha && (<ol>{getMusicManha.map((item,index) => (<li key={index}>- {item}</li>))}</ol>)}
                {openSelectManha && (<br/>)}
                {openSelectNoite && (<h2>Noite</h2>)}
                {openSelectNoite && (<ol>{getMusicNoite.map((item,index) => (<li key={index}>- {item}</li>))}</ol>)}
            </section>
        </div>
    )
}

export default FormCulto