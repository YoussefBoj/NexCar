import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./styles/GlobalStyles"; 



const App = () => {
  const isLoggedIn = localStorage.getItem("userInfo") !== null; 
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      {isLoggedIn && <Navigation />}
      {/* <Sidebar/> */}
      <main className="py-0">
        <Outlet />
      </main>
    </>
  );
};

export default App;
