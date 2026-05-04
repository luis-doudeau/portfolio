import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { TimelineDetail } from "./pages/TimelineDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/parcours/:slug" element={<TimelineDetail />} />
        </Routes>
      </main>
    </>
  );
}
