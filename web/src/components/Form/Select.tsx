import * as SelectUI from '@radix-ui/react-select';
import { CaretDown, CaretUp } from "phosphor-react";

interface Props {
    items: ItemsProps[],
    placeholder: string;
    onValueChange: (value: string) => void;
}

interface ItemsProps {
    value: string; 
    text: string; 
}

export function Select({ placeholder, items, onValueChange }: Props) {
    return (
        <SelectUI.Root onValueChange={onValueChange}>
            <SelectUI.Trigger className='bg-zinc-900 py-3 px-4 rounded text-sm inline-flex items-center justify-between text-zinc-500'>
                <SelectUI.Value placeholder={placeholder} />
                <SelectUI.Icon>
                    <CaretDown />
                </SelectUI.Icon>
            </SelectUI.Trigger>

            <SelectUI.Portal>
                <SelectUI.Content className='bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-500 max-h-2'>
                    <SelectUI.ScrollUpButton>
                        <CaretUp />
                    </SelectUI.ScrollUpButton>
                    <SelectUI.Viewport className='flex flex-col gap-4'>
                        {items.map(item => (
                            <SelectUI.Item value={item.value} key={item.value} className='hover:text-zinc-600 cursor-pointer'>
                                <SelectUI.ItemText>{item.text}</SelectUI.ItemText>
                                <SelectUI.ItemIndicator />
                            </SelectUI.Item>
                        ))}
                    </SelectUI.Viewport>
                    <SelectUI.ScrollDownButton>
                        <CaretDown />
                    </SelectUI.ScrollDownButton>
                </SelectUI.Content>
            </SelectUI.Portal>
        </SelectUI.Root>
    );
}