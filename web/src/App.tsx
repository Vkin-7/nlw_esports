import { MagnifyingGlassPlus } from 'phosphor-react';
import logoImg from './assets/logo_nlw.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game_1.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game title</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game_2.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game title</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game_3.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game title</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game_4.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game title</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game_5.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game title</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game_6.png' alt='' />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game title</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-[#2A2634] self-stretch rounded-lg mt-8 px-8 py-6 flex justify-between items-center relative overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:w-full before:bg-nlw-gradient before:h-1">
        <div>
          <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
          <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
        </div>

        <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>

      </div>
    </div>
  )
}

export default App
