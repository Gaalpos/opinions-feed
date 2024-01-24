import logo from './logo.svg';
import './App.css';
import Opinion from './components/Opinion.js';
import { Worker } from './components/Worker.js';


// FETCH THE INFO FROM ONE .JSON AND DO A FOR EACH TO BUILD THE DIVS
function App() {
  return (
    <div className="App">
      <h1>Best characters</h1>
      <div className='container-main'>
        {Worker.map((worker) => (
          <Opinion
            img={worker.img}
            name={worker.realName}
            job={worker.job}
            place={worker.place}
            phrase={worker.phrase}
          />
        ))}
      </div>

    </div>

  );
}

export default App;
