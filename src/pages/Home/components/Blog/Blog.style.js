import styled from "styled-components";

export const Blogs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 50px;

  & div {
    & img {
    }

    & div {
      justify-content: space-between;
      display: flex;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
