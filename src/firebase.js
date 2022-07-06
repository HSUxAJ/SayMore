import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const config = {
  apiKey: ,
  authDomain: ,
  databaseURL: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId:,
  appId: ,
  measurementId: 
};

firebase.initializeApp(config)

const store = firebase.firestore()
const db = firebase.database()
const provider = new firebase.auth.GoogleAuthProvider();

export const googleLogin = () => {
  firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            let token = result.credential
            let user = result.user
            console.log(user)
          })
          .catch((err) => {
            console.log(err + 'said by google login')
          })
}

export const getUser = () => {
  return firebase.auth().currentUser.displayName
}

export const diaryRef = db.ref('diary')

export const addDiary = (title, content, num) => {
  const key = diaryRef.push().key
  diaryRef.child(key).set({
    title: title,
    content: content,
    roleIdx: num
  })
}

export const queryFirestore = async (idx) => {
  const querySnapshot = await store.collection('PopularJourney').get()
  const documents = querySnapshot.docs.map(doc => doc.data())
  console.log(documents )
  return documents[idx]
}

