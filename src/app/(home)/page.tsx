import Container from '@/layout/Container';
import AI from '@/sections/home/AI';
import Exampels from '@/sections/home/Exampels';
import Hero from '@/sections/home/Hero';
import ML from '@/sections/home/ML';
import Technologies from '@/sections/home/Technologies';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Exampels />
      <AI />
      <Technologies />
      <ML />
    </Container>
  );
}
