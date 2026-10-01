import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./view/Home";
import { Projects } from "./view/Projects";
import { Header } from "./components/Header";
import { ThemeProvider } from "./context/theme/ThemeProvider";
import { Project } from "./view/Project";
import { ScrollToTop } from "./components/ScrollToTop";
import "@fontsource/inter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <ScrollToTop />
        <div className="mt-12 flex flex-col max-w-5xl justify-center mx-auto bg-bg-main">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects">
              <Route index element={<Projects />} />
              <Route path=":id" element={<Project />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
