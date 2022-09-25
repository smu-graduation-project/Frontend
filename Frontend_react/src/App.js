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
import Joinpage from "./components/Joinpage/join_layout"
import Site1 from "./components/Site/site1_main"
import Site1_battery1 from "./components/Battery/Site1_battery/battery1_layout"
import Site1_battery2 from "./components/Battery/Site1_battery/battery1_layout"
import Site1_battery3 from "./components/Battery/Site1_battery/battery1_layout"
import Site1_battery4 from "./components/Battery/Site1_battery/battery1_layout"
import Site1_node1 from "./components/Node/node1"
import Site1_node2 from "./components/Node/node2"
import Site1_node3 from "./components/Node/node2"
import Site1_node from "./components/Node/node"
import FixAddSite from "./components/Setting/SiteAdd"
import FixAddBattery from "./components/Setting/BatteryAdd"
import FixAddNode from "./components/Setting/NodeAdd"

import Setting from "./components/Setting/Setting_main"
import SettingPermission from "./components/Setting/SettingPermission"
import AddSite from "./components/Setting/SiteAdd"
import AddBattery from "./components/Setting/BatteryAdd"
import AddNode from "./components/Setting/NodeAdd"
import SearchNode from "./components/Setting/NodeSearch"
import A from "./components/Node/a"


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Mainpage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/site1" element={<Site1/>}/>
          <Route path="/site1/battery1" element={<Site1_battery1/>}/>
          <Route path="/site1/battery2" element={<Site1_battery2/>}/>
          <Route path="/site1/battery3" element={<Site1_battery3/>}/>
          <Route path="/site1/battery4" element={<Site1_battery4/>}/>
          <Route path="/site1/node1" element={<Site1_node1/>}/>
          <Route path="/site1/node2" element={<Site1_node2/>}/>
          <Route path="/site1/node3" element={<Site1_node3/>}/>
          <Route path="/site1/node" element={<Site1_node/>}/>
          <Route path="/setting/addsite" element={<FixAddSite/>}/>
          <Route path="/setting/addbattery" element={<FixAddBattery/>}/>
          <Route path="/setting/addnode" element={<FixAddNode/>}/>

          <Route path="/setting" element={<Setting/>}/>
          <Route path="/setting/settingpermission" element={<SettingPermission/>}/>
          <Route path="/setting/addsite" element={<AddSite/>}/>
          <Route path="/setting/addbattery" element={<AddBattery/>}/>
          <Route path="/setting/addnode" element={<AddNode/>}/>
          <Route path="/setting/searchnode" element={<SearchNode/>}/>

          <Route path="/a" element={<A/>}/>
          <Route path="/join" element={<Joinpage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}
