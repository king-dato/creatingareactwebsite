import logo from "./logo.svg";
import "./App.css";
import { FriendList } from "./components/FriendList";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FriendList />
    </div>
  );
}

export default App;
