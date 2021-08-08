import React from 'react'

const Form = () => {
    return (
        <div className='form-container'>
            <div className='container'>
                <div className='rowS'>
                    <form className='col card text-white bg-transparent mb-5 pt-5 pb-2'>
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
