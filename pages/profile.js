import Head from 'next/head';
import {useRouter} from 'next/router';
import {useAppContext} from './store/appContext'; 
const inputStyles = {
  "marginRight" : "10px"
}

export default function Profile () {
  const router = useRouter();
  const {name, emailAddress} = useAppContext();

  const handleGoBack = (evt) => {
    evt.preventDefault();
    router.push('/login');
  }
  return (
    <section>
      <a href="javscript:void()" onClick={handleGoBack}>...back</a>
      <h1>Profile</h1>
      <span style={inputStyles}>Name: {name}</span>
      <span>Email Address: {emailAddress}</span>
    </section>
    
  )
}