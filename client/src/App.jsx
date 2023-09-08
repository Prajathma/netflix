import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import MovieDetailed from "./components/MovieDetailed";
import Search from "./components/Search";



function App() {
  return <>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/movie-detailed/:id" element={<MovieDetailed />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  </>;
}

export default App;
