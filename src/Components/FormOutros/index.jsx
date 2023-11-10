import { useState } from "react"
import { musics } from "../Home/Index"
import "./style.css"

function FormOutros() {

    const [getInputName,setGetInputName] = useState("")
    const [getInputDate,setGetInputDate] = useState("")
    const [getMusic,setGetMusic] = useState([])
    const [showMusics,setShowMusics] = useState(false)
    const [showText, setShowText] = useState(false)

    function getImputName(e){
        setGetInputName(e.target.value)
        setShowText(true)
    }
    function getImputDate(e){
        setGetInputDate(e.target.value.split('-').reverse().join('/'))
    }

    function selectMusic (e){
        const selectedValue = parseInt(e.target.value)
        const selectedMusicName = musics.find(music => music.value === selectedValue)?.name
        if(selectedMusicName){
            setGetMusic([...getMusic, selectedMusicName])
        }
        setShowMusics(true)
    }    

    return(
        <div className="formOutros">
            <div className="controlsContainer">
                
                <h2>Nome do Evento</h2>
                <input type="text" className="inputName" placeholder="Insira o Nome" onChange={getImputName}/>
                
                <h2>Data</h2>
                <input type="date" className="inputDate" placeholder="Insira a Data" onChange={getImputDate}/>
               
                <h2>Músicas</h2>
                <section className="sectionOutros">
                    {musics.map(itens => (
                    <div key={itens.value} value={itens.value}>
                        {itens.name} <button className="buttonDivOutros" value={itens.value} onClick={selectMusic}>Inserir</button>
                    </div>))}
                </section>

            </div>

            <section className="textArea">
                {showText && <h2>{getInputName}</h2>}
                {showText && <h2>Dia {getInputDate}</h2>}
                <br />
                {showMusics && (<h2>Músicas</h2>)}
                {showMusics &&  (<ol>{getMusic.map((item,index) => (<li key={index}>- {item}</li>))}</ol> )}               
            </section>
        </div>
    )
}

export default FormOutros