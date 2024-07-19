import { HashRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Content from './Content';

function Layout() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Content />
        </main>
      </div>
    </Router>
  );
}

export default Layout;