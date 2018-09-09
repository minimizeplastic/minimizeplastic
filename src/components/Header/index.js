import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;
  background-color: #388E3C;
  color: white;
  padding: 10px;

  @media(max-width:600px){
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;
