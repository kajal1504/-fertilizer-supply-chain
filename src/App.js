import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductList from "./Pages/ProductList";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Fertilizer from "./Pages/Fertilizer";
import Home from "./Pages/Home";

import Navbar from "./Pages/Fertilizer/Navbar";
import TopFiveRequired from "./Pages/Fertilizer/TopFiveRequired";
import TopFiveLeast from "./Pages/Fertilizer/TopFiveLeast";
import GraphView from "./Pages/Fertilizer/GraphView";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/product">
              <ProductList />
            </Route>

            {/* Fertilizer Dashboard Main Route */}
            <Route exact path="/fertilizer">
              <>
                
                <Fertilizer />
              </>
            </Route>

            {/* Fertilizer Sub Routes */}

            <Route exact path="/top-required">
              <>
                
                <TopFiveRequired />
              </>
            </Route>

            <Route exact path="/least-available">
              <>
                
                <TopFiveLeast />
              </>
            </Route>

            <Route exact path="/graphView">
              <>
                
                <GraphView />
              </>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
