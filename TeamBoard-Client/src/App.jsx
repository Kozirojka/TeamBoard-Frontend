
import Homepage from './components/Home/Homepage'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

  return(

    <QueryClientProvider client={queryClient}>
    <div className="App">
      <header className="App-header">
        <Homepage />

      </header>
    </div>
    </QueryClientProvider>
    
  )

}

export default App
