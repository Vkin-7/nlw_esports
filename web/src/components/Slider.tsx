import { CaretLeft, CaretRight } from 'phosphor-react';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Slider(props: Props) {
    return (
        <div className='md:w-full w-[90%] relative rounded-lg overflow-hidden mt-5 md:mt-16'>
            <Swiper
                className='w-full z-0 overflow-hidden rounded-lg'
                breakpoints={{
                    320: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3.5,
                        spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 5.5,
                        spaceBetween: 15
                    }
                }}
                spaceBetween={15}
                modules={[Navigation]}
                navigation={{ 
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
            >
                {props.children}
            </Swiper>

            <button className='prev rounded-lg absolute top-0 left-0 bottom-0 w-[15%] md:w-[5%] bg-slider-gradient-left flex justify-center items-center disabled:opacity-80 z-0'>
                <CaretLeft 
                    className='text-white text-4xl'
                />
            </button>
            <button className='next rounded-lg absolute top-0 right-0 bottom-0 w-[15%] md:w-[5%] bg-slider-gradient-right flex justify-center items-center disabled:opacity-80 z-0'>
                <CaretRight 
                    className='text-white text-4xl'
                />
            </button>
        </div>
    );
}