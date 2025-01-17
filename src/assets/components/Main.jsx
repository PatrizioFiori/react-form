const articoli = [
    "ciao",
    "ciao2",
    "ciao3"

]

import { useState } from "react"

const Main = () => {

    const [title, setTitle] = useState()

    const handlerSubmit = (event) => {
        event.preventDefault()
        setTitle([...articoli, title])
        console.log(articoli);

    }

    return (
        <div className="container my-5 border">
            <form action="#">
                <div className="inpit-group mb-3">
                    <input
                        className="form-controller mt-2 w-50 text-center"
                        placeholder="Inserire titolo articolo"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        type="text"
                    />
                    <button
                        className="mx-5 btn btn-outline-secondary"
                        type="submit"
                    >Aggiungi</button>
                </div>
            </form>
            <div>
                <h3>Lista articoli</h3>
                <ul>
                    {articoli.map((articolo, index) => {
                        return (
                            <li key={index} className="border w-75">{articolo}</li>
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