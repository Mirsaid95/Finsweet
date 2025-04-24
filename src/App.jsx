import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import { Home } from "./components/home";
import Service from "./components/page/service";
import { Company } from "./components/page/company";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
