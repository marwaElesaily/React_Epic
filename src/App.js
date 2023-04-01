import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Discover from "./Pages/Discover/Discover";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Discover></Discover>
      <Footer></Footer>
    </div>
  );
}

export default App;
