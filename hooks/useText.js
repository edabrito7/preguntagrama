import { useState } from 'react'


export function useText() {
    const [value, setValue] = useState({})

    const handleChange = (event) => {
        const { target } = event
        setValue({
            ...value,
            [target.name]: target.value
        })
    }

    return {
        value,
        handleChange
    }
}