
import { Hero } from './COMPONENTES/Hero';
import { Who } from './COMPONENTES/Who';
import { Works } from './COMPONENTES/Works';
import { Contact } from './COMPONENTES/Contact';
import styled from 'styled-components';
import { Test } from './COMPONENTES/Test';


const Container = styled.div`
  height: 100vh;
 
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;




function App() {


  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
  
    </Container>
  );
}

export default App;
