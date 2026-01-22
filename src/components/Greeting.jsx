import { useState } from "preact/hooks";

export default function Greeting({ messages}) {

  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  const [ greeting, setGreetting ] = useState(messages[0]);

  return(
    <div>
      <h3>{greeting}! Thank you for your visit!</h3>
      <button onClick={()=> setGreetting(randomMessage())}>New greeting</button>
    </div>
  )

}