import React, { useEffect } from "react";

useEffect(()=>{
    const s = localStorage.getItem('msg');
    const initValue = JSON.parse(s);
    return initValue;
    
}, [msg]);

export default useEffect;