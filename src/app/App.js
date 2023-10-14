
import './App.scss';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import dataBase from './components/data';


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
  const dataElements = dataBase.map((data) => {
    return <Card
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
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <main className='App-main'>
        {dataElements}
      </main>
    </div>
  );
}

export default App;


/*
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
*/