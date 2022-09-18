import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
    return (
        <div className="w-[90%] md:w-full self-center bg-[#2A2634] rounded-lg mt-8 px-8 py-6 flex flex-col md:flex-row justify-between items-center relative overflow-hidden before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:w-full before:bg-nlw-gradient before:h-1">
            <div>
                <strong className='text-xl md:text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
                <span className='text-zinc-400 block mt-1 mb-2 md:mb-0'>Publique um anúncio para encontrar novos players!</span>
            </div>

            <Dialog.Trigger className='w-full md:w-auto py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center justify-center gap-3'>
                <MagnifyingGlassPlus size={24} />
                Publicar anúncio
            </Dialog.Trigger>

        </div>
    );
}