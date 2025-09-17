import { useEffect } from 'react';
import { ImageKitProvider } from '@imagekit/react';
import {
  ExperienceSection,
  Footer,
  Hero,
  Menu,
  ProjectsSection,
  SlidingCarousel,
} from './components';
import { IK_ENDPOINT } from './constants';
import { Projects } from './store';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <ImageKitProvider urlEndpoint={IK_ENDPOINT}>
      <div
        className="font-inter flex min-h-full w-full flex-col items-center justify-start pt-18 lg:mx-auto lg:w-7/12 lg:pt-24"
        id="home"
      >
        <Menu />
        <Hero />
        <SlidingCarousel />
        <ProjectsSection items={Projects} />
        <ExperienceSection />
      </div>
      <Footer />
    </ImageKitProvider>
  );
}

export default App;
