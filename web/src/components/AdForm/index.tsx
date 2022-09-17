import * as Dialog from '@radix-ui/react-dialog';
import { Check, GameController } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from '../Form/Input';
import { Select } from '../Form/Select';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
}

export function AdForm() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [gameId, setGameId] = useState<string>('');
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(res => {
        setGames(res.data);
      });

  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    if(weekDays.length == 0 || gameId.length == 0) {
      alert('Preencha todos os campos!')
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData);

    const data = { 
      ...formDataObject,
      yearsPlaying: +formDataObject.yearsPlaying,
      weekDays: weekDays.map(Number),
      useVoiceChannel
    };

    try {
      const result = await axios.post(`http://localhost:3333/game/${gameId}/ads`, data);

      if(result.status === 201)
        alert('Anúncio criado com sucesso!');
      else 
        alert('Ocorreu um erro inesperado ao criar o anúncio!');
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro ao criar o anúncio!');
    }
  }
  
    return (
        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="game" className='font-semibold'>Qual o game?</label>
            <Select 
              placeholder='Selecione o game que deseja jogar' 
              items={games.map(game => {return { text: game.title, value: game.id }})}
              onValueChange={setGameId} />
          </div>
    
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input id="name" name="name" type="text" placeholder='Como te chamam dentro do game?' required />
          </div>
    
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input id="yearsPlaying" name="yearsPlaying" type="number" min={0} step={1} placeholder='Tudo bem ser ZERO' required />
            </div>
    
            <div className='flex flex-col gap-2'>
              <label htmlFor="discord">Qual seu discord?</label>
              <Input id="discord" name="discord" type="text" placeholder='Usuario#0000' required />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <ToggleGroup.Root type='multiple' className="flex flex-row gap-2" value={weekDays} onValueChange={setWeekDays}>
                <ToggleGroup.Item value="0" title="Domingo" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('0') && 'bg-violet-500'} `}>D</ToggleGroup.Item>
                <ToggleGroup.Item value="1" title="Segunda" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('1') && 'bg-violet-500'} `}>S</ToggleGroup.Item>
                <ToggleGroup.Item value="2" title="Terça" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('2') && 'bg-violet-500'} `}>T</ToggleGroup.Item>
                <ToggleGroup.Item value="3" title="Quarta" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('3') && 'bg-violet-500'} `}>Q</ToggleGroup.Item>
                <ToggleGroup.Item value="4" title="Quinta" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('4') && 'bg-violet-500'} `}>Q</ToggleGroup.Item>
                <ToggleGroup.Item value="5" title="Sexta" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('5') && 'bg-violet-500'} `}>S</ToggleGroup.Item>
                <ToggleGroup.Item value="6" title="Sábado" className={`w-8 h-8 rounded bg-zinc-900 ${weekDays.includes('6') && 'bg-violet-500'} `}>S</ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
    
          <div className='flex flex-col gap-2'>
              <label htmlFor="hourStart">Qual o horário do dia?</label>
              <div className='grid grid-cols-2 gap-6'>
                <Input id="hourStart" name="hourStart" type="time" placeholder='De' required />
                <Input id="hourEnd" name="hourEnd" type="time" placeholder='Até' required />
              </div>
          </div>

          <label className='mt-2 flex items-center gap-2 text-sm'>
            <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900' 
                checked={useVoiceChannel}
                onCheckedChange={
                  (checked) => {
                    checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false);
                  } 
              }>
              <Checkbox.Indicator>
                <Check className='w-4 h-4 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                Cancelar
            </Dialog.Close>
            <button 
                type="submit" 
                className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                <GameController size={24} />
                Encontrar duo
            </button>
          </footer>
        </form>
      );
}