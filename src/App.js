import {useState} from 'react'
import data from './data';
import Tours from './components/Tours';
import "./App.css";

function App() {

  const[tours,setTours] = useState(data)

  function removeTours(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white"onClick={()=> setTours(data)}>
            <h2>Refresh</h2>
        </button>
      </div>
    )
  }


  return (
    <div className="App">

    <Tours tours={tours} removeTours={removeTours}></Tours>

    </div>
  );
}

export default App;
