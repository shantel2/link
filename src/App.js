import { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Footer from './components/Footer';
import Shortner from './components/Shortner';

function App() {
  const [link, setLink] = useState("");

  return (
    <div className="home">
      <Background/>
      <Shortner setLink = {setLink} />
      <Footer/>
    </div>
  );

}

export default App;
