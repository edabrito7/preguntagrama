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

export const signIn = async (login) => {
    const { email, password } = login
    try {
        const { user } = await auth.signInWithEmailAndPassword(email,password)
        return user
    } catch (error) {
        console.log(error)
    }
}

export const logOut = async () => {
    try {
        const response = await auth.signOut()
        console.log(response)
        return response
    } catch(error) {
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
                incorrects: 0,
                record: 0
            })
        } catch (error) {
            console.log(error)
        }
    }

}

export const getQuestions = async () => {
    // questions api call
    const questionsRef =  db.collection('questions')
    const snapShot = await questionsRef.get()
    let questions = []
    snapShot.forEach((doc) => {
        questions.push(doc.data())
    })
    return questions
}

export const getCorrectAnswer = async (answerDoc) => {
    if(!answerDoc) return console.log('Debe ingresar una direccion de documento')
    const answerRef = db.collection('answers').doc(answerDoc)
    const doc = await answerRef.get()
    if (doc.exists) return doc.data()
    return console.log('Doc does not exist')
}