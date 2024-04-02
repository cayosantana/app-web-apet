import styled from "styled-components";
import { GlobalStyle } from "./style/globalStyles";

function App() {

  const Title = styled.h1`
    color: orange;
  `;
  
  return (
    <>
      <GlobalStyle/>
      <Title>Teste Apet</Title>
      
    </>
  )
}

export default App
