import NavBar from '../components/organisms/NavBar';
import Title from '../components/atoms/Title';

function App() {

  return (
    <>
      <NavBar />
      <Title text="HidalVent" />
      <Title text="Sobre Nosotros" as="h2" />
    </>
  )
};

export default App;
