import { useState, useEffect } from "react";

import QuoteType from "./components/QuoteType";
import QuoteBox from "./components/QuoteBox";
import NewQuote from "./components/NewQuote";

const App = () => {

  const options = [
    "random quote",
    "inspiring",
    "type2 quote"
  ];

  const intialQuote = {
    text: "some initial text",
    author: "poor silly me"
  }

  const [quoteType, setQuoteType] = useState(() => options[0]);
  const [quote, setQuote] = useState(() => intialQuote)

  const onOptionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setQuoteType(e.target.value);

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
        <QuoteType          
          onOptionChangeHandler={onOptionChangeHandler}
          options={options}
        />
        <NewQuote handleNewQuoteClick={handleNewQuoteClick}/>
      </div>
    </div>
  )
}

export default App
