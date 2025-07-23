import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import PlantForm from './PlantForm';
import PlantList from './PlantList';
import SearchBar from './SearchBar';

function App() {
  const [addPlant, setPlant] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/plants')
      .then(res => res.json())
      .then(data => setPlant(data))
      .catch(error => console.error('Error encountered:', error))

  }, []
  );

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  const filterPlant = addPlant.filter((plants) =>
    plants.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <PlantForm setPlant={setPlant} />
      <SearchBar onSearch={handleSearch} />
      <PlantList plants={filterPlant} setPlant={setPlant} />
    </div>
  );
}

export default App;
