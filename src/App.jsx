import "./app.css";
// import InlineCondition from "./Component/inlineCondition";
// import Event from "./Event";
// import { Suspense, lazy } from "react";
import Key from "./Component/Key";
import User from "./Component/HigherOrder/User";
import HelperFile from "./Component/HelperFunction/HelperFile";
import Post from "./Component/HigherOrder/Post";

// const Lorem= lazy(()=> import("./Component/LazyLoading/Lorem"));
// const Home= lazy(()=> import("./Component/LazyLoading/Home"))
import Promise from "./Component/Promise/Promise";
import {
  Form,
  Dynamic,
  Cass,
  Uncontrol,
  Axios,
  Debouncing,
  ContestApi,
} from "./Component/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Split from "./Component/Split/Split";
import SearchFilter from "./Component/SearchFilter/SearchFilter";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/key" element={<Key/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/dynamic" element={<Dynamic/>}/>
        <Route path="/cass" element={<Cass/>} />
        <Route path="/unControl" element={<Uncontrol/>} />
        <Route path="/axios" element={<Axios/>} />
        <Route path="/debouncing" element={<Debouncing/>} />
        <Route path="/contestapi" element={<ContestApi/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/helper" element={<HelperFile/>} />
        <Route path="/promise" element={<Split/>} />
        <Route path="/search" element={<SearchFilter/>} />
      </Routes>
    </BrowserRouter>


    //LazyLoading
    // <div>
    //   <Suspense fallback="Loading....">
    //     <Home/>
    //     <Lorem/>


    //   </Suspense>
    // </div>
  );
};

export default App;
