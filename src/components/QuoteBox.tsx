import { FC } from "react";

interface IQuoteBox {
  readonly quoteText: string,
  readonly quoteAuthor: string
}

const QuoteBox: FC<IQuoteBox> = ({quoteText, quoteAuthor}) => {
  return (
    <div className="flex-col gap-2">
      <p className="font-normal text-4xl text-center text-slate-50">{quoteText}</p>
      <p className="font-light text-2xl text-right pt-7 text-slate-300">{quoteAuthor}</p>
    </div>
  )
}

export default QuoteBox;