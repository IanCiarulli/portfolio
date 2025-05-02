import { Header } from './components/Header/header';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="flex h-full w-full items-center justify-center">
        <Header />
        <div className="flex h-full flex-col items-center p-4 pt-30 sm:w-full md:w-3/5 lg:w-3/5">
          <p className="mt-1 text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            at, atque eligendi, maxime velit magni minus perferendis accusamus
            pariatur repudiandae iure rerum ipsum voluptatem dolore quae.
            Consectetur sint vitae nihil?
          </p>
          <p className="mt-1 text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            at, atque eligendi, maxime velit magni minus perferendis accusamus
            pariatur repudiandae iure rerum ipsum voluptatem dolore quae.
            Consectetur sint vitae nihil?
          </p>
          <p className="mt-1 text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            at, atque eligendi, maxime velit magni minus perferendis accusamus
            pariatur repudiandae iure rerum ipsum voluptatem dolore quae.
            Consectetur sint vitae nihil?
          </p>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
