import Homepage from "./components/Home/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board/Board";
const queryClient = new QueryClient();

function App() {
  // const handleLoginWithGoogle = () => {
  //   window.location.href = 'https://localhost:5187/api/account/login/google?returnUrl=http://localhost:5173';
  // }

  // return (
  //   <>
  //     <button onClick={handleLoginWithGoogle}>
  //       Sign in with Google
  //     </button>
  //   </>
  // )

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/board/:id" element={<Board />} />
            </Routes>
            <Homepage />
          </header>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
