import { FC } from "react";

interface QB {
  quoteText: string,
  quoteAuthor: string
}

const QuoteBox: FC<QB> = ({quoteText, quoteAuthor}) => {
  return (
    <div className="flex-col gap-2">
      <p>{quoteText}</p>
      <p>{quoteAuthor}</p>
    </div>
  )
}

export default QuoteBox