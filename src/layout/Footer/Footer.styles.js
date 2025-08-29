import { TbBackground } from "react-icons/tb";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
    padding: 79px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F2F2F2;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-left: 16px;
    }
`;

export const FooterLogoWrapper = styled.div`
    display: flex;
    gap: 15px;
    cursor: pointer;
`;

export const InfoWrapper = styled.div` 
`;

export const GroupWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const GroupStyle = styled.div`
    border: 1px solid black;
    padding: 0 16px;
    border-radius: 50%;
`;

export const CustomersWrapper = styled.div`
    .insideLinkText {
        color: #454545;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: inherit;
            border-bottom: 1px solid black;
        }
    }   
`;

export const ProductWrapper = styled.div`
    display: flex;
    gap: 70px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const FirstPage = styled.div`
    .insideLinkText {
        color: #454545;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: inherit;
            border-bottom: 1px solid black;
        }
    }
`;

export const SecondPage = styled.div`
    margin-top: 46px;
    .insideLinkText {
        color: #454545;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: inherit;
            border-bottom: 1px solid black;
        }
    }
    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

