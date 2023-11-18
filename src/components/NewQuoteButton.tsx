import { FC } from "react";

interface INewQuoteButton {readonly handleNewQuoteClick: (e: React.MouseEvent<HTMLElement>) => void}

const NewQuoteButton: FC<INewQuoteButton> = ({handleNewQuoteClick}) => {  
  return (
    <button className="bg-black hover:bg-gray-700 text-white font-normal py-2 px-10 rounded" onClick={handleNewQuoteClick}>Inspire me!</button>
  )
}

export default NewQuoteButton;