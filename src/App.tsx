import QuoteType from "./components/QuoteType";
import QuoteBox from "./components/QuoteBox";
import NewQuote from "./components/NewQuote";

const App = () => {  
  return (
    <div className="flex flex-col gap-3.5 bg-amber-400 p-6 border-teal-200 border-2 rounded-md">
      <QuoteType />
      <QuoteBox />
      <NewQuote />
    </div>
  )
}

export default App
