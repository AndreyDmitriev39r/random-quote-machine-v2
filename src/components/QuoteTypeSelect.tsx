import { FC } from "react";

interface IQuoteTypeSelect {  
  onOptionChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  options: string[],
}

const QuoteTypeSelect: FC<IQuoteTypeSelect> = ({onOptionChangeHandler, options}) => {
  return (
    <select name="select" onChange={onOptionChangeHandler}>
      {options.map((option, idx) => <option key={idx}>{option}</option>)}
    </select>
  )
}

export default QuoteTypeSelect;