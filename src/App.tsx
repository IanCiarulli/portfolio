import { Hero, Menu, TechStack } from './components';
import { TECHNOLOGIES_DATA } from './utils';

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start pt-6 font-mono lg:mx-auto lg:w-7/12 lg:pt-12">
      <Menu />
      <Hero />
      <TechStack data={TECHNOLOGIES_DATA} title="Main Stack" />
    </div>
  );
}

export default App;
