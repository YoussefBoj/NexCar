import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from './styles/GlobalStyles'; 


const App = () => {
  return (
    <>
       {/* <GlobalStyles /> */}

      <ToastContainer />
      <Navigation />
      <main className="py-0">
        <Outlet />
      </main>
    </>
  );
};

export default App;
