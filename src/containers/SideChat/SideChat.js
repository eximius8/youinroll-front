
import React, { useRef, useState } from 'react';
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
    auth.signInWithPopup(provider);
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
  const dummy = useRef();
  
  const [formValue, setFormValue] = useState('');
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', "desc").limit(50);

  const [messages] = useCollectionData(query, { idField: 'id' });




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

  return (
    <>    
      <h5 id="chatheader">Чат трансляции</h5>
      
        {user ? <ChatRoom /> : <SignIn /> }
     
    </>
  )
}

/* 
export default function SideChat() {

  const [typedComment, setTypedComment] = useState("");
  const [comments, setComments] = useState([
    {
      ava: 'https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130',
      authorname: "Никита Вадимович",
      commenttext: "Пишем в чат",
      timeadded: 'August 19, 2020 23:15:30 GMT+00:00',
    }
  ])
  const [user] = useAuthState(auth);
  
    
  
    function addComment(){
      
      const currentDate = new Date();
      const addedComment = {
        ava: 'https://youinroll.com/res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130',
        authorname: "Никита Вадимович",
        commenttext: typedComment,
        timeadded: currentDate.toLocaleString(),
      };
      setComments(oldComments => [...oldComments, addedComment]);
      setTypedComment("");
    }
  
    return (  
        <div>
            <h3>Чат трансляции</h3>     
          {comments.map(
            (comment, key) => 
              <div key={key} className="chatmessage">  
                  <strong className="author">{comment.authorname}: </strong>
                  <span>
                    {comment.commenttext}
                  </span>        
              </div>
          )}   
      
          <Form 
            reply
            onSubmit={() => addComment()}
            className="formchat"
          >
            <Form.TextArea 
              className="commentForm"
              placeholder='Ваш комментарий'
              value={typedComment} 
              onChange={(e) => setTypedComment(e.target.value)} 
            />
            <Button 
              content='Добавить комментарий' 
              labelPosition='left' 
              icon='edit' 
              primary
              disabled={!typedComment}
            />
          </Form>
        </div>
      )
  } */