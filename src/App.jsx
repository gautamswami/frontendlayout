import "./App.css";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Home from "./screens/home";

function App() {
  return (
    <>
      <div className="layout_flex">
        <div className="left_container">

        <SideBar />
        </div>
        <div className="right_container">
          <Header />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
