import NavBar from '../components/organisms/NavBar';
import Title from '../components/atoms/Title';
import CardItem from '../components/molecules/CardItem';

function Services() {

  return (
    <>
      <NavBar />
      <Title text="Servicios" />
      <CardItem title="Servicio 1" text="Ofrecemos este servicio principalmente" titleTag="strong" />
      <CardItem title="Servicio 2" text="Ofrecemos este servicio adicional" titleTag="strong" />
      <CardItem title="Servicio 3" text="Ofrecemos este servicio con imágenes" titleTag="strong" image="https://picsum.photos/200/200"/>

    </>
  )
};

export default Services;
