import "./App.scss";
import Routing from "./pages/Routing";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routing />
    </div>
  );
}

export default App;
