import { useEffect, useState } from "react"
import { useRouter } from "next/router"
// firebase
import { onAuthStateChanged } from 'firebase/client'

export function useUser () {
    const [user, setUser] = useState()
    const router = useRouter()
    useEffect(() => {
        onAuthStateChanged(setUser)
        console.log(user)
    },[])

    useEffect(() => {
        user === null && router.push('/')
        user && router.replace('/jugar')
    },[user])

    return user
}