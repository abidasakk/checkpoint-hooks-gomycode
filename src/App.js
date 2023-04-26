
import './App.css';
import From from './composants/From';
import Foot from './composants/Foot';
import Foots from './composants/Foots';
import Database from './composants/Database';
import Listen from './composants/Listen';
function App() {
  return (
    <Database> 
<div className="App">
  <div className='cadre'> 
  <h1>Carnet de contacte</h1>
  <From />
  <Listen/>
  <Foot/>
   </div>
</div>
    </Database>
  );
}

export default App;
