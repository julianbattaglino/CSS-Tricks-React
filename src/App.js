import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Buttons from './components/Buttons/Buttons';
import Cards from './components/Cards/Cards';
import Gradients from './components/Gradients/Gradients';
import Underline from './components/Underline/Underline';
import Page404 from './components/Page404/Page404';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/gradients" element={<Gradients />} />
          <Route path="/underline" element={<Underline />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
