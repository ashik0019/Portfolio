import React from 'react';
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactSection from "./components/ContactSection/ContactSection";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router/AppRoute";

function App() {
  return (
    <BrowserRouter>
        <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
