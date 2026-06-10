import React, { type ComponentPropsWithoutRef } from 'react';
import { icons } from './icons';

// Extract the valid keys from our icon map dynamically
export type IconName = keyof typeof icons;

// Extend standard SVG attributes while overriding or adding custom ones
interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  name: IconName;
  size?: number | string;
  color?: string;
}

const Icon = ({ name, size = 24, color, style, ...props }: IconProps) => {
  const iconElement = icons[name];

  if (!iconElement) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  // Combine custom sizing and coloring with any incoming inline styles
  const combinedStyle: React.CSSProperties = {
    width: size,
    height: size,
    color, 
    ...style,
  };

  // Clone the SVG node and safely pass the props down
  return React.cloneElement(iconElement, {
    style: combinedStyle,
    ...props,
  });
};

export default Icon;