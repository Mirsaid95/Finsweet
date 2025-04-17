import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import { Home } from "./components/home";
import  Service  from "./components/page/service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
