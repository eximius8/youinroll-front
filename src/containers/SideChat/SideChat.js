
import React, { useRef, useState, useEffect } from 'react';
import "./SideChat.scss";
import { Button, Form} from 'semantic-ui-react'

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDuozD3WtKHl4YxXnqFNhKyAmnHkFvJphM",
    authDomain: "youinrol.firebaseapp.com",
    projectId: "youinrol",
    storageBucket: "youinrol.appspot.com",
    messagingSenderId: "477697040270",
    appId: "1:477697040270:web:f944c28e376a88777d0edf"
  })

const auth = firebase.auth();
const firestore = firebase.firestore();


function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
  } 

  return (
    <div className="signinbutton">
      <Button onClick={signInWithGoogle}>Войти с google</Button>
    </div>    
  )
}

function SignOut() {
  return auth.currentUser && (
    <Button  onClick={() => auth.signOut()}>Выйти</Button>
  )
}

function ChatRoom() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);  
  const maxmessages = isMobile ? 5 : 50;
  const dummy = useRef();  
  const [formValue, setFormValue] = useState('');
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', "desc").limit(maxmessages);
  const [messages] = useCollectionData(query, { idField: 'id' });

  useEffect(() => {
    setIsMobile(window.innerWidth <= 760)    
  },[setIsMobile])




  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, displayName } = auth.currentUser;
    

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName    
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
  <>
    <main>
      {messages && messages.slice(0).reverse().map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>

    <Form 
      onSubmit={sendMessage}
      id='chatform'
    >      
      <Form.Input
        value={formValue} 
        onChange={(e) => setFormValue(e.target.value)} 
        placeholder="Напишите что-нибудь в чат"            
      />          
      <Form.Button 
        content='Чат' 
        disabled={!formValue} 
        primary
        id="chatbutton"
      />
        
    </Form>
  </>)
}

function ChatMessage(props) {
  const { text, uid, displayName } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
     
      <p><strong>{displayName}: </strong>{text}</p>
    </div>
  </>)
}


export default function SideChat() {
  const [user] = useAuthState(auth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);  

  return (
    <>    
      {!isMobile && <h5 id="chatheader">Чат трансляции</h5>}
      
        {user ? <ChatRoom /> : <SignIn /> }
     
    </>
  )
}
