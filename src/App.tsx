import { FC } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

const App: FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Features />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
