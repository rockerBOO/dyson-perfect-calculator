import "style-loader!css-loader!normalize.css";
import { render } from "react-dom";
import Calculator from "./components/calculator";

const App = () => <div><Calculator /></div>;

render(<App />, document.getElementById("app"));
