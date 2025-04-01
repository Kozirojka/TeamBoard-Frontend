import Homepage from "./components/Home/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board/Board";
import { SignalRProvider } from "./tools/signalRTools/SignalRContext";

const queryClient = new QueryClient();

function App() {
  return (
    <SignalRProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Routes>
                <Route path="/board/:id" element={<Board />} />
                <Route path="/" element={<Homepage />} />
              </Routes>
            </header>
          </div>
        </Router>
      </QueryClientProvider>
    </SignalRProvider>
  );
}

export default App;
