import { FC } from "react";

interface NQ {handleNewQuoteClick: (e: React.MouseEvent<HTMLElement>) => void}

const NewQuote: FC<NQ> = ({handleNewQuoteClick}) => {  
  return (
    <button onClick={handleNewQuoteClick}>New quote, please!</button>
  )
}

export default NewQuote