import React, { useEffect } from "react";

useEffect(()=>{
    const s = localStorage.getItem('userName');
    const initValue = JSON.parse(s);
    return initValue;
    
}, [userName]);

export default useEffect;