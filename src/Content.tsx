import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Works from "./Works";

function Content({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div
      className={`transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
    >
      <Routes>
        <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} />} />
        <Route
          path="/skills"
          element={<Skills isSidebarOpen={isSidebarOpen} />}
        />
        <Route
          path="/works"
          element={<Works isSidebarOpen={isSidebarOpen} />}
        />
      </Routes>
    </div>
  );
}

export default Content;
