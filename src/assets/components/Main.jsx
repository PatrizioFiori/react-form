const articoli = [
]
import { useState } from "react"


const Main = () => {

    const [title, setTitle] = useState(articoli)
    const [newTitle, setNewTitle] = useState("")

    const handlerSubmit = (event) => {
        event.preventDefault()
        const newTitleMaiuscolo = newTitle.charAt(0).toUpperCase() + newTitle.slice(1)
        setTitle([newTitleMaiuscolo, ...title])

    }
    return (
        <div className="container my-5 border">
            <form action="#" onSubmit={handlerSubmit}>
                <div className="inpit-group mb-3">
                    <input
                        className="form-controller mt-2 w-50 text-center"
                        placeholder="Inserire titolo articolo"
                        value={newTitle}
                        onChange={(event) => setNewTitle(event.target.value)}
                        type="text"
                    />
                    <button
                        className="mx-5 btn btn-outline-secondary"
                        type="submit"
                        onClick={handlerSubmit}
                    >Add
                    </button>
                </div>
            </form>
            <div>

                <h3>Lista articoli</h3>
                <ul>
                    {title.map((articolo, index) => {
                        return (
                            <li key={index} className="w-75 py-3"><h4>{articolo} </h4></li>
                        )
                    })}
                </ul>
            </div>
        </div>


    )
}

export default Main



// Devo aver:
// - un form da compilare
// - un btn che aggiunga quanto scritto nella barra del form
// - un btn che tolga
// - Aggiungere ulteriori campi al form:
// --- checkbox che definiscono se l'articolo è: draft o pubblicato
// --- text box per aggiungere testo all'articolo, autore ecc