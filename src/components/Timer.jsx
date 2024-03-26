import React, { useEffect } from 'react'
import { useState } from 'react';
function Timer({interval,stopLimit}) {
    const [c, setC1] = useState(0);

    useEffect(()=>{
        let timerc1 = setInterval(() => {
            if (c >= stopLimit) {
                clearInterval(timerc1);
            } else {
           
                 setC1(v => v + 1);
            }
         }, interval);
        return ()=>clearInterval(timerc1);
    },[c])
  return (
    <span>{c}</span>
  )
}

export default Timer