import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './Components/Routing.jsx';
import { RouterProvider } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
