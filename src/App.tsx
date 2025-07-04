import { Experience, Hero, Menu, TechStack } from './components';
import { TECHNOLOGIES_DATA } from './utils';
import GridSection from './components/GridSection/gridSection';
import { PROJECTS_LIST } from './mockGridItems';
import { ImageKitProvider } from '@imagekit/react';

function App() {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/kd907zpil">
      <div
        className="font-inter flex h-full w-full flex-col items-center justify-start pt-18 lg:mx-auto lg:w-7/12 lg:pt-24"
        id="home"
      >
        <Menu />
        <Hero />
        <TechStack data={TECHNOLOGIES_DATA} title="Main Stack" />
        <GridSection items={PROJECTS_LIST} />
        <Experience />
      </div>
    </ImageKitProvider>
  );
}

export default App;
