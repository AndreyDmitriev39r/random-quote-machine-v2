import { FC } from "react";

interface INewQuoteButton {readonly handleNewQuoteClick: (e: React.MouseEvent<HTMLElement>) => void}

const NewQuoteButton: FC<INewQuoteButton> = ({handleNewQuoteClick}) => {  
  return (
    <button className="bg-black text-white font-normal py-2 px-10 rounded hover:text-black hover:shadow-[0_0_15px_theme('colors.slate.50')] hover:bg-neutral-300 active:bg-neutral-400" onClick={handleNewQuoteClick}>Inspire me!</button>
  )
}

export default NewQuoteButton;