import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Loginpage from "./components/Loginpage/loginform"
import Mainpage from "./components/Mainpage/mainpage"
import Site from "./components/Site/site1"
import Battery from "./components/Battery/battery1"
import Setting from "./components/Setting/setting"
import Nodesearch from "./components/NodeSearch/nodesearch"

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Mainpage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/site1" element={<Site/>}/>
          <Route path="/battery1" element={<Battery/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/nodesearch" element={<Nodesearch/>}/>
        </Routes>
      </div>
    </Router>
  );
}
