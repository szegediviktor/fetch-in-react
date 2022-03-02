import "./App.css";
import AsyncAwait from "./components/AsyncAwait";
import BasicFetch from "./components/BasicFetch";
import InsideUseEffect from "./components/InsideUseEffect";

function App() {
    return (
        <div className="App">
            <BasicFetch />
            <AsyncAwait />
            <InsideUseEffect />
        </div>
    );
}

export default App;
