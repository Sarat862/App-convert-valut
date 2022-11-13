import { useEffect, useState } from "react";

export default function ConvertValut() {

  const [value, setValue] = useState({});

  useEffect(() => {
    console.log(value)
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {elements: {amount, to, from}} = e.target
    const amountValue = amount.value;
    const toValue = to.value;
    const fromValue = from.value;
    setValue({ amountValue, toValue, fromValue });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input 
              name= "amount"
              type= "number"
          />      
          <input 
              name= "from"
              type= "text"
          />  
          <input 
              name= "to"
              type= "text"
          />  
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}
