import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  margin: 2px auto;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

export const TopWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
    margin: 0;
    padding: 0;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  width: 80%;
  gap: 27px;

  .LinkStyleOff {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    width: 100%; /* mobilda kenglik */
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  font-size: 14px;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 100%; /* mobilda kenglik */
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* mobilda yashirilsin */
    margin: 0;
    padding: 0;
  }
`;

export const LogoWrapper = styled.div`
  .logo {
    text-decoration: none;
    color: inherit;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 28px;

  .catalogIcon {
    background-color: white;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

export const IconStyle = styled.div`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    position: relative;
  }
`;

export const InsideMobileWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const MobileIcon = styled.div`
  @media (max-width: 768px) {
    width: 30px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

export const MobileRightSide = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 20px;
    margin-top: 13px;
  }
`;

export const MobileLeftSide = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 26px; 
  }
`;

export const CompanyName = styled.p`
  font-size: 29px;
  margin-right: 10px;
  color: #454545;
`;

export const DropdownMenu = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 10px 0;

    .DropLinks {
      width: 100%;
    }

    .DropLinks .DropLink {
      display: flex;
      justify-content: center;
      text-decoration: none;
      width: 200px;
      border-top: 1px solid #ccc;
      color: #454545;
      padding: 10px 0;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;