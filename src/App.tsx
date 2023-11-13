import { useState } from "react";

import QuoteBox from "./components/QuoteBox";
import QuoteTypeSelect from "./components/QuoteTypeSelect";
import NewQuoteButton from "./components/NewQuoteButton";

interface Quote {
  text: string,
  author: string
};

const App = () => {  

  const initialQuote = {
    text: "text for quote on initial render",
    author: "author of initial quote"
  };

  const options = [
    "random",
    "inspiring",
    "type1",
    "type2",
  ] as const;

  type QuoteTypesUnion = (typeof options)[number];

  const [quoteType, setQuoteType] = useState<QuoteTypesUnion>(() => options[0]);
  const [quote, setQuote] = useState<Quote>(() => initialQuote);

  const onOptionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setQuoteType(e.target.value as QuoteTypesUnion);

  const handleNewQuoteClick = () => fetchQuote(quoteType);

  const fetchQuote = (quoteType: QuoteTypesUnion) => {
    if (quoteType === "random") {
      setQuote({text: "random quote text", author: "random quote author"})
    } else if (quoteType === "inspiring") {      
      setQuote({text: "something from zenquotes", author: "coool folks"})
    } else if (quoteType === "type1") {
      setQuote({text: "type1 quote text", author: "type1 quote author"})
    } else if (quoteType === "type2") {
      setQuote({text: "type1 quote text", author: "type1 quote author"})
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

export default App;
