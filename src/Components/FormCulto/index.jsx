import { useState } from "react"
import "./style.css"

function FormCulto (){

    const musics = [
        {
            value: 0,
            name: "Musica 1"
        },
        {
            value: 1,
            name: "Musica 2"
        },
        {
            value: 2,
            name: "Musica 3"
        },
        {
            value: 3,
            name: "Musica 4"
        },
    ]

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