import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Footer from "./component/Footer";
import LoginPopup from "./component/LoginPopup";
import Cart from "./pages/Cart";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      
      {/* Login Popup (global overlay) */}
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} />
      )}

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <div className="max-w-7xl mx-auto px-6">
                <Home setShowLogin={setShowLogin} />
              </div>

              <section id="contact">
                <Footer />
              </section>
            </>
          }
        />

        {/* CART PAGE */}
        <Route path="/cart" element={<Cart />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;