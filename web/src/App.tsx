import { useEffect, useState } from 'react';
import axios from 'axios';
import { SwiperSlide } from 'swiper/react';

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
    axios('http://192.168.0.110:3333/games')
      .then(res => {
        setGames(res.data);
      });

  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10 md:mt-20 md:mb-0">
      <img className='w-48 md:w-auto' src={logoImg} alt="" />

      <h1 className='text-4xl md:text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <Slider>
        {games.map(game => 
            (
              <SwiperSlide key={game.id} >
                <GameBanner 
                  title={game.title} 
                  bannerUrl={game.bannerUrl} 
                  adsCount={game._count.ads} />
              </SwiperSlide>
            )
          )}
      </Slider>

      <Modal title='Publique um anúncio' content={<AdForm />}>
        <CreateAdBanner />
      </Modal>
    </div>
  )
}

export default App
