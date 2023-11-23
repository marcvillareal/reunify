import "./App.css";
import Navbar from "./components/Navbar";
import Chatroom from "./pages/Chatroom";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      {/* <Chatroom /> */}
    </div>
  );
}

export default App;
