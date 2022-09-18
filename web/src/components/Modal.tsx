import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
    children?: | React.ReactNode | React.ReactNode[];
    title: string;
    content: React.ReactNode;
}

export function Modal({ children, title, content }: ModalProps) {
    return (
        <Dialog.Root>
            {children}

            <Dialog.Portal>
                <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
                
                <Dialog.Content className='w-full h-full md:h-auto fixed bg-[#2A2634] flex justify-center items-center flex-col md:items-start px-4 py-8 md:py-8 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:w-[480px] shadow-lg shadow-black/25 overflow-hidden'>
                    <Dialog.Title className='text-3xl font-black'>{title}</Dialog.Title>

                    {content}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}