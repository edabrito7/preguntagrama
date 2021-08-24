import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// config file
import { firebaseConfig } from './config'


!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()


export const singUp = async (login) => {
    const { email, password, ...additionalData } = login
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email,password)
        addUser(user,additionalData)
        return user
    } catch (error) {
        console.log(error)
    }
}

export const onAuthStateChanged = (onChange) => {
    return firebase.auth().onAuthStateChanged((user) => {
      onChange(user)
    })
  };

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithPopup(googleProvider)
}

const addUser = async (userAuth, additionalData) => {
    if(!userAuth) return 

    const userRef = db.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    const createdAt = new Date()

    if(!snapShot.exists) {
        const { email } = userAuth
        try {
            userRef.set({
                email,
                name: additionalData.name || '',
                lastName: additionalData.lastName || '',
                date: createdAt,
                corrects: 0,
                incorrects: 0
            })
        } catch (error) {
            console.log(error)
        }
    }

}