import { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { CaretLeft, CaretRight } from 'phosphor-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Slider(props: Props) {
    
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 6,
            spacing: 15,
        },
    });

    return (
            <div ref={sliderRef} 
                className={
                    `${props.className} 
                    keen-slider relative rounded-lg overflow-hidden`
                }>
                {props.children}
            </div>
    );
}