import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css'


export const FormCustomHook = () => {

    const [FormValue, handleInputChange] = useForm(
        {
            name:'',
            email:'',
            password:''
        }
        
    );

    const { name, email, password } = FormValue;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(FormValue)
    }

    return (
        <>
        
        <h1>FormCustomHook</h1>
        <hr/>

        <form onSubmit={handleSubmit}>
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

            

        </div>

        <div className="form-group">

            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Ingresa una contraseña"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
            />

        </div>

        <button type="submit" className="btn btn-primary"> Guardar </button>
        </form>
        </>
    )
}
