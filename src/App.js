// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Playground from "./components/Playground";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            exact path="/" 
						render={(props) => <Home {...props} />} 
					/>
          <Route 
            exact path="/playground" 
						render={(props) => <Playground {...props} />} 
					/>
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
