import ReactLogo from "./assets/react.svg";
import ViteLogo from "/vite.svg";
import "./App.css";
import { decrement, increment } from "./redux/slice/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ViteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={ReactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}
export default App;
