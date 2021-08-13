import { useState } from 'react'


export function useText() {
    const [value, setValue] = useState()

    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }

    return {
        value,
        handleChange
    }
}