import React from 'react'

export default function alert(props) {
    const capitalise = (word)=>{ //function to make the first letter of our alert type capital 
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style = {{height : '50px'}}> 
    {/* with this line of code we made sure that when our alert appears the content doesnt shift downwards */}

    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
      
    </div>
  ) 
}
