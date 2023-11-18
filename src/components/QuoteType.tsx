import {useState} from 'react'

const QuoteType = () => {
  const options = [
    "Random Quote",
    "type1 quote",
    "type2 quote"
  ];
  const [quoteType, setQuoteType] = useState(() => options[0]);

  const onOptionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setQuoteType(e.target.value);

  return (
    <select className="border-2 border-black text-black font-normal py-2 px-10 rounded bg-transparent" 
    name="select" onChange={onOptionChangeHandler}>
      {options.map((option, idx) => <option key={idx}>{option}</option>)}
    </select>
  )
}

export default QuoteType;