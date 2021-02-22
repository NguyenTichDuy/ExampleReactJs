import "./styles.css";
import "./components/test";
import Clock from "./components/clock";
import Rendering from "./components/Rendering";
export default function App() {
  return (
    <div className="App">
      <Rendering isLoggedIn={false} />
    </div>
  );
}
