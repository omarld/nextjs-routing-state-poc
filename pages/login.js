import {useState} from 'react';
import Head from 'next/head';
import styles from '../styles/login.module.css';
import {useAppContext} from './store/appContext';
import {useRouter} from 'next/router';

const inputStyles = {
  "marginRight" : "10px"
}

export default function Login() {
  const router = useRouter();
  const [inputName, setInputName] = useState('');
  const [inputEmailAddress, setInputEmailAddress] = useState('');
  const {name, emailAddress, setName, setEmailAddress} = useAppContext();

  const handleNameChange = (evt) =>{
    evt.preventDefault();
    const value = evt.target.value;
    setInputName(value);
  }

  const handleEmailAdressChange = (evt) =>{
    evt.preventDefault();
    const value = evt.target.value;
    setInputEmailAddress(value);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setName(inputName);
    setEmailAddress(inputEmailAddress);
    router.push('/profile')
  }

  return (
    <div onSubmit={handleSubmit}>
      <Head>
        <title>Use Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input style={inputStyles} 
          id="name" 
          type="text" 
          value={inputName || name} 
          onChange={handleNameChange}/>
        <label htmlFor="emailAddress">Email Address</label>
        <input style={inputStyles} 
          id="emailAdress" 
          type="text" 
          value={inputEmailAddress || emailAddress}
          onChange={handleEmailAdressChange}/>
          <input type="submit" value="Submit"/>
      </form>
    </div>
    
  )
}