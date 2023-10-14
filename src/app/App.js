
import './App.scss';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


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
          img="./images/katie-swimmer.png"
          alt="A woman swimming instructor"
          rating={5.0}
          reviewCount="(6)"
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}

        />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
