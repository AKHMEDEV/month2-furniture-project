import styled from "styled-components";

export const KatalogWrapper = styled.div`
    max-width: 375px;
    width: 100%;
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
    
`;

export const RouteToKatalog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: space-between;
        
`;
