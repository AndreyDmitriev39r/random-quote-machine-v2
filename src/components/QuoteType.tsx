import {useState} from 'react'

const QuoteType = () => {
  const options = [
    "random quote",
    "type1 quote",
    "type2 quote"
  ];
  const [quoteType, setQuoteType] = useState(() => options[0]);

  const onOptionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setQuoteType(e.target.value);

  return (
    <select name="select" onChange={onOptionChangeHandler}>
      {options.map((option, idx) => <option key={idx}>{option}</option>)}
    </select>
  )
}

export default QuoteType;