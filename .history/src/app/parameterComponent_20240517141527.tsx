'use client'

type requestParameter = {
    userName:string,
    testClick:()=>void,
 }

export default function TestComponent({userName,testClick}:requestParameter) {

  console.log("userName====",userName)
  return (
    <>
        component test
        <Button onClick={testClick}>
            Test click
        </Button>
    </>
  );
}