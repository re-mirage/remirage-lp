import React from 'react';
import Image, { ImageProps } from 'next/image';

type LogoProps = Omit<ImageProps, 'src' | 'alt'>;

export default function Logo(props: LogoProps) {
  return (
    <Image
      {...props}
      src="/logo/logo.png"
      alt="logo"
      width={100}
      height={100}
      className="h-14 w-auto"
    />
  );
}
