import { useEffect, useState } from "react"
// firebase
import {onAuthStateChanged} from 'firebase/client'

export function useUser () {
    const [user, setUser] = useState()
    useEffect(() => {
        onAuthStateChanged(setUser)
    },[])
}