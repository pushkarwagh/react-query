import "./App.css";
import Characters from "./Characters";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
        <div className="container">
        <h1> Rick & Morty </h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
