// src/App.js
import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Hero/Programs/Programs';
import Reasons from './Components/Hero/Reasons/Reasons';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/plans';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/> 
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
