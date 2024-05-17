'use client'
import { useRouter } from 'next/navigation'

export default function Home() {

  const buttonClick =() => {
    
  }
  return (
    <>
      home
      <button onClick={buttonClick}   >
        Go login
      </button><br/><br/>
      <button onClick={buttonClick}   >
        Go sign up
      </button>
    </>
  );
}
