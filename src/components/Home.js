import React,{useEffect} from 'react';
import axios from "axios";

export default function Home() {

  const getCallURL = process.env.getCallURL
  
  useEffect(()=>{
    axios.get(getCallURL).then((response) => {
      console.log(response.data);
    });
  })
  return (
    <div>
      Hello React App
    </div>
  );
}
