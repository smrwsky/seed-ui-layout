import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { RenderFn } from '../../types/RenderFn';
import { axe, create } from '../../utils/test-utils';

import Hidden, { HiddenProps } from './Hidden';

describe('Hidden', () => {
  const setup = (renderFn: RenderFn, props?: HiddenProps) =>
    renderFn(<Hidden {...props} />);

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

  it('should render correctly with xsDown prop', () => {
    const actual = setup(create, { xsDown: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with sm prop', () => {
    const actual = setup(create, { sm: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with smDown prop', () => {
    const actual = setup(create, { smDown: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with smUp prop', () => {
    const actual = setup(create, { smUp: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with md prop', () => {
    const actual = setup(create, { md: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with mdDown prop', () => {
    const actual = setup(create, { mdDown: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with mdUp prop', () => {
    const actual = setup(create, { mdUp: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with lg prop', () => {
    const actual = setup(create, { lg: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with lgDown prop', () => {
    const actual = setup(create, { lgDown: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with lgUp prop', () => {
    const actual = setup(create, { lgUp: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xl prop', () => {
    const actual = setup(create, { xl: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xlDown prop', () => {
    const actual = setup(create, { xlDown: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xlUp prop', () => {
    const actual = setup(create, { xlUp: true });
    expect(actual).toMatchSnapshot();
  });

  it('should render correctly with xxlUp prop', () => {
    const actual = setup(create, { xxlUp: true });
    expect(actual).toMatchSnapshot();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = setup(renderToStaticMarkup);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
