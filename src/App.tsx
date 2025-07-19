import { ImageKitProvider } from '@imagekit/react';
import { Experience, Hero, Menu, ProjectsList, TechStack } from './components';
import { IK_ENDPOINT } from './constants';
import { techStackData } from './data/stackData';
import { Projects } from './store';

function App() {
  return (
    <ImageKitProvider urlEndpoint={IK_ENDPOINT}>
      <div
        className="font-inter flex h-full w-full flex-col items-center justify-start pt-18 lg:mx-auto lg:w-7/12 lg:pt-24"
        id="home"
      >
        <Menu />
        <Hero />
        <TechStack data={techStackData} title="Tech Stack" />
        <ProjectsList items={Projects} title="Projects" />
        <Experience />
        {/* <Footer> */}
      </div>
    </ImageKitProvider>
  );
}

export default App;
