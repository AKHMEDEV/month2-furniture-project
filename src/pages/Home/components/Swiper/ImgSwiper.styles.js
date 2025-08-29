import styled from "styled-components";

export const PromoWrapper = styled.div`
    margin-inline:auto;
    display: flex;
    justify-content: center;
    max-width: 1714px;
    padding: 40px 0;
    background-color: #f2f2f2;
    width: 100%;
    border-radius:50px;
    @media (min-width: 1700px) {
      padding-inline:70px;
    }
`;      

export const ImgContainer = styled.div`
    margin-inline:98px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    
    & img{
        width: 453px; 
        height: 453px;
    };

    & div{
        width: 615px;
    };
    @media (max-width: 1000px) {
      flex-direction: column-reverse;
      justify-content: center;
      & img{
        width: 403px; 
        height: 403px;
      };
      & div {
        width: 370px;
      }
    }

    @media (max-width:756px) {
      padding:10px;
      & img{
        width: 270px;
        height: 270px;
      }
      & div{
        width: 280px;
        & h1{
          font-size: larger;
        }
      }
    }
`

export const StyledSwiperWrapper = styled.div`
  position: relative;
  max-width: 1600px;
  width: 100%;

  .swiper-pagination {
    position: absolute;
    left: 87%;
    bottom: 40px;
    display: flex;
    gap: 1px;          
    z-index: 10;

    @media (min-width: 1400px) {
      left: 90%;
    }

    @media (max-width: 1200px)  {
      left: 50%;
    }
  }

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background-color: #ccc;
    opacity: 1;
    border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background-color: #000;
    box-shadow: 0 0 8px 4px rgba(170, 170, 170, 0.5);
  }
`
