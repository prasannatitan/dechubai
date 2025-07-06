import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function slider(props) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={2}

            loop
            autoplay={{ delay: 3000 }}
            className="w-full"
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                },
                640: {
                    slidesPerView: 2.5,
                },
                1024: {
                    slidesPerView: 3.5,
                },
            }}
        >
            {props.sliderData.map((items, index) => {
                return (
                    <SwiperSlide key={index} className='p-4 max-sm:p-3'>

                        <div className='in-sl overflow-hidden rounded-[25px] max-sm:rounded-[18px]'>
                            <img src={items.img} alt="Slide 1" />
                            <div className='absolute bottom-0 bg-white w-full flex justify-between h-[120px] max-md:h-[100px] max-sm:h-[90px] items-center px-6 max-sm:px-3 rounded-[25px] max-sm:rounded-[17px]'>
                                <p className='bg-[linear-gradient(129.38deg,#643A97_10.36%,#2B045B_103.96%)] bg-clip-text text-transparent md:text-[24px] max-md:text-[19px] max-sm:text-[16px] max-sm:leading-[20px] max-md:leading-[24px]  font-semibold max-w-[220px] leading-[30px]'>{items.text}</p>
                                <Link to={props.url}>
                                    <svg className="max-md:w-[43px] max-sm:w-[33px] " width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_136_723)">
                                            <path d="M29.9585 16.8797H22.0556C21.5442 16.8797 21.1296 16.4651 21.1296 15.9537C21.1296 15.4423 21.5441 15.0278 22.0556 15.0278H32.1942C32.7056 15.0278 33.1201 15.4424 33.1201 15.9537V26.0923C33.1201 26.6036 32.7056 27.0183 32.1942 27.0183C31.6829 27.0183 31.2683 26.6037 31.2683 26.0923V18.1886L17.1353 32.3216C16.9544 32.5024 16.7175 32.5929 16.4806 32.5929C16.2437 32.5929 16.0067 32.5024 15.8259 32.3216C15.4642 31.96 15.4642 31.3739 15.8259 31.0123L29.9585 16.8797Z" fill="url(#paint0_linear_136_723)" />
                                            <path d="M7.32236 7.32236C12.0442 2.60059 18.3219 0 25 0C31.6777 0 37.9558 2.60059 42.6776 7.32236C47.3995 12.0441 50 18.3219 50 25C50 31.6777 47.3994 37.9558 42.6776 42.6776C37.9559 47.3995 31.6777 50 25 50C18.3219 50 12.0442 47.3994 7.32236 42.6776C2.60049 37.9559 0 31.6777 0 25C0 18.3219 2.60059 12.0442 7.32236 7.32236ZM8.63174 41.3683C13.0036 45.7402 18.8169 48.1481 25 48.1481C31.1831 48.1481 36.9959 45.7402 41.3683 41.3683C45.7402 36.9959 48.1481 31.1831 48.1481 25C48.1481 18.8169 45.7402 13.0036 41.3683 8.63174C36.9959 4.25977 31.1831 1.85186 25 1.85186C18.8169 1.85186 13.0036 4.25977 8.63174 8.63174C4.25977 13.0036 1.85186 18.8169 1.85186 25C1.85186 31.1831 4.25977 36.9959 8.63174 41.3683Z" fill="url(#paint1_linear_136_723)" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_136_723" x1="23.9663" y1="7.91096" x2="6.07851" y2="22.5915" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#643A97" />
                                                <stop offset="1" stopColor="#2B045B" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_136_723" x1="23.9437" y1="-20.2586" x2="-26.9747" y2="21.5292" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#643A97" />
                                                <stop offset="1" stopColor="#2B045B" />
                                            </linearGradient>
                                            <clipPath id="clip0_136_723">
                                                <rect width="50" height="50" fill="white" transform="matrix(-1 0 0 1 50 0)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>

                            </div>

                        </div>

                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
}
