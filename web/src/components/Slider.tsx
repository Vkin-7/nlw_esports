import { CaretLeft, CaretRight } from 'phosphor-react';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Slider(props: Props) {
    return (
        <div className='w-full relative rounded-lg overflow-hidden'>
            <Swiper
                className='w-full z-0'
                spaceBetween={15}
                slidesPerView={6}
                modules={[Navigation]}
                navigation={{ 
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
            >
                {props.children}
            </Swiper>

            <button className='prev absolute top-0 left-0 bottom-0 w-[5%] bg-slider-gradient-left z-10 flex justify-center items-center disabled:opacity-80'>
                <CaretLeft 
                    className='text-white text-4xl'
                />
            </button>
            <button className='next absolute top-0 right-0 bottom-0 w-[5%] bg-slider-gradient-right z-10 flex justify-center items-center disabled:opacity-80'>
                <CaretRight 
                    className='text-white text-4xl'
                />
            </button>
        </div>
    );
}