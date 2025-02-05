import logo from "./logo.svg";
import "./App.css";
import { FriendList } from "./components/FriendList";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="FriendList">
        <FriendList />
      </div>
    </div>
  );
}

export default App;
