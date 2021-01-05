import React, {useState, useEffect} from 'react'
import {Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './Message'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


import './App.css';
import db from './firebase';
import firebase from 'firebase'

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState("")
 
 useEffect(() => {
  setUsername(prompt("Enter Your Name"))
 }, [])

 useEffect(() => {
   db.collection('messages').
   orderBy('timestamp','desc').onSnapshot(snapshot => {
     setMessages(snapshot.docs.map(doc => ({ id : doc.id, message : doc.data()})))
   })
 }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    db.collection('messages').add({
      message:input,
      username: username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username : username, message : input}])
    document.querySelector('form').reset()
    setInput("")
  }
  console.log(username)
  console.log(input)
  console.log(messages)
  return (
    <div className="App">
      <img src = "https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399" width = "100" height = "100"/>
      <h1>Happy Coding</h1>
      <h2>Welcome {username}</h2>

      <form className = "app__form">

      <FormControl className = "app__formControl">
      <InputLabel htmlFor="my-input" >Enter a message...</InputLabel>
      <Input className = "app__input" onChange = {e => setInput(e.target.value)}/>
      <IconButton className = "app__iconButton" type ="submit" disabled = {!input} variant = "contained" color = "primary" onClick = {sendMessage}>
        <SendIcon/>
      </IconButton>
     
    </FormControl>

        
     
      </form>
      <FlipMove>
          {
            messages.map(({id, message}) => {
            return <Message key = {id} username = {username} message = {message}/>
            })
          }

      </FlipMove>
    
     
    </div>
  );
}

export default App;
