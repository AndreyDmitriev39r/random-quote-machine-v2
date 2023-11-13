import { FC } from "react";

interface IQuoteBox {
  readonly quoteText: string,
  readonly quoteAuthor: string
}

const QuoteBox: FC<IQuoteBox> = ({quoteText, quoteAuthor}) => {
  return (
    <div className="flex-col gap-2">
      <p>{quoteText}</p>
      <p>{quoteAuthor}</p>
    </div>
  )
}

export default QuoteBox