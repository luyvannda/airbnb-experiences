
import './App.scss';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import dataBase from './components/data';

function App() {
  const cards = dataBase.map((data) => {
    return <Card
      key={data.id}
      status={data.openSpots}
      img={`./images/${data.coverImg}`}
      alt={data.alt}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      country={data.country}
      title={data.title}
      price={data.price}
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
