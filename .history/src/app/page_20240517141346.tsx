'use client'
import { useRouter } from 'next/navigation'

import TestComponent from "./parameterComponent";

export default function Home() {

  const router = useRouter()

  const buttonClickLogin =() => {
    router.push('/login');
  }


  const buttonClickSignUp =() => {
    router.push('/signUp')
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
