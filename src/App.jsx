import { Route, Routes } from "react-router-dom";
import FetchMethod from "./components/fetch/FetchMethod";
import SingleProduct from "./components/SingleProduct";
import AxiosMethod from "./components/axios/AxiosMethod";
import ReactQuery from "./components/react-query/ReactQuery";
import RTKQuery from "./components/rtk-query/RTKQuery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RTKQuery />} />
      <Route path="/reactQuery" element={<ReactQuery />} />
      <Route path="/axios" element={<AxiosMethod />} />
      <Route path="/fetch" element={<FetchMethod />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
}

export default App;
