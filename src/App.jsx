import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signin from "./userAuth/Signin";
import Register from "./userAuth/Register";
import Reservation from "./pages/ReservationsList";
import HomeTeacher from "./pages/Teacher";
import TeachersDetails from "./pages/TeachersDetails";
import Logout from "./pages/Logout";

const App = () => (
  <Router>
    <main>
      <ToastContainer
        className="toast-container-custom"
      />
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/teachers" element={<HomeTeacher />} />
        <Route path="/teachers/:id" element={<TeachersDetails />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </main>
  </Router>
);

export default App;
