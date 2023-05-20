import "./App.css";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Home from "./screens/home";
import { MyContext } from "./MyContext";
import { useState } from "react";
function App() {
  const [searchstate,setSearchState] = useState()
  return (
    <MyContext.Provider value={{searchstate:searchstate,setSearchState:setSearchState}}>
      <div className="layout_flex">
        <div className="left_container">

        <SideBar />
        </div>
        <div className="right_container">
          <Header />
          <Home />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
