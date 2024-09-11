import Container from '@/layouts/home/Container';
import AI from '@/sections/home/AI';
import Expertise from '@/sections/home/Expertise';
import Hero from '@/sections/home/Hero';
import ML from '@/sections/home/ML';
import OurClients from '@/sections/home/OurClients';
import Technologies from '@/sections/home/Technologies';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Container>
        <Expertise />
        <AI />
        <Technologies />
        <ML />
        <OurClients />
      </Container>
    </Fragment>
  );
}
