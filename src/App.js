import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import UnderlineComponents from './components/UnderlineComponents/UnderlineComponents';
import GradientComponents from './components/GradientComponents/GradientComponents';
import Buttons from './components/Buttons/Buttons';
import Cards from './components/Cards/Cards';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <GradientComponents/>
      <UnderlineComponents/> 
      <Buttons/>
      <Cards/>
    </div>
  );
}

export default App;
