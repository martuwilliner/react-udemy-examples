import React , { useState } from 'react'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'

export const UseRefCasoReal = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Uso real del USE REF</h1>
            <hr/>

         {show && <MultipleCustomHooks/>}

         <button
         className='btn btn-primary mt-5'
         onClick={() => {
             setShow(!show);
         }}
         >
             Show/Hide
         </button>
        </div>
    )
}
