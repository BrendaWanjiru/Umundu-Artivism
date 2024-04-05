import { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";
// import Blog from './pages/Blog';
// import Home from './pages/Home'
// import About from './pages/about';

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
        ></Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/programs" element={<Programs/>} />
          <Route path="/special_programs" element />
          <Route path="/donate" element />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
