import "./App.css";
import CreateModule from "./components/CreateModule";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListModules from "./components/ListModules";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import EditModule from "./components/EditModule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/new-module" element={<CreateModule />} />
          <Route path="/list-modules" element={<ListModules />} />
          <Route path="/edit-module/:id" element={<EditModule />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
