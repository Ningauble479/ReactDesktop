import { useEffect, useState } from 'react'
import './Notes.css'

export const Notes = () => {
    const [words, setWords] = useState(()=>{
        let words = localStorage.getItem("NotesAppWords")
        if(!words){return ""}
        return words
    })

    useEffect(()=>{
        localStorage.setItem("NotesAppWords", words)
    },[words])

    return (
        <div className="Notes">
            <textarea 
                defaultValue={words}
                className="NotesInput"
                onChange={(e)=>setWords(e.target.value)}
            />
        </div>
    )
}