import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/homee"));
const About = lazy(() => import("./pages/about"));
const Blog = lazy(() => import("./pages/Blog"));
const Programs = lazy(() => import("./pages/programs"));

function App() {
  return (
  
      <BrowserRouter>
        <NavBar />
        <Suspense
          fallback={
            <section className=" w-full h-screen bg-white flex justify-center">
            <div class="flex flex-row gap-2">
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
            </section>
          }
        >
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/programs">
              <Programs/>
            </Route>
           
            </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
