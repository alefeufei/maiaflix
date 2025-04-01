import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";


function App() {

  return (
    <>
    <Header/>
    <Banner image="home"/>
    <Container>
    <h1>Hello World!</h1>
    <p>Olá mundo! Estou Aprendendo React</p>
    </Container>
    <Footer/>
    </>
  );
}

export default App
