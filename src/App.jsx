import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/homee"));
const About = lazy(() => import("./pages/about"));
const Blog = lazy(() => import("./pages/Blog"));
const Programs = lazy(() => import("./pages/programs"));

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Suspense
          fallback={
            <div class="flex flex-row gap-2">
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/programs" element={<Programs />} />
            {/* Add more routes as needed */}
            {/* Note: Make sure to include the element prop with the corresponding component */}
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
