import styled from "styled-components"

export const CatalogWrapper = styled.div`
    margin-inline:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:768px) {
        padding:10px
    }
`

export const LowerCatalog = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1200px;
    margin-bottom:100px;
    @media (max-width: 1200px) {
        & > div:nth-child(1) {
            display: none;
        }
    }
`;


export const KatalogWrapperComp = styled.div`
    width: 49%;
    height: 200px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background-color:rgba(242, 242, 242, 1);
    & img{
        background-color: rgba(242, 242, 242, 1);
    }
    @media (max-width: 768px) {
        /* width: 90%; */
    }

`;

export const RouteToKatalog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: space-between;
        
`;
