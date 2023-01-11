import Btn from "./component/button";
import Input from "./component/input";

function App() {
  return (
    <div className="App">
       <div className="wrapper m-1 font-mono w-64 text-base font-semibold grid justify-center">
          <div className="title grid justify-center font-bold my-1">Genarator password</div>
          <div className="output_pass flex">
            <div><Input /></div>
            <div><Btn title="genarat"/></div>
          </div>
          <div className="output_pass flex">
            <div><Input /></div>
            <div><Btn title="copy"/></div>
          </div>
      </div>
    </div>
  );
}

export default App;
