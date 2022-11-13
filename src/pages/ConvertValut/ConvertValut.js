import { useEffect, useState } from 'react';
import changeCurrent from '../../API/ApiConvert';

export default function ConvertValut() {
  const [value, setValue] = useState({});
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (Object.keys(value).length === 0) {
      return;
    }
    changeCurrent(value).then(data => {
      setResult(data.result);
    });
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { amount, to, from },
    } = e.target;
    const amountValue = amount.value;
    const toValue = to.value;
    const fromValue = from.value;
    setValue({ amountValue, toValue, fromValue });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="amount" type="number" />
        <input name="from" type="text" />
        <input name="to" type="text" />
        <button type="submit">Submit</button>
      </form>
      <p>Result: {result} </p>
    </div>
  );
}
