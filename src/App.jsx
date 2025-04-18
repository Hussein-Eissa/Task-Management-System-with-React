import Routes from './appRouter.jsx';
import { RouterProvider } from 'react-router-dom';
import { ModalProvider } from "./Context/CategoryContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from 'react-toastify';
import { TaskProvider } from "./Context/Taskcontext.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <TaskProvider>
        <ModalProvider>
          <RouterProvider router={Routes} />
        </ModalProvider>
      </TaskProvider>
    </>

  )
}

export default App
