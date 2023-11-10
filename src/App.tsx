import QuoteType from "./components/QuoteType";
import QuoteBox from "./components/QuoteBox";
import NewQuote from "./components/NewQuote";

const App = () => {  
  return (
    <div className="flex flex-col">
      <QuoteBox />
      <div className="flex flex-row">
        <QuoteType />
        <NewQuote />
      </div>
    </div>
  )
}

export default App
