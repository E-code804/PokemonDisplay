// React Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages imports
import Home from "./pages/Home";
import PokePage from "./pages/PokePage";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pName" element={<PokePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
