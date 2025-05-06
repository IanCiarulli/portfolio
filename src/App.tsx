import { AboutMe, Header, ProjectItem } from './components';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="flex h-full w-full items-center justify-center font-mono">
        <Header />
        <div className="flex h-full flex-col items-center p-4 pt-30 sm:w-full md:w-3/5 lg:w-3/5">
          <AboutMe />
          <ProjectItem />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
