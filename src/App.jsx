import "./app.css";
// import InlineCondition from "./Component/inlineCondition";
// import Event from "./Event";
import Key from "./Key";
import {Form, Dynamic, Cass, Uncontrol} from "./Component/index"

import {BrowserRouter, Route, Routes} from "react-router-dom"
const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/key" element={<Key/>} />
        <Route path="/form" element={<Form/>} /> 
        <Route path="/dynamic" element={<Dynamic/>}/>
        <Route path="/cass" element={<Cass/>} />
        <Route path="/unControl" element={<Uncontrol/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
