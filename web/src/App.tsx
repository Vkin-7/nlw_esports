import { useEffect, useState } from 'react';
import axios from 'axios';
import logoImg from './assets/logo_nlw.svg';
import { AdForm } from './components/AdForm';

import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import { Modal } from './components/Modal';
import { Slider } from './components/Slider';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(res => {
        setGames(res.data);
      });

  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

      </div>

      <Slider>
        {games.map(game => 
            <GameBanner 
              key={game.id} 
              title={game.title} 
              bannerUrl={game.bannerUrl} 
              adsCount={game._count.ads} />
          )}
      </Slider>

      <Modal title='Publique um anúncio' content={<AdForm />}>
        <CreateAdBanner />
      </Modal>
    </div>
  )
}

export default App
