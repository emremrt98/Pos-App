
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import Header from "./components/header/Header";
import Customer from "./pages/CustomerPage";
import Statistic from "./pages/StatisticPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/statistics" element={<Statistic />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
