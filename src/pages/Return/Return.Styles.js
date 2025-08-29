import styled from "styled-components";

export const ReturnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 30px 16px;
        gap: 32px;
    }
`;

export const GoBackAction = styled.div`
    p .navlink {
        text-decoration: none;
        color: #454545;
    }
`;

export const ReturnFlexWrapper = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ReturnAction = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ReturnText = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }

    li {
        color: #2F4DA3;
    }
`;