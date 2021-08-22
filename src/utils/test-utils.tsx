import React from 'react';
import { render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { configureAxe } from 'jest-axe';

import { RenderFn } from '../types/RenderFn';

export const axe = configureAxe({
  rules: {
    // disable landmark rules when testing isolated components
    region: { enabled: false },
  },
});

export function create(
  ...args: Parameters<RenderFn>
): ChildNode | HTMLCollection | null {
  const { container } = render(...args);
  return container.children.length > 1
    ? container.children
    : container.firstChild;
}
export function renderToHtml(component: React.ReactElement): string {
  return renderToStaticMarkup(component);
}
