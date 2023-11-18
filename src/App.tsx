import axios from "axios";

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

  const getInsipiringQuote = async () => {
    try {
     const response = await axios.get("https://api.api-ninjas.com/v1/quotes?category=inspirational", {headers: { 'X-Api-Key': import.meta.env.VITE_API_KEY}},);     
     setQuote({text: response.data[0].quote, author: response.data[0].author});
    } catch (error) {
      console.error(error);
    }
  }

  const fetchQuote = (quoteType: QuoteTypesUnion) => {
    if (quoteType === "random") {
      setQuote({text: "random quote text", author: "random quote author"})
    } else if (quoteType === "inspiring") {
      getInsipiringQuote();      
    } else if (quoteType === "type1") {
      setQuote({text: "type1 quote text", author: "type1 quote author"})
    } else if (quoteType === "type2") {
      setQuote({text: "type2 quote text", author: "type2 quote author"})
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
