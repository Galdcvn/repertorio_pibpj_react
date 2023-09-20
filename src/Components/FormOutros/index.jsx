import { useState } from "react"
import { musics } from "../Home/Index"

function FormOutros() {

    const [getInputName,setGetInputName] = useState("")
    const [getInputDate,setGetInputDate] = useState("")
    const [getMusic,setGetMusic] = useState([])

    function selectMusic (e){
        const selectedValue = parseInt(e.target.value)
        const selectedMusicName = musics.find(music => music.value === selectedValue)?.name
        if(selectedMusicName){
            setGetMusic([...getMusic, selectedMusicName])
        }
    }

    return(
        <div>
            <h2>Nome do Evento</h2>
            <input type="text" placeholder="Insira o Nome" onChange={e => setGetInputName(e.target.value)}/>

            <h2>Data</h2>
            <input type="text" placeholder="Insira a Data" onChange={e => setGetInputDate(e.target.value)}/>

            <h2>Músicas</h2>
            <select multiple name="maha" id="manha" onChange={selectMusic}>
                {musics.map(itens => (<option key={itens.value} value={itens.value}>{itens.name}</option>))}
            </select>

            <section className="textArea">
                <h2>{getInputName}</h2>
                <h2>Dia {getInputDate}</h2>
                <h2>Músicas</h2>
                <ol>{getMusic.map((item,index) => (<li key={index}>{item}</li>))}</ol>                
            </section>
        </div>
    )
}

export default FormOutros