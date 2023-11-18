import QuoteType from "./components/QuoteType";
import QuoteBox from "./components/QuoteBox";
import NewQuote from "./components/NewQuote";

const App = () => {  
  return (
    <div className="flex flex-col py-10 px-20 m-4 rounded-md shadow-xl bg-gradient-to-r from-gray-50/30 to-gray-600/60 font-inter">
      <QuoteBox />
      <div className="flex flex-row justify-evenly pt-10">
        <QuoteType />
        <NewQuote />
      </div>
    </div>
  )
}

export default App
