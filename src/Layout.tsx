import { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newIsNarrowScreen = width <= 1650;
      setIsNarrowScreen(newIsNarrowScreen);
      setIsSidebarOpen(width > 1650);
    };

    // 初期レンダリング時にチェック
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div>
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          isNarrowScreen={isNarrowScreen}
        />
        <Box position="relative">
          {isNarrowScreen && isSidebarOpen && (
            <Box
              position="fixed"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="blackAlpha.400"
              zIndex="8"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          <main>
            <Content />
          </main>
        </Box>
      </div>
    </Router>
  );
}

export default Layout;
