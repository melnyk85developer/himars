import bg from "./bg.gif"
import './App.css';

function App() {
  return (
    <div className="wrapperContent">
      <section className="secton">
        <div className="screen_1">
          <img src={bg} alt={bg} className="bGsectionL"/>
          <img src={bg} alt={bg} className="bGsectionR"/>
          
        </div>
        {/* <div className="screen_2">
          <img src={bg} alt={bg} className="bGsection"/>
          <img src={bg} alt={bg} className="bGsection"/>
        </div> */}
      </section>
    </div>
  );
}

export default App;
