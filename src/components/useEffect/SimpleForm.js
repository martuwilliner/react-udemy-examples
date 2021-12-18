import React, {useEffect, useState} from 'react'
import './effect.css'
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            name:'',
            email:''
        }
    );

    const { name, email } = formState;

    useEffect( () => {
        console.log('Puto el que lee')
    }, [])


    useEffect( () => {
        console.log('el formState cambio')
    }, [formState])

    useEffect( () => {
        console.log('el email cambio')
    }, [email])


    const handleInputChange = ({ target}) => {
       
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })

    }

    return (
        <>
        
        <h1>useEffect</h1>
        <hr/>

        <div className="form-group">

            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autocomplete="off"
                value={name}
                onChange={handleInputChange}
            />

        </div>


        <div className="form-group">

            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@email.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />

            {(name === 'che') && <Message/>}

        </div>

        </>
    )
}
