import React, {useState} from 'react'


export const useForm = (initialState = {}) => {
    
    const [FormValue, setFormValue] = useState(initialState);

    const handleInputChange = ({ target }) => {
       
        setFormValue({
            ...FormValue,
            [ target.name ]: target.value
        })

    }


    return [ FormValue, handleInputChange ]
}
