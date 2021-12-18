import React, {useRef} from 'react'
import '../useEffect/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    const handleClick = () => {

        inputRef.current.select(); // es lo mismo que decir la expresión de abajo 
        /* document.querySelector('input').select(); */

    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref={inputRef}
                className="form-control"
                placeholder='Su nombre'
            />

            <button
            className="btn btn-outline-primary mt-5"
            onClick={handleClick}
            >
                Focus
            </button>

        </div>
    )
}
