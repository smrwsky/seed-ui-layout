import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { RenderFn } from '../../types/RenderFn';
import { axe, create } from '../../utils/test-utils';

import Space, { SpaceProps } from './Space';

describe('Space', () => {
  const setup = (renderFn: RenderFn, props?: SpaceProps) =>
    renderFn(<Space {...props} />);

  it('should render correctly with default props', () => {
    const actual = setup(create);
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with as prop', () => {
    const actual = setup(create, { as: 'section' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with children prop', () => {
    const actual = setup(create, { children: <p>Element with text.</p> });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with children array prop', () => {
    const actual = setup(create, {
      children: [
        <p key="0">Element with text 1.</p>,
        <p key="2">Element with text 2.</p>,
      ],
    });

    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with align prop', () => {
    const actual = setup(create, { align: 'center' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with direction prop', () => {
    const actual = setup(create, { direction: 'column' });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with gutter prop', () => {
    const actual = setup(create, { gutter: 3 });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with justify prop', () => {
    const actual = setup(create, { justify: 'center' });
    expect(actual).toMatchSnapshot();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = setup(renderToStaticMarkup);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
