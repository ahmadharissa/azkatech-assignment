import { Route, BrowserRouter, Routes } from "react-router-dom";
import { lazy } from "react";

const Country = lazy(() => import("./components/Pages/Country/Country.js"));
const Total = lazy(() => import("./components/Pages/Total/Total.js"));
const CountryDetail = lazy(() =>
  import("./components/Pages/Country/CountryDetail.js")
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Country />} />
          <Route path="/country/:id" element={<CountryDetail />} />
          <Route path="/total" element={<Total />} />
          <Route path="/*" element={<p>Error 404: Page Not Found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
