import { cn } from '@/lib/utils';
import React from 'react';

interface StackProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: number;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  children: React.ReactNode;
  className?: string;
}

export default function Stack({
  direction = 'row',
  spacing = 0,
  alignItems = 'stretch',
  justifyContent = 'start',
  children,
  className,
}: StackProps) {
  const directionClasses = {
    row: 'flex-row',
    column: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'column-reverse': 'flex-col-reverse',
  };

  const alignItemsClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyContentClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    'space-between': 'justify-between',
    'space-around': 'justify-around',
    'space-evenly': 'justify-evenly',
  };

  const spacingClasses = (spacing: number) => {
    return spacing ? `gap-${spacing}` : '';
  };

  return (
    <div
      className={cn(
        'flex',
        directionClasses[direction],
        alignItemsClasses[alignItems],
        justifyContentClasses[justifyContent],
        spacingClasses(spacing),
        className
      )}
    >
      {children}
    </div>
  );
}
