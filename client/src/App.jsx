import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioProvider from "./Components/Contexts/PortfolioContextProvider";
import ThemeProvider from "./Components/Contexts/ThemeContextProvider";
import Layout from "./Components/Layout";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import Portfolio from "./Components/Pages/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <PortfolioProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </PortfolioProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
