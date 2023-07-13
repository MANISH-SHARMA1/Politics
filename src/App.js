import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import TopLeaders from "./components/topLeaders/TopLeaders";
import PresentLeaders from "./components/presentLeaders/PresentLeaders";
import Navbar from "./components/navbar/Navbar";
import DetailPage from "./pages/detailPage/DetailPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTopLeaders } from "./redux/topLeaderSlice";
import { fetchPresentLeaders } from "./redux/presentLeaderSlice";
import TopDetailPage from "./pages/detailPage/TopDetailpage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopLeaders());
  }, []);

  useEffect(() => {
    dispatch(fetchPresentLeaders());
  });

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topLeaders/:key" element={<TopDetailPage />} />
          <Route path="/presentLeaders/:key" element={<DetailPage />} />
          <Route path="/topLeaders" element={<TopLeaders />} />
          <Route path="/presentLeaders" element={<PresentLeaders />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
