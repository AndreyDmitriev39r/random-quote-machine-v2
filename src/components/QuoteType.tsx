import { FC } from "react";

interface QT {  
  onOptionChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  options: string[],
}

const QuoteType: FC<QT> = ({onOptionChangeHandler, options}) => {
  return (
    <select name="select" onChange={onOptionChangeHandler}>
      {options.map((option, idx) => <option key={idx}>{option}</option>)}
    </select>
  )
}

export default QuoteType;