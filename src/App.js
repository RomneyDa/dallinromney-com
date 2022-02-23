import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./Components/Home/Home";
// import WhereCanIPee from "./PortfolioPages/WhereCanIPee/WhereCanIPee"
const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio">
          <Route path="yes" element={<Home/>}/>
        </Route>
        {/* <Route path="/wherecanipee" element={<WhereCanIPee/>}/> */}
      </Routes>

    </Router>
  );
};

export default App;
