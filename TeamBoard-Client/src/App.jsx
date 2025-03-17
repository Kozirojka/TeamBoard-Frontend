import './App.css'

function App() {

  const handleLoginWithGoogle = () => {
    window.location.href = 'https://localhost:5187/api/account/login/google?returnUrl=http://localhost:5173';
  }

  return (
    <>
      <button onClick={handleLoginWithGoogle}>
        Sign in with Google
      </button>
    </>
  )
}

export default App
