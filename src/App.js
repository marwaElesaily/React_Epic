import { Fragment } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Account from "./Pages/Account/Account";
import Discover from "./Pages/Discover/Discover";

function App() {
  return (
    <Fragment>
      <div className="main">
        <Navbar></Navbar>
        <Discover></Discover>
        <Footer></Footer>
      </div>
      <div className="account">
        <Account />
      </div>
    </Fragment>
  );
}

export default App;
