
import './App.scss';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import dataBase from './components/data';

function App() {
  const cards = dataBase.map((data) => {
    return <Card
      key={data.id}
      item={data}
    />
  })

  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
        <Hero />
      </header>
      <section className='card-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
