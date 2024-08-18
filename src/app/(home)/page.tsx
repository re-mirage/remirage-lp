import Container from '@/layouts/home/Container';
import AI from '@/sections/home/AI';
import Exampels from '@/sections/home/Exampels';
import Hero from '@/sections/home/Hero';
import ML from '@/sections/home/ML';
import Technologies from '@/sections/home/Technologies';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Container>
        <Exampels />
        <AI />
        <Technologies />
        <ML />
      </Container>
    </Fragment>
  );
}
