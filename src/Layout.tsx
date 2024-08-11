import { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="flex-1">
          <Content isSidebarOpen={isSidebarOpen} />
        </main>
      </div>
    </Router>
  );
}

export default Layout;
