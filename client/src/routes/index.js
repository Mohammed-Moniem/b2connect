import { Route, Routes } from "react-router-dom";
import Error from "../Pages/Error";
import Movies from "../Pages/Movies/Movies";
import CryptoAndFiat from "./../Pages/CryptoAndFiat/CryptoAndFiat";
import IPDetails from "./../Pages/IPDetails/IPDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<IPDetails />} />
      <Route path="/crypto-and-fiat" element={<CryptoAndFiat />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/404" element={<Error />} />
    </Routes>
  );
};

export default Routers;
