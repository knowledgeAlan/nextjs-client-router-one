 type requestParameter = {
    userName:string,
    testClick:()=>void,
 }

export default function TestComponent({userName,testClick}:requestParameter) {

  
  return (
    <>
        component test
    </>
  );
}