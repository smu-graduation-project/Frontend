import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Loginpage from "./components/Loginpage/loginpage"
import Mainpage from "./components/Mainpage/mainpage"
import Site from "./components/Site/site1"
import Battery from "./components/Battery/battery1"
import Node1 from "./components/Node/node1"
import Node2 from "./components/Node/node2"
import Setting from "./components/Setting/Setting_main"
import SettingPermission from "./components/Setting/SettingPermission"
import AddSite from "./components/Setting/SiteAdd"
import AddBattery from "./components/Setting/BatteryAdd"
import AddNode from "./components/Setting/NodeAdd"

import A from "./components/Node/a"


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Mainpage/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/site1" element={<Site/>}/>
          <Route path="/battery1" element={<Battery/>}/>
          <Route path="/node1" element={<Node1/>}/>
          <Route path="/node2" element={<Node2/>}/>

          <Route path="/setting" element={<Setting/>}/>
          <Route path="/setting/settingpermission" element={<SettingPermission/>}/>
          <Route path="/setting/addsite" element={<AddSite/>}/>
          <Route path="/setting/addbattery" element={<AddBattery/>}/>
          <Route path="/setting/addnode" element={<AddNode/>}/>

          <Route path="/a" element={<A/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}
