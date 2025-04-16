
import './App.css'
import Routes from './Components/Routing.jsx';
import { RouterProvider } from 'react-router-dom';
import { ModalProvider } from "./Context/CategoryContext.jsx";

function App() {
  

  return (
    <ModalProvider>
      <RouterProvider router={Routes} />
    </ModalProvider>
    
  )
}

export default App
