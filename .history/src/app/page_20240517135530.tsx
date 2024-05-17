'use client'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const buttonClickLogin =() => {
    
  }


  const buttonClickSignUp =() => {
    
  }
  return (
    <>
      home
      <button onClick={buttonClickLogin}   >
        Go login
      </button><br/><br/>
      <button onClick={buttonClickSignUp}   >
        Go sign up
      </button>
    </>
  );
}
