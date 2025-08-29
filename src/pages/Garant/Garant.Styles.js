import styled from "styled-components";

export const GarantWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 30px 16px;
        gap: 32px;
    }
`;

export const GarantFlexWrapper = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const GoBackActionGarant = styled.div`
    p .navlink {
        text-decoration: none;
        color: #454545;
    }
`;

export const GarantAction = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const GarantText = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;