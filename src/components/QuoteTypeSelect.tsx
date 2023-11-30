import { FC } from "react";

interface IQuoteTypeSelect {  
  readonly onOptionChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  options: readonly string[],
}

const QuoteTypeSelect: FC<IQuoteTypeSelect> = ({onOptionChangeHandler, options}) => {
  return (
    <select name="select" className="border-2 border-black text-black font-normal py-2 px-10 rounded bg-transparent justify-between" 
    onChange={onOptionChangeHandler}>
      {options.map((option, idx) => <option key={idx}>{option}</option>)}
    </select>
  )
}

export default QuoteTypeSelect;