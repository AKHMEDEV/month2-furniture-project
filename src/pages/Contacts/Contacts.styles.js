import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 50px 0;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;
  }
`

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`

export const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`

export const Breadcrumb = styled.div`
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #999;
  display: flex;
  align-items: center;
  gap: 8px;
  
  .separator {
    color: #999;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Span = styled.span`
  color: #000;
  font-weight: 500;
`

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const MapWrapper = styled.div`
  position: relative;
  margin: 60px auto 0;
  width: 100%;
  height: 500px;
  
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: none;
  }
  
  @media (max-width: 768px) {
    height: 300px;
    margin: 40px auto 0;
  }
`

export const MapContentBox = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  align-items: center;
  justify-content: center;
  z-index: 10;
  max-width: 950px;
  min-width: 300px;
  
  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 20px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  @media (max-width: 400px) {
    margin-bottom: 20px;
  }
`

export const InfoItem = styled.div`
  font-family: "Manrope", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const SubmitButton = styled.button`
  background: #333;
  height: 50px;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #555;
  }
  
  &:active {
    background: #222;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`
