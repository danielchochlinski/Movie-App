import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Searchbox from "./components/SearchBox/SearchBar";
import Main from "./pages/Main";
import Movies from "./pages/Movies";

export default function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="" element={<Main />} exact />
        <Route path="/movies" element={<Movies />} />
      </Routes>

    </div>
  );
}
