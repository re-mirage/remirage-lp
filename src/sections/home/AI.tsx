import Stack from '@/components/containers/Stack';
import React from 'react';
import Image from 'next/image';
import TextGenerateEffect from '@/components/text/text-generate-effect';
import SectionContainer from '@/components/containers/SectionContainer';

const words =
  'Unlock the power of the future with our cutting-edge Machine Learning and AI services Community sharing Elevate your business with our AI and Machine Learning services';

export default function AI() {
  return (
    <SectionContainer>
      <Stack spacing={40}>
        <TextGenerateEffect words={words} />
        <div className="relative w-full mx-auto">
          <Image
            src="/assets/hand.png"
            width="1000"
            height="1000"
            layout="responsive"
            className="object-cover object-left-top rounded-xl"
            alt="AI and Machine Learning"
          />
        </div>
      </Stack>
    </SectionContainer>
  );
}
