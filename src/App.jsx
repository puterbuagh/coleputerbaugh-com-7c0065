import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import SiteLayout from './components/layout/SiteLayout.jsx';
import Home from './pages/Home.jsx';
import WorkWithMe from './pages/WorkWithMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'oklch(0.18 0.01 60)',
            color: 'oklch(0.97 0.01 80)',
            border: '1px solid oklch(0.25 0.01 60)',
            fontFamily: 'var(--font-body)',
          },
        }}
      />
    </>
  );
}

export default App;
