import { FC } from "react";

interface INewQuoteButton {handleNewQuoteClick: (e: React.MouseEvent<HTMLElement>) => void}

const NewQuoteButton: FC<INewQuoteButton> = ({handleNewQuoteClick}) => {  
  return (
    <button onClick={handleNewQuoteClick}>New quote, please!</button>
  )
}

export default NewQuoteButton;