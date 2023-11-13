import { useState } from "react";

import QuoteBox from "./components/QuoteBox";
import QuoteTypeSelect from "./components/QuoteTypeSelect";
import NewQuoteButton from "./components/NewQuoteButton";

const App = () => {  

  const initialQuote = {
    text: "some initial text",
    author: "poor silly me"
  }

  const options = [
    "random",
    "inspiring",
    "type1",
    "type2",
  ] as const;

  type QuoteTypesUnion = (typeof options)[number];

  const [quoteType, setQuoteType] = useState<QuoteTypesUnion>(() => options[0]);
  const [quote, setQuote] = useState(() => initialQuote)

  const onOptionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setQuoteType(e.target.value as QuoteTypesUnion);

  const handleNewQuoteClick = () => fetchQuote(quoteType);

  const fetchQuote = (quoteType: string) => {
    if (quoteType !== "inspiring") {
      setQuote({text: "some definitely uninspiring quote", author: "whoever"})
    } else {
      // here should be all the fetching thing
      setQuote({text: "something from zenquotes", author: "coool folks"})
    }
  }

  return (
    <div className="flex flex-col">
      <QuoteBox
        quoteText={quote.text}
        quoteAuthor={quote.author}
      />
      <div className="flex flex-row">
        <QuoteTypeSelect         
          onOptionChangeHandler={onOptionChangeHandler}
          options={options}
        />
        <NewQuoteButton handleNewQuoteClick={handleNewQuoteClick}/>
      </div>
    </div>
  )
}

export default App
