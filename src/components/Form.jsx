import React,{useState,useEffect, useRef}  from 'react';
import emailjs from '@emailjs/browser';

const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const Form = ({setEmailConfirmation}) => {
  
  const formRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);

  const handleName = (e) =>{
    setName(e.target.value);
    if(name.length<4){
      setNameError(true)
    }else{
      setNameError(false)
    }
  }
  const handleMessage = (e) =>{
    setMessage(e.target.value);
    if(message.length<15){
      setMessageError(true)
    }else{
      setMessageError(false)
    }
  }

  const handleEmailValue = (e) =>{
    setEmail(e.target.value);
  }
  const handleEmailSubmit = (e) =>{
    e.preventDefault();

    if(!messageError && !nameError){
      emailjs.sendForm('service_g5wb7nq','template_rwo6xed',formRef.current,'Nw9mYKs-BMJleDqIB')
      .then((result)=>{
        setEmailConfirmation(true);
      })
      setName('');
      setEmail('');
      setMessage('');
    }
  }
  return (
    <div className='middle-section'>
      <form action="" ref={formRef} onSubmit={handleEmailSubmit}>
        <input 
          type="text" 
          name='clientName'
          autoComplete='off'
          onChange={handleName}
          value={name}
          placeholder='john'
          required/>
          {nameError && <p>Enter a vaild name</p>}
        <input 
          type="email" 
          name='clientEmail'
          placeholder='john@gmail.com'
          value={email}
          onChange={handleEmailValue}
          required
          autoComplete='off'/>
        <textarea 
          name="message" 
          value={message}
          onChange={handleMessage} 
          cols="30" rows="10" 
          placeholder='Hey! nidhi....'>
        </textarea>
        {messageError && <p>Enter a vaild message</p>}
        <button type='submit'>send</button>
      </form>
    </div>
  )
}

export default Form;