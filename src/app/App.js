
import './App.scss';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import katie from "./components/images/katie-swimmer.png"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <main className='App-main'>
        <Card
          status="SOLD OUT"
          img={katie}
          alt="A woman swimming instructor"
          rating={5.0}
          reviewCount="(6)"
          country="USA"
          description="Life Lessons with Katie Zaferes"
          price={136}

        />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
