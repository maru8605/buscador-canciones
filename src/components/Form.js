import {useState} from 'react'

const Form = ( {saveSearchLyrics} ) => {

    const [search, saveSearch] = useState({
        artista: '',
        cancion: ''
    })

    const [error, setError] = useState(false)

    const {artista, cancion} = search;

    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

   const searchInfo = e => {
       e.preventDefault();

       if(artista.trim() === '' || cancion.trim() === ''){
           setError(true)
           return
       }
       setError(false)
    // ok. pasa a app
    saveSearchLyrics(search)
   }

    return (
        <div className='form-container'>
            {error ? <p className='error'>Todos los campos son obligatorios</p> : null}
            <div className='container'>
                <div className='rowS'>
                    <form
                        onSubmit={searchInfo}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'>
                        <fieldset>
                            <legend className='text-center'>Buscador de letras de canciones</legend>
                       
                        
                            <div className='row'>
                                <div className='col md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input
                                            type='text'
                                            placeholder='Nombre artista'
                                            name='artista'
                                            className='form-control'
                                            value={artista}
                                            onChange={updateState}
                                        />
                                    </div>
                                    
                                </div>
                                <div className='col md-6'>
                                    <div className='form-group'>
                                        <label>Canción</label>
                                        <input
                                            type='text'
                                            placeholder='Nombre canción'
                                            name='cancion'
                                            className='form-control'
                                            value={cancion}
                                            onChange={updateState}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button type='submit' className='btn float-right btn-form'>Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
