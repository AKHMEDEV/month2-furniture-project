import styled from 'styled-components'

export const CardWrapper = styled.div`
    padding: 15px;
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    & > div:nth-of-type(2) {
        align-items: center;
    }
`;

export const Wrapper = styled.div`
    @media (max-width:1100px) {
        flex-wrap:wrap;
        justify-content: center;
    }
`
