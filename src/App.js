import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Discover from "./Pages/Discover/Discover";
import Cart from "./Pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Browse from "./Pages/browse/browse";
import Header from "./Pages/Header/Header";
function App() {
  return (
    <div className="main">
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
