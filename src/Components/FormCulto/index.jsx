import { useState } from "react"
import "./style.css"
import { musics } from "../Home/Index"

function FormCulto (){

    const [getInput,setGetInput] = useState("")
    const [getMusicManha,setGetMusicManha] = useState([])
    const [getMusicNoite,setGetMusicNoite] = useState([])

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
        <div>
            <h2>Data</h2>
            <input type="text" placeholder="Insira a Data" onChange={e => setGetInput(e.target.value)}/>

            <h2>Manhã</h2>
            <select multiple name="maha" id="manha" onChange={selectMusicManha}>
                {musics.map(itens => (<option key={itens.value} value={itens.value} name={itens.name}>{itens.name}</option>))}
            </select>

            <h2>Noite</h2>
            <select multiple name="noite" id="noite" onChange={selectMusicNoite}>
                {musics.map(itens => (<option key={itens.value} value={itens.value} name={itens.name}>{itens.name}</option>))}
            </select>

            <section className="textArea">
                <h2>Culto Público</h2>
                <h2>Domingo - Dia {getInput}</h2>
                <h2>Manhã</h2>
                <ol>{getMusicManha.map((item,index) => (<li key={index}>{item}</li>))}</ol>
                <h2>Noite</h2>
                <ol>{getMusicNoite.map((item,index) => (<li key={index}>{item}</li>))}</ol>
            </section>
        </div>
    )
}

export default FormCulto