import React from 'react';
import { ImgWrapper, SwiperWrapper } from './Swiper.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Img1 from '../../assets/images/SwiperImage1.svg';
import Img2 from '../../assets/images/SwiperImage2.svg';
import Img3 from '../../assets/images/SwiperImage3.svg';
import LeftArrow from '../../assets/images/swiperLeftDark.svg';
import RightArrow from '../../assets/images/swiperRightDark.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

const SwiperSlideComponent = () => {
  return (
    <SwiperWrapper>
      <img src={LeftArrow} alt="Prev" className="swiper-button-prev" />
      <img src={RightArrow} alt="Next" className="swiper-button-next" />
      <div className="swiper-element"></div>

      <Swiper
        modules={[Navigation,Pagination]}
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el:'.swiper-element',
          clickable:true
        }}
            breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
      >
        <SwiperSlide>
          <ImgWrapper>
            <img src={Img1} alt="Slide 1" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <img src={Img2} alt="Slide 2" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <img src={Img3} alt="Slide 3" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <img src={Img1} alt="Slide 4" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <img src={Img2} alt="Slide 5" />
          </ImgWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <ImgWrapper>
            <img src={Img3} alt="Slide 6" />
          </ImgWrapper>
        </SwiperSlide>
      </Swiper>
    </SwiperWrapper>
  );
};

export default SwiperSlideComponent;
