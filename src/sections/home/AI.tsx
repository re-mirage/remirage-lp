import Stack from '@/components/containers/Stack';
import TextRevealCard, {
  TextRevealCardDescription,
  TextRevealCardTitle,
} from '@/components/text/text-reveal-card';
import React from 'react';
import Image from 'next/image';
import TextGenerateEffect from '@/components/text/text-generate-effect';
import SectionContainer from '@/components/containers/SectionContainer';
const words =
  'Unlock the power of the future with our cutting-edge Machine  Learning and AI services Community sharing Elevate your business with our AI  and Machine Learning services';
export default function AI() {
  return (
    <SectionContainer>
      <Stack spacing={40}>
        <TextGenerateEffect words={words} />
        <Image
          src="/assets/hand.png"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%]  -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          alt={''}
        />
      </Stack>
    </SectionContainer>
  );
}
