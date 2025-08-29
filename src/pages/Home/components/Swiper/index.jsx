import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import PendantLight from "../../../../assets/images/pendantLamp.svg"
import 'swiper/css'
import 'swiper/css/pagination'
import { ImgContainer, PromoWrapper, StyledSwiperWrapper } from './ImgSwiper.styles'
import { Typography } from '../../../../components'

const ImgSwiper = () => {
  return (
    <StyledSwiperWrapper>
      <Swiper
        modules={[Pagination]}
        pagination={{clickable:true}}>
          {[...Array(8)].map((_,index)=>(
                  <SwiperSlide key={index}>
                  <PromoWrapper>
                    <ImgContainer>
                      <div>
                        <Typography styles={{marginBottom:'15px',lineHeight:1.2}} type="h1" text="Скидка 15%  на все подвесные светильники" />
                        <Typography styles={{background:'#454545',color:'#f2f2f2', borderRadius:'40px',padding:'10px',paddingInline:'20px',display:'inline-block',marginTop:'0'}} type="h1" text="до 5 февраля" />
                      </div>
                      <img src={PendantLight} alt="pendant light" />
                    </ImgContainer>
                  </PromoWrapper>
                </SwiperSlide>
          ))}
      </Swiper>
    </StyledSwiperWrapper>
  )
}

export default ImgSwiper
