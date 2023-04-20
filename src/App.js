import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Discover from "./Pages/Discover/Discover";
import Cart from "./Pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Browse from "./Pages/Browse/Browse";
import Header from "./Pages/Header/Header";
import Account from "./Pages/Account/Account";
import AccountSetting from "./Components/AccountComponents/AccountSetting";
import Password from "./Components/AccountComponents/Password";
import Transactions from "./Components/AccountComponents/Transactions";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import GameDetails from "./Pages/GameDetails/GameDetails";
import WishList from "./Pages/WishList/WishList";
function App() {
  return (
    <div className="main">
      <Header></Header>
      <Navbar></Navbar>
      {/* <GameDetails /> */}
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/account" element={<Account />}>
          <Route path="setting" element={<AccountSetting />} />
          <Route path="password" element={<Password />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
