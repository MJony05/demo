import './App.css';
import News from './News'
import Big from './Big'
function App() {
  const desc = 'lorem ipsum'
  return (
    <div>
      <News name="BBC news" extra="2022" text = 'Jonibek' header="BigJob"/>
      <Big desc={desc}/>
    </div>

  );
}

export default App;
