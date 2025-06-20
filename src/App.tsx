import { Hero, TechStack } from './components';

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start pt-6 font-mono lg:mx-auto lg:w-7/12 lg:pt-12">
      <Hero />
      <TechStack
        title="Main Stack"
        icons={[
          'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        ]}
      />
    </div>
  );
}

export default App;
