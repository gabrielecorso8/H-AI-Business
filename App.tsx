import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Simulating ScrollRestoration for HashRouter */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;