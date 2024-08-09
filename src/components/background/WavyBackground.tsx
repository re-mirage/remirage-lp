'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

export default function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  [key: string]: any;
}) {
  const { theme, systemTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== 'undefined' &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome')
    );
  }, []);

  useEffect(() => {
    const noise = createNoise3D();
    let ctx: CanvasRenderingContext2D | null = null;
    let animationId: number;
    let nt = 0;

    const getSpeed = () => (speed === 'slow' ? 0.001 : 0.002);

    const waveColors = colors ?? ['#8A0BFF', '#9C33FF', '#AD5AFF', '#BF80FF', '#D1A6FF'];

    const getDefaultBackgroundColor = (colorMode = theme) => {
      if (colorMode === 'dark') return '#000000';
      if (colorMode === 'light') return '#FFFFFF';
      return systemTheme === 'dark' ? '#000000' : '#FFFFFF';
    };

    const drawWave = (n: number) => {
      if (!ctx) return;
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < ctx.canvas.width; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + ctx.canvas.height * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      if (!ctx) return;
      ctx.fillStyle = backgroundFill || getDefaultBackgroundColor();
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    const init = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
      render();
    };

    init();

    const handleResize = () => {
      if (!ctx) return;
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme, systemTheme, colors, waveWidth, backgroundFill, blur, speed, waveOpacity]);

  return (
    <div className={cn('relative w-full overflow-hidden', containerClassName)}>
      <canvas
        className="absolute inset-0 w-full h-full"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div
        className={cn('relative z-10 container mx-auto px-4 sm:px-6 lg:px-8', className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
