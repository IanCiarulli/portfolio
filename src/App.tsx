import { Experience, Hero, Menu, TechStack } from './components';
import { TECHNOLOGIES_DATA } from './utils';

function App() {
  return (
    <div className="font-inter flex h-full w-full flex-col items-center justify-start pt-18 lg:mx-auto lg:w-7/12 lg:pt-24">
      <Menu />
      <Hero />
      <TechStack data={TECHNOLOGIES_DATA} title="Main Stack" />
      <Experience />
    </div>
  );
}

export default App;
